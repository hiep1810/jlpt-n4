import { useEffect, useRef, useCallback, useState } from 'react';
import { CircleDot, Pause, Play, SkipForward, Timer, Volume2, VolumeX, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useStudyStore } from '@/store/studyStore';

const AMBIENT_SOUNDS = [
  { id: 'rain', label: 'Mưa', emoji: '🌧️' },
  { id: 'cafe', label: 'Quán cà phê', emoji: '☕' },
  { id: 'forest', label: 'Rừng', emoji: '🌲' },
  { id: 'white-noise', label: 'Tiếng ồn trắng', emoji: '📻' },
];

export default function FocusTimer() {
  const {
    focusSession, adhdSettings,
    startFocusSession, pauseFocusSession, resumeFocusSession,
    tickFocusSession, startBreak, skipBreak, resetFocusSession, addFocusMinute,
  } = useStudyStore();

  const [showAmbient, setShowAmbient] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const totalSeconds = adhdSettings.focusDuration * 60;
  const progress = totalSeconds > 0 ? ((totalSeconds - focusSession.timeRemaining) / totalSeconds) * 100 : 0;
  const minutes = Math.floor(focusSession.timeRemaining / 60);
  const seconds = focusSession.timeRemaining % 60;
  const timeDisplay = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  // Timer tick
  useEffect(() => {
    if (!focusSession.isActive) return;
    const interval = setInterval(() => tickFocusSession(), 1000);
    return () => clearInterval(interval);
  }, [focusSession.isActive, tickFocusSession]);

  // Play sound when session ends
  const prevActive = useRef(focusSession.isActive);
  useEffect(() => {
    if (prevActive.current && !focusSession.isActive && focusSession.timeRemaining === 0 && soundOn) {
      // Simple beep using AudioContext
      try {
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 800;
        gain.gain.value = 0.3;
        osc.start();
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
        osc.stop(ctx.currentTime + 0.5);
      } catch { /* AudioContext not supported */ }
    }
    prevActive.current = focusSession.isActive;
  }, [focusSession.isActive, focusSession.timeRemaining, soundOn]);

  const handleStart = () => {
    if (!focusSession.isActive && focusSession.timeRemaining === 0) {
      startFocusSession();
    } else if (!focusSession.isActive) {
      resumeFocusSession();
    } else {
      pauseFocusSession();
    }
  };

  const handleSessionEnd = () => {
    if (!focusSession.isBreak) {
      startBreak();
    }
  };

  if (!focusSession.isActive && focusSession.timeRemaining === 0 && !focusSession.isBreak) {
    return (
      <Card className="border-primary/30">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Timer className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold">Chế độ tập trung (Focus Mode)</p>
                <p className="text-xs text-muted-foreground">
                  {adhdSettings.focusDuration} phút • Session {focusSession.currentSession}/{adhdSettings.sessionsBeforeLongBreak}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAmbient(!showAmbient)}
              >
                {adhdSettings.ambientSound ? '🎧' : '🔇'}
              </Button>
              <Button size="sm" onClick={handleStart} className="bg-primary">
                <Play className="w-4 h-4 mr-1" />
                Bắt đầu
              </Button>
            </div>
          </div>

          {showAmbient && (
            <div className="mt-3 pt-3 border-t">
              <p className="text-xs font-medium mb-2">Âm thanh nền:</p>
              <div className="flex gap-2">
                {AMBIENT_SOUNDS.map((s) => (
                  <Button
                    key={s.id}
                    variant={adhdSettings.ambientSound === s.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => {
                      useStudyStore.getState().updateADHDSettings({
                        ambientSound: adhdSettings.ambientSound === s.id ? null : s.id,
                      });
                    }}
                  >
                    {s.emoji} {s.label}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`border-2 ${focusSession.isBreak ? 'border-green-400/50' : 'border-primary/50'}`}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <CircleDot className={`w-4 h-4 ${focusSession.isActive ? 'text-green-400 animate-pulse' : 'text-muted-foreground'}`} />
            <Badge variant={focusSession.isBreak ? 'success' : 'default'}>
              {focusSession.isBreak ? 'Nghỉ' : 'Tập trung'}
            </Badge>
            <span className="text-xs text-muted-foreground">
              Session {focusSession.currentSession}/{adhdSettings.sessionsBeforeLongBreak}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setSoundOn(!soundOn)}>
              {soundOn ? <Volume2 className="w-3 h-3" /> : <VolumeX className="w-3 h-3" />}
            </Button>
          </div>
        </div>

        {/* Timer display */}
        <div className="text-center mb-4">
          <div className="text-5xl font-mono font-bold tracking-wider">
            {timeDisplay}
          </div>
          {/* Progress bar */}
          <div className="w-full bg-secondary rounded-full h-1.5 mt-3">
            <div
              className={`h-1.5 rounded-full transition-all duration-1000 ${focusSession.isBreak ? 'bg-green-400' : 'bg-primary'}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-2">
          {!focusSession.isBreak ? (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={addFocusMinute}
              >
                <Plus className="w-3 h-3 mr-1" /> +1 phút
              </Button>
              <Button size="sm" onClick={handleStart}>
                {focusSession.isActive ? (
                  <><Pause className="w-4 h-4 mr-1" /> Tạm dừng</>
                ) : (
                  <><Play className="w-4 h-4 mr-1" /> Tiếp tục</>
                )}
              </Button>
              <Button variant="outline" size="sm" onClick={handleSessionEnd}>
                <SkipForward className="w-4 h-4 mr-1" /> Nghỉ
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" size="sm" onClick={resetFocusSession}>
                Bỏ nghỉ
              </Button>
              <Button size="sm" onClick={() => {
                if (!focusSession.isActive) resumeFocusSession();
                else pauseFocusSession();
              }}>
                {focusSession.isActive ? (
                  <><Pause className="w-4 h-4 mr-1" /> Tạm dừng</>
                ) : (
                  <><Play className="w-4 h-4 mr-1" /> Tiếp tục</>
                )}
              </Button>
            </>
          )}
        </div>

        {adhdSettings.ambientSound && (
          <div className="mt-3 text-center text-xs text-muted-foreground">
            🎧 {AMBIENT_SOUNDS.find(s => s.id === adhdSettings.ambientSound)?.emoji} {AMBIENT_SOUNDS.find(s => s.id === adhdSettings.ambientSound)?.label}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
