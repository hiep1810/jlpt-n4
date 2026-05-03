import { DrillSet } from '@/types';

export const grammarDrills: DrillSet[] = [
  // ============================================================
  // Bài 1: g1 — ～は～です (Affirmative)
  // ============================================================
  {
    id: 'g1-renshuu-a',
    drillType: 'substitution',
    grammarId: 'g1',
    title: 'Renshuu A — Thay thế',
    titleJa: '練習A',
    description: 'Hoàn thành câu tương tự ví dụ với từ gợi ý.',
    example: { japanese: 'わたしは がくせいです。', meaning: 'Tôi là học sinh.' },
    items: [
      { id: 'g1-ra-1', number: 1, cue: 'たなかさん / せんせい', expected: 'たなかさんは せんせいです。', hint: 'Tanaka là giáo viên.' },
      { id: 'g1-ra-2', number: 2, cue: 'やまださん / かいしゃいん', expected: 'やまださんは かいしゃいんです。', hint: 'Yamada là nhân viên công ty.' },
      { id: 'g1-ra-3', number: 3, cue: 'さとうさん / いしゃ', expected: 'さとうさんは いしゃです。', hint: 'Sato là bác sĩ.' },
      { id: 'g1-ra-4', number: 4, cue: 'ミラーさん / がくせい', expected: 'ミラーさんは がくせいです。', hint: 'Miller là học sinh.' },
    ],
  },
  {
    id: 'g1-renshuu-b',
    drillType: 'transformation',
    grammarId: 'g1',
    title: 'Renshuu B — Chuyển đổi (hỏi & trả lời)',
    titleJa: '練習B',
    description: 'Chuyển câu khẳng định sang câu hỏi và trả lời.',
    example: { japanese: 'ミラーさんは がくせいですか。-- はい、がくせいです。', meaning: 'Miller có phải là học sinh không? -- Vâng, là học sinh.' },
    items: [
      { id: 'g1-rb-1', number: 1, cue: 'たなかさん / せんせい', expected: 'たなかさんは せんせいですか。-- はい、せんせいです。', hint: 'Hỏi Tanaka có phải giáo viên không.' },
      { id: 'g1-rb-2', number: 2, cue: 'やまださん / かいしゃいん', expected: 'やまださんは かいしゃいんですか。-- はい、かいしゃいんです。', hint: 'Hỏi Yamada có phải nhân viên không.' },
      { id: 'g1-rb-3', number: 3, cue: 'さとうさん / いしゃ', expected: 'さとうさんは いしゃですか。-- はい、いしゃです。', hint: 'Hỏi Sato có phải bác sĩ không.' },
      { id: 'g1-rb-4', number: 4, cue: 'ミラーさん / ぎんこういん', expected: 'ミラーさんは ぎんこういんですか。-- はい、ぎんこういんです。', hint: 'Hỏi Miller có phải nhân viên ngân hàng không.' },
    ],
  },
  {
    id: 'g1-renshuu-c',
    drillType: 'sentence-construction',
    grammarId: 'g1',
    title: 'Renshuu C — Xây dựng câu',
    titleJa: '練習C',
    description: 'Nhìn gợi ý và xây dựng câu hoàn chỉnh.',
    example: { japanese: 'ミラーさんは アメリカじんです。', meaning: 'Miller là người Mỹ.' },
    items: [
      { id: 'g1-rc-1', number: 1, cue: 'ミラーさん / イギリス', expected: 'ミラーさんは イギリスじんです。', hint: 'Miller là người Anh.' },
      { id: 'g1-rc-2', number: 2, cue: 'たなかさん / にほん', expected: 'たなかさんは にほんじんです。', hint: 'Tanaka là người Nhật.' },
      { id: 'g1-rc-3', number: 3, cue: 'やまださん / ちゅうごく', expected: 'やまださんは ちゅうごくじんです。', hint: 'Yamada là người Trung Quốc.' },
      { id: 'g1-rc-4', number: 4, cue: 'さとうさん / ベトナム', expected: 'さとうさんは ベトナムじんです。', hint: 'Sato là người Việt Nam.' },
    ],
  },

  // ============================================================
  // Bài 1: g2 — ～は～じゃありません (Negative)
  // ============================================================
  {
    id: 'g2-renshuu-a',
    drillType: 'substitution',
    grammarId: 'g2',
    title: 'Renshuu A — Thay thế (phủ định)',
    titleJa: '練習A',
    description: 'Hoàn thành câu phủ định tương tự ví dụ.',
    example: { japanese: 'わたしは せんせいじゃありません。', meaning: 'Tôi không phải là giáo viên.' },
    items: [
      { id: 'g2-ra-1', number: 1, cue: 'たなかさん / いしゃ', expected: 'たなかさんは いしゃじゃありません。', hint: 'Tanaka không phải bác sĩ.' },
      { id: 'g2-ra-2', number: 2, cue: 'やまださん / がくせい', expected: 'やまださんは がくせいじゃありません。', hint: 'Yamada không phải học sinh.' },
      { id: 'g2-ra-3', number: 3, cue: 'ミラーさん / かいしゃいん', expected: 'ミラーさんは かいしゃいんじゃありません。', hint: 'Miller không phải nhân viên.' },
      { id: 'g2-ra-4', number: 4, cue: 'さとうさん / ぎんこういん', expected: 'さとうさんは ぎんこういんじゃありません。', hint: 'Sato không phải nhân viên ngân hàng.' },
    ],
  },

  // ============================================================
  // Bài 1: g3 — ～は～ですか (Question)
  // ============================================================
  {
    id: 'g3-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g3',
    title: 'Renshuu A — Câu hỏi xác nhận',
    titleJa: '練習A',
    description: 'Hỏi và trả lời theo ví dụ.',
    example: { japanese: 'たなかさんは がくせいですか。-- はい、がくせいです。', meaning: 'Tanaka có phải học sinh không? -- Vâng, là học sinh.' },
    items: [
      { id: 'g3-ra-1', number: 1, cue: 'やまださん / かいしゃいん', expected: 'やまださんは かいしゃいんですか。-- はい、かいしゃいんです。', hint: '' },
      { id: 'g3-ra-2', number: 2, cue: 'さとうさん / いしゃ', expected: 'さとうさんは いしゃですか。-- いいえ、いしゃじゃありません。', hint: 'Trả lời phủ định.' },
      { id: 'g3-ra-3', number: 3, cue: 'ミラーさん / せんせい', expected: 'ミラーさんは せんせいですか。-- はい、せんせいです。', hint: '' },
      { id: 'g3-ra-4', number: 4, cue: 'たなかさん / ぎんこういん', expected: 'たなかさんは ぎんこういんですか。-- いいえ、ぎんこういんじゃありません。', hint: 'Trả lời phủ định.' },
    ],
  },

  // ============================================================
  // Bài 4: g4 — ～を～ます (Object + verb)
  // ============================================================
  {
    id: 'g4-renshuu-a',
    drillType: 'substitution',
    grammarId: 'g4',
    title: 'Renshuu A — Thay thế',
    titleJa: '練習A',
    description: 'Thay thế tân ngữ trong câu.',
    example: { japanese: 'わたしは ほんを よみます。', meaning: 'Tôi đọc sách.' },
    items: [
      { id: 'g4-ra-1', number: 1, cue: 'しんぶん / よみます', expected: 'わたしは しんぶんを よみます。', hint: 'Tôi đọc báo.' },
      { id: 'g4-ra-2', number: 2, cue: 'ざっし / よみます', expected: 'わたしは ざっしを よみます。', hint: 'Tôi đọc tạp chí.' },
      { id: 'g4-ra-3', number: 3, cue: 'じしょ / みます', expected: 'わたしは じしょを みます。', hint: 'Tôi xem từ điển.' },
      { id: 'g4-ra-4', number: 4, cue: 'テレビ / みます', expected: 'わたしは テレビを みます。', hint: 'Tôi xem tivi.' },
    ],
  },
  {
    id: 'g4-renshuu-b',
    drillType: 'transformation',
    grammarId: 'g4',
    title: 'Renshuu B — Hỏi & trả lời',
    titleJa: '練習B',
    description: 'Hỏi người khác làm gì và trả lời.',
    example: { japanese: 'なにを よみますか。-- しんぶんです。', meaning: 'Bạn đọc gì? -- Báo.' },
    items: [
      { id: 'g4-rb-1', number: 1, cue: 'しんぶん', expected: 'なにを よみますか。-- しんぶんです。', hint: 'Hỏi đọc gì.' },
      { id: 'g4-rb-2', number: 2, cue: 'じしょ', expected: 'なにを みますか。-- じしょです。', hint: 'Hỏi xem gì.' },
      { id: 'g4-rb-3', number: 3, cue: 'ラジオ', expected: 'なにを ききますか。-- ラジオです。', hint: 'Hỏi nghe gì.' },
      { id: 'g4-rb-4', number: 4, cue: 'えんぴつ', expected: 'なにで かきますか。-- えんぴつです。', hint: 'Hỏi viết bằng gì.' },
    ],
  },

  // ============================================================
  // Bài 4: g5 — ～を～ませんか (Invitation)
  // ============================================================
  {
    id: 'g5-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g5',
    title: 'Renshuu A — Mời mọc',
    titleJa: '練習A',
    description: 'Chuyển câu khẳng định sang lời mời.',
    example: { japanese: 'いっしょに えいがを みませんか。', meaning: 'Cùng xem phim không?' },
    items: [
      { id: 'g5-ra-1', number: 1, cue: 'しんぶん / よみます', expected: 'いっしょに しんぶンを よみませんか。', hint: 'Mời đọc báo.' },
      { id: 'g5-ra-2', number: 2, cue: 'コーヒー / のみます', expected: 'いっしょに コーヒーを のみませんか。', hint: 'Mời uống cà phê.' },
      { id: 'g5-ra-3', number: 3, cue: 'でんわ / かけます', expected: 'いっしょに でんわを かけませんか。', hint: 'Mời gọi điện.' },
    ],
  },

  // ============================================================
  // Bài 6: g7 — あります (there is - inanimate)
  // ============================================================
  {
    id: 'g7-renshuu-a',
    drillType: 'substitution',
    grammarId: 'g7',
    title: 'Renshuu A — Thay thế',
    titleJa: '練習A',
    description: 'Thay thế địa điểm và đồ vật trong câu.',
    example: { japanese: 'つくえの うえに ほんが あります。', meaning: 'Có sách trên bàn.' },
    items: [
      { id: 'g7-ra-1', number: 1, cue: 'かばんの なかに ざっしが', expected: 'かばんの なかに ざっしが あります。', hint: 'Có tạp chí trong cặp.' },
      { id: 'g7-ra-2', number: 2, cue: 'へやの すみに テレビが', expected: 'へやの すみに テレビが あります。', hint: 'Có tivi ở góc phòng.' },
      { id: 'g7-ra-3', number: 3, cue: 'つくえの したに ざっしが', expected: 'つくえの したに ざっしが あります。', hint: 'Có tạp chí dưới bàn.' },
      { id: 'g7-ra-4', number: 4, cue: 'ポケットの なかに さいふが', expected: 'ポケットの なかに さいふが あります。', hint: 'Có ví trong túi.' },
    ],
  },
  {
    id: 'g7-renshuu-b',
    drillType: 'transformation',
    grammarId: 'g7',
    title: 'Renshuu B — Hỏi & trả lời',
    titleJa: '練習B',
    description: 'Hỏi về vị trí đồ vật và trả lời.',
    example: { japanese: 'ほんは どこに ありますか。-- つくえの うえに あります。', meaning: 'Sách ở đâu? -- Ở trên bàn.' },
    items: [
      { id: 'g7-rb-1', number: 1, cue: 'ざっし / かばんの なか', expected: 'ざっしは どこに ありますか。-- かばんの なかに あります。', hint: 'Hỏi tạp chí ở đâu.' },
      { id: 'g7-rb-2', number: 2, cue: 'テレビ / へやの すみ', expected: 'テレビは どこに ありますか。-- へやの すみに あります。', hint: 'Hỏi tivi ở đâu.' },
      { id: 'g7-rb-3', number: 3, cue: 'えんぴつ / つくえの うえ', expected: 'えんぴつは どこに ありますか。-- つくえの うえに あります。', hint: 'Hỏi bút chì ở đâu.' },
    ],
  },

  // ============================================================
  // Bài 6: g8 — います (there is - animate)
  // ============================================================
  {
    id: 'g8-renshuu-a',
    drillType: 'substitution',
    grammarId: 'g8',
    title: 'Renshuu A — Thay thế',
    titleJa: '練習A',
    description: 'Thay thế địa điểm và người/động vật trong câu.',
    example: { japanese: 'へやに ねこが います。', meaning: 'Có mèo trong phòng.' },
    items: [
      { id: 'g8-ra-1', number: 1, cue: 'にわに いぬが', expected: 'にわに いぬが います。', hint: 'Có chó ngoài vườn.' },
      { id: 'g8-ra-2', number: 2, cue: 'がっこうに せんせいが', expected: 'がっこうに せんせいが います。', hint: 'Có giáo viên ở trường.' },
      { id: 'g8-ra-3', number: 3, cue: 'きょうしつに がくせいが', expected: 'きょうしつに がくせいが います。', hint: 'Có học sinh trong lớp.' },
      { id: 'g8-ra-4', number: 4, cue: 'こうえんに こどもが', expected: 'こうえんに こどもが います。', hint: 'Có trẻ em ở công viên.' },
    ],
  },
  {
    id: 'g8-renshuu-b',
    drillType: 'transformation',
    grammarId: 'g8',
    title: 'Renshuu B — Hỏi & trả lời',
    titleJa: '練習B',
    description: 'Hỏi về vị trí người/động vật và trả lời.',
    example: { japanese: 'ねこは どこに いますか。-- へやに います。', meaning: 'Mèo ở đâu? -- Ở trong phòng.' },
    items: [
      { id: 'g8-rb-1', number: 1, cue: 'いぬ / にわ', expected: 'いぬは どこに いますか。-- にわに います。', hint: 'Hỏi chó ở đâu.' },
      { id: 'g8-rb-2', number: 2, cue: 'せんせい / がっこう', expected: 'せんせいは どこに いますか。-- がっこうに います。', hint: 'Hỏi giáo viên ở đâu.' },
      { id: 'g8-rb-3', number: 3, cue: 'こども / こうえん', expected: 'こどもは どこに いますか。-- こうえんに います。', hint: 'Hỏi trẻ em ở đâu.' },
    ],
  },

  // ============================================================
  // Bài 7: g58 — ～はどこですか (Where is ~?)
  // ============================================================
  {
    id: 'g58-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g58',
    title: 'Renshuu A — Hỏi vị trí',
    titleJa: '練習A',
    description: 'Hỏi và trả lời về vị trí đồ vật.',
    example: { japanese: 'ポストは どこですか。-- えきの そばです。', meaning: 'Bưu điện ở đâu? -- Gần ga.' },
    items: [
      { id: 'g58-ra-1', number: 1, cue: 'トイレ / かいだんの した', expected: 'トイレは どこですか。-- かいだんの したです。', hint: 'Hỏi nhà vệ sinh ở đâu.' },
      { id: 'g58-ra-2', number: 2, cue: 'びょういん / えきの ひがし', expected: 'びょういんは どこですか。-- えきの ひがしです。', hint: 'Hỏi bệnh viện ở đâu.' },
      { id: 'g58-ra-3', number: 3, cue: 'としょかん / こうえんの となり', expected: 'としょかんは どこですか。-- こうえんの となりです。', hint: 'Hỏi thư viện ở đâu.' },
    ],
  },

  // ============================================================
  // Bài 7: g59 — ～のうしろ/まえ/となり (Behind/in front/next)
  // ============================================================
  {
    id: 'g59-renshuu-a',
    drillType: 'substitution',
    grammarId: 'g59',
    title: 'Renshuu A — Thay thế vị trí',
    titleJa: '練習A',
    description: 'Thay thế vị trí trong câu.',
    example: { japanese: 'ねこは いすの したに います。', meaning: 'Mèo ở dưới ghế.' },
    items: [
      { id: 'g59-ra-1', number: 1, cue: 'いぬ / いえの うしろ', expected: 'いぬは いえの うしろに います。', hint: 'Chó ở sau nhà.' },
      { id: 'g59-ra-2', number: 2, cue: 'かばん / ドアの まえ', expected: 'かばんは ドアの まえに あります。', hint: 'Cặp ở trước cửa.' },
      { id: 'g59-ra-3', number: 3, cue: 'ほん / テレビの よこ', expected: 'ほんは テレビの よこに あります。', hint: 'Sách ở cạnh tivi.' },
      { id: 'g59-ra-4', number: 4, cue: 'つくえ / ベッドの となり', expected: 'つくえは ベッドの となりに あります。', hint: 'Bàn ở cạnh giường.' },
    ],
  },

  // ============================================================
  // Bài 8: g9 — ～にあげます (Give to ~)
  // ============================================================
  {
    id: 'g9-renshuu-a',
    drillType: 'substitution',
    grammarId: 'g9',
    title: 'Renshuu A — Thay thế',
    titleJa: '練習A',
    description: 'Thay thế người nhận và đồ vật.',
    example: { japanese: 'わたしは ともだちに ほんを あげます。', meaning: 'Tôi tặng bạn sách.' },
    items: [
      { id: 'g9-ra-1', number: 1, cue: 'ははおくに フラワー', expected: 'わたしは ははおくに フラワーを あげます。', hint: 'Tặng hoa cho mẹ.' },
      { id: 'g9-ra-2', number: 2, cue: 'いもうとにくつ', expected: 'わたしは いもうとにくつを あげます。', hint: 'Tặng giày cho em gái.' },
      { id: 'g9-ra-3', number: 3, cue: 'せんせいに おみやげ', expected: 'わたしは せんせいに おみやげを あげます。', hint: 'Tặng quà lưu niệm cho thầy.' },
    ],
  },

  // ============================================================
  // Bài 8: g10 — ～にもらいます (Receive from ~)
  // ============================================================
  {
    id: 'g10-renshuu-a',
    drillType: 'substitution',
    grammarId: 'g10',
    title: 'Renshuu A — Thay thế',
    titleJa: '練習A',
    description: 'Thay thế người cho và đồ vật nhận.',
    example: { japanese: 'わたしは ともだちに ほんを もらいました。', meaning: 'Tôi nhận sách từ bạn.' },
    items: [
      { id: 'g10-ra-1', number: 1, cue: 'せんせいに じてんしゃ', expected: 'わたしは せんせいに じてんしゃを もらいました。', hint: 'Nhận xe đạp từ thầy.' },
      { id: 'g10-ra-2', number: 2, cue: 'かぞくに おかね', expected: 'わたしは かぞくに おかねを もらいました。', hint: 'Nhận tiền từ gia đình.' },
      { id: 'g10-ra-3', number: 3, cue: 'ともだちに くつ', expected: 'わたしは ともだちに くつを もらいました。', hint: 'Nhận giày từ bạn.' },
    ],
  },

  // ============================================================
  // Bài 9: g11 — ～がすきです (Like ~)
  // ============================================================
  {
    id: 'g11-renshuu-a',
    drillType: 'substitution',
    grammarId: 'g11',
    title: 'Renshuu A — Thay thế',
    titleJa: '練習A',
    description: 'Thay thế thứ bạn thích.',
    example: { japanese: 'わたしは さくらが すきです。', meaning: 'Tôi thích hoa anh đào.' },
    items: [
      { id: 'g11-ra-1', number: 1, cue: 'ねこ', expected: 'わたしは ねこが すきです。', hint: 'Tôi thích mèo.' },
      { id: 'g11-ra-2', number: 2, cue: 'おんがく', expected: 'わたしは おんがくが すきです。', hint: 'Tôi thích âm nhạc.' },
      { id: 'g11-ra-3', number: 3, cue: 'りょこう', expected: 'わたしは りょこうが すきです。', hint: 'Tôi thích du lịch.' },
      { id: 'g11-ra-4', number: 4, cue: 'やさい', expected: 'わたしは やさいが すきです。', hint: 'Tôi thích rau.' },
    ],
  },
  {
    id: 'g11-renshuu-b',
    drillType: 'transformation',
    grammarId: 'g11',
    title: 'Renshuu B — Hỏi & trả lời',
    titleJa: '練習B',
    description: 'Hỏi về sở thích và trả lời.',
    example: { japanese: 'なにが すきですか。-- くるまが すきです。', meaning: 'Bạn thích gì? -- Tôi thích xe hơi.' },
    items: [
      { id: 'g11-rb-1', number: 1, cue: 'えいが', expected: 'なにが すきですか。-- えいがが すきです。', hint: 'Thích phim.' },
      { id: 'g11-rb-2', number: 2, cue: 'スポーツ', expected: 'なにが すきですか。-- スポーツが すきです。', hint: 'Thích thể thao.' },
      { id: 'g11-rb-3', number: 3, cue: 'ほん', expected: 'なにが すきですか。-- ほんが すきです。', hint: 'Thích sách.' },
    ],
  },

  // ============================================================
  // Bài 9: g12 — ～がきらいです (Dislike ~)
  // ============================================================
  {
    id: 'g12-renshuu-a',
    drillType: 'substitution',
    grammarId: 'g12',
    title: 'Renshuu A — Thay thế',
    titleJa: '練習A',
    description: 'Thay thế thứ bạn không thích.',
    example: { japanese: 'わたしは にくが きらいです。', meaning: 'Tôi ghét thịt.' },
    items: [
      { id: 'g12-ra-1', number: 1, cue: 'さかな', expected: 'わたしは さかなが きらいです。', hint: 'Tôi ghét cá.' },
      { id: 'g12-ra-2', number: 2, cue: 'あまいもの', expected: 'わたしは あまいものが きらいです。', hint: 'Tôi ghét đồ ngọt.' },
      { id: 'g12-ra-3', number: 3, cue: 'こいもの', expected: 'わたしは こいものが きらいです。', hint: 'Tôi ghét cá chép.' },
    ],
  },

  // ============================================================
  // Bài 9: g13 — ～がほしいです (Want thing)
  // ============================================================
  {
    id: 'g13-renshuu-a',
    drillType: 'substitution',
    grammarId: 'g13',
    title: 'Renshuu A — Thay thế',
    titleJa: '練習A',
    description: 'Thay thế thứ bạn muốn.',
    example: { japanese: 'わたしは くるまが ほしいです。', meaning: 'Tôi muốn xe hơi.' },
    items: [
      { id: 'g13-ra-1', number: 1, cue: 'パソコン', expected: 'わたしは パソコンが ほしいです。', hint: 'Tôi muốn máy tính.' },
      { id: 'g13-ra-2', number: 2, cue: 'スマートフォン', expected: 'わたしは スマートフォンが ほしいです。', hint: 'Tôi muốn điện thoại.' },
      { id: 'g13-ra-3', number: 3, cue: 'ほん', expected: 'わたしは ほんが ほしいです。', hint: 'Tôi muốn sách.' },
    ],
  },

  // ============================================================
  // Bài 9: g14 — ～たいです (Want to do)
  // ============================================================
  {
    id: 'g14-renshuu-a',
    drillType: 'substitution',
    grammarId: 'g14',
    title: 'Renshuu A — Thay thế',
    titleJa: '練習A',
    description: 'Thay thế việc bạn muốn làm.',
    example: { japanese: 'わたしは りょこうしたいです。', meaning: 'Tôi muốn du lịch.' },
    items: [
      { id: 'g14-ra-1', number: 1, cue: 'えいがを みる', expected: 'わたしは えいがを みたいです。', hint: 'Tôi muốn xem phim.' },
      { id: 'g14-ra-2', number: 2, cue: 'ほんを よむ', expected: 'わたしは ほんを よみたいです。', hint: 'Tôi muốn đọc sách.' },
      { id: 'g14-ra-3', number: 3, cue: 'にほんへ いく', expected: 'わたしは にほんへ いきたいです。', hint: 'Tôi muốn đi Nhật.' },
      { id: 'g14-ra-4', number: 4, cue: 'やさいを たべる', expected: 'わたしは やさいを たべたいです。', hint: 'Tôi muốn ăn rau.' },
    ],
  },
  {
    id: 'g14-renshuu-b',
    drillType: 'transformation',
    grammarId: 'g14',
    title: 'Renshuu B — Hỏi & trả lời',
    titleJa: '練習B',
    description: 'Hỏi về việc muốn làm và trả lời.',
    example: { japanese: 'なつやすみに なにを したいですか。-- かいすいよくしたいです。', meaning: 'Nghỉ hè bạn muốn làm gì? -- Tôi muốn bơi biển.' },
    items: [
      { id: 'g14-rb-1', number: 1, cue: 'にちようびに / あそぶ', expected: 'にちようびに なにを したいですか。-- あそびたいです。', hint: 'Chủ nhật muốn làm gì?' },
      { id: 'g14-rb-2', number: 2, cue: 'やすみに / りょこうする', expected: 'やすみに なにを したいですか。-- りょこうしたいです。', hint: 'Nghỉ lễ muốn làm gì?' },
    ],
  },

  // ============================================================
  // Bài 10: g15 — ～より～のほうが～です (Comparison)
  // ============================================================
  {
    id: 'g15-renshuu-a',
    drillType: 'sentence-construction',
    grammarId: 'g15',
    title: 'Renshuu A — So sánh',
    titleJa: '練習A',
    description: 'So sánh hai thứ theo ví dụ.',
    example: { japanese: 'さくらの ほうが すずしいです。', meaning: 'Hoa anh đào mát hơn.' },
    items: [
      { id: 'g15-ra-1', number: 1, cue: 'なつの ほうが / あつい', expected: 'なつの ほうが あついです。', hint: 'Mùa hè nóng hơn.' },
      { id: 'g15-ra-2', number: 2, cue: 'ほんの ほうが / おもしろい', expected: 'ほんの ほうが おもしろいです。', hint: 'Sách thú vị hơn.' },
      { id: 'g15-ra-3', number: 3, cue: 'でんしゃの ほうが / はやい', expected: 'でんしゃの ほうが はやいです。', hint: 'Tàu nhanh hơn.' },
      { id: 'g15-ra-4', number: 4, cue: 'やさいの ほうが / やすい', expected: 'やさいの ほうが やすいです。', hint: 'Rau rẻ hơn.' },
    ],
  },
  {
    id: 'g15-renshuu-b',
    drillType: 'transformation',
    grammarId: 'g15',
    title: 'Renshuu B — Hỏi so sánh',
    titleJa: '練習B',
    description: 'Hỏi cái nào hơn và trả lời.',
    example: { japanese: 'ねこといぬと どちらが すきですか。-- ねこの ほうが すきです。', meaning: 'Mèo và chó bạn thích cái nào? -- Tôi thích mèo hơn.' },
    items: [
      { id: 'g15-rb-1', number: 1, cue: 'バスとでんしゃ / はやい', expected: 'バスとでんしゃと どちらが はやいですか。-- でんしゃの ほうが はやいです。', hint: 'Xe buýt và tàu cái nào nhanh hơn?' },
      { id: 'g15-rb-2', number: 2, cue: 'えいがとドラマ / おもしろい', expected: 'えいがとドラマと どちらが おもしろいですか。-- えいがの ほうが おもしろいです。', hint: 'Phim và drama cái nào thú vị hơn?' },
    ],
  },

  // ============================================================
  // Bài 11: g16 — ～てください (Please do ~)
  // ============================================================
  {
    id: 'g16-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g16',
    title: 'Renshuu A — Yêu cầu',
    titleJa: '練習A',
    description: 'Chuyển thành câu yêu cầu ～てください.',
    example: { japanese: 'ここを みてください。', meaning: 'Hãy nhìn chỗ này.' },
    items: [
      { id: 'g16-ra-1', number: 1, cue: 'しおを とる', expected: 'しおを とってください。', hint: 'Hãy lấy muối.' },
      { id: 'g16-ra-2', number: 2, cue: 'まどを あける', expected: 'まどを あけてください。', hint: 'Hãy mở cửa sổ.' },
      { id: 'g16-ra-3', number: 3, cue: 'ここで まつ', expected: 'ここで まってください。', hint: 'Hãy đợi ở đây.' },
      { id: 'g16-ra-4', number: 4, cue: 'でんわを かける', expected: 'でんわを かけてください。', hint: 'Hãy gọi điện.' },
    ],
  },

  // ============================================================
  // Bài 12: g18 — ～てもいいです (May do ~)
  // ============================================================
  {
    id: 'g18-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g18',
    title: 'Renshuu A — Xin phép',
    titleJa: '練習A',
    description: 'Hỏi xin phép làm việc gì.',
    example: { japanese: 'ここに すわっても いいですか。-- はい、すわってください。', meaning: 'Tôi ngồi đây được không? -- Vâng, mời ngồi.' },
    items: [
      { id: 'g18-ra-1', number: 1, cue: 'まどを あけてもいい', expected: 'まどを あけても いいですか。-- はい、あけてください。', hint: 'Mở cửa sổ được không?' },
      { id: 'g18-ra-2', number: 2, cue: 'でんわを かけてもいい', expected: 'でんわを かけても いいですか。-- はい、かけてください。', hint: 'Gọi điện được không?' },
      { id: 'g18-ra-3', number: 3, cue: 'しゃしんを とってもいい', expected: 'しゃしんを とっても いいですか。-- いいえ、だめです。', hint: 'Chụp ảnh được không? (Không được)' },
    ],
  },

  // ============================================================
  // Bài 12: g19 — ～てはいけません (Must not do ~)
  // ============================================================
  {
    id: 'g19-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g19',
    title: 'Renshuu A — Cấm',
    titleJa: '練習A',
    description: 'Chuyển thành câu cấm đoán.',
    example: { japanese: 'ここで たばこを すっては いけません。', meaning: 'Không được hút thuốc ở đây.' },
    items: [
      { id: 'g19-ra-1', number: 1, cue: 'ここにはいる', expected: 'ここにはいってはいけません。', hint: 'Không được vào đây.' },
      { id: 'g19-ra-2', number: 2, cue: 'しゃしんを とる', expected: 'しゃしんを とってはいけません。', hint: 'Không được chụp ảnh.' },
      { id: 'g19-ra-3', number: 3, cue: 'でんわを かける', expected: 'でんわを かけてはいけません。', hint: 'Không được gọi điện.' },
      { id: 'g19-ra-4', number: 4, cue: 'おおきな こえを だす', expected: 'おおきな こえを だしてはいけません。', hint: 'Không được nói to.' },
    ],
  },

  // ============================================================
  // Bài 13: g17 — ～ています (Progressive/State)
  // ============================================================
  {
    id: 'g17-renshuu-a',
    drillType: 'substitution',
    grammarId: 'g17',
    title: 'Renshuu A — Thay thế',
    titleJa: '練習A',
    description: 'Thay thế hành động đang diễn ra.',
    example: { japanese: 'いま あめが ふっています。', meaning: 'Bây giờ trời đang mưa.' },
    items: [
      { id: 'g17-ra-1', number: 1, cue: 'べんきょうする', expected: 'いま べんきょうしています。', hint: 'Đang học.' },
      { id: 'g17-ra-2', number: 2, cue: 'ほんを よむ', expected: 'いま ほんを よんでいます。', hint: 'Đang đọc sách.' },
      { id: 'g17-ra-3', number: 3, cue: 'テレビを みる', expected: 'いま テレビを みています。', hint: 'Đang xem TV.' },
      { id: 'g17-ra-4', number: 4, cue: 'りょうりを つくる', expected: 'いま りょうりを つくっています。', hint: 'Đang nấu ăn.' },
    ],
  },

  // ============================================================
  // Bài 14: g20 — ～てあります (State from action)
  // ============================================================
  {
    id: 'g20-renshuu-a',
    drillType: 'substitution',
    grammarId: 'g20',
    title: 'Renshuu A — Thay thế',
    titleJa: '練習A',
    description: 'Thay thế trạng thái đã hoàn thành.',
    example: { japanese: 'まどが あけてあります。', meaning: 'Cửa sổ đã được mở sẵn.' },
    items: [
      { id: 'g20-ra-1', number: 1, cue: 'でんきが つけてある', expected: 'でんきが つけてあります。', hint: 'Đèn đã bật sẵn.' },
      { id: 'g20-ra-2', number: 2, cue: 'ドアが しめてある', expected: 'ドアが しめてあります。', hint: 'Cửa đã đóng sẵn.' },
      { id: 'g20-ra-3', number: 3, cue: 'テーブルの うえに はなが おいてある', expected: 'テーブルの うえに はなが おいてあります。', hint: 'Trên bàn đã đặt hoa sẵn.' },
    ],
  },

  // ============================================================
  // Bài 15: g21 — ～ないでください (Please don't do)
  // ============================================================
  {
    id: 'g21-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g21',
    title: 'Renshuu A — Yêu cầu không làm',
    titleJa: '練習A',
    description: 'Chuyển thành câu yêu cầu đừng làm.',
    example: { japanese: 'ここで しゃしんを とらないでください。', meaning: 'Đừng chụp ảnh ở đây.' },
    items: [
      { id: 'g21-ra-1', number: 1, cue: 'ここに すわる', expected: 'ここに すわらないでください。', hint: 'Đừng ngồi ở đây.' },
      { id: 'g21-ra-2', number: 2, cue: 'まどを あける', expected: 'まどを あけないでください。', hint: 'Đừng mở cửa sổ.' },
      { id: 'g21-ra-3', number: 3, cue: 'でんわを かける', expected: 'でんわを かけないでください。', hint: 'Đừng gọi điện.' },
      { id: 'g21-ra-4', number: 4, cue: 'ここにはいる', expected: 'ここにはいらないでください。', hint: 'Đừng vào đây.' },
    ],
  },

  // ============================================================
  // Bài 15: g22 — ～なければなりません (Must do)
  // ============================================================
  {
    id: 'g22-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g22',
    title: 'Renshuu A — Nghĩa vụ',
    titleJa: '練習A',
    description: 'Chuyển thành câu bắt buộc phải làm.',
    example: { japanese: 'あした までに レポートを ださなければなりません。', meaning: 'Phải nộp báo cáo trước ngày mai.' },
    items: [
      { id: 'g22-ra-1', number: 1, cue: 'まいにち べんきょうする', expected: 'まいにち べんきょうしなければなりません。', hint: 'Phải học mỗi ngày.' },
      { id: 'g22-ra-2', number: 2, cue: 'くすりを のむ', expected: 'くすりを のまなければなりません。', hint: 'Phải uống thuốc.' },
      { id: 'g22-ra-3', number: 3, cue: 'はやく おきる', expected: 'はやく おきなければなりません。', hint: 'Phải dậy sớm.' },
    ],
  },

  // ============================================================
  // Bài 16: g23 — ～たことがあります (Have done before)
  // ============================================================
  {
    id: 'g23-renshuu-a',
    drillType: 'substitution',
    grammarId: 'g23',
    title: 'Renshuu A — Kinh nghiệm',
    titleJa: '練習A',
    description: 'Thay thế kinh nghiệm đã làm.',
    example: { japanese: 'わたしは ふじさんに のぼったことが あります。', meaning: 'Tôi đã từng leo núi Phú Sĩ.' },
    items: [
      { id: 'g23-ra-1', number: 1, cue: 'にほんへ いく', expected: 'わたしは にほんへ いったことが あります。', hint: 'Đã từng đi Nhật.' },
      { id: 'g23-ra-2', number: 2, cue: 'すしを たべる', expected: 'わたしは すしを たべたことが あります。', hint: 'Đã từng ăn sushi.' },
      { id: 'g23-ra-3', number: 3, cue: 'えいがを みる', expected: 'わたしは えいがを みたことが あります。', hint: 'Đã từng xem phim.' },
      { id: 'g23-ra-4', number: 4, cue: 'うみで およぐ', expected: 'わたしは うみで およいだことが あります。', hint: 'Đã từng bơi ở biển.' },
    ],
  },
  {
    id: 'g23-renshuu-b',
    drillType: 'transformation',
    grammarId: 'g23',
    title: 'Renshuu B — Hỏi kinh nghiệm',
    titleJa: '練習B',
    description: 'Hỏi về kinh nghiệm và trả lời.',
    example: { japanese: 'にほんへ いったことが ありますか。-- はい、あります。', meaning: 'Bạn đã từng đi Nhật chưa? -- Vâng, rồi.' },
    items: [
      { id: 'g23-rb-1', number: 1, cue: 'きょうとへ いく', expected: 'きょうとへ いったことが ありますか。-- はい、あります。', hint: 'Đã từng đi Kyoto?' },
      { id: 'g23-rb-2', number: 2, cue: 'なまはしを つくる', expected: 'なまはしを つくったことが ありますか。-- いいえ、ありません。', hint: 'Đã từng làm đũa?' },
    ],
  },

  // ============================================================
  // Bài 17: g24 — ～たり～たりします (Do things like ~)
  // ============================================================
  {
    id: 'g24-renshuu-a',
    drillType: 'sentence-construction',
    grammarId: 'g24',
    title: 'Renshuu A — Liệt kê',
    titleJa: '練習A',
    description: 'Kết hợp nhiều việc với ～たり～たり.',
    example: { japanese: 'にちようびは ほんを よんだり テレビを みたりします。', meaning: 'Chủ nhật tôi đọc sách, xem TV...' },
    items: [
      { id: 'g24-ra-1', number: 1, cue: 'たべたり のんだりする', expected: 'しゅうまつは たべたり のんだりします。', hint: 'Cuối tuần ăn uống...' },
      { id: 'g24-ra-2', number: 2, cue: 'かいたり よんだりする', expected: 'がっこうで かいたり よんだりします。', hint: 'Ở trường viết, đọc...' },
      { id: 'g24-ra-3', number: 3, cue: 'おきたり ねたりする', expected: 'やすみは おきたり ねたりします。', hint: 'Ngày nghỉ dậy, ngủ...' },
    ],
  },

  // ============================================================
  // Bài 18: g25 — ～ましょう (Let's do)
  // ============================================================
  {
    id: 'g25-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g25',
    title: 'Renshuu A — Mời gọi',
    titleJa: '練習A',
    description: 'Chuyển thành lời mời ～ましょう.',
    example: { japanese: 'いっしょに たべましょう。', meaning: 'Cùng ăn nào.' },
    items: [
      { id: 'g25-ra-1', number: 1, cue: 'いきましよう', expected: 'いっしょに いきましょう。', hint: 'Cùng đi nào.' },
      { id: 'g25-ra-2', number: 2, cue: 'みましよう', expected: 'いっしょに みましょう。', hint: 'Cùng xem nào.' },
      { id: 'g25-ra-3', number: 3, cue: 'あそましよう', expected: 'いっしょに あそびましょう。', hint: 'Cùng chơi nào.' },
    ],
  },

  // ============================================================
  // Bài 18: g26 — ～ませんか (Won't you do?)
  // ============================================================
  {
    id: 'g26-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g26',
    title: 'Renshuu A — Lời mời',
    titleJa: '練習A',
    description: 'Chuyển thành lời mời ～ませんか.',
    example: { japanese: 'いっしょに えいがを みませんか。', meaning: 'Cùng xem phim không?' },
    items: [
      { id: 'g26-ra-1', number: 1, cue: 'コーヒーを のむ', expected: 'いっしょに コーヒーを のみませんか。', hint: 'Cùng uống cà phê không?' },
      { id: 'g26-ra-2', number: 2, cue: 'さんぽする', expected: 'いっしょに さんぽしませんか。', hint: 'Cùng đi dạo không?' },
      { id: 'g26-ra-3', number: 3, cue: 'りょこうする', expected: 'いっしょに りょこうしませんか。', hint: 'Cùng du lịch không?' },
    ],
  },

  // ============================================================
  // Bài 19: g27 — ～たら (If/When)
  // ============================================================
  {
    id: 'g27-renshuu-a',
    drillType: 'sentence-construction',
    grammarId: 'g27',
    title: 'Renshuu A — Điều kiện',
    titleJa: '練習A',
    description: 'Xây dựng câu điều kiện ～たら.',
    example: { japanese: 'あめが ふったら、いきません。', meaning: 'Nếu mưa thì không đi.' },
    items: [
      { id: 'g27-ra-1', number: 1, cue: 'やすかったら、かう', expected: 'やすかったら、かいます。', hint: 'Nếu rẻ thì mua.' },
      { id: 'g27-ra-2', number: 2, cue: 'ひまだったら、あそぶ', expected: 'ひまだったら、あそびます。', hint: 'Nếu rảnh thì chơi.' },
      { id: 'g27-ra-3', number: 3, cue: 'びょうきだったら、やすむ', expected: 'びょうきだったら、やすみます。', hint: 'Nếu ốm thì nghỉ.' },
    ],
  },

  // ============================================================
  // Bài 20: g28 — ～と (Whenever ~)
  // ============================================================
  {
    id: 'g28-renshuu-a',
    drillType: 'sentence-construction',
    grammarId: 'g28',
    title: 'Renshuu A — Hệ quả tự nhiên',
    titleJa: '練習A',
    description: 'Xây dựng câu hệ quả với ～と.',
    example: { japanese: 'ふゆに なると、さむく なります。', meaning: 'Hễ vào đông thì trời lạnh.' },
    items: [
      { id: 'g28-ra-1', number: 1, cue: 'あきになる / すずしい', expected: 'あきに なると、すずしく なります。', hint: 'Hễ vào thu thì mát.' },
      { id: 'g28-ra-2', number: 2, cue: 'このボタンをおす / でんがつく', expected: 'このボタンを おすと、でんが つきます。', hint: 'Hễ nhấn nút thì đèn sáng.' },
    ],
  },

  // ============================================================
  // Bài 20: g29 — ～ば (If conditional)
  // ============================================================
  {
    id: 'g29-renshuu-a',
    drillType: 'sentence-construction',
    grammarId: 'g29',
    title: 'Renshuu A — Điều kiện ～ば',
    titleJa: '練習A',
    description: 'Xây dựng câu điều kiện với ～ば.',
    example: { japanese: 'やすければ、かいます。', meaning: 'Nếu rẻ thì mua.' },
    items: [
      { id: 'g29-ra-1', number: 1, cue: 'べんり / かう', expected: 'べんりならば、かいます。', hint: 'Nếu tiện lợi thì mua.' },
      { id: 'g29-ra-2', number: 2, cue: 'しずか / すむ', expected: 'しずかであれば、すみます。', hint: 'Nếu yên tĩnh thì sống.' },
      { id: 'g29-ra-3', number: 3, cue: 'たのしい / あそぶ', expected: 'たのしければ、あそびます。', hint: 'Nếu vui thì chơi.' },
    ],
  },

  // ============================================================
  // Bài 21: g60 — ～なければならない (Obligation)
  // ============================================================
  {
    id: 'g60-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g60',
    title: 'Renshuu A — Nghĩa vụ',
    titleJa: '練習A',
    description: 'Chuyển thành câu bắt buộc ～なければならない.',
    example: { japanese: 'あした までに かえらなければなりません。', meaning: 'Phải về trước ngày mai.' },
    items: [
      { id: 'g60-ra-1', number: 1, cue: 'しゅくだいを だす', expected: 'しゅくだいを ださなければなりません。', hint: 'Phải nộp bài tập.' },
      { id: 'g60-ra-2', number: 2, cue: 'びょういんへ いく', expected: 'びょういんへ いかなければなりません。', hint: 'Phải đi bệnh viện.' },
      { id: 'g60-ra-3', number: 3, cue: 'べんきょうする', expected: 'べんきょうしなければなりません。', hint: 'Phải học.' },
    ],
  },

  // ============================================================
  // Bài 22: g30 — ～とおもいます (I think that)
  // ============================================================
  {
    id: 'g30-renshuu-a',
    drillType: 'substitution',
    grammarId: 'g30',
    title: 'Renshuu A — Ý kiến',
    titleJa: '練習A',
    description: 'Thêm ～とおもいます để bày tỏ ý kiến.',
    example: { japanese: 'あしたは あめだと おもいます。', meaning: 'Tôi nghĩ mai mưa.' },
    items: [
      { id: 'g30-ra-1', number: 1, cue: 'かれは くる', expected: 'かれは くると おもいます。', hint: 'Tôi nghĩ anh ấy sẽ đến.' },
      { id: 'g30-ra-2', number: 2, cue: 'このほんは おもしろい', expected: 'このほんは おもしろいと おもいます。', hint: 'Tôi nghĩ sách này thú vị.' },
      { id: 'g30-ra-3', number: 3, cue: 'にほんごは むずかしい', expected: 'にほんごは むずかしいと おもいます。', hint: 'Tôi nghĩ tiếng Nhật khó.' },
    ],
  },
  {
    id: 'g30-renshuu-b',
    drillType: 'transformation',
    grammarId: 'g30',
    title: 'Renshuu B — Hỏi ý kiến',
    titleJa: '練習B',
    description: 'Hỏi ý kiến và trả lời.',
    example: { japanese: 'どう おもいますか。-- いいと おもいます。', meaning: 'Bạn nghĩ sao? -- Tôi nghĩ tốt.' },
    items: [
      { id: 'g30-rb-1', number: 1, cue: 'つよい', expected: 'どう おもいますか。-- つよいと おもいます。', hint: 'Mạnh đấy.' },
      { id: 'g30-rb-2', number: 2, cue: 'むり', expected: 'どう おもいますか。-- むりだと おもいます。', hint: 'Không thể đâu.' },
    ],
  },

  // ============================================================
  // Bài 22: g31 — ～といいます (Say that)
  // ============================================================
  {
    id: 'g31-renshuu-a',
    drillType: 'substitution',
    grammarId: 'g31',
    title: 'Renshuu A — Tường thuật',
    titleJa: '練習A',
    description: 'Thêm ～といいます để tường thuật.',
    example: { japanese: 'せんせいは あしたテストだと いいました。', meaning: 'Thầy nói mai có kiểm tra.' },
    items: [
      { id: 'g31-ra-1', number: 1, cue: 'ともだちは くる', expected: 'ともだちは くると いいました。', hint: 'Bạn nói sẽ đến.' },
      { id: 'g31-ra-2', number: 2, cue: 'かれは いそがしい', expected: 'かれは いそがしいと いいました。', hint: 'Anh ấy nói bận.' },
      { id: 'g31-ra-3', number: 3, cue: 'やすみは あさからだ', expected: 'やすみは あさからだ と いいました。', hint: 'Nghỉ từ sáng.' },
    ],
  },

  // ============================================================
  // Bài 23: g32 — ～られます (Passive)
  // ============================================================
  {
    id: 'g32-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g32',
    title: 'Renshuu A — Bị động',
    titleJa: '練習A',
    description: 'Chuyển sang thể bị động ～られる.',
    example: { japanese: 'どろぼうに くるまを ぬすまれました。', meaning: 'Bị trộm lấy xe.' },
    items: [
      { id: 'g32-ra-1', number: 1, cue: 'せんせいに ほめられる', expected: 'せんせいに ほめられました。', hint: 'Được thầy khen.' },
      { id: 'g32-ra-2', number: 2, cue: 'ともだちに わらわれる', expected: 'ともだちに わらわれました。', hint: 'Bị bạn cười.' },
      { id: 'g32-ra-3', number: 3, cue: 'ねこに かまれる', expected: 'ねこに かまれました。', hint: 'Bị mèo cắn.' },
    ],
  },

  // ============================================================
  // Bài 24: g33 — ～させます (Causative)
  // ============================================================
  {
    id: 'g33-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g33',
    title: 'Renshuu A — Sai khiến',
    titleJa: '練習A',
    description: 'Chuyển sang thể sai khiến ～させる.',
    example: { japanese: 'こどもに やさいを たべさせます。', meaning: 'Bắt trẻ con ăn rau.' },
    items: [
      { id: 'g33-ra-1', number: 1, cue: 'がくせいに べんきょうさせる', expected: 'がくせいに べんきょうさせます。', hint: 'Bắt học sinh học.' },
      { id: 'g33-ra-2', number: 2, cue: 'こどもに ねかせる', expected: 'こどもに ねかせます。', hint: 'Cho trẻ ngủ.' },
      { id: 'g33-ra-3', number: 3, cue: 'いもうとに かいものさせる', expected: 'いもうとに かいものさせます。', hint: 'Bắt em gái đi mua sắm.' },
    ],
  },

  // ============================================================
  // Bài 26: g34 — ～ています (State of being)
  // ============================================================
  {
    id: 'g34-renshuu-a',
    drillType: 'substitution',
    grammarId: 'g34',
    title: 'Renshuu A — Trạng thái',
    titleJa: '練習A',
    description: 'Thay thế trạng thái ～している.',
    example: { japanese: 'かれは けっこんしています。', meaning: 'Anh ấy đã kết hôn.' },
    items: [
      { id: 'g34-ra-1', number: 1, cue: 'めがを かける', expected: 'めがを かけています。', hint: 'Đeo kính.' },
      { id: 'g34-ra-2', number: 2, cue: 'やせている', expected: 'やせています。', hint: 'Gầy.' },
      { id: 'g34-ra-3', number: 3, cue: 'ふとっている', expected: 'ふとっています。', hint: 'Mập.' },
    ],
  },

  // ============================================================
  // Bài 27: g35 — ～そうです (Hearsay)
  // ============================================================
  {
    id: 'g35-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g35',
    title: 'Renshuu A — Tin tức',
    titleJa: '練習A',
    description: 'Chuyển thành câu tường thuật ～そうです.',
    example: { japanese: 'あしたは あめだそうです。', meaning: 'Nghe nói mai mưa.' },
    items: [
      { id: 'g35-ra-1', number: 1, cue: 'あつい', expected: 'あついですって。', hint: 'Nghe nói nóng.' },
      { id: 'g35-ra-2', number: 2, cue: 'テストがある', expected: 'テストがあるそうです。', hint: 'Nghe nói có kiểm tra.' },
      { id: 'g35-ra-3', number: 3, cue: 'やすみになる', expected: 'やすみになるそうです。', hint: 'Nghe nói được nghỉ.' },
    ],
  },

  // ============================================================
  // Bài 28: g36 — ～ようです (It seems)
  // ============================================================
  {
    id: 'g36-renshuu-a',
    drillType: 'substitution',
    grammarId: 'g36',
    title: 'Renshuu A — Suy đoán',
    titleJa: '練習A',
    description: 'Thêm ～ようです để suy đoán.',
    example: { japanese: 'あめが ふるようです。', meaning: 'Có vẻ như trời mưa.' },
    items: [
      { id: 'g36-ra-1', number: 1, cue: 'かれはびょうき', expected: 'かれはびょうきのようです。', hint: 'Có vẻ anh ấy ốm.' },
      { id: 'g36-ra-2', number: 2, cue: 'あしたははれ', expected: 'あしたははれのようです。', hint: 'Có vẻ mai nắng.' },
      { id: 'g36-ra-3', number: 3, cue: 'むずかしい', expected: 'むずかしいようです。', hint: 'Có vẻ khó.' },
    ],
  },

  // ============================================================
  // Bài 28: g37 — ～らしいです (I hear / It seems)
  // ============================================================
  {
    id: 'g37-renshuu-a',
    drillType: 'substitution',
    grammarId: 'g37',
    title: 'Renshuu A — Nghe nói',
    titleJa: '練習A',
    description: 'Thêm ～らしいで để nghe nói.',
    example: { japanese: 'あしたは ゆきだそうです。', meaning: 'Nghe nói mai có tuyết.' },
    items: [
      { id: 'g37-ra-1', number: 1, cue: 'ともだちは けっこんする', expected: 'ともだちは けっこんするらしいです。', hint: 'Nghe nói bạn kết hôn.' },
      { id: 'g37-ra-2', number: 2, cue: 'あのえいがは おもしろい', expected: 'あのえいがは おもしろいらしいです。', hint: 'Nghe nói phim hay.' },
      { id: 'g37-ra-3', number: 3, cue: 'しけんは むずかしい', expected: 'しけんは むずかしいらしいです。', hint: 'Nghe nói thi khó.' },
    ],
  },

  // ============================================================
  // Bài 30: g38 — ～かもしれません (Might)
  // ============================================================
  {
    id: 'g38-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g38',
    title: 'Renshuu A — Khả năng',
    titleJa: '練習A',
    description: 'Chuyển thành câu khả năng ～かもしれません.',
    example: { japanese: 'あしたは あめかもしれません。', meaning: 'Mai có thể mưa.' },
    items: [
      { id: 'g38-ra-1', number: 1, cue: 'かれは しらない', expected: 'かれは しらないかもしれません。', hint: 'Anh ấy có thể không biết.' },
      { id: 'g38-ra-2', number: 2, cue: 'おくれる', expected: 'おくれるかもしれません。', hint: 'Có thể trễ.' },
      { id: 'g38-ra-3', number: 3, cue: 'テストは かんたん', expected: 'テストは かんたんなのかもしれません。', hint: 'Bài thi có thể dễ.' },
    ],
  },

  // ============================================================
  // Bài 31: g39 — ～てしまう (Complete / Regret)
  // ============================================================
  {
    id: 'g39-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g39',
    title: 'Renshuu A — Hoàn thành',
    titleJa: '練習A',
    description: 'Chuyển thành câu hoàn thành ～てしまう.',
    example: { japanese: 'しゅくだいを ぜんぶ やってしまいました。', meaning: 'Tôi đã làm hết bài tập rồi.' },
    items: [
      { id: 'g39-ra-1', number: 1, cue: 'ほんを よむ', expected: 'ほんを よんでしまいました。', hint: 'Đọc xong sách rồi.' },
      { id: 'g39-ra-2', number: 2, cue: 'でんわを わすれる', expected: 'でんわを わすれてしまいました。', hint: 'Quên mất điện thoại.' },
      { id: 'g39-ra-3', number: 3, cue: 'おかねを おとす', expected: 'おかねを おとしてしまいました。', hint: 'Làm rơi mất tiền.' },
    ],
  },

  // ============================================================
  // Bài 33: g40 — ～ことにする (Decide to do)
  // ============================================================
  {
    id: 'g40-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g40',
    title: 'Renshuu A — Quyết định',
    titleJa: '練習A',
    description: 'Chuyển thành câu quyết định cá nhân.',
    example: { japanese: 'まいにち うんどうすることにしました。', meaning: 'Tôi quyết định tập thể dục mỗi ngày.' },
    items: [
      { id: 'g40-ra-1', number: 1, cue: 'にほんへ いく', expected: 'にほんへ いくことにしました。', hint: 'Quyết định đi Nhật.' },
      { id: 'g40-ra-2', number: 2, cue: 'たばこを すわない', expected: 'たばこを すわないことにしました。', hint: 'Quyết định không hút thuốc.' },
      { id: 'g40-ra-3', number: 3, cue: 'はやく ねる', expected: 'はやく ねることにしました。', hint: 'Quyết định ngủ sớm.' },
    ],
  },

  // ============================================================
  // Bài 33: g41 — ～ことになる (It has been decided)
  // ============================================================
  {
    id: 'g41-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g41',
    title: 'Renshuu A — Được quyết định',
    titleJa: '練習A',
    description: 'Chuyển thành câu bị động quyết định.',
    example: { japanese: 'らいしゅう しけんが あることになりました。', meaning: 'Đã quyết định tuần sau có thi.' },
    items: [
      { id: 'g41-ra-1', number: 1, cue: 'てんしゃする', expected: 'てんしゃすることになりました。', hint: 'Đã quyết định chuyển chỗ.' },
      { id: 'g41-ra-2', number: 2, cue: 'かいぎが ちゅうしになる', expected: 'かいぎが ちゅうしになることになりました。', hint: 'Đã quyết định hủy họp.' },
    ],
  },

  // ============================================================
  // Bài 34: g42 — ～てあげる (Do for someone)
  // ============================================================
  {
    id: 'g42-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g42',
    title: 'Renshuu A — Làm cho ai',
    titleJa: '練習A',
    description: 'Chuyển thành câu làm việc gì cho ai.',
    example: { japanese: 'ともだちの にもつを もってあげました。', meaning: 'Tôi đã mang đồ giúp bạn.' },
    items: [
      { id: 'g42-ra-1', number: 1, cue: 'いもうとに しょくじを つくる', expected: 'いもうとに しょくじを つくってあげました。', hint: 'Nấu ăn cho em gái.' },
      { id: 'g42-ra-2', number: 2, cue: 'ともだちに でんわを おしえる', expected: 'ともだちに でんわを おしえてあげました。', hint: 'Dạy bạn gọi điện.' },
      { id: 'g42-ra-3', number: 3, cue: 'せんせいに にもつを はこぶ', expected: 'せんせいに にもつを はこんであげました。', hint: 'Mang đồ giúp thầy.' },
    ],
  },

  // ============================================================
  // Bài 34: g43 — ～てもらう (Receive action)
  // ============================================================
  {
    id: 'g43-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g43',
    title: 'Renshuu A — Được ai làm cho',
    titleJa: '練習A',
    description: 'Chuyển thành câu được nhận hành động.',
    example: { japanese: 'ともだちに にもつを もってもらいました。', meaning: 'Tôi được bạn mang đồ giúp.' },
    items: [
      { id: 'g43-ra-1', number: 1, cue: 'せんせいに にほんごを おしえてもらう', expected: 'せんせいに にほんごを おしえてもらいました。', hint: 'Được thầy dạy tiếng Nhật.' },
      { id: 'g43-ra-2', number: 2, cue: 'ともだちに てつだってもらう', expected: 'ともだちに てつだってもらいました。', hint: 'Được bạn giúp đỡ.' },
      { id: 'g43-ra-3', number: 3, cue: 'いぬに かんでもらう', expected: 'いぬに かんでもらいました。', hint: 'Bị chó cắn.' },
    ],
  },

  // ============================================================
  // Bài 34: g44 — ～てくれる (Someone does for me)
  // ============================================================
  {
    id: 'g44-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g44',
    title: 'Renshuu A — Ai làm cho mình',
    titleJa: '練習A',
    description: 'Chuyển thành câu ai đó làm cho mình.',
    example: { japanese: 'ともだちが きて くれました。', meaning: 'Bạn đã đến với tôi.' },
    items: [
      { id: 'g44-ra-1', number: 1, cue: 'せんせいが おしえてくれる', expected: 'せんせいが おしえてくれました。', hint: 'Thầy đã dạy cho.' },
      { id: 'g44-ra-2', number: 2, cue: 'ともだちが てつだってくれる', expected: 'ともだちが てつだってくれました。', hint: 'Bạn đã giúp đỡ.' },
      { id: 'g44-ra-3', number: 3, cue: 'ははが つくってくれる', expected: 'ははが つくってくれました。', hint: 'Mẹ đã làm cho.' },
    ],
  },

  // ============================================================
  // Bài 35: g45 — ～すぎる (Too much)
  // ============================================================
  {
    id: 'g45-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g45',
    title: 'Renshuu A — Quá mức',
    titleJa: '練習A',
    description: 'Chuyển thành câu quá mức ～すぎる.',
    example: { japanese: 'このりんごは おおすぎます。', meaning: 'Quả táo này to quá.' },
    items: [
      { id: 'g45-ra-1', number: 1, cue: 'たべる', expected: 'たべすぎました。', hint: 'Ăn quá nhiều.' },
      { id: 'g45-ra-2', number: 2, cue: 'のむ', expected: 'のみすぎました。', hint: 'Uống quá nhiều.' },
      { id: 'g45-ra-3', number: 3, cue: 'ねる', expected: 'ねすぎました。', hint: 'Ngủ quá nhiều.' },
      { id: 'g45-ra-4', number: 4, cue: 'あつい', expected: 'あつすぎます。', hint: 'Nóng quá.' },
    ],
  },

  // ============================================================
  // Bài 36: g46 — ～ようにする (Try to / Make sure)
  // ============================================================
  {
    id: 'g46-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g46',
    title: 'Renshuu A — Cố gắng',
    titleJa: '練習A',
    description: 'Chuyển thành câu cố gắng làm.',
    example: { japanese: 'まいにち うんどうするようにしています。', meaning: 'Tôi cố gắng tập thể dục mỗi ngày.' },
    items: [
      { id: 'g46-ra-1', number: 1, cue: 'はやく ねる', expected: 'はやく ねるようにしています。', hint: 'Cố gắng ngủ sớm.' },
      { id: 'g46-ra-2', number: 2, cue: 'あさごはんを たべる', expected: 'あさごはんを たべるようにしています。', hint: 'Cố gắng ăn sáng.' },
      { id: 'g46-ra-3', number: 3, cue: 'べんきょうする', expected: 'まいにち べんきょうするようにしています。', hint: 'Cố gắng học mỗi ngày.' },
    ],
  },

  // ============================================================
  // Bài 36: g47 — ～ようになる (Come to be able)
  // ============================================================
  {
    id: 'g47-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g47',
    title: 'Renshuu A — Trở nên có thể',
    titleJa: '練習A',
    description: 'Chuyển thành câu trở nên có thể.',
    example: { japanese: 'にほんごが はなせるように なりました。', meaning: 'Tôi đã trở nên nói được tiếng Nhật.' },
    items: [
      { id: 'g47-ra-1', number: 1, cue: 'かなを よめる', expected: 'かなを よめるように なりました。', hint: 'Đã đọc được kana.' },
      { id: 'g47-ra-2', number: 2, cue: 'やせる', expected: 'やせるように なりました。', hint: 'Đã trở nên gầy đi.' },
      { id: 'g47-ra-3', number: 3, cue: 'じどうしゃを うんてんする', expected: 'じどうしゃを うんてんできるように なりました。', hint: 'Đã lái được xe.' },
    ],
  },

  // ============================================================
  // Bài 37: g48 — ～ておく (Do in advance)
  // ============================================================
  {
    id: 'g48-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g48',
    title: 'Renshuu A — Chuẩn bị trước',
    titleJa: '練習A',
    description: 'Chuyển thành câu làm trước ～ておく.',
    example: { japanese: 'しけんまえに べんきょうしておきました。', meaning: 'Tôi đã học trước khi thi.' },
    items: [
      { id: 'g48-ra-1', number: 1, cue: 'くうきを つけておく', expected: 'くうきを つけておきました。', hint: 'Đã bật điều hòa trước.' },
      { id: 'g48-ra-2', number: 2, cue: 'でんわを かけておく', expected: 'でんわを かけておきました。', hint: 'Đã gọi điện trước.' },
      { id: 'g48-ra-3', number: 3, cue: 'りょうりを つくっておく', expected: 'りょうりを つくっておきました。', hint: 'Đã nấu ăn trước.' },
    ],
  },

  // ============================================================
  // Bài 38: g49 — ～のに (Even though)
  // ============================================================
  {
    id: 'g49-renshuu-a',
    drillType: 'sentence-construction',
    grammarId: 'g49',
    title: 'Renshuu A — Mặc dù',
    titleJa: '練習A',
    description: 'Xây dựng câu tương phản với ～のに.',
    example: { japanese: 'べんきょうしたのに、しけんに おちました。', meaning: 'Mặc dù đã học nhưng vẫn trượt.' },
    items: [
      { id: 'g49-ra-1', number: 1, cue: 'やすんだのに、まだつかれる', expected: 'やすんだのに、まだつかれます。', hint: 'Mặc dù nghỉ vẫn mệt.' },
      { id: 'g49-ra-2', number: 2, cue: 'くすりをのんだのに、なおらない', expected: 'くすりをのんだのに、なおりません。', hint: 'Mặc dù uống thuốc không khỏi.' },
      { id: 'g49-ra-3', number: 3, cue: 'あめなのに、でかける', expected: 'あめなのに、でかけます。', hint: 'Mặc dù mưa vẫn ra ngoài.' },
    ],
  },

  // ============================================================
  // Bài 39: g50 — ～はずです (Should be)
  // ============================================================
  {
    id: 'g50-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g50',
    title: 'Renshuu A — Chắc chắn',
    titleJa: '練習A',
    description: 'Chuyển thành câu chắc chắn ～はずです.',
    example: { japanese: 'かれは くるはずです。', meaning: 'Anh ấy chắc chắn sẽ đến.' },
    items: [
      { id: 'g50-ra-1', number: 1, cue: 'みずは あたたかい', expected: 'みずは あたたかいはずです。', hint: 'Nước chắc chắn ấm.' },
      { id: 'g50-ra-2', number: 2, cue: 'しけんは かんたんだ', expected: 'しけんは かんたんなはずです。', hint: 'Bài thi chắc chắn dễ.' },
      { id: 'g50-ra-3', number: 3, cue: 'かれは しっている', expected: 'かれは しっているはずです。', hint: 'Anh ấy chắc chắn biết.' },
    ],
  },

  // ============================================================
  // Bài 40: g51 — ～つもりです (Plan to)
  // ============================================================
  {
    id: 'g51-renshuu-a',
    drillType: 'substitution',
    grammarId: 'g51',
    title: 'Renshuu A — Kế hoạch',
    titleJa: '練習A',
    description: 'Thêm ～つもりで để nói kế hoạch.',
    example: { japanese: 'らいしゅう りょこうするつもりです。', meaning: 'Tôi định đi du lịch tuần sau.' },
    items: [
      { id: 'g51-ra-1', number: 1, cue: 'にほんへ いく', expected: 'らいねん にほんへ いくつもりです。', hint: 'Định đi Nhật năm sau.' },
      { id: 'g51-ra-2', number: 2, cue: 'だいがくに はいる', expected: 'らいねん だいがくに はいるつもりです。', hint: 'Định vào đại học.' },
      { id: 'g51-ra-3', number: 3, cue: 'かいしゃを やめる', expected: 'らいげつ かいしゃを やめるつもりです。', hint: 'Định nghỉ việc tháng sau.' },
    ],
  },

  // ============================================================
  // Bài 41: g52 — ～てみる (Try doing)
  // ============================================================
  {
    id: 'g52-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g52',
    title: 'Renshuu A — Thử làm',
    titleJa: '練習A',
    description: 'Chuyển thành câu thử làm ～てみる.',
    example: { japanese: 'このりょうりを たべてみてください。', meaning: 'Hãy thử ăn món này.' },
    items: [
      { id: 'g52-ra-1', number: 1, cue: 'にほんごで はなす', expected: 'にほんごで はなしてみてください。', hint: 'Hãy thử nói tiếng Nhật.' },
      { id: 'g52-ra-2', number: 2, cue: 'このほんを よむ', expected: 'このほんを よんでみてください。', hint: 'Hãy thử đọc sách này.' },
      { id: 'g52-ra-3', number: 3, cue: 'でんわを かける', expected: 'でんわを かけてみてください。', hint: 'Hãy thử gọi điện.' },
    ],
  },

  // ============================================================
  // Bài 42: g53 — ～そうです (Appearance)
  // ============================================================
  {
    id: 'g53-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g53',
    title: 'Renshuu A — Trông có vẻ',
    titleJa: '練習A',
    description: 'Chuyển thành câu trông có vẻ ～そうです.',
    example: { japanese: 'このケーキは おいしそうです。', meaning: 'Bánh này trông ngon quá.' },
    items: [
      { id: 'g53-ra-1', number: 1, cue: 'たのしい', expected: 'たのしそうです。', hint: 'Trông vui quá.' },
      { id: 'g53-ra-2', number: 2, cue: 'こわい', expected: 'こわそうです。', hint: 'Trông sợ quá.' },
      { id: 'g53-ra-3', number: 3, cue: 'あまい', expected: 'あまそうです。', hint: 'Trông ngọt quá.' },
    ],
  },

  // ============================================================
  // Bài 44: g54 — ～ために (Purpose / Reason)
  // ============================================================
  {
    id: 'g54-renshuu-a',
    drillType: 'sentence-construction',
    grammarId: 'g54',
    title: 'Renshuu A — Mục đích',
    titleJa: '練習A',
    description: 'Xây dựng câu mục đích với ～ために.',
    example: { japanese: 'にほんへ べんきょうするために いきます。', meaning: 'Tôi đi Nhật để học.' },
    items: [
      { id: 'g54-ra-1', number: 1, cue: 'だいがくにはいるために べんきょうする', expected: 'だいがくにはいるために べんきょうします。', hint: 'Học để vào đại học.' },
      { id: 'g54-ra-2', number: 2, cue: 'やすむために しごとを かたづける', expected: 'やすむために しごとを かたづけます。', hint: 'Làm xong việc để nghỉ.' },
    ],
  },

  // ============================================================
  // Bài 45: g55 — ～ように (So that)
  // ============================================================
  {
    id: 'g55-renshuu-a',
    drillType: 'sentence-construction',
    grammarId: 'g55',
    title: 'Renshuu A — Để mà',
    titleJa: '練習A',
    description: 'Xây dựng câu mục đích với ～ように.',
    example: { japanese: 'わすれないように メモしました。', meaning: 'Tôi ghi chú để không quên.' },
    items: [
      { id: 'g55-ra-1', number: 1, cue: 'まにあうように はやくいく', expected: 'まにあうように はやくいきます。', hint: 'Đi nhanh cho kịp.' },
      { id: 'g55-ra-2', number: 2, cue: 'びょうきに ならないように うんどうする', expected: 'びょうきに ならないように うんどうします。', hint: 'Tập thể dục để không ốm.' },
    ],
  },

  // ============================================================
  // Bài 43: g62 — ～といいですね (It would be nice)
  // ============================================================
  {
    id: 'g62-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g62',
    title: 'Renshuu A — Mong ước',
    titleJa: '練習A',
    description: 'Chuyển thành câu ước ～といいですね.',
    example: { japanese: 'あしたは はれるといいですね。', meaning: 'Mai nắng thì tốt nhỉ.' },
    items: [
      { id: 'g62-ra-1', number: 1, cue: 'しけんに ごうかくする', expected: 'しけんに ごうかくするといいですね。', hint: 'Thi đậu thì tốt nhỉ.' },
      { id: 'g62-ra-2', number: 2, cue: 'げんきになる', expected: 'げんきになるといいですね。', hint: 'Khỏe lại thì tốt nhỉ.' },
      { id: 'g62-ra-3', number: 3, cue: 'あんぜんに かえる', expected: 'あんぜんに かえるといいですね。', hint: 'Về an toàn thì tốt nhỉ.' },
    ],
  },

  // ============================================================
  // Bài 43: g63 — ～ほうがいいです (Had better)
  // ============================================================
  {
    id: 'g63-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g63',
    title: 'Renshuu A — Khuyên nhủ',
    titleJa: '練習A',
    description: 'Chuyển thành câu khuyên nhủ ～ほうがいい.',
    example: { japanese: 'びょういんへ いった ほうが いいです。', meaning: 'Bạn nên đi bệnh viện.' },
    items: [
      { id: 'g63-ra-1', number: 1, cue: 'くすりを のむ', expected: 'くすりを のんだ ほうが いいです。', hint: 'Nên uống thuốc.' },
      { id: 'g63-ra-2', number: 2, cue: 'もっと べんきょうする', expected: 'もっと べんきょうした ほうが いいです。', hint: 'Nên học nhiều hơn.' },
      { id: 'g63-ra-3', number: 3, cue: 'たばこを やめる', expected: 'たばこを やめた ほうが いいです。', hint: 'Nên bỏ thuốc.' },
    ],
  },

  // ============================================================
  // Bài 47: g56 — お/ご～になります (Honorific)
  // ============================================================
  {
    id: 'g56-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g56',
    title: 'Renshuu A — Tôn kính',
    titleJa: '練習A',
    description: 'Chuyển sang thể tôn kính お/ご～になります.',
    example: { japanese: 'せんせいは おかえりに なりました。', meaning: 'Thầy đã trở về.' },
    items: [
      { id: 'g56-ra-1', number: 1, cue: 'いく', expected: 'せんせいは いかれました。', hint: 'Thầy đã đi.' },
      { id: 'g56-ra-2', number: 2, cue: 'しる', expected: 'せんせいは ごぞんじです。', hint: 'Thầy biết.' },
      { id: 'g56-ra-3', number: 3, cue: 'たべる', expected: 'せんせいは めしあがりました。', hint: 'Thầy đã ăn.' },
    ],
  },

  // ============================================================
  // Bài 48: g57 — お/ご～します (Humble)
  // ============================================================
  {
    id: 'g57-renshuu-a',
    drillType: 'transformation',
    grammarId: 'g57',
    title: 'Renshuu A — Khiêm nhường',
    titleJa: '練習A',
    description: 'Chuyển sang thể khiêm nhường お/ご～します.',
    example: { japanese: 'おでかけします。', meaning: 'Tôi sẽ đi ra ngoài.' },
    items: [
      { id: 'g57-ra-1', number: 1, cue: 'もつ', expected: 'おもちします。', hint: 'Tôi sẽ mang.' },
      { id: 'g57-ra-2', number: 2, cue: 'あんないする', expected: 'ごあんないします。', hint: 'Tôi sẽ hướng dẫn.' },
      { id: 'g57-ra-3', number: 3, cue: 'せつめいする', expected: 'ごせつめいします。', hint: 'Tôi sẽ giải thích.' },
    ],
  },
];

export function getDrillsForLesson(grammarIds: string[]): DrillSet[] {
  const idSet = new Set(grammarIds);
  return grammarDrills.filter((d) => idSet.has(d.grammarId));
}

export function getDrillsForGrammar(grammarId: string): DrillSet[] {
  return grammarDrills.filter((d) => d.grammarId === grammarId);
}
