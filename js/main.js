"use strict";

const opening = document.getElementById("opening");
const openingImg = document.getElementById("opening-img");
const openingText = document.getElementById("opening-text");
const selectPage = document.getElementById("select-page");
document.getElementById("main-content").style.display = "none";

const smailePink = document.getElementById("smile-pink");
const smaileYellow = document.getElementById("smile-yellow");
const smaileGreen = document.getElementById("smile-green");
const smaileBlue = document.getElementById("smile-blue");
const quoteDisplay = document.getElementById("quote-display");
const body = document.body;

// 現在のテーマを管理 デフォルトは normal
let currentTheme = "normal";

gsap.set(openingText, { autoAlpha: 0, y: 60 }); // テキストを非表示に/下に配置
gsap.set(openingImg, { autoAlpha: 0 });

// ページ読み込み完了時にアニメーションを開始させる
window.addEventListener("load", () => {
  const openingMove = gsap.timeline();

  openingMove
    .to(openingImg, {
      autoAlpha: 1,
      duration: 1.2,
      ease: "power2.inOut",
    })
    .to(
      openingText,
      {
        y: 10,
        duration: 1.2,
        ease: "power2.inOut",
      },
      "+=0.33"
    )
    .to(
      openingText,
      {
        autoAlpha: 1,
        duration: 1.1,
        ease: "power2.inOut",
      },
      "-=1.33"
    )
    .to(opening, { display: "none", duration: 1.2 })
    .set("#main-content", { display: "block" });
});

// メッセージのpタグを取得
const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");
const message3 = document.getElementById("message3");
const message4 = document.getElementById("message4");

// ページロード時にデフォルトのメッセージを設定
window.addEventListener("load", () => {
  document.body.style.backgroundColor = "#fffde7";

  message1.textContent = "やる気を出したい";
  message2.textContent = "自分を信じたい";
  message3.textContent = "落ち込んでいる";
  message4.textContent = "気づきがほしい";
});

