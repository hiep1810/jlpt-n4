import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BookMarked, BookOpen, BookText, ChevronRight, Languages, Quote, Star, Volume2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { Furigana } from '@/components/Furigana';
import { curriculum } from '@/data/curriculum';
import { grammar } from '@/data/grammar';
import { kanji } from '@/data/kanji';
import { vocabulary } from '@/data/vocabulary';
import { useStudyStore } from '@/store/studyStore';

const lessonOptions: { id: string; title: string; phase: string }[] = (() => {
  const lessons: { id: string; title: string; phase: string }[] = [];

  for (const phase of curriculum.phases) {
    for (const week of phase.weeks) {
      for (const lesson of week.lessons) {
        if (lesson.vocabulary.length > 0) {
          lessons.push({ id: lesson.id, title: lesson.title, phase: phase.nameVi });
        }
      }
    }
  }

  return lessons;
})();

const kanjiMap = new Map(kanji.map((item) => [item.character, item]));
const vocabByLesson = new Map<string, typeof vocabulary>();

for (const item of vocabulary) {
  if (!vocabByLesson.has(item.lessonId)) {
    vocabByLesson.set(item.lessonId, []);
  }
  vocabByLesson.get(item.lessonId)!.push(item);
}

function getKanjiBreakdown(text: string) {
  return [...text]
    .filter((char) => kanjiMap.has(char))
    .map((char) => kanjiMap.get(char)!);
}

function getRelatedWords(lessonId: string, currentId: string) {
  return vocabByLesson.get(lessonId)?.filter((item) => item.id !== currentId).slice(0, 5) ?? [];
}

function getLessonGrammar(lessonId: string) {
  return grammar.filter((item) => item.lessonId === lessonId).slice(0, 3);
}

function getStatusLabel(status: 'new' | 'learning' | 'review' | 'mastered') {
  if (status === 'new') return 'New';
  if (status === 'learning') return 'Learning';
  if (status === 'review') return 'Review';
  return 'Mastered';
}

