// JLPT N4 Practice Quiz Data
// Structure follows official JLPT N4 format:
// Part 1: 言語知識（語彙・文法）
// Part 2: 読解
// Part 3: 聴解

export interface QuizQuestion {
  id: number;
  part: 'vocabulary' | 'grammar' | 'reading' | 'listening';
  subType?: string;
  question: string;
  questionJa?: string;
  options: string[];
  imageOptions?: string[]; // 4 image URLs for A/B/C/D visual choices (listening Mondai 2 & 4)
  correctAnswer: number;
  explanation?: string;
  audioNum?: number;
  audioScript?: string;
  explanationJa?: string;
}

export interface Quiz {
  id: string;
  title: string;
  titleJa: string;
  description: string;
  timeLimit: number; // minutes
  questions: QuizQuestion[];
}

export const quizzes: Quiz[] = [

  // ===== IMAGE TEST QUIZ — Listening with Pictures =====
  {
    id: 'n4-image-test',
    title: '🖼️ Test Nghe có hình ảnh',
    titleJa: '聴解イラスト テスト',
    description: 'Quiz test phần hiển thị hình ảnh 2×2 trong listening — JLPT Mondai 2 & 4 style (10 câu)',
    timeLimit: 15,
    questions: [
      // Q1: Choose the correct item (4 object images)
      {
        id: 1, part: 'listening', subType: 'point-listening',
        question: 'Người phụ nữ sẽ mua cái nào? Nghe và chọn hình đúng.',
        questionJa: '女の人が買うものはどれですか。',
        imageOptions: [
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#fff3e0" rx="8"/><text x="100" y="95" text-anchor="middle" font-size="56">🎂</text><text x="100" y="145" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">ケーキ</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#e8f5e9" rx="8"/><text x="100" y="95" text-anchor="middle" font-size="56">🍞</text><text x="100" y="145" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">パン</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#e3f2fd" rx="8"/><text x="100" y="95" text-anchor="middle" font-size="56">🍚</text><text x="100" y="145" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">ごはん</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#fce4ec" rx="8"/><text x="100" y="95" text-anchor="middle" font-size="56">🍜</text><text x="100" y="145" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">ラーメン</text></svg>`),
        ],
        options: ['A — ケーキ', 'B — パン', 'C — ごはん', 'D — ラーメン'],
        correctAnswer: 0,
        explanation: 'Người phụ nữ mua bánh ngọt (ケーキ).',
        audioScript: '女の人：このケーキとパン、どっちにしよう。\n男の人：ケーキのほうが おいしそうだよ。\n女の人：じゃ、ケーキにする。'
      },
      // Q2: Choose the correct time (4 clock images)
      {
        id: 2, part: 'listening', subType: 'point-listening',
        question: 'Cuộc họp bắt đầu lúc mấy giờ? Nghe và chọn đồng hồ đúng.',
        questionJa: '会議は何時からですか。',
        imageOptions: [
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#e3f2fd" rx="8"/><circle cx="100" cy="85" r="60" fill="white" stroke="#333" stroke-width="3"/><line x1="100" y1="85" x2="100" y2="45" stroke="#333" stroke-width="3"/><line x1="100" y1="85" x2="140" y2="85" stroke="#333" stroke-width="2"/><circle cx="100" cy="85" r="4" fill="#333"/><text x="100" y="170" text-anchor="middle" font-size="16" fill="#333" font-family="sans-serif">9:00</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#e8f5e9" rx="8"/><circle cx="100" cy="85" r="60" fill="white" stroke="#333" stroke-width="3"/><line x1="100" y1="85" x2="100" y2="45" stroke="#333" stroke-width="3"/><line x1="100" y1="85" x2="100" y2="125" stroke="#333" stroke-width="2"/><circle cx="100" cy="85" r="4" fill="#333"/><text x="100" y="170" text-anchor="middle" font-size="16" fill="#333" font-family="sans-serif">6:30</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#fff3e0" rx="8"/><circle cx="100" cy="85" r="60" fill="white" stroke="#333" stroke-width="3"/><line x1="100" y1="85" x2="100" y2="45" stroke="#333" stroke-width="3"/><line x1="100" y1="85" x2="140" y2="110" stroke="#333" stroke-width="2"/><circle cx="100" cy="85" r="4" fill="#333"/><text x="100" y="170" text-anchor="middle" font-size="16" fill="#333" font-family="sans-serif">10:00</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#fce4ec" rx="8"/><circle cx="100" cy="85" r="60" fill="white" stroke="#333" stroke-width="3"/><line x1="100" y1="85" x2="100" y2="45" stroke="#333" stroke-width="3"/><line x1="100" y1="85" x2="60" y2="85" stroke="#333" stroke-width="2"/><circle cx="100" cy="85" r="4" fill="#333"/><text x="100" y="170" text-anchor="middle" font-size="16" fill="#333" font-family="sans-serif">3:00</text></svg>`),
        ],
        options: ['A — 9:00', 'B — 6:30', 'C — 10:00', 'D — 3:00'],
        correctAnswer: 2,
        explanation: 'Cuộc họp bắt đầu lúc 10:00.',
        audioScript: '女の人：会議の時間は？\n男の人：10時からだよ。忘れないで。\n女の人：うん、わかった。'
      },
      // Q3: Choose the correct emotion (4 face images)
      {
        id: 3, part: 'listening', subType: 'point-listening',
        question: 'Người đàn ông cảm thấy thế nào? Nghe và chọn hình đúng.',
        questionJa: '男の人はどんな気持ちですか。',
        imageOptions: [
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#e8f5e9" rx="8"/><circle cx="100" cy="80" r="50" fill="#ffe082" stroke="#f9a825" stroke-width="2"/><circle cx="82" cy="68" r="5" fill="#333"/><circle cx="118" cy="68" r="5" fill="#333"/><path d="M 78 95 Q 100 115 122 95" fill="none" stroke="#333" stroke-width="3" stroke-linecap="round"/><text x="100" y="160" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">うれしい</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#e3f2fd" rx="8"/><circle cx="100" cy="80" r="50" fill="#ffe082" stroke="#f9a825" stroke-width="2"/><circle cx="82" cy="68" r="5" fill="#333"/><circle cx="118" cy="68" r="5" fill="#333"/><path d="M 78 105 Q 100 88 122 105" fill="none" stroke="#333" stroke-width="3" stroke-linecap="round"/><circle cx="88" cy="82" r="2" fill="#64b5f6"/><circle cx="112" cy="82" r="2" fill="#64b5f6"/><text x="100" y="160" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">かなしい</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#fce4ec" rx="8"/><circle cx="100" cy="80" r="50" fill="#ffe082" stroke="#f9a825" stroke-width="2"/><line x1="75" y1="60" x2="90" y2="68" stroke="#333" stroke-width="3"/><line x1="125" y1="60" x2="110" y2="68" stroke="#333" stroke-width="3"/><circle cx="82" cy="68" r="5" fill="#333"/><circle cx="118" cy="68" r="5" fill="#333"/><line x1="80" y1="100" x2="120" y2="100" stroke="#333" stroke-width="3"/><text x="100" y="160" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">おこる</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#fff3e0" rx="8"/><circle cx="100" cy="80" r="50" fill="#ffe082" stroke="#f9a825" stroke-width="2"/><circle cx="82" cy="65" r="8" fill="white" stroke="#333" stroke-width="2"/><circle cx="118" cy="65" r="8" fill="white" stroke="#333" stroke-width="2"/><circle cx="82" cy="65" r="4" fill="#333"/><circle cx="118" cy="65" r="4" fill="#333"/><circle cx="100" cy="100" r="8" fill="none" stroke="#333" stroke-width="2"/><text x="100" y="160" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">おどろく</text></svg>`),
        ],
        options: ['A — うれしい (vui)', 'B — かなしい (buồn)', 'C — おこる (tức)', 'D — おどろく (ngạc nhiên)'],
        correctAnswer: 0,
        explanation: 'Người đàn ông vui vì được điểm tốt.',
        audioScript: '男の人：テストの結果を見た？\n女の人：うん、100点だったんだって！\n男の人：やった！よかった！'
      },
      // Q4: Choose the correct weather (4 weather images)
      {
        id: 4, part: 'listening', subType: 'point-listening',
        question: 'Thời tiết ngày mai thế nào? Nghe và chọn hình đúng.',
        questionJa: '明日の天気はどうですか。',
        imageOptions: [
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#fff9c4" rx="8"/><circle cx="100" cy="80" r="35" fill="#fdd835"/><line x1="100" y1="30" x2="100" y2="20" stroke="#fdd835" stroke-width="3"/><line x1="100" y1="130" x2="100" y2="140" stroke="#fdd835" stroke-width="3"/><line x1="50" y1="80" x2="40" y2="80" stroke="#fdd835" stroke-width="3"/><line x1="150" y1="80" x2="160" y2="80" stroke="#fdd835" stroke-width="3"/><line x1="65" y1="45" x2="58" y2="38" stroke="#fdd835" stroke-width="3"/><line x1="135" y1="45" x2="142" y2="38" stroke="#fdd835" stroke-width="3"/><line x1="65" y1="115" x2="58" y2="122" stroke="#fdd835" stroke-width="3"/><line x1="135" y1="115" x2="142" y2="122" stroke="#fdd835" stroke-width="3"/><text x="100" y="170" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">晴れ ☀️</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#e0e0e0" rx="8"/><ellipse cx="80" cy="80" rx="40" ry="25" fill="#bdbdbd"/><ellipse cx="120" cy="85" rx="35" ry="20" fill="#bdbdbd"/><ellipse cx="100" cy="95" rx="45" ry="22" fill="#9e9e9e"/><line x1="70" y1="120" x2="65" y2="140" stroke="#42a5f5" stroke-width="2"/><line x1="100" y1="120" x2="95" y2="140" stroke="#42a5f5" stroke-width="2"/><line x1="130" y1="120" x2="125" y2="140" stroke="#42a5f5" stroke-width="2"/><text x="100" y="170" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">雨 🌧️</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#e8eaf6" rx="8"/><ellipse cx="80" cy="75" rx="35" ry="22" fill="#e0e0e0"/><ellipse cx="120" cy="80" rx="30" ry="18" fill="#e0e0e0"/><circle cx="140" cy="55" r="18" fill="#fdd835"/><text x="100" y="130" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">曇り時々晴れ</text><text x="100" y="170" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">くもり ☁️</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#e3f2fd" rx="8"/><ellipse cx="80" cy="75" rx="35" ry="22" fill="#e0e0e0"/><ellipse cx="120" cy="80" rx="30" ry="18" fill="#e0e0e0"/><circle cx="60" cy="120" r="4" fill="white" stroke="#90caf9" stroke-width="1"/><circle cx="80" cy="130" r="4" fill="white" stroke="#90caf9" stroke-width="1"/><circle cx="100" cy="125" r="4" fill="white" stroke="#90caf9" stroke-width="1"/><circle cx="120" cy="135" r="4" fill="white" stroke="#90caf9" stroke-width="1"/><text x="100" y="170" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">雪 ❄️</text></svg>`),
        ],
        options: ['A — 晴れ (nắng)', 'B — 雨 (mưa)', 'C — 曇り (nhiều mây)', 'D — 雪 (tuyết)'],
        correctAnswer: 0,
        explanation: 'Ngày mai trời nắng.',
        audioScript: '女の人：明日の天気は？\n男の人：晴れだって。いい天気だよ。\n女の人：よかった。洗濯できる。'
      },
      // Q5: Choose the correct action (4 action images)
      {
        id: 5, part: 'listening', subType: 'task-listening',
        question: 'Người đàn ông đang làm gì? Nghe và chọn hình đúng.',
        questionJa: '男の人がしていることはどれですか。',
        imageOptions: [
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#e8f5e9" rx="8"/><rect x="60" y="60" width="80" height="60" rx="4" fill="#42a5f5"/><rect x="65" y="65" width="70" height="45" fill="white"/><text x="100" y="145" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">テレビを見る</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#fff3e0" rx="8"/><rect x="70" y="55" width="60" height="45" rx="2" fill="#8d6e63"/><rect x="75" y="60" width="50" height="35" fill="white" stroke="#5d4037" stroke-width="1"/><line x1="80" y1="70" x2="120" y2="70" stroke="#42a5f5" stroke-width="2"/><line x1="80" y1="78" x2="115" y2="78" stroke="#42a5f5" stroke-width="2"/><line x1="80" y1="86" x2="110" y2="86" stroke="#42a5f5" stroke-width="2"/><text x="100" y="145" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">本を読む</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#e3f2fd" rx="8"/><circle cx="100" cy="75" r="30" fill="#ffe082" stroke="#f9a825" stroke-width="2"/><circle cx="90" cy="70" r="4" fill="#333"/><circle cx="110" cy="70" r="4" fill="#333"/><path d="M 90 85 Q 100 95 110 85" fill="none" stroke="#333" stroke-width="2"/><circle cx="75" cy="90" r="15" fill="#42a5f5"/><circle cx="125" cy="90" r="15" fill="#42a5f5"/><text x="100" y="145" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">電話する</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#fce4ec" rx="8"/><circle cx="100" cy="70" r="25" fill="#ffe082" stroke="#f9a825" stroke-width="2"/><circle cx="92" cy="65" r="3" fill="#333"/><circle cx="108" cy="65" r="3" fill="#333"/><path d="M 92 78 Q 100 85 108 78" fill="none" stroke="#333" stroke-width="2"/><rect x="80" y="100" width="40" height="30" rx="3" fill="#42a5f5"/><line x1="85" y1="110" x2="115" y2="110" stroke="white" stroke-width="2"/><line x1="85" y1="118" x2="110" y2="118" stroke="white" stroke-width="2"/><text x="100" y="160" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">勉強する</text></svg>`),
        ],
        options: ['A — テレビを見る', 'B — 本を読む', 'C — 電話する', 'D — 勉強する'],
        correctAnswer: 1,
        explanation: 'Người đàn ông đang đọc sách.',
        audioScript: '女の人：今何してる？\n男の人：本を読んでるよ。おもしろいよ。\n女の人：何の本？\n男の人：日本語の本だよ。'
      },
      // Q6: Choose the correct location (4 location images)
      {
        id: 6, part: 'listening', subType: 'task-listening',
        question: 'Hai người đang ở đâu? Nghe và chọn hình đúng.',
        questionJa: '二人は今どこにいますか。',
        imageOptions: [
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#e8f5e9" rx="8"/><rect x="30" y="40" width="140" height="80" rx="4" fill="#a5d6a7"/><rect x="40" y="50" width="30" height="50" rx="2" fill="#4caf50"/><rect x="80" y="50" width="30" height="50" rx="2" fill="#4caf50"/><rect x="120" y="50" width="30" height="50" rx="2" fill="#4caf50"/><text x="100" y="155" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">病院 🏥</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#fff3e0" rx="8"/><rect x="20" y="50" width="160" height="60" rx="4" fill="#ffcc80"/><rect x="30" y="60" width="25" height="40" rx="2" fill="#e65100"/><rect x="65" y="60" width="25" height="40" rx="2" fill="#e65100"/><rect x="100" y="60" width="25" height="40" rx="2" fill="#e65100"/><rect x="135" y="60" width="25" height="40" rx="2" fill="#e65100"/><text x="100" y="155" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">図書館 📚</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#e3f2fd" rx="8"/><rect x="30" y="40" width="140" height="80" rx="4" fill="#90caf9"/><circle cx="65" cy="75" r="15" fill="white" stroke="#1565c0" stroke-width="2"/><circle cx="100" cy="75" r="15" fill="white" stroke="#1565c0" stroke-width="2"/><circle cx="135" cy="75" r="15" fill="white" stroke="#1565c0" stroke-width="2"/><text x="100" y="155" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">レストラン 🍽️</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#fce4ec" rx="8"/><rect x="30" y="40" width="140" height="80" rx="4" fill="#f48fb1"/><rect x="45" y="55" width="50" height="50" rx="4" fill="#e91e63"/><rect x="105" y="55" width="50" height="50" rx="4" fill="#e91e63"/><text x="100" y="155" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">スーパー 🛒</text></svg>`),
        ],
        options: ['A — 病院', 'B — 図書館', 'C — レストラン', 'D — スーパー'],
        correctAnswer: 1,
        explanation: 'Họ đang ở thư viện.',
        audioScript: '女の人：静かにしてください。ここは図書館ですよ。\n男の人：あ、ごめんなさい。'
      },
      // Q7: Choose the correct clothing (4 clothing images)
      {
        id: 7, part: 'listening', subType: 'point-listening',
        question: 'Người phụ nữ sẽ mặc cái nào? Nghe và chọn hình đúng.',
        questionJa: '女の人が着る服はどれですか。',
        imageOptions: [
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#e3f2fd" rx="8"/><path d="M 100 40 L 60 80 L 60 150 L 140 150 L 140 80 Z" fill="#1565c0"/><text x="100" y="175" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">青いシャツ</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#e8f5e9" rx="8"/><path d="M 100 40 L 60 80 L 60 150 L 140 150 L 140 80 Z" fill="#2e7d32"/><text x="100" y="175" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">緑のシャツ</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#fce4ec" rx="8"/><path d="M 100 40 L 60 80 L 60 150 L 140 150 L 140 80 Z" fill="#c62828"/><text x="100" y="175" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">赤いシャツ</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#fff3e0" rx="8"/><path d="M 100 40 L 60 80 L 60 150 L 140 150 L 140 80 Z" fill="#f9a825"/><text x="100" y="175" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">黄色いシャツ</text></svg>`),
        ],
        options: ['A — 青いシャツ', 'B — 緑のシャツ', 'C — 赤いシャツ', 'D — 黄色いシャツ'],
        correctAnswer: 0,
        explanation: 'Người phụ nữ chọn áo sơ mi xanh.',
        audioScript: '女の人：この服、どれがいい？\n男の人：青いのが いいよ。\n女の人：じゃ、これにする。'
      },
      // Q8: Choose the correct direction (4 map images)
      {
        id: 8, part: 'listening', subType: 'task-listening',
        question: 'Đi hướng nào? Nghe và chọn bản đồ đúng.',
        questionJa: 'どちらへ行きますか。',
        imageOptions: [
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#e8f5e9" rx="8"/><line x1="100" y1="140" x2="100" y2="50" stroke="#333" stroke-width="4"/><polygon points="85,65 100,45 115,65" fill="#333"/><text x="100" y="175" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">まっすぐ</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#e3f2fd" rx="8"/><path d="M 100 140 L 100 100 L 40 100" stroke="#333" stroke-width="4" fill="none"/><polygon points="45,85 25,100 45,115" fill="#333"/><text x="100" y="175" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">左</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#fff3e0" rx="8"/><path d="M 100 140 L 100 100 L 160 100" stroke="#333" stroke-width="4" fill="none"/><polygon points="155,85 175,100 155,115" fill="#333"/><text x="100" y="175" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">右</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#fce4ec" rx="8"/><path d="M 100 140 L 100 100 L 40 100" stroke="#333" stroke-width="4" fill="none"/><line x1="100" y1="100" x2="160" y2="100" stroke="#999" stroke-width="2" stroke-dasharray="5"/><polygon points="45,85 25,100 45,115" fill="#333"/><text x="100" y="175" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">左に曲がる</text></svg>`),
        ],
        options: ['A — まっすぐ', 'B — 左', 'C — 右', 'D — 左に曲がる'],
        correctAnswer: 2,
        explanation: 'Đi sang phải.',
        audioScript: '女の人：駅はどう行きますか。\n男の人：この道をまっすぐ行って、右に曲がってください。\n女の人：ありがとう。'
      },
      // Q9: Choose the correct price (4 price tag images)
      {
        id: 9, part: 'listening', subType: 'point-listening',
        question: 'Giá tiền là bao nhiêu? Nghe và chọn hình đúng.',
        questionJa: 'いくらですか。',
        imageOptions: [
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#e8f5e9" rx="8"/><rect x="50" y="40" width="100" height="80" rx="8" fill="white" stroke="#2e7d32" stroke-width="3"/><text x="100" y="80" text-anchor="middle" font-size="20" fill="#333" font-family="sans-serif" font-weight="bold">500</text><text x="100" y="105" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">円</text><text x="100" y="160" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">A</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#e3f2fd" rx="8"/><rect x="50" y="40" width="100" height="80" rx="8" fill="white" stroke="#1565c0" stroke-width="3"/><text x="100" y="80" text-anchor="middle" font-size="20" fill="#333" font-family="sans-serif" font-weight="bold">1,000</text><text x="100" y="105" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">円</text><text x="100" y="160" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">B</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#fff3e0" rx="8"/><rect x="50" y="40" width="100" height="80" rx="8" fill="white" stroke="#e65100" stroke-width="3"/><text x="100" y="80" text-anchor="middle" font-size="20" fill="#333" font-family="sans-serif" font-weight="bold">1,500</text><text x="100" y="105" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">円</text><text x="100" y="160" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">C</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#fce4ec" rx="8"/><rect x="50" y="40" width="100" height="80" rx="8" fill="white" stroke="#c62828" stroke-width="3"/><text x="100" y="80" text-anchor="middle" font-size="20" fill="#333" font-family="sans-serif" font-weight="bold">2,000</text><text x="100" y="105" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">円</text><text x="100" y="160" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">D</text></svg>`),
        ],
        options: ['A — 500円', 'B — 1,000円', 'C — 1,500円', 'D — 2,000円'],
        correctAnswer: 1,
        explanation: 'Giá là 1,000 yên.',
        audioScript: '店の人：これは 1,000円です。\n客のこと：じゃ、これを ください。'
      },
      // Q10: Choose the correct quantity (4 quantity images)
      {
        id: 10, part: 'listening', subType: 'task-listening',
        question: 'Người đàn ông mua bao nhiêu quả táo? Nghe và chọn hình đúng.',
        questionJa: 'りんごをいくつ買いますか。',
        imageOptions: [
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#e8f5e9" rx="8"/><text x="100" y="95" text-anchor="middle" font-size="60">🍎</text><text x="100" y="160" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">1つ</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#e3f2fd" rx="8"/><text x="75" y="95" text-anchor="middle" font-size="50">🍎</text><text x="125" y="95" text-anchor="middle" font-size="50">🍎</text><text x="100" y="160" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">2つ</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#fff3e0" rx="8"/><text x="60" y="95" text-anchor="middle" font-size="40">🍎</text><text x="100" y="95" text-anchor="middle" font-size="40">🍎</text><text x="140" y="95" text-anchor="middle" font-size="40">🍎</text><text x="100" y="160" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">3つ</text></svg>`),
          "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#fce4ec" rx="8"/><text x="50" y="85" text-anchor="middle" font-size="35">🍎</text><text x="83" y="85" text-anchor="middle" font-size="35">🍎</text><text x="117" y="85" text-anchor="middle" font-size="35">🍎</text><text x="150" y="85" text-anchor="middle" font-size="35">🍎</text><text x="100" y="160" text-anchor="middle" font-size="14" fill="#333" font-family="sans-serif">4つ</text></svg>`),
        ],
        options: ['A — 1つ', 'B — 2つ', 'C — 3つ', 'D — 4つ'],
        correctAnswer: 1,
        explanation: 'Người đàn ông mua 2 quả táo.',
        audioScript: '女の人：りんごをいくつ買いますか。\n男の人：2つ買って。'
      },
    ],
  },

  {
    id: 'n4-mock-1',
    title: 'Đề thi thử JLPT N4 — Đề 1',
    titleJa: 'JLPT N4 模擬試験 第1回',
    description: 'Đề thi thử đầy đủ: 言語知識・読解・聴解 (60 câu)',
    timeLimit: 110,
    questions: [

      // ========================================
      // PART 1: 言語知識 — 語彙 (Từ vựng)
      // ========================================

      // --- 漢字読み (Kanji reading) ---
      {
        id: 1, part: 'vocabulary', subType: 'kanji-reading',
        question: 'Chọn cách đọc đúng cho chữ Hán sau:',
        questionJa: '事故',
        options: ['じこ', 'しこ', 'じう', 'しく'],
        correctAnswer: 0,
        explanation: '事故 (じこ) = tai nạn'
      },
      {
        id: 2, part: 'vocabulary', subType: 'kanji-reading',
        question: 'Chọn cách đọc đúng cho chữ Hán sau:',
        questionJa: '季節',
        options: ['きせつ', 'きせ', 'かせつ', 'きしつ'],
        correctAnswer: 0,
        explanation: '季節 (きせつ) = mùa, thời tiết theo mùa'
      },
      {
        id: 3, part: 'vocabulary', subType: 'kanji-reading',
        question: 'Chọn cách đọc đúng cho chữ Hán sau:',
        questionJa: '予定',
        options: ['よてい', 'よて', 'よってい', 'ようてい'],
        correctAnswer: 0,
        explanation: '予定 (よてい) = dự định, kế hoạch'
      },
      {
        id: 4, part: 'vocabulary', subType: 'kanji-reading',
        question: 'Chọn cách đọc đúng cho chữ Hán sau:',
        questionJa: '経験',
        options: ['けいけん', 'けけん', 'きょうけん', 'けいけい'],
        correctAnswer: 0,
        explanation: '経験 (けいけん) = kinh nghiệm'
      },
      {
        id: 5, part: 'vocabulary', subType: 'kanji-reading',
        question: 'Chọn cách đọc đúng cho chữ Hán sau:',
        questionJa: '成功',
        options: ['せいこう', 'せいこ', 'せいごう', 'じょうこう'],
        correctAnswer: 0,
        explanation: '成功 (せいこう) = thành công'
      },
      {
        id: 6, part: 'vocabulary', subType: 'kanji-reading',
        question: 'Chọn cách đọc đúng cho chữ Hán sau:',
        questionJa: '注意',
        options: ['ちゅうい', 'しゅうい', 'ちうい', 'しゅい'],
        correctAnswer: 0,
        explanation: '注意 (ちゅうい) = chú ý'
      },

      // --- 漢字書き (Kanji writing — choose correct kanji for hiragana) ---
      {
        id: 7, part: 'vocabulary', subType: 'kanji-writing',
        question: 'Chọn kanji đúng cho từ sau:',
        questionJa: 'しっぱい',
        options: ['失敗', '失敗', '資敗', '詩敗'],
        correctAnswer: 0,
        explanation: '失敗 (しっぱい) = thất bại'
      },
      {
        id: 8, part: 'vocabulary', subType: 'kanji-writing',
        question: 'Chọn kanji đúng cho từ sau:',
        questionJa: 'あんぜん',
        options: ['安全', '暗全', '安前', '暗前'],
        correctAnswer: 0,
        explanation: '安全 (あんぜん) = an toàn'
      },
      {
        id: 9, part: 'vocabulary', subType: 'kanji-writing',
        question: 'Chọn kanji đúng cho từ sau:',
        questionJa: 'せき',
        options: ['席', '石', '赤', '昔'],
        correctAnswer: 0,
        explanation: '席 (せき) = chỗ ngồi'
      },
      {
        id: 10, part: 'vocabulary', subType: 'kanji-writing',
        question: 'Chọn kanji đúng cho từ sau:',
        questionJa: 'ゆうめい',
        options: ['有名', '友明', '悠名', '有命'],
        correctAnswer: 0,
        explanation: '有名 (ゆうめい) = nổi tiếng'
      },
      {
        id: 11, part: 'vocabulary', subType: 'kanji-writing',
        question: 'Chọn kanji đúng cho từ sau:',
        questionJa: 'びよういん',
        options: ['美容院', '美容員', '美療院', '美用院'],
        correctAnswer: 0,
        explanation: '美容院 (びよういん) = tiệm làm tóc'
      },

      // --- 言葉の意味 (Word meaning — choose closest meaning) ---
      {
        id: 12, part: 'vocabulary', subType: 'word-meaning',
        question: 'Từ gạch chân có nghĩa là gì?',
        questionJa: 'この花は きれいな <u>におい</u> がする。',
        options: ['Mùi hương', 'Âm thanh', 'Màu sắc', 'Hình dáng'],
        correctAnswer: 0,
        explanation: 'におい = mùi hương'
      },
      {
        id: 13, part: 'vocabulary', subType: 'word-meaning',
        question: 'Từ gạch chân có nghĩa là gì?',
        questionJa: 'この店は<u>予約</u>が必要です。',
        options: ['Đặt trước', 'Thanh toán', 'Đánh giá', 'Hủy bỏ'],
        correctAnswer: 0,
        explanation: '予約 (よやく) = đặt trước, hẹn trước'
      },
      {
        id: 14, part: 'vocabulary', subType: 'word-meaning',
        question: 'Từ gạch chân có nghĩa là gì?',
        questionJa: '電車の<u>時間</u>に <u>間に合った</u>。',
        options: ['Kịp giờ', 'Trễ giờ', 'Đổi giờ', 'Bỏ lỡ'],
        correctAnswer: 0,
        explanation: '間に合う (まにあう) = kịp giờ, đúng giờ'
      },

      // --- 類語 (Synonyms — word closest in meaning) ---
      {
        id: 15, part: 'vocabulary', subType: 'word-synonym',
        question: 'Chọn từ có nghĩa GẦN NHẤT với từ gạch chân:',
        questionJa: 'この<u>仕事</u>は おもしろいです。',
        options: ['アルバイト', '勉強', '作業', '運動'],
        correctAnswer: 0,
        explanation: '仕事 (しごと) = công việc, gần nhất với アルバイト (part-time job) trong ngữ cảnh này'
      },
      {
        id: 16, part: 'vocabulary', subType: 'word-synonym',
        question: 'Chọn từ có nghĩa GẦN NHẤT với từ gạch chân:',
        questionJa: '明日は<u>とても</u> 寒いです。',
        options: ['とても → すこし', 'とても → かなり', 'とても → あまり', 'とても → ぜんぜん'],
        correctAnswer: 1,
        explanation: 'とても = rất, gần nghĩa với かなり (khá, rất)'
      },

      // --- 言葉の使い方 (Word usage — fill in the blank) ---
      {
        id: 17, part: 'vocabulary', subType: 'word-usage',
        question: 'Điền từ thích hợp vào chỗ trống:',
        questionJa: '道で 友達に ______。',
        options: ['会った', '見た', '聞いた', '読んだ'],
        correctAnswer: 0,
        explanation: '道で友達に会った = Gặp bạn trên đường. 「会う」= gặp gỡ.'
      },
      {
        id: 18, part: 'vocabulary', subType: 'word-usage',
        question: 'Điền từ thích hợp vào chỗ trống:',
        questionJa: '荷物が ______ から、宅配便で 送ります。',
        options: ['多い', '重い', '広い', '高い'],
        correctAnswer: 1,
        explanation: '荷物が重い = hành lý nặng. 「重い」= nặng.'
      },

      // ========================================
      // PART 1: 言語知識 — 文法 (Ngữ pháp)
      // ========================================

      // --- 文法 1 (Sentence grammar — fill in blank) ---
      {
        id: 19, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp điền vào chỗ trống:',
        questionJa: '日本に 行った ______ があります。',
        options: ['こと', 'もの', 'とき', 'ところ'],
        correctAnswer: 0,
        explanation: '～たことがある = đã từng làm. "Tôi đã từng đi Nhật."'
      },
      {
        id: 20, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp điền vào chỗ trống:',
        questionJa: 'あした あめが ふったら、______ 。',
        options: ['いきません', 'いきました', 'いく', 'いかないだった'],
        correctAnswer: 0,
        explanation: '～たら (điều kiện) + hiện tại/tương lai. "Nếu mai mưa thì không đi."'
      },
      {
        id: 21, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp điền vào chỗ trống:',
        questionJa: 'しゅうまつは 本を よんだり、テレビを ______ します。',
        options: ['みたり', 'みて', 'みる', 'みた'],
        correctAnswer: 0,
        explanation: '～たり～たりします = liệt kê hành động đại diện. "Cuối tuần đọc sách, xem TV v.v."'
      },
      {
        id: 22, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp điền vào chỗ trống:',
        questionJa: 'しゅくだいを ぜんぶ ______ しまいました。',
        options: ['やって', 'やる', 'やった', 'やらない'],
        correctAnswer: 0,
        explanation: '～てしまう = hoàn thành / lỡ làm. "Tôi đã làm xong hết bài tập."'
      },
      {
        id: 23, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp điền vào chỗ trống:',
        questionJa: 'たぶん、あしたは ______ 。',
        options: ['雪が降るかもしれません', '雪が降りました', '雪が降っています', '雪が降らないでした'],
        correctAnswer: 0,
        explanation: '～かもしれません = có thể. "Có lẽ ngày mai tuyết rơi."'
      },
      {
        id: 24, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp điền vào chỗ trống:',
        questionJa: 'この料理は おいし ______ です。',
        options: ['そう', 'よう', 'らしい', 'ため'],
        correctAnswer: 0,
        explanation: '～そうです (様態) = trông có vẻ. "Món này trông có vẻ ngon."'
      },
      {
        id: 25, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp điền vào chỗ trống:',
        questionJa: '毎朝 ジョギングを ______ しています。',
        options: ['するように', 'するため', 'のに', 'ことに'],
        correctAnswer: 0,
        explanation: '～ようにする = cố gắng làm (thói quen). "Tôi cố gắng chạy bộ mỗi sáng."'
      },
      {
        id: 26, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp điền vào chỗ trống:',
        questionJa: '早く起きた ______ 、遅刻しました。',
        options: ['のに', 'から', 'ので', 'ために'],
        correctAnswer: 0,
        explanation: '～のに = mặc dù (ngược với kỳ vọng). "Mặc dù dậy sớm nhưng vẫn đến muộn."'
      },
      {
        id: 27, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp điền vào chỗ trống:',
        questionJa: 'これは 友だちに ______ 本です。',
        options: ['もらった', 'あげた', 'くれた', 'やった'],
        correctAnswer: 0,
        explanation: '～もらった = nhận từ ai (chủ ngữ là người nhận). "Đây là sách tôi nhận từ bạn."'
      },
      {
        id: 28, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp điền vào chỗ trống:',
        questionJa: 'ここに 名前を ______ ください。',
        options: ['書いて', '書く', '書いた', '書かない'],
        correctAnswer: 0,
        explanation: '～てください = hãy làm. "Hãy viết tên vào đây."'
      },
      {
        id: 29, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp điền vào chỗ trống:',
        questionJa: '先生は もう ______ 。',
        options: ['帰られました', '帰りました', '帰らせました', '帰られましたた'],
        correctAnswer: 0,
        explanation: '～られる (受身・尊敬) = kính ngữ. "Thầy/cô đã về rồi."'
      },
      {
        id: 30, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp điền vào chỗ trống:',
        questionJa: 'この部屋は 広く ______ です。',
        options: ['なりました', 'なりましたた', 'なりますた', 'なっているた'],
        correctAnswer: 0,
        explanation: '～ようになる = trở nên (sự thay đổi). "Phòng này đã trở nên rộng rãi hơn."'
      },

      // --- 文法 2 (Text grammar — sentence ordering) ---
      {
        id: 31, part: 'grammar', subType: 'text-grammar',
        question: 'Sắp xếp các từ thành câu đúng. Chọn từ đứng ở vị trí <u>______</u>:',
        questionJa: '私は 毎朝 ______ ______ ______ 行って います。 \n\nA. ジョギングを　B. 6時に　C. 近くの公園に',
        options: ['A — ジョギングを', 'B — 6時に', 'C — 近くの公園に'],
        correctAnswer: 1,
        explanation: 'Thứ tự đúng: 私は 毎朝 (B) 6時に (A) ジョギングを (C) 近くの公園に 行っています. Vị trí gạch chân thứ nhất là B — 6時に.'
      },
      {
        id: 32, part: 'grammar', subType: 'text-grammar',
        question: 'Sắp xếp các từ thành câu đúng. Chọn từ đứng ở vị trí <u>______</u>:',
        questionJa: '昨日は ______ ______ ______ ませんでした。 \n\nA. 全然　B. 眠れ　C. 夜遅くまで 勉強して',
        options: ['A — 全然', 'B — 眠れ', 'C — 夜遅くまで 勉強して'],
        correctAnswer: 1,
        explanation: 'Thứ tự đúng: 昨日は (C) 夜遅くまで 勉強して (A) 全然 (B) 眠れませんでした. Vị trí gạch chân thứ 2 là A — 全然.'
      },
      {
        id: 33, part: 'grammar', subType: 'text-grammar',
        question: 'Sắp xếp các từ thành câu đúng. Chọn từ đứng ở vị trí <u>______</u>:',
        questionJa: 'この本は ______ ______ ______ 読みました。 \n\nA. とても　B. おもしろくて　C. 三時間で',
        options: ['A — とても', 'B — おもしろくて', 'C — 三時間で'],
        correctAnswer: 2,
        explanation: 'Thứ tự đúng: この本は (A) とても (B) おもしろくて (C) 三時間で 読みました.'
      },

      // --- 文法 3 (Passage grammar — choose correct expression) ---
      {
        id: 34, part: 'grammar', subType: 'text-grammar',
        question: 'Chọn cách diễn đạt đúng để hoàn thành đoạn hội thoại:',
        questionJa: 'A: 山田さん、結婚式は どうでしたか。\nB: ええ、たくさんの人に ______。',
        options: ['祝ってもらいました', '祝いました', '祝福しました', '祝わられました'],
        correctAnswer: 0,
        explanation: '～てもらう = được ai làm gì cho. "Tôi được nhiều người chúc mừng (đám cưới)."'
      },
      {
        id: 35, part: 'grammar', subType: 'text-grammar',
        question: 'Chọn cách diễn đạt đúng để hoàn thành đoạn hội thoại:',
        questionJa: 'A: このパソコン、使い方が わかりますか。\nB: いいえ、______。',
        options: ['使い方が よくわからないんです', '使うことができません', '使いません', '使っていません'],
        correctAnswer: 0,
        explanation: '～ないんです = giải thích lý do/tình huống. "Tôi không rõ cách dùng lắm."'
      },

      // ========================================
      // PART 2: 読解 (Đọc hiểu)
      // ========================================

      // --- 短い文章 (Short passage reading) ---
      {
        id: 36, part: 'reading', subType: 'passage-reading',
        question: 'Đọc đoạn văn và chọn câu trả lời đúng:',
        questionJa: '【メール】\n\n田中さん\n\n明日のパーティーのことです。時間は 午後7時からです。場所は レストラン「さくら」です。駅の前です。食べられないものがあれば、知らせてください。\n\n山本',
        options: [
          'Tiệc bắt đầu lúc 6 giờ tối',
          'Nhà hàng "Sakura" ở trước ga',
          'Yamamoto không ăn được món gì đó',
          'Tiệc tổ chức tại nhà Tanaka'
        ],
        correctAnswer: 1,
        explanation: '「駅の前です」= ở trước ga. Nhà hàng "Sakura" nằm ngay trước ga.'
      },
      {
        id: 37, part: 'reading', subType: 'passage-reading',
        question: 'Đọc đoạn văn và chọn câu trả lời đúng:',
        questionJa: '【お知らせ】\n\n当ホテルの プールは 7月1日から 8月31日まで 使えます。時間は 午前7時から 午後9時までです。ホテルの お客さんは 無料で 使えます。',
        options: [
          'Hồ bơi mở cửa quanh năm',
          'Khách sạn khác cũng được sử dụng miễn phí',
          'Mở cửa từ 7 giờ sáng đến 9 giờ tối',
          'Hồ bơi đóng cửa vào tháng 8'
        ],
        correctAnswer: 2,
        explanation: '「午前7時から 午後9時までです」= từ 7:00 sáng đến 9:00 tối.'
      },
      {
        id: 38, part: 'reading', subType: 'passage-reading',
        question: 'Đọc đoạn văn và chọn câu trả lời đúng:',
        questionJa: '私は 来年 大学を 卒業します。卒業してからは 日本へ 行って、日本語を もっと 勉強する つもりです。そして、日本の 会社で 働きたく ないです。',
        options: [
          'Suzuki muốn làm việc ở công ty Nhật',
          'Suzuki đã tốt nghiệp đại học',
          'Suzuki định đi Nhật học tiếng rồi về nước làm việc',
          'Suzuki không muốn đi Nhật'
        ],
        correctAnswer: 2,
        explanation: '「日本の会社で働きたくないです」= không muốn làm việc cho công ty Nhật → định học ở Nhật rồi về nước.'
      },
      {
        id: 39, part: 'reading', subType: 'passage-reading',
        question: 'Đọc đoạn văn và chọn câu trả lời đúng:',
        questionJa: '佐藤さんは 毎朝 6時に 起きます。朝ごはんを 食べてから、家を 出ます。会社には 7時に 着きます。9時から 仕事を 始めます。お昼は 12時から 1時までです。5時に 帰ります。',
        options: [
          'Sato đến công ty lúc 7 giờ',
          'Sato bắt đầu làm việc lúc 6 giờ',
          'Sato ăn trưa từ 1 giờ đến 2 giờ',
          'Sato về nhà lúc 6 giờ'
        ],
        correctAnswer: 0,
        explanation: '「会社には 7時に 着きます」= đến công ty lúc 7 giờ.'
      },

      // --- 中くらいの文章 (Medium passage reading) ---
      {
        id: 40, part: 'reading', subType: 'passage-reading',
        question: 'Đọc đoạn văn và chọn câu trả lời đúng:',
        questionJa: '私は 先月 友達と 一緒に 京都へ 旅行に 行きました。新幹線で 2時間ぐらい かかりました。京都では たくさんのお寺と 神社を 見ました。一番 おもしろかったのは 金閣寺です。とても きれいで、写真も たくさん 撮りました。食べ物は どれも おいしかったです。特にお茶が 有名でした。また 京都へ 行きたいと 思います。',
        options: [
          'Người này đi Kyoto một mình',
          'Đến Kyoto mất khoảng 2 tiếng bằng tàu Shinkansen',
          'Chùa đẹp nhất là chùa Kiyomizu',
          'Trà ở Kyoto không ngon'
        ],
        correctAnswer: 1,
        explanation: '「新幹線で 2時間ぐらい かかりました」= Mất khoảng 2 giờ bằng Shinkansen.'
      },
      {
        id: 41, part: 'reading', subType: 'passage-reading',
        question: 'Đọc đoạn văn và chọn câu trả lời đúng:',
        questionJa: '私は 去年から フィットネス クラブに 通って います。週に 3回 行きます。水泳と ジョギングを しています。始めは 疲れやすかったですが、今は 体が 強く なりました。風邪を 引かなく なりました。友達が できました。',
        options: [
          'Người này đi tập mỗi ngày',
          'Người này chỉ bơi',
          'Trước đây dễ bị ốm, giờ khỏe hơn rồi',
          'Không có ai quen ở phòng gym'
        ],
        correctAnswer: 2,
        explanation: '「風邪を 引かなく なりました」= Không còn bị cảm cúm nữa → khỏe hơn rồi.'
      },

      // --- 長い文章 (Long passage reading) ---
      {
        id: 42, part: 'reading', subType: 'passage-reading',
        question: 'Đọc đoạn văn và chọn câu trả lời đúng:',
        questionJa: '日本の学校では 制服を 着る 学校が 多いです。制服には いいことが たくさん あります。一つ目は 毎朝 何を 着るか 考えなくて いいことです。二つ目は みんな 同じ服を 着るので、比べないで 済むことです。三つ目は 学校の 行事のとき、すぐに 学生だと わかることです。\n\nでも、悪いことも あります。高いです。そして、同じ服ばかり 着るので、つまらないと 思う 学生も います。',
        options: [
          'Tất cả trường học Nhật đều có đồng phục',
          'Lợi ích đầu tiên là không cần nghĩ mặc gì mỗi sáng',
          'Đồng phục rất rẻ',
          'Học sinh nào cũng thích đồng phục'
        ],
        correctAnswer: 1,
        explanation: '「一つ目は 毎朝 何を 着るか 考えなくて いいことです」= Lợi ích đầu tiên: không cần nghĩ mặc gì mỗi sáng.'
      },

      // --- 情報検索 (Information search) ---
      {
        id: 43, part: 'reading', subType: 'info-search',
        question: 'Đọc bảng thông tin và chọn câu trả lời đúng:',
        questionJa: '【スポーツセンターの 料金】\n\n大人（18歳以上）: 1回 500円\n学生（高校生〜大学生）: 1回 300円\n子供（小学生以下）: 無料\n\nチケットを買うとき、学生証を 見せてください。\n\n【時間】\n月曜日〜金曜日: 午前9時〜午後10時\n土日: 午前9時〜午後8時',
        options: [
          'Người lớn trả 300 yên/lần',
          'Trẻ em dưới tiểu học miễn phí',
          'Cuối tuần mở đến 10 giờ tối',
          'Học sinh không cần giấy tờ'
        ],
        correctAnswer: 1,
        explanation: '子供（小学生以下）: 無料 = Trẻ em từ tiểu học trở xuống miễn phí.'
      },
      {
        id: 44, part: 'reading', subType: 'info-search',
        question: 'Đọc thông báo và chọn câu trả lời đúng:',
        questionJa: '【図書館から お知らせ】\n\n本を 借りた 人は 2週間以内に 返してください。\n延ばしたいときは、電話か インターネットで お願いします。\n1回だけ 2週間 延ばせます。\n返さないで いると、これ以上 借りられません。',
        options: [
          'Có thể mượn sách trong 1 tháng',
          'Có thể gia hạn qua điện thoại hoặc internet',
          'Gia hạn được nhiều lần',
          'Không trả sách vẫn được mượn thêm'
        ],
        correctAnswer: 1,
        explanation: '「電話か インターネットで お願いします」= Có thể gia hạn qua điện thoại hoặc internet.'
      },

      // --- Additional reading passages ---
      {
        id: 45, part: 'reading', subType: 'passage-reading',
        question: 'Đọc hội thoại và chọn câu trả lời đúng:',
        questionJa: '女の人：すみません、この電車は 新宿に 行きますか。\n男の人：いいえ、次の電車に 乗って ください。\n女の人：次の電車は 何時に 来ますか。\n男の人：10分後に 来ますよ。\n女の人：わかりました。ありがとう ございます。',
        options: [
          'Tàu này đi Shinjuku',
          'Tàu tiếp theo đến sau 5 phút',
          'Người phụ nữ phải đợi tàu tiếp theo 10 phút',
          'Người đàn ông đi cùng người phụ nữ'
        ],
        correctAnswer: 2,
        explanation: '「10分後に 来ますよ」= Tàu tiếp theo đến sau 10 phút. Người phụ nữ phải đợi.'
      },
      {
        id: 46, part: 'reading', subType: 'passage-reading',
        question: 'Đọc đoạn văn và chọn câu trả lời đúng:',
        questionJa: '鈴木さんは 来月 結婚します。結婚式は 家族と 友達 だけで やります。場所は ホテルです。招待状を 送りました。30人の 人が 来る つもりです。',
        options: [
          'Suzuki đã kết hôn rồi',
          'Tiệc cưới có 100 khách',
          'Suzuki đã gửi thiệp mời',
          'Tiệc cưới tổ chức tại nhà hàng'
        ],
        correctAnswer: 2,
        explanation: '「招待状を 送りました」= Đã gửi thiệp mời.'
      },
      {
        id: 47, part: 'reading', subType: 'passage-reading',
        question: 'Đọc đoạn văn và chọn câu trả lời đúng:',
        questionJa: '私は 休みの日は いつも 本を 読みます。先週は 3冊 読みました。一番 おもしろかったのは 歴史の 本です。日本の 昔の 生活に ついて 書いて あります。',
        options: [
          'Người này đọc 3 sách mỗi tuần',
          'Sách hay nhất là về lịch sử',
          'Người này không thích đọc sách',
          'Sách viết về tương lai Nhật Bản'
        ],
        correctAnswer: 1,
        explanation: '「一番 おもしろかったのは 歴史の 本です」= Sách hay nhất là sách lịch sử.'
      },

      // ========================================
      // PART 3: 聴解 (Nghe hiểu)
      // ========================================
      // Audio files reference: `/audio/{lessonNum} - {num} - {fileName}.mp3`
      // Mondai 1 = `8`, Mondai 2 = `9`, Mondai 3 = `10`

      // --- 課題理解 (Task-based listening — Mondai 1) ---
      {
        id: 48, part: 'listening', subType: 'task-listening', audioNum: 8,
        question: 'Người phụ nữ sẽ làm gì tiếp theo?',
        questionJa: '(Hãy nghe audio)',
        options: [
          'Trả sách ở quầy',
          'Làm thẻ mượn sách',
          'Chọn sách mới',
          'Về nhà'
        ],
        correctAnswer: 0,
        explanation: 'Người phụ nữ đến mượn sách, sau khi đưa thẻ thì được yêu cầu trả sau 2 tuần → Tiếp theo cô ấy sẽ nhận sách và về.',
        audioScript: '女の人：すみません、この本を 借りたいんですが。\n男の人：はい、カードを 見せてください。\n女の人：これです。\n男の人：ありがとうございます。2週間で 返してください。'
      },
      {
        id: 49, part: 'listening', subType: 'task-listening', audioNum: 8,
        question: 'Người đàn ông cần chuẩn bị gì cho cuộc họp?',
        questionJa: '(Hãy nghe audio)',
        options: [
          'Phòng họp 301',
          'Tài liệu cho cuộc họp',
          'Bản báo cáo',
          'Đồ uống cho cuộc họp'
        ],
        correctAnswer: 1,
        explanation: '「資料を 準備しておきます」= Tôi sẽ chuẩn bị tài liệu trước.',
        audioScript: '男の人：山田さん、あしたの 会議は 何時からですか。\n女の人：3時からです。場所は 302号室です。\n男の人：わかりました。資料を 準備しておきます。'
      },

      // --- ポイント理解 (Point-based listening — Mondai 2 — có hình) ---
      {
        id: 50, part: 'listening', subType: 'point-listening', audioNum: 9,
        question: 'Người đàn ông sẽ mua gì? Hãy nghe và chọn tranh đúng.',
        questionJa: '',
        imageOptions: [
          '/images/listening/q50-a.png',
          '/images/listening/q50-b.png',
          '/images/listening/q50-c.png',
          '/images/listening/q50-d.png',
        ],
        options: ['A — 2 bánh + 2 bánh mì', 'B — 2 bánh + 1 bánh mì', 'C — 1 bánh + 2 bánh mì', 'D — 3 bánh'],
        correctAnswer: 1,
        explanation: '「ケーキを 2つと、パンを 1つ ください」= 2 bánh ngọt và 1 bánh mì.',
        audioScript: '店の人：いらっしゃいませ。何に しましょうか。\n客：このケーキを 2つと、このパンを 1つ ください。\n店の人：かしこまりました。350円に なります。'
      },
      {
        id: 51, part: 'listening', subType: 'point-listening', audioNum: 9,
        question: 'Đồng hồ nào chỉ đúng giờ bài kiểm tra? Hãy nghe và chọn tranh đúng.',
        questionJa: '',
        imageOptions: [
          '/images/listening/q51-a.png',
          '/images/listening/q51-b.png',
          '/images/listening/q51-c.png',
          '/images/listening/q51-d.png',
        ],
        options: ['A', 'B', 'C', 'D'],
        correctAnswer: 1,
        explanation: 'Bài kiểm tra từ trang 10 đến 20. Giáo viên nói làm vào thứ Hai tuần sau.',
        audioScript: '先生：みなさん、来週の月曜日に テストを します。教科書の 10ページから 20ページまでです。忘れないでください。'
      },

      // --- 会話問題 (Conversation questions — Mondai 3) ---
      {
        id: 52, part: 'listening', subType: 'conversation', audioNum: 10,
        question: 'Tại sao người đàn ông xin lỗi?',
        questionJa: '(Hãy nghe audio)',
        options: [
          'Đến muộn vì kẹt xe',
          'Quên làm bài tập',
          'Làm hỏng đồ của bạn',
          'Không đến dự tiệc được'
        ],
        correctAnswer: 0,
        explanation: 'Người đàn ông xin lỗi vì đến muộn do tắc đường.',
        audioScript: '女の人：どうして 遅刻したんですか。\n男の人：すみません。電車が 止まっていたんです。\n女の人：大変でしたね。'
      },
      {
        id: 53, part: 'listening', subType: 'conversation', audioNum: 10,
        question: 'Hai người sẽ đi đâu vào cuối tuần?',
        questionJa: '(Hãy nghe audio)',
        options: [
          'Đi biển',
          'Đi núi',
          'Ở nhà',
          'Đi mua sắm'
        ],
        correctAnswer: 1,
        explanation: 'Họ quyết định đi leo núi vào cuối tuần.',
        audioScript: '男の人：今度の 土日、何を しようか。\n女の人：山に ハイキングに 行きませんか。\n男の人：いいですね。そうしましょう。'
      },

      // --- Additional listening questions ---
      {
        id: 54, part: 'listening', subType: 'task-listening', audioNum: 8,
        question: 'Người phụ nữ muốn đặt gì?',
        questionJa: '(Hãy nghe audio)',
        options: [
          'Một phòng đôi ngày 15 tháng này',
          'Một phòng đơn ngày 15 tháng sau',
          'Hai phòng đơn ngày 15',
          'Một phòng gia đình ngày 25'
        ],
        correctAnswer: 0,
        explanation: 'Người phụ nữ đặt một phòng đôi (double room) vào ngày 15.',
        audioScript: '女の人：すみません、今月の15日に ダブルルームを 予約したいんですが。\n男の人：はい、15日ですね。ダブルルームは 空いていますよ。\n女の人：お願いします。'
      },
      {
        id: 55, part: 'listening', subType: 'point-listening', audioNum: 9,
        question: 'Người đàn ông cảm thấy thế nào? Hãy nghe và chọn tranh đúng.',
        questionJa: '',
        imageOptions: [
          '/images/listening/q55-a.png',
          '/images/listening/q55-b.png',
          '/images/listening/q55-c.png',
          '/images/listening/q55-d.png',
        ],
        options: ['A — Vui', 'B — Buồn', 'C — Tức giận', 'D — Ngạc nhiên'],
        correctAnswer: 1,
        explanation: 'Người đàn ông buồn vì không vượt qua kỳ thi.',
        audioScript: '男の人：テストの 結果が 出たんだ。\n女の人：どうだった？\n男の人：だめだった。合格しなかった。\n女の人：残念だったね。'
      },
      {
        id: 56, part: 'listening', subType: 'conversation', audioNum: 10,
        question: 'Cô gái cần mang gì đến bữa tiệc?',
        questionJa: '(Hãy nghe audio)',
        options: [
          'Đồ uống',
          'Món ăn tự làm',
          'Không cần mang gì',
          'Quà tặng'
        ],
        correctAnswer: 2,
        explanation: 'Người tổ chức nói không cần mang gì cả.',
        audioScript: '女の人：明日のパーティー、何を 持って行こうか。\n男の人：何も 持って来なくて いいよ。こっちで 全部 準備するから。\n女の人：わかった。ありがとう。'
      },

    ],
  },

  // ===== QUIZ 2: Vocabulary Focused =====
  {
    id: 'n4-vocab-quiz-1',
    title: 'Quiz Từ vựng N4 — Bài 1-15',
    titleJa: '語彙クイズ N4 — 第1-15課',
    description: 'Kiểm tra từ vựng Minna no Nihongo Bài 1-15: Kanji, đọc hiểu, nghĩa từ',
    timeLimit: 25,
    questions: [
      {
        id: 1, part: 'vocabulary', subType: 'kanji-reading',
        question: 'Chọn cách đọc đúng:',
        questionJa: '病院',
        options: ['びょういん', 'はいえん', 'びょうき', 'はいん'],
        correctAnswer: 0,
        explanation: '病院 (びょういん) = bệnh viện'
      },
      {
        id: 2, part: 'vocabulary', subType: 'kanji-reading',
        question: 'Chọn cách đọc đúng:',
        questionJa: '結婚',
        options: ['けっこん', 'けつこん', 'けいこん', 'けっこ'],
        correctAnswer: 0,
        explanation: '結婚 (けっこん) = kết hôn'
      },
      {
        id: 3, part: 'vocabulary', subType: 'word-meaning',
        question: 'Chọn từ có nghĩa "ăn":',
        questionJa: '',
        options: ['飲む', '食べる', '読む', '書く'],
        correctAnswer: 1,
        explanation: '食べる (たべる) = ăn'
      },
      {
        id: 4, part: 'vocabulary', subType: 'word-meaning',
        question: 'Chọn từ có nghĩa "đi bộ":',
        questionJa: '',
        options: ['泳ぐ', '走る', '歩く', '遊ぶ'],
        correctAnswer: 2,
        explanation: '歩く (あるく) = đi bộ'
      },
      {
        id: 5, part: 'vocabulary', subType: 'kanji-reading',
        question: 'Chọn cách đọc đúng:',
        questionJa: '家族',
        options: ['かそく', 'かぞく', 'かすく', 'かくそ'],
        correctAnswer: 1,
        explanation: '家族 (かぞく) = gia đình'
      },
      {
        id: 6, part: 'vocabulary', subType: 'word-meaning',
        question: 'Chọn từ có nghĩa "yên tĩnh":',
        questionJa: '',
        options: ['にぎやか', 'きれい', '静か', '有名'],
        correctAnswer: 2,
        explanation: '静か (しずか) = yên tĩnh'
      },
      {
        id: 7, part: 'vocabulary', subType: 'kanji-reading',
        question: 'Chọn cách đọc đúng:',
        questionJa: '運転',
        options: ['うんでん', 'うんてん', 'うんで', 'うんて'],
        correctAnswer: 1,
        explanation: '運転 (うんてん) = lái xe'
      },
      {
        id: 8, part: 'vocabulary', subType: 'word-meaning',
        question: 'Chọn từ có nghĩa "phim":',
        questionJa: '',
        options: ['音楽', '映画', '趣味', '旅行'],
        correctAnswer: 1,
        explanation: '映画 (えいが) = phim'
      },
      {
        id: 9, part: 'vocabulary', subType: 'word-meaning',
        question: 'Chọn từ có nghĩa "thể thao":',
        questionJa: '',
        options: ['スポーツ', 'レストラン', 'スーパー', 'ホテル'],
        correctAnswer: 0,
        explanation: 'スポーツ = thể thao (sports)'
      },
      {
        id: 10, part: 'vocabulary', subType: 'word-usage',
        question: 'Điền từ thích hợp:',
        questionJa: 'この料理は ______ ですね。',
        options: ['辛い', '長い', '広い', '早い'],
        correctAnswer: 0,
        explanation: '辛い (からい) = cay. "Món này cay nhỉ."'
      },
    ],
  },

  // ===== QUIZ 3: Grammar Focused =====
  {
    id: 'n4-grammar-quiz-1',
    title: 'Quiz Ngữ pháp N4 — Bài 19-33',
    titleJa: '文法クイズ N4 — 第19-33課',
    description: 'Ngữ pháp N4: 条件形・伝聞・意志・可能・受身・使役',
    timeLimit: 25,
    questions: [
      {
        id: 1, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: 'あめが ふったら、______ 。',
        options: ['いきません', 'いきました', 'いく', 'いき'],
        correctAnswer: 0,
        explanation: '～たら (điều kiện) + hiện tại/tương lai. "Nếu mưa thì không đi."'
      },
      {
        id: 2, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: '日本に 行った ______ があります。',
        options: ['こと', 'もの', 'とき', 'ひと'],
        correctAnswer: 0,
        explanation: '～たことがあります = đã từng làm.'
      },
      {
        id: 3, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: 'あしたは たぶん ______ 。',
        options: ['休みかもしれません', '休みでした', '休みですた', '休みますた'],
        correctAnswer: 0,
        explanation: '～かもしれません = có thể là.'
      },
      {
        id: 4, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: 'この料理は おいし ______ です。',
        options: ['そう', 'よう', 'ため', 'らしい'],
        correctAnswer: 0,
        explanation: '～そうです (様態) = trông có vẻ.'
      },
      {
        id: 5, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: 'しゅくだいを ______ しまいました。',
        options: ['忘れて', '忘れる', '忘れた', '忘れない'],
        correctAnswer: 0,
        explanation: '～てしまいました = lỡ làm / hoàn thành.'
      },
      {
        id: 6, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: '______ のに、まけました。',
        options: ['がんばった', 'がんば', 'がんばって', 'がんばる'],
        correctAnswer: 0,
        explanation: '～のに = mặc dù. "Mặc dù cố gắng nhưng vẫn thua."'
      },
      {
        id: 7, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: 'まいにち べんきょうする ______ しています。',
        options: ['ように', 'ために', 'ことに', 'のに'],
        correctAnswer: 0,
        explanation: '～ようにする = cố gắng làm.'
      },
      {
        id: 8, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: 'かれは びょうきの ______ です。',
        options: ['よう', 'そう', 'ため', 'らしい'],
        correctAnswer: 0,
        explanation: '～ようです = có vẻ như (phán đoán dựa trên quan sát).'
      },
      {
        id: 9, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: 'りょこうのまえに ホテルを ______ おきます。',
        options: ['予約して', '予約する', '予約した', '予約'],
        correctAnswer: 0,
        explanation: '～ておく = làm trước.'
      },
      {
        id: 10, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: '先生は もう ______ 。',
        options: ['帰られました', '帰りますた', '帰ってしまいました', '帰らせます'],
        correctAnswer: 0,
        explanation: '～られました (尊敬語) = kính ngữ. Dùng cho người trên.'
      },
    ],
  },

  // ===== SECTION QUIZ: Vocabulary Only =====
  {
    id: 'n4-section-vocab',
    title: 'Luyện tập Từ vựng N4',
    titleJa: 'N4 語彙 練習',
    description: 'Chỉ phần Từ vựng — 漢字読み・漢字書き・意味・類語・使い方 (20 câu)',
    timeLimit: 20,
    questions: [
      // 漢字読み — Kanji reading
      {
        id: 1, part: 'vocabulary', subType: 'kanji-reading',
        question: 'Chọn cách đọc đúng:',
        questionJa: '事故',
        options: ['じこ', 'しこ', 'じう', 'しく'],
        correctAnswer: 0, explanation: '事故 (じこ) = tai nạn'
      },
      {
        id: 2, part: 'vocabulary', subType: 'kanji-reading',
        question: 'Chọn cách đọc đúng:',
        questionJa: '季節',
        options: ['きせつ', 'きせ', 'かせつ', 'きしつ'],
        correctAnswer: 0, explanation: '季節 (きせつ) = mùa'
      },
      {
        id: 3, part: 'vocabulary', subType: 'kanji-reading',
        question: 'Chọn cách đọc đúng:',
        questionJa: '予定',
        options: ['よてい', 'よて', 'よってい', 'ようてい'],
        correctAnswer: 0, explanation: '予定 (よてい) = dự định'
      },
      {
        id: 4, part: 'vocabulary', subType: 'kanji-reading',
        question: 'Chọn cách đọc đúng:',
        questionJa: '経験',
        options: ['けいけん', 'けけん', 'きょうけん', 'けいけい'],
        correctAnswer: 0, explanation: '経験 (けいけん) = kinh nghiệm'
      },
      {
        id: 5, part: 'vocabulary', subType: 'kanji-reading',
        question: 'Chọn cách đọc đúng:',
        questionJa: '注意',
        options: ['ちゅうい', 'しゅうい', 'ちうい', 'しゅい'],
        correctAnswer: 0, explanation: '注意 (ちゅうい) = chú ý'
      },
      {
        id: 6, part: 'vocabulary', subType: 'kanji-reading',
        question: 'Chọn cách đọc đúng:',
        questionJa: '世界',
        options: ['せかい', 'せか', 'しゅかい', 'せがい'],
        correctAnswer: 0, explanation: '世界 (せかい) = thế giới'
      },

      // 漢字書き — Kanji writing
      {
        id: 7, part: 'vocabulary', subType: 'kanji-writing',
        question: 'Chọn kanji đúng:',
        questionJa: 'しっぱい',
        options: ['失敗', '資敗', '詩敗', '司敗'],
        correctAnswer: 0, explanation: '失敗 (しっぱい) = thất bại'
      },
      {
        id: 8, part: 'vocabulary', subType: 'kanji-writing',
        question: 'Chọn kanji đúng:',
        questionJa: 'あんぜん',
        options: ['安全', '暗全', '安前', '暗前'],
        correctAnswer: 0, explanation: '安全 (あんぜん) = an toàn'
      },
      {
        id: 9, part: 'vocabulary', subType: 'kanji-writing',
        question: 'Chọn kanji đúng:',
        questionJa: 'ゆうめい',
        options: ['有名', '友明', '悠名', '有命'],
        correctAnswer: 0, explanation: '有名 (ゆうめい) = nổi tiếng'
      },
      {
        id: 10, part: 'vocabulary', subType: 'kanji-writing',
        question: 'Chọn kanji đúng:',
        questionJa: 'れきし',
        options: ['歴史', '暦史', '歴詩', '力史'],
        correctAnswer: 0, explanation: '歴史 (れきし) = lịch sử'
      },
      {
        id: 11, part: 'vocabulary', subType: 'kanji-writing',
        question: 'Chọn kanji đúng:',
        questionJa: 'かんたん',
        options: ['簡単', '感単', '漢単', '関単'],
        correctAnswer: 0, explanation: '簡単 (かんたん) = đơn giản, dễ'
      },
      {
        id: 12, part: 'vocabulary', subType: 'kanji-writing',
        question: 'Chọn kanji đúng:',
        questionJa: 'びよういん',
        options: ['美容院', '美容員', '美療院', '美用院'],
        correctAnswer: 0, explanation: '美容院 (びよういん) = tiệm làm tóc'
      },

      // 言葉の意味 — Word meaning
      {
        id: 13, part: 'vocabulary', subType: 'word-meaning',
        question: 'Từ gạch chân có nghĩa gì?',
        questionJa: 'この花は きれいな <u>におい</u> がする。',
        options: ['Mùi hương', 'Âm thanh', 'Màu sắc', 'Hình dáng'],
        correctAnswer: 0, explanation: 'におい = mùi hương'
      },
      {
        id: 14, part: 'vocabulary', subType: 'word-meaning',
        question: 'Từ gạch chân có nghĩa gì?',
        questionJa: 'この店は<u>予約</u>が必要です。',
        options: ['Đặt trước', 'Thanh toán', 'Đánh giá', 'Hủy bỏ'],
        correctAnswer: 0, explanation: '予約 (よやく) = đặt trước'
      },
      {
        id: 15, part: 'vocabulary', subType: 'word-meaning',
        question: 'Từ gạch chân có nghĩa gì?',
        questionJa: '電車の<u>時間</u>に <u>間に合った</u>。',
        options: ['Kịp giờ', 'Trễ giờ', 'Đổi giờ', 'Bỏ lỡ'],
        correctAnswer: 0, explanation: '間に合う (まにあう) = kịp giờ'
      },
      {
        id: 16, part: 'vocabulary', subType: 'word-meaning',
        question: 'Từ gạch chân có nghĩa gì?',
        questionJa: 'この<u>問題</u>は <u>簡単</u>です。',
        options: ['Vấn đề / Dễ', 'Câu hỏi / Khó', 'Trả lời / Vui', 'Kiểm tra / Buồn'],
        correctAnswer: 0, explanation: '問題 (もんだい) = vấn đề, 簡単 (かんたん) = dễ'
      },

      // 類語 — Synonyms
      {
        id: 17, part: 'vocabulary', subType: 'word-synonym',
        question: 'Chọn từ GẦN nghĩa nhất với từ gạch chân:',
        questionJa: 'この<u>仕事</u>は おもしろいです。',
        options: ['アルバイト', '勉強', '作業', '運動'],
        correctAnswer: 0, explanation: '仕事 (しごと) = công việc, gần nhất với アルバイト (part-time job)'
      },
      {
        id: 18, part: 'vocabulary', subType: 'word-synonym',
        question: 'Chọn từ GẦN nghĩa nhất với từ gạch chân:',
        questionJa: '明日は<u>とても</u> 寒いです。',
        options: ['すこし', 'かなり', 'あまり', 'ぜんぜん'],
        correctAnswer: 1, explanation: 'とても = rất, gần nghĩa với かなり (khá, rất)'
      },
      {
        id: 19, part: 'vocabulary', subType: 'word-synonym',
        question: 'Chọn từ GẦN nghĩa nhất với từ gạch chân:',
        questionJa: 'この<u>建物</u>は <u>大きい</u>です。',
        options: ['ビル / 小さい', '家 / 高い', 'たてもの / 大きい', '部屋 / 広い'],
        correctAnswer: 2, explanation: '建物 (たてもの) = tòa nhà, 大きい (おおきい) = lớn'
      },

      // 言葉の使い方 — Word usage
      {
        id: 20, part: 'vocabulary', subType: 'word-usage',
        question: 'Điền từ thích hợp:',
        questionJa: '道で 友達に ______。',
        options: ['会った', '見た', '聞いた', '読んだ'],
        correctAnswer: 0, explanation: '道で友達に会った = Gặp bạn trên đường'
      },
    ],
  },

  // ===== SECTION QUIZ: Grammar Only =====
  {
    id: 'n4-section-grammar',
    title: 'Luyện tập Ngữ pháp N4',
    titleJa: 'N4 文法 練習',
    description: 'Chỉ phần Ngữ pháp — 文の文法・文法2 (20 câu)',
    timeLimit: 25,
    questions: [
      // 文の文法 — Sentence grammar (fill in blank)
      {
        id: 1, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: '日本に 行った ______ があります。',
        options: ['こと', 'もの', 'とき', 'ところ'],
        correctAnswer: 0, explanation: '～たことがある = đã từng làm'
      },
      {
        id: 2, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: 'あした あめが ふったら、______ 。',
        options: ['いきません', 'いきました', 'いく', 'いかないだった'],
        correctAnswer: 0, explanation: '～たら (điều kiện) + hiện tại/tương lai'
      },
      {
        id: 3, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: 'しゅうまつは 本を よんだり、テレビを ______ します。',
        options: ['みたり', 'みて', 'みる', 'みた'],
        correctAnswer: 0, explanation: '～たり～たりします = liệt kê hành động đại diện'
      },
      {
        id: 4, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: 'しゅくだいを ぜんぶ ______ しまいました。',
        options: ['やって', 'やる', 'やった', 'やらない'],
        correctAnswer: 0, explanation: '～てしまう = hoàn thành / lỡ làm'
      },
      {
        id: 5, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: 'たぶん、あしたは ______ 。',
        options: ['雪が降るかもしれません', '雪が降りました', '雪が降っています', '雪が降らないでした'],
        correctAnswer: 0, explanation: '～かもしれません = có thể'
      },
      {
        id: 6, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: 'この料理は おいし ______ です。',
        options: ['そう', 'よう', 'らしい', 'ため'],
        correctAnswer: 0, explanation: '～そうです (様態) = trông có vẻ'
      },
      {
        id: 7, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: '毎朝 ジョギングを ______ しています。',
        options: ['するように', 'するため', 'のに', 'ことに'],
        correctAnswer: 0, explanation: '～ようにする = cố gắng làm (thói quen)'
      },
      {
        id: 8, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: '早く起きた ______ 、遅刻しました。',
        options: ['のに', 'から', 'ので', 'ために'],
        correctAnswer: 0, explanation: '～のに = mặc dù (ngược với kỳ vọng)'
      },
      {
        id: 9, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: 'これは 友だちに ______ 本です。',
        options: ['もらった', 'あげた', 'くれた', 'やった'],
        correctAnswer: 0, explanation: '～もらった = nhận từ ai (chủ ngữ là người nhận)'
      },
      {
        id: 10, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: 'ここに 名前を ______ ください。',
        options: ['書いて', '書く', '書いた', '書かない'],
        correctAnswer: 0, explanation: '～てください = hãy làm'
      },
      {
        id: 11, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: '先生は もう ______ 。',
        options: ['帰られました', '帰りました', '帰らせました', '帰られましたた'],
        correctAnswer: 0, explanation: '～られる (尊敬) = kính ngữ'
      },
      {
        id: 12, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: 'この部屋は 広く ______ です。',
        options: ['なりました', 'なりましたた', 'なりますた', 'なっているた'],
        correctAnswer: 0, explanation: '～ようになる = trở nên (sự thay đổi)'
      },
      {
        id: 13, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: '日本語が ______ ようになりました。',
        options: ['話せる', '話す', '話して', '話した'],
        correctAnswer: 0, explanation: '～ようになる = trở nên có thể (khả năng thay đổi)'
      },
      {
        id: 14, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: '子供のころ、よくここで ______ 。',
        options: ['遊んだものです', '遊ぶものです', '遊んでいるものです', '遊びますものです'],
        correctAnswer: 0, explanation: '～たものだ = hồi tưởng quá khứ "thường hay làm"'
      },
      {
        id: 15, part: 'grammar', subType: 'sentence-grammar',
        question: 'Chọn ngữ pháp đúng:',
        questionJa: '電車で 席を ______ 。',
        options: ['譲りました', '譲りましたました', '譲ってあげました', '譲らされました'],
        correctAnswer: 0, explanation: '譲る (ゆずる) = nhường chỗ'
      },

      // 文法2 — Text grammar (sentence ordering & passage completion)
      {
        id: 16, part: 'grammar', subType: 'text-grammar',
        question: 'Sắp xếp thành câu đúng. Chọn từ ở vị trí <u>______</u>:',
        questionJa: '私は 毎朝 ______ ______ ______ 行って います。\nA. ジョギングを B. 6時に C. 近くの公園に',
        options: ['A — ジョギングを', 'B — 6時に', 'C — 近くの公園に'],
        correctAnswer: 1, explanation: 'Thứ tự: (B) 6時に → (A) ジョギングを → (C) 近くの公園に'
      },
      {
        id: 17, part: 'grammar', subType: 'text-grammar',
        question: 'Sắp xếp thành câu đúng. Chọn từ ở vị trí <u>______</u>:',
        questionJa: '昨日は ______ ______ ______ ませんでした。\nA. 全然 B. 眠れ C. 夜遅くまで 勉強して',
        options: ['A — 全然', 'B — 眠れ', 'C — 夜遅くまで 勉強して'],
        correctAnswer: 0, explanation: 'Thứ tự: (C) 夜遅くまで 勉強して → (A) 全然 → (B) 眠れませんでした'
      },
      {
        id: 18, part: 'grammar', subType: 'text-grammar',
        question: 'Chọn cách diễn đạt đúng:',
        questionJa: 'A: 山田さん、結婚式は どうでしたか。\nB: ええ、たくさんの人に ______。',
        options: ['祝ってもらいました', '祝いました', '祝福しました', '祝わられました'],
        correctAnswer: 0, explanation: '～てもらう = được ai làm gì cho "Tôi được nhiều người chúc mừng"'
      },
      {
        id: 19, part: 'grammar', subType: 'text-grammar',
        question: 'Chọn cách diễn đạt đúng:',
        questionJa: 'A: このパソコン、使い方が わかりますか。\nB: いいえ、______。',
        options: ['使い方が よくわからないんです', '使うことができません', '使いません', '使っていません'],
        correctAnswer: 0, explanation: '～ないんです = giải thích lý do/tình huống'
      },
      {
        id: 20, part: 'grammar', subType: 'text-grammar',
        question: 'Chọn cách diễn đạt đúng:',
        questionJa: 'この 映画は ______ 人気があります。',
        options: ['特に', '特に → とくに', '特に → とくべつ', '特に → どくべつ'],
        correctAnswer: 0, explanation: '特に (とくに) = đặc biệt, nhất là'
      },
    ],
  },

  // ===== SECTION QUIZ: Reading Only =====
  {
    id: 'n4-section-reading',
    title: 'Luyện tập Đọc hiểu N4',
    titleJa: 'N4 読解 練習',
    description: 'Chỉ phần Đọc hiểu — 文章読解・情報検索 (15 câu)',
    timeLimit: 30,
    questions: [
      // 短い文章 — Short passages
      {
        id: 1, part: 'reading', subType: 'passage-reading',
        question: 'Đọc email và chọn câu trả lời đúng:',
        questionJa: '【メール】\n田中さん\n明日のパーティーのことです。時間は 午後7時からです。場所は レストラン「さくら」です。駅の前です。食べられないものがあれば、知らせてください。\n山本',
        options: [
          'Tiệc bắt đầu lúc 6 giờ tối',
          'Nhà hàng "Sakura" ở trước ga',
          'Yamamoto không ăn được món gì đó',
          'Tiệc tổ chức tại nhà Tanaka'
        ],
        correctAnswer: 1, explanation: '「駅の前です」= ở trước ga'
      },
      {
        id: 2, part: 'reading', subType: 'passage-reading',
        question: 'Đọc thông báo và chọn câu trả lời đúng:',
        questionJa: '【お知らせ】\n当ホテルの プールは 7月1日から 8月31日まで 使えます。時間は 午前7時から 午後9時までです。ホテルの お客さんは 無料で 使えます。',
        options: [
          'Hồ bơi mở cửa quanh năm',
          'Khách sạn khác cũng được sử dụng miễn phí',
          'Mở cửa từ 7 giờ sáng đến 9 giờ tối',
          'Hồ bơi đóng cửa vào tháng 8'
        ],
        correctAnswer: 2, explanation: '「午前7時から 午後9時までです」= từ 7:00 đến 21:00'
      },
      {
        id: 3, part: 'reading', subType: 'passage-reading',
        question: 'Đọc email và chọn câu trả lời đúng:',
        questionJa: '【メール】\n佐藤さんへ\n来週の 月曜日、一緒に 映画を 見に 行きませんか。3時に 駅で 会いましょう。チケットは 私が 買っておきます。\n山田より',
        options: [
          'Yamamoto muốn xem phim một mình',
          'Họ sẽ gặp nhau lúc 3 giờ ở ga',
          'Sato sẽ mua vé',
          'Họ sẽ gặp nhau vào Chủ Nhật'
        ],
        correctAnswer: 1, explanation: '「3時に 駅で 会いましょう」= Hãy gặp nhau lúc 3 giờ ở ga'
      },
      {
        id: 4, part: 'reading', subType: 'passage-reading',
        question: 'Đọc thông báo và chọn câu trả lời đúng:',
        questionJa: '【お願い】\nこの ビルは 10時に 閉めます。10時までに 出てください。出ないと、ドアが 閉まります。',
        options: [
          'Tòa nhà mở cửa lúc 10 giờ',
          'Phải rời đi trước 10 giờ',
          'Cửa không bao giờ đóng',
          'Có thể ở lại qua đêm'
        ],
        correctAnswer: 1, explanation: '「10時までに 出てください」= Hãy rời đi trước 10 giờ'
      },

      // 中くらいの文章 — Medium passages
      {
        id: 5, part: 'reading', subType: 'passage-reading',
        question: 'Đọc đoạn văn và chọn câu trả lời đúng:',
        questionJa: '私は 先月 友達と 一緒に 京都へ 旅行に 行きました。新幹線で 2時間ぐらい かかりました。京都では たくさんのお寺と 神社を 見ました。一番 おもしろかったのは 金閣寺です。とても きれいで、写真も たくさん 撮りました。食べ物は どれも おいしかったです。特にお茶が 有名でした。また 京都へ 行きたいと 思います。',
        options: [
          'Người này đi Kyoto một mình',
          'Đến Kyoto mất khoảng 2 tiếng bằng tàu Shinkansen',
          'Chùa đẹp nhất là chùa Kiyomizu',
          'Trà ở Kyoto không ngon'
        ],
        correctAnswer: 1, explanation: '「新幹線で 2時間ぐらい かかりました」= Mất khoảng 2 giờ bằng Shinkansen'
      },
      {
        id: 6, part: 'reading', subType: 'passage-reading',
        question: 'Đọc đoạn văn và chọn câu trả lời đúng:',
        questionJa: '私は 去年から フィットネス クラブに 通って います。週に 3回 行きます。水泳と ジョギングを しています。始めは 疲れやすかったですが、今は 体が 強く なりました。風邪を 引かなく なりました。友達が できました。',
        options: [
          'Người này đi tập mỗi ngày',
          'Người này chỉ bơi',
          'Trước đây dễ bị ốm, giờ khỏe hơn rồi',
          'Không có ai quen ở phòng gym'
        ],
        correctAnswer: 2, explanation: '「風邪を 引かなく なりました」= Không còn bị cảm cúm nữa'
      },
      {
        id: 7, part: 'reading', subType: 'passage-reading',
        question: 'Đọc đoạn văn và chọn câu trả lời đúng:',
        questionJa: '私は 毎週 日曜日に スーパーで 買い物します。今月は 野菜と 果物を たくさん 買いました。りんごは 甘くて おいしかったです。肉も 買いました。でも、魚は 高く なかったです。来週は パンも 買おうと 思います。',
        options: [
          'Người này mua sắm mỗi ngày',
          'Táo ngọt và ngon',
          'Cá đắt tiền',
          'Tuần sau sẽ không mua gì thêm'
        ],
        correctAnswer: 1, explanation: '「りんごは 甘くて おいしかったです」= Táo ngọt và ngon'
      },
      {
        id: 8, part: 'reading', subType: 'passage-reading',
        question: 'Đọc đoạn văn và chọn câu trả lời đúng:',
        questionJa: '鈴木さんは 来年 大学を 卒業します。卒業してからは 日本へ 行って、日本語を もっと 勉強する つもりです。そして、日本の 会社で 働きたく ないです。',
        options: [
          'Suzuki muốn làm việc ở công ty Nhật',
          'Suzuki đã tốt nghiệp đại học',
          'Suzuki định đi Nhật học tiếng rồi về nước làm việc',
          'Suzuki không muốn đi Nhật'
        ],
        correctAnswer: 2, explanation: '「日本の会社で働きたくないです」= không muốn làm việc cho công ty Nhật → định học ở Nhật rồi về nước'
      },

      // 長い文章 — Long passages
      {
        id: 9, part: 'reading', subType: 'passage-reading',
        question: 'Đọc đoạn văn và chọn câu trả lời đúng:',
        questionJa: '日本の学校では 制服を 着る 学校が 多いです。制服には いいことが たくさん あります。一つ目は 毎朝 何を 着るか 考えなくて いいことです。二つ目は みんな 同じ服を 着るので、比べないで 済むことです。三つ目は 学校の 行事のとき、すぐに 学生だと わかることです。\nでも、悪いことも あります。高いです。そして、同じ服ばかり 着るので、つまらないと 思う 学生も います。',
        options: [
          'Tất cả trường học Nhật đều có đồng phục',
          'Lợi ích đầu tiên là không cần nghĩ mặc gì mỗi sáng',
          'Đồng phục rất rẻ',
          'Học sinh nào cũng thích đồng phục'
        ],
        correctAnswer: 1, explanation: '「一つ目は 毎朝 何を 着るか 考えなくて いいことです」= Không cần nghĩ mặc gì mỗi sáng'
      },
      {
        id: 10, part: 'reading', subType: 'passage-reading',
        question: 'Đọc đoạn văn và chọn câu trả lời đúng:',
        questionJa: '私は 小さいころ、田舎の 祖父母の 家で 夏休みを 過ごしました。毎日 川で 泳いだり、山で 遊んだり しました。夜は 家族で 花火を しました。とても 楽しくて、今でも 覚えています。祖父母は もう 年老いて いましたが、いつも 笑顔で 迎えて くれました。また 会いに 行きたいです。',
        options: [
          'Người này không nhớ thời thơ ấu',
          'Người này thường chơi trong nhà vào mùa hè',
          'Ông bà luôn cười chào đón người này',
          'Người này không muốn gặp lại ông bà'
        ],
        correctAnswer: 2, explanation: '「いつも 笑顔で 迎えて くれました」= Luôn cười chào đón'
      },

      // 情報検索 — Information search
      {
        id: 11, part: 'reading', subType: 'info-search',
        question: 'Đọc bảng và chọn câu trả lời đúng:',
        questionJa: '【スポーツセンターの 料金】\n大人（18歳以上）: 1回 500円\n学生（高校生〜大学生）: 1回 300円\n子供（小学生以下）: 無料\nチケットを買うとき、学生証を 見せてください。\n【時間】\n月曜日〜金曜日: 午前9時〜午後10時\n土日: 午前9時〜午後8時',
        options: [
          'Người lớn trả 300 yên/lần',
          'Trẻ em dưới tiểu học miễn phí',
          'Cuối tuần mở đến 10 giờ tối',
          'Học sinh không cần giấy tờ'
        ],
        correctAnswer: 1, explanation: '子供（小学生以下）: 無料 = Trẻ em tiểu học trở xuống miễn phí'
      },
      {
        id: 12, part: 'reading', subType: 'info-search',
        question: 'Đọc thông báo và chọn câu trả lời đúng:',
        questionJa: '【図書館から お知らせ】\n本を 借りた 人は 2週間以内に 返してください。\n延ばしたいときは、電話か インターネットで お願いします。\n1回だけ 2週間 延ばせます。\n返さないで いると、これ以上 借りられません。',
        options: [
          'Có thể mượn sách trong 1 tháng',
          'Có thể gia hạn qua điện thoại hoặc internet',
          'Gia hạn được nhiều lần',
          'Không trả sách vẫn được mượn thêm'
        ],
        correctAnswer: 1, explanation: '「電話か インターネットで お願いします」= Gia hạn qua điện thoại hoặc internet'
      },
      {
        id: 13, part: 'reading', subType: 'info-search',
        question: 'Đọc bảng và chọn câu trả lời đúng:',
        questionJa: '【レストラン「やまと」メニュー】\nランチ: 午前11時〜午後2時 → 800円\nディナー: 午後5時〜午後10時 → 1500円\nお子様ランチ: 500円（12歳以下）\n日曜日は 休みです。',
        options: [
          'Bữa trưa giá 1500 yên',
          'Nhà hàng mở cửa Chủ Nhật',
          'Trẻ em từ 12 tuổi trở xuống có suất ăn 500 yên',
          'Bữa tối bắt đầu lúc 4 giờ chiều'
        ],
        correctAnswer: 2, explanation: 'お子様ランチ: 500円（12歳以下）= Suất ăn trẻ em 500 yên cho bé ≤12 tuổi'
      },

      // 会話読解 — Conversation reading
      {
        id: 14, part: 'reading', subType: 'passage-reading',
        question: 'Đọc hội thoại và chọn câu trả lời đúng:',
        questionJa: '女の人：すみません、この電車は 新宿に 行きますか。\n男の人：いいえ、次の電車に 乗って ください。\n女の人：次の電車は 何時に 来ますか。\n男の人：10分後に 来ますよ。\n女の人：わかりました。ありがとう ございます。',
        options: [
          'Tàu này đi Shinjuku',
          'Tàu tiếp theo đến sau 5 phút',
          'Người phụ nữ phải đợi tàu tiếp theo 10 phút',
          'Người đàn ông đi cùng người phụ nữ'
        ],
        correctAnswer: 2, explanation: '「10分後に 来ますよ」= Tàu tiếp theo đến sau 10 phút'
      },
      {
        id: 15, part: 'reading', subType: 'passage-reading',
        question: 'Đọc hội thoại và chọn câu trả lời đúng:',
        questionJa: '男の人：今度の 土日、何を しようか。\n女の人：山に ハイキングに 行きませんか。\n男の人：いいですね。そうしましょう。天気は どうですか。\n女の人：天気予報では 晴れですよ。',
        options: [
          'Họ sẽ ở nhà vào cuối tuần',
          'Họ sẽ đi biển',
          'Họ sẽ đi leo núi và thời tiết đẹp',
          'Thời tiết sẽ mưa'
        ],
        correctAnswer: 2, explanation: '「山に ハイキングに 行きませんか」「天気予報では 晴れですよ」= Đi leo núi, thời tiết đẹp'
      },
    ],
  },

  // ===== SECTION QUIZ: Listening Only =====
  {
    id: 'n4-section-listening',
    title: 'Luyện tập Nghe hiểu N4',
    titleJa: 'N4 聴解 練習',
    description: 'Chỉ phần Nghe hiểu — 課題理解・ポイント理解・会話問題 (15 câu)',
    timeLimit: 30,
    questions: [
      // 課題理解 — Task-based listening (Mondai 1)
      {
        id: 1, part: 'listening', subType: 'task-listening', audioNum: 1,
        question: 'Người phụ nữ sẽ làm gì trước?',
        questionJa: '(Hãy nghe audio)',
        options: [
          'Ăn sáng',
          'Uống thuốc',
          'Đi làm',
          'Đi mua sắm'
        ],
        correctAnswer: 1,
        explanation: 'Người phụ nữ cần uống thuốc trước khi ăn sáng.',
        audioScript: '女の人：あ、薬を 飲まなきゃ。\n男の人：ご飯の 前に？\n女の人：うん、食後に 飲む薬と 食前に 飲む薬が あるの。\n男の人：じゃ、今 飲んで。'
      },
      {
        id: 2, part: 'listening', subType: 'task-listening', audioNum: 2,
        question: 'Người đàn ông cần làm gì?',
        questionJa: '(Hãy nghe audio)',
        options: [
          'Đến bưu điện gửi đồ',
          'Mang đồ đến nhà bạn',
          'Gửi đồ qua bưu điện online',
          'Mua đồ mới'
        ],
        correctAnswer: 0,
        explanation: 'Người đàn ông cần đến bưu điện gửi quà.',
        audioScript: '女の人：これ、田中さんに 送って くれる？\n男の人：うん、郵便局に 行って 送るね。\n女の人：ありがとう。'
      },
      {
        id: 3, part: 'listening', subType: 'task-listening', audioNum: 3,
        question: 'Người phụ nữ sẽ mua gì?',
        questionJa: '(Hãy nghe audio)',
        options: [
          'Áo màu xanh',
          'Áo màu đỏ',
          'Quần màu xanh',
          'Quần màu đỏ'
        ],
        correctAnswer: 1,
        explanation: 'Người phụ nữ chọn áo màu đỏ.',
        audioScript: '女の人：このシャツ、青と 赤が ありますね。どちらが いいですか。\n男の人：僕は 青が いいな。\n女の人：じゃ、私は 赤に します。'
      },
      {
        id: 4, part: 'listening', subType: 'task-listening', audioNum: 4,
        question: 'Người đàn ông cần chuẩn bị gì?',
        questionJa: '(Hãy nghe audio)',
        options: [
          'Tài liệu cho cuộc họp',
          'Phòng họp',
          'Đồ uống',
          'Máy tính'
        ],
        correctAnswer: 0,
        explanation: '「資料を 準備しておきます」= Chuẩn bị tài liệu trước',
        audioScript: '男の人：山田さん、あしたの 会議は 何時からですか。\n女の人：3時からです。場所は 302号室です。\n男の人：わかりました。資料を 準備しておきます。'
      },

      // ポイント理解 — Point-based listening (Mondai 2 — có hình)
      {
        id: 5, part: 'listening', subType: 'point-listening', audioNum: 5,
        question: 'Người đàn ông sẽ mua cái nào? Hãy nghe và chọn tranh đúng.',
        questionJa: '',
        imageOptions: [
          '/images/listening/q5-a.png',
          '/images/listening/q5-b.png',
          '/images/listening/q5-c.png',
          '/images/listening/q5-d.png',
        ],
        options: ['A', 'B', 'C', 'D'],
        correctAnswer: 1,
        explanation: 'Người đàn ông chọn cái ở giữa (B).',
        audioScript: '男の人：この中で どれが いいですか。\n女の人：真ん中のが いいですよ。\n男の人：じゃ、それに します。'
      },
      {
        id: 6, part: 'listening', subType: 'point-listening', audioNum: 6,
        question: 'Người phụ nữ sẽ mang gì đến bữa tiệc? Hãy nghe và chọn tranh đúng.',
        questionJa: '',
        imageOptions: [
          '/images/listening/q6-a.png',
          '/images/listening/q6-b.png',
          '/images/listening/q6-c.png',
          '/images/listening/q6-d.png',
        ],
        options: ['A — Đồ uống', 'B — Hoa', 'C — Bánh ngọt', 'D — Không mang gì'],
        correctAnswer: 3,
        explanation: 'Người tổ chức nói không cần mang gì cả.',
        audioScript: '女の人：明日のパーティー、何を 持って行こうか。\n男の人：何も 持って来なくて いいよ。こっちで 全部 準備するから。\n女の人：わかった。ありがとう。'
      },
      {
        id: 7, part: 'listening', subType: 'point-listening', audioNum: 7,
        question: 'Đồng hồ nào chỉ đúng giờ cửa hàng đóng cửa? Hãy nghe và chọn tranh đúng.',
        questionJa: '',
        imageOptions: [
          '/images/listening/q7-a.png',
          '/images/listening/q7-b.png',
          '/images/listening/q7-c.png',
          '/images/listening/q7-d.png',
        ],
        options: ['A — 5:00', 'B — 6:00', 'C — 7:00', 'D — 8:00'],
        correctAnswer: 1,
        explanation: 'Cửa hàng đóng cửa lúc 6 giờ.',
        audioScript: '女の人：すみません、この店は 何時までですか。\n店の人：6時までです。\n女の人：あと 30分 ですね。ありがとう。'
      },
      {
        id: 8, part: 'listening', subType: 'point-listening', audioNum: 8,
        question: 'Người phụ nữ mượn sách trong bao lâu? Hãy nghe và chọn tranh đúng.',
        questionJa: '',
        imageOptions: [
          '/images/listening/q8-a.png',
          '/images/listening/q8-b.png',
          '/images/listening/q8-c.png',
          '/images/listening/q8-d.png',
        ],
        options: ['A — 1 tuần', 'B — 2 tuần', 'C — 3 tuần', 'D — 1 tháng'],
        correctAnswer: 1,
        explanation: '「2週間で 返してください」= Hãy trả sau 2 tuần',
        audioScript: '女の人：すみません、この本を 借りたいんですが。\n男の人：はい、カードを 見せてください。\n女の人：これです。\n男の人：ありがとうございます。2週間で 返してください。'
      },

      // 会話問題 — Conversation questions (Mondai 3)
      {
        id: 9, part: 'listening', subType: 'conversation', audioNum: 9,
        question: 'Tại sao người đàn ông xin lỗi?',
        questionJa: '(Hãy nghe audio)',
        options: [
          'Đến muộn vì tàu bị dừng',
          'Quên làm bài tập',
          'Làm hỏng đồ của bạn',
          'Không đến dự tiệc được'
        ],
        correctAnswer: 0,
        explanation: 'Người đàn ông xin lỗi vì đến muộn do tàu bị dừng.',
        audioScript: '女の人：どうして 遅刻したんですか。\n男の人：すみません。電車が 止まっていたんです。\n女の人：大変でしたね。'
      },
      {
        id: 10, part: 'listening', subType: 'conversation', audioNum: 10,
        question: 'Hai người sẽ làm gì vào cuối tuần?',
        questionJa: '(Hãy nghe audio)',
        options: [
          'Đi biển',
          'Đi leo núi',
          'Ở nhà',
          'Đi mua sắm'
        ],
        correctAnswer: 1,
        explanation: 'Họ quyết định đi leo núi vào cuối tuần.',
        audioScript: '男の人：今度の 土日、何を しようか。\n女の人：山に ハイキングに 行きませんか。\n男の人：いいですね。そうしましょう。'
      },
      {
        id: 11, part: 'listening', subType: 'conversation', audioNum: 11,
        question: 'Người phụ nữ muốn ăn gì?',
        questionJa: '(Hãy nghe audio)',
        options: [
          'Đồ Nhật',
          'Đồ Ý',
          'Đồ Trung Quốc',
          'Đồ Việt Nam'
        ],
        correctAnswer: 2,
        explanation: 'Người phụ nữ muốn ăn đồ Trung Quốc.',
        audioScript: '男の人：昼ごはん、何が 食べたい？\n女の人：中華は どう？\n男の人：うん、いいね。'
      },
      {
        id: 12, part: 'listening', subType: 'conversation', audioNum: 12,
        question: 'Người đàn ông sẽ đi bằng gì?',
        questionJa: '(Hãy nghe audio)',
        options: [
          'Tàu điện',
          'Xe buýt',
          'Đi bộ',
          'Taxi'
        ],
        correctAnswer: 2,
        explanation: 'Người đàn ông sẽ đi bộ vì ga gần.',
        audioScript: '女の人：駅まで 一緒に 行きましょうか。\n男の人：ううん、近いから 歩いて 行くよ。\n女の人：わかりました。気をつけて。'
      },
      {
        id: 13, part: 'listening', subType: 'conversation', audioNum: 13,
        question: 'Sinh viên cần mang gì đến lớp?',
        questionJa: '(Hãy nghe audio)',
        options: [
          'Sách giáo khoa',
          'Máy tính',
          'Từ điển',
          'Không cần mang gì'
        ],
        correctAnswer: 0,
        explanation: 'Giáo viên yêu cầu mang sách giáo khoa.',
        audioScript: '先生：みなさん、明日は 教科書を 持って 来てください。テストを しますから。\n学生：わかりました。'
      },
      {
        id: 14, part: 'listening', subType: 'conversation', audioNum: 14,
        question: 'Người phụ nữ cần làm gì?',
        questionJa: '(Hãy nghe audio)',
        options: [
          'Gọi điện cho bác sĩ',
          'Uống thuốc và nghỉ ngơi',
          'Đi làm bình thường',
          'Đi mua thuốc mới'
        ],
        correctAnswer: 1,
        explanation: 'Bác sĩ bảo uống thuốc và nghỉ ngơi.',
        audioScript: '医者：この薬を 飲んで、今日は ゆっくり 休んでください。\n女の人：はい、わかりました。仕事は？\n医者：明日から 大丈夫ですよ。'
      },
      {
        id: 15, part: 'listening', subType: 'conversation', audioNum: 15,
        question: 'Người đàn ông sẽ đến đâu trước?',
        questionJa: '(Hãy nghe audio)',
        options: [
          'Ngân hàng',
          'Bưu điện',
          'Siêu thị',
          'Nhà ga'
        ],
        correctAnswer: 1,
        explanation: 'Người đàn ông sẽ đến bưu điện trước.',
        audioScript: '男の人：今日は 郵便局と 銀行と スーパーに 行かなきゃ。\n女の人：どこが 一番 近い？\n男の人：郵便局だよ。そこを 先に 行って、それから 銀行に 行くね。'
      },
    ],
  },
];

export default quizzes;
