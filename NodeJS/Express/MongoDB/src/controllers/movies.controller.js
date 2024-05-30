const movieSchema = require("../schema/movie.schema");
const getMoviesData = async (req, res) => {
  try {
    const movies = await movieSchema.find();
    res.status(200).json({
      title: "Success",
      msg: "Movies Obtained",
      result: movies,
    });
  } catch (error) {
    res.status(400).json({ ok: false, error: "Not found" });
  }
};

const getMovieById = async (req, res) => {
  try {
    const movie = await movieSchema.find({ _id: req.params.id });
    res.status(200).json({
      title: "Success",
      msg: "Movie Obtained",
      result: movie,
    });
  } catch (error) {
    // console.log(error);
    res.status(400).json({ ok: false, error: "Not found" });
  }
};

const createMovie = async (req, res) => {
  try {
    const newMovie = movieSchema({
      title: req.body.title,
      year: req.body.year,
      director: req.body.director,
    });
    const movie = await newMovie.save();
    res.status(200).json({
      title: "Success",
      msg: "Movies Created",
      result: movie,
    });
  } catch (error) {
    res.status(400).json({ ok: false });
  }
};

const updateMovie = async (req, res) => {
  try {
    const movie = await movieSchema.findByIdAndUpdate(
      req.params.id,
      {
        _id: req.params.id,
        title: req.body.title,
        year: req.body.year,
        director: req.body.director,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      title: "Success",
      msg: "Movie Updated",
      result: movie,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ ok: false });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const movie = await movieSchema.findOneAndDelete(req.params.id);
    res.status(200).json({
      title: "Success",
      msg: "Movie Deleted",
      result: movie,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ ok: false });
  }
};

module.exports = {
  getMoviesData,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};
