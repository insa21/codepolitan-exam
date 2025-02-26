const mongoose = require("mongoose");

// Koneksi ke MongoDB dengan opsi tambahan
mongoose
  .connect("mongodb://127.0.0.1:27017/realation_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error: ", err);
  });

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  season: {
    type: String,
    enum: ["spring", "summer", "fall", "winter"],
    required: true,
  },
});

const farmSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

const Product = mongoose.model("Product", productSchema);
const Farm = mongoose.model("Farm", farmSchema);

// Product.insertMany([
//   {
//     name: "Mellon",
//     price: 9,
//     season: "summer",
//   },
//   {
//     name: "Watter Melon",
//     price: 11,
//     season: "summer",
//   },
//   {
//     name: "Kiwi",
//     price: 8,
//     season: "summer",
//   },
// ]);

// console.log("Product saved successfully");
// console.log(Product);

const makeFarm = async () => {
  const farm = new Farm({
    name: "Full Belly Farms",
    city: "Guinda, CA",
  });
  const melon = await Product.findOne({ name: "Mellon" });
  farm.products.push(melon);
  await farm.save();
  console.log(farm);
};

makeFarm();
