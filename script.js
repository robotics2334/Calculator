let display = document.getElementById('display');

function appendToDisplay(value) {
  if (display.innerHTML === '0') {
    display.innerHTML = '';
  }
  display.innerHTML += value;
}

function clearDisplay() {
  display.innerHTML = '0';
}

function calculateResult() {
  try {
    display.innerHTML = eval(display.innerHTML);
  } catch (error) {
    display.innerHTML = 'Error';
  }
}