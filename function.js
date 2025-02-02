function lemparDadu() {
  // return Math.floor(Math.random() * 6) + 1;
  console.log(Math.floor(Math.random() * 6) + 1);
}

// console.log(lemparDadu());
lemparDadu();

console.log("=============================================");
// parameter dan argument pada function greet
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("John");

function cuaca(kota, hari, cuaca) {
  // return(`Cuaca di ${kota} pada hari ${hari} adalah ${cuaca}`);
  console.log(`Cuaca di ${kota} pada hari ${hari} adalah ${cuaca}`);
}

// console.log(cuaca("Jakarta", "senin", "cerah"));
cuaca("Bandung", "selasa", "hujan");
cuaca("Bali", "rabu", "berawan");

console.log("=============================================");
// function dengan return value
function matematika(a, b) {
  const tambah = a + b;
  console.log(tambah);
  const kurang = a - b;
  console.log(kurang);
  const kali = a * b;
  console.log(kali);
  const bagi = a / b;
  console.log(bagi);
  const pangkat = a ** b;
  console.log(pangkat);
  const modulus = a % b;
  console.log(modulus);
}

matematika(10, 20);

console.log("=============================================");

// Statement return pada function

function jumlahkan(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Input harus number";
  }
  return a + b;
}

console.log(jumlahkan("hdhhd"));

console.log("=============================================");

// Scope pada function JS
let programming = "Javascript";

function typeSafe() {
  let programming = "TypeScript";
  console.log(programming);
}

typeSafe();
console.log(programming);

console.log("=============================================");

// Blocked scope variable

// let nilai = 5;
// if (nilai > 7) {
//   let hasil = "Lulus";
//   console.log(hasil);
// } else {
//   let hasil = "Tidak Lulus";
//   console.log(hasil);
// }

// console.log(nilai);

let tinggi = 8;
if (tinggi > 5) {
  var lebar = 10;
  console.log(lebar);
}

console.log(`Lebar: ${lebar}`);

for (let i = 0; i < 10; i++) {
  var lebar = i;
}

console.log(`Lebar: ${lebar}`);

console.log("=============================================");
// Function Expression

// function perpangkatan(nilai) {
//   return nilai * nilai;
// }

// let hasil = perpangkatan(5);

const perpangkatan = function (nilai) {
  return nilai * nilai;
};

console.log(perpangkatan(5));

console.log("=============================================");

// Function sebagai argument
function duaKali(func) {
  func();
  func();
}

function lemparDadu() {
  const hasil = Math.floor(Math.random() * 6) + 1;
  console.log(hasil);
}

console.log(duaKali(lemparDadu));

console.log("=============================================");

// Function Bernilai Balik Function

function hasilnyaAdalahFunction() {
  const rand = Math.random();

  if (rand > 0.1) {
    return function () {
      console.log("Nilai lebih dari 0.1");
    };
  } else {
    return function () {
      console.log("Nilai kurang dari 0.1");
    };
  }
}

const hasil = hasilnyaAdalahFunction();

console.log("=============================================");
// Definisi Sebuah Method

const aritmatika = {
  perkalian: function (a, b) {
    return a * b;
  },
  pembagian: function (a, b) {
    return a / b;
  },
  penjumlahan: function (a, b) {
    return a + b;
  },
  pengurangan: function (a, b) {
    return a - b;
  },
};

console.log(aritmatika.perkalian(5, 10));
console.log(aritmatika.pembagian(5, 10));
console.log(aritmatika.penjumlahan(5, 10));
console.log(aritmatika.pengurangan(5, 10));

console.log("=============================================");

// This pada function

const saya = {
  nama: "John",
  umur: 30,
  sapa: function () {
    console.log(
      `Halo, nama saya ${this.nama} dan umur saya ${this.umur} tahun`
    );
  },
};

saya.sapa();
saya.nama = "Doe";
saya.sapa();