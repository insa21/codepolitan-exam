const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", (e) => {
  console.log(e);
});

input.addEventListener("keydown", (e) => {
  console.log(e);
  switch (e.code) {
    case "ArrowUp":
      console.log("Tombol Arah atas");
      break;
    case "ArrowDown":
      console.log("Tombol Arah Bawah");
      break;
    case "ArrowLeft":
      console.log("Tombol Arah Kiri");
      break;
    case "ArrowRight":
      console.log("Tombol Arah Kanan");
      break;
    default:
      console.log("Tombol tidak sesuai");
  }
});

// input.addEventListener("keyup", () => {
//   console.log("Tombol tidak di tekan");
// });
