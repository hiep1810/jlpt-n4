import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Brain, Calendar, CheckCircle2, Circle, ClipboardCheck, Clock, Flame, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { curriculum } from '@/data/curriculum';
import { quizzes } from '@/data/quizzes';
import { useStudyStore } from '@/store/studyStore';
import FocusTimer from '@/components/FocusTimer';
import QuickStart from '@/components/QuickStart';
import LevelBar from '@/components/LevelBar';

const skills: { key: 'listening' | 'speaking' | 'reading' | 'writing'; label: string }[] = [
  { key: 'listening', label: 'Listening' },
  { key: 'speaking', label: 'Speaking' },
  { key: 'reading', label: 'Reading' },
  { key: 'writing', label: 'Writing' },
];

export default function Dashboard() {
  const { lessonProgress, streak, totalStudyMinutes, getTodayChecklist, getDueVocab, getDueKanji, getDueGrammar, xp, level } = useStudyStore();
  const todayChecklist = getTodayChecklist();
  const dueVocab = getDueVocab();
  const dueKanji = getDueKanji();
  const dueGrammar = getDueGrammar();

  const totalLessons = curriculum.phases.reduce(
    (acc, phase) => acc + phase.weeks.reduce((weekAcc, week) => weekAcc + week.lessons.length, 0),
    0
  );
  const completedLessons = Object.values(lessonProgress).filter((lesson) => lesson.status === 'completed').length;
  const progressPercent = totalLessons === 0 ? 0 : Math.round((completedLessons / totalLessons) * 100);

  const todayLesson = curriculum.phases
    .flatMap((phase) => phase.weeks.flatMap((week) => week.lessons))
    .find((lesson) => lessonProgress[lesson.id]?.status !== 'completed');

  const phaseProgress = curriculum.phases.map((phase) => {
    const phaseLessons = phase.weeks.flatMap((week) => week.lessons);
    const phaseCompleted = phaseLessons.filter((lesson) => lessonProgress[lesson.id]?.status === 'completed').length;
    return {
      ...phase,
      total: phaseLessons.length,
      completed: phaseCompleted,
      percent: phaseLessons.length === 0 ? 0 : Math.round((phaseCompleted / phaseLessons.length) * 100),
    };
  });

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Track progress across the Minna no Nihongo N4 plan.</p>
        </div>
        <LevelBar />
      </div>

      {/* ADHD-friendly: Focus Timer */}
      <FocusTimer />

      {/* ADHD-friendly: Quick Start */}
      <QuickStart />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <Flame className="w-8 h-8 text-orange-400" />
            <div>
              <p className="text-2xl font-bold">{streak}</p>
              <p className="text-sm text-muted-foreground">Day streak</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            <div>
              <p className="text-2xl font-bold">{completedLessons}/{totalLessons}</p>
              <p className="text-sm text-muted-foreground">Completed lessons</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <Brain className="w-8 h-8 text-green-400" />
            <div>
              <p className="text-2xl font-bold">{dueVocab.length + dueKanji.length}</p>
              <p className="text-sm text-muted-foreground">Cards due today</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <Clock className="w-8 h-8 text-blue-400" />
            <div>
              <p className="text-2xl font-bold">{Math.round(totalStudyMinutes / 60)}h</p>
              <p className="text-sm text-muted-foreground">Total study time</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <Star className="w-8 h-8 text-yellow-400" />
            <div>
              <p className="text-2xl font-bold">{level}</p>
              <p className="text-sm text-muted-foreground">{xp} XP</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Overall Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{progressPercent}% complete</span>
            <span className="text-sm">{completedLessons}/{totalLessons} lessons</span>
          </div>
          <Progress value={progressPercent} className="h-3" />

          {phaseProgress.map((phase) => (
            <div key={phase.id} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{phase.nameVi}</span>
                <span>{phase.completed}/{phase.total} ({phase.percent}%)</span>
              </div>
              <Progress value={phase.percent} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-4 gap-4">
        {/* Daily Review Card */}
        <Card className="border-primary/30">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" /> Ôn tập hàng ngày
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-3xl font-bold text-primary">{dueVocab.length + dueKanji.length + dueGrammar.length}</div>
            <p className="text-sm text-muted-foreground">Mục cần ôn hôm nay</p>
            <Link to="/review">
              <Button className="w-full">
                <Calendar className="w-4 h-4 mr-2" />
                Bắt đầu ôn tập
              </Button>
            </Link>
            <p className="text-xs text-muted-foreground">~5 phút, trộn từ vựng + kanji + ngữ pháp</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Today Checklist</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {skills.map(({ key, label }) => (
              <div key={key} className="flex items-center gap-3">
                {todayChecklist?.[key] ? (
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                ) : (
                  <Circle className="w-5 h-5 text-muted-foreground" />
                )}
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Next Lesson</CardTitle>
          </CardHeader>
          <CardContent>
            {todayLesson ? (
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg">{todayLesson.title}</h3>
                  {todayLesson.titleJa && (
                    <p className="text-sm text-muted-foreground japanese-text">{todayLesson.titleJa}</p>
                  )}
                </div>
                <Link to={`/lesson/${todayLesson.id}`}>
                  <Button className="w-full">
                    Open lesson <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="text-center py-4">
                <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-2" />
                <p className="text-lg font-semibold">All lessons completed.</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <ClipboardCheck className="w-5 h-5" /> Quick Quiz
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link to="/quiz">
              <Button className="w-full" variant="outline">
                <ClipboardCheck className="w-4 h-4 mr-2" />
                Start quiz
              </Button>
            </Link>
            {quizzes.slice(0, 2).map((quiz) => (
              <Link key={quiz.id} to="/quiz">
                <div className="p-3 bg-secondary rounded-lg hover:bg-secondary/80 cursor-pointer">
                  <p className="text-sm font-medium">{quiz.title}</p>
                  <p className="text-xs text-muted-foreground">{quiz.questions.length} questions • {quiz.timeLimit} minutes</p>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Roadmap</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {curriculum.phases.map((phase) => (
              <div key={phase.id}>
                <h3 className="font-semibold mb-2">{phase.id}. {phase.nameVi}</h3>
                <div className="flex flex-wrap gap-2">
                  {phase.weeks.map((week) => {
                    const weekCompleted = week.lessons.filter((lesson) => lessonProgress[lesson.id]?.status === 'completed').length;
                    const isComplete = weekCompleted === week.lessons.length;
                    const firstLesson = week.lessons[0];
                    return (
                      <Link key={week.id} to={firstLesson ? `/lesson/${firstLesson.id}` : '/lessons'}>
                        <Badge variant={isComplete ? 'success' : 'outline'} className="cursor-pointer">
                          Week {week.id}: {week.title} ({weekCompleted}/{week.lessons.length})
                        </Badge>
                      </Link>
                    );
                  })}
                </div>
                <Separator className="my-3" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
