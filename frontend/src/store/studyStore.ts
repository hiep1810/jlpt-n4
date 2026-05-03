import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LessonProgress, SkillType, CardStatus, DailyChecklist, VocabularyProgress, KanjiProgress, GrammarProgress, QuizResult, ADHDSettings, FocusSession } from '@/types';

interface StudyStore {
  lessonProgress: Record<string, LessonProgress>;
  completeSkill: (lessonId: string, skill: SkillType) => void;
  completeLesson: (lessonId: string) => void;

  vocabProgress: Record<string, VocabularyProgress>;
  reviewVocab: (wordId: string, quality: 'again' | 'hard' | 'good' | 'easy') => void;
  getDueVocab: () => string[];

  kanjiProgress: Record<string, KanjiProgress>;
  reviewKanji: (kanjiId: string, quality: 'again' | 'hard' | 'good' | 'easy') => void;
  getDueKanji: () => string[];

  grammarProgress: Record<string, GrammarProgress>;
  reviewGrammar: (grammarId: string, quality: 'again' | 'hard' | 'good' | 'easy') => void;
  getDueGrammar: () => string[];

  dailyChecklist: Record<string, DailyChecklist>;
  completeSkillToday: (skill: SkillType) => void;
  getTodayChecklist: () => DailyChecklist | null;

  streak: number;
  totalStudyMinutes: number;
  addStudyMinutes: (minutes: number) => void;

  /** Quiz results history */
  quizResults: QuizResult[];
  saveQuizResult: (result: QuizResult) => void;

  /** Combined stats for Dashboard / Progress / Flashcards */
  getStats: () => {
    completedLessons: number;
    totalLessons: number;
    inProgressLessons: number;
    dueCount: number;
    masteredCount: number;
    skills: Record<SkillType, number>;
  };

  // --- ADHD-friendly features ---
  xp: number;
  level: number;
  totalCardsReviewedToday: number;
  addXP: (amount: number) => void;
  incrementCardsReviewedToday: () => void;
  resetDailyCounters: () => void;

  adhdSettings: ADHDSettings;
  updateADHDSettings: (settings: Partial<ADHDSettings>) => void;

  focusSession: FocusSession;
  startFocusSession: () => void;
  pauseFocusSession: () => void;
  resumeFocusSession: () => void;
  tickFocusSession: () => void;
  startBreak: () => void;
  skipBreak: () => void;
  resetFocusSession: () => void;
  addFocusMinute: () => void;
}

const getDateKey = (date = new Date()): string => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getTodayKey = (): string => getDateKey();

const isChecklistComplete = (checklist?: DailyChecklist | null): boolean =>
  Boolean(checklist?.listening && checklist?.speaking && checklist?.reading && checklist?.writing);

const calculateStreak = (dailyChecklist: Record<string, DailyChecklist>): number => {
  let streak = 0;
  const cursor = new Date();
  while (true) {
    const key = getDateKey(cursor);
    if (!isChecklistComplete(dailyChecklist[key])) break;
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
};

/** Shared SM2 calculation — used by vocab, kanji, grammar */
function calculateSM2(
  prev: { interval: number; ease: number; reviews: number },
  quality: 'again' | 'hard' | 'good' | 'easy',
) {
  const qualityMap = { again: 0, hard: 1, good: 2, easy: 3 };
  const q = qualityMap[quality];
  let { interval, ease, reviews } = prev;

  if (q === 0) { reviews = 0; interval = 1; }
  else if (q === 1) { interval = Math.max(1, interval * 1.2); reviews += 1; }
  else if (q === 2) {
    if (reviews === 0) interval = 1;
    else if (reviews === 1) interval = 6;
    else interval = Math.round(interval * ease);
    reviews += 1;
  } else {
    if (reviews === 0) interval = 4;
    else if (reviews === 1) interval = 10;
    else interval = Math.round(interval * ease * 1.3);
    reviews += 1;
  }

  ease = Math.max(1.3, ease + (0.1 - (3 - q) * (0.08 + (3 - q) * 0.02)));
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + Math.round(interval));

  return {
    status: (reviews >= 3 && ease >= 2.5) ? 'mastered' : (reviews >= 1 ? 'review' : 'learning') as CardStatus,
    interval: Math.round(interval),
    ease: Math.round(ease * 100) / 100,
    dueDate: dueDate.toISOString().split('T')[0],
    reviews,
    lastReview: new Date().toISOString().split('T')[0],
  };
}

