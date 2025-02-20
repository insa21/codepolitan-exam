const path = require("path");
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
  {
    id: uuidv4(),
    name: "John",
    comment: "heloo broo, menarik nihhh",
    date: "2021-01-01",
    time: "12:00",
    image: "https://picsum.photos/200/300",
    likes: 100,
    dislikes: 2,
  },
  {
    id: uuidv4(),
    name: "Jane",
    comment: "This is a comment",
    date: "2021-01-01",
    time: "12:00",
    image: "https://picsum.photos/200/300",
    likes: 40,
    dislikes: 2,
  },
  {
    id: uuidv4(),
    name: "jony",
    comment: "komennnn",
    date: "2021-01-01",
    time: "12:00",
    image: "https://picsum.photos/200/300",
    likes: 30,
    dislikes: 2,
  },
  {
    id: uuidv4(),
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

app.get("/comments/create", (req, res) => {
  res.render("comments/create");
});

app.post("/comments", (req, res) => {
  const { likes, name, comment } = req.body;
  comments.push({ likes, name, comment, id: uuidv4() });
  res.redirect("comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newComment = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newComment;
  res.redirect("/comments");
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
