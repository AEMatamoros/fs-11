const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Se envio la notificacion");
});

app.listen(3000, () => {
  console.log("Server in http://localhost:3000/");
});
