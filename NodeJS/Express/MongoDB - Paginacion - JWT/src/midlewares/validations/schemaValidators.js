const userSchema = require("../../schema/user.schema");
const movieSchema = require("../../schema/movie.schema");
const categorySchema = require("../../schema/category.schema");

function userSchemaValidation() {
  return userSchema().validateSchema;
}
function movieSchemaValidation() {
  return movieSchema().validateSchema;
}
function categorySchemaValidation() {
  return categorySchema().validateSchema;
}

module.exports = {
  userSchemaValidation,
  movieSchemaValidation,
  categorySchemaValidation,
};