const normalQuotes = {
  やる気を出したい: [
    {
      text: "困難を予期するな。決して起こらないかも知れぬことに心を悩ますな。常に心に太陽を持て。",
      author:
        "ベンジャミン・フランクリン（米国の政治家、外交官、著述家、物理学者、気象学者）",
    },
    {
      text: "いいかい、怖かったら怖いほど、逆にそこに飛び込むんだ。",
      author: "岡本太郎（日本の芸術家）",
    },
    {
      text: "何でも思い切ってやってみることですよ。どっちに転んだって人間、野辺の石ころ同様、骨となって一生を終えるのだから。",
      author: "坂本龍馬（幕末の志士、土佐藩郷士）",
    },
    {
      text: "ビジネスで成功する一番の方法は、人からいくら取れるかをいつも考えるのではなく、人にどれだけのことをしてあげられるかを考えることである。",
      author: "デール・カーネギー（米国の実業家、作家、ビジネスセミナー講師）",
    },
    {
      text: "進まざる者は必ず退き、退かざる者は必ず進む。",
      author:
        "福沢諭吉（江戸時代末期から明治初期の中津藩士、啓蒙思想家、教育者）",
    },
    {
      text: "つらい道を避けないこと。自分の目指す場所にたどりつくためには進まなければ。",
      author: "キャサリン・アン・ポーター（米国の小説家）",
    },
    {
      text: "目標を達成するには、全力で取り組む以外に方法はない。そこに近道はない。",
      author: "マイケル・ジョーダン（米国のバスケットボール選手）",
    },
  ],
  自分を信じたい: [
    {
      text: "生きるということは、死ぬ日まで自分の可能性をあきらめず、与えられた才能や日々の仕事に努力しつづけることです。",
      author: "瀬戸内寂聴（日本の小説家、天台宗の尼僧）",
    },
    {
      text: "壁というのは、できる人にしかやってこない。超えられる可能性がある人にしかやってこない。だから、壁がある時はチャンスだと思っている。",
      author: "イチロー（日本のプロ野球選手）",
    },
    {
      text: "人を信じよ、しかし、その百倍も自らを信じよ。",
      author: "手塚治虫（日本の漫画家、アニメーター、医学博士）",
    },
    {
      text: "心配事の９８％は、取り越し苦労だ。",
      author: "藤村正宏（日本のマーケティングコンサルタント）",
    },
    {
      text: "あせってはいけません。ただ、牛のように、図々しく進んで行くのが大事です。",
      author: "夏目漱石（日本の小説家、評論家、英文学者）",
    },
    {
      text: "失敗すればやり直せばいい。やり直してダメなら、もう一度工夫し、もう一度やり直せばいい。",
      author: "松下幸之助（日本の実業家、発明家、パナソニック創業者）",
    },
    {
      text: "しあわせはいつも じぶんのこころがきめる",
      author: "相田みつを（日本の詩人、書家）",
    },
  ],
  落ち込んでいる: [
    {
      text: "私は失敗したことがない。ただ、1万通りの、うまく行かない方法を見つけただけだ。",
      author: "トーマス・エジソン（米国の発明家、起業家）",
    },
    {
      text: "どんなに勉強し、勤勉であっても、上手くいかないこともある。これは機がまだ熟していないからであるから、ますます自らを鼓舞して耐えなければならない。",
      author: "渋沢栄一（日本の武士、官僚、実業家、日本資本主義の父）",
    },
    {
      text: "成果が出ないときこそ、不安がらずに、恐れずに、迷わずに一歩一歩進めるかどうかが、成長の分岐点であると考えています。",
      author: "羽生善治（日本の将棋棋士、十九世名人）",
    },
    {
      text: "どうして自分を責めるんですか？他人がちゃんと必要な時に責めてくれるんだからいいじゃないですか。",
      author: "アインシュタイン（理論物理学者）",
    },
    {
      text: "人は何度やりそこなっても、「もういっぺん」の勇気を失わなければ、かならずものになる。",
      author: "松下幸之助（日本の実業家、発明家、パナソニック創業者）",
    },
    {
      text: "ただ、勘違いしちゃいけないのは、下に落ちるっていうことが、進化してないということではないんですよ。下に落ちるのも、次に昇るための変化かもしれない。昇るために、落ちることが必要なこともある。",
      author: "本田圭佑（日本のプロサッカー選手）",
    },
    {
      text: "失敗したからって何なのだ？失敗から学びを得て、また挑戦すればいいじゃないか。",
      author: "ウォルト・ディズニー（米国のエンターテイナー、実業家）",
    },
  ],
  気づきがほしい: [
    {
      text: "心で見なくちゃ、ものごとはよく見えないってことさ。かんじんなことは、目に見えないんだよ。",
      author: "サン＝テグジュペリ（フランスの作家、操縦士）",
    },
    {
      text: "運がいい人も、運が悪い人もいない。運がいいと思う人と、運が悪いと思う人がいるだけだ。",
      author: "中谷彰宏（日本の作家、俳優）",
    },
    {
      text: "人生に失敗がないと、人生を失敗する。",
      author: "斎藤茂太（日本の精神科医、随筆家）",
    },
    {
      text: "明日死ぬかのように生きよ。永遠に生きるかのように学べ。",
      author: "ガンジー",
    },
    {
      text: "心配事の９８％は、取り越し苦労だ。",
      author: "藤村正宏（日本のマーケティングコンサルタント）",
    },
    {
      text: "虹を見たければ、ちょっとやそっとの雨は我慢しなくちゃ。",
      author: "ドリー・パートン（米国のシンガーソングライター、女優）",
    },
    {
      text: "最も重要な決定とは、何をするかではなく、何をしないかを決めることだ。",
      author: "スティーブ・ジョブズ（米国の実業家、アップル創業者）",
    },
    {
      text: "努力は必ず報われる。もし報われない努力があるのならば、それはまだ努力と呼べない。",
      author: "王貞治（日本の元プロ野球選手、監督）",
    },
    {
      text: "しがみつくことで強くなれると考える者もいる。しかし時には手放すことで強くなれるのだ。",
      author: "ヘルマン・ヘッセ（ドイツの小説家、詩人）",
    },
  ],
};

