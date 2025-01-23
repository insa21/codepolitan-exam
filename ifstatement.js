// If statement adalah salah satu statement yang digunakan untuk mengeksekusi kode jika kondisi yang diberikan bernilai true. Jika kondisi bernilai false, maka kode tidak akan dieksekusi.

let angka = Math.random();
console.log(angka);

if (angka < 0.5) {
  console.log("angka kurang dari 0.5");
} else {
  console.log("angka lebih dari 0.5");
}

// Else if statement adalah statement yang digunakan untuk mengecek beberapa kondisi. Jika kondisi pertama bernilai false, maka akan mengecek kondisi kedua, ketiga, dan seterusnya.

let age = 15;

if (age === 18) {
  console.log("Kamu sudah dewasa");
} else if (age < 18) {
  console.log("Kamu masih anak-anak");
} else {
  console.log("Kamu sudah tua");
}

const hariIni = "minggu";

if (hariIni === "senin") {
  console.log("Semangat berkerja");
} else if (hariIni === "sabtu") {
  console.log("Semangat berlibur");
} else if (hariIni === "minggu") {
  console.log("Semoga jangan cepat berakhir");
}



