const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./db/config");
const dotenv = require("dotenv");
const handleError = require("./midlewares/utils/errorHandler");
if (process.env.NODE_ENV == "dev") {
  dotenv.config({ path: ".env.dev" });
} else {
  dotenv.config({ path: ".env" });
}
//init DB
connectDB();

//Init Server instance
const app = express();
//Conf
app.use(morgan());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const appRouter = require("./routers/router");

//External Routers
//Rutas
app.use("/api", appRouter);

//Error handler after routes declarations
app.use(handleError);

app.listen(3000, (req, res) => {
  console.log("Server in http://localhost:3000");
});
