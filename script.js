'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let count = 0;

const body = document.body;
const counter100 = document.getElementById("counter100");
const counter10 = document.getElementById("counter10");
const counter1 = document.getElementById("counter1");
const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const resetButton = document.getElementById("resetButton");

plusButton.addEventListener("click", plusCount);
minusButton.addEventListener("click", minusCount);
resetButton.addEventListener("click", resetCount);

minusButton.disabled = "disabled";

 
function plusCount() {
  count++;
  minusButton.disabled = "";
  if (judgeThree(count)[0] !== 0) {
    counter100.innerHTML = judgeThree(count)[0];
  }
  if (judgeThree(count)[1] !== 0 || judgeThree(count)[0] !== 0) {
    counter10.innerHTML = judgeThree(count)[1];
  }
  counter1.innerHTML = judgeThree(count)[2];

  if (judgeThree(count)[3]) {
    counter100.style.color = "Red";
  } else {
    counter100.style.color = "";    
  }
  
  if (judgeThree(count)[4]) {
    counter10.style.color = "Red";
  } else {
    counter10.style.color = "";    
  }

  if (judgeThree(count)[5]) {
    counter1.style.color = "Red";
  } else {
    counter1.style.color = "";    
  }

  if (judgeThree(count)[6]) {
    body.style.backgroundColor = "aqua";
  } else {
    body.style.backgroundColor = "";
  }

}

function minusCount() {
  if (count > 0) { 
    count--;
    
  if (judgeThree(count)[0] !== 0) {
    counter100.innerHTML = judgeThree(count)[0];
  } else {
    counter100.innerHTML = "";
  }

  if (judgeThree(count)[1] !== 0 || judgeThree(count)[0] !== 0) {
    counter10.innerHTML = judgeThree(count)[1];
  } else {
    counter10.innerHTML = "";
  }
  
  counter1.innerHTML = judgeThree(count)[2];
  }

  if (count === 0) {
    minusButton.disabled = "disabled";
  }

  if (judgeThree(count)[3]) {
    counter100.style.color = "Red";
  } else {
    counter100.style.color = "";    
  }
  
  if (judgeThree(count)[4]) {
    counter10.style.color = "Red";
  } else {
    counter10.style.color = "";    
  }
  
  if (judgeThree(count)[5]) {
    counter1.style.color = "Red";
  } else {
    counter1.style.color = "";    
  }

  if (judgeThree(count)[6]) {
    body.style.backgroundColor = "aqua";
  } else {
    body.style.backgroundColor = "";
  }

}

function resetCount() {
  count = 0;
  counter100.innerText = "";
  counter10.innerText = "";
  counter1.innerText = 0;

  counter100.style.color = "";
  counter10.style.color = "";
  counter1.style.color = "";
  body.style.backgroundColor = "";
  minusButton.disabled = "disabled";
}


// ３の倍数と３が付く数字を判定する関数
function judgeThree(num) {
  const judgeArray = [0, 0, 0, false, false, false, false]; // [0,0,0,true,true,true,true][3桁目,2桁目,1桁目,3桁目が3,2桁目が3,1桁目が3,3の倍数か]


  if (num.toString().length === 1) {
    judgeArray[2] = (Number(num.toString()[0]));
    if (Number(num.toString()[0]) === 3) {
      judgeArray[5] = true;  
    } 
  } else if (num.toString().length === 2) {
    judgeArray[1] = (Number(num.toString()[0]));
    judgeArray[2] = (Number(num.toString()[1]));
    if (Number(num.toString()[0]) === 3) {
      judgeArray[4] = true;
    }
    if (Number(num.toString()[1]) === 3) {
      judgeArray[5] = true;
    }
  } else if (num.toString().length === 3) {
    judgeArray[0] = (Number(num.toString()[0]));
    judgeArray[1] = (Number(num.toString()[1]));
    judgeArray[2] = (Number(num.toString()[2]));
    if (Number(num.toString()[0]) === 3) {
      judgeArray[3] = true;
    }
    if (Number(num.toString()[1]) === 3) {
      judgeArray[4] = true;
    }
    if (Number(num.toString()[2]) === 3) {
      judgeArray[5] = true;
    }
  }


    
  if (num % 3 === 0 && num !== 0) {
    judgeArray[6] = true;
  }
  console.log(judgeArray);

  return judgeArray;
}


