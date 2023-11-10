// Módulo 1. Clase 2. Oraciones condicionales. Bucles
//// Ejemplo 1 - Entrada del usuario y oración condicional
// Utilizando la construcción if..else y prompt, escribe un código que pregunte:
// `¿Cuál es el nombre oficial de JavaScript?` Si el usuario introduce `ECMAScript`,
// entonces muestra una alerta con la cadena `"¡Correcto!"`, en caso contrario,
// `"¿No lo sabes? ECMAScript"`.

// let message = prompt("¿Cuál es el nombre oficial de JavaScript?");

// if (message.toLowerCase().trim() === "ECMAScript".toLocaleLowerCase()) {
//   alert("Correcto");
// } else {
//   alert("¿No lo sabes? ECMAScript");
// }

//// Ejemplo 2 - Visualización de la hora (if...else)
// Escribe un script para mostrar las horas y los minutos en la consola del navegador
// como una cadena con el formato `"14 h. 26 min"`. Si el valor de la variable `minutes` es `0`, entonces
// muestra la cadena `"14 h"`, sin minutos.

const hours = 14;
const minutes = 10;
let timestring;

if (minutes !== 0) {
  timestring = `${hours} h. ${minutes} min`;
} else {
  timestring = `${hours} h`;
}

// console.log(timestring);

//Operador Ternario
// let resultado = condicion ? "Si es Verdadero" : "Si es falso";
timestring = minutes !== 0 ? `${hours} h. ${minutes} min` : `${hours} h`;
console.log(timestring);

let edad = 17;
let message = edad >= 18 ? "Es mayor de edad" : "Es menro de edad";
console.log(message);

//// Ejemplo 3 - Oración condicional
// Escriba un script que muestre en la consola la cadena `"Este es un número positivo"`, si el
// usuario ha introducido un número mayor que cero en el prompt. Si se ha introducido un cero,
// la respuesta en la consola es la cadena `"Esto es cero"`.Si se introduce un número negativo,
// en la consola debe aparecer la cadena `"Este es un número negativo"`.

// let numero = parseFloat(prompt("Ingrese un numero"));

// if (numero > 0) {
//   alert("Positivo");
// } else if (numero === 0) {
//   alert("Cero");
// } else {
//   alert("Negativo");
// }

//// Ejemplo 5 - Formato del link (endsWith)
// Escriba un script que compruebe si el valor de la variable `link` no termina  con `/`. Si no es
// así, añada dicho símbolo al final del valor de `link`. Utilice la construcción `if...else`.
let link = "https://my-site.com/about/";

// console.log(link.endsWith("/"));

if (!link.endsWith("/")) {
  link = link + "/";
}

// console.log(link);

//// Ejemplo 6 - Formato del link (includes y lógica «Y»)
// Escriba un script que compruebe si el valor de la variable `link` no termina con `/`.
// Si no es así, añada dicho símbolo al final del valor de `link`, pero sólo si en `link` hay
// una subcadena `"my-site"`. Utilice la construcción `if...else`.

let link2 = "https://my-site.com/about2";
// && AND
// || OR
if (!link2.endsWith("/") && link2.includes("my-site")) {
  link2 = link2 + "/";
}

console.log(link2);

//// Ejemplo 6 - Formato del link (operador ternario)
// Refactoriza la tarea número 4 utilizando el operador ternario.

let link3 = "https://my-.com/about3";
// && AND
// || OR
// if (!link3.endsWith("/") && link3.includes("my-site")) {
//   link3 = link3 + "/";
// }

link3 = !link3.endsWith("/") && link3.includes("my-site") ? link3 + "/" : link3;

console.log(link3);

//// Ejemplo 10 - Plazo de entrega del proyecto (switch)

const productHours = 1;
switch (productHours) {
  case 1:
    console.log("Horas hasta que paguen 1");
    break;
  case 2:
    console.log("Horas hasta que paguen 2");
    break;
  case 3:
    console.log("Horas hasta que paguen 3");
    break;
  default:
    console.log("No Ingresa");
    break;
}

console.log(0 && "mango");
