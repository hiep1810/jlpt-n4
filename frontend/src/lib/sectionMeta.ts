import { BookMarked, BookOpen, ClipboardCheck, Ear, FileText, Languages, Library, MessageSquare, PenSquare, ScrollText, TestTube2 } from 'lucide-react';
import type { LessonSection } from '@/types';

export const sectionMeta: Record<
  LessonSection['kind'],
  { icon: typeof BookOpen; accent: string }
> = {
  vocabulary: { icon: BookOpen, accent: 'text-sky-400' },
  grammar: { icon: ScrollText, accent: 'text-emerald-400' },
  'reading-practice': { icon: Library, accent: 'text-amber-400' },
  conversation: { icon: MessageSquare, accent: 'text-rose-400' },
  listening: { icon: Ear, accent: 'text-cyan-400' },
  exercise: { icon: ClipboardCheck, accent: 'text-orange-400' },
  kanji: { icon: Languages, accent: 'text-fuchsia-400' },
  'kanji-renshuu': { icon: PenSquare, accent: 'text-violet-400' },
  'grammar-renshuu': { icon: ScrollText, accent: 'text-emerald-400' },
  'reading-comprehension': { icon: FileText, accent: 'text-lime-400' },
  test: { icon: TestTube2, accent: 'text-red-400' },
  reference: { icon: BookMarked, accent: 'text-indigo-400' },
};

export const sectionLabels: Record<LessonSection['kind'], string> = {
  vocabulary: 'Từ vựng',
  grammar: 'Ngữ pháp',
  'reading-practice': 'Luyện đọc',
  conversation: 'Hội thoại',
  listening: 'Luyện nghe',
  exercise: 'Bài tập',
  kanji: 'Hán tự',
  'kanji-renshuu': 'Kanji',
  'grammar-renshuu': 'Ngữ pháp Renshuu',
  'reading-comprehension': 'Đọc hiểu',
  test: 'Kiểm tra',
  reference: 'Tham khảo',
};
