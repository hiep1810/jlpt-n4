import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import {
  ArrowLeft,
  Eye,
  EyeOff,
  FastForward,
  Headphones,
  Mic,
  Pause,
  Play,
  Rewind,
  SkipBack,
  SkipForward,
  Volume2,
  CheckCircle2,
  XCircle,
} from 'lucide-react';

// Listening passages per lesson
interface ListeningPassage {
  id: string;
  lessonId: string;
  title: string;
  titleJa?: string;
  text: string;          // Japanese text for dictation target
  transcript: string[];  // Full transcript lines
  translation: string;   // Vietnamese translation
  speed?: 'slow' | 'normal';
}

const listeningPassages: ListeningPassage[] = [
  {
    id: 'listen-1',
    lessonId: 'hiragana-1',
    title: 'Bài 1 — Tự giới thiệu',
    titleJa: '自己紹介',
    text: 'はじめまして。たなかです。',
    transcript: [
      'はじめまして。',
      'たなかです。',
      'どうぞよろしくおねがいします。',
    ],
    translation: 'Rất vui được gặp bạn. Tôi là Tanaka. Mong được giúp đỡ.',
  },
  {
    id: 'listen-2',
    lessonId: 'lesson-4',
    title: 'Bài 4 — Làm gì hôm qua?',
    titleJa: 'きのう何をしましたか',
    text: 'きのう、としょかんでほんをよみました。',
    transcript: [
      'A: きのう、なにをしましたか。',
      'B: としょかんで、ほんをよみました。',
      'A: なんじからなんじまでよみましたか。',
      'B: ごじから、ろじまでよみました。',
    ],
    translation: 'A: Hôm qua bạn đã làm gì? B: Tôi đã đọc sách ở thư viện. A: Bạn đọc từ mấy giờ đến mấy giờ? B: Tôi đọc từ 5 giờ đến 6 giờ.',
  },
  {
    id: 'listen-3',
    lessonId: 'lesson-5',
    title: 'Bài 5 — Đi đâu?',
    titleJa: 'どこへいきますか',
    text: 'まいあさ、だいがくへいきます。',
    transcript: [
      'A: まいあさ、なんじにおきますか。',
      'B: しちに おきます。',
      'A: どこへ いきますか。',
      'B: だいがくへ いきます。',
    ],
    translation: 'A: Mỗi sáng bạn thức dậy lúc mấy giờ? B: Tôi thức dậy lúc 7 giờ. A: Bạn đi đâu? B: Tôi đi đến đại học.',
  },
  {
    id: 'listen-4',
    lessonId: 'lesson-6',
    title: 'Bài 6 — Có gì?',
    titleJa: 'なにがありますか',
    text: 'つくえのうえに、でんわがあります。',
    transcript: [
      'A: へやのなかに、なにがありますか。',
      'B: つくえのうえに、でんわがあります。',
      'A: ねこはいますか。',
      'B: いいえ、いません。',
    ],
    translation: 'A: Trong phòng có gì? B: Trên bàn có điện thoại. A: Có mèo không? B: Không, không có.',
  },
  {
    id: 'listen-5',
    lessonId: 'lesson-7',
    title: 'Bài 7 — Địa điểm',
    titleJa: 'どこですか',
    text: 'ぎんこうはえきのちかくにあります。',
    transcript: [
      'A: すみません、ぎんこうはどこですか。',
      'B: えきのちかくにあります。',
      'A: えきのみなみがわですか。',
      'B: はい、そうです。',
    ],
    translation: 'A: Xin lỗi, ngân hàng ở đâu? B: Ở gần ga. A: Ở phía nam ga phải không? B: Vâng, đúng vậy.',
  },
  {
    id: 'listen-6',
    lessonId: 'lesson-8',
    title: 'Bài 8 — Cho và nhận',
    titleJa: 'あげます・もらいます',
    text: 'ともだちにプレゼントをあげました。',
    transcript: [
      'A: たんじょうびに、なにをもらいましたか。',
      'B: ともだちに、ほんをもらいました。',
      'A: いいですね。わたしもともだちにくつをあげました。',
    ],
    translation: 'A: Sinh nhật bạn nhận được gì? B: Tôi nhận được sách từ bạn. A: Hay nhỉ. Tôi cũng đã tặng giày cho bạn.',
  },
  {
    id: 'listen-7',
    lessonId: 'lesson-9',
    title: 'Bài 9 — Thích/Không thích/Muốn',
    titleJa: '好き・きらい・ほしい',
    text: 'わたしはねこがすきです。',
    transcript: [
      'A: どんなどうぶつがすきですか。',
      'B: ねこがすきです。いぬはきらいです。',
      'A: ねこをかいたいですか。',
      'B: はい、かいたいです。',
    ],
    translation: 'A: Bạn thích loài vật nào? B: Tôi thích mèo. Tôi ghét chó. A: Bạn có muốn nuôi mèo không? B: Vâng, tôi muốn nuôi.',
  },
  {
    id: 'listen-8',
    lessonId: 'lesson-10',
    title: 'Bài 10 — So sánh',
    titleJa: 'くらべます',
    text: 'やさいのほうがにくよりやすいです。',
    transcript: [
      'A: やさいとにくと、どちらがすきですか。',
      'B: やさいのほうがすきです。',
      'A: どちらがやすいですか。',
      'B: やさいのほうがやすいです。',
    ],
    translation: 'A: Rau và thịt, cái nào bạn thích hơn? B: Tôi thích rau hơn. A: Cái nào rẻ hơn? B: Rau rẻ hơn.',
  },
  {
    id: 'listen-9',
    lessonId: 'lesson-11',
    title: 'Bài 11 — Hãy làm',
    titleJa: '～てください',
    text: 'まどをあけてください。',
    transcript: [
      'A: すみません、まどを あけてください。',
      'B: はい、あけます。',
      'A: そして、しおを とってください。',
      'B: しおですね。はい、どうぞ。',
    ],
    translation: 'A: Xin lỗi, hãy mở cửa sổ. B: Vâng, tôi mở. A: Và hãy lấy muối. B: Muối nhé. Vâng, đây.',
  },
  {
    id: 'listen-10',
    lessonId: 'lesson-12',
    title: 'Bài 12 — Được phép/Không được phép',
    titleJa: '～てもいいです・～てはいけません',
    text: 'ここでしゃしんをとってもいいですか。',
    transcript: [
      'A: ここで しゃしんを とっても いいですか。',
      'B: いいえ、とってはいけません。',
      'A: そうですか。ざんねんです。',
    ],
    translation: 'A: Ở đây chụp ảnh có được không? B: Không, không được chụp. A: Vậy à. Tiếc quá.',
  },
  {
    id: 'listen-11',
    lessonId: 'lesson-13',
    title: 'Bài 13 — Đang làm',
    titleJa: '～ています',
    text: 'いまべんきょうしています。',
    transcript: [
      'A: たなかさんは いますか。',
      'B: いま べんきょうしています。',
      'A: そうですか。まってください。',
    ],
    translation: 'A: Tanaka có ở không? B: Đang học. A: Vậy à. Hãy đợi.',
  },
  {
    id: 'listen-12',
    lessonId: 'lesson-14',
    title: 'Bài 14 — Trạng thái đã làm',
    titleJa: '～てあります',
    text: 'まどがあけてあります。',
    transcript: [
      'A: へやのなかに、なにが ありますか。',
      'B: まどが あけてあります。',
      'A: そうですか。きれいですね。',
    ],
    translation: 'A: Trong phòng có gì? B: Cửa sổ đã mở. A: Vậy à. Đẹp nhỉ.',
  },
  {
    id: 'listen-13',
    lessonId: 'lesson-15',
    title: 'Bài 15 — Đừng làm/Phải làm',
    titleJa: '～ないでください・～なければなりません',
    text: 'ここにすわらないでください。',
    transcript: [
      'A: ここに すわらないでください。',
      'B: すみません。',
      'A: そして、あしたまでに しゅくだいを ださなければなりません。',
      'B: はい、しっています。',
    ],
    translation: 'A: Đừng ngồi ở đây. B: Xin lỗi. A: Và phải nộp bài tập trước ngày mai. B: Vâng, tôi biết.',
  },
  {
    id: 'listen-14',
    lessonId: 'lesson-16',
    title: 'Bài 16 — Kinh nghiệm',
    titleJa: '～たことがあります',
    text: 'にほんへいったことがあります。',
    transcript: [
      'A: にほんへ いったことが ありますか。',
      'B: はい、にど いったことが あります。',
      'A: どこへ いきましたか。',
      'B: とうきょうと おおさかへ いきました。',
    ],
    translation: 'A: Bạn đã từng đi Nhật chưa? B: Vâng, đã đi 2 lần. A: Bạn đã đi đâu? B: Tôi đã đi Tokyo và Osaka.',
  },
  {
    id: 'listen-15',
    lessonId: 'lesson-17',
    title: 'Bài 17 — Làm việc này việc kia',
    titleJa: '～たり～たりします',
    text: 'にちようびはほんをよんだりテレビをみたりします。',
    transcript: [
      'A: にちようびは なにを しますか。',
      'B: ほんを よんだり テレビを みたりします。',
      'A: たのしいですね。',
    ],
    translation: 'A: Chủ nhật bạn làm gì? B: Tôi đọc sách, xem TV... A: Vui nhỉ.',
  },
  {
    id: 'listen-16',
    lessonId: 'lesson-18',
    title: 'Bài 18 — Cùng làm nào',
    titleJa: '～ましょう・～ませんか',
    text: 'いっしょにえいがをみませんか。',
    transcript: [
      'A: こんばん いっしょに えいがを みませんか。',
      'B: いいですね。なんじからですか。',
      'A: しちじからです。',
      'B: わかりました。',
    ],
    translation: 'A: Tối nay cùng xem phim không? B: Hay nhỉ. Từ mấy giờ? A: Từ 7 giờ. B: Hiểu rồi.',
  },
  {
    id: 'listen-17',
    lessonId: 'lesson-19',
    title: 'Bài 19 — Nếu mà',
    titleJa: '～たら',
    text: 'あめがふったら、いきません。',
    transcript: [
      'A: あした ピクニックに いきましょう。',
      'B: あめが ふったら どうしますか。',
      'A: あめだったら、いえで あそびましょう。',
    ],
    translation: 'A: Ngày mai đi dã ngoại nhé. B: Nếu mưa thì sao? A: Nếu mưa thì chơi ở nhà.',
  },
  {
    id: 'listen-18',
    lessonId: 'lesson-20',
    title: 'Bài 20 — Hễ thì',
    titleJa: '～と',
    text: 'ふゆになるとさむくなります。',
    transcript: [
      'A: にほんの ふゆは さむいですか。',
      'B: はい。ふゆに なると、ゆきが ふります。',
      'A: すごいですね。',
    ],
    translation: 'A: Mùa đông Nhật có lạnh không? B: Vâng. Vào đông thì tuyết rơi. A: Tuyệt nhỉ.',
  },
  {
    id: 'listen-19',
    lessonId: 'lesson-21',
    title: 'Bài 21 — Phải làm',
    titleJa: '～なければならない',
    text: 'あしたまでにしゅくだいをださなければなりません。',
    transcript: [
      'A: なぜ いそがしいですか。',
      'B: あしたまでに しゅくだいを ださなければなりません。',
      'A: がんばってください。',
    ],
    translation: 'A: Sao bận thế? B: Phải nộp bài tập trước ngày mai. A: Cố lên nhé.',
  },
  {
    id: 'listen-20',
    lessonId: 'lesson-22',
    title: 'Bài 22 — Tôi nghĩ rằng',
    titleJa: '～とおもいます',
    text: 'にほんごはむずかしいとおもいます。',
    transcript: [
      'A: にほんごのしけんは どうですか。',
      'B: むずかしいと おもいます。',
      'A: でも、べんりだと おもいます。',
    ],
    translation: 'A: Bài thi tiếng Nhật thế nào? B: Tôi nghĩ khó. A: Nhưng tôi nghĩ tiện lợi.',
  },
  {
    id: 'listen-21',
    lessonId: 'lesson-23',
    title: 'Bài 23 — Bị động',
    titleJa: '～られます',
    text: 'せんせいにほめられました。',
    transcript: [
      'A: どうしましたか。',
      'B: せんせいに ほめられました。',
      'A: すごいですね。',
    ],
    translation: 'A: Sao thế? B: Được thầy khen. A: Giỏi nhỉ.',
  },
  {
    id: 'listen-22',
    lessonId: 'lesson-24',
    title: 'Bài 24 — Sai khiến',
    titleJa: '～させます',
    text: 'こどもにやさいをたべさせます。',
    transcript: [
      'A: おこさんは やさいを たべますか。',
      'B: いいえ。やさいを たべさせます。',
      'A: たいへんですね。',
    ],
    translation: 'A: Bé có ăn rau không? B: Không. Tôi bắt bé ăn rau. A: Khổ nhỉ.',
  },
  {
    id: 'listen-23',
    lessonId: 'lesson-25',
    title: 'Bài 25 — Đang làm / Làm trước',
    titleJa: '～ています・～ておきます',
    text: 'しけんまえにべんきょうしておきました。',
    transcript: [
      'A: しけんの じゅんびは できましたか。',
      'B: はい、べんきょうして おきました。',
      'A: がんばってください。',
    ],
    translation: 'A: Chuẩn bị thi xong chưa? B: Vâng, tôi đã học trước rồi. A: Cố lên nhé.',
  },
  {
    id: 'listen-24',
    lessonId: 'lesson-27',
    title: 'Bài 27 — Nghe nói',
    titleJa: '～そうです',
    text: 'あしたはゆきだそうです。',
    transcript: [
      'A: あしたの てんきは どうですか。',
      'B: ゆきだそうです。',
      'A: そうですか。さむくなりますね。',
    ],
    translation: 'A: Thời tiết mai thế nào? B: Nghe nói có tuyết. A: Vậy à. Sẽ lạnh nhỉ.',
  },
  {
    id: 'listen-25',
    lessonId: 'lesson-28',
    title: 'Bài 28 — Có vẻ như',
    titleJa: '～ようです',
    text: 'かれはびょうきのようです。',
    transcript: [
      'A: たなかさんは きょういませんね。',
      'B: びょうきのようです。',
      'A: そうですか。だいじょうぶでしょうか。',
    ],
    translation: 'A: Tanaka hôm nay vắng nhỉ. B: Có vẻ ốm. A: Vậy à. Không biết có sao không.',
  },
  {
    id: 'listen-26',
    lessonId: 'lesson-30',
    title: 'Bài 30 — Có thể là',
    titleJa: '～かもしれません',
    text: 'あめがふるかもしれません。',
    transcript: [
      'A: あした ピクニックに いきましょう。',
      'B: でも、あめが ふるかもしれません。',
      'A: そうですか。ざんねんです。',
    ],
    translation: 'A: Mai đi dã ngoại nhé. B: Nhưng có thể mưa. A: Vậy à. Tiếc quá.',
  },
  {
    id: 'listen-27',
    lessonId: 'lesson-31',
    title: 'Bài 31 — Làm xong / Tiếc',
    titleJa: '～てしまう',
    text: 'ほんをよんでしまいました。',
    transcript: [
      'A: そのほんは もう よみましたか。',
      'B: はい、きのう よんでしまいました。',
      'A: はやいですね。',
    ],
    translation: 'A: Cuốn sách đó bạn đọc chưa? B: Vâng, hôm qua đọc xong rồi. A: Nhanh nhỉ.',
  },
  {
    id: 'listen-28',
    lessonId: 'lesson-33',
    title: 'Bài 33 — Quyết định',
    titleJa: '～ことにする',
    text: 'まいにちうんどうすることにしました。',
    transcript: [
      'A: さいきん うんどうしていますか。',
      'B: はい、まいにち うんどうする ことにしました。',
      'A: すごいですね。',
    ],
    translation: 'A: Dạo này bạn tập thể dục không? B: Vâng, tôi quyết định tập mỗi ngày. A: Giỏi nhỉ.',
  },
  {
    id: 'listen-29',
    lessonId: 'lesson-34',
    title: 'Bài 34 — Cho và nhận',
    titleJa: 'てあげる・もらう・くれる',
    text: 'ともだちにほんをもらいました。',
    transcript: [
      'A: たんじょうびに なにを もらいましたか。',
      'B: ともだちに ほんを もらいました。',
      'A: いいですね。わたしも あげました。',
    ],
    translation: 'A: Sinh nhật bạn nhận được gì? B: Tôi nhận sách từ bạn. A: Hay nhỉ. Tôi cũng đã tặng.',
  },
  {
    id: 'listen-30',
    lessonId: 'lesson-35',
    title: 'Bài 35 — Quá mức',
    titleJa: '～すぎる',
    text: 'たべすぎました。',
    transcript: [
      'A: どうしましたか。',
      'B: きのう たべすぎました。',
      'A: だいじょうぶですか。',
    ],
    translation: 'A: Sao thế? B: Hôm qua ăn quá nhiều. A: Có sao không?',
  },
  {
    id: 'listen-31',
    lessonId: 'lesson-36',
    title: 'Bài 36 — Cố gắng / Trở nên',
    titleJa: '～ようにする・～ようになる',
    text: 'はやくねるようにしています。',
    transcript: [
      'A: げんきそうですね。',
      'B: はい、はやく ねるようにしています。',
      'A: たいせつですね。',
    ],
    translation: 'A: Trông khỏe nhỉ. B: Vâng, tôi cố gắng ngủ sớm. A: Quan trọng nhỉ.',
  },
  {
    id: 'listen-32',
    lessonId: 'lesson-37',
    title: 'Bài 37 — Làm trước',
    titleJa: '～ておく',
    text: 'りょこうのじゅんびをしておきました。',
    transcript: [
      'A: りょこうの じゅんびは できましたか。',
      'B: はい、もう して おきました。',
      'A: そうですか。あんしんですね。',
    ],
    translation: 'A: Chuẩn bị du lịch xong chưa? B: Vâng, đã làm xong rồi. A: Vậy à. Yên tâm nhé.',
  },
  {
    id: 'listen-33',
    lessonId: 'lesson-38',
    title: 'Bài 38 — Mặc dù',
    titleJa: '～のに',
    text: 'べんきょうしたのにしけんに落ちました。',
    transcript: [
      'A: しけんは どうでしたか。',
      'B: べんきょうしたのに、おちました。',
      'A: ざんねんです。',
    ],
    translation: 'A: Bài thi thế nào? B: Mặc dù học rồi mà vẫn trượt. A: Tiếc quá.',
  },
  {
    id: 'listen-34',
    lessonId: 'lesson-39',
    title: 'Bài 39 — Chắc chắn',
    titleJa: '～はずです',
    text: 'かれはくるはずです。',
    transcript: [
      'A: たなかさんは きますか。',
      'B: くるはずです。やくそくしましたから。',
      'A: そうですか。',
    ],
    translation: 'A: Tanaka có đến không? B: Chắc chắn đến. Vì đã hứa rồi. A: Vậy à.',
  },
  {
    id: 'listen-35',
    lessonId: 'lesson-40',
    title: 'Bài 40 — Dự định',
    titleJa: '～つもりです',
    text: 'らいねんにほんへいくつもりです。',
    transcript: [
      'A: らいねんの よていは ありますか。',
      'B: はい、にほんへ いくつもりです。',
      'A: がんばってください。',
    ],
    translation: 'A: Kế hoạch năm sau là gì? B: Vâng, tôi định đi Nhật. A: Cố lên nhé.',
  },
  {
    id: 'listen-36',
    lessonId: 'lesson-41',
    title: 'Bài 41 — Thử làm',
    titleJa: '～てみます',
    text: 'このりょうりをたべてみてください。',
    transcript: [
      'A: この りょうりを たべてみてください。',
      'B: おいしいですね。',
      'A: ありがとうございます。',
    ],
    translation: 'A: Hãy thử ăn món này. B: Ngon nhỉ. A: Cảm ơn.',
  },
  {
    id: 'listen-37',
    lessonId: 'lesson-42',
    title: 'Bài 42 — Trông có vẻ',
    titleJa: '～そうです',
    text: 'このケーキはおししそうです。',
    transcript: [
      'A: この ケーキを みてください。',
      'B: おいしそうですね。',
      'A: いただきましょう。',
    ],
    translation: 'A: Nhìn cái bánh này. B: Trông ngon nhỉ. A: Ăn thôi.',
  },
  {
    id: 'listen-38',
    lessonId: 'lesson-43',
    title: 'Bài 43 — Nên làm / Tốt nếu',
    titleJa: '～ほうがいい・～といいですね',
    text: 'びょういんへいったほうがいいです。',
    transcript: [
      'A: どうしましたか。',
      'B: かぜをひきました。',
      'A: びょういんへ いったほうが いいですよ。',
    ],
    translation: 'A: Sao thế? B: Tôi bị cảm. A: Bạn nên đi bệnh viện.',
  },
  {
    id: 'listen-39',
    lessonId: 'lesson-44',
    title: 'Bài 44 — Mục đích',
    titleJa: '～ために',
    text: 'だいがくにはいるためにべんきょうします。',
    transcript: [
      'A: なぜ べんきょうしていますか。',
      'B: だいがくに はいるために べんきょうしています。',
      'A: がんばってください。',
    ],
    translation: 'A: Sao bạn học? B: Tôi học để vào đại học. A: Cố lên nhé.',
  },
  {
    id: 'listen-40',
    lessonId: 'lesson-45',
    title: 'Bài 45 — Để mà',
    titleJa: '～ように',
    text: 'わすれないようにメモしました。',
    transcript: [
      'A: なぜ メモしましたか。',
      'B: わすれないように メモしました。',
      'A: そうですね。',
    ],
    translation: 'A: Sao bạn ghi chú? B: Tôi ghi chú để không quên. A: Đúng nhỉ.',
  },
  {
    id: 'listen-41',
    lessonId: 'lesson-47',
    title: 'Bài 47 — Tôn kính',
    titleJa: 'お/ご～になります',
    text: 'せんせいかえられました。',
    transcript: [
      'A: せんせいは もう おかえりに なりました。',
      'B: そうですか。あした もういちど きます。',
      'A: ありがとうございます。',
    ],
    translation: 'A: Thầy đã về rồi. B: Vậy à. Mai tôi sẽ đến lại. A: Cảm ơn.',
  },
  {
    id: 'listen-42',
    lessonId: 'lesson-48',
    title: 'Bài 48 — Khiêm nhường',
    titleJa: 'お/ご～します',
    text: 'ごあんないします。',
    transcript: [
      'A: すみません、としょかんは どこですか。',
      'B: ごあんないします。こちらへ どうぞ。',
      'A: ありがとうございます。',
    ],
    translation: 'A: Xin lỗi, thư viện ở đâu? B: Tôi sẽ hướng dẫn. Mời đi lối này. A: Cảm ơn.',
  },
];

