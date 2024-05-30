const movieSchema = require("../../schema/movie.schema");

function movieSchemaValidation() {
  return movieSchema().validateSchema;
}

module.exports = movieSchemaValidation;
