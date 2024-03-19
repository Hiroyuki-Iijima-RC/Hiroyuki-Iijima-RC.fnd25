'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let count = 0;

const body = document.body;
const counterHundred = document.getElementById("counterHundred");
const counterTen = document.getElementById("counterTen");
const counterOne = document.getElementById("counterOne");
const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const resetButton = document.getElementById("resetButton");

plusButton.addEventListener("click", plusCount);
minusButton.addEventListener("click", minusCount);
resetButton.addEventListener("click", resetCount);

minusButton.disabled = "disabled";

// ３の数字で文字色を変える関数
const counterStyle = function(index){
  if (index === "100") {
    if (judgeThree(count)[3]) {
      counterHundred.style.color = "Red";
    } else {
      counterHundred.style.color = "";    
    }
  } else if (index === "10") {
    if (judgeThree(count)[4]) {
      counterTen.style.color = "Red";
    } else {
      counterTen.style.color = "";    
    }
  } else if (index === "1") {
    if (judgeThree(count)[5]) {
      counterOne.style.color = "Red";
    } else {
      counterOne.style.color = "";    
    }
  }
};

// ＋ボタンを押したときに実行
function plusCount() {
  count++;
  minusButton.disabled = "";
  if (judgeThree(count)[0] !== 0) {
    counterHundred.innerHTML = judgeThree(count)[0];
  }
  if (judgeThree(count)[1] !== 0 || judgeThree(count)[0] !== 0) {
    counterTen.innerHTML = judgeThree(count)[1];
  }
  counterOne.innerHTML = judgeThree(count)[2];

  counterStyle("100");
  counterStyle("10");
  counterStyle("1");

  if (judgeThree(count)[6]) {
    body.style.backgroundColor = "aqua";
  } else {
    body.style.backgroundColor = "";
  }

}

// －ボタンを押したときに実行
function minusCount() {
  if (count > 0) { 
    count--;
    
  if (judgeThree(count)[0] !== 0) {
    counterHundred.innerHTML = judgeThree(count)[0];
  } else {
    counterHundred.innerHTML = "";
  }

  if (judgeThree(count)[1] !== 0 || judgeThree(count)[0] !== 0) {
    counterTen.innerHTML = judgeThree(count)[1];
  } else {
    counterTen.innerHTML = "";
  }
  
  counterOne.innerHTML = judgeThree(count)[2];
  }

  if (count === 0) {
    minusButton.disabled = "disabled";
  }

  counterStyle("100");
  counterStyle("10");
  counterStyle("1");

  if (judgeThree(count)[6]) {
    body.style.backgroundColor = "aqua";
  } else {
    body.style.backgroundColor = "";
  }

}

// resetボタンを押したときに実行
// 全ての要素を初期値に戻す
function resetCount() {
  count = 0;
  counterHundred.innerText = "";
  counterTen.innerText = "";
  counterOne.innerText = 0;

  counterHundred.style.color = "";
  counterTen.style.color = "";
  counterOne.style.color = "";
  body.style.backgroundColor = "";
  minusButton.disabled = "disabled";
}


// ３の倍数と３が付く数字を判定する関数
function judgeThree(num) {
  const judgeArray = [0, 0, 0, false, false, false, false]; 
  // [3桁目, 2桁目, 1桁目, 3桁目が3, 2桁目が3, 1桁目が3, 3の倍数か]

  //numが１桁の場合
  if (num.toString().length === 1) {
    judgeArray[2] = (Number(num.toString()[0]));
    // １桁目が３か
    if (Number(num.toString()[0]) === 3) {
      judgeArray[5] = true;  
    }

  //numが２桁の場合
  } else if (num.toString().length === 2) {
    judgeArray[1] = (Number(num.toString()[0]));
    judgeArray[2] = (Number(num.toString()[1]));
    // ２桁目が３か
    if (Number(num.toString()[0]) === 3) {
      judgeArray[4] = true;
    }
    // １桁目が３か
    if (Number(num.toString()[1]) === 3) {
      judgeArray[5] = true;
    }

  // numが３桁の場合
  } else if (num.toString().length === 3) {
    judgeArray[0] = (Number(num.toString()[0]));
    judgeArray[1] = (Number(num.toString()[1]));
    judgeArray[2] = (Number(num.toString()[2]));
    // ３桁目が３か
    if (Number(num.toString()[0]) === 3) {
      judgeArray[3] = true;
    }
    // ２桁目が３か
    if (Number(num.toString()[1]) === 3) {
      judgeArray[4] = true;
    }
    // １桁目が３か
    if (Number(num.toString()[2]) === 3) {
      judgeArray[5] = true;
    }
  }
  
  // ０以外かつ３の倍数のとき
  if (num % 3 === 0 && num !== 0) {
    judgeArray[6] = true;
  }
  console.log(judgeArray);

  return judgeArray;
}


