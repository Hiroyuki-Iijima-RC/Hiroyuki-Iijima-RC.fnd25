'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let randomNunber, x, arith, y, answer, tempNumber;
let time = 3;
let question = 0;
let questionObject = [];
let countDownTimer;
let implement = false;

// 画面表示コメントの要素取得
const comment = document.getElementById("comment");
const numberX = document.getElementById("numberX");
const arithmetic = document.getElementById("arithmetic");
const numberY = document.getElementById("numberY");
const timemessage = document.getElementById("timemessage");
const timercount = document.getElementById("timercount");

// 3択ボタンの要素取得
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");

// スタート・リトライ・戻るボタンの要素取得
const startButton = document.getElementById("startButton");
const retryButton = document.getElementById("retryButton");
const backButton = document.getElementById("backButton");

const table = document.getElementById("table");


startButton.addEventListener("click", start);
choice1.addEventListener("click", calcJudge1);
choice2.addEventListener("click", calcJudge2);
choice3.addEventListener("click", calcJudge3);
  
// スタートボタンが押されたときに実行
function start() {
  // console.log(time);
  comment.innerText = "";
  arithmetic.innerText = time;
  arithmetic.style.visibility = "visible";
  startButton.style.visibility = "hidden";
  backButton.style.visibility = "hidden";
  countDownTimer = setInterval(countDown, 1000);
}

// 3カウント→10カウント処理
function countDown() {
  if (time === 1 && implement === false) {  // 3カウントダウン後、テスト開始時に動く
    // clearInterval(countDown);

    implement = true;
    time = 10;
    // startButton.style.visibility = "visible";
    choice1.style.visibility = "visible";
    choice2.style.visibility = "visible";
    choice3.style.visibility = "visible";
    numberX.style.visibility = "visible";
    numberY.style.visibility = "visible";
    timemessage.style.visibility = "visible";
    timercount.innerText = time;
    timercount.style.visibility = "visible";
    decideArithmetic();
  } else if (time === 1 && implement === true) {  // テスト終了時に動く
    time = 3;
    implement = false;
    clearInterval(countDownTimer);
    timercount.innerText = 0;
    console.log(questionObject);
    console.log("お疲れ様でした");
    comment.innerText = "お疲れ様でした！"
    numberX.style.visibility = "hidden";
    arithmetic.style.visibility = "hidden";
    numberY.style.visibility = "hidden";
    choice1.style.visibility = "hidden";
    choice2.style.visibility = "hidden";
    choice3.style.visibility = "hidden";    
    retryButton.style.visibility = "visible";
    backButton.style.visibility = "visible";
  } else if (implement === false) {   // 最初の3カウントダウン
    time -= 1;
    arithmetic.innerText = time;
  } else if (implement === true) {    // 10カウントダウン
    time -= 1;
    timercount.innerText = time;
  }
}

// 計算式作成
function decideArithmetic() {
  const decideResult = [];

  randomNunber = Math.floor(Math.random() * 4);

  if (randomNunber === 0) {
    arith = "+";
  } else if (randomNunber === 1) {
    arith = "-";
  } else if (randomNunber === 2) {
    arith = "×";
  } else if (randomNunber === 3) {
    arith = "÷";
  }

  y = Math.floor(Math.random() * 9 + 1);

  if (arith === "÷") {
    x = y * Math.floor(Math.random() * 9 + 1);
  } else {
    x = Math.floor(Math.random() * 9 + 1);
  }

  // 引き算の時に計算結果がマイナスにならないようにする
  if (x < y && arith === "-") {
    tempNumber = y;
    y = x;
    x = tempNumber;
  }

  if (arith === "+") {
    answer = x + y;
  } else if (arith === "-") {
    answer = x - y;
  } else if (arith === "×") {
    answer = x * y;
  } else if (arith === "÷") {
    answer = x / y;
  }

  decideResult.push(question);

  decideResult.push(x);
  decideResult.push(arith);
  decideResult.push(y);

  randomNunber = Math.floor(Math.random() * 3 + 1);

  if (randomNunber === 1) {
    choice1.innerText = answer;
    choice2.innerText = answer + 1;
    choice3.innerText = answer + 2;
    decideResult.push(answer);
    decideResult.push(answer + 1);
    decideResult.push(answer + 2);
    decideResult.push("1");
  } else if (randomNunber === 2) {
    choice1.innerText = answer - 1;
    choice2.innerText = answer;
    choice3.innerText = answer + 1;
    decideResult.push(answer - 1);
    decideResult.push(answer);
    decideResult.push(answer + 1);
    decideResult.push("2");    
  } else if (randomNunber === 3) {
    choice1.innerText = answer - 2;
    choice2.innerText = answer - 1;
    choice3.innerText = answer;
    decideResult.push(answer - 2);
    decideResult.push(answer - 1);
    decideResult.push(answer);
    decideResult.push("3");  
  }


  numberX.innerText = x;
  arithmetic.innerText = arith;
  numberY.innerText = y;
  questionObject.push(decideResult);


  return decideResult;
}

function calcJudge1() {
  if (questionObject[question][7] === "1") {
    questionObject[question].push("○");
  } else {
    questionObject[question].push("×");
  }

  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerText = questionObject[question][1] + questionObject[question][2] + questionObject[question][3];
  console.log(td1);
  tr.appendChild(td1);

  let td2 = document.createElement("td");
  td2.innerText = questionObject[question][4];
  tr.appendChild(td2);

  let td3 = document.createElement("td");
  td3.innerText = questionObject[question][8];
  tr.appendChild(td3);  

  table.appendChild(tr);

  question++;
  decideArithmetic();
}

function calcJudge2() {
  if (questionObject[question][7] === "2") {
    questionObject[question].push("○");
  } else {
    questionObject[question].push("×");
  }
  
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerText = questionObject[question][1] + questionObject[question][2] + questionObject[question][3];
  console.log(td1);
  tr.appendChild(td1);

  let td2 = document.createElement("td");
  td2.innerText = questionObject[question][5];
  tr.appendChild(td2);

  let td3 = document.createElement("td");
  td3.innerText = questionObject[question][8];
  tr.appendChild(td3);  

  table.appendChild(tr);

  question++;
  decideArithmetic();
}

function calcJudge3() {
  if (questionObject[question][7] === "3") {
    questionObject[question].push("○");
  } else {
    questionObject[question].push("×");
  }
  
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerText = questionObject[question][1] + questionObject[question][2] + questionObject[question][3];
  console.log(td1);
  tr.appendChild(td1);

  let td2 = document.createElement("td");
  td2.innerText = questionObject[question][6];
  tr.appendChild(td2);

  let td3 = document.createElement("td");
  td3.innerText = questionObject[question][8];
  tr.appendChild(td3);  

  table.appendChild(tr);

  question++;
  decideArithmetic();
}
