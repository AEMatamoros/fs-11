console.log("Hola este es un saludo desde el script de js");
// Expresion
// Quiero sumar dos numeros
// num1 + num2 = res

// Variables
var x = 4;
let $n = 8;
let _m = 8;
var n = 3;
var w = 5;
console.log(x);
console.log($n);
console.log(_m);

var num1 = 3;
var num2 = 4;
var res;

res = num1 + num2;

console.log("Resultado de la suma", res);

var global = "Global";
let bloque = "Bloque";
const CONST = "Contante";

if (true) {
  let nombre = "Alexis";
  console.log(nombre);
  console.log(bloque);
}

// Error
// CONST = "Hola Amigo";
// console.log(CONST);
// console.log(nombre)

// String
let apellido = "Matamoros";
// Number
let edad = 27;
let precio = 27.6;
// Booleanos
let mayorDeEdad = true;
mayorDeEdad = false;
//Null
let vacio = null;
//Undefined
let sinAsignar = undefined;
let nombreCompletoDeUsuario = "Alexis Matamroos";
console.log(apellido, edad, precio, mayorDeEdad, vacio, sinAsignar);
console.log(
  typeof apellido,
  typeof edad,
  typeof precio,
  typeof mayorDeEdad,
  typeof vacio,
  typeof sinAsignar
);

// alert("Hola Bienvenidos");

// let nombre = prompt("ingresa tu nombre");
// console.log(nombre);

// let isLogged = confirm("El usuario esta logueado");
// console.log(isLogged);

console.log("Aritmetica");
console.log(9 + 3);
console.log(9 - 3);
console.log(9 * 3);
console.log(9 / 3);
console.log(27 % 5);

console.log(27 % 2);
console.log(26 % 2);
console.log(9 + (5 - 6) + 3 * 7);

let num4 = 4;
let num5 = ++num4;
console.log("num5", num5);
num5++;
console.log(num5);
// Logicos
console.log("1 < 5", 1 < 5);
console.log("3 > 7", 3 > 7);
console.log("5 == 7", 5 == 7);
console.log("6 != 4", 6 != 4);
console.log("5" == 5);
console.log("5" === 5);
console.log("5" != 5);
console.log("5" !== 5);

let resultado = "5.55";
console.log(typeof resultado);
console.log(Number(resultado));
console.log(parseInt(resultado));
console.log(parseFloat(resultado));
console.log(parseFloat(resultado).toFixed(1));

// Error
console.log(Number("resultado"));
console.log(isNaN(Number("resultado")));
console.log(isNaN(Number("5")));
console.log(isNaN(5));

// Redondeo
let numeroARedonder = 7.58;

console.log(Math.round(numeroARedonder));
console.log(Math.ceil(numeroARedonder));
console.log(Math.floor(numeroARedonder));
console.log(Math.random());

console.log(Math.min(1, 2, -4, 3, 4, 5, 6, 7));
console.log(Math.max(1, 2, -4, 3, 4, 5, 6, 7));
console.log(Math.pow(7, 2));

let tiene = " Tiene 23 dias ";
let estudiante = "Andres Jordan " + tiene;
let estudiante2 = `Carlos gomez ${tiene} `;
console.log(estudiante[5]);
console.log(estudiante);
console.log(estudiante2);
console.log(estudiante.length);
console.log(estudiante[estudiante.length - 1]);

console.log(estudiante.toLowerCase());
console.log(estudiante.toUpperCase());
console.log(estudiante.indexOf("A"));
console.log(estudiante.indexOf("WW"));

console.log(estudiante.includes("s"));
console.log(estudiante.endsWith("t"));
let estudianteUpdated = estudiante.replace("Andres", "Juan");
console.log(estudianteUpdated);
estudianteUpdated = estudiante.replaceAll("Andres", "Juan");
console.log(estudianteUpdated);
