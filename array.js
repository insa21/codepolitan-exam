// Array adalah tipe data yang digunakan untuk menampung lebih dari satu nilai. Nilai-nilai tersebut dapat berupa tipe data apapun, seperti number, string, boolean, object, dan sebagainya. Array dideklarasikan dengan menggunakan tanda kurung siku ([]) dan setiap nilai dipisahkan dengan tanda koma (,).
let peserta = ["A", "B", "C", "D", "E"];
let nilai = [70, 80, 90, 85, 75];
let music = ["rock", "pop", "jazz", "dangdut", "kpop"];

music['rock'] = "jpop";
music[5] = "malaysia";

console.log(music.length);
console.log(music);
