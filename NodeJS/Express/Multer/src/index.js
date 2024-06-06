const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { uploader } = require("./midlewares/uploader");
const path = require("path");
if (process.env.NODE_ENV == "dev") {
  dotenv.config({ path: ".env.dev" });
} else {
  dotenv.config({ path: ".env" });
}

//Init Server instance
const app = express();
//Conf
app.use(morgan());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Ruta para exponer recursos estaticos
app.use("/files", express.static(path.join(__dirname, "files")));
//Rutas para almacernar archivos
app.post(
  "/single",
  uploader(path.join(__dirname, "files", "single"), "singleImages").single(
    "file"
  ),
  (req, res) => {
    console.log(req.file);
    //String a guardar en la bd
    console.log(req.file.filename);
    res.send("ok");
  }
);

app.post(
  "/multiple",
  uploader(path.join(__dirname, "files", "multiple"), "multiple").array(
    "files"
  ),
  (req, res) => {
    for (let index = 0; index < req.files.length; index++) {
      console.log(req.files[index].filename);
    }
    res.send("ok");
  }
);

app.post(
  "/fields",
  uploader(path.join(__dirname, "files", "fields"), "fields").fields([
    { name: "file" },
    { name: "file2" },
  ]),
  (req, res) => {
    console.log(req.files.file[0].filename);
    console.log(req.files.file2[0].filename);
    res.send("ok");
  }
);

app.get("/", (req, res) => {
  res.send("File Manager");
});
app.listen(3000, (req, res) => {
  console.log("Server in http://localhost:3000");
});
