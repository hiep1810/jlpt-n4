# JLPT N4 Study App

Ứng dụng web học tiếng Nhật JLPT N4, hỗ trợ ôn tập từ vựng, kanji, ngữ pháp theo phương pháp lặp lại ngắt quãng (SRS).

## Tính năng

- **Flashcard SRS** — Ôn từ vựng và kanji với thuật toán SM-2, tự động tính lịch ôn lại
- **Luyện viết Kanji** — Tích hợp `hanzi-writer` để thực hành viết từng nét chữ
- **Bài học theo giáo trình Minna no Nihongo** — 4 kỹ năng: nghe, nói, đọc, viết
- **Quiz JLPT-style** — Trắc nghiệm từ vựng, kanji, ngữ pháp với chấm điểm
- **Theo dõi tiến độ** — Streak hàng ngày, XP, level, checklist 4 kỹ năng
- **PWA** — Cài đặt được trên điện thoại, hoạt động offline
- **Dark mode** — Giao diện tối mặc định

## Công nghệ

| Thành phần | Tech |
|---|---|
| Frontend | React 18 + TypeScript + Vite 6 |
| Styling | Tailwind CSS 3 + shadcn/ui + Radix UI |
| State | Zustand 5 (persist localStorage) |
| Routing | React Router DOM 6 |
| PWA | vite-plugin-pwa + Workbox |
| Backend | FastAPI + SQLite (chưa kết nối frontend) |
| SRS | Thuật toán SM-2 ([main.py:156-203](backend/main.py#L156-L203)) |
| TTS | Web Speech API (`ja-JP`) |

## Cài đặt & Chạy

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
pip install -r requirements.txt
python main.py
```

Server API chạy tại `http://localhost:8000`, frontend tại `http://localhost:5173`.

### Build production

```bash
cd frontend
npm run build
npm run preview
```

## Cấu trúc dữ liệu

Dữ liệu curriculum nằm trong `frontend/src/data/`:

| File | Nội dung | Số lượng |
|---|---|---|
| `vocabulary.ts` | Từ vựng N4 | ~179 từ |
| `kanji.ts` | Kanji N4 | ~177 chữ |
| `grammar.ts` | Ngữ pháp N4 | ~66 patterns |
| `quizzes.ts` | Câu hỏi quiz | ~166 câu |

## API Endpoints

| Method | Endpoint | Mô tả |
|---|---|---|
| `POST` | `/api/users` | Tạo user mới |
| `GET` | `/api/users/{id}` | Thông tin user |
| `GET` | `/api/users/{id}/progress` | Toàn bộ progress |
| `POST` | `/api/progress/{user_id}` | Cập nhật lesson progress |
| `GET` | `/api/vocabulary/due/{user_id}` | Từ vựng cần ôn hôm nay |
| `POST` | `/api/vocabulary/review/{user_id}` | Lưu kết quả ôn từ vựng |
| `GET` | `/api/kanji/due/{user_id}` | Kanji cần ôn hôm nay |
| `POST` | `/api/kanji/review/{user_id}` | Lưu kết quả ôn kanji |
| `POST` | `/api/checklist/{user_id}` | Cập nhật daily checklist |
| `POST` | `/api/quizzes/{user_id}` | Lưu kết quả quiz |

> Backend đã có đầy đủ endpoint nhưng **chưa được kết nối với frontend**. Hiện tại frontend dùng Zustand + localStorage.

## Lộ trình phát triển

Xem [ROADMAP.md](ROADMAP.md) để biết kế hoạch chi tiết theo từng giai đoạn.

## Tài nguyên học tập

Dự án sử dụng giáo trình **Minna no Nihongo** (本課) — audio files đã được extract vào `frontend/public/audio/`.