/** Generic card review helper — eliminates 3x copy-paste of review + getDue */
function makeCardReview<T extends Record<string, unknown>, ID extends string>(
  getProgress: () => T,
  idField: ID,
  setProgress: (next: T) => void,
) {
  return {
    review: (cardId: string, quality: 'again' | 'hard' | 'good' | 'easy') => {
      const progress = getProgress();
      const raw = progress[cardId] as { interval: number; ease: number; reviews: number } | undefined;
      const prev: { interval: number; ease: number; reviews: number } = raw ?? { interval: 1, ease: 2.5, reviews: 0 };
      const result = calculateSM2(prev, quality);
      setProgress({ ...progress, [cardId]: { [idField]: cardId, ...result } });
    },
    getDue: (): string[] => {
      const today = getTodayKey();
      return Object.entries(getProgress())
        .filter(([, p]) => (p as { dueDate?: string; status?: string }).dueDate! <= today
          && (p as { status?: string }).status !== 'mastered')
        .map(([id]) => id);
    },
  };
}

export const useStudyStore = create<StudyStore>()(
  persist(
    (set, get) => {
      const vocab = makeCardReview(
        () => get().vocabProgress,
        'wordId' as const,
        (next) => set({ vocabProgress: next }),
      );
      const kanji = makeCardReview(
        () => get().kanjiProgress,
        'kanjiId' as const,
        (next) => set({ kanjiProgress: next }),
      );
      const grammar = makeCardReview(
        () => get().grammarProgress,
        'grammarId' as const,
        (next) => set({ grammarProgress: next }),
      );

      // Wrap review methods to also grant XP and track daily count
      const reviewVocabWithXP = (wordId: string, quality: 'again' | 'hard' | 'good' | 'easy') => {
        vocab.review(wordId, quality);
        get().addXP(get().adhdSettings.xpPerCard);
        get().incrementCardsReviewedToday();
        // Celebration milestones
        const count = get().totalCardsReviewedToday;
        if ([10, 25, 50, 100, 200].includes(count) && typeof (window as any).__celebrate === 'function') {
          (window as any).__celebrate('streak', `${count} thẻ hôm nay!`, 0);
        }
      };
      const reviewKanjiWithXP = (kanjiId: string, quality: 'again' | 'hard' | 'good' | 'easy') => {
        kanji.review(kanjiId, quality);
        get().addXP(get().adhdSettings.xpPerCard);
        get().incrementCardsReviewedToday();
        const count = get().totalCardsReviewedToday;
        if ([10, 25, 50, 100, 200].includes(count) && typeof (window as any).__celebrate === 'function') {
          (window as any).__celebrate('streak', `${count} thẻ hôm nay!`, 0);
        }
      };
      const reviewGrammarWithXP = (grammarId: string, quality: 'again' | 'hard' | 'good' | 'easy') => {
        grammar.review(grammarId, quality);
        get().addXP(get().adhdSettings.xpPerCard);
        get().incrementCardsReviewedToday();
        const count = get().totalCardsReviewedToday;
        if ([10, 25, 50, 100, 200].includes(count) && typeof (window as any).__celebrate === 'function') {
          (window as any).__celebrate('streak', `${count} thẻ hôm nay!`, 0);
        }
      };

      return {
        lessonProgress: {},
        completeSkill: (lessonId, skill) => set((state) => {
          const existing = state.lessonProgress[lessonId];
          const completedSkills = existing ? [...existing.completedSkills] : [];
          if (!completedSkills.includes(skill)) completedSkills.push(skill);
          return {
            lessonProgress: {
              ...state.lessonProgress,
              [lessonId]: {
                lessonId,
                status: completedSkills.length >= 4 ? 'completed' : 'in_progress',
                completedSkills,
                completedAt: completedSkills.length >= 4 ? new Date().toISOString() : existing?.completedAt,
              },
            },
          };
        }),
        completeLesson: (lessonId) => set((state) => ({
          lessonProgress: {
            ...state.lessonProgress,
            [lessonId]: {
              lessonId, status: 'completed',
              completedSkills: ['listening', 'speaking', 'reading', 'writing'],
              completedAt: new Date().toISOString(),
            },
          },
        })),

        vocabProgress: {},
        reviewVocab: reviewVocabWithXP,
        getDueVocab: vocab.getDue,

        kanjiProgress: {},
        reviewKanji: reviewKanjiWithXP,
        getDueKanji: kanji.getDue,

        grammarProgress: {},
        reviewGrammar: reviewGrammarWithXP,
        getDueGrammar: grammar.getDue,

        dailyChecklist: {},
        completeSkillToday: (skill) => set((state) => {
          const today = getTodayKey();
          const existing = state.dailyChecklist[today] || { date: today, listening: false, speaking: false, reading: false, writing: false };
          const next = { ...state.dailyChecklist, [today]: { ...existing, [skill]: true } };
          return { dailyChecklist: next, streak: calculateStreak(next) };
        }),
        getTodayChecklist: () => get().dailyChecklist[getTodayKey()] || null,

        streak: 0,
        totalStudyMinutes: 0,
        addStudyMinutes: (minutes) => set((state) => ({
          totalStudyMinutes: state.totalStudyMinutes + minutes,
        })),

        quizResults: [],
        saveQuizResult: (result) => set((state) => ({
          quizResults: [result, ...state.quizResults].slice(0, 50),
        })),

        getStats: () => {
          const state = get();
          const lessons = Object.values(state.lessonProgress);
          const completedLessons = lessons.filter((l) => l.status === 'completed').length;
          const inProgressLessons = lessons.filter((l) => l.status === 'in_progress').length;
          const totalLessons = 96; // curriculum.phases total
          const dueCount = state.getDueVocab().length + state.getDueKanji().length + state.getDueGrammar().length;
          const masteredCount =
            Object.values(state.vocabProgress).filter((p) => p.status === 'mastered').length +
            Object.values(state.kanjiProgress).filter((p) => p.status === 'mastered').length +
            Object.values(state.grammarProgress).filter((p) => p.status === 'mastered').length;

          const skills: Record<SkillType, number> = { listening: 0, speaking: 0, reading: 0, writing: 0 };
          lessons.forEach((lp) => lp.completedSkills.forEach((s) => { skills[s]++; }));

          return { completedLessons, totalLessons, inProgressLessons, dueCount, masteredCount, skills };
        },

        // --- ADHD-friendly features ---
        xp: 0,
        level: 1,
        totalCardsReviewedToday: 0,
        addXP: (amount) => set((state) => {
          const newXP = state.xp + amount;
          const newLevel = Math.floor(newXP / 100) + 1;
          const leveledUp = newLevel > state.level;

          // Trigger celebration
          if (typeof (window as any).__celebrate === 'function') {
            if (leveledUp) {
              (window as any).__celebrate('level-up', `Level up! Cấp ${newLevel}`, amount);
            } else {
              (window as any).__celebrate('xp-gain', '', amount);
            }
          }

          return { xp: newXP, level: newLevel };
        }),
        incrementCardsReviewedToday: () => set((state) => ({
          totalCardsReviewedToday: state.totalCardsReviewedToday + 1,
        })),
        resetDailyCounters: () => set({ totalCardsReviewedToday: 0 }),

        adhdSettings: {
          focusDuration: 15,
          breakDuration: 5,
          longBreakDuration: 15,
          sessionsBeforeLongBreak: 4,
          autoStartBreak: true,
          autoStartFocus: false,
          soundEnabled: true,
          ambientSound: null,
          xpPerMinute: 10,
          xpPerCard: 5,
          quickStartLimit: 20,
        },
        updateADHDSettings: (settings) => set((state) => ({
          adhdSettings: { ...state.adhdSettings, ...settings },
        })),

        focusSession: {
          isActive: false,
          isBreak: false,
          timeRemaining: 0,
          currentSession: 1,
          totalFocusMinutes: 0,
        },
        startFocusSession: () => set((state) => ({
          focusSession: {
            isActive: true,
            isBreak: false,
            timeRemaining: state.adhdSettings.focusDuration * 60,
            currentSession: 1,
            totalFocusMinutes: 0,
          },
        })),
        pauseFocusSession: () => set((state) => ({
          focusSession: { ...state.focusSession, isActive: false },
        })),
        resumeFocusSession: () => set((state) => ({
          focusSession: { ...state.focusSession, isActive: true },
        })),
        tickFocusSession: () => set((state) => {
          const { focusSession, adhdSettings } = state;
          if (!focusSession.isActive || focusSession.timeRemaining <= 0) return state;

          const newTime = focusSession.timeRemaining - 1;

          // Earn XP each minute of focus
          const secondsElapsed = adhdSettings.focusDuration * 60 - newTime;
          const newMinutes = Math.floor(secondsElapsed / 60);
          let xpGained = 0;
          if (newMinutes > focusSession.totalFocusMinutes) {
            xpGained = adhdSettings.xpPerMinute * (newMinutes - focusSession.totalFocusMinutes);
          }

          if (newTime <= 0) {
            // Session complete
            const newXP = state.xp + xpGained;
            const newLevel = Math.floor(newXP / 100) + 1;
            return {
              xp: newXP,
              level: newLevel,
              focusSession: {
                isActive: false,
                isBreak: false,
                timeRemaining: 0,
                currentSession: focusSession.currentSession,
                totalFocusMinutes: Math.floor((adhdSettings.focusDuration * 60 - newTime) / 60),
              },
            };
          }

          return {
            focusSession: {
              ...focusSession,
              timeRemaining: newTime,
              totalFocusMinutes: focusSession.totalFocusMinutes + (xpGained > 0 ? (newMinutes - focusSession.totalFocusMinutes) : 0),
            },
            xp: state.xp + xpGained,
            level: Math.floor((state.xp + xpGained) / 100) + 1,
          };
        }),
        startBreak: () => set((state) => {
          const { focusSession, adhdSettings } = state;
          const nextSession = focusSession.currentSession + 1;
          const isLongBreak = nextSession > adhdSettings.sessionsBeforeLongBreak;
          return {
            focusSession: {
              isActive: adhdSettings.autoStartBreak,
              isBreak: true,
              timeRemaining: isLongBreak ? adhdSettings.longBreakDuration * 60 : adhdSettings.breakDuration * 60,
              currentSession: isLongBreak ? 1 : nextSession,
              totalFocusMinutes: 0,
            },
          };
        }),
        skipBreak: () => set((state) => ({
          focusSession: { ...state.focusSession, isBreak: false, timeRemaining: 0, isActive: false },
        })),
        resetFocusSession: () => set({
          focusSession: { isActive: false, isBreak: false, timeRemaining: 0, currentSession: 1, totalFocusMinutes: 0 },
        }),
        addFocusMinute: () => set((state) => ({
          focusSession: {
            ...state.focusSession,
            timeRemaining: state.focusSession.timeRemaining + 60,
          },
        })),
      };
    },
    { name: 'jlpt-n4-study-store' }
  )
);
