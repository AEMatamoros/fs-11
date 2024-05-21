const movies = require("../db/db");

const getMoviesData = (req, res) => {
  res.status(200).json(movies);
};

const getMovieById = (req, res) => {
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
};

const createMovie = (req, res) => {
  //Obtener cuerpo de l apeticion conf midlewares json urlenconded
  console.log(req.body);
  console.log(req.body.data);
  res.status(201).json(movies);
};

const updateMovie = (req, res) => {
  res.status(200).json(movies);
};

const deleteMovie = (req, res) => {
  res.status(200).json(movies);
};

module.exports = {
  getMoviesData,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};
