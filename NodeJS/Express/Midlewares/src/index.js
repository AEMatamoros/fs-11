const express = require("express");
const movies = require("./db/db");
const app = express();

app.use(Midleware1);
app.use(Midleware2);

app.get("/", Midleware3, (req, res) => {
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

//Midlewares
function Midleware1(req, res, next) {
  console.log("Midleware1");
  req.accesfaketoken = "asdjkfhasdjkfhjkh123hjkwehn";
  next();
}

function Midleware2(req, res, next) {
  console.log("Midleware2");
  next();
}

function Midleware3(req, res, next) {
  console.log("Midleware3");
  next();
}
