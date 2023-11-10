// if(condicion){

// }
let teacherName = "Alexis";
// console.log(teacherName === "Alexis");
if (teacherName === "Alexis") {
  // console.log("Es el profe Alexis");
}

// if (condicion) {
// } else {
// }
// teacherName = "Alejandro";
if (teacherName === "Alexis") {
  // console.log("Es el profe Alexis - FS11");
} else {
  // console.log("Es otro profe");
}

// if (condicion) {
// } else if (condicion2) {
// } else {
// }
teacherName = "Eduardasaao";
if (teacherName === "Alexis") {
  console.log("Es el profe Alexis - FS11");
} else if (teacherName === "Eduardo") {
  console.log("Es el otro nombre del profe Alexis - FS11");
} else {
  // console.log("Es otro profe");
}

// let edad = 10;
// if (edad > 28) {
//   console.log("Descuento de 30%");
// } else if (edad > 25) {
//   console.log("Descuento de 15%");
// } else if (edad >= 20) {
//   console.log("Descuento de 10%");
// } else if (edad < 20) {
//   console.log("Sin descuento");
// }

// Bucles
let edad2 = 10;
do {
  console.log(edad2);
  edad2 = edad2 + 1;
  // edad2++;
  if (edad2 == 16) {
    // break;
    console.log("Hey cumpli 16");
  }
} while (edad2 < 18);

let listaMercado = 0;
// do {
//   console.log(`Faltan del mercado ${listaMercado} sin tachar de la lista`);
//   listaMercado = listaMercado - 1;
//   // listaMercado--;
// } while (listaMercado >= 0);

let listaFerreteria = 1;
// while (listaFerreteria > 0) {
//   console.log(
//     `Faltan de la ferreteria ${listaFerreteria} sin tachar de la lista`
//   );
//   listaFerreteria = listaFerreteria - 1;
//   // elemtosDeLaListaSinTachar2--;
// }

let mayorEdad = true;
// while (mayorEdad) {
//   console.log(`Si es mayor de edad`);
//   mayorEdad = false;
//   // elemtosDeLaListaSinTachar2--;
// }

mayorEdad = true;
// do {
//   console.log(`Si es mayor de edad`);
//   mayorEdad = false;
//   // elemtosDeLaListaSinTachar2--;
// } while (mayorEdad);

// for (let valor = 0; valor < 10; valor++) {
//   console.log("Esta es una iteracion del bucle Sumando 1 - " + valor);
// }

// for (let valor = 10; valor > 0; valor--) {
//   console.log("Esta es una iteracion del bucle Restando 1 - " + valor);
// }

let accion = "Escritura";
switch (accion) {
  case "Escritura":
    console.log("Acaba de escribir en la BD");
    break;
  case "Lectura":
    console.log("Acaba de leer en la BD");
    break;
  case "Actualizacion":
    console.log("Acaba de actualziar en la BD");
    break;
  case "Eliminado":
    console.log("Acaba de eliminar en la BD");
    break;
  default:
    console.log("Accion desconocida");
    break;
}
