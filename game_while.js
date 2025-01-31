let maximum = parseInt(prompt("Masukkan batas maksimal angka: "));
while (!maximum) {
  maximum = parseInt(prompt("Masukkan batas maksimal angka: "));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Masukkan angka tebakan: "));
let attempts = 1;

while (guess !== targetNum) {
  attempts++;
  if (guess > targetNum) {
    guess = parseInt(prompt("Terlalu besar! Masukkan angka tebakan: "));
  } else {
    guess = parseInt(prompt("Terlalu kecil! Masukkan angka tebakan: "));
  }
}

alert(
  `Selamat! Anda berhasil menebak angka! dengan ${attempts} kali percobaan`
);
