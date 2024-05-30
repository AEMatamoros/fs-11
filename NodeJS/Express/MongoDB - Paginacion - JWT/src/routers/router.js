const appRouter = require("express").Router();
const userRouter = require("./user.router");
const moviesRouter = require("./movies.router");

appRouter.use("/user", userRouter);
appRouter.use("/movies", moviesRouter);

module.exports = appRouter;
