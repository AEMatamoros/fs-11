const movieSchema = require("../schema/movie.schema");
const createMovieService = async (
  title,
  year,
  director,
  description,
  category
) => {
  const newMovie = movieSchema({
    title,
    year,
    director,
    description,
    category,
  });

  return await newMovie.save();
};

module.exports = {
  createMovieService,
};
