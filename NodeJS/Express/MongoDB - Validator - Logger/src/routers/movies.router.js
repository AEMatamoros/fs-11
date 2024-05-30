const router = require("express").Router();
const {
  getMoviesData,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movies.controller");
const movieSchemaValidation = require("../midlewares/validations/movieSchema");
router.get("/", getMoviesData);

router.get("/:id", getMovieById);

router.post("/", movieSchemaValidation(), createMovie);

router.put("/:id", updateMovie);

router.delete("/:id", deleteMovie);

module.exports = router;
