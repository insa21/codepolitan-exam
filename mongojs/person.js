const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/Shop_App")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

const personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  // favoriteFoods: [String],
});

personSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

personSchema.pre("save", async function () {
  this.firstName = "Luna";
  this.lastName = "Lunee";

  console.log("Persiapan menyimpan data...");
});

personSchema.post("save", async function () {
  console.log("Data berhasil disimpan...");
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  firstName: "John",
  lastName: "Doe",
  // favoriteFoods: ["Pizza", "Burger"],
});

// console.log(person.fullName);

person
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
