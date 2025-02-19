const penjumlahan = (a, b) => a + b;
const pengurangan = (a, b) => a - b;
const perkalian = (a, b) => a * b;
const pembagian = (a, b) => (b === 0 ? "Error: Pembagian dengan nol" : a / b);

module.exports = {
  penjumlahan,
  pengurangan,
  perkalian,
  pembagian,
};
