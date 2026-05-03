// Vocabulary data for Minna no Nihongo Lessons 1-50
import { Vocabulary } from '@/types';

export const vocabulary: Vocabulary[] = [
  // === Bài 1: Giới thiệu ===
  { id: 'v1', japanese: 'わたし', reading: '私', meaning: 'I, me', meaningVi: 'Tôi', lessonId: 'hiragana-1', example: 'わたしはがくせいです。', exampleVi: 'Tôi là học sinh.' },
  { id: 'v2', japanese: 'がくせい', reading: '学生', meaning: 'student', meaningVi: 'Học sinh', lessonId: 'hiragana-1', example: 'たなかさんはがくせいです。', exampleVi: 'Tanaka là học sinh.' },
  { id: 'v3', japanese: 'せんせい', reading: '先生', meaning: 'teacher', meaningVi: 'Giáo viên', lessonId: 'hiragana-1', example: 'やまだせんせいはやさしいです。', exampleVi: 'Cô Yamada hiền lành.' },
  { id: 'v4', japanese: 'かいしゃいん', reading: '会社員', meaning: 'company employee', meaningVi: 'Nhân viên công ty', lessonId: 'hiragana-1', example: '父はかいしゃいんです。', exampleVi: 'Bố tôi là nhân viên công ty.' },
  { id: 'v5', japanese: 'ぎんこういん', reading: '銀行員', meaning: 'bank employee', meaningVi: 'Nhân viên ngân hàng', lessonId: 'hiragana-1', example: 'あねはぎんこういんです。', exampleVi: 'Chị tôi là nhân viên ngân hàng.' },
  { id: 'v6', japanese: 'いしゃ', reading: '医者', meaning: 'doctor', meaningVi: 'Bác sĩ', lessonId: 'hiragana-1', example: 'おかあさんはいしゃです。', exampleVi: 'Mẹ tôi là bác sĩ.' },
  { id: 'v7', japanese: 'だいがく', reading: '大学', meaning: 'university', meaningVi: 'Trường đại học', lessonId: 'hiragana-1', example: 'だいがくでにほんごをべんきょうします。', exampleVi: 'Tôi học tiếng Nhật ở trường đại học.' },
  { id: 'v8', japanese: 'びょういん', reading: '病院', meaning: 'hospital', meaningVi: 'Bệnh viện', lessonId: 'hiragana-1', example: 'びょういんにつとめています。', exampleVi: 'Tôi làm việc ở bệnh viện.' },
  { id: 'v9', japanese: 'でんわ', reading: '電話', meaning: 'telephone', meaningVi: 'Điện thoại', lessonId: 'hiragana-1', example: 'ともだちでんわをかけました。', exampleVi: 'Tôi đã gọi điện cho bạn.' },
  { id: 'v10', japanese: 'くに', reading: '国', meaning: 'country', meaningVi: 'Quốc gia', lessonId: 'hiragana-1', example: 'あなたはどこのくにじんですか。', exampleVi: 'Bạn là người nước nào?' },

  // === Bài 4: Tân ngữ ===
  { id: 'v11', japanese: 'ほん', reading: '本', meaning: 'book', meaningVi: 'Sách', lessonId: 'lesson-4', example: 'ほんをよみます。', exampleVi: 'Tôi đọc sách.' },
  { id: 'v12', japanese: 'じしょ', reading: '辞書', meaning: 'dictionary', meaningVi: 'Từ điển', lessonId: 'lesson-4', example: 'にほんごのじしょをもっています。', exampleVi: 'Tôi có một cuốn từ điển tiếng Nhật.' },
  { id: 'v13', japanese: 'ざっし', reading: '雑誌', meaning: 'magazine', meaningVi: 'Tạp chí', lessonId: 'lesson-4', example: 'ざっしをみました。', exampleVi: 'Tôi đã xem tạp chí.' },
  { id: 'v14', japanese: 'しんぶん', reading: '新聞', meaning: 'newspaper', meaningVi: 'Báo', lessonId: 'lesson-4', example: 'まいあさしんぶんをよみます。', exampleVi: 'Mỗi sáng tôi đọc báo.' },
  { id: 'v15', japanese: 'テレビ', reading: '', meaning: 'TV', meaningVi: 'Tivi', lessonId: 'lesson-4', example: 'テレビをみます。', exampleVi: 'Tôi xem tivi.' },
  { id: 'v16', japanese: 'ラジオ', reading: '', meaning: 'radio', meaningVi: 'Ra-đi-ô', lessonId: 'lesson-4', example: 'ラジオでにほんごをききます。', exampleVi: 'Tôi nghe tiếng Nhật qua radio.' },
  { id: 'v17', japanese: 'えんぴつ', reading: '鉛筆', meaning: 'pencil', meaningVi: 'Bút chì', lessonId: 'lesson-4', example: 'えんぴつでかきます。', exampleVi: 'Tôi viết bằng bút chì.' },
  { id: 'v18', japanese: 'かぎ', reading: '鍵', meaning: 'key', meaningVi: 'Chìa khóa', lessonId: 'lesson-4', example: 'かぎをなくしました。', exampleVi: 'Tôi đã mất chìa khóa.' },

  // === Bài 5: Động từ ===
  { id: 'v19', japanese: 'たべる', reading: '食べる', meaning: 'to eat', meaningVi: 'Ăn', lessonId: 'lesson-5', example: 'あさごはんをたべます。', exampleVi: 'Tôi ăn sáng.' },
  { id: 'v20', japanese: 'のむ', reading: '飲む', meaning: 'to drink', meaningVi: 'Uống', lessonId: 'lesson-5', example: 'コーヒーをのみます。', exampleVi: 'Tôi uống cà phê.' },
  { id: 'v21', japanese: 'よむ', reading: '読む', meaning: 'to read', meaningVi: 'Đọc', lessonId: 'lesson-5', example: 'まいにちほんをよみます。', exampleVi: 'Mỗi ngày tôi đọc sách.' },
  { id: 'v22', japanese: 'かく', reading: '書く', meaning: 'to write', meaningVi: 'Viết', lessonId: 'lesson-5', example: 'てがみをかきます。', exampleVi: 'Tôi viết thư.' },
  { id: 'v23', japanese: 'きく', reading: '聞く', meaning: 'to listen', meaningVi: 'Nghe', lessonId: 'lesson-5', example: 'おんがくをききます。', exampleVi: 'Tôi nghe nhạc.' },
  { id: 'v24', japanese: 'みる', reading: '見る', meaning: 'to see/watch', meaningVi: 'Xem', lessonId: 'lesson-5', example: 'えいがをみます。', exampleVi: 'Tôi xem phim.' },
  { id: 'v25', japanese: 'かう', reading: '買う', meaning: 'to buy', meaningVi: 'Mua', lessonId: 'lesson-5', example: 'スーパーでやさいをかいます。', exampleVi: 'Tôi mua rau ở siêu thị.' },
  { id: 'v26', japanese: 'あるく', reading: '歩く', meaning: 'to walk', meaningVi: 'Đi bộ', lessonId: 'lesson-5', example: 'がっこうまであるきます。', exampleVi: 'Tôi đi bộ đến trường.' },

  // === Bài 6: Thời gian ===
  { id: 'v27', japanese: 'まいにち', reading: '毎日', meaning: 'every day', meaningVi: 'Mỗi ngày', lessonId: 'lesson-6', example: 'まいにちにほんごをべんきょうします。', exampleVi: 'Mỗi ngày tôi học tiếng Nhật.' },
  { id: 'v28', japanese: 'まいあさ', reading: '毎朝', meaning: 'every morning', meaningVi: 'Mỗi sáng', lessonId: 'lesson-6', example: 'まいあさ６じにおきます。', exampleVi: 'Mỗi sáng tôi dậy lúc 6 giờ.' },
  { id: 'v29', japanese: 'まいばん', reading: '毎晩', meaning: 'every night', meaningVi: 'Mỗi tối', lessonId: 'lesson-6', example: 'まいばん１１じにねます。', exampleVi: 'Mỗi tối tôi ngủ lúc 11 giờ.' },
  { id: 'v30', japanese: 'ごぜん', reading: '午前', meaning: 'AM (morning)', meaningVi: 'Buổi sáng (AM)', lessonId: 'lesson-6', example: 'ごぜん９じにがっこうにはいります。', exampleVi: 'Tôi vào trường lúc 9 giờ sáng.' },
  { id: 'v31', japanese: 'ごご', reading: '午後', meaning: 'PM (afternoon)', meaningVi: 'Buổi chiều (PM)', lessonId: 'lesson-6', example: 'ごご２じにしゅくだいをします。', exampleVi: 'Tôi làm bài tập lúc 2 giờ chiều.' },
  { id: 'v32', japanese: 'じかん', reading: '時間', meaning: 'time/hour', meaningVi: 'Giờ đồng hồ', lessonId: 'lesson-6', example: 'じかんがありません。', exampleVi: 'Tôi không có thời gian.' },
  { id: 'v33', japanese: 'はん', reading: '半', meaning: 'half', meaningVi: 'Rưỡi', lessonId: 'lesson-6', example: '７じはんにおきます。', exampleVi: 'Tôi dậy lúc 7 rưỡi.' },

  // === Bài 7: Địa điểm ===
  { id: 'v34', japanese: 'えき', reading: '駅', meaning: 'station', meaningVi: 'Ga', lessonId: 'lesson-7', example: 'えきのちかくにがっこうがあります。', exampleVi: 'Có một trường học gần ga.' },
  { id: 'v35', japanese: 'うち', reading: '家', meaning: 'home/house', meaningVi: 'Nhà', lessonId: 'lesson-7', example: 'うちにかえります。', exampleVi: 'Tôi về nhà.' },
  { id: 'v36', japanese: 'がっこう', reading: '学校', meaning: 'school', meaningVi: 'Trường học', lessonId: 'lesson-7', example: 'がっこうでおべんきょうします。', exampleVi: 'Tôi học ở trường.' },
  { id: 'v37', japanese: 'スーパー', reading: '', meaning: 'supermarket', meaningVi: 'Siêu thị', lessonId: 'lesson-7', example: 'スーパーでくだものをかいます。', exampleVi: 'Tôi mua hoa quả ở siêu thị.' },
  { id: 'v38', japanese: 'レストラン', reading: '', meaning: 'restaurant', meaningVi: 'Nhà hàng', lessonId: 'lesson-7', example: 'レストランでばんごはんをたべます。', exampleVi: 'Tôi ăn tối ở nhà hàng.' },
  { id: 'v39', japanese: 'きっさてん', reading: '喫茶店', meaning: 'cafe', meaningVi: 'Quán cà phê', lessonId: 'lesson-7', example: 'きっさてんでコーヒーをのみます。', exampleVi: 'Tôi uống cà phê ở quán.' },

  // === Bài 8: Tặng nhận ===
  { id: 'v40', japanese: 'ともだち', reading: '友達', meaning: 'friend', meaningVi: 'Bạn bè', lessonId: 'lesson-8', example: 'ともだちにプレゼントをあげました。', exampleVi: 'Tôi đã tặng quà cho bạn.' },
  { id: 'v41', japanese: 'かぞく', reading: '家族', meaning: 'family', meaningVi: 'Gia đình', lessonId: 'lesson-8', example: 'かぞくは４人です。', exampleVi: 'Gia đình tôi có 4 người.' },
  { id: 'v42', japanese: 'おとうさん', reading: 'お父さん', meaning: 'father', meaningVi: 'Bố', lessonId: 'lesson-8', example: 'おとうさんはかいしゃいんです。', exampleVi: 'Bố tôi là nhân viên công ty.' },
  { id: 'v43', japanese: 'おかあさん', reading: 'お母さん', meaning: 'mother', meaningVi: 'Mẹ', lessonId: 'lesson-8', example: 'おかあさんはりょうりをつくります。', exampleVi: 'Mẹ tôi nấu ăn.' },
  { id: 'v44', japanese: 'いもうと', reading: '妹', meaning: 'younger sister', meaningVi: 'Em gái', lessonId: 'lesson-8', example: 'いもうとはだいがくせいです。', exampleVi: 'Em gái tôi là sinh viên.' },
  { id: 'v45', japanese: 'おにいさん', reading: 'お兄さん', meaning: 'older brother', meaningVi: 'Anh trai', lessonId: 'lesson-8', example: 'おにいさんはぎんこうではたらいています。', exampleVi: 'Anh trai tôi làm việc ở ngân hàng.' },

  // === Bài 9: Thích/ghét ===
  { id: 'v46', japanese: 'すき', reading: '好き', meaning: 'like', meaningVi: 'Thích', lessonId: 'lesson-9', example: 'ねこがすきです。', exampleVi: 'Tôi thích mèo.' },
  { id: 'v47', japanese: 'きらい', reading: '嫌い', meaning: 'dislike', meaningVi: 'Ghét', lessonId: 'lesson-9', example: 'にんじんがきらいです。', exampleVi: 'Tôi ghét cà rốt.' },
  { id: 'v48', japanese: 'ほしい', reading: '欲しい', meaning: 'want (thing)', meaningVi: 'Muốn (đồ vật)', lessonId: 'lesson-9', example: 'あたらしいくるまがほしいです。', exampleVi: 'Tôi muốn có xe mới.' },
  { id: 'v49', japanese: 'たい', reading: '～たい', meaning: 'want to do', meaningVi: 'Muốn làm...', lessonId: 'lesson-9', example: 'にほんにいきたいです。', exampleVi: 'Tôi muốn đi Nhật Bản.' },

  // === Bài 10: So sánh ===
  { id: 'v50', japanese: 'はやい', reading: '早い', meaning: 'early/fast', meaningVi: 'Sớm/nhanh', lessonId: 'lesson-10', example: 'でんしゃはバスよりはやいです。', exampleVi: 'Tàu nhanh hơn xe buýt.' },
  { id: 'v51', japanese: 'おそい', reading: '遅い', meaning: 'late/slow', meaningVi: 'Muộn/chậm', lessonId: 'lesson-10', example: 'きょうはおそくおきました。', exampleVi: 'Hôm nay tôi dậy muộn.' },
  { id: 'v52', japanese: 'たかい', reading: '高い', meaning: 'tall/expensive', meaningVi: 'Cao/đắt', lessonId: 'lesson-10', example: 'このくつはたかいです。', exampleVi: 'Đôi giày này đắt.' },
  { id: 'v53', japanese: 'やすい', reading: '安い', meaning: 'cheap', meaningVi: 'Rẻ', lessonId: 'lesson-10', example: 'このシャツはやすいです。', exampleVi: 'Cái áo này rẻ.' },

  // === Bài 11: Động từ nhóm + thể て ===
  { id: 'v54', japanese: 'おく', reading: '置く', meaning: 'to place', meaningVi: 'Đặt, để', lessonId: 'lesson-11', example: 'つくえのうえにほんをおきます。', exampleVi: 'Tôi đặt sách lên bàn.' },
  { id: 'v55', japanese: 'もつ', reading: '持つ', meaning: 'to hold/carry', meaningVi: 'Cầm, mang', lessonId: 'lesson-11', example: 'にもつをもってください。', exampleVi: 'Hãy mang hành lý.' },
  { id: 'v56', japanese: 'まつ', reading: '待つ', meaning: 'to wait', meaningVi: 'Chờ đợi', lessonId: 'lesson-11', example: 'えきでまつ。', exampleVi: 'Tôi chờ ở ga.' },
  { id: 'v57', japanese: 'とる', reading: '取る', meaning: 'to take', meaningVi: 'Lấy', lessonId: 'lesson-11', example: 'やすみをとります。', exampleVi: 'Tôi xin nghỉ phép.' },
  { id: 'v58', japanese: 'はなす', reading: '話す', meaning: 'to speak', meaningVi: 'Nói chuyện', lessonId: 'lesson-11', example: 'にほんごではなします。', exampleVi: 'Tôi nói bằng tiếng Nhật.' },
  { id: 'v59', japanese: 'おしえる', reading: '教える', meaning: 'to teach', meaningVi: 'Dạy', lessonId: 'lesson-11', example: 'せんせいににほんごをおしえてもらいます。', exampleVi: 'Tôi được cô dạy tiếng Nhật.' },
  { id: 'v60', japanese: 'ならう', reading: '習う', meaning: 'to learn', meaningVi: 'Học (từ ai)', lessonId: 'lesson-11', example: 'やまだせんせいからピアノをならいます。', exampleVi: 'Tôi học piano từ cô Yamada.' },

  // === Bài 12: Tính từ ===
  { id: 'v61', japanese: 'あつい', reading: '暑い', meaning: 'hot (weather)', meaningVi: 'Nóng (thời tiết)', lessonId: 'lesson-12', example: 'なつはあついです。', exampleVi: 'Mùa hè thì nóng.' },
  { id: 'v62', japanese: 'さむい', reading: '寒い', meaning: 'cold (weather)', meaningVi: 'Lạnh (thời tiết)', lessonId: 'lesson-12', example: 'ふゆはさむいです。', exampleVi: 'Mùa đông thì lạnh.' },
  { id: 'v63', japanese: 'あたらしい', reading: '新しい', meaning: 'new', meaningVi: 'Mới', lessonId: 'lesson-12', example: 'あたらしいでんわをかいました。', exampleVi: 'Tôi đã mua điện thoại mới.' },
  { id: 'v64', japanese: 'ふるい', reading: '古い', meaning: 'old (thing)', meaningVi: 'Cũ (đồ vật)', lessonId: 'lesson-12', example: 'このいえはふるいです。', exampleVi: 'Ngôi nhà này cũ.' },
  { id: 'v65', japanese: 'いい', reading: '良い', meaning: 'good', meaningVi: 'Tốt', lessonId: 'lesson-12', example: 'てんきが いいです。', exampleVi: 'Thời tiết tốt.' },
  { id: 'v66', japanese: 'わかい', reading: '若い', meaning: 'young', meaningVi: 'Trẻ', lessonId: 'lesson-12', example: 'やまださんはわかいです。', exampleVi: 'Yamada trẻ.' },

  // === Bài 16: Kinh nghiệm ===
  { id: 'v67', japanese: 'りょこう', reading: '旅行', meaning: 'travel', meaningVi: 'Du lịch', lessonId: 'lesson-16', example: 'なつやすみにりょこうしました。', exampleVi: 'Tôi đã du lịch vào kỳ nghỉ hè.' },
  { id: 'v68', japanese: 'しごと', reading: '仕事', meaning: 'work/job', meaningVi: 'Công việc', lessonId: 'lesson-16', example: 'しごとがつまらないです。', exampleVi: 'Công việc nhàm chán.' },
  { id: 'v69', japanese: 'しゅみ', reading: '趣味', meaning: 'hobby', meaningVi: 'Sở thích', lessonId: 'lesson-16', example: 'しゅみはおりょうりです。', exampleVi: 'Sở thích của tôi là nấu ăn.' },
  { id: 'v70', japanese: 'おんがく', reading: '音楽', meaning: 'music', meaningVi: 'Âm nhạc', lessonId: 'lesson-16', example: 'おんがくをきくのがすきです。', exampleVi: 'Tôi thích nghe nhạc.' },
  { id: 'v71', japanese: 'えいが', reading: '映画', meaning: 'movie', meaningVi: 'Phim', lessonId: 'lesson-16', example: 'えいがをみにいきました。', exampleVi: 'Tôi đã đi xem phim.' },
  { id: 'v72', japanese: 'スポーツ', reading: '', meaning: 'sports', meaningVi: 'Thể thao', lessonId: 'lesson-16', example: 'スポーツがすきですか。', exampleVi: 'Bạn thích thể thao không?' },

  // === Bài 17: Liệt kê ===
  { id: 'v73', japanese: 'しゅうまつ', reading: '週末', meaning: 'weekend', meaningVi: 'Cuối tuần', lessonId: 'lesson-17', example: 'しゅうまつはなにをしますか。', exampleVi: 'Cuối tuần bạn làm gì?' },
  { id: 'v74', japanese: 'あそぶ', reading: '遊ぶ', meaning: 'to play', meaningVi: 'Chơi', lessonId: 'lesson-17', example: 'こうえんでこどもとあそびます。', exampleVi: 'Tôi chơi với trẻ con ở công viên.' },
  { id: 'v75', japanese: 'およぐ', reading: '泳ぐ', meaning: 'to swim', meaningVi: 'Bơi', lessonId: 'lesson-17', example: 'うみでおよぎました。', exampleVi: 'Tôi đã bơi ở biển.' },

  // === Bài 19: Điều kiện ===
  { id: 'v76', japanese: 'もし', reading: '', meaning: 'if', meaningVi: 'Nếu', lessonId: 'lesson-19', example: 'もしあめがふったら、いきません。', exampleVi: 'Nếu mưa thì tôi không đi.' },
  { id: 'v77', japanese: 'べんきょう', reading: '勉強', meaning: 'study', meaningVi: 'Học tập', lessonId: 'lesson-19', example: 'べんきょうしたら、テストにごうかくします。', exampleVi: 'Nếu học thì sẽ đỗ kỳ thi.' },
  { id: 'v78', japanese: 'れんしゅう', reading: '練習', meaning: 'practice', meaningVi: 'Luyện tập', lessonId: 'lesson-19', example: 'まいにちれんしゅうします。', exampleVi: 'Tôi luyện tập mỗi ngày.' },

  // === Bài 20: Điều kiện tự nhiên ===
  { id: 'v79', japanese: 'しゅうかん', reading: '週間', meaning: 'week', meaningVi: 'Tuần', lessonId: 'lesson-21', example: '１しゅうかんにほんごをべんきょうします。', exampleVi: 'Tôi học tiếng Nhật trong 1 tuần.' },
  { id: 'v80', japanese: 'げつ', reading: '月', meaning: 'month', meaningVi: 'Tháng', lessonId: 'lesson-21', example: 'らいげつりょこうします。', exampleVi: 'Tháng sau tôi sẽ du lịch.' },
  { id: 'v81', japanese: 'ねん', reading: '年', meaning: 'year', meaningVi: 'Năm', lessonId: 'lesson-21', example: 'ことしは２０２６ねんです。', exampleVi: 'Năm nay là năm 2026.' },

  // === Bài 22: Thể thông thường ===
  { id: 'v82', japanese: 'うんてん', reading: '運転', meaning: 'drive', meaningVi: 'Lái xe', lessonId: 'lesson-22', example: 'うんてんができます。', exampleVi: 'Tôi có thể lái xe.' },
  { id: 'v83', japanese: 'りかい', reading: '理解', meaning: 'understand', meaningVi: 'Hiểu', lessonId: 'lesson-22', example: 'よくりかいできました。', exampleVi: 'Tôi đã hiểu rõ.' },
  { id: 'v84', japanese: 'せつめい', reading: '説明', meaning: 'explain', meaningVi: 'Giải thích', lessonId: 'lesson-22', example: 'にほんごでせつめいしてください。', exampleVi: 'Hãy giải thích bằng tiếng Nhật.' },

  // === Bài 23: Bị động ===
  { id: 'v85', japanese: 'ゆうめい', reading: '有名', meaning: 'famous', meaningVi: 'Nổi tiếng', lessonId: 'lesson-23', example: 'ふじさんはゆうめいです。', exampleVi: 'Núi Phú Sĩ nổi tiếng.' },
  { id: 'v86', japanese: 'きれい', reading: '綺麗', meaning: 'beautiful/clean', meaningVi: 'Đẹp/sạch', lessonId: 'lesson-23', example: 'へやをきれいにしました。', exampleVi: 'Tôi đã dọn phòng sạch đẹp.' },
  { id: 'v87', japanese: 'しずか', reading: '静か', meaning: 'quiet', meaningVi: 'Yên tĩnh', lessonId: 'lesson-23', example: 'としょかんはしずかです。', exampleVi: 'Thư viện yên tĩnh.' },
  { id: 'v88', japanese: 'にぎやか', reading: '', meaning: 'lively', meaningVi: 'Nhộn nhịp', lessonId: 'lesson-23', example: 'とうきょうはにぎやかです。', exampleVi: 'Tokyo nhộn nhịp.' },

  // === Bài 26: Trạng thái ===
  { id: 'v89', japanese: 'けっこん', reading: '結婚', meaning: 'marriage', meaningVi: 'Kết hôn', lessonId: 'lesson-26', example: 'らいねんけっこんします。', exampleVi: 'Năm sau tôi sẽ kết hôn.' },
  { id: 'v90', japanese: 'しんごう', reading: '信号', meaning: 'traffic light', meaningVi: 'Đèn giao thông', lessonId: 'lesson-26', example: 'しんごうがまっています。', exampleVi: 'Đèn giao thông đang sáng đỏ.' },

  // === Bài 27: Truyền tin ===
  { id: 'v91', japanese: 'てんき', reading: '天気', meaning: 'weather', meaningVi: 'Thời tiết', lessonId: 'lesson-27', example: 'あしたのてんきはどうですか。', exampleVi: 'Thời tiết mai thế nào?' },
  { id: 'v92', japanese: 'あめ', reading: '雨', meaning: 'rain', meaningVi: 'Mưa', lessonId: 'lesson-27', example: 'きょうはあめがふっています。', exampleVi: 'Hôm nay trời đang mưa.' },
  { id: 'v93', japanese: 'ゆき', reading: '雪', meaning: 'snow', meaningVi: 'Tuyết', lessonId: 'lesson-27', example: 'ゆきがふるでしょう。', exampleVi: 'Có lẽ tuyết sẽ rơi.' },
  { id: 'v94', japanese: 'くもり', reading: '曇り', meaning: 'cloudy', meaningVi: 'Nhiều mây', lessonId: 'lesson-27', example: 'きょうはくもりです。', exampleVi: 'Hôm nay trời nhiều mây.' },

  // === Bài 28: Phán đoán ===
  { id: 'v95', japanese: 'たぶん', reading: '多分', meaning: 'probably', meaningVi: 'Có lẽ', lessonId: 'lesson-28', example: 'たぶんあしたあめでしょう。', exampleVi: 'Có lẽ mai sẽ mưa.' },
  { id: 'v96', japanese: 'もしかしたら', reading: '', meaning: 'perhaps', meaningVi: 'Có thể', lessonId: 'lesson-28', example: 'もしかしたら、おかしくなるかもしれません。', exampleVi: 'Có thể sẽ trở nên lạ.' },

  // === Bài 31: Hoàn thành ===
  { id: 'v97', japanese: 'わすれる', reading: '忘れる', meaning: 'to forget', meaningVi: 'Quên', lessonId: 'lesson-31', example: 'やくそくをわすれてしまいました。', exampleVi: 'Tôi lỡ quên mất lời hẹn.' },
  { id: 'v98', japanese: 'みつける', reading: '見つける', meaning: 'to find', meaningVi: 'Tìm thấy', lessonId: 'lesson-31', example: 'さいふをみつけました。', exampleVi: 'Tôi đã tìm thấy ví.' },

  // === Bài 33: Quyết định ===
  { id: 'v99', japanese: 'けいかく', reading: '計画', meaning: 'plan', meaningVi: 'Kế hoạch', lessonId: 'lesson-33', example: 'りょこうのけいかくをたてました。', exampleVi: 'Tôi đã lập kế hoạch du lịch.' },
  { id: 'v100', japanese: 'よてい', reading: '予定', meaning: 'schedule', meaningVi: 'Lịch trình', lessonId: 'lesson-33', example: 'らいしゅうのよていをかくにんします。', exampleVi: 'Tôi kiểm tra lịch trình tuần sau.' },

  // === Bài 36: Mục tiêu ===
  { id: 'v101', japanese: 'じゆう', reading: '自由', meaning: 'freedom', meaningVi: 'Tự do', lessonId: 'lesson-36', example: 'じゆうにしてください。', exampleVi: 'Hãy làm theo ý thích.' },
  { id: 'v102', japanese: 'まんぞく', reading: '満足', meaning: 'satisfied', meaningVi: 'Hài lòng', lessonId: 'lesson-36', example: 'りょうりにまんぞくしました。', exampleVi: 'Tôi hài lòng với món ăn.' },

  // === Bài 38: Mặc dù ===
  { id: 'v103', japanese: 'いじょう', reading: '以上', meaning: 'more than', meaningVi: 'Trên, hơn', lessonId: 'lesson-38', example: '１００いじょうの人がきました。', exampleVi: 'Trên 100 người đã đến.' },
  { id: 'v104', japanese: 'いらい', reading: '以来', meaning: 'since then', meaningVi: 'Kể từ đó', lessonId: 'lesson-38', example: 'にほんにきていらい、３ねんたちました。', exampleVi: 'Kể từ khi đến Nhật đã 3 năm.' },

  // === Bài 41: Thử làm ===
  { id: 'v105', japanese: 'びじゅつかん', reading: '美術館', meaning: 'art museum', meaningVi: 'Bảo tàng mỹ thuật', lessonId: 'lesson-41', example: 'びじゅつかんへいきます。', exampleVi: 'Tôi đi bảo tàng mỹ thuật.' },
  { id: 'v106', japanese: 'どうぶつえん', reading: '動物園', meaning: 'zoo', meaningVi: 'Vườn thú', lessonId: 'lesson-41', example: 'どうぶつえんでパンダをみました。', exampleVi: 'Tôi đã xem gấu trúc ở vườn thú.' },

  // === Bài 43: Ý kiến ===
  { id: 'v107', japanese: 'じゅんび', reading: '準備', meaning: 'preparation', meaningVi: 'Chuẩn bị', lessonId: 'lesson-43', example: 'りょこうのじゅんびをします。', exampleVi: 'Tôi chuẩn bị cho chuyến du lịch.' },
  { id: 'v108', japanese: 'こころ', reading: '心', meaning: 'heart/mind', meaningVi: 'Trái tim/tâm trí', lessonId: 'lesson-43', example: 'こころからありがとうございます。', exampleVi: 'Xin cảm ơn từ tận đáy lòng.' },

  // === Bài 44: ～ために (mục đích / nguyên nhân) ===
  { id: 'v168', japanese: 'りゆう', reading: '理由', meaning: 'reason', meaningVi: 'Lý do', lessonId: 'lesson-44', example: 'りゆうをおしえてください。', exampleVi: 'Hãy cho tôi biết lý do.' },
  { id: 'v169', japanese: 'じゆう', reading: '自由', meaning: 'freedom', meaningVi: 'Tự do', lessonId: 'lesson-44', example: 'じゆうにはんぶんできます。', exampleVi: 'Có thể nói tự do.' },
  { id: 'v170', japanese: 'けんこう', reading: '健康', meaning: 'health', meaningVi: 'Sức khỏe', lessonId: 'lesson-44', example: 'けんこうのために、うんどうします。', exampleVi: 'Vì sức khỏe nên tôi tập thể dục.' },
  { id: 'v171', japanese: 'びょうき', reading: '病気', meaning: 'illness/sick', meaningVi: 'Ốm đau', lessonId: 'lesson-44', example: 'びょうきのために、がっこうをやすみました。', exampleVi: 'Vì ốm nên tôi nghỉ học.' },
  { id: 'v172', japanese: 'あんぜん', reading: '安全', meaning: 'safety', meaningVi: 'An toàn', lessonId: 'lesson-44', example: 'あんぜんのために、シートベルトをつけます。', exampleVi: 'Vì an toàn nên tôi đeo dây an toàn.' },
  { id: 'v173', japanese: 'もくてき', reading: '目的', meaning: 'purpose/goal', meaningVi: 'Mục đích', lessonId: 'lesson-44', example: 'もくてきをはたすために、がんばります。', exampleVi: 'Để đạt mục đích, tôi sẽ cố gắng.' },

  // === Bài 45: ～ように (để mà / mục tiêu) ===
  { id: 'v174', japanese: 'こころがける', reading: '心がける', meaning: 'to make an effort to', meaningVi: 'Chú ý, cố gắng', lessonId: 'lesson-45', example: 'まいにちうんどうするようにこころがけています。', exampleVi: 'Tôi chú ý tập thể dục mỗi ngày.' },
  { id: 'v175', japanese: 'やくにたつ', reading: '役に立つ', meaning: 'useful/helpful', meaningVi: 'Có ích', lessonId: 'lesson-45', example: 'にほんごはやくにたちます。', exampleVi: 'Tiếng Nhật rất có ích.' },
  { id: 'v176', japanese: 'せいかつ', reading: '生活', meaning: 'daily life', meaningVi: 'Cuộc sống', lessonId: 'lesson-45', example: 'せいかつのために、お金をかせぎます。', exampleVi: 'Để sống, tôi kiếm tiền.' },
  { id: 'v177', japanese: 'きをつける', reading: '気をつける', meaning: 'to be careful', meaningVi: 'Cẩn thận', lessonId: 'lesson-45', example: 'わすれないように、きをつけてください。', exampleVi: 'Hãy cẩn thận để không quên.' },
  { id: 'v178', japanese: 'まもる', reading: '守る', meaning: 'to protect/keep (a promise)', meaningVi: 'Giữ, bảo vệ', lessonId: 'lesson-45', example: 'やくそくをまもるようにしています。', exampleVi: 'Tôi cố gắng giữ lời hứa.' },
  { id: 'v179', japanese: 'へいきん', reading: '平均', meaning: 'average', meaningVi: 'Trung bình', lessonId: 'lesson-45', example: 'へいきんてきなせいかつをおくっています。', exampleVi: 'Tôi sống cuộc sống trung bình.' },

  // === Bài 47: Kính ngữ ===
  { id: 'v109', japanese: 'おきゃく', reading: 'お客', meaning: 'customer/guest', meaningVi: 'Khách', lessonId: 'lesson-47', example: 'おきゃくがきました。', exampleVi: 'Khách đã đến.' },
  { id: 'v110', japanese: 'おみせ', reading: 'お店', meaning: 'shop (polite)', meaningVi: 'Cửa hàng (lịch sự)', lessonId: 'lesson-47', example: 'おみせは９じにあきます。', exampleVi: 'Cửa hàng mở lúc 9 giờ.' },
  { id: 'v111', japanese: 'めしあがる', reading: '召し上がる', meaning: 'to eat/drink (honorific)', meaningVi: 'Ăn/uống (tôn kính)', lessonId: 'lesson-47', example: 'どうぞめしあがってください。', exampleVi: 'Xin mời ngài dùng.' },
  { id: 'v112', japanese: 'いらっしゃる', reading: '', meaning: 'to come/go/be (honorific)', meaningVi: 'Đi/đến/ở (tôn kính)', lessonId: 'lesson-47', example: 'しゃちょうはいらっしゃいました。', exampleVi: 'Giám đốc đã đến.' },

  // === Bài 48: Khiêm nhường ===
  { id: 'v113', japanese: 'もうしあげる', reading: '申し上げる', meaning: 'to say (humble)', meaningVi: 'Nói (khiêm nhường)', lessonId: 'lesson-48', example: 'お礼をもうしあげます。', exampleVi: 'Tôi xin bày tỏ lời cảm ơn.' },
  { id: 'v114', japanese: 'いただく', reading: '頂く', meaning: 'to receive (humble)', meaningVi: 'Nhận (khiêm nhường)', lessonId: 'lesson-48', example: 'おみやげをいただきました。', exampleVi: 'Tôi đã nhận quà lưu niệm.' },

  // === Bài 13: ～ています ===
  { id: 'v115', japanese: 'べんきょうする', reading: '勉強する', meaning: 'to study', meaningVi: 'Học', lessonId: 'lesson-13', example: 'いまにほんごをべんきょうしています。', exampleVi: 'Bây giờ tôi đang học tiếng Nhật.' },
  { id: 'v116', japanese: 'りゅうがく', reading: '留学', meaning: 'study abroad', meaningVi: 'Du học', lessonId: 'lesson-13', example: 'にほんにりゅうがくしています。', exampleVi: 'Tôi đang du học ở Nhật.' },
  { id: 'v117', japanese: 'つかう', reading: '使う', meaning: 'to use', meaningVi: 'Sử dụng', lessonId: 'lesson-13', example: 'でんわをつかっています。', exampleVi: 'Tôi đang sử dụng điện thoại.' },
  { id: 'v118', japanese: 'すむ', reading: '住む', meaning: 'to live (in a place)', meaningVi: 'Sống (ở đâu)', lessonId: 'lesson-13', example: 'とうきょうにすんでいます。', exampleVi: 'Tôi đang sống ở Tokyo.' },
  { id: 'v119', japanese: 'けっこんする', reading: '結婚する', meaning: 'to marry', meaningVi: 'Kết hôn', lessonId: 'lesson-13', example: 'やまださんはけっこんしています。', exampleVi: 'Yamada đã kết hôn rồi.' },

  // === Bài 14: ～てあります ===
  { id: 'v120', japanese: 'まど', reading: '窓', meaning: 'window', meaningVi: 'Cửa sổ', lessonId: 'lesson-14', example: 'まどがあけてあります。', exampleVi: 'Cửa sổ đang được mở.' },
  { id: 'v121', japanese: 'ドア', reading: '', meaning: 'door', meaningVi: 'Cửa ra vào', lessonId: 'lesson-14', example: 'ドアがしまってあります。', exampleVi: 'Cửa đang được đóng.' },
  { id: 'v122', japanese: 'かざる', reading: '飾る', meaning: 'to decorate', meaningVi: 'Trang trí', lessonId: 'lesson-14', example: 'へやにはながかざってあります。', exampleVi: 'Hoa đã được trang trí trong phòng.' },
  { id: 'v123', japanese: 'ならべる', reading: '並べる', meaning: 'to line up/arrange', meaningVi: 'Sắp xếp', lessonId: 'lesson-14', example: 'つくえのうえにほんがならべてあります。', exampleVi: 'Sách đã được xếp trên bàn.' },

  // === Bài 15: Thể ない ===
  { id: 'v124', japanese: 'すう', reading: '吸う', meaning: 'to smoke/inhale', meaningVi: 'Hút (thuốc)', lessonId: 'lesson-15', example: 'ここでたばこをすわないでください。', exampleVi: 'Xin đừng hút thuốc ở đây.' },
  { id: 'v125', japanese: 'とる', reading: '撮る', meaning: 'to take (photo)', meaningVi: 'Chụp (ảnh)', lessonId: 'lesson-15', example: 'しゃしんをとってはいけません。', exampleVi: 'Không được chụp ảnh.' },
  { id: 'v126', japanese: 'わかい', reading: '若い', meaning: 'young', meaningVi: 'Trẻ', lessonId: 'lesson-15', example: 'あのひとはまだわかくないです。', exampleVi: 'Người kia vẫn chưa trẻ lắm.' },
  { id: 'v127', japanese: 'ようび', reading: '曜日', meaning: 'day of the week', meaningVi: 'Thứ trong tuần', lessonId: 'lesson-15', example: 'きょうはなんようびですか。', exampleVi: 'Hôm nay là thứ mấy?' },

  // === Bài 18: Mời mọc ===
  { id: 'v128', japanese: 'さそう', reading: '誘う', meaning: 'to invite', meaningVi: 'Mời', lessonId: 'lesson-18', example: 'いっしょにえいがをみにいきませんか。', exampleVi: 'Cùng đi xem phim nhé?' },
  { id: 'v129', japanese: 'やくそく', reading: '約束', meaning: 'promise/appointment', meaningVi: 'Hẹn', lessonId: 'lesson-18', example: 'ともだちとやくそくをしました。', exampleVi: 'Tôi đã hẹn với bạn.' },
  { id: 'v130', japanese: 'たんじょうび', reading: '誕生日', meaning: 'birthday', meaningVi: 'Sinh nhật', lessonId: 'lesson-18', example: 'たんじょうびおめでとう。', exampleVi: 'Chúc mừng sinh nhật.' },

  // === Bài 19: ～たら ===
  { id: 'v131', japanese: 'ふゆ', reading: '冬', meaning: 'winter', meaningVi: 'Mùa đông', lessonId: 'lesson-20', example: 'ふゆになると、ゆきがふります。', exampleVi: 'Khi đông đến thì tuyết rơi.' },
  { id: 'v132', japanese: 'はる', reading: '春', meaning: 'spring', meaningVi: 'Mùa xuân', lessonId: 'lesson-20', example: 'はるになったら、さくらがさきます。', exampleVi: 'Khi xuân đến thì hoa anh đào nở.' },
  { id: 'v133', japanese: 'さく', reading: '咲く', meaning: 'to bloom', meaningVi: 'Nở hoa', lessonId: 'lesson-20', example: 'さくらがさいています。', exampleVi: 'Hoa anh đào đang nở.' },
  { id: 'v134', japanese: 'おす', reading: '押す', meaning: 'to push/press', meaningVi: 'Nhấn (nút)', lessonId: 'lesson-20', example: 'ボタンをおしてください。', exampleVi: 'Hãy nhấn nút.' },

  // === Bài 21: Nghĩa vụ ===
  { id: 'v135', japanese: 'おかあさん', reading: 'お母さん', meaning: 'mother', meaningVi: 'Mẹ', lessonId: 'lesson-24', example: 'おかあさんはりょうりをつくっています。', exampleVi: 'Mẹ đang nấu ăn.' },
  { id: 'v136', japanese: 'こども', reading: '子供', meaning: 'child', meaningVi: 'Trẻ con', lessonId: 'lesson-24', example: 'こどもがこうえんであそびます。', exampleVi: 'Trẻ con chơi ở công viên.' },
  { id: 'v137', japanese: 'いや', reading: 'いや', meaning: 'unwilling', meaningVi: 'Không muốn', lessonId: 'lesson-24', example: 'べんきょうするのはいやです。', exampleVi: 'Tôi không muốn học.' },
  { id: 'v138', japanese: 'せまい', reading: '狭い', meaning: 'narrow/cramped', meaningVi: 'Chật hẹp', lessonId: 'lesson-24', example: 'このへやはせまいです。', exampleVi: 'Phòng này chật.' },

  // === Bài 24: Sai khiến ===
  { id: 'v139', japanese: 'すわる', reading: '座る', meaning: 'to sit', meaningVi: 'Ngồi', lessonId: 'lesson-25', example: 'いすにすわってください。', exampleVi: 'Hãy ngồi xuống ghế.' },
  { id: 'v140', japanese: 'たつ', reading: '立つ', meaning: 'to stand', meaningVi: 'Đứng', lessonId: 'lesson-25', example: 'ここにたってください。', exampleVi: 'Hãy đứng ở đây.' },
  { id: 'v141', japanese: 'あう', reading: '会う', meaning: 'to meet', meaningVi: 'Gặp', lessonId: 'lesson-25', example: 'ともだちにあいました。', exampleVi: 'Tôi đã gặp bạn.' },

  // === Bài 26: Trạng thái ===
  { id: 'v142', japanese: 'そうだん', reading: '相談', meaning: 'consultation', meaningVi: 'Thảo luận', lessonId: 'lesson-29', example: 'せんせいとそうだんします。', exampleVi: 'Tôi thảo luận với giáo viên.' },
  { id: 'v143', japanese: 'きめる', reading: '決める', meaning: 'to decide', meaningVi: 'Quyết định', lessonId: 'lesson-29', example: 'りょこうのさきをきめました。', exampleVi: 'Tôi đã quyết định điểm du lịch.' },
  { id: 'v144', japanese: 'おしえる', reading: '教える', meaning: 'to teach/tell', meaningVi: 'Dạy', lessonId: 'lesson-29', example: 'みちをおしえてください。', exampleVi: 'Hãy chỉ đường cho tôi.' },

  // === Bài 29: Thảo luận ===
  { id: 'v145', japanese: 'あぶない', reading: '危ない', meaning: 'dangerous', meaningVi: 'Nguy hiểm', lessonId: 'lesson-30', example: 'あぶないですから、きをつけてください。', exampleVi: 'Vì nguy hiểm nên hãy cẩn thận.' },
  { id: 'v146', japanese: 'あんぜん', reading: '安全', meaning: 'safe', meaningVi: 'An toàn', lessonId: 'lesson-30', example: 'にほんはあんぜんです。', exampleVi: 'Nhật Bản an toàn.' },
  { id: 'v147', japanese: 'ひつよう', reading: '必要', meaning: 'necessary', meaningVi: 'Cần thiết', lessonId: 'lesson-30', example: 'びざがひつようですか。', exampleVi: 'Có cần visa không?' },

  // === Bài 30: Có thể ===
  { id: 'v148', japanese: 'できる', reading: '', meaning: 'can do/able to', meaningVi: 'Có thể làm', lessonId: 'lesson-32', example: 'にほんごがはなせます。', exampleVi: 'Tôi có thể nói tiếng Nhật.' },
  { id: 'v149', japanese: 'わかる', reading: '分かる', meaning: 'understand', meaningVi: 'Hiểu', lessonId: 'lesson-32', example: 'にほんごがわかります。', exampleVi: 'Tôi hiểu tiếng Nhật.' },
  { id: 'v150', japanese: 'つかれる', reading: '疲れる', meaning: 'to get tired', meaningVi: 'Mệt mỏi', lessonId: 'lesson-32', example: 'しごとでつかれました。', exampleVi: 'Tôi mệt vì công việc.' },

  // === Bài 32: Khả năng ===
  { id: 'v151', japanese: 'てつだう', reading: '手伝う', meaning: 'to help', meaningVi: 'Giúp đỡ', lessonId: 'lesson-34', example: 'ともだちにてつだってもらいました。', exampleVi: 'Tôi đã được bạn giúp đỡ.' },
  { id: 'v152', japanese: 'おしえてくれる', reading: '教えてくれる', meaning: 'teach me (for my benefit)', meaningVi: 'Dạy cho mình', lessonId: 'lesson-34', example: 'ともだちがにほんごをおしえてくれました。', exampleVi: 'Bạn đã dạy tiếng Nhật cho tôi.' },
  { id: 'v153', japanese: 'みせる', reading: '見せる', meaning: 'to show', meaningVi: 'Cho xem', lessonId: 'lesson-34', example: 'しゃしんをみせてあげます。', exampleVi: 'Tôi cho bạn xem ảnh.' },

  // === Bài 34: Cho nhận ===
  { id: 'v154', japanese: 'おいしい', reading: '美味しい', meaning: 'delicious', meaningVi: 'Ngon', lessonId: 'lesson-35', example: 'このりょうりはおいしいです。', exampleVi: 'Món này ngon.' },
  { id: 'v155', japanese: 'むずかしい', reading: '難しい', meaning: 'difficult', meaningVi: 'Khó', lessonId: 'lesson-35', example: 'にほんごはむずかしいです。', exampleVi: 'Tiếng Nhật khó.' },
  { id: 'v156', japanese: 'やさしい', reading: '易しい', meaning: 'easy/kind', meaningVi: 'Dễ/tốt bụng', lessonId: 'lesson-35', example: 'このほんはやすいです。', exampleVi: 'Cuốn sách này dễ.' },
  { id: 'v157', japanese: 'おおい', reading: '多い', meaning: 'many/much', meaningVi: 'Nhiều', lessonId: 'lesson-35', example: 'しゅくだいがおおいです。', exampleVi: 'Bài tập nhiều.' },
  { id: 'v158', japanese: 'すくない', reading: '少ない', meaning: 'few/little', meaningVi: 'Ít', lessonId: 'lesson-35', example: 'しゅくだいがすくないです。', exampleVi: 'Bài tập ít.' },

  // === Bài 35: Quá... ===
  { id: 'v159', japanese: 'よやく', reading: '予約', meaning: 'reservation', meaningVi: 'Đặt trước', lessonId: 'lesson-37', example: 'ホテルをよやくしておきます。', exampleVi: 'Tôi sẽ đặt khách sạn trước.' },
  { id: 'v160', japanese: 'じゅんび', reading: '準備', meaning: 'preparation', meaningVi: 'Chuẩn bị', lessonId: 'lesson-37', example: 'りょこうのじゅんびをしておきます。', exampleVi: 'Tôi chuẩn bị sẵn cho chuyến đi.' },

  // === Bài 37: Chuẩn bị trước ===
  { id: 'v161', japanese: 'とうちゃく', reading: '到着', meaning: 'arrival', meaningVi: 'Đến nơi', lessonId: 'lesson-39', example: 'でんしゃは１０じにとうちゃくするはずです。', exampleVi: 'Tàu chắc sẽ đến lúc 10 giờ.' },
  { id: 'v162', japanese: 'しんぱい', reading: '心配', meaning: 'worry', meaningVi: 'Lo lắng', lessonId: 'lesson-39', example: 'しんぱいしないでください。', exampleVi: 'Xin đừng lo lắng.' },

  // === Bài 39: Chắc chắn ===
  { id: 'v163', japanese: 'よてい', reading: '予定', meaning: 'schedule/plan', meaningVi: 'Dự định', lessonId: 'lesson-40', example: 'らいしゅうりょこうするつもりです。', exampleVi: 'Tôi định đi du lịch tuần sau.' },
  { id: 'v164', japanese: 'けんがく', reading: '見学', meaning: 'field trip/visit', meaningVi: 'Tham quan học tập', lessonId: 'lesson-40', example: 'こうじょうをけんがくしました。', exampleVi: 'Tôi đã tham quan nhà máy.' },

  // === Bài 40: Dự định ===
  { id: 'v165', japanese: 'しあわせ', reading: '幸せ', meaning: 'happy', meaningVi: 'Hạnh phúc', lessonId: 'lesson-42', example: 'このりょうりはしあわせそうです。', exampleVi: 'Món ăn này trông hạnh phúc.' },
  { id: 'v166', japanese: 'かわいそう', reading: '可哀想', meaning: 'poor (pitiful)', meaningVi: 'Đáng thương', lessonId: 'lesson-42', example: 'そのいぬはかわいそうです。', exampleVi: 'Con chó đó trông đáng thương.' },
  { id: 'v167', japanese: 'できそう', reading: '出来そう', meaning: 'looks doable', meaningVi: 'Có vẻ làm được', lessonId: 'lesson-42', example: 'このりょうりはおいしそうです。', exampleVi: 'Món này trông có vẻ ngon.' },
];

export default vocabulary;
