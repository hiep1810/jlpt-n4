import { useMemo, useState } from 'react';
import { BookMarked, BookOpen, ChevronRight, Languages, PencilLine, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import KanjiWriter from '@/components/KanjiWriter';
import { curriculum } from '@/data/curriculum';
import { kanji } from '@/data/kanji';
import { vocabulary } from '@/data/vocabulary';
import { useStudyStore } from '@/store/studyStore';

const getTodayKey = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = `${now.getMonth() + 1}`.padStart(2, '0');
  const day = `${now.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const lessonOptions: { id: string; title: string; phase: string }[] = (() => {
  const lessons: { id: string; title: string; phase: string }[] = [];

  for (const phase of curriculum.phases) {
    for (const week of phase.weeks) {
      for (const lesson of week.lessons) {
        const hasKanji = kanji.some((item) => item.lessonId === lesson.id);
        if (hasKanji) {
          lessons.push({
            id: lesson.id,
            title: lesson.title,
            phase: phase.nameVi,
          });
        }
      }
    }
  }

  return lessons;
})();

function getVocabWithKanji(character: string) {
  return vocabulary.filter((item) => item.japanese.includes(character)).slice(0, 6);
}

function getStatusLabel(status: 'new' | 'learning' | 'review' | 'mastered') {
  if (status === 'new') return 'New';
  if (status === 'learning') return 'Learning';
  if (status === 'review') return 'Review';
  return 'Mastered';
}

function KanjiDetailDialog({
  open,
  onOpenChange,
  kanjiId,
}: {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  kanjiId: string;
}) {
  const currentKanji = kanji.find((item) => item.id === kanjiId);
  const { kanjiProgress, reviewKanji } = useStudyStore();

  if (!currentKanji) return null;

  const progress = kanjiProgress[currentKanji.id];
  const relatedVocab = getVocabWithKanji(currentKanji.character);
  const lessonInfo = lessonOptions.find((lesson) => lesson.id === currentKanji.lessonId);
  const isDue = Boolean(
    progress &&
    progress.dueDate <= getTodayKey() &&
    progress.status !== 'mastered'
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">{currentKanji.character}</DialogTitle>
          <DialogDescription className="sr-only">
            Kanji detail and writing practice for {currentKanji.character}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <div className="flex flex-col items-center gap-3 py-2">
            <KanjiWriter
              character={currentKanji.character}
              size={200}
              onQuizComplete={(result) => reviewKanji(currentKanji.id, result.quality)}
            />
          </div>

          <div className="space-y-3">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                On: <span className="font-medium text-foreground">{currentKanji.onyomi}</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Kun: <span className="font-medium text-foreground">{currentKanji.kunyomi}</span>
              </p>
            </div>

            <div className="flex items-start gap-3 rounded-lg bg-primary/5 p-3">
              <Languages className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold">{currentKanji.meaningVi}</p>
                <p className="text-sm text-muted-foreground">{currentKanji.meaning}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <BookMarked className="w-3.5 h-3.5" />
                {lessonInfo?.title || `Week ${currentKanji.week}`}
              </span>

              {lessonInfo?.phase && (
                <Badge variant="outline" className="text-xs">
                  {lessonInfo.phase}
                </Badge>
              )}

              {progress && (
                <Badge
                  variant={progress.status === 'mastered' ? 'success' : progress.status === 'review' ? 'secondary' : 'warning'}
                  className="text-xs"
                >
                  {getStatusLabel(progress.status)}
                </Badge>
              )}

              {isDue && (
                <Badge variant="outline" className="text-xs">
                  Due today
                </Badge>
              )}
            </div>
          </div>

          {currentKanji.examples.length > 0 && (
            <div className="space-y-2">
              <Separator />
              <h4 className="font-semibold text-sm">Examples</h4>
              <div className="space-y-1">
                {currentKanji.examples.map((example, index) => (
                  <div key={index} className="rounded-lg bg-secondary p-2 japanese-text text-sm">
                    {example}
                  </div>
                ))}
              </div>
            </div>
          )}

          {relatedVocab.length > 0 && (
            <div className="space-y-2">
              <Separator />
              <h4 className="font-semibold text-sm">Vocabulary with this kanji</h4>
              <div className="flex flex-wrap gap-1.5">
                {relatedVocab.map((item) => (
                  <span key={item.id} className="inline-flex items-center gap-1 rounded bg-secondary px-2 py-1 text-xs">
                    {item.reading || item.japanese}
                    <ChevronRight className="w-3 h-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{item.meaningVi}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2 pt-1">
            {!progress && (
              <Button className="flex-1" onClick={() => reviewKanji(currentKanji.id, 'good')}>
                <Star className="w-4 h-4 mr-2" /> Start studying
              </Button>
            )}

            {progress && progress.status !== 'mastered' && (
              <Button variant="outline" className="flex-1" onClick={() => reviewKanji(currentKanji.id, 'good')}>
                <BookOpen className="w-4 h-4 mr-2" /> Mark reviewed
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function KanjiPage() {
  const { kanjiProgress, getDueKanji } = useStudyStore();
  const [filter, setFilter] = useState<'all' | 'new' | 'learning' | 'review' | 'mastered'>('all');
  const [search, setSearch] = useState('');
  const [lessonFilter, setLessonFilter] = useState<string>('all');
  const [selectedKanji, setSelectedKanji] = useState<string | null>(null);

  const dueKanji = getDueKanji();

  const filteredKanji = useMemo(() => {
    return kanji.filter((item) => {
      const progress = kanjiProgress[item.id];
      const matchesFilter =
        filter === 'all' ||
        (!progress && filter === 'new') ||
        progress?.status === filter;
      const matchesSearch =
        !search ||
        item.character.includes(search) ||
        item.meaningVi.toLowerCase().includes(search.toLowerCase()) ||
        item.meaning.toLowerCase().includes(search.toLowerCase());
      const matchesLesson = lessonFilter === 'all' || item.lessonId === lessonFilter;

      return matchesFilter && matchesSearch && matchesLesson;
    });
  }, [filter, kanjiProgress, lessonFilter, search]);

  const stats = {
    total: kanji.length,
    new: kanji.filter((item) => !kanjiProgress[item.id]).length,
    learning: kanji.filter((item) => kanjiProgress[item.id]?.status === 'learning').length,
    review: kanji.filter((item) => kanjiProgress[item.id]?.status === 'review').length,
    mastered: kanji.filter((item) => kanjiProgress[item.id]?.status === 'mastered').length,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Kanji</h1>
        <p className="text-muted-foreground">{stats.total} kanji for the N5-N4 study path</p>
      </div>

      <div className="flex gap-2 flex-wrap">
        <Badge variant="outline">Total: {stats.total}</Badge>
        <Badge variant="outline">New: {stats.new}</Badge>
        <Badge variant="warning">Learning: {stats.learning}</Badge>
        <Badge variant="secondary">Review: {stats.review}</Badge>
        <Badge variant="success">Mastered: {stats.mastered}</Badge>
      </div>

      {dueKanji.length > 0 && (
        <div className="rounded-lg border border-primary/20 bg-primary/10 p-3">
          <p className="font-semibold text-sm text-primary">Due today: {dueKanji.length} kanji</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {dueKanji.slice(0, 10).map((id) => {
              const item = kanji.find((entry) => entry.id === id);
              return item ? (
                <Badge
                  key={id}
                  variant="outline"
                  className="cursor-pointer japanese-text text-sm"
                  onClick={() => setSelectedKanji(id)}
                >
                  {item.character}
                </Badge>
              ) : null;
            })}
            {dueKanji.length > 10 && (
              <span className="self-center text-xs text-muted-foreground">+{dueKanji.length - 10}</span>
            )}
          </div>
        </div>
      )}

      <input
        type="text"
        placeholder="Search by kanji or meaning..."
        className="w-full rounded-lg border border-border bg-background p-3"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <div className="flex flex-wrap items-center gap-2">
        <label className="text-sm font-medium text-muted-foreground">Lesson:</label>
        <select
          className="rounded-lg border border-border bg-background p-2 text-sm"
          value={lessonFilter}
          onChange={(event) => setLessonFilter(event.target.value)}
        >
          <option value="all">All lessons</option>
          {lessonOptions.map((lesson) => (
            <option key={lesson.id} value={lesson.id}>
              {lesson.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-2 flex-wrap">
        {(['all', 'new', 'learning', 'review', 'mastered'] as const).map((nextFilter) => (
          <Button
            key={nextFilter}
            variant={filter === nextFilter ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter(nextFilter)}
          >
            {nextFilter === 'all'
              ? 'All'
              : nextFilter === 'new'
                ? 'New'
                : nextFilter === 'learning'
                  ? 'Learning'
                  : nextFilter === 'review'
                    ? 'Review'
                    : 'Mastered'}
          </Button>
        ))}
      </div>

      <div className="text-sm text-muted-foreground">
        {filteredKanji.length} results
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filteredKanji.map((item) => {
          const progress = kanjiProgress[item.id];
          const lessonInfo = lessonOptions.find((lesson) => lesson.id === item.lessonId);

          return (
            <Card
              key={item.id}
              className="cursor-pointer transition-all hover:border-primary/50 hover:shadow-md"
              onClick={() => setSelectedKanji(item.id)}
            >
              <CardContent className="p-4 text-center">
                <p className="mb-2 text-4xl font-bold japanese-text">{item.character}</p>
                <p className="text-sm font-medium">{item.meaningVi}</p>
                <p className="mt-1 text-xs text-muted-foreground">On: {item.onyomi}</p>

                {progress && (
                  <Badge
                    variant={progress.status === 'mastered' ? 'success' : progress.status === 'review' ? 'secondary' : 'warning'}
                    className="mt-2 text-xs"
                  >
                    {getStatusLabel(progress.status)}
                  </Badge>
                )}

                <div className="mt-1.5">
                  <Badge variant="outline" className="text-xs">
                    {lessonInfo?.title || `Week ${item.week}`}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredKanji.length === 0 && (
        <div className="py-12 text-center text-muted-foreground">
          <PencilLine className="mx-auto mb-4 h-12 w-12 opacity-50" />
          <p>No kanji matched the current filters.</p>
        </div>
      )}

      {selectedKanji && (
        <KanjiDetailDialog
          open={Boolean(selectedKanji)}
          onOpenChange={(nextOpen) => {
            if (!nextOpen) setSelectedKanji(null);
          }}
          kanjiId={selectedKanji}
        />
      )}
    </div>
  );
}
