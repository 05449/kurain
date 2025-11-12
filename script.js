const quizData = [
    {
        question: "「一石二鳥」の意味は？",
        choices: { A: "一度で二つの利益を得る", B: "一度で一つの利益を得る", C: "鳥を二羽捕まえる", D: "石を二つ投げる" },
        correct: "A",
        explanation: "「一石二鳥」は「一つの行動で二つの成果を得る」という意味。"
    },
    {
        question: "「十人十色」の読み方は？",
        choices: { A: "じゅうにんといろ", B: "じゅうにんじゅうしょく", C: "じゅうにんとしょく", D: "じゅうにんとしょくう" },
        correct: "A",
        explanation: "「十人十色（じゅうにんといろ）」は「人それぞれ考えや好みが違う」という意味。"
    },
    {
        question: "「dog」の日本語訳は？",
        choices: { A: "ねこ", B: "いぬ", C: "とり", D: "うま" },
        correct: "B",
        explanation: "\"dog\"は「犬」という意味の英単語。"
    },
    {
        question: "数字「1000」は英語で？",
        choices: { A: "hundred", B: "thousand", C: "million", D: "billion" },
        correct: "B",
        explanation: "\"thousand\"は「千」を意味する英単語。"
    },
    {
        question: "「木」の英語は？",
        choices: { A: "tree", B: "flower", C: "grass", D: "wood" },
        correct: "A",
        explanation: "\"tree\"は「木」を意味する英単語。"
    },
    {
        question: "「花火」の英語は？",
        choices: { A: "fire", B: "light", C: "fireworks", D: "stars" },
        correct: "C",
        explanation: "\"fireworks\"は「花火」を意味する。"
    },
    {
        question: "「数字の3」をローマ数字で表すと？",
        choices: { A: "I", B: "II", C: "III", D: "IV" },
        correct: "C",
        explanation: "ローマ数字の「III」は3を表す。"
    },
    {
        question: "「一期一会」の意味は？",
        choices: { A: "一生に一度の出会い", B: "何度も会うこと", C: "偶然の再会", D: "一緒に学ぶこと" },
        correct: "A",
        explanation: "「一期一会」は「一生に一度の出会いを大切に」という教え。"
    },
    {
        question: "「apple」の意味は？",
        choices: { A: "バナナ", B: "みかん", C: "りんご", D: "もも" },
        correct: "C",
        explanation: "\"apple\"は「りんご」という意味。"
    },
    {
        question: "「百聞は一見にしかず」の意味は？",
        choices: { A: "聞くより見るほうが確か", B: "見るより聞くほうが確か", C: "百回聞けば理解できる", D: "見ないほうが良い" },
        correct: "A",
        explanation: "「百聞は一見にしかず」は「何度聞くより一度見たほうが理解できる」という意味。"
    },
    {
        question: "「2+5×3+2= ?」",
        choices: { A: "17", B: "14", C: "19", D: "23" },
        correct: "C",
        explanation: "「+よりも×の方が優先度が高いため×を計算してから+を計算するから19」"
    },
    {
        question: "「twelve」は数字でいくつ？",
        choices: { A: "10", B: "11", C: "12", D: "13" },
        correct: "C",
        explanation: "\"twelve\"は12を意味する。"
    },
    {
        question: "「四季」の正しい英訳は？",
        choices: { A: "four seasons", B: "four colors", C: "four months", D: "four years" },
        correct: "A",
        explanation: "\"four seasons\"は「四季」を意味する。"
    },
    {
        question: "「漢字『森』」の意味は？",
        choices: { A: "一本の木", B: "二本の木", C: "三本の木", D: "四本の木" },
        correct: "C",
        explanation: "「森」は「木が3本集まった形」から生まれた漢字。"
    },
    {
        question: "「二刀流」の意味は？",
        choices: { A: "二本の刀を持つこと", B: "刀を2回振ること", C: "2人で戦うこと", D: "刀を貸すこと" },
        correct: "A",
        explanation: "「二刀流」は「2本の刀を使う」意味だが比喩的に「二つの分野で活躍する人」にも使う。"
    },
    {
        question: "「philosophy」の意味は？",
        choices: { A: "物理学", B: "心理学", C: "哲学", D: "地理学" },
        correct: "C",
        explanation: "\"philosophy\"は「哲学」という意味。"
    },
    {
        question: "「千載一遇」の意味は？",
        choices: { A: "千年に一度のチャンス", B: "毎日のこと", C: "よくあること", D: "二度とない失敗" },
        correct: "A",
        explanation: "「千載一遇」は「千年に一度しかないような貴重な機会」という意味。"
    },
    {
        question: "「superior」の反対語は？",
        choices: { A: "junior", B: "inferior", C: "outer", D: "lower" },
        correct: "B",
        explanation: "\"superior（優れている）」の反対は「inferior（劣っている）」という意味。"
    },
    {
        question: "「阿吽（あうん）」の意味は？",
        choices: { A: "息の合った様子", B: "喧嘩している様子", C: "無関係な様子", D: "黙っている様子" },
        correct: "A",
        explanation: "「阿吽」は「互いに気持ちや呼吸がぴったり合うこと」。"
    },
    {
        question: "「quintessential」の意味は？",
        choices: { A: "代表的な", B: "不足している", C: "偶然の", D: "高価な" },
        correct: "A",
        explanation: "\"quintessential\"は「典型的な・本質的な」という意味。"
    }
];

