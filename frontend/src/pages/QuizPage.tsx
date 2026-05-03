import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { quizzes, type QuizQuestion } from '@/data/quizzes';
import { generateAllLessonQuizzes } from '@/data/lessonQuizzes';
import { getLessonAudioFiles } from '@/utils/audio';
import { useStudyStore } from '@/store/studyStore';
import {
  Clock,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  ArrowRight,
  Trophy,
  BookOpen,
  ScrollText,
  Headphones,
  PenTool,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
} from 'lucide-react';

const partIcons = {
  vocabulary: BookOpen,
  grammar: ScrollText,
  reading: BookOpen,
  listening: Headphones,
};

const partLabels = {
  vocabulary: '言語知識 — 語彙 (Từ vựng)',
  grammar: '言語知識 — 文法 (Ngữ pháp)',
  reading: '読解 (Đọc hiểu)',
  listening: '聴解 (Nghe hiểu)',
};

const subTypeLabels: Record<string, string> = {
  'kanji-reading': '漢字読み',
  'kanji-writing': '漢字書き',
  'word-meaning': '言葉の意味',
  'word-synonym': '類語',
  'word-usage': '言葉の使い方',
  'sentence-grammar': '文の文法',
  'text-grammar': '文法 2',
  'passage-reading': '文章読解',
  'info-search': '情報検索',
  'task-listening': '課題理解',
  'point-listening': 'ポイント理解',
  'conversation': '会話問題',
  'quick-response': '即時应答',
};

/** Group questions by part with section headers */
function getSectionBreaks(questions: { part: string }[]) {
  const breaks: number[] = [];
  for (let i = 1; i < questions.length; i++) {
    if (questions[i].part !== questions[i - 1].part) {
      breaks.push(i);
    }
  }
  return breaks;
}