const SPEEDS = [
  { label: '0.5x', value: 0.5 },
  { label: '0.8x', value: 0.8 },
  { label: '1x', value: 1 },
  { label: '1.2x', value: 1.2 },
];

export default function ListeningPage() {
  const [selectedPassage, setSelectedPassage] = useState<ListeningPassage | null>(null);
  const [showTranscript, setShowTranscript] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(0.8);
  const [currentLine, setCurrentLine] = useState(0);
  const [dictationMode, setDictationMode] = useState(false);
  const [dictationInput, setDictationInput] = useState('');
  const [dictationResult, setDictationResult] = useState<'correct' | 'incorrect' | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handleSpeak = (text: string) => {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'ja-JP';
    u.rate = speed;
    const voices = window.speechSynthesis.getVoices();
    const jaVoice = voices.find((v) => v.lang.startsWith('ja'));
    if (jaVoice) u.voice = jaVoice;
    u.onend = () => setIsPlaying(false);
    u.onerror = () => setIsPlaying(false);
    utteranceRef.current = u;
    setIsPlaying(true);
    window.speechSynthesis.speak(u);
  };

  const handlePlayAll = (passage: ListeningPassage) => {
    setSelectedPassage(passage);
    setCurrentLine(0);
    // Speak line by line
    const speakLine = (idx: number) => {
      if (idx >= passage.transcript.length) {
        setIsPlaying(false);
        return;
      }
      setCurrentLine(idx);
      const lineText = passage.transcript[idx];
      const u = new SpeechSynthesisUtterance(lineText);
      u.lang = 'ja-JP';
      u.rate = speed;
      const voices = window.speechSynthesis.getVoices();
      const jaVoice = voices.find((v) => v.lang.startsWith('ja'));
      if (jaVoice) u.voice = jaVoice;
      u.onend = () => {
        setTimeout(() => speakLine(idx + 1), 500);
      };
      u.onerror = () => setIsPlaying(false);
      utteranceRef.current = u;
      window.speechSynthesis.speak(u);
    };
    setIsPlaying(true);
    speakLine(0);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const handleCheckDictation = () => {
    if (!selectedPassage) return;
    const clean = (s: string) => s.replace(/[。、！？\s]/g, '').toLowerCase();
    const correct = clean(dictationInput) === clean(selectedPassage.text);
    setDictationResult(correct ? 'correct' : 'incorrect');
  };

  if (!selectedPassage) {
    return (
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="sm"><ArrowLeft className="w-4 h-4 mr-1" /> Quay lại</Button>
          </Link>
        </div>

        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Headphones className="w-8 h-8 text-primary" />
            Luyện nghe
          </h1>
          <p className="text-muted-foreground mt-1">Nghe đoạn hội thoại, xem transcript, luyện viết chính tả.</p>
        </div>

        <div className="space-y-3">
          {listeningPassages.map((p) => (
            <Card key={p.id} className="cursor-pointer hover:bg-secondary/50 transition-colors" onClick={() => setSelectedPassage(p)}>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  {p.titleJa && <p className="text-sm text-muted-foreground japanese-text">{p.titleJa}</p>}
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{p.transcript.join(' ')}</p>
                </div>
                <Badge variant="outline">{p.transcript.length} dòng</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => { handleStop(); setSelectedPassage(null); setShowTranscript(false); setDictationMode(false); setDictationResult(null); }}>
            <ArrowLeft className="w-4 h-4 mr-1" /> Danh sách
          </Button>
        </div>
        <Badge variant="outline" className="text-sm">
          <Headphones className="w-3 h-3 mr-1" /> Luyện nghe
        </Badge>
      </div>

      <h1 className="text-3xl font-bold">{selectedPassage.title}</h1>
      {selectedPassage.titleJa && (
        <p className="text-lg text-muted-foreground japanese-text">{selectedPassage.titleJa}</p>
      )}

      {/* Playback controls */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Volume2 className="w-5 h-5" /> Phát âm
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Speed selector */}
          <div className="flex items-center gap-2">
            <Rewind className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Tốc độ:</span>
            {SPEEDS.map((s) => (
              <Button
                key={s.value}
                variant={speed === s.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSpeed(s.value)}
              >
                {s.label}
              </Button>
            ))}
            <FastForward className="w-4 h-4 text-muted-foreground" />
          </div>

          {/* Play/Stop buttons */}
          <div className="flex gap-2 justify-center">
            <Button variant="default" onClick={() => handlePlayAll(selectedPassage)} disabled={isPlaying}>
              <Play className="w-4 h-4 mr-2" /> Phát toàn bộ
            </Button>
            <Button variant="destructive" onClick={handleStop} disabled={!isPlaying}>
              <Pause className="w-4 h-4 mr-2" /> Dừng
            </Button>
          </div>

          {/* Dictation toggle */}
          <div className="flex items-center gap-2">
            <Button variant={dictationMode ? 'default' : 'outline'} size="sm" onClick={() => { setDictationMode(!dictationMode); setDictationResult(null); setDictationInput(''); }}>
              <Mic className="w-4 h-4 mr-1" />
              {dictationMode ? 'Tắt nghe viết' : 'Nghe viết chính tả'}
            </Button>
          </div>

          {dictationMode && (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Nghe và viết lại: 「{selectedPassage.text}」
              </p>
              <div className="flex gap-2">
                <Button size="sm" onClick={() => handleSpeak(selectedPassage.text)} disabled={isPlaying}>
                  <Volume2 className="w-4 h-4 mr-1" /> Nghe lại
                </Button>
              </div>
              <textarea
                className="w-full min-h-[80px] rounded-lg border bg-background p-3 text-sm japanese-text"
                placeholder="Nhập câu bạn nghe được..."
                value={dictationInput}
                onChange={(e) => setDictationInput(e.target.value)}
              />
              <div className="flex gap-2">
                <Button size="sm" onClick={handleCheckDictation}>Kiểm tra</Button>
                {dictationResult === 'correct' && (
                  <Badge variant="success"><CheckCircle2 className="w-3 h-3 mr-1" /> Đúng!</Badge>
                )}
                {dictationResult === 'incorrect' && (
                  <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1" /> Chưa đúng</Badge>
                )}
              </div>
              {dictationResult === 'incorrect' && (
                <p className="text-sm text-muted-foreground japanese-text">
                  Đáp án: {selectedPassage.text}
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Transcript */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center justify-between">
            <span className="flex items-center gap-2">
              <BookOpenIcon /> Transcript
            </span>
            <Button variant="ghost" size="sm" onClick={() => setShowTranscript(!showTranscript)}>
              {showTranscript ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
          </CardTitle>
        </CardHeader>
        {showTranscript && (
          <CardContent className="space-y-2">
            {selectedPassage.transcript.map((line, i) => (
              <div
                key={i}
                className={cn(
                  'flex items-start gap-3 p-3 rounded-lg transition-colors',
                  isPlaying && currentLine === i ? 'bg-primary/10' : 'hover:bg-secondary/50'
                )}
              >
                <span className="text-xs text-muted-foreground w-6 pt-1">{i + 1}</span>
                <div className="flex-1">
                  <p className="japanese-text">{line}</p>
                  <Button variant="ghost" size="sm" className="mt-1 h-6 px-2" onClick={() => handleSpeak(line)}>
                    <Volume2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            ))}

            <Separator />

            <div>
              <p className="text-sm font-medium">Dịch:</p>
              <p className="text-sm text-muted-foreground mt-1">{selectedPassage.translation}</p>
            </div>
          </CardContent>
        )}
        {!showTranscript && (
          <CardContent>
            <p className="text-sm text-muted-foreground text-center">Nhấn nút con mắt để xem transcript</p>
          </CardContent>
        )}
      </Card>
    </div>
  );
}

function BookOpenIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
  );
}
