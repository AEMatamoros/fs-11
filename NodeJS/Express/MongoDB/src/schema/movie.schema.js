const { Schema, model } = require("mongoose");

const movieSchema = Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  director: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = model("moviesSchema", movieSchema);
