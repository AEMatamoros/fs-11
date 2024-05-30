const Joi = require("joi");
const { Schema, model } = require("mongoose");

const userSchema = Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  mail: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
});

const validationSchema = Joi.object({
  username: Joi.string().required(),
  mail: Joi.string().required(),
  password: Joi.string().required(),
});

userSchema.methods.validateSchema = (req, res, next) => {
  const { error } = validationSchema.validate(req.body);
  if (error) {
    next(error);
    return;
  }
  next();
};

module.exports = model("userSchema", userSchema);
