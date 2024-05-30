const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./db/config");
const dotenv = require("dotenv");

if (process.env.NODE_ENV == "dev") {
  dotenv.config({ path: ".env.dev" });
} else {
  dotenv.config({ path: ".env" });
}

//Init Server instance
const app = express();
//init DB
connectDB();
//External Routers
const appRouter = require("./routers/router");

//Conf
app.use(morgan());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Rutas
app.use("/api", appRouter);

app.listen(3000, (req, res) => {
  console.log("Server in http://localhost:3000");
});
