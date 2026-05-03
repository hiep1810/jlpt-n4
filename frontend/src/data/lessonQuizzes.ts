// Auto-generate per-lesson quizzes from curriculum data
import { vocabulary } from './vocabulary';
import { kanji } from './kanji';
import { grammar } from './grammar';
import type { Quiz, QuizQuestion } from './quizzes';

/** Shuffle array and take N items */
function shuffleN<T>(arr: T[], n: number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
}

/** Build wrong options by picking from same pool */
function pickWrongs(correct: string, pool: string[], count = 3): string[] {
  const filtered = pool.filter((w) => w !== correct);
  return shuffleN(filtered, count);
}

/** Generate a quiz for a specific lesson ID */
export function generateLessonQuiz(lessonId: string, lessonTitle: string): Quiz | null {
  const vocab = vocabulary.filter((v) => v.lessonId === lessonId);
  const lessonKanji = kanji.filter((k) => k.lessonId === lessonId);
  const lessonGrammar = grammar.filter((g) => g.lessonId === lessonId);

  if (vocab.length === 0 && lessonGrammar.length === 0 && lessonKanji.length === 0) {
    return null;
  }

  const questions: QuizQuestion[] = [];
  let qid = 1;

  // === VOCABULARY SECTION ===
  if (vocab.length > 0) {
    // Kanji reading questions
    const vocabWithReading = vocab.filter((v) => v.reading);
    for (const v of shuffleN(vocabWithReading, Math.min(vocabWithReading.length, 5))) {
      const reading = v.japanese; // hiragana reading
      // Use full vocabulary pool for wrong options (not just other lessons)
      const wrongPool = vocabulary
        .filter((v2) => v2.japanese !== reading)
        .map((v2) => v2.japanese);
      const wrongs = shuffleN(wrongPool, 3);
      // Fallback: generate plausible wrong readings
      while (wrongs.length < 3) {
        wrongs.push(wrongPool[Math.floor(Math.random() * wrongPool.length)] || '—');
      }

      const correctIdx = Math.floor(Math.random() * 4);
      const options = [...wrongs.slice(0, correctIdx), reading, ...wrongs.slice(correctIdx)];

      questions.push({
        id: qid++,
        part: 'vocabulary',
        subType: 'kanji-reading',
        question: 'Chọn cách đọc đúng:',
        questionJa: v.reading, // kanji form
        options,
        correctAnswer: correctIdx,
        explanation: `${v.reading} (${v.japanese}) = ${v.meaningVi}`
      });
    }

    // Meaning questions
    for (const v of shuffleN(vocab, Math.min(vocab.length, 5))) {
      const wrongs = pickWrongs(
        v.meaningVi,
        vocab.filter((v2) => v2.id !== v.id).map((v2) => v2.meaningVi).concat(
          vocabulary.filter((v3) => v3.lessonId !== lessonId).map((v3) => v3.meaningVi)
        ),
        3
      );
      while (wrongs.length < 3) wrongs.push('—');

      const correctIdx = Math.floor(Math.random() * 4);
      const options = [...wrongs.slice(0, correctIdx), v.meaningVi, ...wrongs.slice(correctIdx)];

      questions.push({
        id: qid++,
        part: 'vocabulary',
        subType: 'word-meaning',
        question: 'Từ này có nghĩa là gì?',
        questionJa: `${v.japanese}（${v.reading}）`,
        options,
        correctAnswer: correctIdx,
        explanation: `${v.japanese} = ${v.meaningVi}`
      });
    }

    // Fill in the blank with vocabulary
    for (const v of shuffleN(vocab, Math.min(vocab.length, 3))) {
      if (!v.example) continue;
      const blanked = v.japanese;
      const wrongs = pickWrongs(
        v.japanese,
        vocab.filter((v2) => v2.id !== v.id).map((v2) => v2.japanese),
        3
      );
      while (wrongs.length < 3) wrongs.push('？');

      const correctIdx = Math.floor(Math.random() * 4);
      const options = [...wrongs.slice(0, correctIdx), v.japanese, ...wrongs.slice(correctIdx)];

      questions.push({
        id: qid++,
        part: 'vocabulary',
        subType: 'word-usage',
        question: 'Điền từ thích hợp:',
        questionJa: v.example.replace(v.japanese, '______'),
        options,
        correctAnswer: correctIdx,
        explanation: v.example + ' = ' + (v.meaningVi)
      });
    }
  }

  // === KANJI SECTION ===
  if (lessonKanji.length > 0) {
    for (const k of shuffleN(lessonKanji, Math.min(lessonKanji.length, 3))) {
      // Wrong onyomi options from other kanji
      const allOn = kanji.map((k2) => k2.onyomi.split('、')[0]);
      const wrongs = pickWrongs(k.onyomi.split('、')[0], allOn, 3);
      while (wrongs.length < 3) wrongs.push('？');

      const correctIdx = Math.floor(Math.random() * 4);
      const options = [...wrongs.slice(0, correctIdx), k.onyomi.split('、')[0], ...wrongs.slice(correctIdx)];

      questions.push({
        id: qid++,
        part: 'vocabulary',
        subType: 'kanji-reading',
        question: 'Chọn âm Onyomi đúng:',
        questionJa: k.character,
        options,
        correctAnswer: correctIdx,
        explanation: `${k.character} — On: ${k.onyomi}, Kun: ${k.kunyomi}, Nghĩa: ${k.meaningVi}`
      });
    }
  }

  // === GRAMMAR SECTION ===
  for (const g of shuffleN(lessonGrammar, lessonGrammar.length)) {
    for (const ex of g.examples.slice(0, 2)) {
      // Find a key grammar particle/pattern and blank it
      const patternMatch = g.pattern.match(/～(.+?)～/);
      const particle = patternMatch ? patternMatch[1] : null;

      if (particle && ex.japanese.includes(particle)) {
        const blanked = ex.japanese.replace(particle, '______');
        // Generate wrong particles
        const particles = ['は', 'を', 'に', 'で', 'が', 'と', 'へ', 'から', 'まで', 'も', 'の', 'や'];
        const wrongs = particles.filter((p) => p !== particle).slice(0, 3);
        while (wrongs.length < 3) wrongs.push('？');

        const correctIdx = Math.floor(Math.random() * 4);
        const options = [...wrongs.slice(0, correctIdx), particle, ...wrongs.slice(correctIdx)];

        questions.push({
          id: qid++,
          part: 'grammar',
          subType: 'sentence-grammar',
          question: 'Điền trợ từ thích hợp:',
          questionJa: blanked,
          options,
          correctAnswer: correctIdx,
          explanation: `${g.pattern} = ${g.meaningVi}. ${ex.japanese} = ${ex.meaning}`
        });
      } else {
        // Full sentence completion
        const parts = ex.japanese.split(' ');
        if (parts.length >= 2) {
          const wrongs = grammar
            .filter((g2) => g2.id !== g.id)
            .flatMap((g2) => g2.examples.map((e) => e.japanese))
            .filter((s) => s !== ex.japanese)
            .slice(0, 3);
          while (wrongs.length < 3) wrongs.push('？');

          const correctIdx = Math.floor(Math.random() * 4);
          const options = [...wrongs.slice(0, correctIdx), ex.japanese, ...wrongs.slice(correctIdx)];

          questions.push({
            id: qid++,
            part: 'grammar',
            subType: 'sentence-grammar',
            question: 'Chọn câu đúng theo ngữ pháp:',
            questionJa: g.pattern + ' = ' + g.meaningVi,
            options,
            correctAnswer: correctIdx,
            explanation: `${g.pattern} = ${g.meaningVi}. ${ex.japanese} = ${ex.meaning}`
          });
        }
      }
    }
  }

  // === READING SECTION — simple sentence comprehension ===
  if (vocab.length >= 2) {
    const sampleVocab = shuffleN(vocab, Math.min(vocab.length, 2));
    const sentence = sampleVocab.map((v) => `${v.japanese}（${v.meaningVi}）`).join('、');

    questions.push({
      id: qid++,
      part: 'reading',
      subType: 'passage-reading',
      question: 'Đọc các từ vựng bài này và chọn câu đúng:',
      questionJa: `ボキャブラリー: ${sentence}`,
      options: [
        `Bài này có ${vocab.length} từ vựng`,
        `Bài này có ${vocab.length * 2} từ vựng`,
        `Bài này không có từ vựng`,
        `Bài này có 1 từ vựng`
      ],
      correctAnswer: 0,
      explanation: `Bài này có ${vocab.length} từ vựng: ${vocab.map((v) => v.japanese).join(', ')}`
    });
  }

  if (questions.length === 0) return null;

  return {
    id: `lesson-quiz-${lessonId}`,
    title: `Test ${lessonTitle}`,
    titleJa: `${lessonTitle}`,
    description: `Từ vựng: ${vocab.length} từ, Kanji: ${lessonKanji.length} chữ, Ngữ pháp: ${lessonGrammar.length} mẫu`,
    timeLimit: Math.max(10, Math.ceil(questions.length * 1.5)),
    questions
  };
}

