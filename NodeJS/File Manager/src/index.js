// Path Acceder a metodos del directorio del sistema
// Os Acceder a metodos que brindan informacion del sistema
// Fs Acceder a metodos y atributos de manejo de archivos
// Readline Leer entradas del usuario

const fs = require("node:fs");
const readline = require("node:readline");
const path = require("node:path");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("Hola cual es tu nombre ", (userInput) => {
//   console.log(userInput);
// });

function showMenu() {
  console.log("Gestor de archivos GOIT Team");
  console.log("0 - Ler archivo");
  console.log("1 - Crear Archivo");
  console.log("2 - Editar Archivo");
  console.log("3 - Eliminar Archivo");
  console.log("4 - Salir");
}

function main() {
  showMenu();
  rl.question("Seleccione una opcion : ", (choice) => {
    switch (choice) {
      case "0":
        rl.question(
          "Escribe el nombre del archivo mas su extension : ",
          (fileName) => {
            readAndDisplayFile(fileName);
          }
        );
        break;
      case "1":
        rl.question("Escribe el nombre del archivo a crear : ", (fileName) => {
          rl.question("Escribe el contenido : ", (content) => {
            createFile(fileName, content);
          });
        });
        break;
      case "2":
        rl.question("Escribe el nombre del archivo a editar : ", (fileName) => {
          rl.question("Escribe el contenido nuevo: ", (content) => {
            editFile(fileName, content);
          });
        });
        break;
      case "3":
        rl.question(
          "Escribe el nombre del archivo a eliminar : ",
          (fileName) => {
            deleteFile(fileName);
          }
        );
        break;
      case "4":
        process.exit(0);
        break;
      default:
        console.log("Opcion equivocada");
        main();
        break;
    }
  });
}

main();

function readAndDisplayFile(name) {
  fs.readFile(createDir(name), "utf-8", (err, data) => {
    if (err) {
      console.log("Ocurrion un erro al leer el archivo");
      return;
    }
    console.log(data);
    main();
  });
}

function createFile(name, content) {
  fs.writeFile(createDir(name), content, (err) => {
    if (err) {
      console.log(
        "Ocurrion un error al crear el archivo en : " + createDir(name)
      );
      main();
    }
    console.log("Archivo creado");
    main();
  });
}
function editFile(name, content) {
  fs.readFile(createDir(name), "utf-8", (err, data) => {
    if (err) {
      console.log("Ocurrion un erro al leer el archivo");
      return;
    }
    fs.writeFile(createDir(name), content, (err) => {
      if (err) {
        console.log(
          "Ocurrion un error al editar el archivo en : " + createDir(name)
        );
        main();
      }
      console.log("Archivo Editado");
      main();
    });
  });
}

function deleteFile(name) {
  fs.unlink(createDir(name), (err) => {
    if (err) {
      console.log("Ocurrion un error al eliminar el archivo");
      return;
    }
    console.log("Eliminado con exito");
    main();
  });
}
function createDir(name) {
  return path.join(__dirname, "files", name);
}
