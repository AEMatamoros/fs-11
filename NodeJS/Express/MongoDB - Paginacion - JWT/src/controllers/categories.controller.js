const categorieSchema = require("../schema/category.schema");

const getCategories = async (req, res, next) => {
  try {
    const categories = await categorieSchema.find();
    res.status(200).json({
      title: "Success",
      msg: "categories Obtained",
      result: categories,
    });
  } catch (error) {
    next(error);
  }
};

const createCategory = async (req, res, next) => {
  try {
    const newCategory = categorieSchema({
      title: req.body.title,
    });

    const createdCategory = await newCategory.save();

    res.status(200).json({
      title: "Success",
      msg: "categories Created",
      result: createdCategory,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCategories,
  createCategory,
};
