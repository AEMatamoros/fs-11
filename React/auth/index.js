require("dotenv").config();
const express = require("express");
const { dbConection } = require("./database/config");
var cors = require("cors");
dbConection();
const app = express();
app.use(cors());
//Public directori
app.use(express.static("public"));
//Parse Body
app.use(express.json());

app.use("/api/auth", require("./routes/auth-routes"));
app.use("/api/tasks", require("./routes/tast-routes"));

app.listen(process.env.PORT, (req, res) => {
  console.log("Server in port 4000");
});
