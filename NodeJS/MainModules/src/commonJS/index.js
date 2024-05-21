// console.log("Modulos");
// const os = require("node:os");

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.version());
// // console.log(os.cpus());
// console.log(os.totalmem() / 1024 / 1024);
// console.log(os.freemem());

const path = require("path");

// console.log(path.sep);

// console.log(path.join("carpeta1", "carpeta2", "carpeta3"));
// console.log(path.dirname("./files/test.txt"));
// console.log(path.basename("./files/test.txt"));
// console.log(path.extname("./files/test.txt"));

const fs = require("fs");

console.log("Hola");
const testFile = fs.readFileSync(
  path.join(__dirname, "files", "test.txt"),
  "utf-8"
);
console.log(testFile);
console.log("Adios");
// console.log(testFile);
console.log("Hola");
const testFileAsync = fs.readFile(
  path.join(__dirname, "files", "test.txt"),
  "utf-8",
  (err, text) => {
    if (err) {
      console.log("Error al Cargar");
      return;
    }
    console.log(text);
  }
);
console.log("Adios");
// const
