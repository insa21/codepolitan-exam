// Array adalah tipe data yang digunakan untuk menampung lebih dari satu nilai. Nilai-nilai tersebut dapat berupa tipe data apapun, seperti number, string, boolean, object, dan sebagainya. Array dideklarasikan dengan menggunakan tanda kurung siku ([]) dan setiap nilai dipisahkan dengan tanda koma (,).
let peserta = ["A", "B", "C", "D", "E"];
let nilai = [70, 80, 90, 85, 75];
let music = ["rock", "pop", "jazz", "dangdut", "kpop"];

music["rock"] = "jpop";
music[5] = "malaysia";

// Push adalah method yang digunakan untuk menambahkan nilai baru ke dalam array. Nilai baru tersebut akan ditempatkan di akhir array.
barbel = [];
barbel.push("10kg");
barbel.push("15kg");
barbel.push("20kg");

// Pop adalah method yang digunakan untuk menghapus nilai terakhir dari array.
barbel.pop();

// Unshift adalah method yang digunakan untuk menambahkan nilai baru ke dalam array. Nilai baru tersebut akan ditempatkan di awal array.
barbel.unshift("5kg");

// Shift adalah method yang digunakan untuk menghapus nilai pertama dari array.
barbel.shift();

// console.log(music.length);
console.log(barbel);
// console.log(music);

// Nested Array atau Array Bersarang

const data = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
];

console.log(data[0][0]);
console.log(data[0][1]);
console.log(data[0][2]);
console.log(data[1][0]);