const button = document.querySelector("button");
const body = document.querySelector("body");

const h1 = document.querySelector("h1");

button.addEventListener("click", () => {
  const newColor = generateRandomColor();
  const newColor2 = generateRandomColor2();
  console.log(newColor);
  body.style.backgroundColor = newColor;
  h1.innerText = newColor;
  button.style.backgroundColor = newColor2;
});

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

const generateRandomColor2 = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};
