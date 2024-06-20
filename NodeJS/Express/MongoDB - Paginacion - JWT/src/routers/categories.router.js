const categoriesRouter = require("express").Router();
const {
  getCategories,
  createCategory,
} = require("../controllers/categories.controller");
const {
  categorySchemaValidation,
} = require("../midlewares/validations/schemaValidators");
categoriesRouter.get("/", getCategories);
categoriesRouter.post("/", categorySchemaValidation(), createCategory);

module.exports = categoriesRouter;
