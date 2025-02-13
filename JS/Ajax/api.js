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

// Cara terbaru paling mudah menggunakan Fetch

// const loadPeople = async () => {
//   try {
//     const res = await fetch("https://swapi.dev/api/people/1/");
//     const data = await res.json();
//     console.log(data);

//     const res2 = await fetch("https://swapi.dev/api/people/2/");
//     const data2 = await res2.json();
//     console.log(data2);
//   } catch (err) {
//     console.log("Error nihh ganti-ganti pesannya:", err);
//   }
// };

// loadPeople();

// Axios
// axios
//   .get("https://swapi.dev/api/people/11111/")
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//     alert(err.message);
//   });

// Axios Async Await
// const getPeople = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//     console.log(res.data);
//   } catch (error) {
//     console.log(error);
//     console.log(error.message);
//     console.log(error.response.status);
//     console.log(error.response.data);
//   }
// };

// Jokes Bapak-Bapak
// Pastikan axios telah dimuat sebagai dependensi
const jokes = document.querySelector("#jokes");
const button = document.querySelector("#joke-button"); // Pastikan Anda memiliki elemen dengan id="joke-button"

// definisikan getJokes terlebih dahulu
const getJokes = async () => {
  try {
    const config = {
      headers: { Accept: "application/json" },
    };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "No Jokes Available";
  }
};

const addJoke = async () => {
  const jokeText = await getJokes();
  const newLI = document.createElement("LI");
  newLI.append(jokeText);
  jokes.append(newLI);
};

// Tambahkan event listener ke button setelah didefinisikan
button.addEventListener("click", addJoke);
