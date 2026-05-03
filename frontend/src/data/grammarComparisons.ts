import { Grammar } from '@/types';

export interface ComparisonGroup {
  id: string;
  title: string;
  titleJa: string;
  description: string;
  items: {
    grammarId: string;
    nuance: string;
  }[];
}

export const grammarComparisons: ComparisonGroup[] = [
  {
    id: 'existence',
    title: 'Tồn tại: あります vs います',
    titleJa: '存在動詞',
    description: 'Phân biệt đồ vật (inanimate) và người/động vật (animate).',
    items: [
      { grammarId: 'g7', nuance: 'Có (đồ vật, thứ vô tri)' },
      { grammarId: 'g8', nuance: 'Có (người, động vật)' },
    ],
  },
  {
    id: 'giving-receiving',
    title: '授受: あげる vs もらう vs くれる',
    titleJa: '授受動詞',
    description: '3 động từ thể hiện việc cho/nhận, khác nhau về hướng và người nhận.',
    items: [
      { grammarId: 'g9', nuance: 'Mình cho người khác' },
      { grammarId: 'g10', nuance: 'Mình nhận từ người khác' },
      { grammarId: 'g42', nuance: 'Làm gì đó cho ai (てあげる)' },
      { grammarId: 'g43', nuance: 'Được ai làm gì cho mình (てもらう)' },
      { grammarId: 'g44', nuance: 'Ai đó làm gì cho mình (てくれる)' },
    ],
  },
  {
    id: 'conditionals',
    title: 'Điều kiện: ～たら vs ～と vs ～ば vs ～なら',
    titleJa: '条件形',
    description: '4 cách diễn đạt điều kiện trong tiếng Nhật, khác nhau về ngữ cảnh và cách dùng.',
    items: [
      { grammarId: 'g27', nuance: 'Điều kiện cụ thể, kết quả tự nhiên hoặc giả định' },
      { grammarId: 'g28', nuance: 'Hễ A thì luôn B (quy luật tự nhiên, thói quen)' },
      { grammarId: 'g29', nuance: 'Điều kiện giả định, nhấn mạnh điều kiện' },
      { grammarId: 'g30', nuance: 'Trong trường hợp A, thì B (chủ đề + ngữ cảnh)' },
    ],
  },
  {
    id: 'sou-desu',
    title: '～そうです: Truyền tin vs Trông có vẻ',
    titleJa: 'そうです',
    description: 'Cùng hình thức nhưng 2 ý nghĩa hoàn toàn khác nhau.',
    items: [
      { grammarId: 'g35', nuance: 'Truyền tin: Nghe nói rằng... (đi sau thể thường)' },
      { grammarId: 'g53', nuance: 'Trông có vẻ: Nhìn có vẻ... (đi sau stem động từ/tính từ)' },
    ],
  },
  {
    id: 'purpose',
    title: 'Mục đích: ～ために vs ～ように',
    titleJa: '目的表現',
    description: '2 cách diễn đạt mục đích, khác nhau về mức độ kiểm soát.',
    items: [
      { grammarId: 'g54', nuance: 'Để làm gì (đi sau thể từ điển/ない, có chủ đích)' },
      { grammarId: 'g55', nuance: 'Để mà... (đi sau thể khả năng, nỗ lực dần dần)' },
    ],
  },
  {
    id: 'decision',
    title: 'Quyết định: ～ことにする vs ～ことになる',
    titleJa: '決定表現',
    description: 'Quyết định cá nhân vs quyết định từ bên ngoài.',
    items: [
      { grammarId: 'g40', nuance: 'Tự mình quyết định làm...' },
      { grammarId: 'g41', nuance: 'Được quyết định là... (bởi người khác/quy định)' },
    ],
  },
  {
    id: 'te-form-state',
    title: 'Trạng thái: ～ています vs ～てあります',
    titleJa: '状態表現',
    description: 'Phân biệt trạng thái đang diễn ra và trạng thái kết quả.',
    items: [
      { grammarId: 'g17', nuance: 'Đang làm / Trạng thái đang diễn ra' },
      { grammarId: 'g20', nuance: 'Trạng thái đã làm xong (kết quả của hành động có chủ đích)' },
    ],
  },
  {
    id: 'like-dislike-want',
    title: 'Sở thích & Mong muốn: 好き/嫌い/ほしい/たい',
    titleJa: '好き・嫌い・欲しい・～たい',
    description: '4 cách diễn đạt sở thích và mong muốn, khác nhau về đối tượng.',
    items: [
      { grammarId: 'g11', nuance: 'Thích (đồ vật/con người)' },
      { grammarId: 'g12', nuance: 'Ghét (đồ vật/con người)' },
      { grammarId: 'g13', nuance: 'Muốn (đồ vật) — がほしいです' },
      { grammarId: 'g14', nuance: 'Muốn làm (động tác) — ～たいです' },
    ],
  },
  {
    id: 'prohibition-obligation',
    title: 'Cấm & Bắt buộc: てはいけません vs なければなりません vs ～なければならない',
    titleJa: '禁止・義務',
    description: 'Các cách diễn đạt cấm đoán và bắt buộc.',
    items: [
      { grammarId: 'g19', nuance: 'Không được làm... (cấm đoán)' },
      { grammarId: 'g22', nuance: 'Phải làm... (bắt buộc, lịch sự)' },
      { grammarId: 'g60', nuance: 'Phải làm... (bắt buộc, văn nói)' },
    ],
  },
  {
    id: 'invitation-suggestion',
    title: 'Mời & Gợi ý: ～ましょう vs ～ませんか vs ～たら vs ～ほうがいいです',
    titleJa: '誘い・提案',
    description: 'Các cách mời mọc và gợi ý, khác nhau về mức độ lịch sự.',
    items: [
      { grammarId: 'g25', nuance: 'Cùng làm... nào (mời trực tiếp)' },
      { grammarId: 'g26', nuance: 'Cùng làm... nhé? (mời lịch sự)' },
      { grammarId: 'g27', nuance: 'Nếu... thì... (gợi ý điều kiện)' },
      { grammarId: 'g63', nuance: 'Nên làm... thì hơn (khuyên)' },
    ],
  },
  {
    id: 'conjecture',
    title: 'Đoán: ～かもしれません vs ～ようです vs ～らしいです vs ～はずです',
    titleJa: '推量表現',
    description: 'Các cách diễn đạt suy đoán, khác nhau về mức độ chắc chắn.',
    items: [
      { grammarId: 'g38', nuance: 'Có thể là... (không chắc chắn)' },
      { grammarId: 'g36', nuance: 'Có vẻ như... (phán đoán từ quan sát)' },
      { grammarId: 'g37', nuance: 'Nghe nói/có vẻ... (nguồn tin gián tiếp)' },
      { grammarId: 'g50', nuance: 'Chắc chắn là... (kỳ vọng mạnh)' },
    ],
  },
  {
    id: 'honorific',
    title: 'Kính ngữ: 尊敬語 vs 謙譲語',
    titleJa: '敬語',
    description: 'Kính ngữ tôn kính (nói về người khác) và khiêm nhường (nói về mình).',
    items: [
      { grammarId: 'g56', nuance: 'Tôn kính: ～になります (nói về hành động của người trên)' },
      { grammarId: 'g57', nuance: 'Khiêm nhường: ～します (nói về hành động của mình)' },
    ],
  },
];

export function getComparisonGroup(id: string): ComparisonGroup | undefined {
  return grammarComparisons.find((g) => g.id === id);
}

export function getGrammarForComparison(group: ComparisonGroup, allGrammar: Grammar[]) {
  const grammarMap = new Map(allGrammar.map((g) => [g.id, g]));
  return group.items
    .map((item) => {
      const grammar = grammarMap.get(item.grammarId);
      return grammar ? { ...item, grammar } : null;
    })
    .filter((g): g is NonNullable<typeof g> => g !== null);
}
