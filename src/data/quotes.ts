 export interface KanjiNote {
   word: string;
   meaning: string;
   reading: string;
   korean_pron: string;
 }
 
 export interface Quote {
   jp_original: string;
   jp_yomigana: string;
   ko_meaning: string;
   kanji_notes: KanjiNote[];
 }
 
 export const quotes: Quote[] = [
  {
    "jp_original": "歩前進のための二歩後退。",
    "jp_yomigana": "いっぽぜんしんのためのにほこうたい。",
    "ko_meaning": "한 걸음 전진을 위한 두 걸음 후퇴.",
    "kanji_notes": [
      { "word": "一歩", "meaning": "한 걸음", "reading": "いっぽ", "korean_pron": "잇포" },
      { "word": "前進", "meaning": "전진", "reading": "ぜんしん", "korean_pron": "젠신" },
      { "word": "後退", "meaning": "후퇴", "reading": "こうたい", "korean_pron": "코-타이" }
    ]
  },
  {
    "jp_original": "案ずるより産むが易し。",
    "jp_yomigana": "あんずるよりうむがやすし。",
    "ko_meaning": "걱정하는 것보다 실제로 해보면 쉽다.",
    "kanji_notes": [
      { "word": "案ずる", "meaning": "걱정하다", "reading": "あんずる", "korean_pron": "안즈루" },
      { "word": "産む", "meaning": "낳다", "reading": "うむ", "korean_pron": "우무" },
      { "word": "易し", "meaning": "쉽다", "reading": "やすし", "korean_pron": "야스시" }
    ]
  },
  {
    "jp_original": "継続は力なり。",
    "jp_yomigana": "けいぞくはちからなり。",
    "ko_meaning": "계속하는 것이 힘이다. (꾸준함이 정답이다.)",
    "kanji_notes": [
      { "word": "継続", "meaning": "계속, 지속", "reading": "けいぞく", "korean_pron": "케-조쿠" },
      { "word": "力", "meaning": "힘", "reading": "ちから", "korean_pron": "치카라" }
    ]
  },
  {
    "jp_original": "七転び八起き。",
    "jp_yomigana": "ななころびやおき。",
    "ko_meaning": "일곱 번 넘어지고 여덟 번 일어남. (칠전팔기)",
    "kanji_notes": [
{ "word": "転ぶ", "meaning": "넘어지다", "reading": "ころぶ", "korean_pron": "코로부" },
      { "word": "起きる", "meaning": "일어나다", "reading": "おきる", "korean_pron": "오키루" }
    ]
  },
  {
    "jp_original": "石の上にも三年。",
    "jp_yomigana": "いしのうえにもさんねん。",
    "ko_meaning": "돌 위에서 3년. (참고 견디면 반드시 성공한다.)",
    "kanji_notes": [
      { "word": "石", "meaning": "돌", "reading": "いし", "korean_pron": "이시" },
      { "word": "上", "meaning": "위", "reading": "うえ", "korean_pron": "우에" },
      { "word": "三年", "meaning": "삼 년", "reading": "さんねん", "korean_pron": "산넨" }
    ]
  },
  {
    "jp_original": "初心忘るべからず。",
    "jp_yomigana": "しょしんわするべからず。",
    "ko_meaning": "초심을 잊지 마라.",
    "kanji_notes": [
      { "word": "初心", "meaning": "초심", "reading": "しょしん", "korean_pron": "쇼신" },
      { "word": "忘れる", "meaning": "잊다", "reading": "わすれる", "korean_pron": "와스레루" }
    ]
  },
  {
    "jp_original": "成せば成る。",
    "jp_yomigana": "なせばなる。",
    "ko_meaning": "하면 된다.",
    "kanji_notes": [
{ "word": "成る", "meaning": "되다, 이루어지다", "reading": "なる", "korean_pron": "나루" }
    ]
  },
  {
    "jp_original": "千里の道も一歩から。",
    "jp_yomigana": "せんりのみちもいっぽから。",
    "ko_meaning": "천 리 길도 한 걸음부터.",
    "kanji_notes": [
      { "word": "千里", "meaning": "천 리", "reading": "せんり", "korean_pron": "센리" },
      { "word": "道", "meaning": "길", "reading": "みち", "korean_pron": "미치" },
      { "word": "一歩", "meaning": "한 걸음", "reading": "いっぽ", "korean_pron": "잇포" }
    ]
  },
  {
    "jp_original": "明日は明日の風が吹く。",
    "jp_yomigana": "あしたはあしたのかぜがふく。",
    "ko_meaning": "내일은 내일의 바람이 분다. (어떻게든 될 것이다.)",
    "kanji_notes": [
      { "word": "明日", "meaning": "내일", "reading": "あした", "korean_pron": "아시타" },
      { "word": "風", "meaning": "바람", "reading": "かぜ", "korean_pron": "카제" },
      { "word": "吹く", "meaning": "불다", "reading": "ふく", "korean_pron": "후쿠" }
    ]
  },
  {
    "jp_original": "失敗は成功の基。",
    "jp_yomigana": "しっぱいわせいこうのもと。",
    "ko_meaning": "실패는 성공의 어머니.",
    "kanji_notes": [
      { "word": "失敗", "meaning": "실패", "reading": "しっぱい", "korean_pron": "싯파이" },
      { "word": "成功", "meaning": "성공", "reading": "せいこう", "korean_pron": "세-코-" },
      { "word": "基", "meaning": "기초, 바탕", "reading": "もと", "korean_pron": "모토" }
    ]
  },
  {
    "jp_original": "努力は裏切らない。",
    "jp_yomigana": "どりょくわうらぎらない。",
    "ko_meaning": "노력은 배신하지 않는다.",
    "kanji_notes": [
      { "word": "努力", "meaning": "노력", "reading": "どりょく", "korean_pron": "도료쿠" },
      { "word": "裏切る", "meaning": "배신하다", "reading": "うらぎる", "korean_pron": "우라기루" }
    ]
  },
  {
    "jp_original": "思い立ったが吉日。",
    "jp_yomigana": "おもいたったがきちじつ。",
    "ko_meaning": "마음먹었을 때 바로 시작하라.",
    "kanji_notes": [
      { "word": "思い立つ", "meaning": "결심하다", "reading": "おもいたつ", "korean_pron": "오모이타츠" },
      { "word": "吉日", "meaning": "길일, 좋은 날", "reading": "きちじつ", "korean_pron": "키치지츠" }
    ]
  },
  {
    "jp_original": "時は金なり。",
    "jp_yomigana": "ときはかねなり。",
    "ko_meaning": "시간은 금이다.",
    "kanji_notes": [
      { "word": "時", "meaning": "시간", "reading": "とき", "korean_pron": "토키" },
      { "word": "金", "meaning": "돈, 금", "reading": "かね", "korean_pron": "카네" }
    ]
  },
  {
    "jp_original": "至誠は天に通ず。",
    "jp_yomigana": "しせいわてんにつうず。",
    "ko_meaning": "지성은 하늘에 통한다. (지성이면 감천)",
    "kanji_notes": [
      { "word": "至誠", "meaning": "지극한 정성", "reading": "しせい", "korean_pron": "시세-" },
      { "word": "天", "meaning": "하늘", "reading": "てん", "korean_pron": "텐" },
      { "word": "通ず", "meaning": "통하다", "reading": "つうず", "korean_pron": "츠-즈" }
    ]
  },
  {
    "jp_original": "一期一会。",
    "jp_yomigana": "いちごいちえ。",
    "ko_meaning": "평생에 단 한 번뿐인 만남.",
    "kanji_notes": [
      { "word": "一期", "meaning": "일생(한 번의 생)", "reading": "いちご", "korean_pron": "이치고" },
      { "word": "一会", "meaning": "한 번의 만남", "reading": "いちえ", "korean_pron": "이치에" }
    ]
  },
  {
    "jp_original": "雨降って地固まる。",
    "jp_yomigana": "あめふってじかためる。",
    "ko_meaning": "비 온 뒤에 땅이 굳어진다.",
    "kanji_notes": [
      { "word": "雨", "meaning": "비", "reading": "あめ", "korean_pron": "아메" },
      { "word": "降る", "meaning": "내리다", "reading": "ふる", "korean_pron": "후루" },
      { "word": "地", "meaning": "땅", "reading": "じ", "korean_pron": "지" },
      { "word": "固まる", "meaning": "굳어지다", "reading": "かたまる", "korean_pron": "카타마루" }
    ]
  },
  {
    "jp_original": "百聞は一見に如かず。",
    "jp_yomigana": "ひゃくぶんわいっけんにしかず。",
    "ko_meaning": "백문이 불여일견.",
    "kanji_notes": [
      { "word": "百聞", "meaning": "백 번 듣기", "reading": "ひゃくぶん", "korean_pron": "햐쿠분" },
      { "word": "一見", "meaning": "한 번 보기", "reading": "いっけん", "korean_pron": "잇켄" },
      { "word": "如かず", "meaning": "~만 못하다", "reading": "しかず", "korean_pron": "시카즈" }
    ]
  },
  {
    "jp_original": "笑う門には福来たる。",
    "jp_yomigana": "わらうかどにわふくきたる。",
    "ko_meaning": "웃으면 복이 온다.",
    "kanji_notes": [
      { "word": "笑う", "meaning": "웃다", "reading": "わらう", "korean_pron": "와라우" },
      { "word": "福", "meaning": "복", "reading": "ふく", "korean_pron": "후쿠" },
      { "word": "来る", "meaning": "오다", "reading": "くる", "korean_pron": "쿠루" }
    ]
  },
  {
    "jp_original": "善は急げ。",
    "jp_yomigana": "ぜんわいそげ。",
    "ko_meaning": "좋은 일은 서둘러라.",
    "kanji_notes": [
      { "word": "善", "meaning": "선, 좋은 일", "reading": "ぜん", "korean_pron": "젠" },
      { "word": "急ぐ", "meaning": "서두르다", "reading": "いそぐ", "korean_pron": "이소구" }
    ]
  },
  {
    "jp_original": "一念岩をも通す。",
    "jp_yomigana": "いちねんいわをもとおす。",
    "ko_meaning": "강한 염원은 바위도 뚫는다.",
    "kanji_notes": [
      { "word": "一念", "meaning": "일념, 굳은 결심", "reading": "いちねん", "korean_pron": "이치넨" },
      { "word": "岩", "meaning": "바위", "reading": "いわ", "korean_pron": "이와" },
      { "word": "通す", "meaning": "뚫다, 관철하다", "reading": "とおす", "korean_pron": "토오스" }
    ]
  },
  {
"jp_original": "急がば回れ。",
    "jp_yomigana": "いそがばまわれ。",
    "ko_meaning": "급할수록 돌아가라.",
    "kanji_notes": [
      { "word": "急ぐ", "meaning": "서두르다", "reading": "いそぐ", "korean_pron": "이소구" },
      { "word": "回る", "meaning": "돌다", "reading": "まわる", "korean_pron": "마와루" }
    ]
  },
  {
    "jp_original": "聞くは一時の恥、聞かぬは一生の恥。",
    "jp_yomigana": "きくはいっときのはじ、きかぬはいっしょうのはじ。",
    "ko_meaning": "묻는 것은 한때의 창피지만, 묻지 않는 것은 평생의 창피다.",
    "kanji_notes": [
      { "word": "聞く", "meaning": "듣다, 묻다", "reading": "きく", "korean_pron": "키쿠" },
      { "word": "一時", "meaning": "잠시, 일시", "reading": "いっとき", "korean_pron": "잇토키" },
      { "word": "恥", "meaning": "부끄러움, 수치", "reading": "はじ", "korean_pron": "하지" },
      { "word": "一生", "meaning": "일생", "reading": "いっしょう", "korean_pron": "잇쇼-" }
]
  },
  {
"jp_original": "待てば海路の日和あり。",
    "jp_yomigana": "まてばかいろのひよりあり。",
    "ko_meaning": "기다리면 바닷길이 잔잔해질 날이 있다. (고생 끝에 낙이 온다.)",
    "kanji_notes": [
      { "word": "待つ", "meaning": "기다리다", "reading": "まつ", "korean_pron": "마츠" },
      { "word": "海路", "meaning": "바닷길", "reading": "かいろ", "korean_pron": "카이로" },
      { "word": "日和", "meaning": "좋은 날씨, 순풍", "reading": "ひより", "korean_pron": "히요리" }
    ]
  },
  {
    "jp_original": "情けは人のためならず。",
    "jp_yomigana": "なさけはひとのためならず。",
    "ko_meaning": "친절은 남을 위해서만 베푸는 것이 아니다. (결국 자신에게 돌아온다.)",
    "kanji_notes": [
      { "word": "情け", "meaning": "정, 인정, 친절", "reading": "なさけ", "korean_pron": "나사케" },
      { "word": "人", "meaning": "사람", "reading": "ひと", "korean_pron": "히토" },
      { "word": "為", "meaning": "위함", "reading": "ため", "korean_pron": "타메" }
    ]
  },
  {
    "jp_original": "艱難汝を玉にす。",
    "jp_yomigana": "かんなんなんじをたまにす。",
    "ko_meaning": "고난이 너를 보석으로 만든다.",
    "kanji_notes": [
      { "word": "艱難", "meaning": "고난", "reading": "かんなん", "korean_pron": "칸난" },
      { "word": "汝", "meaning": "너(그대)", "reading": "なんじ", "korean_pron": "난지" },
      { "word": "玉", "meaning": "보석, 구슬", "reading": "たま", "korean_pron": "타마" }
]
  },
  {
    "jp_original": "人事を尽くして天命を待つ。",
    "jp_yomigana": "じんじをつくしててんめいをまつ。",
    "ko_meaning": "진인사대천명. (사람으로서 할 일을 다하고 하늘의 뜻을 기다린다.)",
    "kanji_notes": [
      { "word": "人事", "meaning": "인사(사람의 일)", "reading": "じんじ", "korean_pron": "진지" },
      { "word": "尽くす", "meaning": "다하다", "reading": "つくす", "korean_pron": "츠쿠스" },
      { "word": "天命", "meaning": "천명, 하늘의 뜻", "reading": "てんめい", "korean_pron": "텐메-" },
      { "word": "待つ", "meaning": "기다리다", "reading": "まつ", "korean_pron": "마츠" }
    ]
  },
  {
    "jp_original": "終わり良ければ全て良し。",
    "jp_yomigana": "おわりよければすべてよし。",
    "ko_meaning": "끝이 좋으면 모든 것이 좋다.",
    "kanji_notes": [
      { "word": "終わり", "meaning": "끝", "reading": "おわり", "korean_pron": "오와리" },
      { "word": "全て", "meaning": "모든 것", "reading": "すべて", "korean_pron": "스베테" },
      { "word": "良し", "meaning": "좋다", "reading": "よし", "korean_pron": "요시" }
    ]
  },
  {
    "jp_original": "当たって砕けろ。",
    "jp_yomigana": "あたってくだけろ。",
    "ko_meaning": "밑져야 본전이니 일단 도전하라.",
    "kanji_notes": [
      { "word": "当たる", "meaning": "부딪치다, 맞서다", "reading": "あたる", "korean_pron": "아타루" },
      { "word": "砕ける", "meaning": "부서지다", "reading": "くだける", "korean_pron": "쿠다케루" }
    ]
  },
  {
    "jp_original": "習うより慣れろ。",
    "jp_yomigana": "ならうよりなれろ。",
    "ko_meaning": "배우기보다 익숙해져라. (이론보다 실천과 경험이 중요하다.)",
    "kanji_notes": [
      { "word": "習う", "meaning": "배우다", "reading": "ならう", "korean_pron": "나라우" },
      { "word": "慣れる", "meaning": "익숙해지다", "reading": "なれる", "korean_pron": "나레루" }
    ]
  },
  {
    "jp_original": "好きこそものの上手なれ。",
    "jp_yomigana": "すきこそもののじょうずなれ。",
    "ko_meaning": "좋아하는 것이야말로 숙달의 길이다.",
    "kanji_notes": [
      { "word": "好き", "meaning": "좋아함", "reading": "すき", "korean_pron": "스키" },
      { "word": "上手", "meaning": "능숙함, 잘함", "reading": "じょうず", "korean_pron": "죠-즈" }
    ]
  },
  {
    "jp_original": "地道な努力が一番の近道。",
    "jp_yomigana": "じみちなどりょくがいちばんのちかみち。",
    "ko_meaning": "꾸준한 노력이 가장 빠른 지름길이다.",
    "kanji_notes": [
      { "word": "地道", "meaning": "성실함, 꾸준함", "reading": "じみち", "korean_pron": "지미치" },
      { "word": "努力", "meaning": "노력", "reading": "どりょく", "korean_pron": "도료쿠" },
      { "word": "一番", "meaning": "가장", "reading": "いちばん", "korean_pron": "이치반" },
      { "word": "近道", "meaning": "지름길", "reading": "ちかみち", "korean_pron": "치카미치" }
    ]
  },
  {
    "jp_original": "楽あれば苦あり。",
    "jp_yomigana": "らくあればくあり。",
    "ko_meaning": "즐거움이 있으면 괴로움도 있다.",
    "kanji_notes": [
      { "word": "楽", "meaning": "즐거움", "reading": "らく", "korean_pron": "라쿠" },
      { "word": "苦しい ", "meaning": "괴롭다, 고되다", "reading": "くるしい ", "korean_pron": "쿠루시이" }
    ]
  },
  {
    "jp_original": "一寸の光陰軽んずべからず。",
    "jp_yomigana": "いっすんのこういんかろんずべからず。",
    "ko_meaning": "짧은 시간이라도 가볍게 여겨서는 안 된다.",
    "kanji_notes": [
      { "word": "一寸", "meaning": "아주 짧은 시간/조금", "reading": "いっすん", "korean_pron": "잇슨" },
      { "word": "軽んず", "meaning": "가볍게 여기다", "reading": "かろんず", "korean_pron": "카론즈" }
    ]
  },
  {
    "jp_original": "虎穴に入らずんば虎子を得ず。",
    "jp_yomigana": "こけつにいらずんばこじをえず。",
    "ko_meaning": "호랑이 굴에 들어가지 않으면 호랑이 새끼를 얻을 수 없다.",
    "kanji_notes": [
      { "word": "虎穴", "meaning": "호랑이 굴", "reading": "こけつ", "korean_pron": "코케츠" },
      { "word": "入る", "meaning": "들어가다", "reading": "はいる", "korean_pron": "하이루" },
      { "word": "虎子", "meaning": "호랑이 새끼", "reading": "こじ", "korean_pron": "코지" },
      { "word": "得る", "meaning": "얻다", "reading": "える", "korean_pron": "에루" }
    ]
  },
  {
"jp_original": "失敗してもいい。やめないことが大事。",
    "jp_yomigana": "しっぱいしてもいい。やめないことがだいじ。",
    "ko_meaning": "실패해도 괜찮다. 포기하지 않는 게 중요하다.",
    "kanji_notes": [
      { "word": "失敗", "meaning": "실패", "reading": "しっぱい", "korean_pron": "싯파이" },
      { "word": "大事", "meaning": "중요함", "reading": "だいじ", "korean_pron": "다이지" }
    ]
  },
  {
    "jp_original": "夢は逃げない。逃げるのはいつも自分だ。",
    "jp_yomigana": "ゆめはにげない。にげるのはいつもじぶんだ。",
    "ko_meaning": "꿈은 도망가지 않는다. 도망치는 건 언제나 자신이다.",
    "kanji_notes": [
      { "word": "夢", "meaning": "꿈", "reading": "ゆめ", "korean_pron": "유메" },
      { "word": "逃げる", "meaning": "도망치다", "reading": "にげる", "korean_pron": "니게루" },
      { "word": "自分", "meaning": "자기 자신", "reading": "じぶん", "korean_pron": "지분" }
    ]
  },
  {
    "jp_original": "やらない後悔より、やった後悔。",
    "jp_yomigana": "やらないこうかいより、やったこうかい。",
    "ko_meaning": "하지 않은 후회보다, 해본 후회.",
    "kanji_notes": [
      { "word": "後悔", "meaning": "후회", "reading": "こうかい", "korean_pron": "코-카이" }
    ]
  },
  {
    "jp_original": "今日できることを明日に延ばすな。",
    "jp_yomigana": "きょうできることをあすにのばすな。",
    "ko_meaning": "오늘 할 수 있는 일을 내일로 미루지 마라.",
    "kanji_notes": [
      { "word": "今日", "meaning": "오늘", "reading": "きょう", "korean_pron": "쿄-" },
      { "word": "明日", "meaning": "내일", "reading": "あす", "korean_pron": "아스" },
      { "word": "延ばす", "meaning": "미루다", "reading": "のばす", "korean_pron": "노바스" }
    ]
  },
  {
    "jp_original": "小さな一歩が未来を変える。",
    "jp_yomigana": "ちいさないっぽがみらいをかえる。",
    "ko_meaning": "작은 한 걸음이 미래를 바꾼다.",
    "kanji_notes": [
      { "word": "小さな", "meaning": "작은", "reading": "ちいさな", "korean_pron": "치이사나" },
      { "word": "未来", "meaning": "미래", "reading": "みらい", "korean_pron": "미라이" },
      { "word": "変える", "meaning": "바꾸다", "reading": "かえる", "korean_pron": "카에루" }
    ]
  },
  {
    "jp_original": "努力は必ず報われる。",
    "jp_yomigana": "どりょくはかならずむくわれる。",
    "ko_meaning": "노력은 반드시 보답받는다.",
    "kanji_notes": [
      { "word": "努力", "meaning": "노력", "reading": "どりょく", "korean_pron": "도료쿠" },
      { "word": "必ず", "meaning": "반드시", "reading": "かならず", "korean_pron": "카나라즈" },
      { "word": "報われる", "meaning": "보답받다", "reading": "むくわれる", "korean_pron": "무쿠와레루" }
]
  },
  {
    "jp_original": "笑顔は最強の武器。",
    "jp_yomigana": "えがおはさいきょうのぶき。",
    "ko_meaning": "미소는 최강의 무기다.",
    "kanji_notes": [
      { "word": "笑顔", "meaning": "웃는 얼굴, 미소", "reading": "えがお", "korean_pron": "에가오" },
      { "word": "最強", "meaning": "최강", "reading": "さいきょう", "korean_pron": "사이쿄-" },
      { "word": "武器", "meaning": "무기", "reading": "ぶき", "korean_pron": "부키" }
    ]
  },
  {
    "jp_original": "自分らしく生きる。",
    "jp_yomigana": "じぶんらしくいきる。",
    "ko_meaning": "나답게 살아간다.",
    "kanji_notes": [
      { "word": "自分", "meaning": "자기 자신", "reading": "じぶん", "korean_pron": "지분" },
      { "word": "生きる", "meaning": "살다", "reading": "いきる", "korean_pron": "이키루" }
    ]
  },
  {
    "jp_original": "失うものがあれば、得るものもある。",
    "jp_yomigana": "うしなうものがあれば、えるものもある。",
    "ko_meaning": "잃는 것이 있으면 얻는 것도 있다.",
    "kanji_notes": [
      { "word": "失う", "meaning": "잃다", "reading": "うしなう", "korean_pron": "우시나우" },
      { "word": "得る", "meaning": "얻다", "reading": "える", "korean_pron": "에루" }
    ]
  },
  {
    "jp_original": "焦らず、比べず、諦めず。",
    "jp_yomigana": "あせらず、くらべず、あきらめず。",
    "ko_meaning": "조급해하지 말고, 비교하지 말고, 포기하지 말자.",
    "kanji_notes": [
      { "word": "焦る", "meaning": "조급해하다", "reading": "あせる", "korean_pron": "아세루" },
      { "word": "比べる", "meaning": "비교하다", "reading": "くらべる", "korean_pron": "쿠라베루" },
      { "word": "諦める", "meaning": "포기하다", "reading": "あきらめる", "korean_pron": "아키라메루" }
    ]
  },
  {
    "jp_original": "できない理由より、できる方法を探せ。",
    "jp_yomigana": "できないりゆうより、できるほうほうをさがせ。",
    "ko_meaning": "못하는 이유보다, 할 수 있는 방법을 찾아라.",
    "kanji_notes": [
      { "word": "理由", "meaning": "이유", "reading": "りゆう", "korean_pron": "리유-" },
      { "word": "方法", "meaning": "방법", "reading": "ほうほう", "korean_pron": "호-호-" },
      { "word": "探す", "meaning": "찾다", "reading": "さがす", "korean_pron": "사가스" }
    ]
  },
  {
    "jp_original": "自信は経験から生まれる。",
    "jp_yomigana": "じしんはけいけんからうまれる。",
    "ko_meaning": "자신감은 경험에서 태어난다.",
    "kanji_notes": [
      { "word": "自信", "meaning": "자신감", "reading": "じしん", "korean_pron": "지신" },
      { "word": "経験", "meaning": "경험", "reading": "けいけん", "korean_pron": "케-켄" },
      { "word": "生まれる", "meaning": "태어나다", "reading": "うまれる", "korean_pron": "우마레루" }
]
  },
  {
    "jp_original": "継続は才能を超える。",
    "jp_yomigana": "けいぞくはさいのうをこえる。",
    "ko_meaning": "꾸준함은 재능을 뛰어넘는다.",
    "kanji_notes": [
      { "word": "継続", "meaning": "계속함, 지속", "reading": "けいぞく", "korean_pron": "케이조쿠" },
      { "word": "才能", "meaning": "재능", "reading": "さいのう", "korean_pron": "사이노-" },
      { "word": "超える", "meaning": "넘다, 초월하다", "reading": "こえる", "korean_pron": "코에루" }
    ]
  },
  {
    "jp_original": "努力は静かに報われる。",
    "jp_yomigana": "どりょくはしずかにむくわれる。",
    "ko_meaning": "노력은 조용히 보상받는다.",
    "kanji_notes": [
      { "word": "努力", "meaning": "노력", "reading": "どりょく", "korean_pron": "도료쿠" },
      { "word": "静か", "meaning": "조용함", "reading": "しずか", "korean_pron": "시즈카" },
      { "word": "報われる", "meaning": "보상받다", "reading": "むくわれる", "korean_pron": "무쿠와레루" }
    ]
  },
  {
    "jp_original": "夢は見るものではなく叶えるもの。",
    "jp_yomigana": "ゆめはみるものではなくかなえるもの。",
    "ko_meaning": "꿈은 꾸는 것이 아니라 이루는 것이다.",
    "kanji_notes": [
      { "word": "夢", "meaning": "꿈", "reading": "ゆめ", "korean_pron": "유메" },
      { "word": "叶える", "meaning": "이루다", "reading": "かなえる", "korean_pron": "카나에루" }
    ]
  },
  {
    "jp_original": "小さな一歩が未来を変える。",
    "jp_yomigana": "ちいさないっぽがみらいをかえる。",
    "ko_meaning": "작은 한 걸음이 미래를 바꾼다.",
    "kanji_notes": [
      { "word": "小さな", "meaning": "작은", "reading": "ちいさな", "korean_pron": "치이사나" },
      { "word": "一歩", "meaning": "한 걸음", "reading": "いっぽ", "korean_pron": "잇포" },
      { "word": "未来", "meaning": "미래", "reading": "みらい", "korean_pron": "미라이" },
      { "word": "変える", "meaning": "바꾸다", "reading": "かえる", "korean_pron": "카에루" }
    ]
  },
  {
    "jp_original": "迷ったら前へ進め。",
    "jp_yomigana": "まよったらまえへすすめ。",
    "ko_meaning": "망설여진다면 앞으로 나아가라.",
    "kanji_notes": [
      { "word": "迷う", "meaning": "망설이다, 헤매다", "reading": "まよう", "korean_pron": "마요우" },
      { "word": "前", "meaning": "앞", "reading": "まえ", "korean_pron": "마에" },
      { "word": "進む", "meaning": "나아가다", "reading": "すすむ", "korean_pron": "스스무" }
    ]
  },
  {
    "jp_original": "笑顔は最強の武器。",
    "jp_yomigana": "えがおはさいきょうのぶき。",
    "ko_meaning": "미소는 최강의 무기다.",
    "kanji_notes": [
      { "word": "笑顔", "meaning": "웃는 얼굴, 미소", "reading": "えがお", "korean_pron": "에가오" },
      { "word": "最強", "meaning": "최강", "reading": "さいきょう", "korean_pron": "사이쿄-" },
      { "word": "武器", "meaning": "무기", "reading": "ぶき", "korean_pron": "부키" }
    ]
  },
  {
    "jp_original": "焦らず、腐らず、諦めず。",
    "jp_yomigana": "あせらず、くさらず、あきらめず。",
    "ko_meaning": "조급해하지 말고, 좌절하지 말고, 포기하지 말자.",
    "kanji_notes": [
      { "word": "焦る", "meaning": "조급해하다", "reading": "あせる", "korean_pron": "아세루" },
      { "word": "腐る", "meaning": "썩다, 좌절하다", "reading": "くさる", "korean_pron": "쿠사루" },
      { "word": "諦める", "meaning": "포기하다", "reading": "あきらめる", "korean_pron": "아키라메루" }
    ]
  },
  {
    "jp_original": "今日の自分が明日の自分を作る。",
    "jp_yomigana": "きょうのじぶんがあすのじぶんをつくる。",
    "ko_meaning": "오늘의 내가 내일의 나를 만든다.",
    "kanji_notes": [
      { "word": "今日", "meaning": "오늘", "reading": "きょう", "korean_pron": "쿄-" },
      { "word": "自分", "meaning": "자기 자신", "reading": "じぶん", "korean_pron": "지분" },
      { "word": "明日", "meaning": "내일", "reading": "あす", "korean_pron": "아스" },
      { "word": "作る", "meaning": "만들다", "reading": "つくる", "korean_pron": "츠쿠루" }
    ]
  },
  {
    "jp_original": "失敗は成長の証。",
    "jp_yomigana": "しっぱいはせいちょうのあかし。",
    "ko_meaning": "실패는 성장의 증거다.",
    "kanji_notes": [
      { "word": "失敗", "meaning": "실패", "reading": "しっぱい", "korean_pron": "싯파이" },
      { "word": "成長", "meaning": "성장", "reading": "せいちょう", "korean_pron": "세이초-" },
      { "word": "証", "meaning": "증거", "reading": "あかし", "korean_pron": "아카시" }
    ]
  },
  {
    "jp_original": "遠回りこそ近道になる。",
    "jp_yomigana": "とおまわりこそちかみちになる。",
    "ko_meaning": "돌아가는 길이 오히려 지름길이 된다.",
    "kanji_notes": [
      { "word": "遠回り", "meaning": "우회, 멀리 돌아감", "reading": "とおまわり", "korean_pron": "토-마와리" },
      { "word": "近道", "meaning": "지름길", "reading": "ちかみち", "korean_pron": "치카미치" }
    ]
  },
  {
    "jp_original": "自分のペースでいい。",
    "jp_yomigana": "じぶんのぺーすでいい。",
    "ko_meaning": "내 페이스대로 가면 된다.",
    "kanji_notes": [
      { "word": "自分", "meaning": "자기 자신", "reading": "じぶん", "korean_pron": "지분" },
      { "word": "ペース", "meaning": "페이스, 속도", "reading": "ぺーす", "korean_pron": "페-스" }
    ]
  },
  {
    "jp_original": "本気は必ず伝わる。",
    "jp_yomigana": "ほんきはかならずつたわる。",
    "ko_meaning": "진심은 반드시 전해진다.",
    "kanji_notes": [
      { "word": "本気", "meaning": "진심, 진지함", "reading": "ほんき", "korean_pron": "혼키" },
      { "word": "必ず", "meaning": "반드시", "reading": "かならず", "korean_pron": "카나라즈" },
      { "word": "伝わる", "meaning": "전해지다", "reading": "つたわる", "korean_pron": "츠타와루" }
    ]
  },
  {
    "jp_original": "努力は嘘をつかない。",
    "jp_yomigana": "どりょくはうそをつかない。",
    "ko_meaning": "노력은 거짓말하지 않는다.",
    "kanji_notes": [
      { "word": "努力", "meaning": "노력", "reading": "どりょく", "korean_pron": "도료쿠" },
      { "word": "嘘", "meaning": "거짓말", "reading": "うそ", "korean_pron": "우소" }
    ]
  },
  {
    "jp_original": "昨日より今日、今日より明日。",
    "jp_yomigana": "きのうよりきょう、きょうよりあした。",
    "ko_meaning": "어제보다 오늘, 오늘보다 내일.",
    "kanji_notes": [
      { "word": "昨日", "meaning": "어제", "reading": "きのう", "korean_pron": "키노-" },
      { "word": "今日", "meaning": "오늘", "reading": "きょう", "korean_pron": "쿄-" },
      { "word": "明日", "meaning": "내일", "reading": "あした", "korean_pron": "아시타" }
    ]
  },
  {
    "jp_original": "心が変われば世界が変わる。",
    "jp_yomigana": "こころがかわればせかいがかわる。",
    "ko_meaning": "마음이 바뀌면 세상이 바뀐다.",
    "kanji_notes": [
      { "word": "心", "meaning": "마음", "reading": "こころ", "korean_pron": "코코로" },
      { "word": "世界", "meaning": "세계", "reading": "せかい", "korean_pron": "세카이" },
      { "word": "変わる", "meaning": "변하다", "reading": "かわる", "korean_pron": "카와루" }
    ]
  },
  {
    "jp_original": "優しさは巡り巡って返ってくる。",
    "jp_yomigana": "やさしさはめぐりめぐってかえってくる。",
    "ko_meaning": "친절은 돌고 돌아 다시 돌아온다.",
    "kanji_notes": [
      { "word": "優しさ", "meaning": "상냥함, 친절", "reading": "やさしさ", "korean_pron": "야사시사" },
      { "word": "巡る", "meaning": "돌다", "reading": "めぐる", "korean_pron": "메구루" },
      { "word": "返る", "meaning": "돌아오다", "reading": "かえる", "korean_pron": "카에루" }
    ]
  },
  {
    "jp_original": "願いは口に出すと叶いやすい。",
    "jp_yomigana": "ねがいはくちにだすとかないやすい。",
    "ko_meaning": "바람은 말로 하면 이루어지기 쉽다.",
    "kanji_notes": [
      { "word": "願い", "meaning": "소원, 바람", "reading": "ねがい", "korean_pron": "네가이" },
      { "word": "口", "meaning": "입", "reading": "くち", "korean_pron": "쿠치" },
      { "word": "出す", "meaning": "내다, 말하다", "reading": "だす", "korean_pron": "다스" },
      { "word": "叶う", "meaning": "이루어지다", "reading": "かなう", "korean_pron": "카나우" }
    ]
  },
  {
    "jp_original": "自信は経験から生まれる。",
    "jp_yomigana": "じしんはけいけんからうまれる。",
    "ko_meaning": "자신감은 경험에서 나온다.",
    "kanji_notes": [
      { "word": "自信", "meaning": "자신감", "reading": "じしん", "korean_pron": "지신" },
      { "word": "経験", "meaning": "경험", "reading": "けいけん", "korean_pron": "케이켄" },
      { "word": "生まれる", "meaning": "태어나다, 생겨나다", "reading": "うまれる", "korean_pron": "우마레루" }
    ]
  },
  {
    "jp_original": "誰かと比べるより昨日の自分を超えろ。",
    "jp_yomigana": "だれかとくらべるよりきのうのじぶんをこえろ。",
    "ko_meaning": "남과 비교하기보다 어제의 나를 넘어라.",
    "kanji_notes": [
      { "word": "誰か", "meaning": "누군가", "reading": "だれか", "korean_pron": "다레카" },
      { "word": "比べる", "meaning": "비교하다", "reading": "くらべる", "korean_pron": "쿠라베루" },
      { "word": "昨日", "meaning": "어제", "reading": "きのう", "korean_pron": "키노-" },
      { "word": "超える", "meaning": "넘다", "reading": "こえる", "korean_pron": "코에루" }
    ]
  },
  {
    "jp_original": "失ったものより残ったものを大切に。",
    "jp_yomigana": "うしなったものよりのこったものをたいせつに。",
    "ko_meaning": "잃은 것보다 남은 것을 소중히 하자.",
    "kanji_notes": [
      { "word": "失う", "meaning": "잃다", "reading": "うしなう", "korean_pron": "우시나우" },
      { "word": "残る", "meaning": "남다", "reading": "のこる", "korean_pron": "노코루" },
      { "word": "大切", "meaning": "소중함", "reading": "たいせつ", "korean_pron": "타이세츠" }
    ]
  },
  {
    "jp_original": "人生は選択の連続だ。",
    "jp_yomigana": "じんせいはせんたくのれんぞくだ。",
    "ko_meaning": "인생은 선택의 연속이다.",
    "kanji_notes": [
      { "word": "人生", "meaning": "인생", "reading": "じんせい", "korean_pron": "진세이" },
      { "word": "選択", "meaning": "선택", "reading": "せんたく", "korean_pron": "센타쿠" },
      { "word": "連続", "meaning": "연속", "reading": "れんぞく", "korean_pron": "렌조쿠" }
    ]
  },
  {
    "jp_original": "諦めない限り負けじゃない。",
    "jp_yomigana": "あきらめないかぎりまけじゃない。",
    "ko_meaning": "포기하지 않는 한 패배가 아니다.",
    "kanji_notes": [
      { "word": "諦める", "meaning": "포기하다", "reading": "あきらめる", "korean_pron": "아키라메루" },
      { "word": "限り", "meaning": "~하는 한", "reading": "かぎり", "korean_pron": "카기리" },
      { "word": "負け", "meaning": "패배", "reading": "まけ", "korean_pron": "마케" }
    ]
  },
  {
    "jp_original": "優しい言葉は心を救う。",
    "jp_yomigana": "やさしいことばはこころをすくう。",
    "ko_meaning": "다정한 말은 마음을 구한다.",
    "kanji_notes": [
      { "word": "優しい", "meaning": "상냥한", "reading": "やさしい", "korean_pron": "야사시이" },
      { "word": "言葉", "meaning": "말, 단어", "reading": "ことば", "korean_pron": "코토바" },
      { "word": "心", "meaning": "마음", "reading": "こころ", "korean_pron": "코코로" },
      { "word": "救う", "meaning": "구하다, 구원하다", "reading": "すくう", "korean_pron": "스쿠우" }
]
  },
  {
    "jp_original": "できない理由より、できる方法を探そう。",
    "jp_yomigana": "できないりゆうより、できるほうほうをさがそう。",
    "ko_meaning": "못 하는 이유보다 할 수 있는 방법을 찾자.",
    "kanji_notes": [
      { "word": "理由", "meaning": "이유", "reading": "りゆう", "korean_pron": "리유-" },
      { "word": "方法", "meaning": "방법", "reading": "ほうほう", "korean_pron": "호-호-" },
      { "word": "探す", "meaning": "찾다", "reading": "さがす", "korean_pron": "사가스" }
    ]
  },
  {
    "jp_original": "やる気は後からついてくる。",
    "jp_yomigana": "やるきはあとからついてくる。",
    "ko_meaning": "의욕은 나중에 따라온다.",
    "kanji_notes": [
      { "word": "やる気", "meaning": "의욕, 할 마음", "reading": "やるき", "korean_pron": "야루키" },
      { "word": "後", "meaning": "뒤, 나중", "reading": "あと", "korean_pron": "아토" }
    ]
  },
  {
    "jp_original": "小さな幸せを見つけられる人が強い。",
    "jp_yomigana": "ちいさなしあわせをみつけられるひとがつよい。",
    "ko_meaning": "작은 행복을 찾을 줄 아는 사람이 강하다.",
    "kanji_notes": [
      { "word": "小さな", "meaning": "작은", "reading": "ちいさな", "korean_pron": "치이사나" },
      { "word": "幸せ", "meaning": "행복", "reading": "しあわせ", "korean_pron": "시아와세" },
      { "word": "見つける", "meaning": "찾다, 발견하다", "reading": "みつける", "korean_pron": "미츠케루" },
      { "word": "強い", "meaning": "강하다", "reading": "つよい", "korean_pron": "츠요이" }
    ]
  },
  {
    "jp_original": "今の苦しさは、未来の自分への贈り物。",
    "jp_yomigana": "いまのくるしさは、みらいのじぶんへのおくりもの。",
    "ko_meaning": "지금의 괴로움은 미래의 나에게 주는 선물이다.",
    "kanji_notes": [
      { "word": "今", "meaning": "지금", "reading": "いま", "korean_pron": "이마" },
      { "word": "苦しさ", "meaning": "괴로움", "reading": "くるしさ", "korean_pron": "쿠루시사" },
      { "word": "未来", "meaning": "미래", "reading": "みらい", "korean_pron": "미라이" },
      { "word": "贈り物", "meaning": "선물", "reading": "おくりもの", "korean_pron": "오쿠리모노" }
    ]
  },
  {
    "jp_original": "頑張った分だけ、自分を好きになれる。",
    "jp_yomigana": "がんばったぶんだけ、じぶんをすきになれる。",
    "ko_meaning": "노력한 만큼 나 자신을 좋아할 수 있다.",
    "kanji_notes": [
      { "word": "頑張る", "meaning": "힘내다, 노력하다", "reading": "がんばる", "korean_pron": "간바루" },
{ "word": "自分", "meaning": "자기 자신", "reading": "じぶん", "korean_pron": "지분" },
      { "word": "好き", "meaning": "좋아함", "reading": "すき", "korean_pron": "스키" }
]
  },
  {
    "jp_original": "諦めた瞬間、夢は終わる。",
    "jp_yomigana": "あきらめたしゅんかん、ゆめはおわる。",
    "ko_meaning": "포기하는 순간 꿈은 끝난다.",
    "kanji_notes": [
      { "word": "諦める", "meaning": "포기하다", "reading": "あきらめる", "korean_pron": "아키라메루" },
      { "word": "瞬間", "meaning": "순간", "reading": "しゅんかん", "korean_pron": "슌칸" },
      { "word": "夢", "meaning": "꿈", "reading": "ゆめ", "korean_pron": "유메" },
      { "word": "終わる", "meaning": "끝나다", "reading": "おわる", "korean_pron": "오와루" }
    ]
  },
  {
    "jp_original": "笑うことは、心の運動だ。",
    "jp_yomigana": "わらうことは、こころのうんどうだ。",
    "ko_meaning": "웃는 것은 마음의 운동이다.",
    "kanji_notes": [
      { "word": "笑う", "meaning": "웃다", "reading": "わらう", "korean_pron": "와라우" },
      { "word": "心", "meaning": "마음", "reading": "こころ", "korean_pron": "코코로" },
      { "word": "運動", "meaning": "운동", "reading": "うんどう", "korean_pron": "운도-" }
    ]
  },
  {
    "jp_original": "できるかどうかじゃない、やるかどうかだ。",
    "jp_yomigana": "できるかどうかじゃない、やるかどうかだ。",
    "ko_meaning": "할 수 있냐가 아니라, 할 거냐가 중요하다.",
    "kanji_notes": [
      { "word": "やる", "meaning": "하다", "reading": "やる", "korean_pron": "야루" },
      { "word": "重要", "meaning": "중요", "reading": "じゅうよう", "korean_pron": "쥬-요-" }
    ]
  },
  {
    "jp_original": "心配しすぎると、幸せが逃げる。",
    "jp_yomigana": "しんぱいしすぎると、しあわせがにげる。",
    "ko_meaning": "너무 걱정하면 행복이 도망간다.",
    "kanji_notes": [
      { "word": "心配", "meaning": "걱정", "reading": "しんぱい", "korean_pron": "심파이" },
      { "word": "幸せ", "meaning": "행복", "reading": "しあわせ", "korean_pron": "시아와세" },
      { "word": "逃げる", "meaning": "도망가다", "reading": "にげる", "korean_pron": "니게루" }
    ]
  },
  {
    "jp_original": "失敗してもいい。挑戦したことが宝物。",
    "jp_yomigana": "しっぱいしてもいい。ちょうせんしたことがたからもの。",
    "ko_meaning": "실패해도 괜찮아. 도전한 경험이 보물이다.",
    "kanji_notes": [
      { "word": "失敗", "meaning": "실패", "reading": "しっぱい", "korean_pron": "싯파이" },
      { "word": "挑戦", "meaning": "도전", "reading": "ちょうせん", "korean_pron": "쵸-센" },
      { "word": "宝物", "meaning": "보물", "reading": "たからもの", "korean_pron": "타카라모노" }
]
  },
  {
    "jp_original": "出会いは人生の宝だ。",
    "jp_yomigana": "であいはじんせいのたからだ。",
    "ko_meaning": "만남은 인생의 보물이다.",
    "kanji_notes": [
      { "word": "出会い", "meaning": "만남", "reading": "であい", "korean_pron": "데아이" },
      { "word": "人生", "meaning": "인생", "reading": "じんせい", "korean_pron": "진세이" },
      { "word": "宝", "meaning": "보물", "reading": "たから", "korean_pron": "타카라" }
    ]
  },
  {
    "jp_original": "明けない夜はない。",
    "jp_yomigana": "あけないよるはない。",
    "ko_meaning": "끝나지 않는 밤은 없다.",
    "kanji_notes": [
      { "word": "明ける", "meaning": "날이 밝다", "reading": "あける", "korean_pron": "아케루" },
      { "word": "夜", "meaning": "밤", "reading": "よる", "korean_pron": "요루" }
    ]
  },
  {
    "jp_original": "泣いた分だけ、強くなれる。",
    "jp_yomigana": "ないたぶんだけ、つよくなれる。",
    "ko_meaning": "운 만큼 더 강해질 수 있다.",
    "kanji_notes": [
      { "word": "泣く", "meaning": "울다", "reading": "なく", "korean_pron": "나쿠" },
      { "word": "強い", "meaning": "강하다", "reading": "つよい", "korean_pron": "츠요이" }
    ]
  },
  {
    "jp_original": "休むことも努力のうち。",
    "jp_yomigana": "やすむこともどりょくのうち。",
    "ko_meaning": "쉬는 것도 노력의 일부다.",
    "kanji_notes": [
      { "word": "休む", "meaning": "쉬다", "reading": "やすむ", "korean_pron": "야스무" },
      { "word": "努力", "meaning": "노력", "reading": "どりょく", "korean_pron": "도료쿠" },
      { "word": "うち", "meaning": "중, 일부", "reading": "うち", "korean_pron": "우치" }
    ]
  },
  {
    "jp_original": "大切なのは、続ける勇気。",
    "jp_yomigana": "たいせつなのは、つづけるゆうき。",
    "ko_meaning": "중요한 것은 계속할 용기다.",
    "kanji_notes": [
      { "word": "大切", "meaning": "소중함, 중요함", "reading": "たいせつ", "korean_pron": "타이세츠" },
      { "word": "続ける", "meaning": "계속하다", "reading": "つづける", "korean_pron": "츠즈케루" },
      { "word": "勇気", "meaning": "용기", "reading": "ゆうき", "korean_pron": "유-키" }
    ]
  },
  {
    "jp_original": "感謝は幸せを呼ぶ魔法。",
    "jp_yomigana": "かんしゃはしあわせをよぶまほう。",
    "ko_meaning": "감사는 행복을 부르는 마법이다.",
    "kanji_notes": [
      { "word": "感謝", "meaning": "감사", "reading": "かんしゃ", "korean_pron": "칸샤" },
      { "word": "幸せ", "meaning": "행복", "reading": "しあわせ", "korean_pron": "시아와세" },
      { "word": "呼ぶ", "meaning": "부르다", "reading": "よぶ", "korean_pron": "요부" },
      { "word": "魔法", "meaning": "마법", "reading": "まほう", "korean_pron": "마호-" }
    ]
  },
  {
    "jp_original": "言い訳は未来を止める。",
    "jp_yomigana": "いいわけはみらいをとめる。",
    "ko_meaning": "변명은 미래를 멈추게 한다.",
    "kanji_notes": [
      { "word": "言い訳", "meaning": "변명", "reading": "いいわけ", "korean_pron": "이이와케" },
      { "word": "未来", "meaning": "미래", "reading": "みらい", "korean_pron": "미라이" },
      { "word": "止める", "meaning": "멈추다", "reading": "とめる", "korean_pron": "토메루" }
    ]
  },
  {
    "jp_original": "夢は逃げない。逃げるのはいつも自分だ。",
    "jp_yomigana": "ゆめはにげない。にげるのはいつもじぶんだ。",
    "ko_meaning": "꿈은 도망가지 않는다. 도망가는 건 언제나 나다.",
    "kanji_notes": [
      { "word": "夢", "meaning": "꿈", "reading": "ゆめ", "korean_pron": "유메" },
      { "word": "逃げる", "meaning": "도망가다", "reading": "にげる", "korean_pron": "니게루" },
      { "word": "自分", "meaning": "자기 자신", "reading": "じぶん", "korean_pron": "지분" }
    ]
  },
  {
    "jp_original": "強さとは、優しさを失わないこと。",
    "jp_yomigana": "つよさとは、やさしさをうしなわないこと。",
    "ko_meaning": "강함이란, 다정함을 잃지 않는 것이다.",
    "kanji_notes": [
      { "word": "強さ", "meaning": "강함", "reading": "つよさ", "korean_pron": "츠요사" },
      { "word": "優しさ", "meaning": "상냥함", "reading": "やさしさ", "korean_pron": "야사시사" },
      { "word": "失う", "meaning": "잃다", "reading": "うしなう", "korean_pron": "우시나우" }
    ]
  },
  {
    "jp_original": "一度きりの今日を大切に。",
    "jp_yomigana": "いちどきりのきょうをたいせつに。",
    "ko_meaning": "단 한 번뿐인 오늘을 소중히 하자.",
    "kanji_notes": [
      { "word": "一度", "meaning": "한 번", "reading": "いちど", "korean_pron": "이치도" },
      { "word": "今日", "meaning": "오늘", "reading": "きょう", "korean_pron": "쿄-" },
      { "word": "大切", "meaning": "소중함", "reading": "たいせつ", "korean_pron": "타이세츠" }
    ]
  },
  {
    "jp_original": "未来はいつも自分の手の中にある。",
    "jp_yomigana": "みらいはいつもじぶんのてのなかにある。",
    "ko_meaning": "미래는 언제나 내 손 안에 있다.",
    "kanji_notes": [
      { "word": "未来", "meaning": "미래", "reading": "みらい", "korean_pron": "미라이" },
      { "word": "自分", "meaning": "자기 자신", "reading": "じぶん", "korean_pron": "지분" },
      { "word": "手", "meaning": "손", "reading": "て", "korean_pron": "테" },
      { "word": "中", "meaning": "안, 속", "reading": "なか", "korean_pron": "나카" }
    ]
  },
  {
    "jp_original": "自分を大事にできる人が、人も大事にできる。",
    "jp_yomigana": "じぶんをだいじにできるひとが、ひともだいじにできる。",
    "ko_meaning": "자신을 소중히 할 줄 아는 사람이 남도 소중히 할 수 있다.",
    "kanji_notes": [
      { "word": "自分", "meaning": "자기 자신", "reading": "じぶん", "korean_pron": "지분" },
      { "word": "大事", "meaning": "소중함, 중요함", "reading": "だいじ", "korean_pron": "다이지" },
      { "word": "人", "meaning": "사람", "reading": "ひと", "korean_pron": "히토" }
]
},
{
    "jp_original": "遠回りでも、自分の道を歩けばいい。",
    "jp_yomigana": "とおまわりでも、じぶんのみちをあるけばいい。",
    "ko_meaning": "돌아가더라도 내 길을 걸으면 된다.",
    "kanji_notes": [
      { "word": "遠回り", "meaning": "우회, 멀리 돌아감", "reading": "とおまわり", "korean_pron": "토-마와리" },
      { "word": "自分", "meaning": "자기 자신", "reading": "じぶん", "korean_pron": "지분" },
      { "word": "道", "meaning": "길", "reading": "みち", "korean_pron": "미치" },
      { "word": "歩く", "meaning": "걷다", "reading": "あるく", "korean_pron": "아루쿠" }
    ]
  },
  {
    "jp_original": "今日の一歩が、明日の自信になる。",
    "jp_yomigana": "きょうのいっぽが、あしたのじしんになる。",
    "ko_meaning": "오늘의 한 걸음이 내일의 자신감이 된다.",
    "kanji_notes": [
      { "word": "今日", "meaning": "오늘", "reading": "きょう", "korean_pron": "쿄-" },
      { "word": "一歩", "meaning": "한 걸음", "reading": "いっぽ", "korean_pron": "잇포" },
      { "word": "明日", "meaning": "내일", "reading": "あした", "korean_pron": "아시타" },
      { "word": "自信", "meaning": "자신감", "reading": "じしん", "korean_pron": "지신" }
    ]
  },
  {
    "jp_original": "失敗は終わりじゃない、学びの始まりだ。",
    "jp_yomigana": "しっぱいはおわりじゃない、まなびのはじまりだ。",
    "ko_meaning": "실패는 끝이 아니라 배움의 시작이다.",
    "kanji_notes": [
      { "word": "失敗", "meaning": "실패", "reading": "しっぱい", "korean_pron": "싯파이" },
      { "word": "終わり", "meaning": "끝", "reading": "おわり", "korean_pron": "오와리" },
      { "word": "学ぶ", "meaning": "배우다", "reading": "まなぶ", "korean_pron": "마나부" },
      { "word": "始まり", "meaning": "시작", "reading": "はじまり", "korean_pron": "하지마리" }
    ]
  },
  {
    "jp_original": "学ぶことは、自分を強くすることだ。",
    "jp_yomigana": "まなぶことは、じぶんをつよくすることだ。",
    "ko_meaning": "배운다는 것은 자신을 강하게 만드는 것이다.",
    "kanji_notes": [
      { "word": "学ぶ", "meaning": "배우다", "reading": "まなぶ", "korean_pron": "마나부" },
      { "word": "自分", "meaning": "자기 자신", "reading": "じぶん", "korean_pron": "지분" },
      { "word": "強い", "meaning": "강하다", "reading": "つよい", "korean_pron": "츠요이" }
    ]
  },
  {
    "jp_original": "小さな努力が、大きな未来を作る。",
    "jp_yomigana": "ちいさなどりょくが、おおきなみらいをつくる。",
    "ko_meaning": "작은 노력이 큰 미래를 만든다.",
    "kanji_notes": [
      { "word": "小さな", "meaning": "작은", "reading": "ちいさな", "korean_pron": "치이사나" },
      { "word": "努力", "meaning": "노력", "reading": "どりょく", "korean_pron": "도료쿠" },
      { "word": "未来", "meaning": "미래", "reading": "みらい", "korean_pron": "미라이" },
      { "word": "作る", "meaning": "만들다", "reading": "つくる", "korean_pron": "츠쿠루" }
    ]
  },
  {
    "jp_original": "迷ったときは、心が笑う方へ。",
    "jp_yomigana": "まよったときは、こころがわらうほうへ。",
    "ko_meaning": "망설일 때는 마음이 웃는 쪽으로 가라.",
    "kanji_notes": [
      { "word": "迷う", "meaning": "망설이다, 헤매다", "reading": "まよう", "korean_pron": "마요우" },
      { "word": "心", "meaning": "마음", "reading": "こころ", "korean_pron": "코코로" },
      { "word": "笑う", "meaning": "웃다", "reading": "わらう", "korean_pron": "와라우" },
]
  },
  {
    "jp_original": "夢は見るものじゃなく、叶えるものだ。",
    "jp_yomigana": "ゆめはみるものじゃなく、かなえるものだ。",
    "ko_meaning": "꿈은 꾸는 게 아니라 이루는 것이다.",
    "kanji_notes": [
      { "word": "夢", "meaning": "꿈", "reading": "ゆめ", "korean_pron": "유메" },
      { "word": "見る", "meaning": "보다", "reading": "みる", "korean_pron": "미루" },
      { "word": "叶える", "meaning": "이루다, 실현하다", "reading": "かなえる", "korean_pron": "카나에루" }
     ]
  },
  {
    "jp_original": "自分に優しくできる人は、強い人だ。",
    "jp_yomigana": "じぶんにやさしくできるひとは、つよいひとだ。",
    "ko_meaning": "자기 자신에게 다정할 수 있는 사람은 강한 사람이다.",
    "kanji_notes": [
      { "word": "自分", "meaning": "자기 자신", "reading": "じぶん", "korean_pron": "지분" },
      { "word": "優しい", "meaning": "다정하다, 친절하다", "reading": "やさしい", "korean_pron": "야사시이" },
      { "word": "人", "meaning": "사람", "reading": "ひと", "korean_pron": "히토" },
      { "word": "強い", "meaning": "강하다", "reading": "つよい", "korean_pron": "츠요이" }
    ]
  },
  {
    "jp_original": "一度きりの人生、後悔より挑戦。",
    "jp_yomigana": "いちどきりのじんせい、こうかいよりちょうせん。",
    "ko_meaning": "한 번뿐인 인생, 후회보다 도전.",
    "kanji_notes": [
      { "word": "一度", "meaning": "한 번", "reading": "いちど", "korean_pron": "이치도" },
      { "word": "人生", "meaning": "인생", "reading": "じんせい", "korean_pron": "진세이" },
      { "word": "後悔", "meaning": "후회", "reading": "こうかい", "korean_pron": "코-카이" },
      { "word": "挑戦", "meaning": "도전", "reading": "ちょうせん", "korean_pron": "쵸-센" }
    ]
  },
  {
"jp_original": "努力の先に、必ず答えがある。",
    "jp_yomigana": "どりょくのさきに、かならずこたえがある。",
    "ko_meaning": "노력의 끝에는 반드시 답이 있다.",
    "kanji_notes": [
      { "word": "努力", "meaning": "노력", "reading": "どりょく", "korean_pron": "도료쿠" },
      { "word": "先", "meaning": "앞, 끝, 미래", "reading": "さき", "korean_pron": "사키" },
      { "word": "必ず", "meaning": "반드시", "reading": "かならず", "korean_pron": "카나라즈" },
      { "word": "答え", "meaning": "답", "reading": "こたえ", "korean_pron": "코타에" }
    ]
  }
];