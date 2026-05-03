export type SkillType = 'listening' | 'speaking' | 'reading' | 'writing';
export type LessonSectionKind =
  | 'vocabulary'
  | 'grammar'
  | 'reading-practice'
  | 'conversation'
  | 'listening'
  | 'exercise'
  | 'kanji'
  | 'kanji-renshuu'
  | 'grammar-renshuu'
  | 'reading-comprehension'
  | 'test'
  | 'reference';

export type LessonStatus = 'not_started' | 'in_progress' | 'completed';
export type CardStatus = 'new' | 'learning' | 'review' | 'mastered';

export interface SkillTask {
  tasks: string[];
  audioUrl?: string;
  transcript?: string;
  comprehensionQuestions?: string[];
}

export interface SkillSet {
  listening: SkillTask;
  speaking: SkillTask;
  reading: SkillTask;
  writing: SkillTask;
}

export interface Vocabulary {
  id: string;
  japanese: string;
  reading: string;
  meaning: string;
  meaningVi: string;
  lessonId: string;
  example?: string;
  exampleVi?: string;
}

export interface Kanji {
  id: string;
  character: string;
  onyomi: string;
  kunyomi: string;
  meaning: string;
  meaningVi: string;
  week: number;
  lessonId?: string;
  examples: string[];
}

export interface Grammar {
  id: string;
  pattern: string;
  meaning: string;
  meaningVi: string;
  lessonId: string;
  examples: { japanese: string; reading?: string; meaning: string }[];
}

export type DrillType = 'substitution' | 'transformation' | 'sentence-construction';

export interface DrillSet {
  id: string;
  drillType: DrillType;
  grammarId: string;
  title: string;
  titleJa?: string;
  description?: string;
  example?: { japanese: string; reading?: string; meaning?: string; };
  items: DrillItem[];
}

export interface DrillItem {
  id: string;
  number: number;
  cue?: string;
  imageUrl?: string;
  expected: string;
  hint?: string;
}

export interface Lesson {
  id: string;
  dayNumber: number;
  title: string;
  titleJa?: string;
  skills: SkillSet;
  sections?: LessonSection[];
  vocabulary: string[]; // vocab IDs
  kanji: string[]; // kanji IDs
  grammar: string[]; // grammar IDs
}

export interface LessonSection {
  id: string;
  order: number;
  title: string;
  kind: LessonSectionKind;
  description?: string;
  tasks?: string[];
  required?: boolean;
}

export interface Week {
  id: number;
  title: string;
  goals: string;
  lessons: Lesson[];
}

export interface Phase {
  id: number;
  name: string;
  nameVi: string;
  weeks: Week[];
}

export interface Curriculum {
  phases: Phase[];
}

export interface LessonProgress {
  lessonId: string;
  status: LessonStatus;
  completedSkills: SkillType[];
  completedAt?: string;
  score?: number;
}

export interface VocabularyProgress {
  wordId: string;
  status: CardStatus;
  interval: number;
  ease: number;
  dueDate: string;
  reviews: number;
  lastReview?: string;
}

export interface KanjiProgress {
  kanjiId: string;
  status: CardStatus;
  interval: number;
  ease: number;
  dueDate: string;
  reviews: number;
  lastReview?: string;
}

export interface GrammarProgress {
  grammarId: string;
  status: CardStatus;
  interval: number;
  ease: number;
  dueDate: string;
  reviews: number;
  lastReview?: string;
}

export interface DailyChecklist {
  date: string;
  listening: boolean;
  speaking: boolean;
  reading: boolean;
  writing: boolean;
}

export interface QuizResult {
  id: string;
  quizType: 'vocabulary' | 'grammar' | 'kanji' | 'listening' | 'mock';
  score: number;
  total: number;
  completedAt: string;
}

export interface UserStats {
  streak: number;
  totalLessonsCompleted: number;
  totalVocabularyLearned: number;
  totalKanjiLearned: number;
  totalStudyMinutes: number;
  weeklyProgress: { date: string; minutes: number }[];
}

// ADHD-friendly study settings
export interface ADHDSettings {
  focusDuration: number; // minutes, default 15
  breakDuration: number; // minutes, default 5
  longBreakDuration: number; // minutes, default 15
  sessionsBeforeLongBreak: number; // default 4
  autoStartBreak: boolean; // auto-start break after focus
  autoStartFocus: boolean; // auto-start focus after break
  soundEnabled: boolean; // notification sound
  ambientSound: string | null; // current ambient sound
  xpPerMinute: number; // XP earned per study minute
  xpPerCard: number; // XP earned per SRS card reviewed
  quickStartLimit: number; // max cards in quick start session
}

export interface FocusSession {
  isActive: boolean;
  isBreak: boolean;
  timeRemaining: number; // seconds
  currentSession: number; // which pomodoro in the cycle
  totalFocusMinutes: number; // accumulated focus minutes this session
}
