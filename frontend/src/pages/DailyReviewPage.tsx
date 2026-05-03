import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useStudyStore } from '@/store/studyStore';
import { generateDailyReview } from '@/data/dailyReview';
import { cn } from '@/lib/utils';
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Trophy,
  XCircle,
} from 'lucide-react';

type ReviewItem = ReturnType<typeof generateDailyReview>[number];

export default function DailyReviewPage() {
  const { reviewVocab, reviewKanji, reviewGrammar } = useStudyStore();
  const [items, setItems] = useState<ReviewItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [results, setResults] = useState<('correct' | 'incorrect' | 'skipped')[]>([]);
  const [completed, setCompleted] = useState(false);
  const [reviewData, setReviewData] = useState<{ date: string; total: number; correct: number } | null>(null);

  useEffect(() => {
    const review = generateDailyReview();
    if (review.length === 0) {
      setItems([]);
    } else {
      setItems(review);
      setResults(new Array(review.length).fill('skipped'));
    }
  }, []);

  const currentItem = items[currentIndex];
  const correctCount = results.filter((r) => r === 'correct').length;
  const progressPercent = items.length === 0 ? 0 : Math.round((currentIndex / items.length) * 100);

  const handleAnswer = (quality: 'again' | 'hard' | 'good' | 'easy', isCorrect: boolean) => {
    if (!currentItem) return;

    // Update SRS using dataId from the review item
    if (currentItem.type === 'vocabulary') {
      reviewVocab(currentItem.dataId, quality);
    } else if (currentItem.type === 'kanji') {
      reviewKanji(currentItem.dataId, quality);
    } else {
      reviewGrammar(currentItem.dataId, quality);
    }

    const newResults = [...results];
    newResults[currentIndex] = isCorrect ? 'correct' : 'incorrect';
    setResults(newResults);

    setIsFlipped(false);
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const correct = newResults.filter((r) => r === 'correct').length;
      setReviewData({ date: new Date().toISOString().split('T')[0], total: items.length, correct });
      setCompleted(true);
    }
  };

  if (items.length === 0 && !completed) {
    return (
      <div className="space-y-6 max-w-2xl mx-auto">
        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="sm"><ArrowLeft className="w-4 h-4 mr-1" /> Quay lại</Button>
          </Link>
        </div>
        <Card>
          <CardContent className="py-12 text-center">
            <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg font-semibold">Không có mục cần ôn hôm nay!</p>
            <p className="text-muted-foreground">Hãy học bài mới để có thêm tài liệu ôn tập.</p>
            <Link to="/lessons">
              <Button className="mt-4">Học bài mới</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (completed && reviewData) {
    const pct = Math.round((reviewData.correct / reviewData.total) * 100);
    return (
      <div className="space-y-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold">Kết quả ôn tập</h1>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-400" />
              Ôn tập ngày {reviewData.date}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="text-6xl font-bold text-primary">{pct}%</p>
              <p className="text-lg text-muted-foreground">
                Đúng {reviewData.correct}/{reviewData.total} câu
              </p>
            </div>

            <Progress value={pct} className="h-4" />

            <div className="flex gap-4 justify-center">
              <Badge variant="success" className="text-lg px-4 py-2">
                <CheckCircle2 className="w-4 h-4 mr-1" /> Đúng: {reviewData.correct}
              </Badge>
              <Badge variant="destructive" className="text-lg px-4 py-2">
                <XCircle className="w-4 h-4 mr-1" /> Sai: {reviewData.total - reviewData.correct}
              </Badge>
            </div>

            <div className="space-y-2">
              {items.map((item, i) => (
                <div key={i} className={cn(
                  'flex items-center justify-between p-3 rounded-lg text-sm',
                  results[i] === 'correct' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                )}>
                  <div className="flex items-center gap-2">
                    {results[i] === 'correct' ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    <span className="japanese-text">{item.questionJa}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {item.type === 'vocabulary' ? 'Từ vựng' : item.type === 'kanji' ? 'Kanji' : 'Ngữ pháp'}
                  </Badge>
                </div>
              ))}
            </div>

            <div className="flex gap-2 justify-center">
              <Link to="/">
                <Button variant="outline">Về Dashboard</Button>
              </Link>
              <Link to="/flashcards">
                <Button>Ôn thêm flashcards</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between">
        <Link to="/">
          <Button variant="ghost" size="sm"><ArrowLeft className="w-4 h-4 mr-1" /> Quay lại</Button>
        </Link>
        <Badge variant="outline" className="text-sm">
          <Calendar className="w-3 h-3 mr-1" /> Ôn tập hàng ngày
        </Badge>
      </div>

      <h1 className="text-3xl font-bold">Ôn tập hôm nay</h1>

      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Câu {currentIndex + 1}/{items.length}</span>
          <span>Đúng: {correctCount}</span>
        </div>
        <Progress value={progressPercent} className="h-2" />
      </div>

      <div
        className={cn('flashcard cursor-pointer', isFlipped && 'flipped')}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="flashcard-inner relative w-full h-64">
          <div className="flashcard-front absolute w-full h-full">
            <Card className="h-full">
              <CardContent className="flex flex-col items-center justify-center h-full p-8">
                <Badge variant="outline" className="mb-4">
                  {currentItem.type === 'vocabulary' ? 'Từ vựng' : currentItem.type === 'kanji' ? 'Kanji' : 'Ngữ pháp'}
                </Badge>
                <p className="text-sm text-muted-foreground mb-3">{currentItem.question}</p>
                <p className="text-5xl font-bold japanese-text">{currentItem.questionJa}</p>
                <p className="text-sm text-muted-foreground mt-4">Nhấn để xem đáp án</p>
              </CardContent>
            </Card>
          </div>

          <div className="flashcard-back absolute w-full h-full">
            <Card className="h-full">
              <CardContent className="flex flex-col items-center justify-center h-full p-8">
                <p className="text-lg font-semibold mb-4 japanese-text">{currentItem.questionJa}</p>
                <div className="space-y-2 w-full max-w-md">
                  {currentItem.options.map((opt, i) => (
                    <Button
                      key={i}
                      variant={i === currentItem.correctIdx ? 'default' : 'outline'}
                      className={cn(
                        'w-full justify-start text-left',
                        i === currentItem.correctIdx && 'bg-green-500/20 text-green-400 border-green-500'
                      )}
                      onClick={(e) => {
                        e.stopPropagation();
                        const isCorrect = i === currentItem.correctIdx;
                        handleAnswer(isCorrect ? 'good' : 'again', isCorrect);
                      }}
                    >
                      {opt}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {isFlipped && (
        <div className="flex gap-2 justify-center">
          <Button variant="destructive" size="sm" onClick={() => handleAnswer('again', false)}>
            <XCircle className="w-4 h-4 mr-1" /> Sai
          </Button>
          <Button size="sm" onClick={() => handleAnswer('good', true)}>
            <CheckCircle2 className="w-4 h-4 mr-1" /> Đúng
          </Button>
        </div>
      )}

      {!isFlipped && (
        <p className="text-center text-muted-foreground text-sm">Nhấn vào thẻ để lật hoặc chọn đáp án</p>
      )}
    </div>
  );
}
