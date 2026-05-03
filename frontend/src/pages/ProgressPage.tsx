import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useStudyStore } from '@/store/studyStore';
import { curriculum } from '@/data/curriculum';
import { vocabulary } from '@/data/vocabulary';
import { kanji } from '@/data/kanji';
import { grammar } from '@/data/grammar';
import { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  CheckCircle2,
  Brain,
  Target,
  BookOpen,
  Clock,
  ScrollText,
} from 'lucide-react';

/** Self-contained checklist with localStorage persistence */
function WeeklyChecklist({ items }: { items: string[] }) {
  const STORAGE_KEY = 'jlpt-n4-weekly-checklist';
  const [checked, setChecked] = useState<Record<number, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch { return {}; }
  });

  const toggle = (idx: number) => {
    const next = { ...checked, [idx]: !checked[idx] };
    setChecked(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const completed = items.filter((_, i) => checked[i]).length;

  return (
    <>
      <div className="text-sm text-muted-foreground mb-2">{completed}/{items.length} đã hoàn thành</div>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2 p-2 rounded hover:bg-secondary cursor-pointer" onClick={() => toggle(i)}>
          <input type="checkbox" className="w-4 h-4 rounded" checked={!!checked[i]} onChange={() => {}} />
          <span className="text-sm">{item}</span>
        </div>
      ))}
    </>
  );
}

