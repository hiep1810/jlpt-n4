import { Star } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useStudyStore } from '@/store/studyStore';

export default function LevelBar() {
  const { xp, level, totalCardsReviewedToday } = useStudyStore();
  const xpInCurrentLevel = xp % 100;
  const xpForNextLevel = 100;

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        <span className="font-bold text-sm">Lv.{level}</span>
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-xs text-muted-foreground mb-1">
          <span>{xpInCurrentLevel}/{xpForNextLevel} XP</span>
          <span>{totalCardsReviewedToday} thẻ hôm nay</span>
        </div>
        <Progress value={(xpInCurrentLevel / xpForNextLevel) * 100} className="h-1.5" />
      </div>
    </div>
  );
}
