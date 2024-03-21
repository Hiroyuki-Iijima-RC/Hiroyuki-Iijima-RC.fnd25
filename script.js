'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let randomArith;        //四則演算記号乱数格納用変数
let randomChoice;       //３択ボタン乱数格納用変数
let numX;               //値その１
let arith;              //四則演算記号
let numY;               //値その２
let answer;             //四則演算の答え
let tempNum;            //numXとnumYの値を入れ替える為の
let time = 3;           //開始前の３カウント用
let limit = 15;         //制限時間の１５カウント用
let question = 0;       //何問目かをカウントする
let correct = 0;        //正解数をカウントする
let arithAdjustLower;   //難易度による四則演算記号の乱数調整をする
let arithAdjustUpper;   //難易度による四則演算記号の乱数調整をする
let lowerLimit;         //乱数の下限値
let upperLimit;         //乱数の上限値
let questionObject = [];//計算式・回答・合否を格納する配列
let countDownTimer;     //setInterval用の変数
let implement = false;  //テスト中かどうかの判断

// 画面表示コメントの要素取得
const comment = document.getElementById("comment");
const numberX = document.getElementById("numberX");
const arithmetic = document.getElementById("arithmetic");
const numberY = document.getElementById("numberY");
const timemessage = document.getElementById("timemessage");
const timercount = document.getElementById("timercount");

// 3択ボタンの要素取得
const choiceOne = document.getElementById("choiceOne");
const choiceTwo = document.getElementById("choiceTwo");
const choiceThree = document.getElementById("choiceThree");

// あそびかた・スタート・リトライ・戻るボタンの要素取得
const moveRulesButton = document.getElementById("moveRulesButton");
const startButton = document.getElementById("startButton");
const retryButton = document.getElementById("retryButton");
const backButton = document.getElementById("backButton");

// 結果表示用テーブルの要素を取得
const table = document.getElementById("table");

// 難易度選択の要素を取得
const difficulty = document.getElementById("difficulty");

// イベントリスナー設定
// スタートボタンを押したとき
startButton.addEventListener("click", start);

// 選択肢１ボタンを押したとき
choiceOne.addEventListener("click", () => judge("1"));
// 選択肢２ボタンを押したとき
choiceTwo.addEventListener("click", () => judge("2"));
// 選択肢３ボタンを押したとき
choiceThree.addEventListener("click", () => judge("3"));


// スタートボタンが押されたときに実行
function start() {
  // 難易度確認
  if (difficulty.value === "easy") {
    // 四則演算記号：「+」「-」
    // 数字の範囲：１～９
    arithAdjustLower = 1;
    arithAdjustUpper = 2;
    lowerLimit = 1;
    upperLimit = 10 - lowerLimit;
  } else if (difficulty.value === "normal") {
    // 四則演算記号：「+」「-」「×」
    // 数字の範囲：５～１９
    arithAdjustLower = 1;
    arithAdjustUpper = 3;
    lowerLimit = 5;
    upperLimit = 20 - lowerLimit;
  } else if (difficulty.value === "hard") {
    // 四則演算記号：「+」「-」「×」「÷」
    // 数字の範囲：１５～３９
    arithAdjustLower = 1;
    arithAdjustUpper = 4;
    lowerLimit = 15;
    upperLimit = 40 - lowerLimit;
  } else if (difficulty.value === "nightmare") {
    // 四則演算記号：「×」「÷」
    // 数字の範囲：５０～９９
    arithAdjustLower = 3;
    arithAdjustUpper = 2;
    lowerLimit = 50;
    upperLimit = 100 - lowerLimit;
  }

  comment.innerText = `難易度：${difficulty.value}`;
  arithmetic.innerText = time;
  arithmetic.style.visibility = "visible";
  moveRulesButton.style.visibility = "hidden";
  startButton.style.visibility = "hidden";
  backButton.style.visibility = "hidden";
  difficulty.style.visibility = "hidden";
  countDownTimer = setInterval(countDown, 1000);
}

// ３カウント→１５カウント処理
function countDown() {
  if (time === 1 && implement === false) {  // 3カウントダウン後、テスト開始時に動く

    // テスト中のフラグ
    implement = true;

    // テストで使う要素を表示
    choiceOne.style.visibility = "visible";
    choiceTwo.style.visibility = "visible";
    choiceThree.style.visibility = "visible";
    numberX.style.visibility = "visible";
    numberY.style.visibility = "visible";
    timemessage.style.visibility = "visible";
    timercount.innerText = limit;
    timercount.style.visibility = "visible";

    // 計算式を生成
    decideArithmetic();

  } else if (limit === 1 && implement === true) {  // テスト終了時に動く

    // countDownTimerを停止する
    clearInterval(countDownTimer);
    timercount.innerText = 0;

    // 結果を画面中央に表示する
    comment.innerText = `${question}問中 ${correct}問正解！\nお疲れ様でした！`;

    // テストで使っていた要素を非表示にする
    numberX.style.visibility = "hidden";
    arithmetic.style.visibility = "hidden";
    numberY.style.visibility = "hidden";
    choiceOne.style.visibility = "hidden";
    choiceTwo.style.visibility = "hidden";
    choiceThree.style.visibility = "hidden";

    // もう一回ボタンと戻るボタンを表示する
    retryButton.style.visibility = "visible";
    backButton.style.visibility = "visible";

  } else if (implement === false) {   // 最初の３カウントダウン
    time--;
    arithmetic.innerText = time;
  } else if (implement === true) {    // １５カウントダウン
    limit--;
    timercount.innerText = limit;
  }
}