const loveQuotes = {
  愛について: [
    {
      text: "人生で辛いのは、失って初めて大切な人だったと気づかされることだ",
      author: "倉橋奈緒子（マンガ『冬物語』より）",
    },
    {
      text: "尊敬ということがなければ真の恋愛は成立しない",
      author: "ヨハン・ゴットリープ・フィヒテ（ドイツの哲学者）",
    },
    {
      text: "真の愛にハッピーエンドはない。なぜなら真の愛に終わりはないからだ",
      author: "アレクサンドロス3世（古代ギリシャの王）",
    },
    {
      text: "愛を裏切ることよりも、愛に気付かぬほうが、もっと罪深い",
      author:
        "オスカル・フランソワ・ド・ジャルジェ（マンガ『ベルサイユのばら』より）",
    },
    {
      text: "愛は最高の奉仕だ。みじんも、自分の満足を思ってはいけない",
      author: "太宰治（小説家）",
    },
    {
      text: "愛情には1つの法則しかない。それは愛する人を幸福にすることだ",
      author: "スタンダール（フランスの作家）",
    },
    {
      text: "愛はお互いを見つめ合うことではなく、ともに同じ方向を見つめることである",
      author: "サン・テグジュペリ（作家）",
    },
    {
      text: "愛は幸運の財布である。与えれば与えるほど、中身が増す",
      author: "ミュラー（ドイツの詩人）",
    },
    {
      text: "愛とは信頼。人を愛するときは完全に信じることよ。",
      author: "マリリン・モンロー（米国の女優）",
    },
  ],
  恋について: [
    {
      text: "恋は決闘です。もし右を見たり左を見たりしていたら敗北です。",
      author: "ロマン・ロラン（フランスの作家）",
    },
    {
      text: "うまくいくかどうかに関係なくあなたは恋に落ちるべきです。そうすればあなたはより良い人になるでしょう。",
      author: "サンドラ・ブロック（アメリカの女優）",
    },
    {
      text: "恋の悲しみを知らぬものに恋の味は話せない",
      author: "伊藤左千夫（歌人）",
    },
    {
      text: "恋を得たことのない人は不幸である。それにもまして、恋を失ったことのない人はもっと不幸である。",
      author: "瀬戸内寂聴（作家・尼僧）",
    },
    {
      text: "私たちは完璧な愛を創る代わりに、完璧な恋人を探そうとして時を無駄にしている。",
      author: "トム・ロビンズ（米国の小説家）",
    },
    {
      text: "愛情に年齢の壁はないわ。お互いに愛し合っていれば、その人が何歳だろうと私には関係ないの。",
      author: "マリリン・モンロー（米国の女優）",
    },
    {
      text: "恋とは自分本位なもの、愛とは相手本位なもの。",
      author: "美輪明宏（日本のシンガーソングライター、俳優、演出家）",
    },
  ],
  女性向き: [
    {
      text: "その日、ひょっとしたら、運命の人と出会えるかもしれないじゃない。その運命のためにも、できるだけかわいくあるべきだわ。",
      author: "ココ・シャネル（フランスのファッションデザイナー）",
    },
    {
      text: "恋愛はチェスみたいなもの。どの男をどう動かすべきか心得てないと",
      author: "マムズ・マブリー（米国の女性コメディアン)",
    },
    {
      text: "男がもっとも情を込めて愛している女は必ずしも一番愛したいと思っている女ではない。",
      author: "アンリ・ド・レニエ（フランスの詩人、作家）",
    },
    {
      text: "女には本当に損な時がある。男に良くしてやって愛していることを見せれば見せるほど、それだけ早く、男は飽きてしまうのだから。",
      author: "ヘミングウェイ（米国の小説家）",
    },
    {
      text: "男は自分が幸福にしてやれる女しか愛さない。",
      author: "マルセル・アシャール（フランスの劇作家・映画監督）",
    },
    {
      text: "男がほんとうに女に贈り物をしたいと思ったら結婚するものだ。",
      author: "ココ・シャネル（フランスのファッションデザイナー）",
    },
    {
      text: "自分は愛されている、と思っている女はいつも魅力があるものだ。",
      author: "伊藤整（日本の小説家、文芸評論家、詩人）",
    },
    {
      text: "彼と幸せでいたいのなら、彼を深く理解し、少しだけ愛すこと。彼女と幸せでいたいなら、彼女を深く愛し、彼女を理解しようとしないこと。",
      author: "ヘレン・ローランド（米国の女性ジャーナリスト、ユーモア作家）",
    },
  ],
  男性向き: [
    {
      text: "多くの女性を愛した人間よりも、たった一人の女性だけを愛した人間のほうが、はるかに深く女というものを知っている。",
      author: "マリリン・モンロー（べい）",
    },
    {
      text: "若い人に魅力がないと言いたいわけじゃないけれど、男の人ってワインに似ているわ。寝かせれば寝かせるほどコクが出てくるの。",
      author: "アルベルト・シュバイツァー",
    },
    {
      text: "男は女の最初の恋人になりたがるが、女は男の最後の恋人になりたがる。",
      author: "オスカー・ワイルド（アイルランドの詩人、作家、劇作家）",
    },
    {
      text: "女とゾウは、忘れない生き物なのよ。",
      author: "ドロシー・パーカー（米国の女性短編作家、風刺詩人）",
    },
    {
      text: "すべてを知りつくしたなんて決して思わないことよ。",
      author: "ユードラ・ウェルティ（米国の女性作家）",
    },
    {
      text: "真の恋の兆候は、男においては臆病さに、女は大胆さにある。",
      author: "ヴィクトル・ユーゴー（フランスのロマン主義の詩人、小説家）",
    },
    {
      text: "女の愛というものは、見たり、触ったりすることによって燃やし続けていなければ、どれほども続かないのである。",
      author: "ダンテ（イタリアの詩人、哲学者、政治家）",
    },
    {
      text: "彼と幸せでいたいのなら、彼を深く理解し、少しだけ愛すこと。彼女と幸せでいたいなら、彼女を深く愛し、彼女を理解しようとしないこと。",
      author: "ヘレン・ローランド（米国の女性ジャーナリスト、ユーモア作家）",
    },
  ],
};

