"""JLPT N4 Study App - FastAPI Backend with SQLite."""
import json
import os
import sqlite3
from datetime import date, datetime, timedelta
from typing import Literal, Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

# Database setup
DB_PATH = os.path.join(os.path.dirname(__file__), "db", "jlpt_n4.db")
os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)


def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_db()
    conn.executescript("""
        CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP,
            current_phase INTEGER DEFAULT 1,
            current_week INTEGER DEFAULT 1,
            streak INTEGER DEFAULT 0
        );

        CREATE TABLE IF NOT EXISTS lesson_progress (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT NOT NULL,
            lesson_id TEXT NOT NULL,
            status TEXT DEFAULT 'not_started',
            completed_skills TEXT DEFAULT '[]',
            completed_at TEXT,
            score REAL,
            FOREIGN KEY (user_id) REFERENCES users(id),
            UNIQUE(user_id, lesson_id)
        );

        CREATE TABLE IF NOT EXISTS vocabulary_progress (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT NOT NULL,
            word_id TEXT NOT NULL,
            status TEXT DEFAULT 'new',
            interval INTEGER DEFAULT 0,
            ease REAL DEFAULT 2.5,
            due_date TEXT,
            reviews INTEGER DEFAULT 0,
            last_review TEXT,
            FOREIGN KEY (user_id) REFERENCES users(id),
            UNIQUE(user_id, word_id)
        );

        CREATE TABLE IF NOT EXISTS kanji_progress (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT NOT NULL,
            kanji_id TEXT NOT NULL,
            status TEXT DEFAULT 'new',
            interval INTEGER DEFAULT 0,
            ease REAL DEFAULT 2.5,
            due_date TEXT,
            reviews INTEGER DEFAULT 0,
            last_review TEXT,
            FOREIGN KEY (user_id) REFERENCES users(id),
            UNIQUE(user_id, kanji_id)
        );

        CREATE TABLE IF NOT EXISTS quiz_results (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT NOT NULL,
            quiz_type TEXT NOT NULL,
            score INTEGER NOT NULL,
            total INTEGER NOT NULL,
            completed_at TEXT DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id)
        );

        CREATE TABLE IF NOT EXISTS daily_checklist (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT NOT NULL,
            date TEXT NOT NULL,
            listening INTEGER DEFAULT 0,
            speaking INTEGER DEFAULT 0,
            reading INTEGER DEFAULT 0,
            writing INTEGER DEFAULT 0,
            FOREIGN KEY (user_id) REFERENCES users(id),
            UNIQUE(user_id, date)
        );
    """)
    conn.commit()
    conn.close()


init_db()