function WordDetailDialog({
  open,
  onOpenChange,
  onSelectWord,
  wordId,
}: {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  onSelectWord: (wordId: string) => void;
  wordId: string;
}) {
  const word = vocabulary.find((item) => item.id === wordId);
  const { vocabProgress, reviewVocab, getDueVocab } = useStudyStore();

  if (!word) return null;

  const progress = vocabProgress[word.id];
  const lessonKanji = getKanjiBreakdown(word.japanese);
  const relatedWords = getRelatedWords(word.lessonId, word.id);
  const lessonGrammar = getLessonGrammar(word.lessonId);
  const lessonInfo = lessonOptions.find((lesson) => lesson.id === word.lessonId);
  const isDue = getDueVocab().includes(word.id);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">{word.japanese}</DialogTitle>
          <DialogDescription className="sr-only">{word.meaningVi}</DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <div className="py-4 text-center">
            <p className="mb-2 text-5xl font-bold japanese-text">
              <Furigana text={word.japanese} reading={word.reading} />
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg bg-primary/5 p-3">
              <Languages className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold">{word.meaningVi}</p>
                <p className="text-sm text-muted-foreground">{word.meaning}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BookMarked className="w-3.5 h-3.5" />
              <span>{lessonInfo?.title || word.lessonId}</span>
              {progress && (
                <Badge
                  variant={progress.status === 'mastered' ? 'success' : progress.status === 'review' ? 'secondary' : 'warning'}
                  className="text-xs"
                >
                  {getStatusLabel(progress.status)}
                </Badge>
              )}
            </div>
          </div>

          {lessonKanji.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <BookText className="w-4 h-4" />
                <h4 className="font-semibold">Kanji breakdown</h4>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {lessonKanji.map((item) => (
                  <div key={item.id} className="rounded-lg bg-secondary p-2 text-center">
                    <p className="text-xl japanese-text">{item.character}</p>
                    <p className="text-xs text-muted-foreground">On: {item.onyomi}</p>
                    <p className="text-xs text-muted-foreground">{item.meaningVi}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {word.example && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Quote className="w-4 h-4" />
                <h4 className="font-semibold">Example</h4>
              </div>
              <div className="rounded-lg bg-muted p-3">
                <p className="japanese-text text-sm">{word.example}</p>
                {word.exampleVi && (
                  <p className="mt-1 text-xs italic text-muted-foreground">{word.exampleVi}</p>
                )}
              </div>
            </div>
          )}

          {lessonGrammar.length > 0 && (
            <div className="space-y-2">
              <Separator />
              <h4 className="font-semibold text-sm">Grammar in this lesson</h4>
              <div className="space-y-1">
                {lessonGrammar.map((item) => (
                  <Link
                    key={item.id}
                    to={`/grammar?lesson=${encodeURIComponent(word.lessonId)}&grammar=${encodeURIComponent(item.id)}`}
                    onClick={() => onOpenChange(false)}
                    className="block rounded bg-secondary p-2 transition-colors hover:bg-secondary/80"
                  >
                    <p className="japanese-text text-sm">{item.pattern}</p>
                    <p className="text-xs text-muted-foreground">{item.meaningVi}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {relatedWords.length > 0 && (
            <div className="space-y-2">
              <Separator />
              <h4 className="font-semibold text-sm">Words from the same lesson</h4>
              <div className="flex flex-wrap gap-1.5">
                {relatedWords.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onSelectWord(item.id)}
                    className="inline-flex items-center gap-1 rounded bg-secondary px-2 py-1 text-xs transition-colors hover:bg-secondary/80"
                  >
                    <span className="japanese-text">
                      <Furigana text={item.japanese} reading={item.reading} />
                    </span>
                    <ChevronRight className="w-3 h-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{item.meaningVi}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2 pt-2">
            {!progress && (
              <Button className="flex-1" onClick={() => reviewVocab(word.id, 'good')}>
                <Star className="w-4 h-4 mr-2" /> Start studying
              </Button>
            )}
            {isDue && progress?.status !== 'mastered' && (
              <Button variant="outline" className="flex-1" onClick={() => reviewVocab(word.id, 'good')}>
                <Volume2 className="w-4 h-4 mr-2" /> Mark reviewed
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function VocabularyPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { vocabProgress } = useStudyStore();

  const [filter, setFilter] = useState<'all' | 'new' | 'learning' | 'review' | 'mastered'>('all');
  const [search, setSearch] = useState('');
  const [lessonFilter, setLessonFilter] = useState<string>(searchParams.get('lesson') || 'all');
  const [selectedWord, setSelectedWord] = useState<string | null>(searchParams.get('word'));

  const filteredWords = useMemo(() => {
    return vocabulary.filter((item) => {
      const progress = vocabProgress[item.id];
      const matchesFilter =
        filter === 'all' ||
        (!progress && filter === 'new') ||
        progress?.status === filter;
      const matchesSearch =
        !search ||
        item.japanese.includes(search) ||
        item.meaningVi.toLowerCase().includes(search.toLowerCase()) ||
        item.meaning.toLowerCase().includes(search.toLowerCase());
      const matchesLesson = lessonFilter === 'all' || item.lessonId === lessonFilter;

      return matchesFilter && matchesSearch && matchesLesson;
    });
  }, [filter, lessonFilter, search, vocabProgress]);

  const stats = {
    total: vocabulary.length,
    new: vocabulary.filter((item) => !vocabProgress[item.id]).length,
    learning: vocabulary.filter((item) => vocabProgress[item.id]?.status === 'learning').length,
    review: vocabulary.filter((item) => vocabProgress[item.id]?.status === 'review').length,
    mastered: vocabulary.filter((item) => vocabProgress[item.id]?.status === 'mastered').length,
  };

  const updateParams = (nextLesson: string, nextWord: string | null) => {
    const params = new URLSearchParams(searchParams);

    if (nextLesson !== 'all') params.set('lesson', nextLesson);
    else params.delete('lesson');

    if (nextWord) params.set('word', nextWord);
    else params.delete('word');

    setSearchParams(params, { replace: true });
  };

  const handleLessonChange = (value: string) => {
    setLessonFilter(value);
    updateParams(value, selectedWord);
  };

  const handleSelectWord = (wordId: string | null) => {
    setSelectedWord(wordId);
    updateParams(lessonFilter, wordId);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Vocabulary</h1>
        <p className="text-muted-foreground">{stats.total} Minna no Nihongo vocabulary items</p>
      </div>

      <div className="flex gap-2 flex-wrap">
        <Badge variant="outline">Total: {stats.total}</Badge>
        <Badge variant="outline">New: {stats.new}</Badge>
        <Badge variant="warning">Learning: {stats.learning}</Badge>
        <Badge variant="secondary">Review: {stats.review}</Badge>
        <Badge variant="success">Mastered: {stats.mastered}</Badge>
      </div>

      <input
        type="text"
        placeholder="Search vocabulary..."
        className="w-full rounded-lg border border-border bg-background p-3"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <div className="flex flex-wrap items-center gap-2">
        <label className="text-sm font-medium text-muted-foreground">Lesson:</label>
        <select
          className="rounded-lg border border-border bg-background p-2 text-sm"
          value={lessonFilter}
          onChange={(event) => handleLessonChange(event.target.value)}
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

      <div className="text-sm text-muted-foreground">{filteredWords.length} results</div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredWords.map((item) => {
          const progress = vocabProgress[item.id];
          return (
            <Card
              key={item.id}
              className="cursor-pointer transition-shadow hover:shadow-md"
              onClick={() => handleSelectWord(item.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-lg font-bold japanese-text">
                      <Furigana text={item.japanese} reading={item.reading} />
                    </p>
                    <p className="text-sm">{item.meaningVi}</p>
                    <p className="text-xs text-muted-foreground">{item.meaning}</p>
                  </div>
                  {progress && (
                    <Badge
                      variant={progress.status === 'mastered' ? 'success' : progress.status === 'review' ? 'secondary' : 'warning'}
                      className="text-xs"
                    >
                      {getStatusLabel(progress.status)}
                    </Badge>
                  )}
                </div>
                {item.example && (
                  <p className="mt-2 rounded bg-secondary p-2 text-xs text-muted-foreground japanese-text truncate">
                    {item.example}
                  </p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredWords.length === 0 && (
        <div className="py-12 text-center text-muted-foreground">
          <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No vocabulary matched the current filters.</p>
        </div>
      )}

      {selectedWord && (
        <WordDetailDialog
          open={Boolean(selectedWord)}
          onOpenChange={(nextOpen) => {
            if (!nextOpen) handleSelectWord(null);
          }}
          onSelectWord={handleSelectWord}
          wordId={selectedWord}
        />
      )}
    </div>
  );
}
