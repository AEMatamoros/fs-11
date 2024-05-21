const router = require("express").Router();
const {
  getMoviesData,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movies.controller");

router.get("/", getMoviesData);

router.get("/:id", getMovieById);

router.post("/", createMovie);

router.put("/", updateMovie);

router.delete("/", deleteMovie);

module.exports = router;