/** Generate all per-lesson quizzes */
export function generateAllLessonQuizzes(): Quiz[] {
  const quizzes: Quiz[] = [];
  const lessons = [
    { id: 'hiragana-1', title: 'Bài 1 — Giới thiệu' },
    { id: 'lesson-4', title: 'Bài 4 — ～を～ます' },
    { id: 'lesson-5', title: 'Bài 5 — ～に～ます' },
    { id: 'lesson-6', title: 'Bài 6 — あります/います' },
    { id: 'lesson-7', title: 'Bài 7 — Địa điểm' },
    { id: 'lesson-8', title: 'Bài 8 — あげます/もらいます' },
    { id: 'lesson-9', title: 'Bài 9 — 好き/きらい/ほしい/たい' },
    { id: 'lesson-10', title: 'Bài 10 — So sánh' },
    { id: 'lesson-11', title: 'Bài 11 — Động từ nhóm + thể て' },
    { id: 'lesson-12', title: 'Bài 12 — ～てもいいです/～てはいけません' },
    { id: 'lesson-13', title: 'Bài 13 — ～ています' },
    { id: 'lesson-14', title: 'Bài 14 — ～てあります' },
    { id: 'lesson-15', title: 'Bài 15 — Thể ない' },
    { id: 'lesson-16', title: 'Bài 16 — ～たことがあります' },
    { id: 'lesson-17', title: 'Bài 17 — ～たり～たりします' },
    { id: 'lesson-18', title: 'Bài 18 — ～ましょう/～ませんか' },
    { id: 'lesson-19', title: 'Bài 19 — ～たら' },
    { id: 'lesson-20', title: 'Bài 20 — ～と' },
    { id: 'lesson-21', title: 'Bài 21 — ～なければならない' },
    { id: 'lesson-22', title: 'Bài 22 — Thể thông thường' },
    { id: 'lesson-23', title: 'Bài 23 — Bị động' },
    { id: 'lesson-24', title: 'Bài 24 — Sai khiến' },
    { id: 'lesson-25', title: 'Bài 25 — Ôn tập thể て' },
    { id: 'lesson-26', title: 'Bài 26 — ～ている (trạng thái)' },
    { id: 'lesson-27', title: 'Bài 27 — ～そうです (truyền tin)' },
    { id: 'lesson-28', title: 'Bài 28 — ～ようです/～らしいです' },
    { id: 'lesson-30', title: 'Bài 30 — ～かもしれません' },
    { id: 'lesson-31', title: 'Bài 31 — ～てしまう' },
    { id: 'lesson-32', title: 'Bài 32 — Thể khả năng' },
    { id: 'lesson-33', title: 'Bài 33 — ～ことにする/～ことになる' },
    { id: 'lesson-34', title: 'Bài 34 — てあげる/もらう/くれる' },
    { id: 'lesson-35', title: 'Bài 35 — ～すぎる' },
    { id: 'lesson-36', title: 'Bài 36 — ～ようにする/ようになる' },
    { id: 'lesson-37', title: 'Bài 37 — ～ておく' },
    { id: 'lesson-38', title: 'Bài 38 — ～のに' },
    { id: 'lesson-39', title: 'Bài 39 — ～はずです' },
    { id: 'lesson-40', title: 'Bài 40 — ～つもりです' },
    { id: 'lesson-41', title: 'Bài 41 — ～てみます' },
    { id: 'lesson-42', title: 'Bài 42 — ～そうです (trông có vẻ)' },
    { id: 'lesson-43', title: 'Bài 43 — ～といいですね/～ほうがいいです' },
    { id: 'lesson-44', title: 'Bài 44 — ～ために' },
    { id: 'lesson-45', title: 'Bài 45 — ～ように' },
    { id: 'lesson-47', title: 'Bài 47 — Kính ngữ' },
    { id: 'lesson-48', title: 'Bài 48 — Khiêm nhường ngữ' },
  ];

  for (const lesson of lessons) {
    const quiz = generateLessonQuiz(lesson.id, lesson.title);
    if (quiz) quizzes.push(quiz);
  }

  return quizzes;
}
