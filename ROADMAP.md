# JLPT N4 Study App - Roadmap & Development Plan

Dự án JLPT N4 Study App hiện tại là một ứng dụng PWA chạy trên nền tảng Frontend (React + Vite + Zustand) với Backend FastAPI + SQLite chưa được kết nối. Roadmap dưới đây được chia thành 5 giai đoạn, ưu tiên **bổ sung dữ liệu** trước khi xây tính năng mới.

---

## Trạng thái hiện tại (Snapshot 2026-05-02)

| Thành phần | Công nghệ | Trạng thái |
|---|---|---|
| **Frontend** | React 18 + TypeScript + Vite 6 | Đã hoàn thiện |
| **Styling** | Tailwind CSS 3 + shadcn/ui + Radix UI | Đã hoàn thiện |
| **State** | Zustand 5 + `persist` (localStorage key: `jlpt-n4-study-store`) | Đã hoàn thiện |
| **Routing** | React Router DOM 6 | Đã hoàn thiện |
| **PWA** | vite-plugin-pwa + Workbox SW | Đã hoàn thiện |
| **Backend** | FastAPI 0.115 + SQLite (`backend/db/jlpt_n4.db`) | Đã viết, **chưa kết nối frontend** |
| **Dark Mode** | `darkMode: ["class"]` trong tailwind config | Chỉ có dark theme, **chưa có toggle** |
| **SRS** | SM-2 algorithm ([studyStore.ts:91-125](frontend/src/store/studyStore.ts#L91-L125) + [main.py:156-203](backend/main.py#L156-L203)) | Đã hoàn thiện, chưa tối ưu |
| **TTS** | Web Speech API (`ja-JP`, rate 0.8x, [WordAudioButton.tsx](frontend/src/components/WordAudioButton.tsx)) | Cơ bản, mới áp dụng cho từ vựng, **không có fallback** |
| **Audio** | Minna no Nihongo MP3 mapping | Infrastructure có, **chưa wire đủ vào lessons** |

---

## Đánh giá khả thi của Roadmap

| Giai đoạn | Độ khó | Thời gian | Khả thi | Ghi chú |
|---|---|---|---|---|
| **0 — Bổ sung data** | Thấp–Trung bình | 2–4 tuần | **Rất khả thi** | Việc chính là nhập liệu, không phức tạp về kỹ thuật |
| **1 — Dark Mode + TTS + Audio** | Trung bình | 1–2 tuần | **Khả thi** | Dark mode là dễ nhất; TTS cần xử lý edge cases; audio wiring cần time |
| **2 — Connect Frontend ↔ Backend** | Trung bình–Cao | 1–2 tuần | **Khả thi** | Backend đã có đầy endpoint, chỉ cần wire + thêm auth |
| **3 — Supabase Cloud Sync** | Cao | 2–3 tuần | **Khả thi nhưng tuỳ chọn** | Chỉ cần nếu multi-device sync là requirement |
| **4 — Mock Exam + FSRS** | Cao | 2–3 tuần | **Khả thi** | Mock exam cần nhiều data; FSRS đã có thư viện sẵn |
| **5 — Testing** | Trung bình | 1 tuần | **Khả thi** | Đã có vitest setup đơn giản |

**Rủi ro lớn nhất:** Bổ sung dữ liệu (1500 từ vựng) là công việc tốn thời gian nhất — không phải kỹ thuật mà là nhập liệu thủ công. Có thể dùng AI/script để generate từ curriculum sources.

---

## Giai đoạn 0 (Ưu tiên cao nhất): Bổ sung Dữ liệu Curriculum

*Mục tiêu: Có đủ dữ liệu cho toàn bộ N4 trước khi xây tính năng mới.*

### 0.1 Vocabulary — Từ 179 → ~1,500 từ

**Hiện tại:** 179 từ trong [vocabulary.ts](frontend/src/data/vocabulary.ts)

**Nguồn dữ liệu:**
1. **Minna no Nihongo Vol.2** (Lessons 26-50) — ~600 từ mới
2. **JLPT N4 official vocabulary list** — ~800 từ tổng (bao gồm N5 ~800 từ đã học)
3. **Speed Master N4 / Sou Matome N4** — bổ sung từ thiếu

**Chi tiết thực hiện:**

1. **Mở rộng `vocabulary.ts`** — cấu trúc hiện tại:
   ```ts
   export interface Vocabulary {
     id: string;
     japanese: string;
     reading: string;
     meaning: string;      // tiếng Việt
     lesson?: number;
     example?: string;     // câu ví dụ
   }
   ```

2. **Cách nhập liệu hiệu quả:**
   - **Option A — Script generate:** Viết Python script parse từ file Excel/CSV của Minna no Nihongo vocabulary list → output TypeScript file
   - **Option B — Manual:** Chia theo lesson, mỗi lesson ~25 từ × 25 lesson = ~625 từ mới
   - **Option C — AI-assisted:** Dùng LLM generate vocabulary từ textbook sources, sau đó review thủ công

3. **Phân bổ theo lesson:**
   ```
   Lesson 26-30: ~120 từ (mỗi lesson 24 từ)
   Lesson 31-35: ~120 từ
   Lesson 36-40: ~120 từ
   Lesson 41-45: ~120 từ
   Lesson 46-50: ~120 từ
   Tổng: ~600 từ mới + 179 hiện tại = ~780 từ (N5+N4 core)
   ```

### 0.2 Kanji — Từ 177 → ~200 chữ

**Hiện tại:** 177 chữ trong [kanji.ts](frontend/src/data/kanji.ts) — gần đủ cho N4 (~200 chữ).

**Chi tiết:** Bổ sung ~23 chữ còn thiếu từ danh sách JLPT N4 kanji chính thức.

### 0.3 Grammar — Từ 66 → ~80 patterns

**Hiện tại:** 66 patterns trong [grammar.ts](frontend/src/data/grammar.ts)

**Chi tiết:** Bổ sung ~14 grammar patterns N4 còn thiếu (từ Minna no Nihongo Lessons 26-50).

### 0.4 Quiz Questions — Từ 166 → ~500+ câu

**Hiện tại:** 166 câu trong [quizzes.ts](frontend/src/data/quizzes.ts)

**Chi tiết:**
- Vocabulary: thêm ~150 câu (reading, meaning, fill-in-the-blank)
- Grammar: thêm ~100 câu (selection, sentence construction)
- Reading: thêm ~50 câu (short passages)
- Listening: thêm ~34 câu (comprehension)

### 0.5 Audio Files

**Hiện tại:** MP3 đã extract trong `frontend/public/audio/`

**Chi tiết:**
- Kiểm tra lesson nào thiếu audio → đánh dấu
- Mỗi lesson cần 9 loại: vocabulary, grammar, listeningA, listeningB, listeningC, quizA, quizB, quizC, intro
- Nếu thiếu → fallback dùng TTS tạm thời

---

## Giai đoạn 1: Nâng cấp Trải nghiệm Cốt lõi (UI/UX & Audio)

*Mục tiêu: Cải thiện trải nghiệm học tập hàng ngày — đặc biệt là học ban đêm và kỹ năng nghe.*

### 1.1 Tích hợp Dark Mode Toggle

**Vấn đề hiện tại:** App đang hardcode dark theme. `tailwind.config.js` đã có `darkMode: ["class"]`, CSS variables đã định nghĩa, nhưng không có cơ chế chuyển theme.

**Chi tiết thực hiện:**

1. **Cài đặt `next-themes`**
   ```bash
   npm install next-themes
   ```
2. **Tạo `ThemeProvider`** bọc toàn bộ ứng dụng trong `main.tsx` hoặc `App.tsx`
3. **Thêm Toggle Component** ở Navbar hoặc SettingsPage
   - Sử dụng `useTheme()` hook từ `next-themes`
   - Icon: Sun/Moon toggle với animation
   - Lưu preference vào localStorage (mặc định `theme: "dark"`)
4. **Cập nhật CSS Variables** trong `index.css`
   - Định nghĩa `--background`, `--foreground`, `--card`, `--primary`, `--border`... cho cả `:root` (light) và `.dark`
   - Kiểm tra từng component xem có hardcode màu không (ví dụ: `bg-gray-900` → dùng `bg-background` thay thế)
5. **Kiểm tra các component cần chú ý:**
   - `FocusTimer.tsx` — ambient sound selector, timer display
   - `Celebration.tsx` — toast notification colors
   - `KanjiWriter.tsx` — canvas background, stroke color
   - `Sidebar.tsx` — active/hover states
   - Flashcard flip faces — đảm bảo cả mặt trước/sau readable ở cả 2 theme

### 1.2 Text-to-Speech với Fallback hoàn chỉnh

**Vấn đề hiện tại:** [WordAudioButton.tsx](frontend/src/components/WordAudioButton.tsx) chỉ có guard cơ bản:
```ts
if (!window.speechSynthesis) return;  // ← Không làm gì cả, user không biết tại sao
```

**Edge cases cần xử lý:**

| Edge case | Mô tả | Giải pháp |
|---|---|---|
| **Không có `speechSynthesis`** | Browser cũ, hoặc bị disable | Fallback: ẩn nút hoặc hiện icon disabled + tooltip |
| **Không có voice `ja-JP`** | Một số browser/OS không cài tiếng Nhật (Linux server, một số Android) | Fallback 1: Dùng voice `ko-KR` hoặc `zh-CN` (tệ nhưng còn hơn không). Fallback 2: Hiện thông báo "Cần cài voice tiếng Nhật" |
| **`speechSynthesis` bị crash/timeout** | Chrome có bug: sau 15s không hoạt động, engine bị kill | Fallback: try-catch + cancel stale utterance + recreate engine |
| **Rate limiting trên mobile** | iOS Safari giới hạn số lần gọi trong 1 phút | Fallback: debounce 500ms giữa các lần gọi, queue các request |
| **User đang ở tab khác** | Browser có thể pause TTS khi tab bị ẩn | Fallback: kiểm tra `document.hidden`, pause/resume khi focus trở lại |
| **Text quá dài** (>200 ký tự) | Một số browser cắt ngắn utterance | Fallback: chia text thành chunks 200 ký tự, speak tuần tự |
| **`getVoices()` trả về rỗng** | Event `voiceschanged` chưa fire (Chrome bug phổ biến) | Fallback: listen event `voiceschanged` rồi mới gọi `getVoices()`, timeout 1s nếu không có |

**Chi tiết thực hiện:**

1. **Tạo `useTTS` hook** (`src/hooks/useTTS.ts`):
   ```ts
   interface UseTTSOptions {
     rate?: number;        // 0.5 - 2.0, default 0.8
     pitch?: number;       // 0 - 2, default 1.0
     lang?: string;        // default 'ja-JP'
     enabled?: boolean;    // user có bật TTS không
     onFallback?: (reason: string) => void;
   }

   interface UseTTSReturn {
     speak: (text: string) => void;
     stop: () => void;
     isSpeaking: boolean;
     isSupported: boolean;   // browser có TTS không
     hasJapaneseVoice: boolean;
     fallbackReason: string | null;
   }
   ```

2. **Fallback chain trong hook:**
   ```
   speak(text)
     ├─ 1. Check: window.speechSynthesis tồn tại?
     │     NO → fallbackReason = "Browser không hỗ trợ TTS" → return
     │
     ├─ 2. Check: Có voice ja-JP trong getVoices()?
     │     │  (nếu getVoices() rỗng → listen voiceschanged event, timeout 1s)
     │     NO → fallbackReason = "Không có voice tiếng Nhật" → return
     │
     ├─ 3. Check: text > 200 ký tự?
     │     YES → chia chunks → speak từng chunk tuần tự
     │     NO  → tạo utterance bình thường
     │
     ├─ 4. Speak với try-catch:
     │     ├─ Success → isSpeaking = true
     │     ├─ Error (onerror) → isSpeaking = false, log error
     │     └─ Timeout (10s không end) → cancel, force stop
     │
     └─ 5. Queue management:
           Nếu đang speaking → cancel cái cũ → speak cái mới
           (hoặc xếp hàng nếu user muốn — configurable)
   ```

3. **Tạo component `TTSStatusIndicator`** (optional):
   - Hiển thị ở góc app khi TTS không hoạt động
   - Tooltip giải thích lý do + hướng dẫn khắc phục
   - Link cài voice tiếng Nhật cho từng OS:
     - Windows: Settings → Time & Language → Speech → Add Japanese
     - macOS: System Preferences → Accessibility → Speech → System Voice
     - Android: Cài Google Text-to-Speech + tải voice JP
     - iOS: Settings → Accessibility → Spoken Content → Voices

4. **Mở rộng phạm vi tích hợp:**
   - [x] `WordAudioButton` — từ vựng flashcard (đã có)
   - [ ] `VocabularyPage` — danh sách từ vựng
   - [ ] `KanjiPage` — phát âm onyomi/kunyomi
   - [ ] `LessonPage` — câu ví dụ trong mỗi section
   - [ ] `ListeningPage` — fallback khi không có MP3
   - [ ] `DailyReviewPage` — câu hỏi review
   - [ ] `QuizPage` — câu hỏi quiz
   - [ ] `GrammarComparePage` — ví dụ so sánh

### 1.3 Hoàn thiện Audio cho Listening & Lessons

**Vấn đề hiện tại:** Audio files đã có, mapping đã có, nhưng chưa wire vào lesson sections.

**Chi tiết thực hiện:**

1. **Kiểm tra & hoàn thiện file mapping** trong `audio.ts`:
   - Audit: lesson nào đã có đủ 9 loại MP3, lesson nào thiếu
   - Tạo `audioAudit` report → log các lesson thiếu file
2. **Tích hợp vào `LessonPage`** (file lớn nhất 31KB, 12 section types):
   - Thêm audio player vào các sections: `vocabulary`, `grammar`, `listening`, `quiz`
   - Mỗi section có thể có nhiều audio files → tạo playlist/next-prev controls
   - **Fallback chain:** MP3 file → TTS đọc → skip (hiển thị "Audio không khả dụng")
3. **Tích hợp vào `ListeningPage`:**
   - Đảm bảo audio playback hoạt động cho tất cả listening exercises
   - Thêm speed control (0.5x, 0.75x, 1.0x, 1.25x)
   - Auto-repeat cho đoạn khó
4. **UX improvements:**
   - Loading indicator khi audio đang tải
   - Error handling khi file 404 → fallback TTS
   - Keyboard shortcut: Space = play/pause, Arrow keys = seek

---

## Giai đoạn 2: Kết nối Frontend ↔ Backend hiện có

*Mục tiêu: Tận dụng backend FastAPI đã viết, kết nối với frontend để có API layer.*

### 2.1 Thêm Export/Import Database

**Tại sao làm TRƯỚC khi connect:** Cần khả năng backup/restore dữ liệu localStorage → database và ngược lại, trước khi có nguy cơ mất dữ liệu khi sync.

**Chi tiết thực hiện:**

1. **Export từ Frontend (localStorage) → JSON:**
   - Hiện tại đã có data export trong SettingsPage
   - Cải thiện: Export toàn bộ `jlpt-n4-study-store` → JSON file tải về
   - Cấu trúc file export:
     ```json
     {
       "version": "0.1.0",
       "exportedAt": "2026-05-02T10:30:00Z",
       "store": {
         "lessonProgress": { ... },
         "vocabProgress": { ... },
         "kanjiProgress": { ... },
         "grammarProgress": { ... },
         "dailyChecklist": { ... },
         "quizResults": [ ... ],
         "xp": 1250,
         "level": 13,
         "streak": 7,
         "totalStudyMinutes": 480
       }
     }
     ```

2. **Import JSON → Frontend (localStorage):**
   - Upload file JSON → parse → merge hoặc replace localStorage
   - Conflict resolution: hỏi user "Ghi đè" hay "Hợp nhất"?
   - Validation: kiểm tra schema trước khi import

3. **Export từ Backend (SQLite) → JSON:**
   - Thêm endpoint `GET /api/export/{user_id}`:
     ```python
     @app.get("/api/export/{user_id}")
     def export_user_data(user_id: str):
         conn = get_db()
         data = {
             "user": dict(conn.execute("SELECT * FROM users WHERE id = ?", (user_id,)).fetchone()),
             "lesson_progress": [dict(r) for r in conn.execute("SELECT * FROM lesson_progress WHERE user_id = ?", (user_id,)).fetchall()],
             "vocabulary_progress": [dict(r) for r in conn.execute("SELECT * FROM vocabulary_progress WHERE user_id = ?", (user_id,)).fetchall()],
             "kanji_progress": [dict(r) for r in conn.execute("SELECT * FROM kanji_progress WHERE user_id = ?", (user_id,)).fetchall()],
             "quiz_results": [dict(r) for r in conn.execute("SELECT * FROM quiz_results WHERE user_id = ?", (user_id,)).fetchall()],
             "daily_checklist": [dict(r) for r in conn.execute("SELECT * FROM daily_checklist WHERE user_id = ?", (user_id,)).fetchall()],
         }
         conn.close()
         return data
     ```

4. **Export từ Backend (SQLite) → SQL dump:**
   - Dùng `sqlite3` CLI: `sqlite3 jlpt_n4.db .dump > backup.sql`
   - Thêm endpoint `GET /api/export/sql/{user_id}` → trả về SQL statements cho user này
   - Hoặc dùng Python `sqlite3` module:
     ```python
     import sqlite3
     conn = sqlite3.connect(DB_PATH)
     for line in conn.iterdump():
         print(line)
     ```

5. **Import JSON → Backend (SQLite):**
   - Thêm endpoint `POST /api/import/{user_id}`:
     ```python
     @app.post("/api/import/{user_id}")
     def import_user_data(user_id: str, data: dict):
         # Parse JSON và INSERT/UPDATE các bảng
         # Xử lý conflict: INSERT OR REPLACE
     ```

6. **Export Curriculum Data (static):**
   - Script export `vocabulary.ts`, `kanji.ts`, `grammar.ts` → CSV/JSON để dùng ở nơi khác
   - Hữu ích cho việc review data quality, import sang Anki, v.v.

### 2.2 Tạo API Client Layer

1. **Cài đặt HTTP client:**
   ```bash
   npm install axios
   ```
2. **Tạo `src/api/client.ts`:**
   - Axios instance với `baseURL` từ environment variable (`VITE_API_URL`)
   - Interceptor tự động attach auth token (nếu có)
   - Error handler: retry logic, timeout, offline detection
   - **Offline detection:** Dùng `navigator.onLine` + `window.addEventListener('offline/online')`
3. **Tạo `src/api/endpoints.ts`** — mapping tất cả backend endpoints:
   | Method | Endpoint | Mô tả |
   |---|---|---|
   | POST | `/api/users` | Tạo user mới (trả UUID) |
   | GET | `/api/users/{id}` | Lấy thông tin user |
   | GET | `/api/users/{id}/progress` | Lấy toàn bộ progress |
   | POST | `/api/progress/{user_id}` | Lưu lesson progress |
   | POST | `/api/vocabulary/review/{user_id}` | Lưu SRS vocab review |
   | GET | `/api/vocabulary/due/{user_id}` | Lấy vocab cần ôn |
   | POST | `/api/kanji/review/{user_id}` | Lưu SRS kanji review |
   | GET | `/api/kanji/due/{user_id}` | Lấy kanji cần ôn |
   | POST | `/api/checklist/{user_id}` | Lưu daily checklist |
   | POST | `/api/quizzes/{user_id}` | Lưu kết quả quiz |
   | GET | `/api/export/{user_id}` | Export toàn bộ data JSON |
   | GET | `/health` | Health check |

### 2.3 Cập nhật `studyStore` — Sync Strategy

**Chi tiết sync giữa Local State (Zustand + localStorage) và Database:**

```
┌─────────────────────────────────────────────────────────────┐
│                      StudyStore                             │
│                                                             │
│  ┌──────────────┐    Optimistic    ┌───────────────────┐   │
│  │  LocalStorage │ ◄─────────────► │   Backend API     │   │
│  │  (Zustand)    │                 │   (FastAPI/SQLite) │   │
│  └──────────────┘                 └───────────────────┘   │
│         │                                │                │
│         │ read/write ngay               │ async call      │
│         │ không chờ response            │ queue nếu offline│
│         └────────────────────────────────┘                │
│                    Background Sync                        │
└─────────────────────────────────────────────────────────────┘
```

**Sync flow chi tiết cho từng action:**

1. **Card Review (vocab/kanji/grammar):**
   ```
   User bấm "Good" trên flashcard
     │
     ├─ 1. CẬP NHẬT LOCAL NGAY (optimistic)
     │    → calculateSM2() → update vocabProgress
     │    → Zustand re-render → user thấy kết quả ngay
     │    → Persist localStorage
     │
     ├─ 2. QUEUE SYNC EVENT
     │    → addToSyncQueue({ type: 'vocab_review', cardId, quality, timestamp })
     │
     ├─ 3. BACKGROUND SYNC (debounce 2s)
     │    ├─ Online: POST /api/vocabulary/review/{user_id}
     │    │   ├─ Success: xóa khỏi queue
     │    │   └─ Fail (5xx): retry sau 30s (max 3 lần)
     │    │   └─ Fail (4xx): log error, giữ trong queue
     │    └─ Offline: giữ trong queue, sync khi online trở lại
     │
     └─ 4. CONFLICT RESOLUTION (khi load lại app)
          ├─ Fetch server data → so sánh timestamp với local
          ├─ Local mới hơn → giữ local, push lên server
          └─ Server mới hơn → merge vào local
   ```

2. **Lesson Progress:**
   ```
   User hoàn thành 1 skill trong lesson
     │
     ├─ 1. UPDATE LOCAL NGAY
     │
     ├─ 2. Nếu apiMode=true → debounce 5s → POST /api/progress/{user_id}
     │
     └─ 3. Conflict: server là source of truth cho lesson completion
   ```

3. **Daily Checklist:**
   ```
   User tick "Listening done" hôm nay
     │
     ├─ 1. UPDATE LOCAL → recalculate streak
     │
     ├─ 2. POST /api/checklist/{user_id} (debounce 1s)
     │
     └─ 3. Conflict: checklist theo date nên khó conflict
          (cùng 1 ngày → merge: skill nào cũng tick = true)
   ```

4. **Initial Load (khi mở app):**
   ```
   App khởi động
     │
     ├─ 1. Load từ localStorage → render ngay (fast startup)
     │
     ├─ 2. Nếu apiMode=true:
     │    ├─ Check network → online?
     │    │   ├─ YES: GET /api/users/{id}/progress
     │    │   │   ├─ Success: merge server data vào store
     │    │   │   │   → Server data có timestamp mới hơn → override local
     │    │   │   │   → Local có data mới hơn → push lên server
     │    │   │   └─ Fail: dùng local data, thử lại sau
     │    │   └─ NO: dùng local data hoàn toàn
     │    └─ Đánh dấu sync status trong UI
     │
     └─ 3. Nếu apiMode=false: chỉ load localStorage
   ```

**Thêm state trong `studyStore`:**
```ts
// Sync state
apiMode: boolean;              // true = gọi API, false = localStorage only
apiConnected: boolean;         // kết nối backend thành công?
apiBaseUrl: string;            // URL backend
userId: string | null;         // current user ID
syncQueue: SyncQueueItem[];    // pending sync actions
lastSyncAt: string | null;     // lần sync cuối
syncError: string | null;      // lỗi sync gần nhất
```

**Sync queue implementation:**
```ts
interface SyncQueueItem {
  id: string;                  // UUID
  type: 'vocab_review' | 'kanji_review' | 'grammar_review' | 'lesson_progress' | 'checklist' | 'quiz';
  payload: unknown;
  timestamp: number;           // Date.now()
  retries: number;             // số lần retry
  status: 'pending' | 'syncing' | 'failed';
}
```

5. **Settings UI** trong `SettingsPage`:
   - Toggle "Enable API Sync"
   - Input field cho API URL
   - Nút "Test Connection" → GET /health
   - Hiển thị trạng thái: Connected / Disconnected / Syncing / Error
   - Nút "Export Data" → download JSON
   - Nút "Import Data" → upload JSON
   - Hiển thị sync queue count: "X pending actions"

### 2.4 Thêm Authentication cơ bản cho Backend

**Vấn đề hiện tại:** Backend tạo user bằng POST `/api/users` → trả UUID, không có password, không có session.

**Chi tiết thực hiện:**

1. **Thêm password hashing** vào backend:
   ```python
   from passlib.context import CryptContext
   pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
   ```
2. **Thêm endpoints auth:**
   | Method | Endpoint | Mô tả |
   |---|---|---|
   | POST | `/api/auth/register` | Đăng ký (email + password) |
   | POST | `/api/auth/login` | Đăng nhập → trả JWT token |
   | POST | `/api/auth/logout` | Đăng xuất |
   | GET | `/api/auth/me` | Lấy current user từ JWT |
3. **Thêm JWT middleware** cho FastAPI:
   - Protect các endpoint `/api/lesson-progress`, `/api/vocab-review`...
   - Lấy user_id từ JWT thay vì request body
4. **Frontend auth flow:**
   - Thêm LoginForm/RegisterForm component (modal hoặc page riêng)
   - Lưu JWT token vào localStorage
   - Auto-refresh token trước khi expire
   - Logout button trong Sidebar

### 2.5 Deploy Backend

1. **Dockerize backend:**
   - Tạo `Dockerfile` cho FastAPI + uvicorn
   - `docker-compose.yml` với backend + SQLite volume
2. **Deploy options:**
   - Render.com / Railway.app (free tier)
   - VPS tự host (cheap, full control)
3. **Environment variables:**
   - `DATABASE_URL` — SQLite hoặc PostgreSQL
   - `JWT_SECRET` — secret key cho JWT
   - `CORS_ORIGINS` — whitelist frontend URL

---

## Giai đoạn 3: Full-Stack Cloud Sync (Supabase — Tuỳ chọn)

*Mục tiêu: Nếu cần multi-device sync, bảo mật cao hơn, hoặc không muốn tự quản lý server — migrate sang Supabase.*

> **Note:** Chỉ cần nếu bạn muốn dùng app trên nhiều thiết bị (phone + laptop) và không muốn tự host server. Nếu self-hosted FastAPI đủ → bỏ qua giai đoạn này.

### 3.1 Thiết lập Supabase Project

1. **Tạo project** tại https://supabase.com
2. **Cài đặt SDK:**
   ```bash
   npm install @supabase/supabase-js
   ```
3. **Tạo `src/lib/supabase.ts`:**
   ```ts
   import { createClient } from '@supabase/supabase-js'
   export const supabase = createClient(
     import.meta.env.VITE_SUPABASE_URL,
     import.meta.env.VITE_SUPABASE_ANON_KEY
   )
   ```

### 3.2 Database Schema

```sql
-- User profiles
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  xp INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  streak INTEGER DEFAULT 0,
  total_study_minutes INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- SRS progress cho vocabulary
CREATE TABLE vocab_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  vocab_id INTEGER NOT NULL,
  status TEXT DEFAULT 'new',
  interval INTEGER DEFAULT 0,
  ease_factor REAL DEFAULT 2.5,
  due_date DATE DEFAULT CURRENT_DATE,
  reviews INTEGER DEFAULT 0,
  last_review TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, vocab_id)
);

-- SRS progress cho kanji
CREATE TABLE kanji_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  kanji_id INTEGER NOT NULL,
  status TEXT DEFAULT 'new',
  interval INTEGER DEFAULT 0,
  ease_factor REAL DEFAULT 2.5,
  due_date DATE DEFAULT CURRENT_DATE,
  reviews INTEGER DEFAULT 0,
  last_review TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, kanji_id)
);

-- SRS progress cho grammar
CREATE TABLE grammar_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  grammar_id INTEGER NOT NULL,
  status TEXT DEFAULT 'new',
  interval INTEGER DEFAULT 0,
  ease_factor REAL DEFAULT 2.5,
  due_date DATE DEFAULT CURRENT_DATE,
  reviews INTEGER DEFAULT 0,
  last_review TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, grammar_id)
);

-- Lesson completion
CREATE TABLE lesson_status (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  lesson_id TEXT NOT NULL,
  listening_progress REAL DEFAULT 0,
  speaking_progress REAL DEFAULT 0,
  reading_progress REAL DEFAULT 0,
  writing_progress REAL DEFAULT 0,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

-- Quiz results
CREATE TABLE quiz_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  quiz_type TEXT NOT NULL,
  score REAL NOT NULL,
  total_questions INTEGER NOT NULL,
  correct_answers INTEGER NOT NULL,
  time_taken INTEGER,
  taken_at TIMESTAMPTZ DEFAULT NOW()
);

-- Daily checklist
CREATE TABLE daily_checklist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  date DATE NOT NULL,
  listening BOOLEAN DEFAULT FALSE,
  speaking BOOLEAN DEFAULT FALSE,
  reading BOOLEAN DEFAULT FALSE,
  writing BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, date)
);
```

### 3.3 Row Level Security (RLS)

```sql
-- Mọi bảng đều cần RLS
ALTER TABLE vocab_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users see own data" ON vocab_progress
  FOR ALL USING (auth.uid() = user_id);

-- Áp dụng tương tự cho: kanji_progress, grammar_progress,
-- lesson_status, quiz_results, daily_checklist, profiles
```

### 3.4 Đồng bộ hai chiều với Supabase

**Tương tự sync strategy ở Giai đoạn 2**, thay vì gọi FastAPI endpoints → gọi Supabase client:

```ts
// Thay vì:
await axios.post(`/api/vocabulary/review/${userId}`, { cardId, quality })

// Thành:
await supabase.from('vocab_progress').upsert({
  user_id: userId,
  vocab_id: cardId,
  ...sm2Result
}, { onConflict: 'user_id,vocab_id' })
```

**Supabase Realtime** (bonus): Listen changes từ device khác → auto-update local:
```ts
supabase
  .channel('user-changes')
  .on('postgres_changes',
    { event: '*', schema: 'public', table: 'vocab_progress', filter: `user_id=eq.${userId}` },
    (payload) => { mergeServerChange(payload) }
  )
  .subscribe()
```

---

## Giai đoạn 4: Tính năng Thi Thử (Mock Exam) & Nâng cấp SRS

*Mục tiêu: Bài kiểm tra đánh giá sát thực tế + thuật toán ôn tập thông minh hơn.*

### 4.1 Xây dựng tính năng Mock Exam

**Vấn đề hiện tại:** `QuizPage` (`/quiz`) đã có quiz JLPT-style với timer, nhưng:
- Không có chế độ thi thử full đề (180 điểm, countdown áp lực phòng thi)
- `QuizResult` type đã có field `quizType: 'mock'` nhưng chưa implement
- Chưa có scoring theo thang điểm JLPT N4 chuẩn

**Chi tiết thực hiện:**

1. **Tạo routing `/mock-exam`:**
   ```ts
   // App.tsx
   <Route path="/mock-exam" element={<MockExamPage />} />
   <Route path="/mock-exam/:id/results" element={<MockExamResults />} />
   ```

2. **Cấu trúc đề thi JLPT N4 chuẩn:**
   | Phần | Nội dung | Số câu | Thời gian |
   |---|---|---|---|
   | 1. Chữ Hán & Từ vựng | Kanji reading, vocab meaning, fill-in | ~30 | — |
   | 2. Ngữ pháp | Grammar selection, sentence construction | ~20 | — |
   | 3. Đọc hiểu | Short passages, info retrieval | ~15 | 55 phút |
   | 4. Nghe hiểu | Audio comprehension, quick response | ~20 | 35 phút |

3. **Tạo `src/pages/MockExamPage.tsx`:**
   - **Phase 1 — Setup**: User chọn đề thi (có sẵn / random / theo weak areas)
   - **Phase 2 — Exam mode**:
     - Countdown timer lớn ở top screen (55 phút Language, 35 phút Listening)
     - Fullscreen mode toggle (ẩn distractions)
     - Navigation panel: đánh dấu câu đã làm / chưa làm / cần review
     - Auto-save answer vào localStorage (phòng crash)
   - **Phase 3 — Results**:
     - Chấm điểm theo thang JLPT N4 (tối đa 180 điểm)
     - Breakdown: Language (vocab+grammar+reading) / Listening
     - Passing criteria: ≥ 90/180 tổng điểm VÀ ≥ 19/60 mỗi phần
     - Hiển thị đáp án + giải thích chi tiết
     - So sánh với kết quả mock exam trước (progress chart)

4. **Tạo `src/data/mockExams.ts`:**
   - Định nghĩa interface `MockExam`
   - Tạo ít nhất 3 đề mẫu (dễ → khó)
   - Random question generator từ pool

5. **Tạo `src/components/MockExamTimer.tsx`:**
   - Countdown timer với warning khi còn < 5 phút
   - Âm thanh cảnh báo khi hết giờ
   - Auto-submit khi hết giờ

6. **Tạo `src/pages/MockExamResults.tsx`:**
   - Score chart (radar/spider chart cho 4 kỹ năng)
   - Detailed answer review
   - Export kết quả JSON
   - Link đến các từ/grammar sai để ôn lại

### 4.2 Nâng cấp thuật toán SRS → FSRS

**Vấn đề hiện tại:** SM-2 đã hoạt động nhưng:
- Không tối ưu cho Japanese language learning
- Không tính đến difficulty của từng card type
- FSRS cho kết quả tốt hơn 10-15% so với SM-2

**Chi tiết thực hiện:**

1. **Cài đặt thư viện:**
   ```bash
   npm install ts-fsrs
   ```
2. **Thay thế `calculateSM2` bằng FSRS:**
   ```ts
   import { createEmptyCard, fsrs, Grade } from 'ts-fsrs'

   const f = fsrs()
   const card = createEmptyCard()

   // Khi user review:
   const next = f.next(card, Grade.Good)
   // next.due, next.interval, next.difficulty
   ```
3. **Mapping quality → Grade:**
   | Nút hiện tại | SM-2 quality | FSRS Grade |
   |---|---|---|
   | Again | 0 | `Again` |
   | Hard | 1 | `Hard` |
   | Good | 2 | `Good` |
   | Easy | 3 | `Easy` |
4. **Cập nhật `studyStore` state:**
   - Thêm field `difficulty`, `stability`, `retrievability`
5. **Backend sync:**
   - Cập nhật `calculate_sm2` trong `main.py` → dùng FSRS Python (`py-fsrs`)
6. **Settings UI:**
   - Toggle giữa SM-2 và FSRS (cho user compare)

---

## Giai đoạn 5: Unit Testing & Tính năng bổ sung

### 5.1 Unit Testing

**Vấn đề hiện tại:** Project không có test file nào.

**Chi tiết thực hiện:**

1. **Cài đặt testing framework:**
   ```bash
   npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
   ```
2. **Test ưu tiên theo thứ tự:**
   - **`calculateSM2`**: Edge cases (new card, first review, mastered card, interval overflow)
   - **`generateDailyReview`**: Đúng số lượng, ưu tiên due cards, weak items
   - **Quiz scoring**: Tính điểm đúng thang JLPT
   - **Streak calculation**: Cross-day, timezone, missing days
   - **XP/Level calculation**: Boundary cases
3. **Integration tests (nếu có backend):**
   - API endpoint responses
   - Auth flow
   - Sync: offline action → online → server has data

### 5.2 Tính năng bổ sung (tuỳ chọn)

1. **Study Streak Reminders** — Browser notification khi chưa học
2. **Weak Area Detection** — Phân tích quiz results → xác định điểm yếu
3. **Study Calendar / Heatmap** — GitHub-style heatmap trong ProgressPage
4. **Import/Export Anki** — Import deck từ Anki (APKG/CSV)

---

## Timeline — Ưu tiên bổ sung Data trước

```
Tuần 1-2:   Giai đoạn 0 — Bổ sung DỮ LIỆU (vocab, kanji, grammar, quiz)
              │
              ├─ Vocabulary: 179 → 780+ từ (Minna no Nihongo L26-50)
              ├─ Kanji: 177 → 200 chữ
              ├─ Grammar: 66 → 80 patterns
              └─ Quiz: 166 → 300+ câu
              │
Tuần 3:     Giai đoạn 1a — Dark Mode + Export/Import Data
              │
              ├─ Dark mode toggle (next-themes)
              ├─ Export localStorage → JSON
              └─ Export SQLite → JSON + SQL dump
              │
Tuần 4:     Giai đoạn 1b — TTS Fallback + Audio Wiring
              │
              ├─ useTTS hook với fallback chain hoàn chỉnh
              ├─ Wire MP3 audio vào lesson sections
              └─ Audio audit report
              │
Tuần 5-6:   Giai đoạn 2 — Connect Frontend ↔ Backend
              │
              ├─ API client layer + auth (JWT)
              ├─ studyStore sync strategy (optimistic + queue)
              └─ Deploy backend
              │
Tuần 7-8:   Giai đoạn 4a — Mock Exam
              │
              ├─ MockExamPage + Timer + Results
              ├─ 3 đề mẫu + random generator
              └─ JLPT scoring (180 điểm)
              │
Tuần 9:     Giai đoạn 4b — FSRS + Testing
              │
              ├─ Replace SM2 → FSRS (ts-fsrs)
              └─ Unit tests cho SRS, scoring, streak
              │
Tuỳ chọn:   Giai đoạn 3 — Supabase (nếu cần multi-device sync)
```

## Thứ tự ưu tiên

```
┌─────────────────────────────────────────────────┐
│  1. Bổ sung dữ liệu (Giai đoạn 0)               │
│     └─ Không có data → mọi tính năng vô nghĩa   │
├─────────────────────────────────────────────────┤
│  2. Export/Import + Backup (Giai đoạn 2.1)      │
│     └─ Bảo vệ dữ liệu user trước khi sync       │
├─────────────────────────────────────────────────┤
│  3. Dark Mode (Giai đoạn 1a)                    │
│     └─ Dễ làm, impact UX cao                    │
├─────────────────────────────────────────────────┤
│  4. TTS Fallback + Audio (Giai đoạn 1b)         │
│     └─ Kỹ năng nghe là cốt lõi của language app │
├─────────────────────────────────────────────────┤
│  5. Connect Frontend ↔ Backend (Giai đoạn 2)    │
│     └─ API layer + auth + sync                  │
├─────────────────────────────────────────────────┤
│  6. Mock Exam (Giai đoạn 4a)                    │
│     └─ Cần đủ data từ bước 1                    │
├─────────────────────────────────────────────────┤
│  7. FSRS + Testing (Giai đoạn 4b + 5)           │
│     └─ Optimization sau khi core ổn định        │
├─────────────────────────────────────────────────┤
│  8. Supabase Cloud Sync (Giai đoạn 3)           │
│     └─ Chỉ nếu cần multi-device                 │
└─────────────────────────────────────────────────┘
```

---

## Rủi ro & Giảm thiểu

| Rủi ro | Impact | Giảm thiểu |
|---|---|---|
| Không đủ data cho mock exam | Cao | Ưu tiên Giai đoạn 0, dùng AI script để accelerate |
| Mất dữ liệu localStorage khi sync | Cao | Export/backup TRƯỚC khi bật sync mode |
| TTS không hoạt động trên một số browser | Trung bình | Fallback chain hoàn chỉnh (xem 1.2) |
| Sync conflict giữa local + server | Trung bình | Optimistic UI + server-wins conflict resolution |
| Supabase free tier giới hạn | Thấp | Có thể giữ FastAPI self-hosted, chỉ dùng Supabase làm auth |
| FSRS khó debug hơn SM-2 | Thấp | Toggle giữa 2 thuật toán, log cả 2 để compare |
