const Joi = require("joi");
const { Schema, model } = require("mongoose");

const categorySchema = Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
});

const validationSchema = Joi.object({
  title: Joi.string().required(),
});

categorySchema.methods.validateSchema = (req, res, next) => {
  const { error } = validationSchema.validate(req.body);
  if (error) {
    next(error);
    return;
  }
  next();
};

module.exports = model("categoriesSchema", categorySchema);
