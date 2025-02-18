const numSelected = document.querySelectorAll('.num');
const opperandSelected = document.querySelectorAll('.opperand');
const equalSelected = document.querySelector('.equal');
const decimalSelected = document.querySelector('.decimal');
const displayedNumber = document.querySelector('.numberDisplay');
const topDisplayedSelected = document.querySelector('.topDisplay');
const bottomDisplayedSelected = document.querySelector('.bottomDisplay');
const clearSelected = document.querySelector('.clear');

let a = 0;
let z = 0;
let opperand = '';
let displayAnswer = 0;

function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
  return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
  return parseFloat(a) / parseFloat(b);
}

function operate(a, b, opperand) {
  if (opperand == 'x') {
    return multiply(a, b);
  } else if (opperand == '+') {
    return add(a, b);
  } else if (opperand == '-') {
    return subtract(a, b);
  } else if (opperand == '/') {
    return divide(a, b);
  }
}

function clear() {
  clearSelected.addEventListener('click', () => {
    topDisplayedSelected.textContent = '';
    bottomDisplayedSelected.textContent = '';
    a = 0;
    z = 0;
    opperand = '';
  });
}

function getInput() {
  numSelected.forEach(num => {
    num.addEventListener('click', () => {
      bottomDisplayedSelected.append(num.getAttribute('data-num'));
    });
  });
}

function getDecimal() {
  decimalSelected.addEventListener('click', () => {
    bottomDisplayedSelected.append('.');
  });
}

function getOpperand() {
  opperandSelected.forEach(opp => {
    opp.addEventListener('click', () => {
      a = bottomDisplayedSelected.textContent;
      opperand = opp.getAttribute('data-opp');
      topDisplayedSelected.textContent = a;
      bottomDisplayedSelected.textContent = '';
    });
  });
}

function getAnswer() {
  equalSelected.addEventListener('click', () => {
    let num1 = a;
    let num2 = bottomDisplayedSelected.textContent;
    answer = operate(num1, num2, opperand);
    if (answer % 1 != 0) {
      displayAnswer = answer.toFixed(2);
    } else {
      displayAnswer = answer;
    }
    console.log(displayAnswer);
    bottomDisplayedSelected.textContent = displayAnswer;
    topDisplayedSelected.textContent = '';
  });
}

clear();
getDecimal();
getInput();
getOpperand();
getAnswer();
