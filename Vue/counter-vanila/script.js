const valueDisplay = document.getElementById("value");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

let count = 0;

// Update UI
function updateCounter() {
  valueDisplay.textContent = count;
}

// Tambahkan efek animasi saat nilai berubah
function animateChange(type) {
  valueDisplay.classList.add(type);
  setTimeout(() => valueDisplay.classList.remove(type), 300);
}

// Event Listeners
incrementBtn.addEventListener("click", () => {
  count++;
  updateCounter();
  animateChange("value-increase");
});

decrementBtn.addEventListener("click", () => {
  count--;
  updateCounter();
  animateChange("value-decrease");
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});
