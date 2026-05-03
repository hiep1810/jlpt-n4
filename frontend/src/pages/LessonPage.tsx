import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Fragment, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  BookText,
  CheckCircle2,
  ChevronDown,
  Headphones,
  Languages,
  Library,
  MessageSquare,
  Pause,
  PenTool,
  Play,
  Quote,
  ScrollText,
  SkipBack,
  SkipForward,
  Star,
  Volume2,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Furigana } from '@/components/Furigana';
import { GrammarDrillSection } from '@/components/GrammarDrillSection';
import { LessonSectionGrid } from '@/components/LessonSectionGrid';
import { WordAudioButton } from '@/components/WordAudioButton';
import { curriculum } from '@/data/curriculum';
import { grammar } from '@/data/grammar';
import { kanji } from '@/data/kanji';
import { vocabulary } from '@/data/vocabulary';
import { useStudyStore } from '@/store/studyStore';
import { LessonSection, SkillType, Vocabulary } from '@/types';
import { getLessonAudioFiles, getLessonNumber, introAudioFiles } from '@/utils/audio';

function AudioPlayer({ files }: { files: { label: string; url: string }[] }) {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !isPlaying) return;

    audio.play().catch(() => {
      setIsPlaying(false);
    });
  }, [currentTrack, isPlaying]);

  if (files.length === 0) {
    return (
      <div className="rounded-lg bg-secondary p-4 text-sm text-muted-foreground">
        No audio available for this lesson yet.
      </div>
    );
  }

  const handlePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      return;
    }

    audio.play().catch(() => {
      setIsPlaying(false);
    });
  };

  const goToTrack = (nextIndex: number) => {
    setCurrentTrack(nextIndex);
    setIsPlaying(true);
  };

  return (
    <div className="space-y-3">
      <audio
        ref={audioRef}
        src={files[currentTrack].url}
        onEnded={() => {
          if (currentTrack < files.length - 1) {
            setCurrentTrack((track) => track + 1);
            setIsPlaying(true);
          } else {
            setIsPlaying(false);
          }
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="rounded-lg bg-muted p-3">
        <p className="text-sm font-medium">{files[currentTrack].label}</p>
        <p className="truncate text-xs text-muted-foreground">{files[currentTrack].url}</p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <Button size="icon" variant="outline" onClick={() => goToTrack(currentTrack - 1)} disabled={currentTrack === 0}>
          <SkipBack className="h-4 w-4" />
        </Button>
        <Button size="icon" onClick={handlePlay}>
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={() => goToTrack(currentTrack + 1)}
          disabled={currentTrack === files.length - 1}
        >
          <SkipForward className="h-4 w-4" />
        </Button>
        <span className="ml-2 text-xs text-muted-foreground">
          {currentTrack + 1}/{files.length}
        </span>
      </div>

      <div className="max-h-40 space-y-1 overflow-y-auto">
        {files.map((file, index) => (
          <button
            key={`${file.url}-${index}`}
            onClick={() => goToTrack(index)}
            className={`w-full rounded px-3 py-2 text-left text-sm transition-colors ${
              index === currentTrack ? 'bg-primary/20 font-medium text-primary' : 'hover:bg-secondary'
            }`}
          >
            <div className="flex items-center gap-2">
              <Volume2 className="h-3 w-3" />
              <span className="truncate">{file.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

interface LessonResources {
  lesson: NonNullable<ReturnType<typeof findLesson>>;
  lessonVocab: typeof vocabulary;
  lessonKanji: typeof kanji;
  lessonGrammar: typeof grammar;
  allAudioFiles: { label: string; url: string }[];
  speakingFiles: { label: string; url: string }[];
}

function findLesson(lessonId?: string) {
  return (
    curriculum.phases
      .flatMap((phase) => phase.weeks.flatMap((week) => week.lessons))
      .find((item) => item.id === lessonId) ?? null
  );
}

function SectionCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );
}

function renderTaskList(tasks: string[] | undefined, icon: ReactNode) {
  if (!tasks || tasks.length === 0) return null;

  return (
    <div className="space-y-2">
      <h3 className="font-semibold">Tasks</h3>
      {tasks.map((task, index) => (
        <div key={`${task}-${index}`} className="flex items-center gap-2 rounded-lg bg-secondary p-3">
          {icon}
          <span className="text-sm">{task}</span>
        </div>
      ))}
    </div>
  );
}

const kanjiCharMap = new Map(kanji.map((k) => [k.character, k]));

function getAmHan(kanjiText: string): string {
  return [...kanjiText]
    .filter((c) => kanjiCharMap.has(c))
    .map((c) => kanjiCharMap.get(c)!.meaningVi)
    .join(' ');
}

function getRelatedWords(lessonId: string, currentId: string): Vocabulary[] {
  return vocabulary
    .filter((v) => v.lessonId === lessonId && v.id !== currentId)
    .slice(0, 5);
}

function getLessonGrammarForWord(lessonId: string) {
  return grammar.filter((g) => g.lessonId === lessonId).slice(0, 3);
}

function getVocabByLesson() {
  const map = new Map<string, Vocabulary[]>();
  for (const v of vocabulary) {
    if (!map.has(v.lessonId)) map.set(v.lessonId, []);
    map.get(v.lessonId)!.push(v);
  }
  return map;
}
const vocabByLesson = getVocabByLesson();

function WordDetailDialog({
  open,
  onOpenChange,
  wordId,
  lessonId,
}: {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  wordId: string | null;
  lessonId: string;
}) {
  const word = wordId ? vocabulary.find((v) => v.id === wordId) : undefined;
  const { vocabProgress, reviewVocab, getDueVocab } = useStudyStore();

  if (!word) return null;

  const progress = vocabProgress[word.id];
  const lessonKanji = [...word.reading || ''].filter((c) => kanjiCharMap.has(c)).map((c) => kanjiCharMap.get(c)!);
  const relatedWords = getRelatedWords(word.lessonId, word.id);
  const lessonGrammarList = getLessonGrammarForWord(word.lessonId);
  const isDue = getDueVocab().includes(word.id);

  const getStatusLabel = (s: 'new' | 'learning' | 'review' | 'mastered') => {
    if (s === 'new') return 'New';
    if (s === 'learning') return 'Learning';
    if (s === 'review') return 'Review';
    return 'Mastered';
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">{word.japanese}</DialogTitle>
          <DialogDescription className="sr-only">{word.meaningVi}</DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <div className="py-4 text-center">
            <p className="mb-2 text-5xl font-bold japanese-text">{word.reading || word.japanese}</p>
            {word.reading && <p className="text-lg text-muted-foreground japanese-text">{word.japanese}</p>}
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
              <BookOpen className="w-3.5 h-3.5" />
              <span>Ngày {findLesson(lessonId)?.dayNumber}</span>
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

          {relatedWords.length > 0 && (
            <div className="space-y-2">
              <Separator />
              <h4 className="font-semibold text-sm">Từ cùng bài</h4>
              <div className="flex flex-wrap gap-1.5">
                {relatedWords.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      // Navigate to the next word — this is handled by parent state
                      onOpenChange(false);
                      // Trigger parent to select this word via custom event
                      window.dispatchEvent(new CustomEvent('selectWord', { detail: item.id }));
                    }}
                    className="inline-flex items-center gap-1 rounded bg-secondary px-2 py-1 text-xs transition-colors hover:bg-secondary/80"
                  >
                    {item.reading || item.japanese}
                    <span className="text-muted-foreground">{item.meaningVi}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2 pt-2">
            {!progress && (
              <Button className="flex-1" onClick={() => reviewVocab(word.id, 'good')}>
                <Star className="w-4 h-4 mr-2" /> Bắt đầu học
              </Button>
            )}
            {isDue && progress?.status !== 'mastered' && (
              <Button variant="outline" className="flex-1" onClick={() => reviewVocab(word.id, 'good')}>
                <Volume2 className="w-4 h-4 mr-2" /> Đã ôn
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function LessonSectionContent({
  section,
  resources,
  onCompleteLesson,
}: {
  section: LessonSection;
  resources: LessonResources;
  onCompleteLesson: () => void;
}) {
  const { lesson, lessonVocab, lessonKanji, lessonGrammar, allAudioFiles, speakingFiles } = resources;
  const hasStudyContent = lessonVocab.length > 0 || lessonKanji.length > 0 || lessonGrammar.length > 0;
  const [expandedExamples, setExpandedExamples] = useState<Set<string>>(new Set());

  switch (section.kind) {
    case 'vocabulary':
      return (
        <SectionCard icon={<BookOpen className="h-5 w-5" />} title="Phần 1: Từ vựng">
          {renderTaskList(section.tasks, <BookOpen className="h-4 w-4 text-primary" />)}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-2 pr-4 text-left font-medium">Từ vựng</th>
                  <th className="pb-2 pr-4 text-left font-medium hidden md:table-cell">Hán tự</th>
                  <th className="pb-2 pr-4 text-left font-medium hidden lg:table-cell">Âm Hán</th>
                  <th className="pb-2 w-10 text-center font-medium"></th>
                  <th className="pb-2 text-left font-medium">Nghĩa</th>
                </tr>
              </thead>
              <tbody>
                {lessonVocab.map((item) => {
                  const isExpanded = expandedExamples.has(item.id);
                  return (
                    <Fragment key={item.id}>
                      <tr
                        className="border-b border-border/50 cursor-pointer hover:bg-secondary/30 transition-colors"
                        onClick={() => {
                          const next = new Set(expandedExamples);
                          if (next.has(item.id)) next.delete(item.id);
                          else next.add(item.id);
                          setExpandedExamples(next);
                        }}
                      >
                        <td className="py-2.5 pr-4">
                          <span className="japanese-text">
                            <Furigana text={item.japanese} reading={item.reading} className="text-base" />
                          </span>
                        </td>
                        <td className="py-2.5 pr-4 hidden md:table-cell">
                          <span className="japanese-text text-lg">{item.reading}</span>
                        </td>
                        <td className="py-2.5 pr-4 text-muted-foreground text-xs hidden lg:table-cell">
                          {getAmHan(item.reading)}
                        </td>
                        <td className="py-2.5 text-center">
                          <WordAudioButton text={item.japanese} size="sm" />
                        </td>
                        <td className="py-2.5">
                          <div className="flex items-center gap-1.5">
                            <span>{item.meaningVi}</span>
                            <ChevronDown className={cn('h-3.5 w-3.5 transition-transform text-muted-foreground', isExpanded && 'rotate-180')} />
                          </div>
                        </td>
                      </tr>
                      {isExpanded && item.example && (
                        <tr>
                          <td colSpan={5} className="pb-3">
                            <div className="ml-2 rounded-lg bg-muted p-3 space-y-1">
                              <div className="flex items-center gap-1.5">
                                <Quote className="h-3 w-3 text-primary" />
                                <p className="japanese-text text-sm">{item.example}</p>
                              </div>
                              {item.exampleVi && (
                                <p className="text-xs text-muted-foreground ml-5">{item.exampleVi}</p>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
          {lessonVocab.length === 0 && (
            <p className="text-sm text-muted-foreground">Bài này chưa có từ vựng mới.</p>
          )}
        </SectionCard>
      );
    case 'grammar':
      return (
        <SectionCard icon={<ScrollText className="h-5 w-5" />} title="Phần 2: Ngữ pháp">
          {renderTaskList(section.tasks, <ScrollText className="h-4 w-4 text-primary" />)}
          <div className="space-y-3">
            {lessonGrammar.map((item) => (
              <Link
                key={item.id}
                to={`/grammar?lesson=${encodeURIComponent(lesson.id)}&grammar=${encodeURIComponent(item.id)}`}
                className="block rounded-lg bg-secondary p-4 transition-colors hover:bg-secondary/80"
              >
                <p className="text-lg font-medium japanese-text">{item.pattern}</p>
                <p className="text-sm text-muted-foreground">{item.meaningVi}</p>
                {item.examples.slice(0, 2).map((example, index) => (
                  <div key={index} className="mt-2 rounded bg-muted p-2">
                    {example.reading ? (
                      <Furigana text={example.japanese} reading={example.reading} className="text-sm japanese-text" />
                    ) : (
                      <p className="text-sm japanese-text">{example.japanese}</p>
                    )}
                    <p className="text-xs text-muted-foreground">{example.meaning}</p>
                  </div>
                ))}
              </Link>
            ))}
          </div>
        </SectionCard>
      );
    case 'reading-practice':
      return (
        <SectionCard icon={<Library className="h-5 w-5" />} title="Phần 3: Luyện đọc">
          {renderTaskList(section.tasks, <Library className="h-4 w-4 text-primary" />)}
          <div className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">
            Đọc lại toàn bộ từ vựng, ví dụ ngữ pháp và cụm kanji của bài để chuẩn bị cho phần hội thoại và nghe.
          </div>
        </SectionCard>
      );
    case 'conversation':
      return (
        <SectionCard icon={<MessageSquare className="h-5 w-5" />} title="Phần 4: Hội thoại">
          {renderTaskList(section.tasks, <MessageSquare className="h-4 w-4 text-primary" />)}
          <div className="rounded-lg bg-muted p-4">
            <h4 className="mb-3 font-semibold">Shadowing audio</h4>
            <AudioPlayer files={speakingFiles} />
          </div>
        </SectionCard>
      );
    case 'listening':
      return (
        <SectionCard icon={<Headphones className="h-5 w-5" />} title="Phần 5: Luyện nghe">
          {renderTaskList(section.tasks, <Headphones className="h-4 w-4 text-primary" />)}
          <div className="rounded-lg bg-muted p-4">
            <h4 className="mb-3 font-semibold">Lesson audio</h4>
            <AudioPlayer files={allAudioFiles} />
          </div>
        </SectionCard>
      );
    case 'exercise':
      return (
        <SectionCard icon={<PenTool className="h-5 w-5" />} title="Phần 6: Bài tập">
          {renderTaskList(section.tasks, <PenTool className="h-4 w-4 text-primary" />)}
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm font-medium">Từ vựng</p>
              <p className="mt-1 text-2xl font-semibold">{lessonVocab.length}</p>
              <p className="text-xs text-muted-foreground">mục để luyện và ôn</p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm font-medium">Ngữ pháp</p>
              <p className="mt-1 text-2xl font-semibold">{lessonGrammar.length}</p>
              <p className="text-xs text-muted-foreground">mẫu câu trọng tâm</p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm font-medium">Kanji</p>
              <p className="mt-1 text-2xl font-semibold">{lessonKanji.length}</p>
              <p className="text-xs text-muted-foreground">chữ để luyện viết</p>
            </div>
          </div>
        </SectionCard>
      );
    case 'kanji':
      return (
        <SectionCard icon={<BookOpen className="h-5 w-5" />} title="Phần 7: Hán tự">
          {renderTaskList(section.tasks, <BookOpen className="h-4 w-4 text-primary" />)}
          <div className="flex flex-wrap gap-2">
            {lessonKanji.map((item) => (
              <Link
                key={item.id}
                to="/kanji"
                className="w-24 rounded-lg bg-secondary p-3 text-center transition-colors hover:bg-secondary/80"
              >
                <p className="text-2xl japanese-text">{item.character}</p>
                <p className="text-xs text-muted-foreground">{item.meaningVi}</p>
              </Link>
            ))}
          </div>
        </SectionCard>
      );
    case 'kanji-renshuu':
      return (
        <SectionCard icon={<PenTool className="h-5 w-5" />} title="Phần 8: Kanji Renshuu">
          {renderTaskList(section.tasks, <PenTool className="h-4 w-4 text-primary" />)}
          <div className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">
            Mở trang Kanji để vào chế độ guided writing hoặc blind test cho các chữ trong bài này.
          </div>
          <Link to="/kanji">
            <Button variant="outline">Mở trang Kanji</Button>
          </Link>
        </SectionCard>
      );
    case 'grammar-renshuu':
      return (
        <SectionCard icon={<ScrollText className="h-5 w-5" />} title="Phần 9: Ngữ pháp Renshuu">
          {renderTaskList(section.tasks, <ScrollText className="h-4 w-4 text-primary" />)}
          <GrammarDrillSection lessonId={lesson.id} grammarIds={lesson.grammar} />
        </SectionCard>
      );
    case 'reading-comprehension':
      return (
        <SectionCard icon={<Library className="h-5 w-5" />} title="Phần 10: Đọc hiểu">
          {renderTaskList(section.tasks, <Library className="h-4 w-4 text-primary" />)}
          <div className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">
            Sau khi đọc xong, hãy thử giải thích lại bài bằng tiếng Việt hoặc viết 2-3 câu tiếng Nhật ngắn.
          </div>
        </SectionCard>
      );
    case 'test':
      return (
        <SectionCard icon={<CheckCircle2 className="h-5 w-5" />} title="Phần 11: Kiểm tra">
          {renderTaskList(section.tasks, <CheckCircle2 className="h-4 w-4 text-primary" />)}
          <div className="rounded-lg bg-muted p-4">
            <p className="text-sm font-medium">Quick checklist</p>
            <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
              <div className="rounded bg-background px-3 py-2">
                Từ vựng: {lessonVocab.length > 0 ? `${lessonVocab.length} mục` : 'Không có mục riêng'}
              </div>
              <div className="rounded bg-background px-3 py-2">
                Ngữ pháp: {lessonGrammar.length > 0 ? `${lessonGrammar.length} mẫu` : 'Không có mục riêng'}
              </div>
              <div className="rounded bg-background px-3 py-2">
                Kanji: {lessonKanji.length > 0 ? `${lessonKanji.length} chữ` : 'Không có mục riêng'}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {hasStudyContent && (
              <Link to="/flashcards">
                <Button variant="outline">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Review flashcards
                </Button>
              </Link>
            )}
            <Link to={`/quiz?lesson=${lesson.id}`}>
              <Button variant="secondary">
                <ScrollText className="mr-2 h-4 w-4" />
                Làm quiz
              </Button>
            </Link>
            <Button variant="default" onClick={onCompleteLesson}>
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Mark lesson complete
            </Button>
          </div>
        </SectionCard>
      );
    case 'reference':
      return (
        <SectionCard icon={<BookOpen className="h-5 w-5" />} title="Phần 12: Tham khảo">
          {renderTaskList(section.tasks, <BookOpen className="h-4 w-4 text-primary" />)}
          <div className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">
            Audio: {allAudioFiles.length} track
            {' • '}
            Vocab: {lessonVocab.length}
            {' • '}
            Grammar: {lessonGrammar.length}
            {' • '}
            Kanji: {lessonKanji.length}
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/flashcards">
              <Button variant="outline">Review flashcards</Button>
            </Link>
            <Link to={`/vocabulary?lesson=${encodeURIComponent(lesson.id)}`}>
              <Button variant="outline">Mở từ vựng</Button>
            </Link>
            <Link to={`/grammar?lesson=${encodeURIComponent(lesson.id)}`}>
              <Button variant="outline">Mở ngữ pháp</Button>
            </Link>
          </div>
        </SectionCard>
      );
    default:
      return null;
  }
}

export default function LessonPage() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const { lessonProgress, completeLesson, completeSkill } = useStudyStore();
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const lesson = useMemo(() => findLesson(lessonId), [lessonId]);

  const resources = useMemo(() => {
    if (!lesson) return null;

    const lessonVocab = vocabulary.filter((item) => lesson.vocabulary.includes(item.id));
    const lessonKanji = kanji.filter((item) => lesson.kanji.includes(item.id));
    const lessonGrammar = grammar.filter((item) => lesson.grammar.includes(item.id));

    const lessonNum = getLessonNumber(lesson.id);
    const introFiles = lesson.id.startsWith('hiragana') || lesson.id.startsWith('katakana') ? introAudioFiles : [];
    const lessonFiles = lessonNum && lessonNum <= 50 ? getLessonAudioFiles(lessonNum) : [];
    const allAudioFiles = [...introFiles, ...lessonFiles];
    const speakingFiles = allAudioFiles.filter((file) =>
      ['Kaiwa', 'Reibun', 'Hội thoại', 'Ví dụ'].some((label) => file.label.includes(label))
    );

    return { lesson, lessonVocab, lessonKanji, lessonGrammar, allAudioFiles, speakingFiles };
  }, [lesson]);

  useEffect(() => {
    if (!lesson?.sections?.length) return;

    const sectionId = searchParams.get('section');
    const hasSection = lesson.sections.some((section) => section.id === sectionId);
    if (hasSection) return;

    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('section', lesson.sections[0].id);
    setSearchParams(nextParams, { replace: true });
  }, [lesson, searchParams, setSearchParams]);

  if (!lesson || !resources) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Lesson not found</h1>
        <Link to="/lessons">
          <Button className="mt-4">Back to lessons</Button>
        </Link>
      </div>
    );
  }

  const progress = lessonProgress[lesson.id];
  const activeSectionId = searchParams.get('section') || lesson.sections?.[0]?.id || '';
  const activeSection = lesson.sections?.find((section) => section.id === activeSectionId) || null;

  const markSkillComplete = (skill: SkillType) => {
    completeSkill(lesson.id, skill);
  };

  const handleSectionSelect = (sectionId: string) => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('section', sectionId);
    setSearchParams(nextParams);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/lessons">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold">{lesson.title}</h1>
          {lesson.titleJa && <p className="japanese-text text-lg text-muted-foreground">{lesson.titleJa}</p>}
          <p className="text-sm text-muted-foreground">Day {lesson.dayNumber}</p>
        </div>
        {progress?.status === 'completed' && (
          <Badge variant="success" className="ml-auto">
            <CheckCircle2 className="mr-1 h-3 w-3" /> Completed
          </Badge>
        )}
      </div>

      <div className="flex gap-2">
        <Button onClick={() => completeLesson(lesson.id)} variant="outline" size="sm">
          <CheckCircle2 className="mr-2 h-4 w-4" /> Mark lesson complete
        </Button>
      </div>

      <div className="space-y-6">
        <div className="rounded-xl border bg-card p-4">
          <p className="text-sm text-muted-foreground">Lesson sections</p>
          <h2 className="mt-1 text-xl font-semibold">Flow 12 phần cho bài học này</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Mỗi bài học có 12 phần: Từ vựng, Ngữ pháp, Luyện đọc, Hội thoại, Luyện nghe, Bài tập, Hán tự, Kanji Renshuu, Ngữ pháp Renshuu, Đọc hiểu, Kiểm tra, Tham khảo.
          </p>
        </div>

        <LessonSectionGrid sections={lesson.sections ?? []} activeSectionId={activeSectionId} onSelect={handleSectionSelect} />

        {activeSection && (
          <LessonSectionContent
            section={activeSection}
            resources={resources}
            onCompleteLesson={() => completeLesson(lesson.id)}
          />
        )}
      </div>

      <Separator />

      {resources.lessonVocab.length > 0 && (
        <Link to="/flashcards">
          <Button variant="outline">
            <BookOpen className="mr-2 h-4 w-4" /> Review flashcards
          </Button>
        </Link>
      )}

      <WordDetailDialog
        open={Boolean(selectedWord)}
        onOpenChange={(nextOpen) => {
          if (!nextOpen) setSelectedWord(null);
        }}
        wordId={selectedWord}
        lessonId={lesson.id}
      />
    </div>
  );
}
