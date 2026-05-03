import { useState, useEffect, useCallback } from 'react';
import { Sparkles, Star, Trophy, Zap } from 'lucide-react';

interface Celebration {
  id: number;
  type: 'xp-gain' | 'level-up' | 'streak' | 'session-complete';
  message: string;
  value?: number;
}

let nextId = 0;

export default function Celebration() {
  const [celebrations, setCelebrations] = useState<Celebration[]>([]);

  const addCelebration = useCallback((type: Celebration['type'], message: string, value?: number) => {
    const id = nextId++;
    setCelebrations((prev) => [...prev, { id, type, message, value }]);
    setTimeout(() => {
      setCelebrations((prev) => prev.filter((c) => c.id !== id));
    }, 2500);
  }, []);

  // Expose globally via window for store to call
  useEffect(() => {
    (window as any).__celebrate = addCelebration;
    return () => { delete (window as any).__celebrate; };
  }, [addCelebration]);

  if (celebrations.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
      {celebrations.map((c) => (
        <div
          key={c.id}
          className="animate-bounce bg-card/95 backdrop-blur border rounded-lg px-4 py-2 shadow-lg flex items-center gap-2 text-sm font-medium animate-out fade-out slide-out-to-right"
          style={{
            animation: 'slideInRight 0.3s ease-out, fadeOut 0.5s ease-in 2s forwards',
          }}
        >
          {c.type === 'xp-gain' && <Sparkles className="w-4 h-4 text-yellow-400" />}
          {c.type === 'level-up' && <Trophy className="w-4 h-4 text-yellow-500" />}
          {c.type === 'streak' && <Zap className="w-4 h-4 text-orange-400" />}
          {c.type === 'session-complete' && <Star className="w-4 h-4 text-green-400" />}
          <span>{c.message}</span>
          {c.value !== undefined && (
            <span className="text-yellow-400 font-bold">+{c.value} XP</span>
          )}
        </div>
      ))}
    </div>
  );
}
