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
  rating: Number,
  director: String,
  actor: [String],
});

const Movie = mongoose.model("Movie", movieSchema);

const movie = new Movie({
  title: "Black Panther",
  year: 2018,
  score: 8.7,
  director: "Ryan Coogler",
  actor: ["jono", "joni"],
});

movie.save();

console.log(movie);
