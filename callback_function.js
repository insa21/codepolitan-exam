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
