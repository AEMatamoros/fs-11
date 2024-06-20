const router = require("express").Router();
const path = require("path");
const {
  getMoviesData,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movies.controller");
const {
  movieSchemaValidation,
} = require("../midlewares/validations/schemaValidators");
const { uploader } = require("../midlewares/utils/upload");
router.get("/", getMoviesData);

router.get("/:id", getMovieById);

router.post(
  "/",
  uploader(path.join(__dirname, "..", "files")).single("file"),
  movieSchemaValidation(),
  createMovie
);

router.put("/:id", updateMovie);

router.delete("/:id", deleteMovie);

module.exports = router;
