// Auto-generate a daily review set from spaced-rep due items + weak items
import { vocabulary } from './vocabulary';
import { kanji } from './kanji';
import { grammar } from './grammar';
import { useStudyStore } from '@/store/studyStore';

function getTodayKey(): string {
  return new Date().toISOString().split('T')[0];
}

/** Items studied within the last 7 days but not yet mastered */
function recentWeak<T extends { id: string }>(items: T[], progress: Record<string, { lastReview?: string; status?: string }>): T[] {
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  const weekStr = weekAgo.toISOString().split('T')[0];
  return items.filter((item) => {
    const p = progress[item.id];
    if (!p) return false;
    const lr = p.lastReview;
    return lr && lr >= weekStr && p.status !== 'mastered';
  });
}

/** Build a mixed daily review set (~20 items max) */
export function generateDailyReview() {
  const store = useStudyStore.getState();
  const dueVocabIds = store.getDueVocab();
  const dueKanjiIds = store.getDueKanji();
  const dueGrammarIds = store.getDueGrammar();

  const dueVocab = vocabulary.filter((v) => dueVocabIds.includes(v.id));
  const dueKanji = kanji.filter((k) => dueKanjiIds.includes(k.id));
  const dueGrammar = grammar.filter((g) => dueGrammarIds.includes(g.id));

  const weakVocab = recentWeak(vocabulary.filter((v) => !dueVocabIds.includes(v.id)), store.vocabProgress);
  const weakKanji = recentWeak(kanji.filter((k) => !dueKanjiIds.includes(k.id)), store.kanjiProgress);
  const weakGrammar = recentWeak(grammar.filter((g) => !dueGrammarIds.includes(g.id)), store.grammarProgress);

  // Combine: due first, then weak, cap each type
  const MAX_VOCAB = 8;
  const MAX_KANJI = 4;
  const MAX_GRAMMAR = 8;

  const vocabPool = [...dueVocab, ...weakVocab].slice(0, MAX_VOCAB);
  const kanjiPool = [...dueKanji, ...weakKanji].slice(0, MAX_KANJI);
  const grammarPool = [...dueGrammar, ...weakGrammar].slice(0, MAX_GRAMMAR);

  // Build review items
  type ReviewItem = {
    type: 'vocabulary' | 'kanji' | 'grammar';
    dataId: string;
    question: string;
    questionJa: string;
    options: string[];
    correctIdx: number;
    explanation: string;
  };

  const items: ReviewItem[] = [];

  // === VOCABULARY: show kanji, pick correct reading ===
  for (const v of vocabPool) {
    const correctReading = v.reading;
    const otherReadings = vocabulary
      .filter((v2) => v2.id !== v.id && v2.reading !== correctReading)
      .map((v2) => v2.reading);
    const wrongs = shuffleAndPick(otherReadings, 3, ['—', '？', '...']);
    const correctIdx = Math.floor(Math.random() * 4);
    const options = [...wrongs.slice(0, correctIdx), correctReading, ...wrongs.slice(correctIdx)];

    items.push({
      type: 'vocabulary',
      dataId: v.id,
      question: 'Cách đọc của từ này là gì?',
      questionJa: v.japanese,
      options,
      correctIdx,
      explanation: `${v.japanese}（${v.reading}）= ${v.meaningVi}`
    });
  }

  // === KANJI: show character, pick correct meaning ===
  for (const k of kanjiPool) {
    const correctMeaning = k.meaningVi;
    const otherMeanings = kanji
      .filter((k2) => k2.id !== k.id && k2.meaningVi !== correctMeaning)
      .map((k2) => k2.meaningVi);
    const wrongs = shuffleAndPick(otherMeanings, 3, ['—', '？', '...']);
    const correctIdx = Math.floor(Math.random() * 4);
    const options = [...wrongs.slice(0, correctIdx), correctMeaning, ...wrongs.slice(correctIdx)];

    items.push({
      type: 'kanji',
      dataId: k.id,
      question: 'Kanji này có nghĩa là gì?',
      questionJa: k.character,
      options,
      correctIdx,
      explanation: `${k.character} = ${k.meaningVi} (On: ${k.onyomi}, Kun: ${k.kunyomi})`
    });
  }

  // === GRAMMAR: show pattern, pick correct meaning ===
  for (const g of grammarPool) {
    const correctMeaning = g.meaningVi;
    const otherMeanings = grammar
      .filter((g2) => g2.id !== g.id && g2.meaningVi !== correctMeaning)
      .map((g2) => g2.meaningVi);
    const wrongs = shuffleAndPick(otherMeanings, 3, ['—', '？', '...']);
    const correctIdx = Math.floor(Math.random() * 4);
    const options = [...wrongs.slice(0, correctIdx), correctMeaning, ...wrongs.slice(correctIdx)];

    items.push({
      type: 'grammar',
      dataId: g.id,
      question: 'Mẫu câu này có nghĩa là gì?',
      questionJa: g.pattern,
      options,
      correctIdx,
      explanation: `${g.pattern} = ${g.meaningVi}`
    });
  }

  // Shuffle all items together
  return shuffleArray(items);
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleAndPick<T>(arr: T[], n: number, fallback: T[]): T[] {
  const shuffled = shuffleArray(arr);
  const result = shuffled.slice(0, n);
  while (result.length < n) {
    result.push(fallback[result.length % fallback.length]);
  }
  return result;
}
