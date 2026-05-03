// Audio file mapping for Minna no Nihongo lessons
// Files are named: "{lesson} - {num} - {Type}.mp3"
// Types: 1-Kotoba, 2-Bunkei, 3-Reibun, 4-Kaiwa, 5-Renshuu C1, 6-Renshuu C2, 7-Renshuu C3, 8-Mondai 1, 9-Mondai 2, 10-Mondai 3

export const audioTypes = {
  kotoba:     { label: 'Từ vựng',        fileName: 'Kotoba' },
  bunkei:     { label: 'Mẫu câu',        fileName: 'Bunkei' },
  reibun:     { label: 'Ví dụ',          fileName: 'Reibun' },
  kaiwa:      { label: 'Hội thoại',      fileName: 'Kaiwa' },
  renshuuC1:  { label: 'Luyện tập C1',   fileName: 'Renshuu C1' },
  renshuuC2:  { label: 'Luyện tập C2',   fileName: 'Renshuu C2' },
  renshuuC3:  { label: 'Luyện tập C3',   fileName: 'Renshuu C3' },
  mondai1:    { label: 'Nghe Mondai 1',  fileName: 'Mondai 1' },
  mondai2:    { label: 'Nghe Mondai 2',  fileName: 'Mondai 2' },
  mondai3:    { label: 'Nghe Mondai 3',  fileName: 'Mondai 3' },
} as const;

export type AudioType = keyof typeof audioTypes;

/** Build the exact file path for a lesson audio file */
export function getAudioUrl(lessonNum: number, type: AudioType): string {
  const typeKeys = Object.keys(audioTypes) as AudioType[];
  const num = typeKeys.indexOf(type) + 1;
  return `/audio/${lessonNum} - ${num} - ${audioTypes[type].fileName}.mp3`;
}

/** Get all available audio files for a lesson */
export function getLessonAudioFiles(lessonNum: number): { type: AudioType; label: string; url: string }[] {
  return (Object.keys(audioTypes) as AudioType[]).map((type) => ({
    type,
    label: audioTypes[type].label,
    url: getAudioUrl(lessonNum, type),
  }));
}

/** Intro/pronunciation audio files */
export const introAudioFiles = [
  { label: 'Phát âm - Kana và Haku', url: '/audio/0/01 - I. Nihon-go no hatsuon- 1. Kana to Haku.mp3' },
  { label: 'Phát âm - Trường âm', url: '/audio/0/02 - I. Nihon-go no hatsuon- 2. Chouon.mp3' },
  { label: 'Phát âm - Âm mũi', url: '/audio/0/03 - I. Nihon-go no hatsuon- 3. Hatsuon.mp3' },
  { label: 'Phát âm - Âm ngắt', url: '/audio/0/04 - I. Nihon-go no hatsuon- 4. Sokuon.mp3' },
  { label: 'Phát âm - Âm ghép', url: '/audio/0/05 - I. Nihon-go no hatsuon- 5. Youon.mp3' },
  { label: 'Phát âm - Trọng âm', url: '/audio/0/06 - I. Nihon-go no hatsuon- 6. Akusento.mp3' },
  { label: 'Phát âm - Ngữ điệu', url: '/audio/0/07 - I. Nihon-go no hatsuon- 7. Intoneeshon.mp3' },
  { label: 'Hướng dẫn lớp học', url: '/audio/0/08 - II. Kyoushitsu no shiji no kotoba.mp3' },
  { label: 'Chào hỏi hàng ngày', url: '/audio/0/09 - III. Mainichi no aisatsu to Kaiwa-hyougen.mp3' },
  { label: 'Số đếm', url: '/audio/0/10 - IV. Suuji.mp3' },
];

/** Extract lesson number from lesson ID (e.g., 'lesson-4' → 4) */
export function getLessonNumber(lessonId: string): number | null {
  const match = lessonId.match(/lesson-(\d+)/);
  if (match) return parseInt(match[1], 10);
  return null;
}

/** Check if an audio file exists (returns 200) */
export async function checkAudioExists(url: string): Promise<boolean> {
  try {
    const resp = await fetch(url, { method: 'HEAD' });
    return resp.ok;
  } catch {
    return false;
  }
}
