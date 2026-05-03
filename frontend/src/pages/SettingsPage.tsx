import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { useStudyStore } from '@/store/studyStore';
import type { ADHDSettings } from '@/types';

const PRESETS = [
  { label: 'ADHD ngắn (10/3)', focus: 10, break: 3, longBreak: 10, sessions: 4 },
  { label: 'ADHD vừa (15/5)', focus: 15, break: 5, longBreak: 15, sessions: 4 },
  { label: 'Pomodoro (25/5)', focus: 25, break: 5, longBreak: 15, sessions: 4 },
  { label: 'Dài (45/10)', focus: 45, break: 10, longBreak: 20, sessions: 3 },
];

export default function SettingsPage() {
  const { adhdSettings, updateADHDSettings } = useStudyStore();

  const clearData = () => {
    if (confirm('Bạn có chắc muốn xóa toàn bộ dữ liệu học tập?')) {
      localStorage.removeItem('jlpt-n4-study-store');
      window.location.reload();
    }
  };

  const exportData = () => {
    const data = localStorage.getItem('jlpt-n4-study-store');
    if (data) {
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'jlpt-n4-backup.json';
      a.click();
    }
  };

  const applyPreset = (preset: typeof PRESETS[0]) => {
    updateADHDSettings({
      focusDuration: preset.focus,
      breakDuration: preset.break,
      longBreakDuration: preset.longBreak,
      sessionsBeforeLongBreak: preset.sessions,
    });
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold">Cài đặt</h1>
        <p className="text-muted-foreground">Quản lý dữ liệu và tùy chọn</p>
      </div>

      {/* ADHD-friendly settings */}
      <Card className="border-primary/30">
        <CardHeader>
          <CardTitle className="text-lg">🧠 Chế độ ADHD</CardTitle>
          <p className="text-sm text-muted-foreground">Tùy chỉnh phiên học phù hợp với não ADHD</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Presets */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Chọn kiểu phiên học</Label>
            <div className="grid grid-cols-2 gap-2">
              {PRESETS.map((preset) => (
                <Button
                  key={preset.label}
                  variant={
                    adhdSettings.focusDuration === preset.focus && adhdSettings.breakDuration === preset.break
                      ? 'default'
                      : 'outline'
                  }
                  onClick={() => applyPreset(preset)}
                  className="justify-start"
                >
                  {preset.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Focus duration */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Thời gian tập trung: {adhdSettings.focusDuration} phút</Label>
            </div>
            <Slider
              min={5}
              max={45}
              step={5}
              value={[adhdSettings.focusDuration]}
              onValueChange={([v]) => updateADHDSettings({ focusDuration: v })}
            />
          </div>

          {/* Break duration */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Thời gian nghỉ: {adhdSettings.breakDuration} phút</Label>
            </div>
            <Slider
              min={1}
              max={15}
              step={1}
              value={[adhdSettings.breakDuration]}
              onValueChange={([v]) => updateADHDSettings({ breakDuration: v })}
            />
          </div>

          {/* Quick start limit */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Số thẻ tối đa (Quick Start): {adhdSettings.quickStartLimit}</Label>
            </div>
            <Slider
              min={5}
              max={50}
              step={5}
              value={[adhdSettings.quickStartLimit]}
              onValueChange={([v]) => updateADHDSettings({ quickStartLimit: v })}
            />
          </div>

          {/* Toggles */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm">Tự động bắt đầu nghỉ</Label>
                <p className="text-xs text-muted-foreground">Hết giờ → tự động vào nghỉ</p>
              </div>
              <Switch
                checked={adhdSettings.autoStartBreak}
                onCheckedChange={(v) => updateADHDSettings({ autoStartBreak: v })}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm">Âm thanh thông báo</Label>
                <p className="text-xs text-muted-foreground">Beep khi hết giờ</p>
              </div>
              <Switch
                checked={adhdSettings.soundEnabled}
                onCheckedChange={(v) => updateADHDSettings({ soundEnabled: v })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data management */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Dữ liệu học tập</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Dữ liệu được lưu trữ trên trình duyệt (localStorage).
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={exportData} variant="outline">
              Xuất dữ liệu (Backup)
            </Button>
            <Button onClick={clearData} variant="destructive">
              Xóa toàn bộ dữ liệu
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Thông tin app</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Phiên bản</span>
            <span>0.2.0</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Giáo trình</span>
            <span>Minna no Nihongo I & II</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Mục tiêu</span>
            <span>JLPT N4</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Tổng bài học</span>
            <span>96 ngày</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Hướng dẫn</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div>
            <p className="font-semibold">1. Giải nén audio</p>
            <p className="text-muted-foreground">Giải nén file .rar trong thư mục jlpt-n4 và đặt audio vào frontend/public/audio/</p>
          </div>
          <div>
            <p className="font-semibold">2. Học mỗi ngày</p>
            <p className="text-muted-foreground">Mở app, vào Dashboard để xem bài học hôm nay. Hoàn thành đủ 4 kỹ năng.</p>
          </div>
          <div>
            <p className="font-semibold">3. Ôn flashcard</p>
            <p className="text-muted-foreground">Vào Flashcard mỗi ngày để ôn từ vựng và kanji theo spaced repetition.</p>
          </div>
          <div>
            <p className="font-semibold">4. Theo dõi tiến độ</p>
            <p className="text-muted-foreground">Vào trang Tiến độ để xem thống kê và weekly review.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
