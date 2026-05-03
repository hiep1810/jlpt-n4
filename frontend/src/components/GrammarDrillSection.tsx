import { GrammarDrill } from '@/components/GrammarDrill';
import { grammarDrills, getDrillsForLesson } from '@/data/grammarDrills';

export function GrammarDrillSection({ lessonId, grammarIds }: {
  lessonId: string;
  grammarIds: string[];
}) {
  const drills = getDrillsForLesson(grammarIds);

  if (drills.length === 0) {
    return (
      <div className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">
        Chưa có bài tập luyện tập cho ngữ pháp bài này. Vui lòng quay lại sau.
      </div>
    );
  }

  // Group by drillType
  const byType = new Map<string, typeof drills>();
  for (const drill of drills) {
    const key = drill.drillType;
    if (!byType.has(key)) byType.set(key, []);
    byType.get(key)!.push(drill);
  }

  const typeLabels: Record<string, string> = {
    substitution: 'Renshuu A — Thay thế',
    transformation: 'Renshuu B — Chuyển đổi',
    'sentence-construction': 'Renshuu C — Xây dựng câu',
  };

  return (
    <div className="space-y-6">
      {Array.from(byType.entries()).map(([type, drillsOfType]) => (
        <div key={type} className="space-y-3">
          <h3 className="text-lg font-semibold">{typeLabels[type] ?? type}</h3>
          {drillsOfType.map((drill) => (
            <GrammarDrill key={drill.id} drillSet={drill} />
          ))}
        </div>
      ))}
    </div>
  );
}
