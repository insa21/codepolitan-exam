// Membuat JSON di JS

// const data = `{
//   ticker: {
//     base: "BTC",
//     target: "IDR",
//     price: 11326.11,
//     volume: 8383.09919089,
//     change: 0.0,
//   },
//   timestamp: 1499408337,
//   success: true,
//   error: "",
// }`;

// Request dengan XMLHttpRequest
const req = new XMLHttpRequest();
let data;

req.onload = function () {
  data = JSON.parse(this.responseText);
  console.log(data);
};

req.onerror = function () {
  console.log("Error", this);
};

req.open("GET", "https://swapi.dev/api/people/1/");
req.send();


//Fetch
