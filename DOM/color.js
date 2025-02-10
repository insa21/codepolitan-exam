const buttons = document.querySelectorAll("button");
const headings = document.querySelectorAll("h1");

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

for (let button of buttons) {
  button.addEventListener("click", colorize);
}

for (let heading of headings) {
  heading.addEventListener("click", colorize);
}

function colorize() {
  this.style.backgroundColor = generateRandomColor();
  this.style.color = generateRandomColor();
}
