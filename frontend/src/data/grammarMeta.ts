export interface GrammarMeta {
  id: string;
  sectionTitle: string;
  structure?: {
    headers?: string[];
    rows: { label: string; affirmative: string; negative?: string }[];
  };
  meaning?: {
    affirmative: string;
    negative?: string;
  };
  notes?: string[];
}

export const grammarMeta: Record<string, GrammarMeta> = {

  // ============================================================
  // Bài 1-3: Giới thiệu cơ bản
  // ============================================================

  g1: {
    id: 'g1',
    sectionTitle: 'Phần 1: Khẳng định và phủ định của một danh từ',
    structure: {
      headers: ['', 'Khẳng định', 'Phủ định'],
      rows: [
        { label: 'N', affirmative: 'N です', negative: 'N ではありません' },
        { label: 'N', affirmative: '', negative: 'N じゃありません' },
      ],
    },
    meaning: {
      affirmative: 'Khẳng định: là~',
      negative: 'Phủ định: không phải là~',
    },
    notes: [
      '※ です — Danh từ đi cùng です để cấu thành vị ngữ. です vừa biểu thị phán đoán, khẳng định vừa biểu thị thái độ lịch sự đối với người nghe.',
      '※ じゃありません — thường được dùng trong hội thoại hàng ngày. では ありません thường được dùng trong các bài phát biểu hay văn viết.',
    ],
  },

  g2: {
    id: 'g2',
    sectionTitle: 'Phần 2: Trợ từ は',
    notes: [
      '※ は — trợ từ đánh dấu chủ đề. Đứng sau danh từ làm chủ ngữ của câu, phát âm là [わ] chứ không phải [は].',
      '※ わたしは — "Tôi thì..." dùng は để giới thiệu chủ đề, sau đó là thông tin về chủ đề đó.',
    ],
  },

  g3: {
    id: 'g3',
    sectionTitle: 'Phần 3: Câu nghi vấn',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'N', affirmative: 'N ですか。' },
      ],
    },
    meaning: {
      affirmative: 'Câu hỏi: A có phải là B không?',
    },
    notes: [
      '※ か — đặt ở cuối câu để biến câu khẳng định thành câu nghi vấn. Trong văn nói thường có thể lược bỏ か.',
      '※ はい／いいえ — dùng để trả lời câu hỏi nghi vấn. はい = đúng/vâng, いいえ = không.',
    ],
  },

  g4: {
    id: 'g4',
    sectionTitle: 'Phần 4: Trợ từ も',
    notes: [
      '※ も — cũng, cũng vậy. Thay thế は trong câu khẳng định để diễn đạt "cũng là".',
      '※ わたしも — "Tôi cũng vậy". Dùng も khi người nói muốn nói mình cũng giống như người trước.',
    ],
  },

  g5: {
    id: 'g5',
    sectionTitle: 'Phần 5: Trợ từ の',
    notes: [
      '※ の — của, thuộc về. Nối hai danh từ, danh từ phía trước bổ nghĩa cho danh từ phía sau.',
      '※ わたしのなまえ — "Tên của tôi". Dùng の để biểu thị sở hữu hoặc quan hệ bổ nghĩa.',
    ],
  },

  g6: {
    id: 'g6',
    sectionTitle: 'Phần 6: Hỏi tuổi',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Hỏi', affirmative: 'おいくつですか。' },
        { label: 'Trả lời', affirmative: 'N さいです。' },
      ],
    },
    meaning: {
      affirmative: 'Hỏi tuổi: Bạn bao nhiêu tuổi?',
    },
    notes: [
      '※ おいくつですか — cách hỏi tuổi lịch sự. お là tiếp đầu ngữ kính ngữ.',
      '※ さい — tuổi, đơn vị đếm tuổi trong tiếng Nhật. 20さい = 20 tuổi.',
    ],
  },

  g7: {
    id: 'g7',
    sectionTitle: 'Phần 7: ～さん、～ちゃん',
    notes: [
      '※ さん — hậu tố lịch sự gắn sau tên người, tương đương "anh/chị/ông/bà". Dùng phổ biến nhất.',
      '※ ちゃん — hậu tố thân mật, thường dùng cho trẻ em, người thân, hoặc người quen thân.',
      '※ くん — hậu tố dùng cho nam giới trẻ tuổi hoặc người dưới cấp.',
      '※ Không bao giờ dùng hậu tố cho chính mình.',
    ],
  },

  // ============================================================
  // Bài 4: Tân ngữ + động từ
  // ============================================================

  g8: {
    id: 'g8',
    sectionTitle: 'Bài 4: Trợ từ を — Tân ngữ trực tiếp',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Tân ngữ', affirmative: 'N を V ます。' },
      ],
    },
    meaning: {
      affirmative: 'Làm hành động V với tân ngữ N.',
    },
    notes: [
      '※ を (お) — trợ từ đánh dấu tân ngữ trực tiếp của động từ. Đứng giữa tân ngữ và động từ.',
      '※ ほんをよみます — "Đọc sách". を nối tân ngữ (本) với động từ (読みます).',
      '※ Phát âm của を là [お] chứ không phải [を].',
    ],
  },

  // ============================================================
  // Bài 5: Thời gian, địa điểm, phương tiện
  // ============================================================

  g9: {
    id: 'g9',
    sectionTitle: 'Bài 5: Trợ từ に — Thời gian / Địa điểm đến',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Thời gian', affirmative: 'N(時) に V ます。' },
        { label: 'Địa điểm', affirmative: 'N(場所) に 行きます／来ます／帰ります。' },
      ],
    },
    meaning: {
      affirmative: 'Làm V vào lúc N (thời gian) hoặc đến N (địa điểm).',
    },
    notes: [
      '※ に — chỉ thời điểm cụ thể: ろくじに (vào lúc 6 giờ).',
      '※ に — chỉ điểm đến: がっこうにいきます (đi đến trường).',
      '※ Với các từ chỉ thời gian như きょう、まいにち、らいしゅう thì KHÔNG dùng に.',
    ],
  },

  g10: {
    id: 'g10',
    sectionTitle: 'Bài 5: Trợ từ で — Phương tiện / Địa điểm hành động',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Phương tiện', affirmative: 'N で V ます。' },
        { label: 'Địa điểm', affirmative: 'N(場所) で V ます。' },
      ],
    },
    meaning: {
      affirmative: 'Làm V bằng phương tiện N hoặc tại địa điểm N.',
    },
    notes: [
      '※ で — chỉ phương tiện: バスでいきます (đi bằng xe buýt).',
      '※ で — chỉ địa điểm diễn ra hành động: としょかんでべんきょうします (học ở thư viện).',
      '※ Phân biệt で (địa điểm hành động) với に (điểm đến).',
    ],
  },

  // ============================================================
  // Bài 6: Tồn tại (đồ vật / người)
  // ============================================================

  g11: {
    id: 'g11',
    sectionTitle: 'Bài 6: あります — Có (đồ vật)',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Tồn tại', affirmative: 'N が あります。' },
      ],
    },
    meaning: {
      affirmative: 'Có N (đồ vật, sự vật — không có sự sống).',
    },
    notes: [
      '※ あります — diễn tả sự tồn tại của đồ vật, cây cối, sự vật vô tri.',
      '※ が — trợ từ đánh dấu chủ ngữ. Đứng trước あります.',
      '※ つくえのうえにほんがあります — "Có quyển sách ở trên bàn".',
      '※ Phủ định: ありません (không có).',
    ],
  },

  g12: {
    id: 'g12',
    sectionTitle: 'Bài 6: います — Có (người, động vật)',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Tồn tại', affirmative: 'N が います。' },
      ],
    },
    meaning: {
      affirmative: 'Có N (người, động vật — có sự sống).',
    },
    notes: [
      '※ います — diễn tả sự tồn tại của người, động vật (có sự sống).',
      '※ が — trợ từ đánh dấu chủ ngữ.',
      '※ へやにねこがいます — "Có con mèo ở trong phòng".',
      '※ Phủ định: いません (không có).',
      '※ Phân biệt: あります (đồ vật) vs います (người, động vật).',
    ],
  },

  // ============================================================
  // Bài 7: Địa điểm, vị trí
  // ============================================================

  g13: {
    id: 'g13',
    sectionTitle: 'Bài 7: ～はどこですか — Hỏi địa điểm',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Hỏi', affirmative: 'N は どこですか。' },
        { label: 'Trả lời', affirmative: 'N は N の ちかく／となり／うえ／した です。' },
      ],
    },
    meaning: {
      affirmative: 'Hỏi địa điểm: N ở đâu?',
    },
    notes: [
      '※ どこ — từ nghi vấn hỏi địa điểm.',
      '※ ちかく — gần, となり — cạnh, うえ — trên, した — dưới, みぎ — phải, ひだり — trái.',
    ],
  },

  g14: {
    id: 'g14',
    sectionTitle: 'Bài 7: ～のうしろ／まえ／となり — Vị trí tương đối',
    structure: {
      headers: ['', 'Ý nghĩa'],
      rows: [
        { label: 'まえ', affirmative: 'trước' },
        { label: 'うしろ', affirmative: 'sau' },
        { label: 'となり', affirmative: 'cạnh' },
        { label: 'みぎ', affirmative: 'bên phải' },
        { label: 'ひだり', affirmative: 'bên trái' },
        { label: 'あいだ', affirmative: 'giữa' },
        { label: 'ちかく', affirmative: 'gần' },
      ],
    },
    meaning: {
      affirmative: 'Biểu thị vị trí tương đối giữa hai địa điểm.',
    },
    notes: [
      '※ N の まえ — phía trước N. びょういんのまえ — phía trước bệnh viện.',
      '※ N の うしろ — phía sau N. ほんやのうしろ — phía sau nhà sách.',
      '※ N の となり — cạnh N. きっさいてんのとなり — cạnh tiệm cắt tóc.',
    ],
  },

  // ============================================================
  // Bài 8: Tặng nhận
  // ============================================================

  g15: {
    id: 'g15',
    sectionTitle: 'Bài 8: ～にあげます — Tặng cho ai',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Tặng', affirmative: 'N1 に N2 を あげます。' },
      ],
    },
    meaning: {
      affirmative: 'Tặng N2 cho N1 (người nhận).',
    },
    notes: [
      '※ に — chỉ người nhận món quà.',
      '※ を — chỉ vật được tặng.',
      '※ あげます — cho, tặng (từ góc nhìn người cho).',
      '※ ともだちにはなをあげました — "Tôi đã tặng hoa cho bạn".',
      '※ Quá khứ: あげました.',
    ],
  },

  g16: {
    id: 'g16',
    sectionTitle: 'Bài 8: ～にもらいます — Nhận từ ai',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Nhận', affirmative: 'N1 に N2 を もらいます。' },
      ],
    },
    meaning: {
      affirmative: 'Nhận N2 từ N1 (người cho).',
    },
    notes: [
      '※ に — chỉ người cho.',
      '※ もらいます — nhận (từ góc nhìn người nhận).',
      '※ せんせいにじしょをもらいました — "Tôi đã nhận từ điển từ giáo viên".',
      '※ Phân biệt: あげます (cho) vs もらいます (nhận).',
    ],
  },

  // ============================================================
  // Bài 9: Thích / Ghét / Muốn
  // ============================================================

  g17: {
    id: 'g17',
    sectionTitle: 'Bài 9: ～がすきです — Thích...',
    structure: {
      headers: ['', 'Khẳng định', 'Phủ định'],
      rows: [
        { label: 'N / Vます', affirmative: 'N が すきです。', negative: 'N が すきじゃありません。' },
      ],
    },
    meaning: {
      affirmative: 'Thích N / V.',
      negative: 'Không thích N / V.',
    },
    notes: [
      '※ が — trợ từ đánh dấu đối tượng thích. Dùng が thay vì を.',
      '※ すきです — thích. すきじゃありません — không thích.',
      '※ にほんごのべんきょうがすきです — "Tôi thích học tiếng Nhật".',
      '※ Có thể dùng với danh từ hoặc Vます (bỏ ます): えいがをみる → えいがをみることがすきです.',
    ],
  },

  g18: {
    id: 'g18',
    sectionTitle: 'Bài 9: ～がきらいです — Ghét...',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Ghét', affirmative: 'N が きらいです。' },
      ],
    },
    meaning: {
      affirmative: 'Ghét N.',
    },
    notes: [
      '※ きらいです — ghét, không thích.',
      '※ にくがきらいです — "Tôi ghét thịt".',
      '※ Phân biệt: すきです (thích) ↔ きらいです (ghét).',
    ],
  },

  g19: {
    id: 'g19',
    sectionTitle: 'Bài 9: ～がほしいです — Muốn (đồ vật)',
    structure: {
      headers: ['', 'Khẳng định', 'Phủ định'],
      rows: [
        { label: 'Muốn', affirmative: 'N が ほしいです。', negative: 'N が ほしくありません。' },
      ],
    },
    meaning: {
      affirmative: 'Muốn N (đồ vật).',
      negative: 'Không muốn N.',
    },
    notes: [
      '※ が — trợ từ đánh dấu đồ vật muốn.',
      '※ ほしいです — muốn (đồ vật). Chỉ dùng cho bản thân mình.',
      '※ あたらしいくるまがほしいです — "Tôi muốn xe mới".',
      '※ Phủ định: ほしくありません / ほしくないです.',
      '※ Không dùng cho người khác. Với người khác dùng: ～がほしいそうです (nghe nói muốn).',
    ],
  },

  g20: {
    id: 'g20',
    sectionTitle: 'Bài 9: ～たいです — Muốn làm...',
    structure: {
      headers: ['', 'Khẳng định', 'Phủ định'],
      rows: [
        { label: 'Muốn làm', affirmative: 'Vます → Vたいです。', negative: 'Vたいです → Vたくないです。' },
      ],
    },
    meaning: {
      affirmative: 'Muốn làm V.',
      negative: 'Không muốn làm V.',
    },
    notes: [
      '※ Vます → bỏ ます + たいです: いきます → いきたいです.',
      '※ にほんにいきたいです — "Tôi muốn đi Nhật".',
      '※ Phủ định: いかないきたいです / いきたくないです.',
      '※ Chỉ dùng cho bản thân. Với người khác dùng ～たがっています.',
    ],
  },

  // ============================================================
  // Bài 10: So sánh
  // ============================================================

  g21: {
    id: 'g21',
    sectionTitle: 'Bài 10: ～より～のほうが～です — So sánh',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'So sánh', affirmative: 'A より B のほうが adj です。' },
        { label: 'Hỏi', affirmative: 'A と B と、どちらが adj ですか。' },
      ],
    },
    meaning: {
      affirmative: 'B... hơn A.',
    },
    notes: [
      '※ より — so với (đứng sau đối tượng được so sánh).',
      '※ のほうが — phía... hơn (đứng sau đối tượng hơn).',
      '※ ねこよりいぬのほうがすきです — "Tôi thích chó hơn mèo".',
      '※ A と B と、どちらが〜ですか — Hỏi A và B, cái nào... hơn?',
    ],
  },

  // ============================================================
  // Bài 11: Thể て — Yêu cầu
  // ============================================================

  g22: {
    id: 'g22',
    sectionTitle: 'Bài 11: ～てください — Hãy làm...',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Yêu cầu', affirmative: 'Vて ください。' },
        { label: 'Phủ định', affirmative: 'Vないで ください。' },
      ],
    },
    meaning: {
      affirmative: 'Hãy làm V (yêu cầu lịch sự).',
      negative: 'Đừng làm V.',
    },
    notes: [
      '※ Vます → Vて + ください: かきます → かいてください.',
      '※ ここに名前をかいてください — "Hãy viết tên vào đây".',
      '※ もういちどいってください — "Hãy nói lại một lần nữa".',
      '※ Cách chia Vて: 五段 → いて／いて／って／いて／いて／いて／いて.',
    ],
  },

  // ============================================================
  // Bài 12: Thể て — Cho phép / Cấm
  // ============================================================

  g23: {
    id: 'g23',
    sectionTitle: 'Bài 12: ～てもいいです — Có thể làm... được',
    structure: {
      headers: ['', 'Khẳng định', 'Hỏi'],
      rows: [
        { label: 'Cho phép', affirmative: 'Vても いいです。', negative: '' },
        { label: 'Xin phép', affirmative: 'Vても いいですか。', negative: '' },
      ],
    },
    meaning: {
      affirmative: 'Có thể làm V được. / Làm V có được không?',
    },
    notes: [
      '※ Vて + もいいです — cho phép làm gì đó.',
      '※ ここにすわってもいいですか — "Tôi ngồi đây có được không?"',
      '※ はい、すわってもいいです — "Vâng, được".',
      '※ Không: いいえ、すわってはいけません.',
    ],
  },

  g24: {
    id: 'g24',
    sectionTitle: 'Bài 12: ～てはいけません — Không được làm...',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Cấm', affirmative: 'Vては いけません。' },
      ],
    },
    meaning: {
      affirmative: 'Không được làm V (cấm).',
    },
    notes: [
      '※ Vて + はいけません — cấm, không được phép.',
      '※ ここでたばこをすってはいけません — "Không được hút thuốc ở đây".',
      '※ Đây là câu trả lời phủ định cho ～てもいいですか.',
    ],
  },

  // ============================================================
  // Bài 13: Thể て — Đang làm
  // ============================================================

  g25: {
    id: 'g25',
    sectionTitle: 'Bài 13: ～ています — Đang làm / Trạng thái',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Đang làm', affirmative: 'Vています。' },
        { label: 'Trạng thái', affirmative: 'Vています。' },
      ],
    },
    meaning: {
      affirmative: 'Đang làm V (tiếp diễn) hoặc đang trong trạng thái V (kết quả).',
    },
    notes: [
      '※ Vています — đang làm (tiếp diễn): いまべんきょうしています — "Bây giờ đang học".',
      '※ Vています — trạng thái: けっこんしています — "Đã kết hôn" (trạng thái).',
      '※ Phân biệt: ～ています (đang làm) vs ～ます (thói quen/sự thật).',
    ],
  },

  // ============================================================
  // Bài 14: Thể て — Trạng thái kết quả
  // ============================================================

  g26: {
    id: 'g26',
    sectionTitle: 'Bài 14: ～てあります — Trạng thái đã làm xong',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Trạng thái', affirmative: 'N が Vてあります。' },
      ],
    },
    meaning: {
      affirmative: 'N đã được V (trạng thái kết quả của hành động có chủ đích).',
    },
    notes: [
      '※ N が + Vてあります — nhấn mạnh trạng thái kết quả.',
      '※ まどがあけてあります — "Cửa sổ đã được mở" (có ai đó mở).',
      '※ Phân biệt: ～ています (đang làm) vs ～てあります (đã làm xong, kết quả còn).',
      '※ Chỉ dùng với tha động từ (động từ có tân ngữ).',
    ],
  },

  // ============================================================
  // Bài 15: Thể ない — Đừng / Phải
  // ============================================================

  g27: {
    id: 'g27',
    sectionTitle: 'Bài 15: ～ないでください — Đừng làm...',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Đừng làm', affirmative: 'Vないで ください。' },
      ],
    },
    meaning: {
      affirmative: 'Đừng làm V (yêu cầu phủ định).',
    },
    notes: [
      '※ Vます → Vない + でください: とります → とらないでください.',
      '※ ここでしゃしんとらないでください — "Đừng chụp ảnh ở đây".',
      '※ Cách chia Vない: 五段 → あない、かない、さない、たない、なない、ばない、まない.',
      '※ 一段 → ない: たべます → たべない.',
    ],
  },

  g28: {
    id: 'g28',
    sectionTitle: 'Bài 15: ～なければなりません — Phải làm...',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Nghĩa vụ', affirmative: 'Vない → Vなければなりません。' },
      ],
    },
    meaning: {
      affirmative: 'Phải làm V (nghĩa vụ, bắt buộc).',
    },
    notes: [
      '※ Vない → bỏ い + ければなりません: べんきょうします → べんきょうしなければなりません.',
      '※ まいにちにほんごをべんきょうしなければなりません — "Phải học tiếng Nhật mỗi ngày".',
      '※ Văn nói ngắn gọn: ～なきゃ / ～なくちゃ.',
    ],
  },

  // ============================================================
  // Bài 16: Kinh nghiệm
  // ============================================================

  g29: {
    id: 'g29',
    sectionTitle: 'Bài 16: ～たことがあります — Đã từng làm...',
    structure: {
      headers: ['', 'Khẳng định', 'Phủ định'],
      rows: [
        { label: 'Kinh nghiệm', affirmative: 'Vた ことが あります。', negative: 'Vた ことが ありません。' },
      ],
    },
    meaning: {
      affirmative: 'Đã từng làm V (kinh nghiệm).',
      negative: 'Chưa từng làm V.',
    },
    notes: [
      '※ Vた + ことがあります: いきます → いったことがあります.',
      '※ にほんにいったことがあります — "Tôi đã từng đi Nhật".',
      '※ すしをたべたことがあります — "Tôi đã từng ăn sushi".',
      '※ Phủ định: Vたことがありません — chưa từng làm.',
    ],
  },

  // ============================================================
  // Bài 17: Liệt kê
  // ============================================================

  g30: {
    id: 'g30',
    sectionTitle: 'Bài 17: ～たり～たりします — Liệt kê hành động',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Liệt kê', affirmative: 'Vたり Vたり します。' },
      ],
    },
    meaning: {
      affirmative: 'Làm việc như V và V... (liệt kê đại diện).',
    },
    notes: [
      '※ Vます → Vたり + Vたり + します: よみます → よんだり、みます → みましたりします.',
      '※ しゅうまつはほんをよんだり、テレビをみたりします — "Cuối tuần đọc sách, xem tivi...".',
      '※ Không cần liệt kê hết tất cả, chỉ nêu vài ví dụ đại diện.',
    ],
  },

  // ============================================================
  // Bài 18: Mời mọc / Đề nghị
  // ============================================================

  g31: {
    id: 'g31',
    sectionTitle: 'Bài 18: ～ましょう — Cùng làm... nào',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Đề nghị', affirmative: 'Vましょう。' },
      ],
    },
    meaning: {
      affirmative: 'Cùng làm V nào! (đề nghị làm cùng nhau).',
    },
    notes: [
      '※ Vます → Vましょう: たべます → たべましょう.',
      '※ いっしょにたべましょう — "Cùng ăn nào!".',
      '※ Thể lịch sự hơn ～ましょうか (tôi làm... cho bạn nhé).',
    ],
  },

  g32: {
    id: 'g32',
    sectionTitle: 'Bài 18: ～ませんか — Cùng làm... nhé?',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Mời', affirmative: 'Vませんか。' },
      ],
    },
    meaning: {
      affirmative: 'Cùng làm V nhé? (mời mọc lịch sự).',
    },
    notes: [
      '※ Vます → Vませんか: いきます → いきませんか.',
      '※ いっしょにいきませんか — "Cùng đi nhé?".',
      '※ Lịch sự hơn ～ましょう vì là câu hỏi,给对方选择权.',
    ],
  },

  // ============================================================
  // Bài 19: Điều kiện ～たら
  // ============================================================

  g33: {
    id: 'g33',
    sectionTitle: 'Bài 19: ～たら — Nếu/khi...',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Điều kiện', affirmative: 'Vたら／Nだったら／adj-かったら、〜。' },
      ],
    },
    meaning: {
      affirmative: 'Nếu/khi... thì...',
    },
    notes: [
      '※ Vたら: いきます → いったら. あめがふったら、いきません — "Nếu trời mưa thì không đi".',
      '※ Nだったら: あめだったら.',
      '※ adj-i かったら: やすかったら、かいます — "Nếu rẻ thì mua".',
      '※ adj-na だったら: ひまだったら.',
    ],
  },

  // ============================================================
  // Bài 20: Điều kiện ～と / ～ば
  // ============================================================

  g34: {
    id: 'g34',
    sectionTitle: 'Bài 20: ～と — Hễ... thì... (tự nhiên)',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Điều kiện', affirmative: 'Vる／N の／adj い／adj な ＋ と、〜。' },
      ],
    },
    meaning: {
      affirmative: 'Hễ... thì... (kết quả tự nhiên, luôn luôn xảy ra).',
    },
    notes: [
      '※ はるになると、さくらがさきます — "Khi xuân đến, hoa anh đào nở".',
      '※ Dùng cho hiện tượng tự nhiên, thói quen, sự thật hiển nhiên.',
      '※ Không dùng cho ý chí, yêu cầu của người nói.',
      '※ Phân biệt với ～たら (điều kiện cá nhân, một lần).',
    ],
  },

  g35: {
    id: 'g35',
    sectionTitle: 'Bài 20: ～ば — Nếu... (điều kiện)',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Điều kiện', affirmative: 'Vば／adj ければ、〜。' },
      ],
    },
    meaning: {
      affirmative: 'Nếu... thì...',
    },
    notes: [
      '※ Vます → Vれば: いきます → いけば.',
      '※ adj-i → ければ: やすい → やすければ、かいます — "Nếu rẻ thì mua".',
      '※ Dùng cho điều kiện giả định, thường đi với ý chí, mong muốn.',
      '※ Phân biệt: ～たら (trình tự thời gian) vs ～ば (điều kiện thuần túy).',
    ],
  },

  // ============================================================
  // Bài 21: Nghĩa vụ
  // ============================================================

  g36: {
    id: 'g36',
    sectionTitle: 'Bài 21: ～なければならない — Phải làm... (nghĩa vụ)',
    structure: {
      headers: ['', 'Khẳng định', 'Phủ định'],
      rows: [
        { label: 'Phải làm', affirmative: 'Vない → Vなければなりません。', negative: '' },
        { label: 'Không phải làm', affirmative: 'Vない → Vなくてもいいです。', negative: '' },
      ],
    },
    meaning: {
      affirmative: 'Phải làm V.',
      negative: 'Không cần làm V cũng được.',
    },
    notes: [
      '※ Vない → bỏ い + ければなりません: だします → ださなければなりません.',
      '※ あしたまでにレポートをださなければなりません — "Phải nộp báo cáo trước ngày mai".',
      '※ Văn nói: ～なきゃいけない / ～なくちゃ.',
      '※ Không phải làm: ～なくてもいいです — "Không cần... cũng được".',
    ],
  },

  // ============================================================
  // Bài 22: Thể thông thường — Suy nghĩ / Nói
  // ============================================================

  g37: {
    id: 'g37',
    sectionTitle: 'Bài 22: ～とおもいます — Tôi nghĩ rằng...',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Suy nghĩ', affirmative: '(Thể thường) と おもいます。' },
      ],
    },
    meaning: {
      affirmative: 'Tôi nghĩ rằng... (đưa ra ý kiến cá nhân).',
    },
    notes: [
      '※ Thể thường + とおもいます: あめだ とおもいます.',
      '※ あしたあめだとおもいます — "Tôi nghĩ ngày mai trời mưa".',
      '※ Dùng thể thường (thể ngắn) trước とおもいます.',
      '※ Lịch sự hơn nói thẳng khẳng định, thể hiện sự khiêm tốn.',
    ],
  },

  g38: {
    id: 'g38',
    sectionTitle: 'Bài 22: ～といいます — Nói rằng...',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Nói', affirmative: '(Thể thường) と いいます。' },
      ],
    },
    meaning: {
      affirmative: 'Nói rằng... (trích dẫn lời nói).',
    },
    notes: [
      '※ Thể thường + といいます: テストがある といいました.',
      '※ せんせいはあしたテストといいます — "Giáo viên nói ngày mai có kiểm tra".',
      '※ と nói/thinking — trích dẫn trực tiếp nội dung.',
      '※ Thể thường: です→だ, ます→る, adj-naだ, adj-i giữ nguyên.',
    ],
  },

  // ============================================================
  // Bài 23: Bị động
  // ============================================================

  g39: {
    id: 'g39',
    sectionTitle: 'Bài 23: ～られます (受身形) — Bị động',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Bị động', affirmative: 'Vれます。' },
      ],
    },
    meaning: {
      affirmative: 'Bị/được làm V (bị động).',
    },
    notes: [
      '※ Vます → Vられます: ほめます → ほめられます.',
      '※ せんせいにほめられました — "Tôi được giáo viên khen".',
      '※ に — chỉ tác nhân gây ra hành động.',
      '※ Có thể diễn đạt cảm giác bị phiền: ともだちにでんわをかけられました — "Bị bạn gọi điện" (làm phiền).',
    ],
  },

  // ============================================================
  // Bài 24: Sai khiến
  // ============================================================

  g40: {
    id: 'g40',
    sectionTitle: 'Bài 24: ～させます (使役形) — Cho/bắt... làm',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Sai khiến', affirmative: 'Vさせます。' },
      ],
    },
    meaning: {
      affirmative: 'Cho/bắt người khác làm V (sai khiến).',
    },
    notes: [
      '※ Vます → Vさせます: たべます → たべさせます.',
      '※ こどもにやさいをたべさせます — "Tôi bắt trẻ con ăn rau".',
      '※ に — chỉ người bị sai khiến.',
      '※ Dùng khi người trên yêu cầu người dưới làm gì đó.',
    ],
  },

  // ============================================================
  // Bài 26: Trạng thái ～ています
  // ============================================================

  g41: {
    id: 'g41',
    sectionTitle: 'Bài 26: ～ています (trạng thái) — Đang trong trạng thái',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Trạng thái', affirmative: 'Vています。' },
      ],
    },
    meaning: {
      affirmative: 'Đang trong trạng thái V (kết quả của hành động còn duy trì).',
    },
    notes: [
      '※ まどがこわれています — "Cửa sổ đang vỡ" (trạng thái).',
      '※ でんわをもっています — "Tôi có điện thoại" (trạng thái sở hữu).',
      '※ Phân biệt: ～ています (trạng thái) vs ～てあります (kết quả hành động).',
      '※ ～ています với tự động từ → trạng thái tự nhiên.',
    ],
  },

  // ============================================================
  // Bài 27: Truyền tin ～そうです
  // ============================================================

  g42: {
    id: 'g42',
    sectionTitle: 'Bài 27: ～そうです (伝聞) — Nghe nói rằng...',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Truyền tin', affirmative: '(Thể thường) そうです。' },
      ],
    },
    meaning: {
      affirmative: 'Nghe nói rằng... (truyền tin từ nguồn khác).',
    },
    notes: [
      '※ Thể thường + そうです: あめだ そうです.',
      '※ あしたあめだそうです — "Nghe nói ngày mai trời mưa".',
      '※ やまださんはらいしゅうけっこんするそうです — "Nghe nói Yamada tuần sau kết hôn".',
      '※ Phân biệt với ～そうです (様態) — trông có vẻ (Bài 42).',
      '※ Đây là 伝聞 (hearsay) — thông tin từ người khác, không phải tự quan sát.',
    ],
  },

  // ============================================================
  // Bài 28: ～ようです / ～らしいです
  // ============================================================

  g43: {
    id: 'g43',
    sectionTitle: 'Bài 28: ～ようです — Có vẻ như... (phán đoán)',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Phán đoán', affirmative: '(Thể thường) ようです。' },
      ],
    },
    meaning: {
      affirmative: 'Có vẻ như... (phán đoán dựa trên quan sát).',
    },
    notes: [
      '※ あめがふるようです — "Có vẻ như trời sẽ mưa" (nhìn mây đen).',
      '※ かれはびょうきのようです — "Có vẻ anh ấy bị ốm".',
      '※ Dựa trên quan sát trực tiếp hoặc thông tin có sẵn để phán đoán.',
      '※ Phân biệt: ～ようです (phán đoán cá nhân) vs ～そうです (truyền tin).',
    ],
  },

  g44: {
    id: 'g44',
    sectionTitle: 'Bài 28: ～らしいです — Nghe nói/có vẻ',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Nghe nói', affirmative: '(Thể thường) らしいです。' },
      ],
    },
    meaning: {
      affirmative: 'Nghe nói/có vẻ (dựa trên thông tin gián tiếp).',
    },
    notes: [
      '※ やまださんはびょうきらしいです — "Nghe nói Yamada bị ốm".',
      '※ Phân biệt: ～らしいです (nghe nói, thông tin gián tiếp) vs ～ようです (phán đoán từ quan sát).',
      '※ ～らしいです gần với ～そうです (伝聞) nhưng tự nhiên hơn trong văn nói.',
    ],
  },

  // ============================================================
  // Bài 30: Có thể ～かもしれません
  // ============================================================

  g45: {
    id: 'g45',
    sectionTitle: 'Bài 30: ～かもしれません — Có thể là...',
    structure: {
      headers: ['', 'Khẳng định', 'Phủ định'],
      rows: [
        { label: 'Có thể', affirmative: '(Thể thường) かもしれません。', negative: '' },
      ],
    },
    meaning: {
      affirmative: 'Có thể là... (khả năng khoảng 50%).',
    },
    notes: [
      '※ あしたあめかもしれません — "Ngày mai có thể mưa".',
      '※ かれはこないかもしれません — "Có thể anh ấy không đến".',
      '※ Khả năng thấp hơn ～でしょう (khoảng 50%).',
      '※ Văn nói ngắn gọn: ～かも.',
    ],
  },

  // ============================================================
  // Bài 31: Hoàn thành ～てしまう
  // ============================================================

  g46: {
    id: 'g46',
    sectionTitle: 'Bài 31: ～てしまう — Làm xong / Tiếc vì đã làm',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Hoàn thành', affirmative: 'Vてしまう。' },
        { label: 'Tiếc nuối', affirmative: 'Vてしまった。' },
      ],
    },
    meaning: {
      affirmative: 'Làm xong hoàn toàn / Tiếc vì đã làm (quá khứ).',
    },
    notes: [
      '※ しゅくだいをぜんぶやってしまいました — "Tôi đã làm xong hết bài tập".',
      '※ だいじなほんをなくしてしまいました — "Tôi đã làm mất cuốn sách quan trọng" (tiếc).',
      '※ Ý nghĩa 1: Hoàn thành triệt để (ぜんぶ + しまいました).',
      '※ Ý nghĩa 2: Tiếc nuối, hối hận (thường dùng quá khứ しまった).',
      '※ Văn nói: ～ちゃう / ～じゃう.',
    ],
  },

  // ============================================================
  // Bài 32: Thể khả năng
  // ============================================================

  g47: {
    id: 'g47',
    sectionTitle: 'Bài 32: ～ことができます — Có thể làm... (khả năng)',
    structure: {
      headers: ['', 'Khẳng định', 'Phủ định'],
      rows: [
        { label: 'Có thể', affirmative: 'Vる ことが できます。', negative: 'Vる ことが できません。' },
      ],
    },
    meaning: {
      affirmative: 'Có thể làm V (khả năng).',
      negative: 'Không thể làm V.',
    },
    notes: [
      '※ にほんごをはなすことができます — "Tôi có thể nói tiếng Nhật".',
      '※ ピアノをひくことができません — "Tôi không thể chơi piano".',
      '※ Phân biệt với ～られる (thể khả năng): ～ことができます trang trọng hơn.',
      '※ Dùng khi nhấn mạnh khả năng hoặc trong ngữ cảnh trang trọng.',
    ],
  },

  // ============================================================
  // Bài 33: Quyết định
  // ============================================================

  g48: {
    id: 'g48',
    sectionTitle: 'Bài 33: ～ことにする — Quyết định làm...',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Tự quyết định', affirmative: 'Vる／Vない ことにする。' },
      ],
    },
    meaning: {
      affirmative: 'Quyết định làm / không làm V (tự quyết định).',
    },
    notes: [
      '※ まいにちうんどうすることにしました — "Tôi quyết định tập thể dục mỗi ngày".',
      '※ Vることにする — quyết định làm. Vないことにする — quyết định không làm.',
      '※ ～ことにしました — quá khứ, đã quyết định.',
      '※ Phân biệt với ～ことになる (được quyết định bởi người khác/tình huống).',
    ],
  },

  g49: {
    id: 'g49',
    sectionTitle: 'Bài 33: ～ことになる — Được quyết định là...',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Được quyết định', affirmative: 'Vる／Vない ことになる。' },
      ],
    },
    meaning: {
      affirmative: 'Được quyết định là... (không phải tự quyết định).',
    },
    notes: [
      '※ らいしゅうとうきょうにいくことになりました — "Đã quyết định là tôi sẽ đi Tokyo tuần sau".',
      '※ Quyết định bởi công ty, trường học, hoặc tình huống — không phải ý chí cá nhân.',
      '※ Phân biệt: ～ことにする (tự quyết) vs ～ことになる (được quyết).',
    ],
  },

  // ============================================================
  // Bài 34: Cho nhận ～てあげる／もらう／くれる
  // ============================================================

  g50: {
    id: 'g50',
    sectionTitle: 'Bài 34: ～てあげる — Làm... cho ai',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Cho', affirmative: 'N に Vてあげます。' },
      ],
    },
    meaning: {
      affirmative: 'Làm V cho N (từ góc nhìn người làm).',
    },
    notes: [
      '※ ともだちにほんしをおしてあげました — "Tôi đã đẩy cửa cho bạn".',
      '※ に — chỉ người nhận lợi ích.',
      '※ Dùng khi người nói làm việc gì đó cho người khác.',
      '※ Không dùng cho người trên (thiếu lịch sự). Với người trên dùng ～てさしあげます.',
    ],
  },

  g51: {
    id: 'g51',
    sectionTitle: 'Bài 34: ～てもらう — Được ai làm cho...',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Nhận', affirmative: 'N に Vてもらいます。' },
      ],
    },
    meaning: {
      affirmative: 'Được N làm V cho mình.',
    },
    notes: [
      '※ せんせいににほんごをおしえてもらいました — "Tôi được giáo viên dạy tiếng Nhật".',
      '※ に — chỉ người làm hành động.',
      '※ Từ góc nhìn người nhận lợi ích.',
      '※ Phân biệt: ～てあげる (cho) vs ～てもらう (nhận).',
    ],
  },

  g52: {
    id: 'g52',
    sectionTitle: 'Bài 34: ～てくれる — Ai đó làm... cho mình',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Ai đó làm', affirmative: 'N が Vてくれます。' },
      ],
    },
    meaning: {
      affirmative: 'N làm V cho mình (từ góc nhìn người nhận).',
    },
    notes: [
      '※ ともだちがおしえてくれました — "Bạn đã dạy cho tôi".',
      '※ が — chỉ người làm hành động (chủ ngữ).',
      '※ Nhấn mạnh lòng biết ơn đối với người làm.',
      '※ Phân biệt: ～てもらう (tôi nhận) vs ～てくれる (người khác làm cho tôi).',
    ],
  },

  // ============================================================
  // Bài 35: Quá ～すぎる
  // ============================================================

  g53: {
    id: 'g53',
    sectionTitle: 'Bài 35: ～すぎる — Quá...',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Động từ', affirmative: 'Vます → Vすぎます。' },
        { label: 'Tính từ', affirmative: 'adj い／adj な ＋ すぎます。' },
      ],
    },
    meaning: {
      affirmative: 'Quá V / Quá adj.',
    },
    notes: [
      '※ たべすぎました — "Ăn quá nhiều".',
      '※ このかばんは重すぎます — "Cái túi này quá nặng".',
      '※ Vます → bỏ ます + すぎます.',
      '※ adj-i → bỏ い + すぎます: おそすぎる — quá muộn.',
      '※ adj-na + すぎます: しんぱいすぎます — quá lo lắng.',
    ],
  },

  // ============================================================
  // Bài 36: ～ようにする／ようになる
  // ============================================================

  g54: {
    id: 'g54',
    sectionTitle: 'Bài 36: ～ようにする — Cố gắng làm...',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Nỗ lực', affirmative: 'Vる／Vない ように する。' },
      ],
    },
    meaning: {
      affirmative: 'Cố gắng làm / Không làm... (nỗ lực có ý thức).',
    },
    notes: [
      '※ まいにちにほんごをべんきょうするようにしています — "Tôi cố gắng học tiếng Nhật mỗi ngày".',
      '※ Vる/ない ように — chỉ mục tiêu, nỗ lực.',
      '※ ～ようにしています — đang cố gắng (thói quen).',
      '※ ～ようにしました — đã quyết tâm làm.',
    ],
  },

  g55: {
    id: 'g55',
    sectionTitle: 'Bài 36: ～ようになる — Trở nên có thể...',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Thay đổi', affirmative: 'Vる／Vない ように なる。' },
      ],
    },
    meaning: {
      affirmative: 'Trở nên có thể V / Không còn V nữa (thay đổi trạng thái).',
    },
    notes: [
      '※ にほんごがはなせるようになりました — "Tôi đã trở nên có thể nói tiếng Nhật".',
      '※ Chỉ sự thay đổi từ không thể → có thể, hoặc ngược lại.',
      '※ Phân biệt: ～ようにする (nỗ lực) vs ～ようになる (kết quả thay đổi).',
    ],
  },

  // ============================================================
  // Bài 37: Làm trước ～ておく
  // ============================================================

  g56: {
    id: 'g56',
    sectionTitle: 'Bài 37: ～ておく — Làm trước...',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Chuẩn bị', affirmative: 'Vておく。' },
      ],
    },
    meaning: {
      affirmative: 'Làm V trước (chuẩn bị cho tương lai).',
    },
    notes: [
      '※ りょこうのまえにホテルをよやくしておきます — "Trước khi đi du lịch, tôi sẽ đặt khách sạn trước".',
      '※ Vて + おく — làm trước, chuẩn bị sẵn.',
      '※ Văn nói: ～とく: よやくしておきます → よやくしときます.',
      '※ Dùng khi muốn chuẩn bị trước cho việc gì đó sắp xảy ra.',
    ],
  },

  // ============================================================
  // Bài 38: Mặc dù ～のに
  // ============================================================

  g57: {
    id: 'g57',
    sectionTitle: 'Bài 38: ～のに — Mặc dù...',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Mặc dù', affirmative: 'Vる／N の／adj い／adj な  のに、〜。' },
      ],
    },
    meaning: {
      affirmative: 'Mặc dù... nhưng... (ngược với mong đợi).',
    },
    notes: [
      '※ あめなのに、でかけました — "Mặc dù trời mưa nhưng tôi vẫn ra ngoài".',
      '※ Diễn đạt sự ngạc nhiên, không hài lòng vì kết quả ngược mong đợi.',
      '※ Vる/Nの/adjい/adjな + のに.',
      '※ Khác với ～ても (nhượng bộ): ～のに mang sắc thái ngạc nhiên/phàn nàn.',
    ],
  },

  // ============================================================
  // Bài 39: Chắc chắn ～はずです
  // ============================================================

  g58: {
    id: 'g58',
    sectionTitle: 'Bài 39: ～はずです — Chắc chắn là... (kỳ vọng)',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Kỳ vọng', affirmative: '(Thể thường) はずです。' },
      ],
    },
    meaning: {
      affirmative: 'Chắc chắn là... (dựa trên lý lẽ, thông tin có sẵn).',
    },
    notes: [
      '※ かれはもうつくはずです — "Chắc anh ấy đã đến rồi" (dựa trên thời gian xuất phát).',
      '※ Diễn đạt sự kỳ vọng dựa trên lý lẽ, không phải đoán mò.',
      '※ Phủ định: ～はずがない — "Không thể nào...".',
      '※ Phân biệt: ～はずです (chắc chắn theo lý) vs ～かもしれません (có thể, 50%).',
    ],
  },

  // ============================================================
  // Bài 40: Dự định ～つもりです
  // ============================================================

  g59: {
    id: 'g59',
    sectionTitle: 'Bài 40: ～つもりです — Định làm...',
    structure: {
      headers: ['', 'Khẳng định', 'Phủ định'],
      rows: [
        { label: 'Dự định', affirmative: 'Vる／Vない つもりです。', negative: '' },
      ],
    },
    meaning: {
      affirmative: 'Định làm V / Định không làm V.',
    },
    notes: [
      '※ らいしゅうりょこうするつもりです — "Tuần sau tôi định đi du lịch".',
      '※ Vるつもりです — định làm. Vないつもりです — định không làm.',
      '※ Diễn đạt ý định, kế hoạch cá nhân.',
      '※ Phân biệt: ～たいです (muốn) vs ～つもりです (định).',
    ],
  },

  // ============================================================
  // Bài 41: Thử làm ～てみる
  // ============================================================

  g60: {
    id: 'g60',
    sectionTitle: 'Bài 41: ～てみる — Thử làm...',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Thử', affirmative: 'Vてみる。' },
      ],
    },
    meaning: {
      affirmative: 'Thử làm V.',
    },
    notes: [
      '※ このりょうりをたべてみてください — "Hãy thử ăn món này xem".',
      '※ Vて + みる — thử làm, làm thử xem kết quả.',
      '※ Dùng khi khuyến khích ai đó thử trải nghiệm.',
      '※ ～てみました — đã thử làm rồi.',
    ],
  },

  // ============================================================
  // Bài 42: Trông có vẻ ～そうです (様態)
  // ============================================================

  g61: {
    id: 'g61',
    sectionTitle: 'Bài 42: ～そうです (様態) — Trông có vẻ...',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Trông có vẻ', affirmative: 'Vます→Vそう／adj い→adj そう／adj な＋そうです。' },
      ],
    },
    meaning: {
      affirmative: 'Trông có vẻ... (dựa trên quan sát trực tiếp).',
    },
    notes: [
      '※ おいしそうです — "Trông có vẻ ngon" (nhìn món ăn).',
      '※ あめがふりそうです — "Trông có vẻ trời sắp mưa" (nhìn mây).',
      '※ Vます→Vそう: ふります→ふりそう.',
      '※ adj-i→adjそう: たのしい→たのしそう.',
      '※ adj-na＋そう: しずか→しずかそう.',
      '※ Phân biệt: ～そうです (様態, quan sát) vs ～そうです (伝聞, nghe nói).',
    ],
  },

  // ============================================================
  // Bài 43: Ý kiến ～といいですね／ほうがいいです
  // ============================================================

  g62: {
    id: 'g62',
    sectionTitle: 'Bài 43: ～といいですね — ... thì tốt nhỉ',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Mong ước', affirmative: '(Thể thường) と いいですね。' },
      ],
    },
    meaning: {
      affirmative: '... thì tốt nhỉ (mong ước, hy vọng).',
    },
    notes: [
      '※ はやくにほんごがじょうずになるといいですね — "Hy vọng tiếng Nhật của bạn sẽ giỏi sớm".',
      '※ Thể hiện mong ước, hy vọng cho người khác hoặc tình huống.',
      '※ ～といいですね — lịch sự, nhẹ nhàng.',
      '※ ～といい — ngắn gọn hơn, dùng trong văn viết.',
    ],
  },

  g63: {
    id: 'g63',
    sectionTitle: 'Bài 43: ～ほうがいいです — Nên làm... thì hơn',
    structure: {
      headers: ['', 'Khẳng định', 'Khuyên không'],
      rows: [
        { label: 'Nên làm', affirmative: 'Vた ほうが いいです。', negative: '' },
        { label: 'Nên không làm', affirmative: 'Vない ほう が いいです。', negative: '' },
      ],
    },
    meaning: {
      affirmative: 'Nên làm V thì hơn / Nên không làm V thì hơn (lời khuyên).',
    },
    notes: [
      '※ びょういんに行ったほうがいいです — "Bạn nên đi bệnh viện thì hơn".',
      '※ たばこをすわないほうがいいです — "Bạn không nên hút thuốc thì hơn".',
      '※ Vたほうがいい — nên làm (khuyên làm).',
      '※ Vないほうがいい — nên không làm (khuyên không làm).',
      '※ So với ～てください: ～ほうがいいです mang tính khuyên nhủ, ～てください mang tính yêu cầu.',
    ],
  },

  // ============================================================
  // Bài 44: Mục đích ～ために
  // ============================================================

  g64: {
    id: 'g64',
    sectionTitle: 'Bài 44: ～ために — Để / Vì...',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Mục đích', affirmative: 'Vる／N の ために、〜。' },
        { label: 'Lý do', affirmative: 'N の ために、〜。' },
      ],
    },
    meaning: {
      affirmative: 'Để làm V (mục đích) / Vì N (lý do).',
    },
    notes: [
      '※ にほんごをべんきょうするために、にほんにいきました — "Tôi đi Nhật để học tiếng Nhật".',
      '※ びょうきのために、がっこうをやすみました — "Vì ốm nên tôi nghỉ học".',
      '※ Vるために — mục đích hành động.',
      '※ Nのために — vì ai/vì cái gì (lý do hoặc vì lợi ích).',
    ],
  },

  // ============================================================
  // Bài 45: Mục đích ～ように
  // ============================================================

  g65: {
    id: 'g65',
    sectionTitle: 'Bài 45: ～ように — Để mà...',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Mục đích', affirmative: 'Vる／Vない ように、〜。' },
      ],
    },
    meaning: {
      affirmative: 'Để mà... (mục đích, phòng ngừa).',
    },
    notes: [
      '※ わすれないように、メモします — "Tôi ghi chú để không quên".',
      '※ Vる/ないように — mục đích (thường dùng với động từ phi ý chí).',
      '※ Phân biệt với ～ために: ～ように dùng với trạng thái, khả năng; ～ために dùng với hành động có ý chí.',
    ],
  },

  // ============================================================
  // Bài 47-48: Kính ngữ
  // ============================================================

  g66: {
    id: 'g66',
    sectionTitle: 'Bài 47: お/ご～になります (尊敬語) — Tôn kính',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Tôn kính', affirmative: 'お/ご + Vます + になります。' },
      ],
    },
    meaning: {
      affirmative: 'Ngài làm... (tôn kính ngữ — nâng cao đối phương).',
    },
    notes: [
      '※ せんせいはもうかえられました — "Giáo viên đã về rồi" (tôn kính).',
      '※ しゃちょうはあしたいらっしゃいます — "Giám đốc sẽ đến ngày mai".',
      '※ お + Vます(和語) + になります: おかえりになります.',
      '※ ご + Vます(漢語) + になります: ごらんになります.',
      '※ Chỉ dùng cho hành động của người trên, KHÔNG dùng cho mình.',
    ],
  },

  g67: {
    id: 'g67',
    sectionTitle: 'Bài 48: お/ご～します (謙譲語) — Khiêm nhường',
    structure: {
      headers: ['', 'Mẫu câu'],
      rows: [
        { label: 'Khiêm nhường', affirmative: 'お/ご + Vます + します。' },
      ],
    },
    meaning: {
      affirmative: 'Tôi làm... (khiêm nhường ngữ — hạ thấp bản thân).',
    },
    notes: [
      '※ お荷物をおもちしましょうか — "Tôi mang hành lý cho ngài nhé?".',
      '※ ご説明いたします — "Tôi sẽ giải thích".',
      '※ お + Vます(和語) + します: おもちします.',
      '※ ご + Vます(漢語) + します: ご説明します.',
      '※ Chỉ dùng cho hành động của mình, KHÔNG dùng cho người trên.',
      '※ Phân biệt: ～になります (tôn kính, người trên) vs ～します (khiêm nhường, mình).',
    ],
  },

};