const smileMap = () => {
  if (currentTheme === "love") {
    return {
      "smile-pink": { category: "愛について", messages: quoteDisplay },
      "smile-yellow": { category: "恋について", messages: quoteDisplay },
      "smile-green": { category: "女性向き", messages: quoteDisplay },
      "smile-blue": { category: "男性向き", messages: quoteDisplay },
    };
  } else {
    return {
      "smile-pink": { category: "やる気を出したい", messages: quoteDisplay },
      "smile-yellow": { category: "自分を信じたい", messages: quoteDisplay },
      "smile-green": { category: "落ち込んでいる", messages: quoteDisplay },
      "smile-blue": { category: "気づきがほしい", messages: quoteDisplay },
    };
  }
};

// 各ボタンと紐づけて名言を表示するための関数
function showRandomQuote() {
  const map = smileMap();
  Object.keys(map).forEach((smileId) => {
    const smileElement = document.getElementById(smileId);
    const { category } = map[smileId];

    const mainContent = document.getElementById("main-content");

    smileElement.addEventListener("click", () => {
      mainContent.style.display = "none";
      mainContent.classList.add("hidden");

      const existing = document.getElementById("dynamic-quote-display");
      if (existing) existing.remove();

      // quote-display用のdiv作成
      const quoteDisplayDiv = document.createElement("div");
      quoteDisplayDiv.id = "dynamic-quote-display";
      quoteDisplayDiv.className =
        "px-4 h-dvh w-full max-w-[880px] absolute top-1/2 -translate-y-[5%] left-1/2 と -translate-x-[50%] text-center";

      // 名言テキスト
      const quoteText = document.createElement("span");
      quoteText.id = "quote-text";
      if (currentTheme === "love") {
        quoteText.style.textDecoration = "underline";
        quoteText.style.textDecorationColor = "#ffc0cb";
      } else {
        quoteText.style.textDecoration = "underline";
        quoteText.style.textDecorationColor = "#ffd700";
      }
      quoteText.style.boxDecorationBreak = "clone";
      quoteText.className = "md:text-lg lg:text-3xl text-left";
      quoteText.style.padding = "0.3em";
      quoteText.style.display = "inline-block";
      quoteText.style.textAlign = "left";
      quoteText.style.lineHeight = "1.6";

      // 著者テキスト
      const quoteAuthor = document.createElement("p");
      quoteAuthor.className = "md:text-lg lg:text-3xl md:mt-6";
      quoteAuthor.id = "quote-author";

      // 戻るボタン
      const backButton = document.createElement("button");
      backButton.id = "back-button";
      backButton.className =
        "text-2xl w-20 md:w-24 mt-16 mr-0 ml-auto block rounded-full border-1 border-solid";
      backButton.textContent = "\u21E6";

      // 要素を追加
      quoteDisplayDiv.appendChild(quoteText);
      quoteDisplayDiv.appendChild(quoteAuthor);
      quoteDisplayDiv.appendChild(backButton);
      document.body.appendChild(quoteDisplayDiv);

      // ランダムに名言を選ぶ
      const quoteList =
        currentTheme === "normal"
          ? normalQuotes[category]
          : loveQuotes[category];

      if (!quoteList || quoteList.length === 0) return;

      const randomIndex = Math.floor(Math.random() * quoteList.length);
      const selected = quoteList[randomIndex];

      // 内容をセットする
      quoteText.innerHTML = `<span style="color: #666;">「${selected.text}」</span>`;
      quoteAuthor.innerHTML = `<span style="font-size: 0.9em;text-align: right; display: block; margin-top: 16px;">— ${selected.author}</span>`;
      quoteAuthor.style.opacity = 0;
      backButton.style.opacity = 0;

      // 初期状態で名言を左に隠す＆透明にする
      gsap.set(quoteText, {
        y: "-100%",
        opacity: 0,
      });

      // 左からスライドして表示
      gsap.to(quoteText, {
        y: "0%",
        opacity: 1,
        duration: 2.5,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(quoteAuthor, {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          });

          gsap.to(backButton, {
            opacity: 1,
            duration: 1.7,
            ease: "power2.out",
            delay: 0.5,
          });
        },
      });

      // 戻るボタンで元に戻す
      backButton.addEventListener("click", () => {
        quoteDisplayDiv.remove();
        mainContent.style.display = "block";
        mainContent.classList.remove("hidden");
      });
    });
  });
}

