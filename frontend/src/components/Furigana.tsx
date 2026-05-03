import { useMemo } from 'react';
import { kanji } from '@/data/kanji';
import { cn } from '@/lib/utils';

const kanjiMap = new Map(kanji.map((k) => [k.character, k]));

function isKanji(char: string): boolean {
  const code = char.codePointAt(0) ?? 0;
  return (code >= 0x4e00 && code <= 0x9fff) || (code >= 0x3400 && code <= 0x4dbf);
}

interface Segment {
  type: 'ruby' | 'plain';
  text: string;
  reading?: string;
}

function parseFurigana(text: string, reading: string): Segment[] {
  if (!reading) return [{ type: 'plain', text }];

  const segments: Segment[] = [];
  let i = 0;
  let readingPos = 0;

  while (i < text.length) {
    if (isKanji(text[i])) {
      // Collect consecutive kanji
      const kanjiStart = i;
      while (i < text.length && isKanji(text[i])) i++;
      const kanjiGroup = text.slice(kanjiStart, i);
      const kanjiCount = kanjiGroup.length;

      // Split remaining reading into kanjiCount segments (equal chars each)
      const remainingChars = reading.length - readingPos;
      const charsPerKanji = Math.max(1, Math.floor(remainingChars / kanjiCount));

      for (let k = 0; k < kanjiCount; k++) {
        const readStart = readingPos + k * charsPerKanji;
        const readEnd = k === kanjiCount - 1
          ? reading.length // last kanji gets all remaining chars
          : readStart + charsPerKanji;
        const readingForThis = reading.slice(readStart, readEnd);
        segments.push({ type: 'ruby', text: kanjiGroup[k], reading: readingForThis });
      }
      readingPos = reading.length;
    } else {
      segments.push({ type: 'plain', text: text[i] });
      i++;
    }
  }

  return segments;
}

export interface FuriganaProps {
  text: string;
  reading: string;
  className?: string;
}

export function Furigana({ text, reading, className }: FuriganaProps) {
  const segments = useMemo(() => parseFurigana(text, reading), [text, reading]);

  if (!reading) {
    return <span className={className}>{text}</span>;
  }

  const hasAnyKanji = segments.some((s) => s.type === 'ruby');
  if (!hasAnyKanji) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={cn('furigana', className)}>
      {segments.map((seg, idx) =>
        seg.type === 'ruby' ? (
          <ruby key={idx}>
            {seg.text}
            <rt>{seg.reading}</rt>
          </ruby>
        ) : (
          <span key={idx}>{seg.text}</span>
        )
      )}
    </span>
  );
}
