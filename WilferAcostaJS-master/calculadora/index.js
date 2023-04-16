let input = '';
let result = document.getElementById('result');

function addInput(value) {
  input += value;
  result.innerHTML = input;
}

function clearDisplay() {
  input = '';
  result.innerHTML = '';
}

function calculate() {
  let total = eval(input);
  result.innerHTML = total;
  input = '';
}