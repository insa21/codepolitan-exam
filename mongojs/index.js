const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/movie_db")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  genre: String,
  director: String,
  actor: [String],
  rating: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

// Find all data in the database
// const getMovie = Movie.find({});
// getMovie.then((movies) => {
//   console.log(movies);
// });

// Movie.find({ year: { $gte: 2018 }, genre: "Action" })
//   .then((movies) => {
//     console.log(movies);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

Movie.findById("67bdedc37f87c313b52ba8a7")
  .then((movie) => {
    console.log(movie);
  })
  .catch((err) => {
    console.log(err);
  });

// Add data to the database using save
// const movie = new Movie({
//   title: "Black Panther",
//   year: 2018,
//   genre: "Action",
//   director: "Ryan Coogler",
//   actor: ["jono", "joni"],
//   ratting: 8.7,
// });

// movie.save();

// console.log(movie);

// Add data to the database using insertMany
// Movie.insertMany([
//   {
//     title: "Avengers: Infinity War",
//     genre: "Action",
//     director: "Anthony Russo, Joe Russo",
//     year: 2018,
//     cast: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
//     description:
//       "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
//     rating: 8.4,
//     image: "https://www.example.com/avengers_infinity_war.jpg",
//   },
//   {
//     title: "Joker",
//     genre: "Crime",
//     director: "Todd Phillips",
//     year: 2019,
//     cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
//     description:
//       "In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: 'The Joker'.",
//     rating: 8.4,
//     image: "https://www.example.com/joker.jpg",
//   },
//   {
//     title: "Parasite",
//     genre: "Drama",
//     director: "Bong Joon Ho",
//     year: 2019,
//     cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
//     description:
//       "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
//     rating: 8.6,
//     image: "https://www.example.com/parasite.jpg",
//   },
//   {
//     title: "Spider-Man: Into the Spider-Verse",
//     genre: "Animation",
//     director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
//     year: 2018,
//     cast: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
//     description:
//       "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
//     rating: 8.4,
//     image: "https://www.example.com/spider_man_into_the_spider_verse.jpg",
//   },
// ])
//   .then((movies) => {
//     console.log("Movies inserted successfully");
//     console.log(movies);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
