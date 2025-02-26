const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/Shop_App")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  color: {
    type: String,
    required: true,
  },
  size: [
    {
      type: String,
      required: true,
    },
  ],

  description: {
    type: String,
    required: true,
    maxLength: 150,
  },

  condition: {
    type: String,
    enum: ["Baru", "Bekas", "Refurbished"],
    required: true,
    default: "Baru",
  },

  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },

  availability: {
    online: {
      type: Boolean,
      required: true,
      // default: true,
    },
    offline: {
      type: Boolean,
      required: true,
      // default: false,
    },
  },
});

const Product = mongoose.model("Product", productSchema);

// const tshirt = new Product({
//   name: "T-Shirt",
//   price: 10000,
// });

// tshirt
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Product.create({
//   name: "Kemeja Flanel",
//   price: 200000,
//   color: "Merah",
//   size: ["M", "L", "XL"],
//   description: "Kemeja Flanel Merah",
//   condition: "Baru",
//   stock: 10,
//   availability: {
//     online: true,
//     offline: false,
//   },
// })
//   .then((result) => console.log("Produk berhasil ditambahkan:", result))
//   .catch((err) => console.error("Gagal menambahkan produk:", err));

// Update

// Product.findOneAndUpdate(
//   { name: "Kemeja Flanel" }, // Kondisi untuk mencari data
//   {
//     $set: { price: 180000, stock: 15 }, // Data yang akan diupdate
//   },
//   { new: true, runValidators: true } // Opsi: new=true agar mengembalikan data setelah update
// )
//   .then((updatedProduct) => {
//     if (!updatedProduct) {
//       console.log("Produk tidak ditemukan");
//     } else {
//       console.log("Produk berhasil diperbarui:", updatedProduct);
//     }
//   })
//   .catch((err) => console.error("Gagal memperbarui produk:", err));
