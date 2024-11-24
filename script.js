const numSelected = document.querySelectorAll('.num');

function add(a, b) {
  return a + b;
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

// function operate(a, b, opperand) {
//   if (opperand == ) {

//   }
// }

function getNum() {
  numSelected.forEach(num => {
    num.addEventListener('click', () => {
      let numPicked = num.getAttribute('data-num');
      console.log(numPicked);
    });
  });
}

getNum();
