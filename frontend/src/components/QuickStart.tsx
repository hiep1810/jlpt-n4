import { useState, useEffect, useRef } from 'react';
import { Zap, ChevronLeft, ChevronRight, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { vocabulary } from '@/data/vocabulary';
import { kanji } from '@/data/kanji';
import { grammar } from '@/data/grammar';
import { useStudyStore } from '@/store/studyStore';

type ReviewCard = {
  id: string;
  type: 'vocab' | 'kanji' | 'grammar';
  front: string;
  frontJa?: string;
  back: string;
  backVi: string;
};

export default function QuickStart() {
  const { reviewVocab, reviewKanji, reviewGrammar, adhdSettings, xp, level } = useStudyStore();
  const [isActive, setIsActive] = useState(false);
  const [cards, setCards] = useState<ReviewCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [completed, setCompleted] = useState(0);

  const startSession = () => {
    const dueVocab = useStudyStore.getState().getDueVocab();
    const dueKanji = useStudyStore.getState().getDueKanji();
    const dueGrammar = useStudyStore.getState().getDueGrammar();

    const limit = adhdSettings.quickStartLimit;
    const allCards: ReviewCard[] = [];

    dueVocab.slice(0, Math.ceil(limit / 3)).forEach((id) => {
      const v = vocabulary.find((x) => x.id === id);
      if (v) allCards.push({ id: v.id, type: 'vocab', front: v.meaningVi, frontJa: v.japanese, back: v.reading, backVi: v.meaning });
    });

    dueKanji.slice(0, Math.ceil(limit / 3)).forEach((id) => {
      const k = kanji.find((x) => x.id === id);
      if (k) allCards.push({ id: k.id, type: 'kanji', front: k.meaningVi, frontJa: k.character, back: `${k.onyomi} / ${k.kunyomi}`, backVi: k.meaning });
    });

    dueGrammar.slice(0, Math.ceil(limit / 3)).forEach((id) => {
      const g = grammar.find((x) => x.id === id);
      if (g) allCards.push({ id: g.id, type: 'grammar', front: g.meaningVi, frontJa: g.pattern, back: g.meaning, backVi: g.meaningVi });
    });

    // Shuffle
    for (let i = allCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allCards[i], allCards[j]] = [allCards[j], allCards[i]];
    }

    if (allCards.length === 0) return;

    setCards(allCards);
    setCurrentIndex(0);
    setShowAnswer(false);
    setCompleted(0);
    setIsActive(true);
  };

  const handleRating = (quality: 'again' | 'hard' | 'good' | 'easy') => {
    const card = cards[currentIndex];
    if (card.type === 'vocab') reviewVocab(card.id, quality);
    else if (card.type === 'kanji') reviewKanji(card.id, quality);
    else reviewGrammar(card.id, quality);

    setCompleted((c) => c + 1);

    if (currentIndex + 1 >= cards.length) {
      setIsActive(false);
    } else {
      setCurrentIndex((i) => i + 1);
      setShowAnswer(false);
    }
  };

  if (!isActive) {
    const dueCount = useStudyStore.getState().getDueVocab().length +
      useStudyStore.getState().getDueKanji().length +
      useStudyStore.getState().getDueGrammar().length;

    return (
      <Card className="border-2 border-yellow-400/40">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Zap className="w-7 h-7 text-yellow-400" />
              <div>
                <p className="font-semibold text-lg">Bắt đầu nhanh</p>
                <p className="text-xs text-muted-foreground">
                  {dueCount} mục cần ôn • ~5 phút
                </p>
              </div>
            </div>
            <Button onClick={startSession} className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              <Zap className="w-4 h-4 mr-1" />
              Ôn ngay
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const card = cards[currentIndex];
  const progressPercent = cards.length > 0 ? (completed / cards.length) * 100 : 0;

  return (
    <Card className="border-2 border-yellow-400/40">
      <CardContent className="p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="font-semibold">Quick Review</span>
            <Badge variant="outline">{completed}/{cards.length}</Badge>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setIsActive(false)}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Progress */}
        <div className="w-full bg-secondary rounded-full h-1.5 mb-4">
          <div className="h-1.5 rounded-full bg-yellow-400 transition-all" style={{ width: `${progressPercent}%` }} />
        </div>

        {/* Card */}
        <div className="min-h-[180px] flex flex-col items-center justify-center text-center bg-secondary/50 rounded-lg p-6 mb-4 cursor-pointer"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {card.type === 'kanji' && (
            <div className="text-6xl mb-3 font-serif">{card.frontJa}</div>
          )}
          <div className="text-xl font-semibold mb-1">{card.front}</div>
          {card.frontJa && card.type !== 'kanji' && (
            <div className="text-lg text-muted-foreground japanese-text">{card.frontJa}</div>
          )}

          {showAnswer && (
            <div className="mt-4 pt-4 border-t w-full animate-in fade-in">
              <div className="text-lg font-medium text-primary">{card.back}</div>
              {card.backVi && card.back !== card.backVi && (
                <div className="text-sm text-muted-foreground mt-1">{card.backVi}</div>
              )}
            </div>
          )}

          {!showAnswer && (
            <div className="text-xs text-muted-foreground mt-4">Nhấn để xem đáp án</div>
          )}
        </div>

        {/* Rating buttons */}
        {showAnswer && (
          <div className="grid grid-cols-4 gap-2">
            <Button variant="destructive" size="sm" onClick={() => handleRating('again')}>
              Nhớ lại
            </Button>
            <Button variant="outline" size="sm" onClick={() => handleRating('hard')} className="text-orange-500">
              Khó
            </Button>
            <Button variant="outline" size="sm" onClick={() => handleRating('good')} className="text-green-500">
              Tốt
            </Button>
            <Button variant="outline" size="sm" onClick={() => handleRating('easy')} className="text-blue-500">
              Dễ
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