// 計算式作成
function decideArithmetic() {

  // 計算式を格納する空配列を作成
  const decideResult = [];

  // 四則演算記号を乱数を使って決める
  randomArith = Math.floor(Math.random() * arithAdjustUpper + arithAdjustLower);   

  if (randomArith === 1) {
    arith = "+";
  } else if (randomArith === 2) {
    arith = "-";
  } else if (randomArith === 3) {
    arith = "×";
  } else if (randomArith === 4) {
    arith = "÷";
  }

  // １～９までの乱数を変数に格納
  numY = Math.floor(Math.random() * upperLimit + lowerLimit);

  // 割り算の時に割り切れる数になるようにする
  if (arith === "÷") {
    numX = numY * Math.floor(Math.random() * upperLimit + lowerLimit);
  } else {
    numX = Math.floor(Math.random() * upperLimit + lowerLimit);
  }

  // 引き算の時に計算結果がマイナスにならないようにする
  if (numX < numY && arith === "-") {
    tempNum = numY;
    numY = numX;
    numX = tempNum;
  }

  // 四則演算記号に沿った計算を行う
  if (arith === "+") {
    answer = numX + numY;
  } else if (arith === "-") {
    answer = numX - numY;
  } else if (arith === "×") {
    answer = numX * numY;
  } else if (arith === "÷") {
    answer = numX / numY;
  }

  // 計算式の値と四則演算記号を配列に格納する
  // decideResult.push(question);
  decideResult.push(numX);
  decideResult.push(arith);
  decideResult.push(numY);


  //３択ボタンの配置をどうするか乱数（１～３）で決める
  randomChoice = Math.floor(Math.random() * 3 + 1);

  if (randomChoice === 1) {
    //乱数が１のとき、選択肢１に正解を、選択肢２・３に誤答を入れる
    choiceOne.innerText = answer;
    choiceTwo.innerText = answer + 1;
    choiceThree.innerText = answer + 2;
    decideResult.push(answer);
    decideResult.push(answer + 1);
    decideResult.push(answer + 2);
    decideResult.push("1");
  } else if (randomChoice === 2) {
    //乱数が２のとき、選択肢２に正解を、選択肢１・３に誤答を入れる
    choiceOne.innerText = answer - 1;
    choiceTwo.innerText = answer;
    choiceThree.innerText = answer + 1;
    decideResult.push(answer - 1);
    decideResult.push(answer);
    decideResult.push(answer + 1);
    decideResult.push("2");    
  } else if (randomChoice === 3) {
    //乱数が３のとき、選択肢３に正解を、選択肢１・２に誤答を入れる    
    choiceOne.innerText = answer - 2;
    choiceTwo.innerText = answer - 1;
    choiceThree.innerText = answer;
    decideResult.push(answer - 2);
    decideResult.push(answer - 1);
    decideResult.push(answer);
    decideResult.push("3");  
  }

  // HTML上で計算式を表示
  numberX.innerText = numX;
  arithmetic.innerText = arith;
  numberY.innerText = numY;
  
  // 計算式と解答の配列を格納する
  questionObject.push(decideResult);

  return decideResult;
}


function judge(calcJudge) {
  // 選択したボタンが回答の選択肢と同じ場合は「○」を格納
  if (questionObject[question][6] === calcJudge) {
    questionObject[question].push("○");
    correct++;
  } else {
    questionObject[question].push("×");
  }

  // テーブルの要素を追加
  let tr = document.createElement("tr");

  // td要素を作成して計算式を書き込む
  let td1 = document.createElement("td");
  td1.innerText = questionObject[question][0] + questionObject[question][1] + questionObject[question][2];
  // console.log(td1);
  tr.appendChild(td1);

  // td要素を作成して選択したボタンに表示されていた値を書き込む
  let td2 = document.createElement("td");

  if (calcJudge === "1") {
    td2.innerText = questionObject[question][3];
  } else if (calcJudge === "2") {
    td2.innerText = questionObject[question][4];
  } else if (calcJudge === "3") {
    td2.innerText = questionObject[question][5];
  }

  tr.appendChild(td2);

  // td要素を作成して、この関数内で追加した「○」または「×」を書き込む
  let td3 = document.createElement("td");
  td3.innerText = questionObject[question][7];
  tr.appendChild(td3);  

  // テーブルに追加したtd要素を書き込む
  table.appendChild(tr);

  // 問題数のカウントを１増やす
  question++;

  // 再度、計算式の生成を行なう
  decideArithmetic();  
}
