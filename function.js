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

console.log(programming);
typeSafe();