const themeToggle = document.getElementById("theme-toggle");

// チェックボックスが変更されたときにテーマを切り替える
themeToggle.addEventListener("change", function () {
  if (this.checked) {
    // ラブテーマを適用
    document.body.style.backgroundColor = "#fff5f5";
    currentTheme = "love";
    // メッセージを変更
    message1.textContent = "愛について";
    message2.textContent = "恋について";
    message3.textContent = "女性向き";
    message4.textContent = "男性向き";
    document.getElementById("smile-01").src = "img/love01.png";
    document.getElementById("smile-02").src = "img/love02.png";
    document.getElementById("smile-03").src = "img/love03.png";
    document.getElementById("smile-04").src = "img/love04.png";
  } else {
    // ノーマルテーマに戻す
    document.body.style.backgroundColor = "#fffde7";
    currentTheme = "normal";

    // メッセージを元に戻す
    message1.textContent = "やる気を出したい";
    message2.textContent = "自分を信じたい";
    message3.textContent = "落ち込んでいる";
    message4.textContent = "気づきがほしい";
    document.getElementById("smile-01").src = "img/smile01.png";
    document.getElementById("smile-02").src = "img/smile02.png";
    document.getElementById("smile-03").src = "img/smile03.png";
    document.getElementById("smile-04").src = "img/smile04.png";
  }
  showRandomQuote();
});
