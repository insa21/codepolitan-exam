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

// Schema User dengan array addresses
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  addresses: [
    {
      street: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
    },
  ],
});

const User = mongoose.model("User", userSchema);

// Relasi Data One To Few

// const makeUser = async () => {
//   try {
//     const user = new User({
//       name: "John Doe",
//       addresses: [
//         {
//           street: "123 Main St",
//           city: "New York",
//           country: "USA",
//         },
//       ],
//     });

//     const res = await user.save();
//     console.log("User saved successfully:", res);
//   } catch (error) {
//     console.error("Error saving user:", error);
//   }
// };

// makeUser();

const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push({
    street: "321 main st",
    city: "anytown",
    country: "INA",
  });

  const res = await user.save();
  console.log(res);
};

addAddress("67bebc50ab92f5e7c7f7f653");
