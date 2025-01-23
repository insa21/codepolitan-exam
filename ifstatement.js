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

// const hariIni = prompt("Hari ini hari apa?").toLowerCase();
const hariIni = "senin";

if (hariIni === "senin") {
  console.log("Semangat berkerja");
} else if (hariIni === "sabtu") {
  console.log("Semangat berlibur");
} else if (hariIni === "minggu") {
  console.log("Semoga jangan cepat berakhir");
} else {
  console.log("Semangat!");
}

// nested if statement adalah if statement yang berada di dalam if statement lainnya. Nested if statement digunakan untuk mengecek kondisi lebih lanjut.

// const password = prompt("Masukkan password");

// if (password.length >= 8) {
//   if (password.indexOf(" ") !== -1) {
//     console.log("Password tidak boleh mengandung spasi");
//   } else {
//     console.log("Password valid");
//   }
// } else {
//   console.log("Password harus lebih dari 8 karakter");
// }

// menggunakan logika AND
// if (password.length >= 8 && password.indexOf(" ") === -1) {
//   console.log("Password valid");
// } else {
//   console.log("Password tidak valid");
// }

// menggunakan logika OR
// const role = prompt("Masukkan role kamu").toLowerCase();

// if (role === "admin" || role === "superadmin") {
//   console.log("Kamu memiliki akses penuh");
// } else {
//   console.log("Kamu memiliki akses terbatas");
// }
