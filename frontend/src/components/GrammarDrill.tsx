import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Furigana } from '@/components/Furigana';
import { WordAudioButton } from '@/components/WordAudioButton';
import type { DrillSet, DrillItem } from '@/types';

const drillTypeLabels: Record<DrillSet['drillType'], string> = {
  substitution: 'Thay thế',
  transformation: 'Chuyển đổi',
  'sentence-construction': 'Xây dựng câu',
};

const drillTypeColors: Record<DrillSet['drillType'], 'default' | 'secondary' | 'outline'> = {
  substitution: 'default',
  transformation: 'secondary',
  'sentence-construction': 'outline',
};

function DrillItemCard({ item, revealed, onReveal, onSelfCheck }: {
  item: DrillItem;
  revealed: boolean;
  onReveal: () => void;
  onSelfCheck: (correct: boolean) => void;
}) {
  return (
    <div className="rounded-lg border bg-background p-4 space-y-3">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
          {item.number}
        </span>
        {item.cue && (
          <span className="text-sm japanese-text">{item.cue}</span>
        )}
      </div>

      {!revealed ? (
        <Button variant="outline" size="sm" onClick={onReveal}>
          Nhấn để xem đáp án
        </Button>
      ) : (
        <div className="space-y-3">
          <div className="rounded-md bg-primary/5 p-3">
            <p className="text-base japanese-text">{item.expected}</p>
            {item.hint && (
              <p className="mt-1 text-xs text-muted-foreground">{item.hint}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="default"
              className="bg-green-600 hover:bg-green-700"
              onClick={() => onSelfCheck(true)}
            >
              Đúng
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onSelfCheck(false)}
            >
              Chưa đúng
            </Button>
            <WordAudioButton text={item.expected} size="sm" />
          </div>
        </div>
      )}
    </div>
  );
}

export function GrammarDrill({ drillSet }: { drillSet: DrillSet }) {
  const [revealedItems, setRevealedItems] = useState<Set<string>>(new Set());
  const [correctItems, setCorrectItems] = useState<Set<string>>(new Set());
  const [showAll, setShowAll] = useState(false);

  const total = drillSet.items.length;
  const correctCount = correctItems.size;

  const handleReveal = (itemId: string) => {
    setRevealedItems((prev) => new Set(prev).add(itemId));
  };

  const handleRevealAll = () => {
    setShowAll((prev) => {
      const next = !prev;
      if (next) {
        setRevealedItems(new Set(drillSet.items.map((i) => i.id)));
      } else {
        setRevealedItems(new Set());
      }
      return next;
    });
  };

  const handleSelfCheck = (itemId: string, correct: boolean) => {
    if (correct) {
      setCorrectItems((prev) => new Set(prev).add(itemId));
    } else {
      setCorrectItems((prev) => {
        const next = new Set(prev);
        next.delete(itemId);
        return next;
      });
    }
  };

  const progressPercent = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  return (
    <Card>
      <CardContent className="p-5 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{drillSet.title}</h3>
            {drillSet.description && (
              <p className="text-sm text-muted-foreground">{drillSet.description}</p>
            )}
          </div>
          <Badge variant={drillTypeColors[drillSet.drillType]}>
            {drillTypeLabels[drillSet.drillType]}
          </Badge>
        </div>

        {/* Example */}
        {drillSet.example && (
          <div className="rounded-lg bg-primary/10 p-3">
            <p className="text-sm font-medium mb-1">Ví dụ mẫu:</p>
            <p className="text-base japanese-text">{drillSet.example.japanese}</p>
            {drillSet.example.meaning && (
              <p className="mt-1 text-xs text-muted-foreground">{drillSet.example.meaning}</p>
            )}
            <WordAudioButton text={drillSet.example.japanese} size="sm" className="mt-1" />
          </div>
        )}

        {/* Progress */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full rounded-full bg-green-500 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            {correctCount}/{total}
          </span>
        </div>

        {/* Show All / Hide All */}
        <div className="flex justify-end">
          <Button variant="ghost" size="sm" onClick={handleRevealAll}>
            {showAll ? 'Ẩn tất cả' : 'Hiện tất cả'}
          </Button>
        </div>

        {/* Items */}
        <div className="space-y-3">
          {drillSet.items.map((item) => (
            <DrillItemCard
              key={item.id}
              item={item}
              revealed={revealedItems.has(item.id)}
              onReveal={() => handleReveal(item.id)}
              onSelfCheck={(correct) => handleSelfCheck(item.id, correct)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
