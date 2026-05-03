import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { curriculum } from '@/data/curriculum';
import { useStudyStore } from '@/store/studyStore';
import { BookOpen, CheckCircle2, LayoutGrid } from 'lucide-react';

export default function Lessons() {
  const { lessonProgress } = useStudyStore();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Bài học</h1>
        <p className="text-muted-foreground">50 bài Minna no Nihongo từ N5 đến N4.</p>
      </div>

      {curriculum.phases.map((phase) => (
        <div key={phase.id}>
          <h2 className="mb-3 text-xl font-bold">
            Giai đoạn {phase.id}: {phase.nameVi}
          </h2>
          {phase.weeks.map((week) => (
            <div key={week.id} className="mb-4">
              <h3 className="mb-2 text-md font-semibold text-muted-foreground">
                Tuần {week.id}: {week.title}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {week.lessons.map((lesson) => {
                  const progress = lessonProgress[lesson.id];
                  const isComplete = progress?.status === 'completed';
                  const inProgress = progress?.status === 'in_progress';

                  return (
                    <Link key={lesson.id} to={`/lesson/${lesson.id}`}>
                      <Card className="cursor-pointer transition-colors hover:border-primary/50">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <BookOpen className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm font-medium">Ngày {lesson.dayNumber}</span>
                              </div>
                              <h4 className="mt-1 font-semibold">{lesson.title}</h4>
                              {lesson.titleJa && (
                                <p className="japanese-text text-sm text-muted-foreground">{lesson.titleJa}</p>
                              )}
                              {lesson.sections?.length ? (
                                <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                                  <LayoutGrid className="h-3.5 w-3.5" />
                                  <span>{lesson.sections.length} phần</span>
                                </div>
                              ) : null}
                            </div>
                            {isComplete && <CheckCircle2 className="h-5 w-5 text-green-400" />}
                          </div>

                          <div className="mt-2 flex items-center gap-2">
                            <Badge variant={isComplete ? 'success' : inProgress ? 'warning' : 'outline'}>
                              {isComplete ? 'Hoàn thành' : inProgress ? 'Đang học' : 'Chưa học'}
                            </Badge>
                          </div>

                          {lesson.sections?.length ? (
                            <p className="mt-2 text-xs text-muted-foreground">
                              Lesson này đã được migrate sang layout nhiều phần.
                            </p>
                          ) : (
                            <div className="mt-2 flex gap-1">
                              {(['listening', 'speaking', 'reading', 'writing'] as const).map((skill) => {
                                const done = progress?.completedSkills?.includes(skill);
                                return (
                                  <span
                                    key={skill}
                                    className={`h-2 w-2 rounded-full ${done ? 'bg-green-400' : 'bg-muted'}`}
                                  />
                                );
                              })}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
              <Separator className="my-4" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
