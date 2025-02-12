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
// const req = new XMLHttpRequest();
// let data;

// req.onload = function () {
//   data = JSON.parse(this.responseText);
//   console.log(data);
// };

// req.onerror = function () {
//   console.log("Error", this);
// };

// req.open("GET", "https://swapi.dev/api/people/1/");
// req.send();

//Fetch
// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     if (!res.ok) {
//       throw Error(`Could not fetch the data for that resource`);
//     }
//     return res.json();
//   })

//   .then((data) => {
//     console.log("json", data);
//   })

//   .catch((err) => {
//     console.log("Error", err);
//   });

const loadPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);

    const res2 = await fetch("https://swapi.dev/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
  } catch (err) {
    console.log("Error nihh ganti-ganti pesannya:", err);
  }
};

loadPeople();
