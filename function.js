function lemparDadu() {
  // return Math.floor(Math.random() * 6) + 1;
  console.log(Math.floor(Math.random() * 6) + 1);
}

// console.log(lemparDadu());
lemparDadu();

// parameter dan argument pada function greet
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("John");

function cuaca(kota, hari, cuaca) {
  console.log(`Cuaca di ${kota} pada hari ${hari} adalah ${cuaca}`);
}

cuaca("Jakarta", "senin", "cerah");
cuaca("Bandung", "selasa", "hujan");
cuaca("Bali", "rabu", "berawan");
