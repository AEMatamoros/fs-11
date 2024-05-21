const express = require("express");
const movies = require("./db/db");
const app = express();

app.get("/", (req, res) => {
  // res.send(movies);
  console.log(req);
  res.status(200).json(movies);
});

app.post("/", (req, res) => {
  res.status(201).json(movies);
});

app.put("/", (req, res) => {
  res.status(200).json(movies);
});

app.delete("/", (req, res) => {
  res.status(200).json(movies);
});

app.listen(3000, (req, res) => {
  console.log("Server in http://localhost:3000");
});
