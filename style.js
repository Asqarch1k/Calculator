let displayValue = "";

function appendNumber(number) {
  displayValue += number;
  number = number.slice(0, -1);
  updateDisplay();
}

function appendOperator(operator) {
  if (displayValue.slice(-1).match(/[+\-*\/]/)) {
    displayValue = displayValue.slice(0, -1);
  }
  displayValue += operator;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function deleteChar() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.value = displayValue;
}
