'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let randomNunber, x, arith, y, answer;
let time = 3;
let question = 0;
let questionObject = [];
let countDownTimer;
let implement = false;

const body = document.body;
const container = document.getElementsByClassName("container");

const comment = document.getElementById("comment");
const numberX = document.getElementById("numberX");
const arithmetic = document.getElementById("arithmetic");
const numberY = document.getElementById("numberY");
const timemessage = document.getElementById("timemessage");
const timercount = document.getElementById("timercount");

const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");

const startButton = document.getElementById("startButton");
const retryButton = document.getElementById("retryButton");
const backButton = document.getElementById("backButton");
// const plusButton = document.getElementById("plusButton");
// const minusButton = document.getElementById("minusButton");
// const resetButton = document.getElementById("resetButton");


startButton.addEventListener("click", start);
choice1.addEventListener("click", calcJudge1);
choice2.addEventListener("click", calcJudge2);
choice3.addEventListener("click", calcJudge3);
  

function start() {
  // console.log(time);
  comment.innerText = "";
  arithmetic.innerText = time;
  arithmetic.style.visibility = "visible";
  startButton.style.visibility = "hidden";
  backButton.style.visibility = "hidden";
  countDownTimer = setInterval(countDown, 1000);
}

function countDown() {
  if (time === 1 && implement === false) {
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
  } else if (time === 1 && implement === true) {
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
  } else if (implement === false) {  
    time -= 1;
    // console.log(time);
    arithmetic.innerText = time;
  } else if (implement === true) {
    time -= 1;
    // console.log(time);
    timercount.innerText = time;
  }
}


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

  y = Math.floor(Math.random() * 10 + 1);

  if (arith === "÷") {
    x = y * Math.floor(Math.random() * 10 + 1);
  } else {
    x = Math.floor(Math.random() * 10 + 1);
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

  // console.log(decideResult);


  numberX.innerText = x;
  arithmetic.innerText = arith;
  numberY.innerText = y;
  // console.log(question);
  // choice1.innerText = answer - 1;
  // choice2.innerText = answer;
  // choice3.innerText = answer + 1;
  // questionObject =
  questionObject.push(decideResult);
  // console.log(questionObject);

  return decideResult;
}

function calcJudge1() {
  if (questionObject[question][7] === "1") {
    questionObject[question].push("○");
    // console.log("疎通");
  } else {
    questionObject[question].push("×");
  }
  // console.log(questionObject[question]);
  question++;
  decideArithmetic();
}

function calcJudge2() {
  if (questionObject[question][7] === "2") {
    questionObject[question].push("○");
    // console.log("疎通");
  } else {
    questionObject[question].push("×");
  }
  // console.log(questionObject[question]);
  question++;
  decideArithmetic();
}

function calcJudge3() {
  if (questionObject[question][7] === "3") {
    questionObject[question].push("○");
    // console.log("疎通");
  } else {
    questionObject[question].push("×");
  }
  // console.log(questionObject[question]);
  question++;
  decideArithmetic();
}




// function plusCount() {
//   count++;

//   if (judgeThree(count)[0] !== 0) {
//     counter100.innerHTML = judgeThree(count)[0];
//   }
//   if (judgeThree(count)[1] !== 0 || judgeThree(count)[0] !== 0) {
//     counter10.innerHTML = judgeThree(count)[1];
//   }
//   counter1.innerHTML = judgeThree(count)[2];

//   if (judgeThree(count)[3]) {
//     counter100.style.color = "Red";
//   } else {
//     counter100.style.color = "";    
//   }
  
//   if (judgeThree(count)[4]) {
//     counter10.style.color = "Red";
//   } else {
//     counter10.style.color = "";    
//   }

//   if (judgeThree(count)[5]) {
//     counter1.style.color = "Red";
//   } else {
//     counter1.style.color = "";    
//   }

//   if (judgeThree(count)[6]) {
//     body.style.backgroundColor = "aqua";
//   } else {
//     body.style.backgroundColor = "";
//   }

// }

// function minusCount() {
//   if (count > 0) { 
//     count--;
//   if (judgeThree(count)[0] !== 0) {
//     counter100.innerHTML = judgeThree(count)[0];
//   } else {
//     counter100.innerHTML = "";
//   }
//   if (judgeThree(count)[1] !== 0 || judgeThree(count)[0] !== 0) {
//     counter10.innerHTML = judgeThree(count)[1];
//   } else {
//     counter10.innerHTML = "";
//   }
//   counter1.innerHTML = judgeThree(count)[2];
//   }