const titleScreen = document.getElementById('title-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const retryButton = document.getElementById('retry-button');

const questionElement = document.getElementById('question');
const choicesContainer = document.getElementById('choices');
const feedbackContainer = document.getElementById('feedback');
const resultElement = document.getElementById('result');
const explanationElement = document.getElementById('explanation');

const scoreElement = document.getElementById('score');
const rankingListElement = document.getElementById('ranking-list');

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuizData = [];

function switchScreen(hide, show) {
    hide.classList.remove('active');
    show.classList.add('active');
}

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    shuffledQuizData = [...quizData].sort(() => Math.random() - 0.5);
    switchScreen(titleScreen, quizScreen);
    showQuestion();
}

function showQuestion() {
    feedbackContainer.style.display = 'none';
    choicesContainer.style.pointerEvents = 'auto';

    const questionData = shuffledQuizData[currentQuestionIndex];
    questionElement.textContent = questionData.question;
    
    choicesContainer.innerHTML = '';
    for (const [key, value] of Object.entries(questionData.choices)) {
        const button = document.createElement('button');
        button.classList.add('choice');
        button.dataset.choice = key;
        button.textContent = value;
        button.addEventListener('click', selectChoice);
        choicesContainer.appendChild(button);
    }
}

function selectChoice(e) {
    const selectedChoice = e.target.dataset.choice;
    const correctChoice = shuffledQuizData[currentQuestionIndex].correct;

    if (selectedChoice === correctChoice) {
        resultElement.textContent = "正解！";
        score++;
    } else {
        resultElement.textContent = "不正解...";
    }
    
    explanationElement.textContent = shuffledQuizData[currentQuestionIndex].explanation;
    feedbackContainer.style.display = 'block';
    choicesContainer.style.pointerEvents = 'none';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    scoreElement.textContent = score;
    updateRanking(score);
    switchScreen(quizScreen, resultScreen);
}

function updateRanking(newScore) {
    const rankings = JSON.parse(localStorage.getItem('quizRankings')) || [];
    rankings.push(newScore);
    rankings.sort((a, b) => b - a);
    const top10 = rankings.slice(0, 10);
    localStorage.setItem('quizRankings', JSON.stringify(top10));

    rankingListElement.innerHTML = '';
    top10.forEach(rank => {
        const li = document.createElement('li');
        li.textContent = `${rank}点`;
        rankingListElement.appendChild(li);
    });
}

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', nextQuestion);
retryButton.addEventListener('click', () => switchScreen(resultScreen, titleScreen));

// 初期表示時にランキングを読み込む
updateRanking(-1); // -1を渡して現在のランキングを表示するだけ
const rankings = JSON.parse(localStorage.getItem('quizRankings')) || [];
rankings.pop(); // -1を削除
localStorage.setItem('quizRankings', JSON.stringify(rankings));
updateRanking(score);
