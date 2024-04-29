let displayValue = '';

function appendValue(value) {
  displayValue += value;
  document.getElementById('result').value = displayValue;
}

function calculate() {
  try {
    const result = eval(displayValue);
    document.getElementById('result').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('result').value = 'Error';
    displayValue = '';
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('result').value = '';
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('result').value = displayValue;
}

document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (/[0-9]/.test(key)) {
    appendValue(key);
  } else if (key === '.') {
    appendValue('.');
  } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') { 
    appendValue(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    backspace();
  } else if (key === 'c' || key === 'C') {
    clearDisplay();
  }
});
