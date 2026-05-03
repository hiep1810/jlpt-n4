import { useCallback, useEffect, useRef, useState } from 'react';
import HanziWriter from 'hanzi-writer';
import { AlertCircle, Brush, CheckCircle2, Eye, RotateCcw, X, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

type WriterMode = 'preview' | 'practice' | 'result';
type PracticeVariant = 'guided' | 'blind';

interface QuizResult {
  totalStrokes: number;
  totalMistakes: number;
  accuracy: number;
  quality: 'again' | 'hard' | 'good' | 'easy';
}

interface KanjiWriterProps {
  character: string;
  size?: number;
  onQuizComplete?: (result: QuizResult) => void;
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

function deriveQuality(totalStrokes: number, totalMistakes: number, accuracy: number): QuizResult['quality'] {
  const mistakeRatio = totalStrokes > 0 ? totalMistakes / totalStrokes : 1;

  if (accuracy >= 95 && totalMistakes === 0) return 'easy';
  if (accuracy >= 75 && mistakeRatio <= 0.5) return 'good';
  if (accuracy >= 45 && mistakeRatio <= 1.25) return 'hard';
  return 'again';
}

export default function KanjiWriter({
  character,
  size = 200,
  onQuizComplete,
}: KanjiWriterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<HanziWriter | null>(null);
  const feedbackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const summaryRef = useRef<QuizResult | null>(null);

  const [mode, setMode] = useState<WriterMode>('preview');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [totalStrokes, setTotalStrokes] = useState(0);
  const [currentStroke, setCurrentStroke] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'mistake' | null>(null);
  const [practiceVariant, setPracticeVariant] = useState<PracticeVariant>('guided');

  const clearFeedbackTimer = useCallback(() => {
    if (feedbackTimeoutRef.current) {
      clearTimeout(feedbackTimeoutRef.current);
      feedbackTimeoutRef.current = null;
    }
  }, []);

  const showFeedback = useCallback((nextFeedback: 'correct' | 'mistake', durationMs: number) => {
    clearFeedbackTimer();
    setFeedback(nextFeedback);
    feedbackTimeoutRef.current = setTimeout(() => {
      setFeedback(null);
      feedbackTimeoutRef.current = null;
    }, durationMs);
  }, [clearFeedbackTimer]);

  const resetPracticeState = useCallback(() => {
    summaryRef.current = null;
    setCurrentStroke(0);
    setMistakes(0);
    setAccuracy(0);
    setFeedback(null);
    clearFeedbackTimer();
  }, [clearFeedbackTimer]);

  const showCharacterPreview = useCallback(() => {
    writerRef.current?.cancelQuiz();
    writerRef.current?.showCharacter({ duration: 0 });
    writerRef.current?.showOutline({ duration: 0 });
    setMode('preview');
    setPracticeVariant('guided');
    resetPracticeState();
  }, [resetPracticeState]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    setLoading(true);
    setError(false);
    resetPracticeState();
    setMode('preview');
    setTotalStrokes(0);
    container.innerHTML = '';
    writerRef.current?.cancelQuiz();
    writerRef.current = null;

    try {
      const writer = HanziWriter.create(container, character, {
        width: size,
        height: size,
        padding: 8,
        drawingWidth: 10,
        showOutline: true,
        showCharacter: true,
        strokeAnimationSpeed: 1,
        delayBetweenStrokes: 250,
      });

      writerRef.current = writer;

      writer.getCharacterData()
        .then((characterData) => {
          const strokes = characterData.strokes?.length ?? 0;
          setTotalStrokes(strokes);
          setLoading(false);
          writer.animateCharacter();
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    } catch {
      setError(true);
      setLoading(false);
    }

    return () => {
      writerRef.current?.cancelQuiz();
      writerRef.current = null;
      clearFeedbackTimer();
    };
  }, [character, clearFeedbackTimer, resetPracticeState, size]);

  const replayAnimation = () => {
    if (!writerRef.current) return;
    showCharacterPreview();
    writerRef.current.animateCharacter();
  };

  const startPractice = (variant: PracticeVariant = 'guided') => {
    if (!writerRef.current || loading) return;

    resetPracticeState();
    setMode('practice');
    setPracticeVariant(variant);

    writerRef.current.cancelQuiz();
    if (variant === 'blind') {
      writerRef.current.hideCharacter({ duration: 0 });
      writerRef.current.hideOutline({ duration: 0 });
    } else {
      writerRef.current.hideCharacter({ duration: 0 });
      writerRef.current.showOutline({ duration: 0 });
    }

    writerRef.current.quiz({
      leniency: 1.2,
      showHintAfterMisses: 2,
      markStrokeCorrectAfterMisses: 4,
      acceptBackwardsStrokes: false,
      highlightOnComplete: true,
      onCorrectStroke: (strokeData) => {
        setCurrentStroke(strokeData.strokeNum + 1);
        setMistakes(strokeData.totalMistakes);
        showFeedback('correct', 500);
      },
      onMistake: (strokeData) => {
        setMistakes(strokeData.totalMistakes);
        showFeedback('mistake', 400);
      },
      onComplete: (summary) => {
        const boundedMistakes = clamp(summary.totalMistakes, 0, totalStrokes || summary.totalMistakes || 1);
        const nextAccuracy = totalStrokes > 0
          ? Math.round(((totalStrokes - boundedMistakes) / totalStrokes) * 100)
          : 0;
        const quality = deriveQuality(totalStrokes, summary.totalMistakes, nextAccuracy);
        const result = {
          totalStrokes,
          totalMistakes: summary.totalMistakes,
          accuracy: nextAccuracy,
          quality,
        } satisfies QuizResult;

        summaryRef.current = result;
        setCurrentStroke(totalStrokes);
        setMistakes(summary.totalMistakes);
        setAccuracy(nextAccuracy);
        setMode('result');
        setFeedback(null);
        clearFeedbackTimer();
        onQuizComplete?.(result);
      },
    });
  };

  const cancelPractice = () => {
    showCharacterPreview();
  };

  const feedbackOverlay = feedback === 'correct'
    ? (
      <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-green-500/10 pointer-events-none">
        <CheckCircle2 className="w-12 h-12 text-green-500" />
      </div>
    )
    : feedback === 'mistake'
      ? (
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-red-500/10 pointer-events-none">
          <XCircle className="w-12 h-12 text-red-500" />
        </div>
      )
      : null;

  if (error) {
    return (
      <div className="flex flex-col items-center gap-3" style={{ width: size }}>
        <div
          className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-background"
          style={{ width: size, height: size }}
        >
          <p className="text-6xl font-bold japanese-text">{character}</p>
          <p className="mt-3 px-4 text-center text-xs text-muted-foreground">
            Stroke data is unavailable for this character. You can still review the kanji visually.
          </p>
        </div>
      </div>
    );
  }

  const latestResult = summaryRef.current;
  const scoreTone = latestResult?.quality === 'easy'
    ? 'text-green-600'
    : latestResult?.quality === 'good'
      ? 'text-emerald-600'
      : latestResult?.quality === 'hard'
        ? 'text-amber-600'
        : 'text-red-600';
  const scoreLabel = latestResult?.quality === 'easy'
    ? 'Excellent stroke order'
    : latestResult?.quality === 'good'
      ? 'Solid attempt'
      : latestResult?.quality === 'hard'
        ? 'Needs another pass'
        : 'Practice again';

  return (
    <div className="flex flex-col items-center gap-3" style={{ width: size }}>
      <div className="relative">
        <div
          ref={containerRef}
          className="rounded-lg border-2 border-border bg-background"
          style={{ width: size, height: size }}
        />

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-background/80">
            <p className="text-sm text-muted-foreground">Loading stroke data...</p>
          </div>
        )}

        {mode === 'practice' && feedbackOverlay}
      </div>

      {mode === 'preview' && !loading && (
        <>
          <p className="text-center text-xs text-muted-foreground">
            Watch the animated stroke order first, then choose guided writing or a blind test with no visible stroke hints.
          </p>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={replayAnimation}>
              <RotateCcw className="w-3.5 h-3.5 mr-1" /> Replay
            </Button>
            <Button size="sm" variant="outline" onClick={() => startPractice('guided')}>
              <Brush className="w-3.5 h-3.5 mr-1" /> Guided writing
            </Button>
            <Button size="sm" onClick={() => startPractice('blind')}>
              <Brush className="w-3.5 h-3.5 mr-1" /> Blind test
            </Button>
          </div>
        </>
      )}

      {mode === 'practice' && !loading && (
        <>
          <div className="w-full space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Stroke {currentStroke}/{totalStrokes}</span>
              <span className={mistakes > 0 ? 'text-red-500' : ''}>Mistakes: {mistakes}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${totalStrokes > 0 ? (currentStroke / totalStrokes) * 100 : 0}%` }}
              />
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground">
            {practiceVariant === 'blind'
              ? 'Blind test mode: no character or outline is shown while you write.'
              : 'Guided mode: outline is visible, but you still need to draw each stroke in order.'}
          </p>

          <p className="text-center text-xs text-muted-foreground">
            A hint will appear after repeated misses.
          </p>

          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={cancelPractice}>
              <X className="w-3.5 h-3.5 mr-1" /> Cancel
            </Button>
          </div>
        </>
      )}

      {mode === 'result' && latestResult && (
        <>
          <div className="w-full space-y-3 rounded-lg border border-border bg-secondary/40 p-3">
            <div className="flex items-center justify-center gap-2">
              {latestResult.quality === 'again' ? (
                <AlertCircle className={`w-5 h-5 ${scoreTone}`} />
              ) : (
                <CheckCircle2 className={`w-5 h-5 ${scoreTone}`} />
              )}
              <p className={`text-base font-semibold ${scoreTone}`}>{scoreLabel}</p>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-lg bg-background p-2">
                <p className="text-lg font-bold">{latestResult.totalStrokes}</p>
                <p className="text-xs text-muted-foreground">Strokes</p>
              </div>
              <div className="rounded-lg bg-background p-2">
                <p className="text-lg font-bold text-red-500">{latestResult.totalMistakes}</p>
                <p className="text-xs text-muted-foreground">Mistakes</p>
              </div>
              <div className="rounded-lg bg-background p-2">
                <p className="text-lg font-bold text-green-600">{accuracy}%</p>
                <p className="text-xs text-muted-foreground">Accuracy</p>
              </div>
            </div>

            <p className="text-center text-xs text-muted-foreground">
              Review quality saved as <span className="font-medium text-foreground">{latestResult.quality}</span>.
            </p>
            <p className="text-center text-xs text-muted-foreground">
              Mode: <span className="font-medium text-foreground">{practiceVariant === 'blind' ? 'Blind test' : 'Guided writing'}</span>
            </p>
          </div>

          <div className="flex gap-2">
            <Button size="sm" onClick={() => startPractice(practiceVariant)}>
              <RotateCcw className="w-3.5 h-3.5 mr-1" /> Write again
            </Button>
            <Button size="sm" variant="outline" onClick={showCharacterPreview}>
              <Eye className="w-3.5 h-3.5 mr-1" /> Back to preview
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
