const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const session = require("express-session");
const User = require("./models/user");

const app = express();

// Koneksi ke MongoDB
mongoose
  .connect("mongodb://127.0.0.1/auth_db")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views", "views");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "notasecreet",
    resave: false,
    saveUninitialized: false,
  })
);

// Middleware autentikasi
const auth = async (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect("/login");
  }
  const user = await User.findById(req.session.user_id);
  if (!user) {
    req.session.destroy();
    return res.redirect("/login");
  }
  req.user = user; // Simpan user di req untuk digunakan di route lain
  next();
};

// Routes
app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  req.session.user_id = user._id;
  res.redirect("/");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findByCredentials(username, password);

  if (!user) {
    console.log("Invalid username or password"); // Debugging
    return res.status(400).send("Invalid username or password");
  }

  req.session.user_id = user._id;
  res.redirect("/admin");
});

app.post("/logout", auth, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return res.redirect("/admin");
    }
    res.redirect("/login");
  });
});

app.get("/admin", auth, (req, res) => {
  res.render("admin");
});

app.get("/profile/settings", auth, (req, res) => {
  res.send("Profile Settings: " + req.session.user_id);
});

app.listen(3000, () => {
  console.log("App listening on http://localhost:3000");
});
