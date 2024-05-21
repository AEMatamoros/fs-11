const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

//Init Server instance
const app = express();
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
