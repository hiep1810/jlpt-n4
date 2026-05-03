# Hướng dẫn chạy JLPT N4 Study App

## Prerequisites

- **Node.js** >= 18.x
- **PowerShell** (Windows) hoặc **Terminal** (Mac/Linux)

---

## 1. Cài đặt dependencies

```powershell
cd frontend
npm install
```

---

## 2. Chạy Dev Server

```powershell
cd frontend
npm run dev
```

- Server chạy tại: `http://localhost:5173`
- Nếu port 5173 đang được dùng, Vite sẽ tự chuyển sang port tiếp theo (5174, 5175...)
- Nhấn `Ctrl+C` để dừng server

---

## 3. Kiểm tra TypeScript

```powershell
cd frontend
npx tsc --noEmit
```

- Không có lỗi = build OK
- Có lỗi = sửa trước khi deploy

---

## 4. Build Production

```powershell
cd frontend
npm run build
```

- Output tại: `frontend/dist/`
- Serve bằng bất kỳ static server nào (nginx, Caddy, Vercel...)

---

## 5. Preview bản build

```powershell
cd frontend
npm run preview
```

- Xem trước bản production tại `http://localhost:4173`

---

## 6. Dọn dẹp cache (khi gặp lỗi lạ)

```powershell
cd frontend
rm -r node_modules .vite dist
npm install
npm run dev
```

---

## Cấu trúc terminal cần thiết

| Mục đích | Lệnh | Port |
|---|---|---|
| Dev server | `npm run dev` | 5173 |
| TypeScript check | `npx tsc --noEmit` | — |
| Build production | `npm run build` | — |
| Preview build | `npm run preview` | 4173 |

> **Lưu ý:** Chỉ cần chạy `npm run dev` để phát triển. Các lệnh khác dùng cho kiểm tra và deploy.

---

## Routes chính

| Route | Mô tả |
|---|---|
| `/` | Trang chủ |
| `/lessons` | Danh sách bài học |
| `/lesson/:lessonId` | Chi tiết bài học (12 phần) |
| `/grammar` | Trang ngữ pháp (Tabs: Ngữ Pháp + Luyện Tập B) |
| `/vocabulary` | Danh sách từ vựng |
| `/kanji` | Danh sách kanji |
| `/flashcards` | Ôn tập flashcards |

---

## Query params hữu ích

| Route | Params | Ví dụ |
|---|---|---|
| `/grammar` | `?lesson=lesson-1` | Lọc ngữ pháp bài 1 |
| `/grammar` | `?lesson=lesson-1&grammar=g1` | Lọc + highlight g1 |
| `/vocabulary` | `?lesson=lesson-1` | Lọc từ vựng bài 1 |
| `/lesson/:id` | `?section=grammar` | Mở section cụ thể |
