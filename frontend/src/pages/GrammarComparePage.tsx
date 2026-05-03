import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Furigana } from '@/components/Furigana';
import { grammarComparisons, getComparisonGroup, getGrammarForComparison } from '@/data/grammarComparisons';
import { grammar } from '@/data/grammar';
import { grammarMeta } from '@/data/grammarMeta';

function ComparisonGroupCard({
  group,
  onSelect,
  isActive,
}: {
  group: typeof grammarComparisons[number];
  onSelect: () => void;
  isActive: boolean;
}) {
  return (
    <Card
      className={`cursor-pointer transition-colors ${
        isActive ? 'ring-1 ring-primary/30' : 'hover:bg-secondary/50'
      }`}
      onClick={onSelect}
    >
      <CardHeader className="py-4">
        <CardTitle className="flex items-center justify-between text-base">
          <div className="flex items-center gap-3">
            <BookOpen className="w-4 h-4 text-primary" />
            <div>
              <span className="japanese-text font-semibold">{group.titleJa}</span>
              <span className="text-muted-foreground text-sm ml-2">— {group.title}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              {group.items.length} mẫu
            </Badge>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </div>
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-1">{group.description}</p>
      </CardHeader>
    </Card>
  );
}

function ComparisonDetail({ group }: { group: typeof grammarComparisons[number] }) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(group.items.map((i) => i.grammarId))
  );
  const items = useMemo(
    () => getGrammarForComparison(group, grammar),
    [group]
  );

  const toggleExpand = (grammarId: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(grammarId)) next.delete(grammarId);
      else next.add(grammarId);
      return next;
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold">{group.titleJa}</h2>
          <span className="text-muted-foreground">— {group.title}</span>
        </div>
        <p className="text-sm text-muted-foreground">{group.description}</p>
      </div>

      {/* Comparison cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(({ grammarId, nuance, grammar: g }) => {
          const meta = grammarMeta[g.id];
          const expanded = expandedItems.has(g.id);

          return (
            <Card key={g.id} className="flex flex-col">
              <CardHeader
                className="cursor-pointer select-none py-3"
                onClick={() => toggleExpand(g.id)}
              >
                <CardTitle className="text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs font-mono">
                        {g.id.toUpperCase()}
                      </Badge>
                      <span className="japanese-text font-semibold">{g.pattern}</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        expanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </CardTitle>
                <p className="text-xs text-primary mt-1">{nuance}</p>
              </CardHeader>

              {expanded && (
                <CardContent className="space-y-3 pt-0">
                  {/* Meaning */}
                  {meta?.meaning && (
                    <div className="rounded-lg bg-primary/5 p-2 space-y-1">
                      <p className="text-xs font-semibold text-muted-foreground">Ý nghĩa</p>
                      <p className="text-xs">{meta.meaning.affirmative}</p>
                      {meta.meaning.negative && (
                        <p className="text-xs">{meta.meaning.negative}</p>
                      )}
                    </div>
                  )}

                  {/* Notes */}
                  {meta?.notes && meta.notes.length > 0 && (
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-muted-foreground">Ghi chú</p>
                      {meta.notes.map((note, i) => (
                        <p key={i} className="text-xs text-muted-foreground">{note}</p>
                      ))}
                    </div>
                  )}

                  {/* Examples */}
                  {g.examples.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-muted-foreground">Ví dụ</p>
                      {g.examples.slice(0, 2).map((ex, index) => (
                        <div key={index} className="rounded-lg bg-muted p-2 space-y-0.5">
                          {ex.reading ? (
                            <Furigana
                              text={ex.japanese}
                              reading={ex.reading}
                              className="japanese-text text-xs"
                            />
                          ) : (
                            <p className="japanese-text text-xs">{ex.japanese}</p>
                          )}
                          <p className="text-xs text-muted-foreground">{ex.meaning}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>

      {/* Missing grammar notice */}
      {group.items.length > items.length && (
        <div className="rounded-lg bg-muted p-4 text-center text-sm text-muted-foreground">
          Có {group.items.length - items.length} mẫu ngữ pháp chưa có dữ liệu.
        </div>
      )}
    </div>
  );
}

export default function GrammarComparePage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedGroup = useMemo(
    () => (selectedId ? getComparisonGroup(selectedId) : null),
    [selectedId]
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <Link to="/grammar">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">So sánh Ngữ pháp</h1>
          <p className="text-muted-foreground">
            So sánh các mẫu ngữ pháp tương tự nhau để hiểu rõ sự khác biệt.
          </p>
        </div>
      </div>

      {/* Group list or detail */}
      {selectedGroup ? (
        <>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <button
              type="button"
              onClick={() => setSelectedId(null)}
              className="hover:text-primary transition-colors"
            >
              So sánh Ngữ pháp
            </button>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{selectedGroup.titleJa}</span>
          </div>
          <ComparisonDetail group={selectedGroup} />
        </>
      ) : (
        <div className="space-y-3">
          {grammarComparisons.map((group) => (
            <ComparisonGroupCard
              key={group.id}
              group={group}
              onSelect={() => setSelectedId(group.id)}
              isActive={false}
            />
          ))}
        </div>
      )}
    </div>
  );
}
