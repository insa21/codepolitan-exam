// Callback Function - ForEach

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

angka.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(`${el} adalah bilangan genap`);
  }
});

const films = [
  {
    judul: "The Dark Knight",
    tahun: 2008,
    rating: 9.0,
  },
  {
    judul: "The Dark Knight Rises",
    tahun: 2012,
    rating: 8.4,
  },
  {
    judul: "Inception",
    tahun: 2010,
    rating: 8.8,
  },
  {
    judul: "Interstellar",
    tahun: 2014,
    rating: 8.6,
  },
];

films.forEach(function (film, index) {
  console.log(
    `${index} Judul ${film.judul} \n- Tahun: ${film.tahun} \n - Rating: ${film.rating}`
  );
});

console.log(
  "==========================================================================================="
);

// Callback Function - Map
const expression = ["rouf", "muf", "mif", "mof", "mef"];
const capsExpression = expression.map(function (exprs) {
  return exprs.toUpperCase();
});

console.log(expression);
console.log(capsExpression);

console.log(
  "==========================================================================================="
);

//todo: Callback Function - Arrow Function

// function normal
// function perpangkatan(x) {
//   return x * x;
// }

// const hasil = perpangkatan(7);
// console.log(hasil);

// function expression
// const perpangkatan = function (x) {
//   return x * x;
// }
// const hasil = perpangkatan(7);
// console.log(hasil);

// function arrow
// const perpangkatan = (x) => {
//   return x * x;
// }

// const hasil = perpangkatan(7);
// console.log(hasil);

// implicit return Arrow Function
const perpangkatan = (x) => x * x;

const hasil = perpangkatan(7);
console.log(hasil);

const random = () => Math.floor(Math.random() * 1000);
console.log(random());

console.log(
  "==========================================================================================="
);

// setTimeout & setInterval

// console.log("mulai...");
// setTimeout(() => {
//   console.log("gw udah di tengah tengah nihh...");
// }, 3000);
// console.log("selesai...");

// const interval = setInterval(() => {
//   console.log(Math.random());
// }, 2000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 10000);

console.log(
  "==========================================================================================="
);

// filter, map and find

const angkaa = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const angkaGenap = angkaa.filter(function (el) {
  return el % 2 === 0;
});
const angkaBaru = angkaa.filter((n) => n < 5);
const angkaGanjil = angkaa.filter((n) => n % 2 !== 0);

// Rating film Menggunakan data yang diatas
const filmsRatingBagus = films.filter(function (film) {
  return film.rating > 8.5;
});

const filmsRatingJelek = films.filter(function (film) {
  return film.rating < 8.5;
});

const filmsBaru = films.filter(function (film) {
  return film.tahun > 2010;
});

console.log(angkaGenap);
console.log(angkaGanjil);
console.log(angkaBaru);

// menampilkan di console untuk rating film
console.log(filmsRatingBagus);
console.log(filmsRatingJelek);
console.log(filmsBaru);

// Maping films diatas
const filmBagus = filmsRatingBagus.map((film) => film.judul);
console.log(filmBagus);

console.log(
  "==========================================================================================="
);

// Every mengembalikan nilai True jika semua kriteria dalam array terpenuhi namun mengembalikan nilai false jika sebaliknya atau salah satu kriteria tidak terpenuhi
// Some lebih fleksibel karena hanya memilih salah satu nilai yang ada dalam array maka akan mengembalikan nilai true

//Every
const kataKata = ["kita", "kamu", "saya", "dia"];
const cekEvery = kataKata.every((kata) => {
  return kata.length === 4;
});

// Some
const cekSome = kataKata.some((kata) => {
  return kata.length === 4;
});

// cek dari film diatas
const cekFilmNew = films.some((film) => {
  return film.tahun > 2010;
});

console.log(cekEvery);
console.log(cekSome);
// cekFilm

console.log(cekFilmNew);

//reduce : melakukan proses sebanyaknyaa element milik suatu array. Nilai baliknya adalah single value

const exam = [80, 76, 65, 100, 90, 30];

// let total = 0;

// for (let score of exam){
//   total += score
// }

// console.log(total)

const total = exam.reduce((total, score) => {
  return total + score;
});

const bestFilm = films.reduce((bestFilm, currentFilm) => {
  console.log(bestFilm, currentFilm);
  if (currentFilm.rating > bestFilm) {
    return currentFilm;
  }
  return bestFilm;
});

// console.log(bestFilm, currentFilm);

console.log(
  "==========================================================================================="
);

function lemparDadu(sisi = 6) {
  return Math.floor(Math.random() * sisi) + 1;
}

console.log(lemparDadu());

function sapa(name="Neng Batok", msg="Tara Nulis") {
  console.log(`Halo ${name}, ${msg}`);
}

console.log(sapa())
