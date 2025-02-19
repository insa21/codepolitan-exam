const path = require("path");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
  {
    name: "John",
    comment: "heloo broo, menarik nihhh",
    date: "2021-01-01",
    time: "12:00",
    image: "https://picsum.photos/200/300",
    likes: 100,
    dislikes: 2,
  },
  {
    name: "Jane",
    comment: "This is a comment",
    date: "2021-01-01",
    time: "12:00",
    image: "https://picsum.photos/200/300",
    likes: 40,
    dislikes: 2,
  },
  {
    name: "jony",
    comment: "komennnn",
    date: "2021-01-01",
    time: "12:00",
    image: "https://picsum.photos/200/300",
    likes: 30,
    dislikes: 2,
  },
  {
    name: "jeny",
    comment: "no commennt",
    date: "2021-01-01",
    time: "12:00",
    image: "https://picsum.photos/200/300",
    likes: 10,
    dislikes: 2,
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/biodata", (req, res) => {
  res.send("Get Biodata Response");
});

app.post("/biodata", (req, res) => {
  console.log(req.body);
  res.send("Post Biodata Response");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
