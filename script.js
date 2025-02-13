const numSelected = document.querySelectorAll('.num');
const opperandSelected = document.querySelectorAll('.opperand');
const equalSelected = document.querySelector('.equal');
const decimalSelected = document.querySelector('.decimal');
const displayedNumber = document.querySelector('.numberDisplay');
const clearSelected = document.querySelector('.clear');

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

function clear() {
  clearSelected.addEventListener('click', () => {
    displayedNumber.textContent = '';
  });
}

clear();
