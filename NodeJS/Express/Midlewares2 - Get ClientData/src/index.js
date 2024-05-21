const express = require("express");
const cors = require("cors");
const movies = require("./db/db");
const app = express();

//Conf
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Rutas

app.get("/", (req, res) => {
  // console.log(req);
  res.status(200).json(movies);
});

app.get("/:id", (req, res) => {
  // Obtener parametros de url
  console.log(req.params);
  // Obtener query params
  console.log(req.query);
  // console.log(typeof req.params.id);
  try {
    if (parseInt(req.params.id) > movies.length) {
      res.status(400).json({ ok: false, error: "Not found" });
      return;
    }
    const movie = movies[parseInt(req.params.id)];
    res.status(200).json({
      ok: true,
      movie,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ ok: false, error: "Not found" });
  }
});

app.post("/", (req, res) => {
  //Obtener cuerpo de l apeticion conf midlewares json urlenconded
  console.log(req.body);
  console.log(req.body.data);
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
