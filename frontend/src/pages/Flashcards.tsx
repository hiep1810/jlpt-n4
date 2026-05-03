import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useStudyStore } from '@/store/studyStore';
import { vocabulary } from '@/data/vocabulary';
import { kanji } from '@/data/kanji';
import { grammar } from '@/data/grammar';
import { Furigana } from '@/components/Furigana';
import { cn } from '@/lib/utils';
import { RefreshCw, CheckCircle2, XCircle } from 'lucide-react';

type CardType = 'vocabulary' | 'kanji' | 'grammar';

export default function Flashcards() {
  const { vocabProgress, reviewVocab, kanjiProgress, reviewKanji, grammarProgress, reviewGrammar, getDueVocab, getDueKanji, getDueGrammar } = useStudyStore();
  const [cardType, setCardType] = useState<CardType>('vocabulary');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [filter, setFilter] = useState<'all' | 'due' | 'mastered'>('due');

  // Get cards based on type and filter
  const vocabCards = vocabulary.map((v) => {
    const p = vocabProgress[v.id];
    return { ...v, progress: p };
  });

  const kanjiCards = kanji.map((k) => {
    const p = kanjiProgress[k.id];
    return { ...k, progress: p };
  });

  const grammarCards = grammar.map((g) => {
    const p = grammarProgress[g.id];
    return { ...g, progress: p };
  });

  const filteredCards = (() => {
    const cards = cardType === 'vocabulary' ? vocabCards : cardType === 'kanji' ? kanjiCards : grammarCards;
    switch (filter) {
      case 'due': {
        const dueIds = cardType === 'vocabulary' ? getDueVocab() : cardType === 'kanji' ? getDueKanji() : getDueGrammar();
        const newCards = cards.filter((c) => !c.progress);
        const dueCards = cards.filter((c) => c.progress && dueIds.includes(c.id));
        return [...dueCards, ...newCards].slice(0, 20);
      }
      case 'mastered':
        return cards.filter((c) => c.progress?.status === 'mastered');
      default:
        return cards.slice(0, 20);
    }
  })();

  const currentCard = filteredCards[currentIndex];

  const handleReview = (quality: 'again' | 'hard' | 'good' | 'easy') => {
    if (!currentCard) return;
    if (cardType === 'vocabulary') {
      reviewVocab(currentCard.id, quality);
    } else if (cardType === 'kanji') {
      reviewKanji(currentCard.id, quality);
    } else {
      reviewGrammar(currentCard.id, quality);
    }
    setIsFlipped(false);
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [cardType, filter]);

  // Stats
  const vocabStats = {
    new: vocabCards.filter((c) => !c.progress).length,
    learning: vocabCards.filter((c) => c.progress?.status === 'learning').length,
    review: vocabCards.filter((c) => c.progress?.status === 'review').length,
    mastered: vocabCards.filter((c) => c.progress?.status === 'mastered').length,
    due: getDueVocab().length,
  };

  const kanjiStats = {
    new: kanjiCards.filter((c) => !c.progress).length,
    learning: kanjiCards.filter((c) => c.progress?.status === 'learning').length,
    review: kanjiCards.filter((c) => c.progress?.status === 'review').length,
    mastered: kanjiCards.filter((c) => c.progress?.status === 'mastered').length,
    due: getDueKanji().length,
  };

  const grammarStats = {
    new: grammarCards.filter((c) => !c.progress).length,
    learning: grammarCards.filter((c) => c.progress?.status === 'learning').length,
    review: grammarCards.filter((c) => c.progress?.status === 'review').length,
    mastered: grammarCards.filter((c) => c.progress?.status === 'mastered').length,
    due: getDueGrammar().length,
  };

  if (!currentCard) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Flashcard</h1>
        <Card>
          <CardContent className="py-12 text-center">
            <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <p className="text-lg font-semibold">Không có thẻ cần ôn!</p>
            <p className="text-muted-foreground">Học bài mới để có thêm thẻ.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const isVocab = cardType === 'vocabulary';
  const isKanji = cardType === 'kanji';
  const isGrammar = cardType === 'grammar';

  // Properly typed references (no `as any` needed)
  const vc = isVocab ? currentCard as typeof vocabCards[number] : null;
  const kc = isKanji ? currentCard as typeof kanjiCards[number] : null;
  const gc = isGrammar ? currentCard as typeof grammarCards[number] : null;

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">Flashcard</h1>

      {/* Type selector */}
      <div className="flex gap-2">
        <Button variant={cardType === 'vocabulary' ? 'default' : 'outline'} onClick={() => setCardType('vocabulary')}>
          Từ vựng ({vocabStats.due} cần ôn)
        </Button>
        <Button variant={cardType === 'kanji' ? 'default' : 'outline'} onClick={() => setCardType('kanji')}>
          Kanji ({kanjiStats.due} cần ôn)
        </Button>
        <Button variant={cardType === 'grammar' ? 'default' : 'outline'} onClick={() => setCardType('grammar')}>
          Ngữ pháp ({grammarStats.due} cần ôn)
        </Button>
      </div>

      {/* Stats */}
      <div className="flex gap-4 text-sm">
        <Badge variant="outline">Mới: {cardType === 'vocabulary' ? vocabStats.new : cardType === 'kanji' ? kanjiStats.new : grammarStats.new}</Badge>
        <Badge variant="warning">Đang học: {cardType === 'vocabulary' ? vocabStats.learning : cardType === 'kanji' ? kanjiStats.learning : grammarStats.learning}</Badge>
        <Badge variant="secondary">Ôn: {cardType === 'vocabulary' ? vocabStats.review : cardType === 'kanji' ? kanjiStats.review : grammarStats.review}</Badge>
        <Badge variant="success">Thuộc: {cardType === 'vocabulary' ? vocabStats.mastered : cardType === 'kanji' ? kanjiStats.mastered : grammarStats.mastered}</Badge>
      </div>

      {/* Filter */}
      <div className="flex gap-2">
        {(['all', 'due', 'mastered'] as const).map((f) => (
          <Button key={f} variant={filter === f ? 'default' : 'outline'} size="sm" onClick={() => setFilter(f)}>
            {f === 'all' ? 'Tất cả' : f === 'due' ? 'Cần ôn' : 'Đã thuộc'}
          </Button>
        ))}
        <span className="text-sm text-muted-foreground self-center ml-auto">
          {currentIndex + 1}/{filteredCards.length}
        </span>
      </div>

      {/* Flashcard */}
      <div
        className={cn('flashcard cursor-pointer', isFlipped && 'flipped')}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="flashcard-inner relative w-full h-72">
          {/* Front */}
          <div className="flashcard-front absolute w-full h-full">
            <Card className="h-full">
              <CardContent className="flex flex-col items-center justify-center h-full p-8">
                <p className="text-sm text-muted-foreground mb-4">
                  {isVocab ? 'Từ vựng' : isKanji ? 'Kanji' : 'Ngữ pháp'} — Nhấn để lật
                </p>
                {isVocab ? (
                  <>
                    <p className="text-4xl font-bold japanese-text mb-2">
                      {vc!.reading || vc!.japanese}
                    </p>
                    <p className="text-xl text-muted-foreground">{vc!.japanese}</p>
                  </>
                ) : isKanji ? (
                  <p className="text-8xl font-bold japanese-text">{kc!.character}</p>
                ) : (
                  <p className="text-3xl font-bold japanese-text">{gc!.pattern}</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Back */}
          <div className="flashcard-back absolute w-full h-full">
            <Card className="h-full">
              <CardContent className="flex flex-col items-center justify-center h-full p-8">
                {isVocab ? (
                  <>
                    <p className="text-2xl font-bold japanese-text mb-2">
                      {vc!.reading}
                    </p>
                    <p className="text-lg mb-4">{vc!.japanese}</p>
                    <p className="text-xl font-semibold">{vc!.meaning}</p>
                    <p className="text-lg text-muted-foreground">{vc!.meaningVi}</p>
                    {vc!.example && (
                      <p className="mt-4 p-3 bg-secondary rounded japanese-text text-sm">
                        Ví dụ: {vc!.example}
                      </p>
                    )}
                  </>
                ) : isKanji ? (
                  <>
                    <p className="text-6xl font-bold japanese-text mb-4">{kc!.character}</p>
                    <p className="text-lg font-semibold mb-1">{kc!.meaning}</p>
                    <p className="text-muted-foreground mb-1">{kc!.meaningVi}</p>
                    <p className="text-sm text-muted-foreground">On: {kc!.onyomi}</p>
                    <p className="text-sm text-muted-foreground">Kun: {kc!.kunyomi}</p>
                    {kc!.examples.length > 0 && (
                      <div className="mt-4 space-y-1">
                        {kc!.examples.map((ex, i) => (
                          <p key={i} className="p-2 bg-secondary rounded japanese-text text-sm">{ex}</p>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <p className="text-2xl font-bold japanese-text mb-2">{gc!.pattern}</p>
                    <p className="text-lg mb-1">{gc!.meaning}</p>
                    <p className="text-lg text-muted-foreground mb-4">{gc!.meaningVi}</p>
                    {gc!.examples.length > 0 && (
                      <div className="space-y-2 w-full">
                        {gc!.examples.map((ex, i) => (
                          <div key={i} className="p-2 bg-secondary rounded space-y-1">
                            {ex.reading ? (
                              <Furigana text={ex.japanese} reading={ex.reading} className="japanese-text text-sm" />
                            ) : (
                              <p className="japanese-text text-sm">{ex.japanese}</p>
                            )}
                            <p className="text-xs text-muted-foreground">{ex.meaning}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Rating Buttons */}
      {isFlipped && (
        <div className="flex gap-2 justify-center">
          <Button variant="destructive" onClick={() => handleReview('again')}>
            <XCircle className="w-4 h-4 mr-1" /> Lại (1m)
          </Button>
          <Button variant="secondary" onClick={() => handleReview('hard')}>
            Khó (6m)
          </Button>
          <Button onClick={() => handleReview('good')}>
            Tốt (10m)
          </Button>
          <Button variant="default" onClick={() => handleReview('easy')}>
            <CheckCircle2 className="w-4 h-4 mr-1" /> Dễ (4d)
          </Button>
        </div>
      )}

      {!isFlipped && (
        <p className="text-center text-muted-foreground text-sm">Nhấn vào thẻ để xem đáp án</p>
      )}
    </div>
  );
}