export default function ProgressPage() {
  const { lessonProgress, vocabProgress, kanjiProgress, grammarProgress, dailyChecklist, streak, totalStudyMinutes } = useStudyStore();

  // Overall stats
  const totalLessons = curriculum.phases.reduce(
    (acc, p) => acc + p.weeks.reduce((a, w) => a + w.lessons.length, 0), 0
  );
  const completedLessons = Object.values(lessonProgress).filter((l) => l.status === 'completed').length;
  const inProgressLessons = Object.values(lessonProgress).filter((l) => l.status === 'in_progress').length;

  // Vocabulary stats
  const vocabStats = {
    total: Object.keys(vocabProgress).length,
    mastered: Object.values(vocabProgress).filter((p) => p.status === 'mastered').length,
    learning: Object.values(vocabProgress).filter((p) => p.status === 'learning').length,
    review: Object.values(vocabProgress).filter((p) => p.status === 'review').length,
  };

  // Kanji stats
  const kanjiStats = {
    total: Object.keys(kanjiProgress).length,
    mastered: Object.values(kanjiProgress).filter((p) => p.status === 'mastered').length,
    learning: Object.values(kanjiProgress).filter((p) => p.status === 'learning').length,
    review: Object.values(kanjiProgress).filter((p) => p.status === 'review').length,
  };

  // Grammar stats
  const grammarStats = {
    total: Object.keys(grammarProgress).length,
    mastered: Object.values(grammarProgress).filter((p) => p.status === 'mastered').length,
    learning: Object.values(grammarProgress).filter((p) => p.status === 'learning').length,
    review: Object.values(grammarProgress).filter((p) => p.status === 'review').length,
  };

  // Skills completion
  const skillCounts = { listening: 0, speaking: 0, reading: 0, writing: 0 };
  Object.values(lessonProgress).forEach((lp) => {
    lp.completedSkills.forEach((s) => { skillCounts[s]++; });
  });

  // Today
  const today = new Date();

  // Weekly review
  const todayChecklist = dailyChecklist[today.toISOString().split('T')[0]];
  const allSkillsDone = todayChecklist?.listening && todayChecklist?.speaking && todayChecklist?.reading && todayChecklist?.writing;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Tiến độ học tập</h1>
        <p className="text-muted-foreground">Thống kê chi tiết</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-orange-400" />
            <div>
              <p className="text-2xl font-bold">{streak}</p>
              <p className="text-sm text-muted-foreground">Ngày streak</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <Clock className="w-8 h-8 text-blue-400" />
            <div>
              <p className="text-2xl font-bold">{Math.round(totalStudyMinutes / 60)}h</p>
              <p className="text-sm text-muted-foreground">Tổng thời gian</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-green-400" />
            <div>
              <p className="text-2xl font-bold">{completedLessons}</p>
              <p className="text-sm text-muted-foreground">Bài hoàn thành</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <Brain className="w-8 h-8 text-primary" />
            <div>
              <p className="text-2xl font-bold">{vocabStats.mastered + kanjiStats.mastered}</p>
              <p className="text-sm text-muted-foreground">Đã thuộc</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lesson Progress by Phase */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Tiến độ theo giai đoạn</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {curriculum.phases.map((phase) => {
            const phaseLessons = phase.weeks.flatMap((w) => w.lessons);
            const phaseCompleted = phaseLessons.filter((l) => lessonProgress[l.id]?.status === 'completed').length;
            const percent = Math.round((phaseCompleted / phaseLessons.length) * 100);
            return (
              <div key={phase.id}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{phase.nameVi}</span>
                  <span>{phaseCompleted}/{phaseLessons.length} ({percent}%)</span>
                </div>
                <Progress value={percent} className="h-2" />
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Skills Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Tiến độ kỹ năng</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { key: 'listening', label: 'Nghe', icon: '🎧' },
            { key: 'speaking', label: 'Nói', icon: '🗣️' },
            { key: 'reading', label: 'Đọc', icon: '📖' },
            { key: 'writing', label: 'Viết', icon: '✍️' },
          ].map(({ key, label, icon }) => (
            <div key={key}>
              <div className="flex justify-between text-sm mb-1">
                <span>{icon} {label}</span>
                <span>{skillCounts[key as keyof typeof skillCounts]}/{totalLessons}</span>
              </div>
              <Progress value={(skillCounts[key as keyof typeof skillCounts] / totalLessons) * 100} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Vocabulary & Kanji & Grammar */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <BookOpen className="w-5 h-5" /> Từ vựng
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm"><span>Tổng đã ôn</span><span>{vocabStats.total}</span></div>
            <div className="flex justify-between text-sm"><span>Đang học</span><Badge variant="warning">{vocabStats.learning}</Badge></div>
            <div className="flex justify-between text-sm"><span>Cần ôn</span><Badge variant="secondary">{vocabStats.review}</Badge></div>
            <div className="flex justify-between text-sm"><span>Đã thuộc</span><Badge variant="success">{vocabStats.mastered}</Badge></div>
            <div className="flex justify-between text-sm"><span>Tổng kho từ</span><span>{vocabulary.length}</span></div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="w-5 h-5" /> Kanji
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm"><span>Tổng đã ôn</span><span>{kanjiStats.total}</span></div>
            <div className="flex justify-between text-sm"><span>Đang học</span><Badge variant="warning">{kanjiStats.learning}</Badge></div>
            <div className="flex justify-between text-sm"><span>Cần ôn</span><Badge variant="secondary">{kanjiStats.review}</Badge></div>
            <div className="flex justify-between text-sm"><span>Đã thuộc</span><Badge variant="success">{kanjiStats.mastered}</Badge></div>
            <div className="flex justify-between text-sm"><span>Tổng kho kanji</span><span>{kanji.length}</span></div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <ScrollText className="w-5 h-5" /> Ngữ pháp
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm"><span>Tổng đã ôn</span><span>{grammarStats.total}</span></div>
            <div className="flex justify-between text-sm"><span>Đang học</span><Badge variant="warning">{grammarStats.learning}</Badge></div>
            <div className="flex justify-between text-sm"><span>Cần ôn</span><Badge variant="secondary">{grammarStats.review}</Badge></div>
            <div className="flex justify-between text-sm"><span>Đã thuộc</span><Badge variant="success">{grammarStats.mastered}</Badge></div>
            <div className="flex justify-between text-sm"><span>Tổng kho ngữ pháp</span><span>{grammar.length}</span></div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity — Heatmap */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Hoạt động học tập (28 ngày gần nhất)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-1">
            {(() => {
              const days = [];
              for (let i = 27; i >= 0; i--) {
                const d = new Date(today);
                d.setDate(d.getDate() - i);
                days.push(d);
              }
              return days.map((d) => {
                const key = d.toISOString().split('T')[0];
                const cl = dailyChecklist[key];
                const count = [cl?.listening, cl?.speaking, cl?.reading, cl?.writing].filter(Boolean).length;
                const level = count === 0 ? 'bg-muted' : count <= 2 ? 'bg-green-500/20' : count === 3 ? 'bg-green-500/40' : 'bg-green-500/70';
                return (
                  <div key={key} className="flex flex-col items-center gap-1">
                    <div
                      className={`w-full aspect-square rounded ${level} flex items-center justify-center text-[10px] font-bold transition-colors`}
                      title={`${key}: ${count}/4 kỹ năng`}
                    >
                      {count}
                    </div>
                  </div>
                );
              });
            })()}
          </div>
          <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground justify-center">
            <span>Ít</span>
            <div className="w-4 h-4 rounded bg-muted" />
            <div className="w-4 h-4 rounded bg-green-500/20" />
            <div className="w-4 h-4 rounded bg-green-500/40" />
            <div className="w-4 h-4 rounded bg-green-500/70" />
            <span>Nhiều</span>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Review Checklist */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Weekly Review Checklist</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {(() => {
            const checklistItems = [
              'Thuộc hết từ vựng tuần này?',
              'Đọc được kanji đã học?',
              'Nghe hiểu bài khóa không cần nhìn sách?',
              'Nói được 5 câu với ngữ pháp mới?',
              'Viết nhật ký 3-5 câu không tra từ điển?',
              'Làm đúng >80% bài tập trong sách?',
            ];
            return (
              <WeeklyChecklist items={checklistItems} />
            );
          })()}
        </CardContent>
      </Card>
    </div>
  );
}
