const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

// Handle button clicks
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else if (value === 'C') {
      clearDisplay();
    } else {
      display.value += value;
    }
  });
});

// Clear display
function clearDisplay() {
  display.value = '';
}

// Handle keyboard input
document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (/[0-9+\-*/.=]/.test(key)) {
    if (key === '=' || key === 'Enter') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else {
      display.value += key;
    }
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (key === 'Escape') {
    clearDisplay();
  }
});
