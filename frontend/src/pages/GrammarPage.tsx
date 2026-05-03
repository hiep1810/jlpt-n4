import { useMemo, useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown, Search, ArrowLeft, BookOpen, GitCompareArrows } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Furigana } from '@/components/Furigana';
import { GrammarDrillSection } from '@/components/GrammarDrillSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { curriculum } from '@/data/curriculum';
import { grammar } from '@/data/grammar';
import { grammarMeta } from '@/data/grammarMeta';

function StructureTable({ meta }: { meta: NonNullable<typeof grammarMeta[string]>['structure'] }) {
  if (!meta) return null;
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">
        {meta.headers && (
          <thead>
            <tr className="bg-muted">
              {meta.headers.map((h, i) => (
                <th key={i} className="px-3 py-2 text-left font-semibold first:w-16">{h}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {meta.rows.map((row, i) => (
            <tr key={i} className="border-t">
              <td className="px-3 py-2 font-medium">{row.label}</td>
              <td className="px-3 py-2 text-primary japanese-text">{row.affirmative}</td>
              <td className="px-3 py-2 text-destructive japanese-text">{row.negative || '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GrammarCard({ item, expanded, onToggle }: {
  item: typeof grammar[number];
  expanded: boolean;
  onToggle: () => void;
}) {
  const meta = grammarMeta[item.id];
  const isSelected = false; // handled by parent via query param

  return (
    <Card className={isSelected ? 'ring-1 ring-primary/30' : ''}>
      <CardHeader
        className="cursor-pointer select-none py-3"
        onClick={onToggle}
      >
        <CardTitle className="flex items-center justify-between text-base">
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              {item.id.toUpperCase()}
            </span>
            <span className="japanese-text font-semibold">{item.pattern}</span>
          </div>
          <div className="flex items-center gap-2">
            {meta && <Badge variant="secondary" className="text-xs">有 cấu trúc</Badge>}
            <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </div>
        </CardTitle>
        <p className="text-sm text-muted-foreground">{item.meaningVi}</p>
      </CardHeader>

      {expanded && (
        <CardContent className="space-y-4 pt-0">
          {/* Structure table */}
          {meta?.structure && (
            <div>
              <h4 className="mb-2 text-sm font-semibold">Cấu trúc</h4>
              <StructureTable meta={meta.structure} />
            </div>
          )}

          {/* Meaning */}
          {meta?.meaning && (
            <div className="rounded-lg bg-primary/5 p-3 space-y-1">
              <h4 className="text-sm font-semibold">Ý nghĩa</h4>
              <p className="text-sm">{meta.meaning.affirmative}</p>
              {meta.meaning.negative && (
                <p className="text-sm">{meta.meaning.negative}</p>
              )}
            </div>
          )}

          {/* Notes */}
          {meta?.notes && meta.notes.length > 0 && (
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">Ghi chú</h4>
              {meta.notes.map((note, i) => (
                <p key={i} className="text-sm text-muted-foreground">{note}</p>
              ))}
            </div>
          )}

          {/* Examples with Furigana */}
          {item.examples.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Ví dụ</h4>
              {item.examples.map((ex, index) => (
                <div key={index} className="rounded-lg bg-muted p-3 space-y-1">
                  {ex.reading ? (
                    <Furigana text={ex.japanese} reading={ex.reading} className="japanese-text" />
                  ) : (
                    <p className="japanese-text">{ex.japanese}</p>
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
}

function GrammarTab({ lessonGrammar, grammarParam }: {
  lessonGrammar: typeof grammar;
  grammarParam: string | null;
}) {
  const [expandedId, setExpandedId] = useState<string | null>(grammarParam);

  // When grammarParam changes, expand that item
  useEffect(() => {
    if (grammarParam) setExpandedId(grammarParam);
  }, [grammarParam]);

  return (
    <div className="space-y-3">
      {lessonGrammar.map((item) => (
        <GrammarCard
          key={item.id}
          item={item}
          expanded={expandedId === item.id}
          onToggle={() => setExpandedId(expandedId === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}

function displayLessonName(id: string): string {
  if (id === 'hiragana-1') return 'Bài 1';
  return id.replace('lesson-', 'Bài ');
}

function PracticeTab({ groupedGrammar }: {
  groupedGrammar: Record<string, typeof grammar>;
}) {
  const lessons = Object.keys(groupedGrammar);

  if (lessons.length === 0) {
    return (
      <div className="rounded-lg bg-muted p-6 text-center text-sm text-muted-foreground">
        Chưa có bài tập luyện tập cho ngữ pháp. Vui lòng quay lại sau.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {lessons.map((lessonId) => {
        const items = groupedGrammar[lessonId];
        const lessonTitle = displayLessonName(lessonId);
        return (
          <div key={lessonId} className="space-y-3">
            <h3 className="text-lg font-semibold">{lessonTitle}</h3>
            <GrammarDrillSection
              lessonId={lessonId}
              grammarIds={items.map((i) => i.id)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default function GrammarPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lessonParam = searchParams.get('lesson');
  const grammarParam = searchParams.get('grammar');

  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'grammar' | 'practice'>(
    grammarParam ? 'grammar' : 'grammar'
  );

  // Find the lesson info from curriculum
  const lessonInfo = useMemo(() => {
    if (!lessonParam) return null;
    for (const phase of curriculum.phases) {
      for (const week of phase.weeks) {
        for (const lesson of week.lessons) {
          if (lesson.id === lessonParam) {
            return { ...lesson, phaseName: phase.nameVi };
          }
        }
      }
    }
    return null;
  }, [lessonParam]);

  const filteredGrammar = useMemo(() => {
    return grammar.filter((item) => {
      const matchesSearch =
        !search ||
        item.pattern.includes(search) ||
        item.meaningVi.toLowerCase().includes(search.toLowerCase()) ||
        item.meaning.toLowerCase().includes(search.toLowerCase());
      const matchesLesson = !lessonParam || item.lessonId === lessonParam;

      return matchesSearch && matchesLesson;
    });
  }, [lessonParam, search]);

  const grouped = useMemo(() => {
    return filteredGrammar.reduce<Record<string, typeof grammar>>((acc, item) => {
      if (!acc[item.lessonId]) {
        acc[item.lessonId] = [];
      }
      acc[item.lessonId].push(item);
      return acc;
    }, {});
  }, [filteredGrammar]);

  // Build lesson display info from curriculum + grammar data
  const lessonDisplayMap = useMemo(() => {
    const map = new Map<string, { title: string; phase: string; dayNumber?: number }>();
    // From curriculum: all lessons with grammar IDs
    for (const phase of curriculum.phases) {
      for (const week of phase.weeks) {
        for (const lesson of week.lessons) {
          if (lesson.grammar.length > 0) {
            const displayTitle = lesson.title.split('—')[0].trim();
            map.set(lesson.id, { title: displayTitle, phase: phase.nameVi, dayNumber: lesson.dayNumber });
          }
        }
      }
    }
    // Also include lessons that exist in grammar data but not in curriculum grammar arrays
    for (const item of grammar) {
      if (!map.has(item.lessonId)) {
        // Find the lesson in curriculum to get title/phase
        for (const phase of curriculum.phases) {
          for (const week of phase.weeks) {
            for (const lesson of week.lessons) {
              if (lesson.id === item.lessonId) {
                const displayTitle = lesson.title.split('—')[0].trim();
                map.set(lesson.id, { title: displayTitle, phase: phase.nameVi, dayNumber: lesson.dayNumber });
                break;
              }
            }
          }
        }
        // Fallback: just use the ID
        if (!map.has(item.lessonId)) {
          map.set(item.lessonId, { title: displayLessonName(item.lessonId), phase: '' });
        }
      }
    }
    return map;
  }, []);

  // All unique lessonIds from grammar data
  const allLessonIds = useMemo(() => {
    const ids = new Set<string>();
    for (const item of grammar) ids.add(item.lessonId);
    return Array.from(ids).sort((a, b) => {
      const na = parseInt(a.replace(/\D/g, ''), 10);
      const nb = parseInt(b.replace(/\D/g, ''), 10);
      return na - nb;
    });
  }, []);

  const handleSelectLesson = (lessonId: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('lesson', lessonId);
    params.delete('grammar');
    setSearchParams(params);
    setActiveTab('grammar');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <Link to="/lessons">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Ngữ pháp</h1>
          <p className="text-muted-foreground">
            {grammar.length} mẫu ngữ pháp N5-N4
            {lessonInfo && (
              <span>
                {' — '}
                <span className="text-primary">{lessonInfo.title}</span>
                {lessonInfo.dayNumber && <span className="text-muted-foreground"> (Ngày {lessonInfo.dayNumber})</span>}
              </span>
            )}
          </p>
        </div>
        <Link to="/grammar/compare">
          <Button variant="outline" size="sm" className="gap-2">
            <GitCompareArrows className="h-4 w-4" />
            So sánh
          </Button>
        </Link>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Tìm ngữ pháp..."
          className="w-full rounded-lg border border-border bg-background pl-10 p-3"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      {/* Lesson filter chips */}
      <div className="flex flex-wrap gap-1.5">
        <button
          type="button"
          onClick={() => {
            const params = new URLSearchParams(searchParams);
            params.delete('lesson');
            params.delete('grammar');
            setSearchParams(params);
          }}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            !lessonParam ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'
          }`}
        >
          Tất cả
        </button>
        {allLessonIds.map((lessonId) => {
          const info = lessonDisplayMap.get(lessonId);
          if (!info) return null;
          const isActive = lessonParam === lessonId;
          return (
            <button
              key={lessonId}
              type="button"
              onClick={() => handleSelectLesson(lessonId)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                isActive ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'
              }`}
              title={info.phase}
            >
              {displayLessonName(lessonId)}
            </button>
          );
        })}
      </div>

      {lessonParam && (
        <Badge variant="outline" className="cursor-pointer" onClick={() => {
          const params = new URLSearchParams(searchParams);
          params.delete('lesson');
          if (grammarParam) params.delete('grammar');
          setSearchParams(params);
        }}>
          {lessonParam.replace('lesson-', 'Bài ')} ×
        </Badge>
      )}

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'grammar' | 'practice')}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="grammar">Ngữ Pháp</TabsTrigger>
          <TabsTrigger value="practice">Luyện Tập B</TabsTrigger>
        </TabsList>

        <TabsContent value="grammar">
          {filteredGrammar.length === 0 ? (
            <div className="rounded-lg bg-muted p-6 text-center text-sm text-muted-foreground">
              <BookOpen className="w-10 h-10 mx-auto mb-3 opacity-40" />
              <p>Không tìm thấy ngữ pháp phù hợp.</p>
              {lessonParam && (
                <button
                  type="button"
                  onClick={() => {
                    const params = new URLSearchParams(searchParams);
                    params.delete('lesson');
                    setSearchParams(params);
                  }}
                  className="mt-2 text-primary hover:underline"
                >
                  Xem tất cả ngữ pháp
                </button>
              )}
            </div>
          ) : (
            <GrammarTab
              lessonGrammar={filteredGrammar}
              grammarParam={grammarParam}
            />
          )}
        </TabsContent>

        <TabsContent value="practice">
          {Object.keys(grouped).length === 0 ? (
            <div className="rounded-lg bg-muted p-6 text-center text-sm text-muted-foreground">
              Chưa có bài tập luyện tập cho ngữ pháp này.
            </div>
          ) : (
            <PracticeTab groupedGrammar={grouped} />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
