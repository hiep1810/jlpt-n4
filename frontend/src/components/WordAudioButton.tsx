import { useState } from 'react';
import { Pause, Volume2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WordAudioButtonProps {
  text: string;
  size?: 'sm' | 'default';
  className?: string;
}

export function WordAudioButton({ text, size = 'sm', className }: WordAudioButtonProps) {
  const [speaking, setSpeaking] = useState(false);

  const handlePlay = () => {
    if (!window.speechSynthesis) return;

    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.8;

    const voices = window.speechSynthesis.getVoices();
    const jaVoice = voices.find((v) => v.lang.startsWith('ja'));
    if (jaVoice) utterance.voice = jaVoice;

    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const iconSize = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4';

  return (
    <button
      type="button"
      onClick={handlePlay}
      className={cn(
        'inline-flex items-center justify-center rounded-full transition-colors',
        speaking ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
        size === 'sm' ? 'h-7 w-7' : 'h-8 w-8',
        className
      )}
      title={speaking ? 'Dừng phát âm' : 'Phát âm'}
    >
      {speaking ? (
        <Pause className={cn(iconSize, 'animate-pulse')} />
      ) : (
        <Volume2 className={iconSize} />
      )}
    </button>
  );
}