//   if (judgeThree(count)[3]) {
//     counter100.style.color = "Red";
//   } else {
//     counter100.style.color = "";    
//   }
  
//   if (judgeThree(count)[4]) {
//     counter10.style.color = "Red";
//   } else {
//     counter10.style.color = "";    
//   }
  
//   if (judgeThree(count)[5]) {
//     counter1.style.color = "Red";
//   } else {
//     counter1.style.color = "";    
//   }

//   if (judgeThree(count)[6]) {
//     body.style.backgroundColor = "aqua";
//   } else {
//     body.style.backgroundColor = "";
//   }

// }

// function resetCount() {
//   count = 0;
//   counter100.innerText = "";
//   counter10.innerText = "";
//   counter1.innerText = 0;

//   counter100.style.color = "";
//   counter10.style.color = "";
//   counter1.style.color = "";
//   body.style.backgroundColor = "";
// }


// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//     console.trace();
//   }
// }

// ３の倍数と３が付く数字を判定する関数
// function judgeThree(num) {
//   const judgeArray = [0, 0, 0, false, false, false, false]; // [0,0,0,true,true,true,true][3桁目,2桁目,1桁目,3桁目が3,2桁目が3,1桁目が3,3の倍数か]
//   // console.log(num.toString().length);

//   if (num.toString().length === 1) {
//     judgeArray[2] = (Number(num.toString()[0]));
//     if (Number(num.toString()[0]) === 3) {
//       judgeArray[5] = true;  
//     } 
//   } else if (num.toString().length === 2) {
//     judgeArray[1] = (Number(num.toString()[0]));
//     judgeArray[2] = (Number(num.toString()[1]));
//     if (Number(num.toString()[0]) === 3) {
//       judgeArray[4] = true;
//     }
//     if (Number(num.toString()[1]) === 3) {
//       judgeArray[5] = true;
//     }
//   } else if (num.toString().length === 3) {
//     judgeArray[0] = (Number(num.toString()[0]));
//     judgeArray[1] = (Number(num.toString()[1]));
//     judgeArray[2] = (Number(num.toString()[2]));
//     if (Number(num.toString()[0]) === 3) {
//       judgeArray[3] = true;
//     }
//     if (Number(num.toString()[1]) === 3) {
//       judgeArray[4] = true;
//     }
//     if (Number(num.toString()[2]) === 3) {
//       judgeArray[5] = true;
//     }
//   }

//     // for (let i = 0; i < num.toString().length; i++) {
//     //     // console.log("i");]
//     //     // if (Number(num.toString()[i]) === 3) {
//     //     //     judge = true;
//     //     //     break;
//     //     // }

//     //     // console.log(Number(num.toString()[i]));
//     //   if (i === 0 && num.toString().length === 1 || i === 1 && num.toString().length === 2) {
//     //     judgeArray[2] = (Number(num.toString()[2]));
//     //     if (Number(num.toString()[2]) === 3) {
//     //       judgeArray[5] = true;
//     //     }
//     //   } else if (i === 0 && num.toString().length === 2 || i === 1 && num.toString().length === 3) {
//     //     judgeArray[1] = (Number(num.toString()[1]));
//     //     if (Number(num.toString()[1]) === 3) {
//     //       judgeArray[4] = true;
//     //     }
//     //   } else {
//     //     judgeArray[0] = (Number(num.toString()[0]));
//     //     if (Number(num.toString()[0]) === 3) {
//     //       judgeArray[3] = true;
//     //     }
//     //   }
      
//     //     // console.log(Number(num.toString()[i]) === 3);
//     //     // console.log(Number(num.toString()[i]));
//     // }
    
//   if (num % 3 === 0 && num !== 0) {
//     judgeArray[6] = true;
//   }
//   console.log(judgeArray);
//     // console.log(Number(num.toString()[0]) === 3);
//   return judgeArray;
// }



// test(judgeThree(103),true);
// test(judgeThree(31),true);
// test(judgeThree(32),true);
// test(judgeThree(33),true);
// test(judgeThree(34),true);
// test(judgeThree(35),true);
// test(judgeThree(36),true);
// test(judgeThree(37),true);
// test(judgeThree(38),true);
// test(judgeThree(39),true);
// test(judgeThree(40),true);
