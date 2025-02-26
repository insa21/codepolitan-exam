const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

userSchema.statics.findByCredentials = async function (username, password) {
  const user = await this.findOne({ username });

  if (!user) {
    console.log("User not found!"); // Debugging
    return null; // Kembalikan null jika user tidak ditemukan
  }

  const isMatch = await bcrypt.compare(password, user.password);
  return isMatch ? user : null;
};

module.exports = mongoose.model("User", userSchema);
