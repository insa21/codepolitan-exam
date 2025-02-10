// Event

// const button = document.querySelector("button");
// const input = document.querySelector("input");

// button.addEventListener("click", (e) => {
//   console.log(e);
// });

// input.addEventListener("keydown", (e) => {
//   console.log(e);
//   switch (e.code) {
//     case "ArrowUp":
//       console.log("Tombol Arah atas");
//       break;
//     case "ArrowDown":
//       console.log("Tombol Arah Bawah");
//       break;
//     case "ArrowLeft":
//       console.log("Tombol Arah Kiri");
//       break;
//     case "ArrowRight":
//       console.log("Tombol Arah Kanan");
//       break;
//     default:
//       console.log("Tombol tidak sesuai");
//   }
// });

// input.addEventListener("keyup", () => {
//   console.log("Tombol tidak di tekan");
// });

// Event preventDefault
// const form = document.querySelector("#form");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("test prevent default");

// });

// document.querySelector("a").addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("harusnya ke google");
// });

// Realtime Event dan DOM
// document.querySelector("button").addEventListener("click", (e) => {
//   // document.querySelector("h1").textContent = "Hello World";
//   console.log(e);
// });

// const input = document.querySelector('input');
// input.addEventListener('keydown', () => {
//   console.log('Tombol di tekan');

// })

// Event input dan change pada form

const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector("#notes");

input.addEventListener("change", () => {
  document.querySelector("h1").innerText = input.value;
  console.log("nilai berhasil di input");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const noteValue = input.value;
  const newList = document.createElement("li");
  newList.textContent = noteValue;
  list.appendChild(newList);
  input.value = "";
});
