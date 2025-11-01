let count = 0;

const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const resetBtn = document.getElementById("resetBtn");
const countDisplay = document.getElementById("count");


plusBtn.addEventListener("click", addOne);
minusBtn.addEventListener("click", subtractOne);
resetBtn.addEventListener("click", resetCount);

function addOne() {
    count++;
    updateDisplay();
}

function subtractOne() {
    if (count > 0) count--;
    updateDisplay();
}

function resetCount() {
    count = 0;
    updateDisplay();
}

function updateDisplay() {
    countDisplay.textContent = count;
}