import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import {
  BarChart3,
  BookOpen,
  Brain,
  Calendar,
  ClipboardCheck,
  Flame,
  Headphones,
  Layers,
  ScrollText,
  Settings,
  Target,
  GitCompareArrows,
} from 'lucide-react';
import { useStudyStore } from '@/store/studyStore';

const navItems = [
  { icon: BookOpen, label: 'Dashboard', path: '/' },
  { icon: Calendar, label: 'Ôn tập', path: '/review' },
  { icon: Layers, label: 'Bài học', path: '/lessons' },
  { icon: Brain, label: 'Flashcards', path: '/flashcards' },
  { icon: Headphones, label: 'Luyện nghe', path: '/listening' },
  { icon: ClipboardCheck, label: 'Quiz', path: '/quiz' },
  { icon: ScrollText, label: 'Từ vựng', path: '/vocabulary' },
  { icon: Target, label: 'Kanji', path: '/kanji' },
  { icon: BookOpen, label: 'Ngữ pháp', path: '/grammar' },
  { icon: GitCompareArrows, label: 'So sánh', path: '/grammar/compare' },
  { icon: BarChart3, label: 'Tiến độ', path: '/progress' },
  { icon: Settings, label: 'Cài đặt', path: '/settings' },
];

export function Sidebar() {
  const location = useLocation();
  const streak = useStudyStore((state) => state.streak);
  const dueCount = useStudyStore((state) =>
    state.getDueVocab().length + state.getDueKanji().length + state.getDueGrammar().length,
  );

  return (
    <aside className="w-64 bg-card border-r border-border flex flex-col h-full">
      <div className="p-4 border-b border-border">
        <h1 className="text-xl font-bold text-primary">JLPT N4 Study</h1>
        <p className="text-sm text-muted-foreground">Minna no Nihongo study tracker</p>
        {streak > 0 && (
          <div className="flex items-center gap-1 mt-2 text-orange-400">
            <Flame className="w-4 h-4" />
            <span className="text-sm font-medium">{streak} ngày liên tiếp</span>
          </div>
        )}
      </div>

      <nav className="flex-1 p-2 space-y-1">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = path === '/grammar/compare'
            ? location.pathname.startsWith('/grammar/compare')
            : location.pathname === path;
          const showBadge = (path === '/flashcards' || path === '/review') && dueCount > 0;
          return (
            <Link
              key={path}
              to={path}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              )}
            >
              <Icon className="w-4 h-4" />
              <span className="flex-1">{label}</span>
              {showBadge && (
                <Badge variant="destructive" className="text-xs min-w-[20px] h-5 flex items-center justify-center">
                  {dueCount}
                </Badge>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <p className="text-xs text-muted-foreground">Học đều mỗi ngày để giữ nhịp ôn tập.</p>
      </div>
    </aside>
  );
}
