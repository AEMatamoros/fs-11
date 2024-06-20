const appRouter = require("express").Router();
const userRouter = require("./user.router");
const moviesRouter = require("./movies.router");
const categoriesRouter = require("./categories.router");
const { validateJWT } = require("../midlewares/utils/validateJWT");

appRouter.use("/user", userRouter);
appRouter.use("/movies", validateJWT, moviesRouter);
appRouter.use("/categories", validateJWT, categoriesRouter);

module.exports = appRouter;
