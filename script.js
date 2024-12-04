const numSelected = document.querySelectorAll('.num');
const opperandSelected = document.querySelectorAll('.opperand');
const bottomNumber = document.querySelector('.botNum');
const topNumber = document.querySelector('.topNum');
const equalSelected = document.querySelector('.equal');

let a = 0;
let b = 0;
let opperand = '';

function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
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

function getNum() {
  numSelected.forEach(num => {
    num.addEventListener('click', () => {
      bottomNumber.append(num.getAttribute('data-num'));
    });
  });
}

function getSecondNumber() {
  opperandSelected.forEach(opperandPicked => {
    opperandPicked.addEventListener('click', () => {
      opperand = opperandPicked.getAttribute('data-opp');
      topNumber.textContent = bottomNumber.textContent;
      bottomNumber.textContent = '';
    });
  });
}

function getAnswer() {
  equalSelected.addEventListener('click', () => {
    a = topNumber.textContent;
    b = bottomNumber.textContent;
    pickedOpperand = opperand;
    let ans = operate(a, b, pickedOpperand);
    bottomNumber.textContent = ans;
    topNumber.textContent = '';
  });
}

function clearCalc() {
  document.querySelector('.clear').addEventListener('click', () => {
    bottomNumber.textContent = '';
    topNumber.textContent = '';
  });
}

getNum();
clearCalc();
getSecondNumber();
getAnswer();
