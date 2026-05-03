import { Kanji } from '@/types';

export const kanji: Kanji[] = [
  // Week 1-2: Cơ bản → lesson-1
  { id: 'k1', character: '日', onyomi: 'ニチ、ジツ', kunyomi: 'ひ、か', meaning: 'sun, day', meaningVi: 'Nhật, ngày', week: 1, lessonId: 'hiragana-1', examples: ['日本（にほん）', '毎日（まいにち）', '今日（きょう）'] },
  { id: 'k2', character: '月', onyomi: 'ゲツ、ガツ', kunyomi: 'つき', meaning: 'moon, month', meaningVi: 'Nguyệt, tháng', week: 1, lessonId: 'hiragana-1', examples: ['一月（いちがつ）', '月曜日（げつようび）'] },
  { id: 'k3', character: '火', onyomi: 'カ', kunyomi: 'ひ', meaning: 'fire', meaningVi: 'Hỏa, lửa', week: 1, lessonId: 'hiragana-1', examples: ['火曜日（かようび）', '花火（はなび）'] },
  { id: 'k4', character: '水', onyomi: 'スイ', kunyomi: 'みず', meaning: 'water', meaningVi: 'Thủy, nước', week: 1, lessonId: 'hiragana-1', examples: ['水曜日（すいようび）', '水曜日（すいようび）'] },
  { id: 'k5', character: '木', onyomi: 'モク', kunyomi: 'き', meaning: 'tree, wood', meaningVi: 'Mộc, cây', week: 1, lessonId: 'hiragana-1', examples: ['木曜日（もくようび）', '木（き）'] },
  { id: 'k6', character: '金', onyomi: 'キン、コン', kunyomi: 'かね', meaning: 'gold, money', meaningVi: 'Kim, tiền', week: 1, lessonId: 'hiragana-1', examples: ['金曜日（きんようび）', 'お金（おかね）'] },
  { id: 'k7', character: '土', onyomi: 'ド', kunyomi: 'つち', meaning: 'soil, earth', meaningVi: 'Thổ, đất', week: 1, lessonId: 'hiragana-1', examples: ['土曜日（どようび）', '土（つち）'] },
  { id: 'k8', character: '時', onyomi: 'ジ', kunyomi: 'とき', meaning: 'time', meaningVi: 'Thời, giờ', week: 1, lessonId: 'hiragana-1', examples: ['時間（じかん）', '何時（なんじ）'] },
  { id: 'k9', character: '人', onyomi: 'ジン、ニン', kunyomi: 'ひと', meaning: 'person', meaningVi: 'Nhân, người', week: 1, lessonId: 'hiragana-1', examples: ['日本人（にほんじん）', '大人（おとな）'] },
  { id: 'k10', character: '間', onyomi: 'カン、ケン', kunyomi: 'あいだ', meaning: 'interval, between', meaningVi: 'Gian, khoảng', week: 1, lessonId: 'hiragana-1', examples: ['時間（じかん）', '部屋（へや）'] },

  // Week 3-4 → lesson-10 (so sánh)
  { id: 'k11', character: '大', onyomi: 'ダイ、タイ', kunyomi: 'おお-きい', meaning: 'big, large', meaningVi: 'Đại, lớn', week: 3, lessonId: 'lesson-10', examples: ['大学（だいがく）', '大きい（おおきい）'] },
  { id: 'k12', character: '小', onyomi: 'ショウ', kunyomi: 'ちい-さい、こ', meaning: 'small', meaningVi: 'Tiểu, nhỏ', week: 3, lessonId: 'lesson-10', examples: ['小学（しょうがく）', '小さい（ちいさい）'] },
  { id: 'k13', character: '高', onyomi: 'コウ', kunyomi: 'たか-い', meaning: 'high, tall, expensive', meaningVi: 'Cao', week: 3, lessonId: 'lesson-10', examples: ['高校（こうこう）', '高い（たかい）'] },
  { id: 'k14', character: '安', onyomi: 'アン', kunyomi: 'やす-い', meaning: 'cheap, peaceful', meaningVi: 'An, rẻ', week: 3, lessonId: 'lesson-10', examples: ['安い（やすい）', '不安（ふあん）'] },
  { id: 'k15', character: '新', onyomi: 'シン', kunyomi: 'あたら-しい', meaning: 'new', meaningVi: 'Tân, mới', week: 3, lessonId: 'lesson-10', examples: ['新聞（しんぶん）', '新しい（あたらしい）'] },
  { id: 'k16', character: '古', onyomi: 'コ', kunyomi: 'ふる-い', meaning: 'old (thing)', meaningVi: 'Cổ, cũ', week: 3, lessonId: 'lesson-10', examples: ['古い（ふるい）', '古代（こだい）'] },
  { id: 'k17', character: '山', onyomi: 'サン', kunyomi: 'やま', meaning: 'mountain', meaningVi: 'Sơn, núi', week: 3, lessonId: 'lesson-10', examples: ['富士山（ふじさん）', '山（やま）'] },
  { id: 'k18', character: '川', onyomi: 'セン', kunyomi: 'かわ', meaning: 'river', meaningVi: 'Xuyên, sông', week: 3, lessonId: 'lesson-10', examples: ['川（かわ）', '小川（おがわ）'] },

  // Week 5-6 → lesson-4,5,9
  { id: 'k19', character: '見', onyomi: 'ケン', kunyomi: 'み-る、み-える', meaning: 'see', meaningVi: 'Kiến, thấy', week: 5, lessonId: 'lesson-4', examples: ['見る（みる）', '意見（いけん）'] },
  { id: 'k20', character: '行', onyomi: 'コウ、ギョウ', kunyomi: 'い-く、おこな-う', meaning: 'go', meaningVi: 'Hành, đi', week: 5, lessonId: 'lesson-4', examples: ['行く（いく）', '旅行（りょこう）'] },
  { id: 'k21', character: '来', onyomi: 'ライ', kunyomi: 'く-る', meaning: 'come', meaningVi: 'Lai, đến', week: 5, lessonId: 'lesson-4', examples: ['来る（くる）', '来年（らいねん）'] },
  { id: 'k22', character: '食', onyomi: 'ショク', kunyomi: 'た-べる、く-う', meaning: 'eat, food', meaningVi: 'Thực, ăn', week: 5, lessonId: 'lesson-5', examples: ['食べる（たべる）', '食事（しょくじ）'] },
  { id: 'k23', character: '飲', onyomi: 'イン', kunyomi: 'の-む', meaning: 'drink', meaningVi: 'Ẩm, uống', week: 5, lessonId: 'lesson-5', examples: ['飲む（のむ）', '飲料（いんりょう）'] },
  { id: 'k24', character: '話', onyomi: 'ワ', kunyomi: 'はな-す、はなし', meaning: 'speak, talk', meaningVi: 'Thoại, nói', week: 5, lessonId: 'lesson-5', examples: ['話す（はなす）', '電話（でんわ）'] },
  { id: 'k25', character: '読', onyomi: 'ドク', kunyomi: 'よ-む', meaning: 'read', meaningVi: 'Đọc, đọc', week: 5, lessonId: 'lesson-5', examples: ['読む（よむ）', '読書（どくしょ）'] },
  { id: 'k26', character: '書', onyomi: 'ショ', kunyomi: 'か-く', meaning: 'write', meaningVi: 'Thư, viết', week: 5, lessonId: 'lesson-5', examples: ['書く（かく）', '手紙（てがみ）'] },

  // Week 7-8 → lesson-6,7,8
  { id: 'k27', character: '学', onyomi: 'ガク', kunyomi: 'まな-ぶ', meaning: 'study, learn', meaningVi: 'Học, học', week: 7, lessonId: 'lesson-6', examples: ['学生（がくせい）', '大学（だいがく）'] },
  { id: 'k28', character: '生', onyomi: 'セイ、ショウ', kunyomi: 'い-きる、う-まれる', meaning: 'life, birth', meaningVi: 'Sinh, sống', week: 7, lessonId: 'lesson-6', examples: ['学生（がくせい）', '生活（せいかつ）'] },
  { id: 'k29', character: '先', onyomi: 'セン', kunyomi: 'さき', meaning: 'before, ahead', meaningVi: 'Tiên, trước', week: 7, lessonId: 'lesson-6', examples: ['先生（せんせい）', '先週（せんしゅう）'] },
  { id: 'k30', character: '友', onyomi: 'ユウ', kunyomi: 'とも', meaning: 'friend', meaningVi: 'Hữu, bạn', week: 7, lessonId: 'lesson-6', examples: ['友達（ともだち）', '友人（ゆうじん）'] },

  // Week 9-10 → lesson-7,21
  { id: 'k31', character: '思', onyomi: 'シ', kunyomi: 'おも-う', meaning: 'think', meaningVi: 'Tư, nghĩ', week: 9, lessonId: 'lesson-7', examples: ['思う（おもう）', '思考（しこう）'] },
  { id: 'k32', character: '知', onyomi: 'チ', kunyomi: 'し-る', meaning: 'know', meaningVi: 'Tri, biết', week: 9, lessonId: 'lesson-7', examples: ['知る（しる）', '知識（ちしき）'] },
  { id: 'k33', character: '会', onyomi: 'カイ', kunyomi: 'あ-う', meaning: 'meet, meeting', meaningVi: 'Hội, gặp', week: 9, lessonId: 'lesson-8', examples: ['会う（あう）', '会社（かいしゃ）'] },
  { id: 'k34', character: '社', onyomi: 'シャ', kunyomi: 'やしろ', meaning: 'company, shrine', meaningVi: 'Xã, công ty', week: 9, lessonId: 'lesson-8', examples: ['会社（かいしゃ）', '会社員（かいしゃいん）'] },

  // Week 11-12 → lesson-10
  { id: 'k35', character: '電', onyomi: 'デン', kunyomi: '', meaning: 'electricity', meaningVi: 'Điện', week: 11, lessonId: 'lesson-10', examples: ['電話（でんわ）', '電車（でんしゃ）'] },
  { id: 'k36', character: '車', onyomi: 'シャ', kunyomi: 'くるま', meaning: 'car, vehicle', meaningVi: 'Xa, xe', week: 11, lessonId: 'lesson-10', examples: ['電車（でんしゃ）', '車（くるま）'] },
  { id: 'k37', character: '道', onyomi: 'ドウ', kunyomi: 'みち', meaning: 'road, way', meaningVi: 'Đạo, đường', week: 11, lessonId: 'lesson-10', examples: ['道（みち）', '茶道（さどう）'] },
  { id: 'k38', character: '国', onyomi: 'コク', kunyomi: 'くに', meaning: 'country', meaningVi: 'Quốc, nước', week: 11, lessonId: 'lesson-10', examples: ['国（くに）', '外国（がいこく）'] },

  // Week 13-14 → lesson-19
  { id: 'k39', character: '天', onyomi: 'テン', kunyomi: 'あめ', meaning: 'heaven, sky', meaningVi: 'Thiên, trời', week: 13, lessonId: 'lesson-19', examples: ['天気（てんき）', '天気予報（てんきよほう）'] },
  { id: 'k40', character: '気', onyomi: 'キ', kunyomi: '', meaning: 'spirit, energy', meaningVi: 'Khí', week: 13, lessonId: 'lesson-19', examples: ['天気（てんき）', '元気（げんき）'] },
  { id: 'k41', character: '雨', onyomi: 'ウ', kunyomi: 'あめ', meaning: 'rain', meaningVi: 'Vũ, mưa', week: 13, lessonId: 'lesson-19', examples: ['雨（あめ）', '雨天（うてん）'] },
  { id: 'k42', character: '雪', onyomi: 'セツ', kunyomi: 'ゆき', meaning: 'snow', meaningVi: 'Tuyết', week: 13, lessonId: 'lesson-19', examples: ['雪（ゆき）', '雪山（ゆきやま）'] },

  // Week 15-16 → lesson-21,22
  { id: 'k43', character: '語', onyomi: 'ゴ', kunyomi: 'かた-る', meaning: 'language, word', meaningVi: 'Ngữ, ngôn ngữ', week: 15, lessonId: 'lesson-21', examples: ['日本語（にほんご）', '英語（えいご）'] },
  { id: 'k44', character: '力', onyomi: 'リョク、リキ', kunyomi: 'ちから', meaning: 'power, strength', meaningVi: 'Lực, sức mạnh', week: 15, lessonId: 'lesson-21', examples: ['力（ちから）', '協力（きょうりょく）'] },
  { id: 'k45', character: '手', onyomi: 'シュ', kunyomi: 'て', meaning: 'hand', meaningVi: 'Thủ, tay', week: 15, lessonId: 'lesson-22', examples: ['手紙（てがみ）', '右手（みぎて）'] },
  { id: 'k46', character: '口', onyomi: 'コウ、ク', kunyomi: 'くち', meaning: 'mouth', meaningVi: 'Khẩu, miệng', week: 15, lessonId: 'lesson-22', examples: ['入口（いりぐち）', '出口（でぐち）'] },

  // Week 17-18 → lesson-23
  { id: 'k47', character: '事', onyomi: 'ジ', kunyomi: 'こと', meaning: 'thing, matter', meaningVi: 'Sự, việc', week: 17, lessonId: 'lesson-23', examples: ['仕事（しごと）', '食事（しょくじ）'] },
  { id: 'k48', character: '仕', onyomi: 'シ', kunyomi: 'つか-える', meaning: 'serve, attend', meaningVi: 'Sĩ, làm việc', week: 17, lessonId: 'lesson-23', examples: ['仕事（しごと）', '仕事（しごと）'] },
  { id: 'k49', character: '使', onyomi: 'シ', kunyomi: 'つか-う', meaning: 'use', meaningVi: 'Sử, dùng', week: 17, lessonId: 'lesson-23', examples: ['使う（つかう）', '使用（しよう）'] },
  { id: 'k50', character: '便', onyomi: 'ベン、ビン', kunyomi: '', meaning: 'convenience', meaningVi: 'Tiện', week: 17, lessonId: 'lesson-23', examples: ['便利（べんり）', '不便（ふべん）'] },

  // Week 19-20 → lesson-24
  { id: 'k51', character: '教', onyomi: 'キョウ', kunyomi: 'おし-える', meaning: 'teach', meaningVi: 'Giáo, dạy', week: 19, lessonId: 'lesson-24', examples: ['教室（きょうしつ）', '教育（きょういく）'] },
  { id: 'k52', character: '室', onyomi: 'シツ', kunyomi: 'むろ', meaning: 'room', meaningVi: 'Thất, phòng', week: 19, lessonId: 'lesson-24', examples: ['教室（きょうしつ）', '教室（きょうしつ）'] },
  { id: 'k53', character: '問', onyomi: 'モン', kunyomi: 'と-う', meaning: 'question', meaningVi: 'Vấn, hỏi', week: 19, lessonId: 'lesson-24', examples: ['質問（しつもん）', '問題（もんだい）'] },
  { id: 'k54', character: '題', onyomi: 'ダイ', kunyomi: '', meaning: 'topic, title', meaningVi: 'Đề, chủ đề', week: 19, lessonId: 'lesson-24', examples: ['問題（もんだい）', '話題（わだい）'] },

  // Week 21-22 → lesson-26
  { id: 'k55', character: '病', onyomi: 'ビョウ', kunyomi: 'や-む', meaning: 'illness', meaningVi: 'Bệnh', week: 21, lessonId: 'lesson-26', examples: ['病院（びょういん）', '病気（びょうき）'] },
  { id: 'k56', character: '院', onyomi: 'イン', kunyomi: '', meaning: 'institution', meaningVi: 'Viện', week: 21, lessonId: 'lesson-26', examples: ['病院（びょういん）', '大学院（だいがくいん）'] },
  { id: 'k57', character: '薬', onyomi: 'ヤク', kunyomi: 'くすり', meaning: 'medicine', meaningVi: 'Dược, thuốc', week: 21, lessonId: 'lesson-26', examples: ['薬（くすり）', '薬局（やっきょく）'] },
  { id: 'k58', character: '死', onyomi: 'シ', kunyomi: 'し-ぬ', meaning: 'death', meaningVi: 'Tử, chết', week: 21, lessonId: 'lesson-26', examples: ['死ぬ（しぬ）', '死亡（しぼう）'] },

  // Week 23-24 → lesson-33
  { id: 'k59', character: '始', onyomi: 'シ', kunyomi: 'はじ-める', meaning: 'begin', meaningVi: 'Thủy, bắt đầu', week: 23, lessonId: 'lesson-33', examples: ['始まる（はじまる）', '開始（かいし）'] },
  { id: 'k60', character: '終', onyomi: 'シュウ', kunyomi: 'お-わる', meaning: 'end, finish', meaningVi: 'Chung, kết thúc', week: 23, lessonId: 'lesson-33', examples: ['終わる（おわる）', '終電（しゅうでん）'] },
  { id: 'k61', character: '作', onyomi: 'サク', kunyomi: 'つく-る', meaning: 'make, create', meaningVi: 'Tác, làm', week: 23, lessonId: 'lesson-33', examples: ['作る（つくる）', '作品（さくひん）'] },
  { id: 'k62', character: '業', onyomi: 'ギョウ', kunyomi: '', meaning: 'business, work', meaningVi: 'Nghiệp, việc', week: 23, lessonId: 'lesson-33', examples: ['仕事（しごと）', '勉強（べんきょう）'] },

  // Week 25-26 → lesson-36
  { id: 'k63', character: '速', onyomi: 'ソク', kunyomi: 'はや-い', meaning: 'fast, quick', meaningVi: 'Tốc, nhanh', week: 25, lessonId: 'lesson-36', examples: ['速い（はやい）', '速度（そくど）'] },
  { id: 'k64', character: '急', onyomi: 'キュウ', kunyomi: 'いそ-ぐ', meaning: 'hurry, urgent', meaningVi: 'Cấp, gấp', week: 25, lessonId: 'lesson-36', examples: ['急ぐ（いそぐ）', '急に（きゅうに）'] },
  { id: 'k65', character: '運', onyomi: 'ウン', kunyomi: 'はこ-ぶ', meaning: 'carry, luck', meaningVi: 'Vận, vận chuyển', week: 25, lessonId: 'lesson-36', examples: ['運転（うんてん）', '運動（うんどう）'] },
  { id: 'k66', character: '動', onyomi: 'ドウ', kunyomi: 'うご-く', meaning: 'move', meaningVi: 'Động, di chuyển', week: 25, lessonId: 'lesson-36', examples: ['動物（どうぶつ）', '動く（うごく）'] },

  // Week 27-28 → lesson-38
  { id: 'k67', character: '集', onyomi: 'シュウ', kunyomi: 'あつ-まる', meaning: 'gather, collect', meaningVi: 'Tập, tập hợp', week: 27, lessonId: 'lesson-38', examples: ['集まる（あつまる）', '集合（しゅうごう）'] },
  { id: 'k68', character: '合', onyomi: 'ゴウ', kunyomi: 'あ-う', meaning: 'match, join', meaningVi: 'Hợp, hợp', week: 27, lessonId: 'lesson-38', examples: ['合う（あう）', '都合（つごう）'] },
  { id: 'k69', character: '開', onyomi: 'カイ', kunyomi: 'ひら-く', meaning: 'open', meaningVi: 'Khai, mở', week: 27, lessonId: 'lesson-38', examples: ['開ける（あける）', '開店（かいてん）'] },
  { id: 'k70', character: '閉', onyomi: 'ヘイ', kunyomi: 'し-まる', meaning: 'close, shut', meaningVi: 'Bế, đóng', week: 27, lessonId: 'lesson-38', examples: ['閉める（しめる）', '閉店（へいてん）'] },

  // Week 29-30 → lesson-39
  { id: 'k71', character: '伝', onyomi: 'デン', kunyomi: 'つた-える', meaning: 'transmit', meaningVi: 'Truyền', week: 29, lessonId: 'lesson-39', examples: ['伝える（つたえる）', '電話（でんわ）'] },
  { id: 'k72', character: '連', onyomi: 'レン', kunyomi: 'つれ-る', meaning: 'take along', meaningVi: 'Liên, dẫn', week: 29, lessonId: 'lesson-39', examples: ['連絡（れんらく）', '連れていく（つれていく）'] },
  { id: 'k73', character: '相', onyomi: 'ソウ、ショウ', kunyomi: 'あい', meaning: 'mutual', meaningVi: 'Tương, nhau', week: 29, lessonId: 'lesson-39', examples: ['相談（そうだん）', '相手（あいて）'] },
  { id: 'k74', character: '談', onyomi: 'ダン', kunyomi: '', meaning: 'talk, discuss', meaningVi: 'Đàm, nói chuyện', week: 29, lessonId: 'lesson-39', examples: ['相談（そうだん）', '相談（そうだん）'] },

  // Week 31-32 → lesson-41
  { id: 'k75', character: '意', onyomi: 'イ', kunyomi: '', meaning: 'idea, mind', meaningVi: 'Ý, ý nghĩ', week: 31, lessonId: 'lesson-41', examples: ['意見（いけん）', '注意（ちゅうい）'] },
  { id: 'k76', character: '味', onyomi: 'ミ', kunyomi: 'あじ', meaning: 'taste, flavor', meaningVi: 'Vị, mùi vị', week: 31, lessonId: 'lesson-41', examples: ['意味（いみ）', '味（あじ）'] },
  { id: 'k77', character: '注', onyomi: 'チュウ', kunyomi: 'そそ-ぐ', meaning: 'pour, note', meaningVi: 'Chú, chú ý', week: 31, lessonId: 'lesson-41', examples: ['注意（ちゅうい）', '注文（ちゅうもん）'] },
  { id: 'k78', character: '文', onyomi: 'ブン、モン', kunyomi: 'ふみ', meaning: 'sentence, text', meaningVi: 'Văn, văn bản', week: 31, lessonId: 'lesson-41', examples: ['文章（ぶんしょう）', '文化（ぶんか）'] },

  // Week 33-34 → lesson-43
  { id: 'k79', character: '理', onyomi: 'リ', kunyomi: '', meaning: 'reason, logic', meaningVi: 'Lý, lý do', week: 33, lessonId: 'lesson-43', examples: ['理由（りゆう）', '理解（りかい）'] },
  { id: 'k80', character: '由', onyomi: 'ユウ、ユ', kunyomi: 'よし', meaning: 'reason, cause', meaningVi: 'Do, lý do', week: 33, lessonId: 'lesson-43', examples: ['理由（りゆう）', '自由（じゆう）'] },
  { id: 'k81', character: '決', onyomi: 'ケツ', kunyomi: 'き-める', meaning: 'decide', meaningVi: 'Quyết, quyết định', week: 33, lessonId: 'lesson-43', examples: ['決める（きめる）', '決定（けってい）'] },
  { id: 'k82', character: '定', onyomi: 'テイ、ジョウ', kunyomi: 'さだ-める', meaning: 'fix, decide', meaningVi: 'Định, định', week: 33, lessonId: 'lesson-43', examples: ['予定（よてい）', '定義（ていぎ）'] },

  // Week 35-36 → lesson-44
  { id: 'k83', character: '約', onyomi: 'ヤク', kunyomi: '', meaning: 'promise, contract', meaningVi: 'Ước, ước hẹn', week: 35, lessonId: 'lesson-44', examples: ['約束（やくそく）', '予約（よやく）'] },
  { id: 'k84', character: '束', onyomi: 'ソク', kunyomi: 'たば', meaning: 'bundle, tie', meaningVi: 'Thúc, bó', week: 35, lessonId: 'lesson-44', examples: ['約束（やくそく）', '束（たば）'] },
  { id: 'k85', character: '変', onyomi: 'ヘン', kunyomi: 'か-わる', meaning: 'change, strange', meaningVi: 'Biến, thay đổi', week: 35, lessonId: 'lesson-44', examples: ['変わる（かわる）', '変更（へんこう）'] },
  { id: 'k86', character: '化', onyomi: 'カ', kunyomi: 'ば-ける', meaning: 'change, transform', meaningVi: 'Hóa, biến hóa', week: 35, lessonId: 'lesson-44', examples: ['変化（へんか）', '文化（ぶんか）'] },

  // Week 37-38 → lesson-45
  { id: 'k87', character: '選', onyomi: 'セン', kunyomi: 'えら-ぶ', meaning: 'choose, select', meaningVi: 'Tuyển, chọn', week: 37, lessonId: 'lesson-45', examples: ['選ぶ（えらぶ）', '選択（せんたく）'] },
  { id: 'k88', character: '択', onyomi: 'タク', kunyomi: '', meaning: 'choose', meaningVi: 'Trạch, chọn', week: 37, lessonId: 'lesson-45', examples: ['選択（せんたく）', '選択肢（せんたくし）'] },
  { id: 'k89', character: '希', onyomi: 'キ', kunyomi: '', meaning: 'hope, rare', meaningVi: 'Hy, hy vọng', week: 37, lessonId: 'lesson-45', examples: ['希望（きぼう）', '希少（きしょう）'] },
  { id: 'k90', character: '望', onyomi: 'ボウ、モウ', kunyomi: 'のぞ-む', meaning: 'hope, desire', meaningVi: 'Vọng, mong', week: 37, lessonId: 'lesson-45', examples: ['希望（きぼう）', '望む（のぞむ）'] },

  // Week 39-40 → lesson-47
  { id: 'k91', character: '待', onyomi: 'タイ', kunyomi: 'ま-つ', meaning: 'wait', meaningVi: 'Đãi, chờ', week: 39, lessonId: 'lesson-47', examples: ['待つ（まつ）', '待合室（まちあいしつ）'] },
  { id: 'k92', character: '着', onyomi: 'チャク', kunyomi: 'き-る、つ-く', meaning: 'wear, arrive', meaningVi: 'Trước, mặc/đến', week: 39, lessonId: 'lesson-47', examples: ['着る（きる）', '到着（とうちゃく）'] },
  { id: 'k93', character: '持', onyomi: 'ジ', kunyomi: 'も-つ', meaning: 'hold, have', meaningVi: 'Trì, cầm', week: 39, lessonId: 'lesson-47', examples: ['持つ（もつ）', '気持ち（きもち）'] },
  { id: 'k94', character: '送', onyomi: 'ソウ', kunyomi: 'おく-る', meaning: 'send', meaningVi: 'Tống, gửi', week: 39, lessonId: 'lesson-47', examples: ['送る（おくる）', '送信（そうしん）'] },

  // Week 41-42 → lesson-47
  { id: 'k95', character: '発', onyomi: 'ハツ、ホツ', kunyomi: '', meaning: 'depart, emit', meaningVi: 'Phát, phát ra', week: 41, lessonId: 'lesson-47', examples: ['出発（しゅっぱつ）', '発表（はっぴょう）'] },
  { id: 'k96', character: '表', onyomi: 'ヒョウ', kunyomi: 'あらわ-す', meaning: 'surface, express', meaningVi: 'Biểu, biểu hiện', week: 41, lessonId: 'lesson-47', examples: ['発表（はっぴょう）', '表示（ひょうじ）'] },
  { id: 'k97', character: '示', onyomi: 'ジ', kunyomi: 'しめ-す', meaning: 'show', meaningVi: 'Thị, chỉ ra', week: 41, lessonId: 'lesson-47', examples: ['指示（しじ）', '示す（しめす）'] },
  { id: 'k98', character: '現', onyomi: 'ゲン', kunyomi: 'あらわ-れる', meaning: 'appear, current', meaningVi: 'Hiện, hiện tại', week: 41, lessonId: 'lesson-47', examples: ['現在（げんざい）', '現実（げんじつ）'] },

  // Week 43-44 → lesson-47
  { id: 'k99', character: '認', onyomi: 'ニン', kunyomi: 'みと-める', meaning: 'recognize', meaningVi: 'Nhận, nhận ra', week: 43, lessonId: 'lesson-47', examples: ['認める（みとめる）', '認識（にんしき）'] },
  { id: 'k100', character: '識', onyomi: 'シキ', kunyomi: '', meaning: 'discriminate', meaningVi: 'Thức, nhận thức', week: 43, lessonId: 'lesson-47', examples: ['知識（ちしき）', '意識（いしき）'] },
  { id: 'k101', character: '説', onyomi: 'セツ', kunyomi: 'と-く', meaning: 'explain, theory', meaningVi: 'Thuyết, thuyết minh', week: 43, lessonId: 'lesson-47', examples: ['説明（せつめい）', '小説（しょうせつ）'] },
  { id: 'k102', character: '明', onyomi: 'メイ、ミョウ', kunyomi: 'あか-るい', meaning: 'bright, clear', meaningVi: 'Minh, sáng', week: 43, lessonId: 'lesson-47', examples: ['明るい（あかるい）', '説明（せつめい）'] },

  // Week 45-46 → lesson-48
  { id: 'k103', character: '境', onyomi: 'キョウ、ケイ', kunyomi: 'さかい', meaning: 'boundary', meaningVi: 'Cảnh, ranh giới', week: 45, lessonId: 'lesson-48', examples: ['環境（かんきょう）', '境界（きょうかい）'] },
  { id: 'k104', character: '環', onyomi: 'カン', kunyomi: '', meaning: 'ring, environ', meaningVi: 'Hoàn, vòng', week: 45, lessonId: 'lesson-48', examples: ['環境（かんきょう）', '環境（かんきょう）'] },
  { id: 'k105', character: '自', onyomi: 'ジ、シ', kunyomi: 'みずか-ら', meaning: 'oneself', meaningVi: 'Tự, tự mình', week: 45, lessonId: 'lesson-48', examples: ['自分（じぶん）', '自動（じどう）'] },
  { id: 'k106', character: '然', onyomi: 'ゼン、ネン', kunyomi: '', meaning: 'so, nature', meaningVi: 'Nhiên, như vậy', week: 45, lessonId: 'lesson-48', examples: ['自然（しぜん）', '当然（とうぜん）'] },

  // Week 47-48 → lesson-48
  { id: 'k107', character: '保', onyomi: 'ホ', kunyomi: 'たも-つ', meaning: 'protect, maintain', meaningVi: 'Bảo, bảo vệ', week: 47, lessonId: 'lesson-48', examples: ['保護（ほご）', '保育（ほいく）'] },
  { id: 'k108', character: '護', onyomi: 'ゴ', kunyomi: '', meaning: 'protect', meaningVi: 'Hộ, bảo hộ', week: 47, lessonId: 'lesson-48', examples: ['保護（ほご）', '護衛（ごえい）'] },
  { id: 'k109', character: '管', onyomi: 'カン', kunyomi: '', meaning: 'pipe, manage', meaningVi: 'Quản, quản lý', week: 47, lessonId: 'lesson-48', examples: ['管理（かんり）', '保管（ほかん）'] },
  { id: 'k110', character: '理', onyomi: 'リ', kunyomi: '', meaning: 'logic, reason', meaningVi: 'Lý, lý luận', week: 47, lessonId: 'lesson-48', examples: ['管理（かんり）', '料理（りょうり）'] },

  // Week 49-50 → review (no specific lesson)
  { id: 'k111', character: '指', onyomi: 'シ', kunyomi: 'ゆび、さ-す', meaning: 'finger, point', meaningVi: 'Chỉ, ngón tay', week: 49, lessonId: 'lesson-48', examples: ['指（ゆび）', '指示（しじ）'] },
  { id: 'k112', character: '導', onyomi: 'ドウ', kunyomi: 'みちび-く', meaning: 'guide, lead', meaningVi: 'Đạo, dẫn dắt', week: 49, lessonId: 'lesson-48', examples: ['指導（しどう）', '案内（あんない）'] },
  { id: 'k113', character: '育', onyomi: 'イク', kunyomi: 'そだ-つ', meaning: 'raise, educate', meaningVi: 'Dục, nuôi dạy', week: 49, lessonId: 'lesson-48', examples: ['教育（きょういく）', '子育て（こそだて）'] },
  { id: 'k114', character: '練', onyomi: 'レン', kunyomi: 'ね-る', meaning: 'practice, train', meaningVi: 'Luyện, luyện tập', week: 49, lessonId: 'lesson-48', examples: ['練習（れんしゅう）', '訓練（くんれん）'] },

  // === Bài 9: Thích/Không thích ===
  { id: 'k115', character: '好', onyomi: 'コウ', kunyomi: 'す-く、この-む', meaning: 'like, fond of', meaningVi: 'Hảo, thích', week: 5, lessonId: 'lesson-9', examples: ['好き（すき）', '好物（こうぶつ）'] },
  { id: 'k116', character: '嫌', onyomi: 'ゲン', kunyomi: 'いや、きら-う', meaning: 'dislike', meaningVi: 'Hiềm, ghét', week: 5, lessonId: 'lesson-9', examples: ['嫌い（きらい）', '嫌（いや）'] },
  { id: 'k117', character: '欲', onyomi: 'ヨク', kunyomi: 'ほ-しい', meaning: 'desire, want', meaningVi: 'Dục, muốn', week: 5, lessonId: 'lesson-9', examples: ['欲しい（ほしい）', '欲望（よくぼう）'] },
  { id: 'k118', character: '飼', onyomi: 'シ', kunyomi: 'か-う', meaning: 'keep (a pet)', meaningVi: 'Tự, nuôi', week: 5, lessonId: 'lesson-9', examples: ['飼う（かう）', '飼育（しいく）'] },

  // === Bài 11: Vị trí ===
  { id: 'k119', character: '上', onyomi: 'ジョウ', kunyomi: 'うえ、うわ', meaning: 'above, top', meaningVi: 'Thượng, trên', week: 6, lessonId: 'lesson-11', examples: ['上（うえ）', '上手（じょうず）'] },
  { id: 'k120', character: '下', onyomi: 'カ、ゲ', kunyomi: 'した、さ-がる', meaning: 'below, under', meaningVi: 'Hạ, dưới', week: 6, lessonId: 'lesson-11', examples: ['下（した）', '下手（へた）'] },
  { id: 'k121', character: '中', onyomi: 'チュウ', kunyomi: 'なか', meaning: 'middle, inside', meaningVi: 'Trung, trong', week: 6, lessonId: 'lesson-11', examples: ['中（なか）', '中学校（ちゅうがっこう）'] },
  { id: 'k122', character: '外', onyomi: 'ガイ、ゲ', kunyomi: 'そと、はず-す', meaning: 'outside', meaningVi: 'Ngoại, ngoài', week: 6, lessonId: 'lesson-11', examples: ['外（そと）', '外国（がいこく）'] },

  // === Bài 12: Thời gian ===
  { id: 'k123', character: '午', onyomi: 'ゴ', kunyomi: '', meaning: 'noon', meaningVi: 'Ngọ, buổi trưa', week: 6, lessonId: 'lesson-12', examples: ['午前（ごぜん）', '午後（ごご）'] },
  { id: 'k124', character: '分', onyomi: 'ブン、フン', kunyomi: 'わ-ける', meaning: 'minute, part', meaningVi: 'Phân, phút', week: 6, lessonId: 'lesson-12', examples: ['三分（さんぷん）', '半分（はんぶん）'] },
  { id: 'k125', character: '毎', onyomi: 'マイ', kunyomi: '', meaning: 'every', meaningVi: 'Mỗi', week: 6, lessonId: 'lesson-12', examples: ['毎日（まいにち）', '毎週（まいしゅう）'] },
  { id: 'k126', character: '週', onyomi: 'シュウ', kunyomi: '', meaning: 'week', meaningVi: 'Chu, tuần', week: 6, lessonId: 'lesson-12', examples: ['今週（こんしゅう）', '週間（しゅうかん）'] },

  // === Bài 13: ～ています (đang làm) ===
  { id: 'k127', character: '仕', onyomi: 'シ', kunyomi: 'つか-える', meaning: 'serve, work', meaningVi: 'Sĩ, làm việc', week: 7, lessonId: 'lesson-13', examples: ['仕事（しごと）', '仕方（しかた）'] },
  { id: 'k128', character: '働', onyomi: 'ドウ', kunyomi: 'はたら-く', meaning: 'work', meaningVi: 'Động, làm việc', week: 7, lessonId: 'lesson-13', examples: ['働く（はたらく）', '労働（ろうどう）'] },
  { id: 'k129', character: '勉', onyomi: 'ベン', kunyomi: '', meaning: 'study, effort', meaningVi: 'Miễn, nỗ lực', week: 7, lessonId: 'lesson-13', examples: ['勉強（べんきょう）', '勤勉（きんべん）'] },
  { id: 'k130', character: '結', onyomi: 'ケツ', kunyomi: 'むす-ぶ', meaning: 'tie, marry', meaningVi: 'Kết, kết hôn', week: 7, lessonId: 'lesson-13', examples: ['結婚（けっこん）', '結果（けっか）'] },

  // === Bài 14: ～てあります (trạng thái) ===
  { id: 'k131', character: '置', onyomi: 'チ', kunyomi: 'お-く', meaning: 'place, put', meaningVi: 'Trí, đặt', week: 7, lessonId: 'lesson-14', examples: ['置く（おく）', '位置（いち）'] },
  { id: 'k132', character: '積', onyomi: 'セキ', kunyomi: 'つ-む', meaning: 'pile, stack', meaningVi: 'Tích, chất đống', week: 7, lessonId: 'lesson-14', examples: ['積み重ね（つみかさね）', '積極的（せっきょくてき）'] },
  { id: 'k133', character: '並', onyomi: 'ヘイ', kunyomi: 'なら-ぶ、なら-べる', meaning: 'line up, parallel', meaningVi: 'Tịnh, xếp hàng', week: 7, lessonId: 'lesson-14', examples: ['並べる（ならべる）', '準備（じゅんび）'] },

  // === Bài 15: Thể ない ===
  { id: 'k134', character: '止', onyomi: 'シ', kunyomi: 'と-める、や-む', meaning: 'stop', meaningVi: 'Chỉ, dừng', week: 8, lessonId: 'lesson-15', examples: ['止める（やめる）', '中止（ちゅうし）'] },
  { id: 'k135', character: '吸', onyomi: 'キュウ', kunyomi: 'す-う', meaning: 'suck, smoke', meaningVi: 'Hấp, hút', week: 8, lessonId: 'lesson-15', examples: ['吸う（すう）', '吸収（きゅうしゅう）'] },
  { id: 'k136', character: '撮', onyomi: 'サツ', kunyomi: 'と-る', meaning: 'take (photo)', meaningVi: 'Toát, chụp', week: 8, lessonId: 'lesson-15', examples: ['撮る（とる）', '撮影（さつえい）'] },
  { id: 'k137', character: '入', onyomi: 'ニュウ', kunyomi: 'はい-る、い-れる', meaning: 'enter', meaningVi: 'Nhập, vào', week: 8, lessonId: 'lesson-15', examples: ['入る（はいる）', '入口（いりぐち）'] },

  // === Bài 16: Kinh nghiệm ===
  { id: 'k138', character: '経', onyomi: 'ケイ', kunyomi: 'た-つ', meaning: 'experience, pass through', meaningVi: 'Kinh, trải qua', week: 8, lessonId: 'lesson-16', examples: ['経験（けいけん）', '経済（けいざい）'] },
  { id: 'k139', character: '験', onyomi: 'ケン', kunyomi: '', meaning: 'verify, effect', meaningVi: 'Nghiệm, kiểm tra', week: 8, lessonId: 'lesson-16', examples: ['経験（けいけん）', '試験（しけん）'] },
  { id: 'k140', character: '旅', onyomi: 'リョ', kunyomi: 'たび', meaning: 'trip, travel', meaningVi: 'Lữ, du lịch', week: 8, lessonId: 'lesson-16', examples: ['旅行（りょこう）', '旅館（りょかん）'] },

  // === Bài 17: Liệt kê ===
  { id: 'k141', character: '列', onyomi: 'レツ', kunyomi: '', meaning: 'row, line', meaningVi: 'Liệt, hàng', week: 8, lessonId: 'lesson-17', examples: ['列（れつ）', '行列（ぎょうれつ）'] },
  { id: 'k142', character: '挙', onyomi: 'キョ', kunyomi: 'あ-げる', meaning: 'raise, cite', meaningVi: 'Cử, đưa ra', week: 8, lessonId: 'lesson-17', examples: ['挙げる（あげる）', '選挙（せんきょ）'] },

  // === Bài 18: Mời mọc ===
  { id: 'k143', character: '誘', onyomi: 'ユウ', kunyomi: 'さそ-う', meaning: 'invite', meaningVi: 'Dụ, mời', week: 9, lessonId: 'lesson-18', examples: ['誘う（さそう）', '誘惑（ゆうわく）'] },
  { id: 'k144', character: '誕', onyomi: 'タン', kunyomi: '', meaning: 'birth', meaningVi: 'Đản, sinh nhật', week: 9, lessonId: 'lesson-18', examples: ['誕生（たんじょう）', '誕生日（たんじょうび）'] },
  { id: 'k145', character: '映', onyomi: 'エイ', kunyomi: 'うつ-る', meaning: 'reflect, movie', meaningVi: 'Ánh, phim', week: 9, lessonId: 'lesson-18', examples: ['映画（えいが）', '映る（うつる）'] },

  // === Bài 20: Điều kiện と ===
  { id: 'k146', character: '冬', onyomi: 'トウ', kunyomi: 'ふゆ', meaning: 'winter', meaningVi: 'Đông, mùa đông', week: 10, lessonId: 'lesson-20', examples: ['冬（ふゆ）', '冬休（ふゆやす）み'] },
  { id: 'k147', character: '春', onyomi: 'シュン', kunyomi: 'はる', meaning: 'spring', meaningVi: 'Xuân, mùa xuân', week: 10, lessonId: 'lesson-20', examples: ['春（はる）', '青春（せいしゅん）'] },
  { id: 'k148', character: '咲', onyomi: 'ショウ', kunyomi: 'さ-く', meaning: 'bloom', meaningVi: 'Tiếu, nở hoa', week: 10, lessonId: 'lesson-20', examples: ['咲く（さく）', '開花（かいか）'] },

  // === Bài 25: Ôn tập thể て ===
  { id: 'k149', character: '窓', onyomi: 'ソウ', kunyomi: 'まど', meaning: 'window', meaningVi: 'Song, cửa sổ', week: 14, lessonId: 'lesson-25', examples: ['窓（まど）', '窓口（まどぐち）'] },
  { id: 'k150', character: '開', onyomi: 'カイ', kunyomi: 'ひら-く、あ-ける', meaning: 'open', meaningVi: 'Khai, mở', week: 14, lessonId: 'lesson-25', examples: ['開ける（あける）', '開店（かいてん）'] },
  { id: 'k151', character: '閉', onyomi: 'ヘイ', kunyomi: 'し-まる、し-める', meaning: 'close', meaningVi: 'Bế, đóng', week: 14, lessonId: 'lesson-25', examples: ['閉める（しめる）', '閉店（へいてん）'] },

  // === Bài 27: Truyền tin ===
  { id: 'k152', character: '伝', onyomi: 'デン', kunyomi: 'つた-える、つた-わる', meaning: 'transmit', meaningVi: 'Truyền, truyền đạt', week: 18, lessonId: 'lesson-27', examples: ['伝える（つたえる）', ' tradition（でんとう）'] },
  { id: 'k153', character: '聞', onyomi: 'ブン', kunyomi: 'き-く', meaning: 'hear, ask', meaningVi: 'Văn, nghe', week: 18, lessonId: 'lesson-27', examples: ['聞く（きく）', '新聞（しんぶん）'] },
  { id: 'k154', character: '話', onyomi: 'ワ', kunyomi: 'はな-す、はなし', meaning: 'talk, story', meaningVi: 'Thoại, nói chuyện', week: 18, lessonId: 'lesson-27', examples: ['話す（はなす）', '電話（でんわ）'] },

  // === Bài 28: Phán đoán ===
  { id: 'k155', character: '判', onyomi: 'ハン', kunyomi: '', meaning: 'judge, discern', meaningVi: 'Phán, phán đoán', week: 19, lessonId: 'lesson-28', examples: ['判断（はんだん）', '裁判（さいばん）'] },
  { id: 'k156', character: '断', onyomi: 'ダン', kunyomi: 'た-つ', meaning: 'cut off, decide', meaningVi: 'Đoạn, đoạn tuyệt', week: 19, lessonId: 'lesson-28', examples: ['判断（はんだん）', '断る（ことわる）'] },

  // === Bài 30: Có thể ===
  { id: 'k157', character: '能', onyomi: 'ノウ', kunyomi: '', meaning: 'ability, capability', meaningVi: 'Năng, khả năng', week: 21, lessonId: 'lesson-30', examples: ['能力（のうりょく）', '可能（かのう）'] },
  { id: 'k158', character: '可', onyomi: 'カ', kunyomi: '', meaning: 'possible', meaningVi: 'Khả, có thể', week: 21, lessonId: 'lesson-30', examples: ['可能（かのう）', '許可（きょか）'] },

  // === Bài 31: Thể て + shimau ===
  { id: 'k159', character: '忘', onyomi: 'ボウ', kunyomi: 'わす-れる', meaning: 'forget', meaningVi: 'Vong, quên', week: 22, lessonId: 'lesson-31', examples: ['忘れる（わすれる）', '忘年会（ぼうねんかい）'] },
  { id: 'k160', character: '失', onyomi: 'シツ', kunyomi: 'うしな-う', meaning: 'lose, fail', meaningVi: 'Thất, mất', week: 22, lessonId: 'lesson-31', examples: ['失う（うしなう）', '失敗（しっぱい）'] },
  { id: 'k161', character: '割', onyomi: 'カツ', kunyomi: 'わ-る', meaning: 'break, divide', meaningVi: 'Cát, chia', week: 22, lessonId: 'lesson-31', examples: ['割る（わる）', '割合（わりあい）'] },

  // === Bài 34: Cho/nhận ===
  { id: 'k162', character: '贈', onyomi: 'ゾウ', kunyomi: 'おく-る', meaning: 'present, gift', meaningVi: 'Tặng, quà tặng', week: 24, lessonId: 'lesson-34', examples: ['贈る（おくる）', '贈り物（おくりもの）'] },
  { id: 'k163', character: '礼', onyomi: 'レイ', kunyomi: '', meaning: 'thanks, bow', meaningVi: 'Lễ, cảm ơn', week: 24, lessonId: 'lesson-34', examples: ['お礼（おれい）', '礼儀（れいぎ）'] },
  { id: 'k164', character: '借', onyomi: 'シャク', kunyomi: 'か-りる', meaning: 'borrow', meaningVi: 'Tá, mượn', week: 24, lessonId: 'lesson-34', examples: ['借りる（かりる）', '借金（しゃっきん）'] },
  { id: 'k165', character: '貸', onyomi: 'タイ', kunyomi: 'か-す', meaning: 'lend', meaningVi: 'Đại, cho mượn', week: 24, lessonId: 'lesson-34', examples: ['貸す（かす）', '貸切（かしきり）'] },

  // === Bài 35: Quá... ===
  { id: 'k166', character: '過', onyomi: 'カ', kunyomi: 'す-ぎる', meaning: 'overdo, excess', meaningVi: 'Quá, vượt quá', week: 25, lessonId: 'lesson-35', examples: ['過ぎる（すぎる）', '過剰（かじょう）'] },
  { id: 'k167', character: '難', onyomi: 'ナン', kunyomi: 'むずか-しい', meaning: 'difficult', meaningVi: 'Nan, khó khăn', week: 25, lessonId: 'lesson-35', examples: ['難しい（むずかしい）', '困難（こんなん）'] },
  { id: 'k168', character: '易', onyomi: 'エキ、イ', kunyomi: 'やさ-しい', meaning: 'easy', meaningVi: 'Dịch, dễ dàng', week: 25, lessonId: 'lesson-35', examples: ['易しい（やさしい）', '容易（ようい）'] },

  // === Bài 37: Chuẩn bị trước ===
  { id: 'k169', character: '預', onyomi: 'ヨ', kunyomi: 'あず-ける', meaning: 'deposit, entrust', meaningVi: 'Dự, gửi', week: 27, lessonId: 'lesson-37', examples: ['預ける（あずける）', '預金（よきん）'] },
  { id: 'k170', character: '整', onyomi: 'セイ', kunyomi: 'ととの-える', meaning: 'arrange, prepare', meaningVi: 'Chỉnh, chuẩn bị', week: 27, lessonId: 'lesson-37', examples: ['準備（じゅんび）', '整理（せいり）'] },
  { id: 'k171', character: '確', onyomi: 'カク', kunyomi: 'たし-か', meaning: 'sure, certain', meaningVi: 'Xác, chắc chắn', week: 27, lessonId: 'lesson-37', examples: ['確認（かくにん）', '確か（たしか）'] },

  // === Bài 40: Dự định ===
  { id: 'k172', character: '予', onyomi: 'ヨ', kunyomi: '', meaning: 'beforehand, prior', meaningVi: 'Dự, trước', week: 30, lessonId: 'lesson-40', examples: ['予定（よてい）', '予約（よやく）'] },
  { id: 'k173', character: '定', onyomi: 'テイ、ジョウ', kunyomi: 'さだ-める', meaning: 'fix, decide', meaningVi: 'Định, định', week: 30, lessonId: 'lesson-40', examples: ['予定（よてい）', '定義（ていぎ）'] },
  { id: 'k174', character: '観', onyomi: 'カン', kunyomi: 'み-る', meaning: 'observe, view', meaningVi: 'Quan, quan sát', week: 30, lessonId: 'lesson-40', examples: ['見学（けんがく）', '観光（かんこう）'] },

  // === Bài 42: Trông có vẻ ===
  { id: 'k175', character: '様', onyomi: 'ヨウ', kunyomi: '', meaning: 'manner, way', meaningVi: 'Dạng, dáng vẻ', week: 32, lessonId: 'lesson-42', examples: ['様子（ようす）', '様子見（ようすみ）'] },
  { id: 'k176', character: '幸', onyomi: 'コウ', kunyomi: 'さいわ-い、しあわ-せ', meaning: 'happiness', meaningVi: 'Hạnh, may mắn', week: 32, lessonId: 'lesson-42', examples: ['幸せ（しあわせ）', '幸福（こうふく）'] },
  { id: 'k177', character: '味', onyomi: 'ミ', kunyomi: 'あじ', meaning: 'taste, flavor', meaningVi: 'Vị, mùi vị', week: 32, lessonId: 'lesson-42', examples: ['味（あじ）', '意味（いみ）'] },
];

export default kanji;
