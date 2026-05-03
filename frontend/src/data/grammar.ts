import { Grammar } from '@/types';

export const grammar: Grammar[] = [
  // === Bài 1-3: Giới thiệu cơ bản ===
  {
    id: 'g1', pattern: '～は～です', meaning: 'A is B', meaningVi: 'A là B', lessonId: 'hiragana-1',
    examples: [
      { japanese: 'わたしはがくせいです。', reading: 'わたしはがくせいです。', meaning: 'I am a student.' },
      { japanese: 'たなかさんはせんせいです。', reading: 'たなかさんはせんせいです。', meaning: 'Tanaka is a teacher.' },
    ]
  },
  {
    id: 'g2', pattern: '～は～じゃありません', meaning: 'A is not B (negative)', meaningVi: 'A không phải là B', lessonId: 'hiragana-1',
    examples: [
      { japanese: 'わたしはせんせいじゃありません。', reading: 'わたしはせんせいじゃありません。', meaning: 'I am not a teacher.' },
    ]
  },
  {
    id: 'g3', pattern: '～は～ですか', meaning: 'Is A B? (question)', meaningVi: 'A có phải là B không?', lessonId: 'hiragana-1',
    examples: [
      { japanese: 'たなかさんがくせいですか。', reading: 'たなかさんがくせいですか。', meaning: 'Is Tanaka a student?' },
      { japanese: 'はい、がくせいです。', reading: 'はい、がくせいです。', meaning: 'Yes, (I am) a student.' },
      { japanese: 'いいえ、がくせいじゃありません。', reading: 'いいえ、がくせいじゃありません。', meaning: 'No, (I am) not a student.' },
    ]
  },

  // === Bài 4-5: Tân ngữ, động từ ===
  {
    id: 'g4', pattern: '～を～ます', meaning: 'do V to O', meaningVi: 'Làm V với tân ngữ O', lessonId: 'lesson-4',
    examples: [
      { japanese: 'ほんをよみます。', reading: 'ほんをよみます。', meaning: 'I read a book.' },
      { japanese: 'みずをのみます。', reading: 'みずをのみます。', meaning: 'I drink water.' },
    ]
  },
  {
    id: 'g5', pattern: '～に～ます', meaning: 'do V at/in/to (time/place)', meaningVi: 'Làm V vào lúc/ở...', lessonId: 'lesson-5',
    examples: [
      { japanese: 'ろくじにおきます。', reading: 'ろくじにおきます。', meaning: 'I wake up at 6 o\'clock.' },
      { japanese: 'がっこうにいきます。', reading: 'がっこうにいきます。', meaning: 'I go to school.' },
    ]
  },
  {
    id: 'g6', pattern: 'で～ます', meaning: 'do V by means of/with', meaningVi: 'Làm V bằng/phương tiện...', lessonId: 'lesson-5',
    examples: [
      { japanese: 'バスでいきます。', reading: 'バスでいきます。', meaning: 'I go by bus.' },
      { japanese: 'はしでたべます。', reading: 'はしでたべます。', meaning: 'I eat with chopsticks.' },
    ]
  },

  // === Bài 6-8: Có/không có, tặng nhận ===
  {
    id: 'g7', pattern: 'あります', meaning: 'there is (inanimate)', meaningVi: 'Có (đồ vật)', lessonId: 'lesson-6',
    examples: [
      { japanese: 'つくえのうえにほんがあります。', reading: 'つくえのうえにほんがあります。', meaning: 'There is a book on the desk.' },
    ]
  },
  {
    id: 'g8', pattern: 'います', meaning: 'there is (animate)', meaningVi: 'Có (người, động vật)', lessonId: 'lesson-6',
    examples: [
      { japanese: 'へやにねこがいます。', reading: 'へやにねこがいます。', meaning: 'There is a cat in the room.' },
    ]
  },
  {
    id: 'g9', pattern: '～にあげます', meaning: 'give to ~', meaningVi: 'Tặng cho...', lessonId: 'lesson-8',
    examples: [
      { japanese: 'ともだちにはなをあげました。', reading: 'ともだちにはなをあげました。', meaning: 'I gave flowers to a friend.' },
    ]
  },
  {
    id: 'g10', pattern: '～にもらいます', meaning: 'receive from ~', meaningVi: 'Nhận từ...', lessonId: 'lesson-8',
    examples: [
      { japanese: 'せんせいにじしょをもらいました。', reading: 'せんせいにじしょをもらいました。', meaning: 'I received a dictionary from the teacher.' },
    ]
  },

  // === Bài 9-10: Thích/ghét, so sánh ===
  {
    id: 'g11', pattern: '～がすきです', meaning: 'like ~', meaningVi: 'Thích...', lessonId: 'lesson-9',
    examples: [
      { japanese: 'さくらがすきです。', reading: 'さくらがすきです。', meaning: 'I like cherry blossoms.' },
      { japanese: 'にほんごのべんきょうがすきです。', reading: 'にほんごのべんきょうがすきです。', meaning: 'I like studying Japanese.' },
    ]
  },
  {
    id: 'g12', pattern: '～がきらいです', meaning: 'dislike ~', meaningVi: 'Ghét...', lessonId: 'lesson-9',
    examples: [
      { japanese: 'にくがきらいです。', reading: 'にくがきらいです。', meaning: 'I dislike meat.' },
    ]
  },
  {
    id: 'g13', pattern: '～がほしいです', meaning: 'want (thing)', meaningVi: 'Muốn (đồ vật)', lessonId: 'lesson-9',
    examples: [
      { japanese: 'あたらしいくるまがほしいです。', reading: 'あたらしいくるまがほしいです。', meaning: 'I want a new car.' },
    ]
  },
  {
    id: 'g14', pattern: '～たいです', meaning: 'want to do ~', meaningVi: 'Muốn làm...', lessonId: 'lesson-9',
    examples: [
      { japanese: 'にほんにいきたいです。', reading: 'にほんにいきたいです。', meaning: 'I want to go to Japan.' },
    ]
  },
  {
    id: 'g15', pattern: '～より～のほうが～です', meaning: '~ is more ~ than ~', meaningVi: 'A... hơn B', lessonId: 'lesson-10',
    examples: [
      { japanese: 'ねこよりいぬのほうがすきです。', reading: 'ねこよりいぬのほうがすきです。', meaning: 'I like dogs more than cats.' },
      { japanese: 'えいごよりにほんごのほうがむずかしいです。', reading: 'えいごよりにほんごのほうがむずかしいです。', meaning: 'Japanese is more difficult than English.' },
    ]
  },

  // === Bài 11-13: Thể て ===
  {
    id: 'g16', pattern: '～てください', meaning: 'please do ~', meaningVi: 'Hãy làm...', lessonId: 'lesson-11',
    examples: [
      { japanese: 'ここに名前をかいてください。', reading: 'ここになまえをかいてください。', meaning: 'Please write your name here.' },
      { japanese: 'もういちどいってください。', reading: 'もういちどいってください。', meaning: 'Please say it one more time.' },
    ]
  },
  {
    id: 'g17', pattern: '～ています', meaning: 'doing ~ / state of ~', meaningVi: 'Đang làm / Trạng thái...', lessonId: 'lesson-13',
    examples: [
      { japanese: 'いまとべんきょうしています。', reading: 'いまとべんきょうしています。', meaning: 'I am studying now.' },
      { japanese: 'けっこんしています。', reading: 'けっこんしています。', meaning: 'I am married.' },
    ]
  },
  {
    id: 'g18', pattern: '～てもいいです', meaning: 'may I do ~? / it\'s OK to do ~', meaningVi: 'Có thể làm... được', lessonId: 'lesson-12',
    examples: [
      { japanese: 'ここにすわってもいいですか。', reading: 'ここにすわってもいいですか。', meaning: 'May I sit here?' },
      { japanese: 'はい、すわってもいいです。', reading: 'はい、すわってもいいです。', meaning: 'Yes, you may sit.' },
    ]
  },
  {
    id: 'g19', pattern: '～てはいけません', meaning: 'must not do ~', meaningVi: 'Không được làm...', lessonId: 'lesson-12',
    examples: [
      { japanese: 'ここでたばこをすってはいけません。', reading: 'ここでたばこをすってはいけません。', meaning: 'You must not smoke here.' },
    ]
  },
  {
    id: 'g20', pattern: '～てあります', meaning: 'state resulting from action', meaningVi: 'Trạng thái đã làm xong', lessonId: 'lesson-14',
    examples: [
      { japanese: 'まどがあけてあります。', reading: 'まどがあけてあります。', meaning: 'The window has been opened.' },
    ]
  },

  // === Bài 15-16: Thể ない, kinh nghiệm ===
  {
    id: 'g21', pattern: '～ないでください', meaning: 'please don\'t do ~', meaningVi: 'Đừng làm...', lessonId: 'lesson-15',
    examples: [
      { japanese: 'ここでしゃしんとらないでください。', reading: 'ここでしゃしんとらないでください。', meaning: 'Please don\'t take photos here.' },
    ]
  },
  {
    id: 'g22', pattern: '～なければなりません', meaning: 'must do ~', meaningVi: 'Phải làm...', lessonId: 'lesson-15',
    examples: [
      { japanese: 'まいにちにほんごをべんきょうしなければなりません。', reading: 'まいにちにほんごをべんきょうしなければなりません。', meaning: 'I must study Japanese every day.' },
    ]
  },
  {
    id: 'g23', pattern: '～たことがあります', meaning: 'have done ~ before', meaningVi: 'Đã từng làm...', lessonId: 'lesson-16',
    examples: [
      { japanese: 'にほんにいったことがあります。', reading: 'にほんにいったことがあります。', meaning: 'I have been to Japan.' },
      { japanese: 'すしをたべたことがあります。', reading: 'すしをたべたことがあります。', meaning: 'I have eaten sushi.' },
    ]
  },

  // === Bài 17-18: Liệt kê, mời mọc ===
  {
    id: 'g24', pattern: '～たり～たりします', meaning: 'do things like ~ and ~', meaningVi: 'Làm việc như... và...', lessonId: 'lesson-17',
    examples: [
      { japanese: 'しゅうまつはほんをよんだり、テレビをみたりします。', reading: 'しゅうまつはほんをよんだり、テレビをみたりします。', meaning: 'On weekends, I do things like reading books and watching TV.' },
    ]
  },
  {
    id: 'g25', pattern: '～ましょう', meaning: 'let\'s do ~', meaningVi: 'Cùng làm... nào', lessonId: 'lesson-18',
    examples: [
      { japanese: 'いっしょにたべましょう。', reading: 'いっしょにたべましょう。', meaning: 'Let\'s eat together.' },
    ]
  },
  {
    id: 'g26', pattern: '～ませんか', meaning: 'won\'t you do ~? (invitation)', meaningVi: 'Cùng làm... nhé?', lessonId: 'lesson-18',
    examples: [
      { japanese: 'いっしょにいきませんか。', reading: 'いっしょにいきませんか。', meaning: 'Won\'t you go with me?' },
    ]
  },

  // === Bài 19-21: Điều kiện ===
  {
    id: 'g27', pattern: '～たら', meaning: 'if/when ~', meaningVi: 'Nếu/khi...', lessonId: 'lesson-19',
    examples: [
      { japanese: 'あめがふったら、いきません。', reading: 'あめがふったら、いきません。', meaning: 'If it rains, I won\'t go.' },
      { japanese: 'じかんがあったら、べんきょうします。', reading: 'じかんがあったら、べんきょうします。', meaning: 'If I have time, I will study.' },
    ]
  },
  {
    id: 'g28', pattern: '～と', meaning: 'whenever ~ (natural consequence)', meaningVi: 'Hễ... thì...', lessonId: 'lesson-20',
    examples: [
      { japanese: 'はるになると、さくらがさきます。', reading: 'はるになると、さくらがさきます。', meaning: 'When spring comes, cherry blossoms bloom.' },
    ]
  },
  {
    id: 'g29', pattern: '～ば', meaning: 'if ~ (conditional)', meaningVi: 'Nếu...', lessonId: 'lesson-20',
    examples: [
      { japanese: 'やすければ、かいます。', reading: 'やすければ、かいます。', meaning: 'If it\'s cheap, I\'ll buy it.' },
    ]
  },

  // === Bài 22-25: Thể thông thường, bị động ===
  {
    id: 'g30', pattern: '～とおもいます', meaning: 'I think that ~', meaningVi: 'Tôi nghĩ rằng...', lessonId: 'lesson-22',
    examples: [
      { japanese: 'あしたあめだとおもいます。', reading: 'あしたあめだとおもいます。', meaning: 'I think it will rain tomorrow.' },
    ]
  },
  {
    id: 'g31', pattern: '～といいます', meaning: 'say that ~', meaningVi: 'Nói rằng...', lessonId: 'lesson-22',
    examples: [
      { japanese: 'せんせいはあしたテストといいます。', reading: 'せんせいはあしたテストといいます。', meaning: 'The teacher said there\'s a test tomorrow.' },
    ]
  },
  {
    id: 'g32', pattern: '～られます (受身形)', meaning: 'be done to ~ (passive)', meaningVi: 'Bị/được làm...', lessonId: 'lesson-23',
    examples: [
      { japanese: 'せんせいにほめられました。', reading: 'せんせいにほめられました。', meaning: 'I was praised by the teacher.' },
      { japanese: 'ともだちにでんわをかけられました。', reading: 'ともだちにでんわをかけられました。', meaning: 'I was called by a friend.' },
    ]
  },
  {
    id: 'g33', pattern: '～させます (使役形)', meaning: 'make/let ~ do', meaningVi: 'Cho/bắt... làm', lessonId: 'lesson-24',
    examples: [
      { japanese: 'こどもにやさいをたべさせます。', reading: 'こどもにやさいをたべさせます。', meaning: 'I make my children eat vegetables.' },
    ]
  },

  // === Bài 25: Ôn tập thể て ===
  {
    id: 'g61', pattern: '～ています (tiếp diễn)', meaning: 'be doing ~ (continuous)', meaningVi: 'Đang làm...', lessonId: 'lesson-25',
    examples: [
      { japanese: 'いまにほんごをべんきょうしています。', reading: 'いまにほんごをべんきょうしています。', meaning: 'I am studying Japanese now.' },
      { japanese: 'まいにちせんせいがおしえています。', reading: 'まいにちせんせいがおしえています。', meaning: 'The teacher teaches every day.' },
    ]
  },
  {
    id: 'g62', pattern: '～てあります (trạng thái)', meaning: 'state resulting from intentional action', meaningVi: 'Đã làm xong và vẫn còn...', lessonId: 'lesson-25',
    examples: [
      { japanese: 'まどがあけてあります。', reading: 'まどがあけてあります。', meaning: 'The window has been opened (and is still open).' },
      { japanese: 'つくえのうえにほんがならべてあります。', reading: 'つくえのうえにほんがならべてあります。', meaning: 'Books are lined up on the desk.' },
    ]
  },
  {
    id: 'g63', pattern: '～ておきます (chuẩn bị)', meaning: 'do in advance / keep as is', meaningVi: 'Làm trước / Để nguyên', lessonId: 'lesson-25',
    examples: [
      { japanese: 'りょこうのまえにホテルをよやくしておきます。', reading: 'りょこうのまえにホテルをよやくしておきます。', meaning: 'I will book the hotel in advance before the trip.' },
      { japanese: 'まどをしめておいてください。', reading: 'まどをしめておいてください。', meaning: 'Please close the window (and leave it closed).' },
    ]
  },

  // === Bài 26-29: Trạng thái, truyền tin ===
  {
    id: 'g34', pattern: '～ています (trạng thái)', meaning: 'state of being (~している)', meaningVi: 'Đang trong trạng thái...', lessonId: 'lesson-26',
    examples: [
      { japanese: 'まどがこわれています。', reading: 'まどがこわれています。', meaning: 'The window is broken.' },
      { japanese: 'でんわをもっています。', reading: 'でんわをもっています。', meaning: 'I have a phone.' },
    ]
  },
  {
    id: 'g35', pattern: '～そうです (伝聞)', meaning: 'I hear that ~', meaningVi: 'Nghe nói rằng...', lessonId: 'lesson-27',
    examples: [
      { japanese: 'あしたあめだそうです。', reading: 'あしたあめだそうです。', meaning: 'I hear it will rain tomorrow.' },
      { japanese: 'やまださんはらいしゅうけっこんするそうです。', reading: 'やまださんはらいしゅうけっこんするそうです。', meaning: 'I hear Yamada will get married next week.' },
    ]
  },
  {
    id: 'g36', pattern: '～ようです', meaning: 'it seems that ~ (judgment)', meaningVi: 'Có vẻ như...', lessonId: 'lesson-28',
    examples: [
      { japanese: 'あめがふるようです。', reading: 'あめがふるようです。', meaning: 'It looks like it will rain.' },
      { japanese: 'かれはびょうきのようです。', reading: 'かれはびょうきのようです。', meaning: 'He seems to be sick.' },
    ]
  },
  {
    id: 'g37', pattern: '～らしいです', meaning: 'I hear that ~ / it seems ~', meaningVi: 'Nghe nói/có vẻ', lessonId: 'lesson-28',
    examples: [
      { japanese: 'やまださんはびょうきらしいです。', reading: 'やまださんはびょうきらしいです。', meaning: 'I hear Yamada is sick.' },
    ]
  },

  // === Bài 30-32: Có thể, hoàn thành ===
  {
    id: 'g38', pattern: '～かもしれません', meaning: 'might ~', meaningVi: 'Có thể là...', lessonId: 'lesson-30',
    examples: [
      { japanese: 'あしたあめかもしれません。', reading: 'あしたあめかもしれません。', meaning: 'It might rain tomorrow.' },
      { japanese: 'かれはこないかもしれません。', reading: 'かれはこないかもしれません。', meaning: 'He might not come.' },
    ]
  },
  {
    id: 'g39', pattern: '～てしまう', meaning: 'completely do / regret doing', meaningVi: 'Làm xong / tiếc vì đã làm', lessonId: 'lesson-31',
    examples: [
      { japanese: 'しゅくだいをぜんぶやってしまいました。', reading: 'しゅくだいをぜんぶやってしまいました。', meaning: 'I finished all my homework.' },
      { japanese: 'だいじなほんをなくしてしまいました。', reading: 'だいじなほんをなくしてしまいました。', meaning: 'I lost an important book (unfortunately).' },
    ]
  },
  {
    id: 'g40', pattern: '～ことにする', meaning: 'decide to do ~', meaningVi: 'Quyết định làm...', lessonId: 'lesson-33',
    examples: [
      { japanese: 'まいにちうんどうすることにしました。', reading: 'まいにちうんどうすることにしました。', meaning: 'I decided to exercise every day.' },
    ]
  },
  {
    id: 'g41', pattern: '～ことになる', meaning: 'it has been decided that ~', meaningVi: 'Được quyết định là...', lessonId: 'lesson-33',
    examples: [
      { japanese: 'らいしゅうとうきょうにいくことになりました。', reading: 'らいしゅうとうきょうにいくことになりました。', meaning: 'It was decided that I will go to Tokyo next week.' },
    ]
  },

  // === Bài 34-37: Cho nhận, quá, mục đích ===
  {
    id: 'g42', pattern: '～てあげる', meaning: 'do ~ for someone', meaningVi: 'Làm... cho ai', lessonId: 'lesson-34',
    examples: [
      { japanese: 'ともだちにほんしをおしてあげました。', reading: 'ともだちにほんしをおしてあげました。', meaning: 'I pushed the door for my friend.' },
    ]
  },
  {
    id: 'g43', pattern: '～てもらう', meaning: 'have someone do ~ for me', meaningVi: 'Được ai làm cho...', lessonId: 'lesson-34',
    examples: [
      { japanese: 'せんせいににほんごをおしえてもらいました。', reading: 'せんせいににほんごをおしえてもらいました。', meaning: 'I had the teacher teach me Japanese.' },
    ]
  },
  {
    id: 'g44', pattern: '～てくれる', meaning: 'someone does ~ for me', meaningVi: 'Ai đó làm... cho mình', lessonId: 'lesson-34',
    examples: [
      { japanese: 'ともだちがおしえてくれました。', reading: 'ともだちがおしえてくれました。', meaning: 'My friend taught me.' },
    ]
  },
  {
    id: 'g45', pattern: '～すぎる', meaning: 'too ~', meaningVi: 'Quá...', lessonId: 'lesson-35',
    examples: [
      { japanese: 'たべすぎました。', reading: 'たべすぎました。', meaning: 'I ate too much.' },
      { japanese: 'このかばんは重すぎます。', reading: 'このかばんはおもすぎます。', meaning: 'This bag is too heavy.' },
    ]
  },
  {
    id: 'g46', pattern: '～ようにする', meaning: 'try to do / make sure to do', meaningVi: 'Cố gắng làm...', lessonId: 'lesson-36',
    examples: [
      { japanese: 'まいにちにほんごをべんきょうするようにしています。', reading: 'まいにちにほんごをべんきょうするようにしています。', meaning: 'I try to study Japanese every day.' },
    ]
  },
  {
    id: 'g47', pattern: '～ようになる', meaning: 'come to be able to ~', meaningVi: 'Trở nên có thể...', lessonId: 'lesson-36',
    examples: [
      { japanese: 'にほんごがはなせるようになりました。', reading: 'にほんごがはなせるようになりました。', meaning: 'I became able to speak Japanese.' },
    ]
  },
  {
    id: 'g48', pattern: '～ておく', meaning: 'do ~ in advance', meaningVi: 'Làm trước...', lessonId: 'lesson-37',
    examples: [
      { japanese: 'りょこうのまえにホテルをよやくしておきます。', reading: 'りょこうのまえにホテルをよやくしておきます。', meaning: 'I\'ll book a hotel in advance before the trip.' },
    ]
  },

  // === Bài 38-41: Mặc dù, chắc chắn, dự định ===
  {
    id: 'g49', pattern: '～のに', meaning: 'even though / despite', meaningVi: 'Mặc dù...', lessonId: 'lesson-38',
    examples: [
      { japanese: 'あめなのに、でかけました。', reading: 'あめなのに、でかけました。', meaning: 'Even though it was raining, I went out.' },
    ]
  },
  {
    id: 'g50', pattern: '～はずです', meaning: 'should be ~ (expectation)', meaningVi: 'Chắc chắn là...', lessonId: 'lesson-39',
    examples: [
      { japanese: 'かれはもうつくはずです。', reading: 'かれはもうつくはずです。', meaning: 'He should have arrived by now.' },
    ]
  },
  {
    id: 'g51', pattern: '～つもりです', meaning: 'plan to do / intention', meaningVi: 'Định làm...', lessonId: 'lesson-40',
    examples: [
      { japanese: 'らいしゅうりょこうするつもりです。', reading: 'らいしゅうりょこうするつもりです。', meaning: 'I plan to travel next week.' },
    ]
  },
  {
    id: 'g52', pattern: '～てみる', meaning: 'try doing ~', meaningVi: 'Thử làm...', lessonId: 'lesson-41',
    examples: [
      { japanese: 'このりょうりをたべてみてください。', reading: 'このりょうりをたべてみてください。', meaning: 'Please try eating this dish.' },
    ]
  },

  // === Bài 42-45: Trông có vẻ, mục đích ===
  {
    id: 'g53', pattern: '～そうです (様態)', meaning: 'looks like ~ (appearance)', meaningVi: 'Trông có vẻ...', lessonId: 'lesson-42',
    examples: [
      { japanese: 'おいしそうです。', reading: 'おいしそうです。', meaning: 'It looks delicious.' },
      { japanese: 'あめがふりそうです。', reading: 'あめがふりそうです。', meaning: 'It looks like it will rain.' },
    ]
  },
  {
    id: 'g54', pattern: '～ために', meaning: 'in order to / because of', meaningVi: 'Để / Vì...', lessonId: 'lesson-44',
    examples: [
      { japanese: 'にほんごをべんきょうするために、にほんにいきました。', reading: 'にほんごをべんきょうするために、にほんにいきました。', meaning: 'I went to Japan in order to study Japanese.' },
      { japanese: 'びょうきのために、がっこうをやすみました。', reading: 'びょうきのために、がっこうをやすみました。', meaning: 'Because of illness, I was absent from school.' },
    ]
  },
  {
    id: 'g55', pattern: '～ように', meaning: 'so that / in order to', meaningVi: 'Để mà...', lessonId: 'lesson-45',
    examples: [
      { japanese: 'わすれないように、メモします。', reading: 'わすれないように、メモします。', meaning: 'I\'ll make a memo so I don\'t forget.' },
    ]
  },

  // === Bài 46-48: Kính ngữ ===
  {
    id: 'g56', pattern: 'お/ご～になります (尊敬語)', meaning: 'honorific: ~ do', meaningVi: 'Ngài làm... (tôn kính)', lessonId: 'lesson-47',
    examples: [
      { japanese: 'せんせいはもうかえられました。', reading: 'せんせいはもうかえられました。', meaning: 'The teacher has already gone home.' },
      { japanese: 'しゃちょうはあしたいらっしゃいます。', reading: 'しゃちょうはあしたいらっしゃいます。', meaning: 'The president will come tomorrow.' },
    ]
  },
  {
    id: 'g57', pattern: 'お/ご～します (謙譲語)', meaning: 'humble: I do ~', meaningVi: 'Tôi làm... (khiêm nhường)', lessonId: 'lesson-48',
    examples: [
      { japanese: 'お荷物をおもちしましょうか。', reading: 'おにもつをおもちしましょうか。', meaning: 'Shall I carry your luggage?' },
      { japanese: 'ご説明いたします。', reading: 'ごせつめいいたします。', meaning: 'I will explain.' },
    ]
  },

  // === Bài 7: Địa điểm ===
  {
    id: 'g58', pattern: '～はどこですか', meaning: 'Where is ~?', meaningVi: '... ở đâu?', lessonId: 'lesson-7',
    examples: [
      { japanese: 'ほんやはどこですか。', reading: 'ほんやはどこですか。', meaning: 'Where is the bookstore?' },
      { japanese: 'えきのちかくにあります。', reading: 'えきのちかくにあります。', meaning: 'It\'s near the station.' },
    ]
  },
  {
    id: 'g59', pattern: '～のうしろ/まえ/となり', meaning: 'behind/in front of/next to ~', meaningVi: 'Sau/trước/cạnh...', lessonId: 'lesson-7',
    examples: [
      { japanese: 'びょういんのとなりです。', reading: 'びょういんのとなりです。', meaning: 'It\'s next to the hospital.' },
      { japanese: 'ほんやのうしろにあります。', reading: 'ほんやのうしろにあります。', meaning: 'It\'s behind the bookstore.' },
    ]
  },

  // === Bài 21: Nghĩa vụ (riêng cho bài 21) ===
  {
    id: 'g60', pattern: '～なければならない', meaning: 'must do ~ (obligation)', meaningVi: 'Phải làm...', lessonId: 'lesson-21',
    examples: [
      { japanese: 'あしたまでにレポートをださなければなりません。', reading: 'あしたまでにレポートをださなければなりません。', meaning: 'I must submit the report by tomorrow.' },
      { japanese: '毎日日本語を勉強しなければなりません。', reading: 'まいにちにほんごをべんきょうしなければなりません。', meaning: 'I must study Japanese every day.' },
    ]
  },

  // === Bài 32: Thể khả năng ===
  {
    id: 'g61', pattern: '～ことができます', meaning: 'can do ~ (ability)', meaningVi: 'Có thể làm...', lessonId: 'lesson-32',
    examples: [
      { japanese: 'にほんごをはなすことができます。', reading: 'にほんごをはなすことができます。', meaning: 'I can speak Japanese.' },
      { japanese: 'ピアノをひくことができません。', reading: 'ピアノをひくことができません。', meaning: 'I can\'t play the piano.' },
    ]
  },

  // === Bài 43: Ý kiến, giải thích ===
  {
    id: 'g62', pattern: '～といいですね', meaning: 'it would be nice if ~', meaningVi: '... thì tốt nhỉ', lessonId: 'lesson-43',
    examples: [
      { japanese: 'はやくにほんごがじょうずになるといいですね。', reading: 'はやくにほんごがじょうずになるといいですね。', meaning: 'It would be nice if your Japanese improved quickly.' },
    ]
  },
  {
    id: 'g63', pattern: '～ほうがいいです', meaning: 'had better do ~ / it\'s better to ~', meaningVi: 'Nên làm... thì hơn', lessonId: 'lesson-43',
    examples: [
      { japanese: 'びょういんに行ったほうがいいです。', reading: 'びょういんに行ったほうがいいです。', meaning: 'You had better go to the hospital.' },
      { japanese: 'たばこをすわないほうがいいです。', reading: 'たばこをすわないほうがいいです。', meaning: 'It\'s better not to smoke.' },
    ]
  },
];

export default grammar;
