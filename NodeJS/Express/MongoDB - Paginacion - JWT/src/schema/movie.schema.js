const Joi = require("joi");
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
  description: {
    type: String,
    minLength: 5,
    maxLength: 10,
    required: true,
  },
  date_created: {
    type: Date,
    default: Date.now(),
    // timestaps: true, //Fecha creada por mongo
  },
  hasGrammy: {
    type: Boolean,
    default: false,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "categoriesSchema",
    required: true,
  },
});

const validationSchema = Joi.object({
  title: Joi.string().required(),
  year: Joi.number().required(),
  director: Joi.string().required(),
  description: Joi.string().min(5).max(10),
  hasGrammy: Joi.boolean(),
  category: Joi.string().required(),
});

movieSchema.methods.validateSchema = (req, res, next) => {
  const { error } = validationSchema.validate(req.body);
  if (error) {
    next(error);
    return;
  }
  next();
};

module.exports = model("moviesSchema", movieSchema);