/** Audio player for listening questions using Mondai audio */
function ListeningAudioPlayer({ audioNum }: { audioNum: number }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const files = getLessonAudioFiles(audioNum).map((f) => ({
    label: f.label,
    url: f.url,
  }));

  const handlePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const handleEnded = () => {
    if (currentTrack < files.length - 1) setCurrentTrack(currentTrack + 1);
    else setIsPlaying(false);
  };

  if (files.length === 0) return null;

  return (
    <div className="space-y-3">
      <audio
        ref={audioRef}
        src={files[currentTrack].url}
        onEnded={handleEnded}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <div className="p-3 bg-muted rounded-lg">
        <p className="text-sm font-medium">{files[currentTrack].label}</p>
      </div>
      <div className="flex items-center gap-2 justify-center">
        <Button size="icon" variant="outline" onClick={() => { if (currentTrack > 0) { setCurrentTrack(currentTrack - 1); setIsPlaying(true); } }} disabled={currentTrack === 0}>
          <SkipBack className="w-4 h-4" />
        </Button>
        <Button size="icon" onClick={handlePlay}>
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </Button>
        <Button size="icon" variant="outline" onClick={() => { if (currentTrack < files.length - 1) { setCurrentTrack(currentTrack + 1); setIsPlaying(true); } }} disabled={currentTrack === files.length - 1}>
          <SkipForward className="w-4 h-4" />
        </Button>
        <span className="text-xs text-muted-foreground ml-2">{currentTrack + 1}/{files.length}</span>
      </div>
      <div className="space-y-1 max-h-32 overflow-y-auto">
        {files.map((file, i) => (
          <button
            key={i}
            onClick={() => { setCurrentTrack(i); setIsPlaying(true); }}
            className={`w-full text-left px-3 py-1.5 rounded text-sm transition-colors ${i === currentTrack ? 'bg-primary/20 text-primary font-medium' : 'hover:bg-secondary'}`}
          >
            <div className="flex items-center gap-2">
              <Volume2 className="w-3 h-3" />
              <span className="truncate">{file.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function QuizPage() {
  const [searchParams] = useSearchParams();
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [correctIndices, setCorrectIndices] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const saveQuizResult = useStudyStore((state) => state.saveQuizResult);

  // Merge static quizzes + auto-generated lesson quizzes
  const lessonQuizzes = useMemo(() => generateAllLessonQuizzes(), []);
  const allQuizzes = useMemo(() => [...quizzes, ...lessonQuizzes], [lessonQuizzes]);

  // Auto-start lesson quiz from query param
  const lessonParam = searchParams.get('lesson');
  useEffect(() => {
    if (lessonParam && !activeQuiz) {
      const targetId = `lesson-quiz-${lessonParam}`;
      const found = allQuizzes.find((q) => q.id === targetId);
      if (found) {
        setActiveQuiz(targetId);
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setAnswers([]);
        setCorrectIndices([]);
        setQuizCompleted(false);
      }
    }
  }, [lessonParam, activeQuiz, allQuizzes]);

  const quiz = activeQuiz ? allQuizzes.find((q) => q.id === activeQuiz) : null;

  const randomizeOptions = (q: QuizQuestion): QuizQuestion => {
    const indices = q.options.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const shuffled = indices.map((i) => q.options[i]);
    const newCorrect = indices.indexOf(q.correctAnswer);
    return { ...q, options: shuffled, correctAnswer: newCorrect };
  };
  const question = useMemo<QuizQuestion | null>(
    () => quiz ? randomizeOptions(quiz.questions[currentQuestion]) : null,
    [quiz, currentQuestion]
  );
  const sectionBreaks = quiz ? getSectionBreaks(quiz.questions) : [];

  useEffect(() => {
    if (!quiz || quizCompleted) return;
    setTimeLeft(quiz.timeLimit * 60);
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setQuizCompleted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [quiz, quizCompleted]);

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
  };

  const handleNext = () => {
    if (!quiz || !question) return;
    const newAnswers = [...answers, selectedAnswer ?? -1];
    setAnswers(newAnswers);
    setCorrectIndices([...correctIndices, question.correctAnswer]);
    setShowResult(false);
    setSelectedAnswer(null);

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleStartQuiz = (id: string) => {
    setActiveQuiz(id);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers([]);
    setCorrectIndices([]);
    setQuizCompleted(false);
  };

  const handleBack = () => {
    setActiveQuiz(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers([]);
    setCorrectIndices([]);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Quiz list view
  if (!quiz) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Quiz / Thi thử JLPT N4</h1>
          <p className="text-muted-foreground">Luyện tập theo định dạng JLPT N4 chính thức</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Cấu trúc đề thi JLPT N4</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="font-medium">Part 1 — 言語知識（語彙）</span><span>Từ vựng & Kanji</span></div>
            <div className="flex justify-between"><span className="font-medium">Part 1 — 言語知識（文法）</span><span>Ngữ pháp</span></div>
            <div className="flex justify-between"><span className="font-medium">Part 2 — 読解</span><span>Đọc hiểu</span></div>
            <div className="flex justify-between"><span className="font-medium">Part 3 — 聴解</span><span>Nghe hiểu</span></div>
          </CardContent>
        </Card>

        {/* Đề thi thử + Quiz tổng hợp */}
        <div>
          <h2 className="text-xl font-bold mb-3">📝 Đề thi thử</h2>
          <div className="grid gap-4">
            {quizzes.map((q) => {
              const vocabCount = q.questions.filter((qq) => qq.part === 'vocabulary').length;
              const grammarCount = q.questions.filter((qq) => qq.part === 'grammar').length;
              const readingCount = q.questions.filter((qq) => qq.part === 'reading').length;
              const listeningCount = q.questions.filter((qq) => qq.part === 'listening').length;

              return (
                <Card key={q.id} className="hover:border-primary/50 transition-colors cursor-pointer" onClick={() => handleStartQuiz(q.id)}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div>
                        <span>{q.title}</span>
                        {q.titleJa && <span className="block text-sm text-muted-foreground japanese-text mt-1">{q.titleJa}</span>}
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{q.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {q.timeLimit} phút</span>
                      <span>{q.questions.length} câu hỏi</span>
                    </div>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {vocabCount > 0 && <Badge variant="outline">{vocabCount} Từ vựng</Badge>}
                      {grammarCount > 0 && <Badge variant="outline">{grammarCount} Ngữ pháp</Badge>}
                      {readingCount > 0 && <Badge variant="outline">{readingCount} Đọc hiểu</Badge>}
                      {listeningCount > 0 && <Badge variant="outline">{listeningCount} Nghe hiểu</Badge>}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Test theo từng bài học */}
        <div>
          <h2 className="text-xl font-bold mb-3">📚 Test theo bài học</h2>
          <p className="text-sm text-muted-foreground mb-4">Tự động tạo từ từ vựng + ngữ pháp của mỗi bài</p>
          <div className="grid gap-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {lessonQuizzes.map((q) => (
                <Button key={q.id} variant="outline" className="justify-start h-auto py-2 px-3" onClick={() => handleStartQuiz(q.id)}>
                  <div className="text-left">
                    <span className="text-sm font-medium">{q.title.replace('Test ', '')}</span>
                    <span className="block text-xs text-muted-foreground">{q.questions.length} câu</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz completed view
  if (quizCompleted) {
    const correctCount = answers.filter((a, i) => a === correctIndices[i]).length;
    const score = Math.round((correctCount / quiz.questions.length) * 100);
    const passed = score >= 60;

    // Save result once
    useEffect(() => {
      saveQuizResult({
        id: `${quiz.id}-${Date.now()}`,
        quizType: 'mock',
        score,
        total: quiz.questions.length,
        completedAt: new Date().toISOString(),
      });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Score breakdown by part
    const parts = ['vocabulary', 'grammar', 'reading', 'listening'] as const;
    const partScores = parts.map((p) => {
      const indices = quiz.questions.map((q, i) => q.part === p ? i : -1).filter((i) => i >= 0);
      if (indices.length === 0) return null;
      const correct = indices.filter((i) => answers[i] === correctIndices[i]).length;
      return { part: p, label: partLabels[p], correct, total: indices.length };
    }).filter(Boolean);

    return (
      <div className="space-y-6 max-w-2xl mx-auto">
        <Card>
          <CardContent className="py-8 text-center">
            <Trophy className={`w-16 h-16 mx-auto mb-4 ${passed ? 'text-yellow-400' : 'text-muted-foreground'}`} />
            <h2 className="text-2xl font-bold mb-2">Kết quả</h2>
            <p className="text-lg text-muted-foreground mb-4">{quiz.title}</p>

            <div className="text-5xl font-bold mb-2">{score}%</div>
            <p className="text-muted-foreground mb-4">{correctCount}/{quiz.questions.length} câu đúng</p>

            <Progress value={score} className="h-3 mb-6" />

            {/* Breakdown by part */}
            <div className="space-y-2 mb-6 text-left">
              {partScores.map((s) => {
                const pct = s ? Math.round((s.correct / s.total) * 100) : 0;
                return s ? (
                  <div key={s.part} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{s.label}</span>
                      <span>{s.correct}/{s.total} ({pct}%)</span>
                    </div>
                    <Progress value={pct} className="h-2" />
                  </div>
                ) : null;
              })}
            </div>

            <div className="flex gap-2 justify-center">
              <Button onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" /> Quay lại danh sách
              </Button>
              <Button onClick={() => handleStartQuiz(quiz.id)} variant="outline">
                Làm lại
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Review answers */}
        <Card>
          <CardHeader>
            <CardTitle>Chi tiết đáp án</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {quiz.questions.map((q, i) => {
              const isCorrect = answers[i] === correctIndices[i];
              return (
                <div key={q.id} className={`p-4 rounded-lg ${isCorrect ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                  <div className="flex items-start gap-2">
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">
                          {subTypeLabels[q.subType || ''] || q.part}
                        </Badge>
                        <span className="font-medium">Câu {i + 1}</span>
                      </div>
                      {q.questionJa && <p className="japanese-text text-sm mb-1">{q.questionJa}</p>}
                      {!isCorrect && (
                        <p className="text-sm text-muted-foreground">
                          Đáp án đúng: <span className="text-green-400 font-medium">{q.options[q.correctAnswer]}</span>
                        </p>
                      )}
                      {q.explanation && (
                        <p className="text-sm text-muted-foreground mt-1">{q.explanation}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    );
  }

  // Active quiz view
  // Check if we're at a section boundary
  const isSectionStart = sectionBreaks.includes(currentQuestion) || currentQuestion === 0;
  const currentPart = question?.part;

  return (
    <div className="space-y-3 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={handleBack}>
          <ArrowLeft className="w-4 h-4 mr-2" /> Thoát
        </Button>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className={`font-mono font-bold ${timeLeft < 300 ? 'text-red-400' : ''}`}>
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      {/* Progress */}
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span>Câu {currentQuestion + 1}/{quiz.questions.length}</span>
          <span>{quiz.title}</span>
        </div>
        <Progress value={((currentQuestion + 1) / quiz.questions.length) * 100} className="h-1.5" />
      </div>

      {/* Section header when entering new part */}
      {isSectionStart && currentPart && (
        <Card className="border-primary/30">
          <CardContent className="py-3 flex items-center gap-3">
            {(() => { const Icon = partIcons[currentPart]; return <Icon className="w-5 h-5 text-primary" />; })()}
            <div>
              <p className="font-semibold text-primary text-sm">{partLabels[currentPart]}</p>
              <p className="text-xs text-muted-foreground">
                {subTypeLabels[question?.subType || ''] || ''}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Question */}
      {question && (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2 mb-1">
              {(() => {
                const Icon = partIcons[question.part];
                return (
                  <Badge variant="outline" className="flex items-center gap-1 text-xs">
                    <Icon className="w-3 h-3" />
                    {subTypeLabels[question.subType || ''] || partLabels[question.part]}
                  </Badge>
                );
              })()}
            </div>
            <CardTitle className="text-base">{question.question}</CardTitle>
            {question.questionJa && (
              <p className="text-lg japanese-text mt-1 whitespace-pre-line">{question.questionJa}</p>
            )}
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            {/* Listening audio */}
            {question.part === 'listening' && (
              <div className="mb-4">
                <p className="text-sm font-medium mb-3 flex items-center gap-2">
                  <Headphones className="w-4 h-4" /> Nghe audio rồi chọn đáp án:
                </p>
                {question.audioNum ? (
                  <ListeningAudioPlayer audioNum={question.audioNum} />
                ) : (
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm font-medium mb-1">📰 Script (tham khảo):</p>
                    <p className="text-sm text-muted-foreground japanese-text whitespace-pre-line">{question.audioScript}</p>
                  </div>
                )}
              </div>
            )}

            {/* Image options grid (4 images A/B/C/D for listening with pictures) */}
            {question.imageOptions && question.imageOptions.length === 4 && (
              <div className="grid grid-cols-2 gap-3 mb-4">
                {question.imageOptions.map((img, i) => (
                  <div
                    key={i}
                    className={`relative border-2 rounded-lg overflow-hidden cursor-pointer transition-colors aspect-square flex items-center justify-center bg-muted ${
                      showResult
                        ? i === question.correctAnswer ? 'border-green-400 bg-green-400/10'
                          : i === selectedAnswer ? 'border-red-400 bg-red-400/10'
                          : 'border-border opacity-50'
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => handleAnswer(i)}
                  >
                    <img src={img} alt={`Lựa chọn ${String.fromCharCode(65 + i)}`} className="w-full h-full object-contain p-2" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                    {/* Label badge */}
                    <div className={`absolute top-2 left-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                      showResult
                        ? i === question.correctAnswer ? 'bg-green-400'
                          : i === selectedAnswer ? 'bg-red-400'
                          : 'bg-muted-foreground'
                        : 'bg-primary'
                    }`}>
                      {String.fromCharCode(65 + i)}
                    </div>
                    {showResult && i === question.correctAnswer && (
                      <CheckCircle2 className="absolute bottom-2 right-2 w-5 h-5 text-green-400" />
                    )}
                    {showResult && i === selectedAnswer && i !== question.correctAnswer && (
                      <XCircle className="absolute bottom-2 right-2 w-5 h-5 text-red-400" />
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Text options (shown when no imageOptions, or alongside as labels) */}
            {!question.imageOptions && question.options.map((option, i) => {
              let className = 'p-3 rounded-lg border-2 cursor-pointer transition-colors ';
              if (showResult) {
                if (i === question.correctAnswer) {
                  className += 'border-green-400 bg-green-400/10';
                } else if (i === selectedAnswer && i !== question.correctAnswer) {
                  className += 'border-red-400 bg-red-400/10';
                } else {
                  className += 'border-border opacity-50';
                }
              } else {
                className += 'border-border hover:border-primary/50 hover:bg-secondary';
              }

              return (
                <div key={i} className={className} onClick={() => handleAnswer(i)}>
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                      showResult
                        ? i === question.correctAnswer ? 'bg-green-400 text-white'
                          : i === selectedAnswer ? 'bg-red-400 text-white'
                          : 'bg-muted text-muted-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="flex-1 japanese-text text-sm">{option}</span>
                    {showResult && i === question.correctAnswer && <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />}
                    {showResult && i === selectedAnswer && i !== question.correctAnswer && <XCircle className="w-4 h-4 text-red-400 shrink-0" />}
                  </div>
                </div>
              );
            })}

            {/* Explanation */}
            {showResult && question.explanation && (
              <div className="p-3 bg-secondary rounded-lg mt-2">
                <p className="text-sm font-medium mb-1">💡 Giải thích:</p>
                <p className="text-sm text-muted-foreground">{question.explanation}</p>
              </div>
            )}

            {/* Next button */}
            {showResult && (
              <Button className="w-full mt-2" onClick={handleNext}>
                {currentQuestion < quiz.questions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {/* Question navigator */}
      <div className="flex flex-wrap gap-1 justify-center pt-1">
        {quiz.questions.map((_, i) => {
          let color = 'bg-muted';
          if (i < currentQuestion) {
            color = answers[i] === correctIndices[i] ? 'bg-green-400' : 'bg-red-400';
          } else if (i === currentQuestion) {
            color = 'bg-primary';
          }
          return (
            <button
              key={i}
              className={`w-8 h-8 rounded text-xs font-bold text-white ${color}`}
              onClick={() => {
                if (i <= currentQuestion) {
                  setCurrentQuestion(i);
                  setShowResult(i < currentQuestion);
                  setSelectedAnswer(i < currentQuestion ? answers[i] : null);
                }
              }}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