app = FastAPI(title="JLPT N4 Study API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ============ Models ============

class CreateUser(BaseModel):
    name: str = Field(min_length=1, max_length=100)


class UpdateLessonProgress(BaseModel):
    lesson_id: str
    status: Literal["not_started", "in_progress", "completed"]
    completed_skills: list[Literal["listening", "speaking", "reading", "writing"]] = Field(
        default_factory=list
    )
    score: Optional[float] = None


class ReviewCard(BaseModel):
    card_id: str
    quality: Literal["again", "hard", "good", "easy"]


class UpdateDailyChecklist(BaseModel):
    date: str
    skill: Literal["listening", "speaking", "reading", "writing"]


class SubmitQuiz(BaseModel):
    quiz_type: str
    score: int
    total: int


# ============ Helpers ============

ALLOWED_SKILLS = {"listening", "speaking", "reading", "writing"}


def ensure_user_exists(conn: sqlite3.Connection, user_id: str) -> None:
    user = conn.execute("SELECT id FROM users WHERE id = ?", (user_id,)).fetchone()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")


def calculate_sm2(
    prev_interval: int, prev_ease: float, prev_reviews: int, quality: str
) -> dict:
    quality_map = {"again": 0, "hard": 1, "good": 2, "easy": 3}
    q = quality_map.get(quality, 2)
    interval = prev_interval
    ease = prev_ease
    reviews = prev_reviews

    if q == 0:
        reviews = 0
        interval = 1
    elif q == 1:
        interval = max(1, int(interval * 1.2))
        reviews += 1
    elif q == 2:
        if reviews == 0:
            interval = 1
        elif reviews == 1:
            interval = 6
        else:
            interval = int(interval * ease)
        reviews += 1
    else:  # easy
        if reviews == 0:
            interval = 4
        elif reviews == 1:
            interval = 10
        else:
            interval = int(interval * ease * 1.3)
        reviews += 1

    ease = max(1.3, ease + (0.1 - (3 - q) * (0.08 + (3 - q) * 0.02)))
    due_date = (date.today() + timedelta(days=max(1, interval))).isoformat()

    status = (
        "mastered"
        if (reviews >= 3 and ease >= 2.5)
        else ("review" if reviews >= 1 else "learning")
    )

    return {
        "status": status,
        "interval": interval,
        "ease": round(ease, 2),
        "due_date": due_date,
        "reviews": reviews,
    }


# ============ API Routes ============

@app.get("/health")
def health_check():
    return {"status": "ok", "version": "0.1.0"}


# Users
@app.post("/api/users")
def create_user(data: CreateUser):
    conn = get_db()
    import uuid
    user_id = str(uuid.uuid4())
    conn.execute("INSERT INTO users (id, name) VALUES (?, ?)", (user_id, data.name))
    conn.commit()
    conn.close()
    return {"id": user_id, "name": data.name}


@app.get("/api/users/{user_id}")
def get_user(user_id: str):
    conn = get_db()
    user = conn.execute("SELECT * FROM users WHERE id = ?", (user_id,)).fetchone()
    conn.close()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return dict(user)


@app.get("/api/users/{user_id}/progress")
def get_user_progress(user_id: str):
    conn = get_db()
    lessons = conn.execute(
        "SELECT * FROM lesson_progress WHERE user_id = ?", (user_id,)
    ).fetchall()
    vocab = conn.execute(
        "SELECT * FROM vocabulary_progress WHERE user_id = ?", (user_id,)
    ).fetchall()
    kanji = conn.execute(
        "SELECT * FROM kanji_progress WHERE user_id = ?", (user_id,)
    ).fetchall()
    quizzes = conn.execute(
        "SELECT * FROM quiz_results WHERE user_id = ? ORDER BY completed_at DESC LIMIT 10",
        (user_id,),
    ).fetchall()
    checklist = conn.execute(
        "SELECT * FROM daily_checklist WHERE user_id = ? ORDER BY date DESC LIMIT 30",
        (user_id,),
    ).fetchall()
    conn.close()
    return {
        "lessons": [dict(l) for l in lessons],
        "vocabulary": [dict(v) for v in vocab],
        "kanji": [dict(k) for k in kanji],
        "quizzes": [dict(q) for q in quizzes],
        "daily_checklist": [dict(c) for c in checklist],
    }


@app.get("/api/stats/{user_id}")
def get_stats(user_id: str):
    conn = get_db()
    lessons = conn.execute(
        "SELECT COUNT(*) as total, SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completed FROM lesson_progress WHERE user_id = ?",
        (user_id,),
    ).fetchone()
    vocab = conn.execute(
        "SELECT COUNT(*) as total, SUM(CASE WHEN status = 'mastered' THEN 1 ELSE 0 END) as mastered FROM vocabulary_progress WHERE user_id = ?",
        (user_id,),
    ).fetchone()
    kanji = conn.execute(
        "SELECT COUNT(*) as total, SUM(CASE WHEN status = 'mastered' THEN 1 ELSE 0 END) as mastered FROM kanji_progress WHERE user_id = ?",
        (user_id,),
    ).fetchone()
    user = conn.execute("SELECT streak FROM users WHERE id = ?", (user_id,)).fetchone()
    conn.close()
    return {
        "streak": user["streak"] if user else 0,
        "total_lessons_completed": lessons["completed"] if lessons else 0,
        "total_vocabulary_learned": vocab["total"] if vocab else 0,
        "total_vocabulary_mastered": vocab["mastered"] if vocab else 0,
        "total_kanji_learned": kanji["total"] if kanji else 0,
        "total_kanji_mastered": kanji["mastered"] if kanji else 0,
    }


# Lesson Progress
@app.post("/api/progress/{user_id}")
def update_lesson_progress(user_id: str, data: UpdateLessonProgress):
    conn = get_db()
    ensure_user_exists(conn, user_id)
    conn.execute(
        """INSERT INTO lesson_progress (user_id, lesson_id, status, completed_skills, completed_at, score)
           VALUES (?, ?, ?, ?, ?, ?)
           ON CONFLICT(user_id, lesson_id) DO UPDATE SET
           status=excluded.status, completed_skills=excluded.completed_skills,
           completed_at=excluded.completed_at, score=excluded.score""",
        (
            user_id,
            data.lesson_id,
            data.status,
            json.dumps(data.completed_skills),
            datetime.now().isoformat() if data.status == "completed" else None,
            data.score,
        ),
    )
    conn.commit()
    conn.close()
    return {"status": "ok"}


# Vocabulary Spaced Repetition
@app.get("/api/vocabulary/due/{user_id}")
def get_due_vocabulary(user_id: str):
    conn = get_db()
    ensure_user_exists(conn, user_id)
    today = date.today().isoformat()
    # Due cards + new cards (not yet in progress)
    due = conn.execute(
        "SELECT word_id FROM vocabulary_progress WHERE user_id = ? AND due_date <= ? AND status != 'mastered'",
        (user_id, today),
    ).fetchall()
    conn.close()
    return {"due": [d["word_id"] for d in due]}


@app.post("/api/vocabulary/review/{user_id}")
def review_vocabulary(user_id: str, data: ReviewCard):
    conn = get_db()
    ensure_user_exists(conn, user_id)
    existing = conn.execute(
        "SELECT interval, ease, reviews FROM vocabulary_progress WHERE user_id = ? AND word_id = ?",
        (user_id, data.card_id),
    ).fetchone()

    if existing:
        result = calculate_sm2(existing["interval"], existing["ease"], existing["reviews"], data.quality)
        conn.execute(
            """UPDATE vocabulary_progress SET status=?, interval=?, ease=?, due_date=?, reviews=?, last_review=?
               WHERE user_id = ? AND word_id = ?""",
            (
                result["status"], result["interval"], result["ease"],
                result["due_date"], result["reviews"], date.today().isoformat(),
                user_id, data.card_id,
            ),
        )
    else:
        result = calculate_sm2(0, 2.5, 0, data.quality)
        conn.execute(
            """INSERT INTO vocabulary_progress (user_id, word_id, status, interval, ease, due_date, reviews, last_review)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)""",
            (
                user_id, data.card_id, result["status"], result["interval"],
                result["ease"], result["due_date"], result["reviews"], date.today().isoformat(),
            ),
        )
    conn.commit()
    conn.close()
    return {"status": "ok", "result": result}


# Kanji Spaced Repetition
@app.get("/api/kanji/due/{user_id}")
def get_due_kanji(user_id: str):
    conn = get_db()
    ensure_user_exists(conn, user_id)
    today = date.today().isoformat()
    due = conn.execute(
        "SELECT kanji_id FROM kanji_progress WHERE user_id = ? AND due_date <= ? AND status != 'mastered'",
        (user_id, today),
    ).fetchall()
    conn.close()
    return {"due": [d["kanji_id"] for d in due]}


@app.post("/api/kanji/review/{user_id}")
def review_kanji(user_id: str, data: ReviewCard):
    conn = get_db()
    ensure_user_exists(conn, user_id)
    existing = conn.execute(
        "SELECT interval, ease, reviews FROM kanji_progress WHERE user_id = ? AND kanji_id = ?",
        (user_id, data.card_id),
    ).fetchone()

    if existing:
        result = calculate_sm2(existing["interval"], existing["ease"], existing["reviews"], data.quality)
        conn.execute(
            """UPDATE kanji_progress SET status=?, interval=?, ease=?, due_date=?, reviews=?, last_review=?
               WHERE user_id = ? AND kanji_id = ?""",
            (
                result["status"], result["interval"], result["ease"],
                result["due_date"], result["reviews"], date.today().isoformat(),
                user_id, data.card_id,
            ),
        )
    else:
        result = calculate_sm2(0, 2.5, 0, data.quality)
        conn.execute(
            """INSERT INTO kanji_progress (user_id, kanji_id, status, interval, ease, due_date, reviews, last_review)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)""",
            (
                user_id, data.card_id, result["status"], result["interval"],
                result["ease"], result["due_date"], result["reviews"], date.today().isoformat(),
            ),
        )
    conn.commit()
    conn.close()
    return {"status": "ok", "result": result}


# Daily Checklist
@app.post("/api/checklist/{user_id}")
def update_checklist(user_id: str, data: UpdateDailyChecklist):
    conn = get_db()
    ensure_user_exists(conn, user_id)
    skill = data.skill
    if skill not in ALLOWED_SKILLS:
        raise HTTPException(status_code=400, detail="Invalid skill")
    conn.execute(
        f"""INSERT INTO daily_checklist (user_id, date, {skill})
            VALUES (?, ?, 1)
            ON CONFLICT(user_id, date) DO UPDATE SET {skill}=1""",
        (user_id, data.date),
    )
    conn.commit()
    conn.close()
    return {"status": "ok"}


@app.get("/api/checklist/{user_id}/{date}")
def get_checklist(user_id: str, date: str):
    conn = get_db()
    ensure_user_exists(conn, user_id)
    checklist = conn.execute(
        "SELECT * FROM daily_checklist WHERE user_id = ? AND date = ?", (user_id, date)
    ).fetchone()
    conn.close()
    return dict(checklist) if checklist else None


# Quiz
@app.post("/api/quizzes/{user_id}")
def submit_quiz(user_id: str, data: SubmitQuiz):
    conn = get_db()
    ensure_user_exists(conn, user_id)
    conn.execute(
        "INSERT INTO quiz_results (user_id, quiz_type, score, total) VALUES (?, ?, ?, ?)",
        (user_id, data.quiz_type, data.score, data.total),
    )
    conn.commit()
    conn.close()
    return {"status": "ok", "score": data.score, "total": data.total}


@app.get("/api/quizzes/{user_id}")
def get_quizzes(user_id: str, limit: int = 10):
    conn = get_db()
    ensure_user_exists(conn, user_id)
    quizzes = conn.execute(
        "SELECT * FROM quiz_results WHERE user_id = ? ORDER BY completed_at DESC LIMIT ?",
        (user_id, limit),
    ).fetchall()
    conn.close()
    return [dict(q) for q in quizzes]


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
