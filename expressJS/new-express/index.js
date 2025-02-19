const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("we got request");
//   res.send("<h1>We got request</h1>");
//   // console.dir(req);
// });

app.get("/", (req, res) => {
  res.send("This is the home page");
});

app.get("/blog/:judul", (req, res) => {
  const { judul } = req.params;
  res.send(`This is the blog: ${judul}`);
});

app.get("/blog/:category/:judul/:author", (req, res) => {
  const { category, judul, author } = req.params;
  res.send(`This is the blog: ${category} | ${author}| ${judul} `);
});

app.get("/search", (req, res) => {
  // console.log(req.query);
  const { q } = req.query;
  if (!q) {
    res.send("Nothing found if nothing searched");
  }
  res.send(`<h1>Search result for: ${q}</h1>`);
});

app.get("/cats", (req, res) => {
  res.send("Meow");
});

app.get("*", (req, res) => {
  res.send("I don't know that path");
});

app.listen(8080, () => console.log("Server is running on port 8080"));
