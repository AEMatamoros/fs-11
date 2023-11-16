// function functionName( param1, param2, param3){
//   //Code section
//    return returnvalue;
// }

//Funcion Inicial
// function sayHello() {
//   // Log dentro de la funcion
//   console.log(`Hola Bienvenido`);
// }
// // console.log(sayHello);
// // Log del return de la funcion
// console.log(sayHello());

// // Funcion con parametros
// function sayHello(nombre) {
//   // Log dentro de la funcion
//   console.log(`Hola Bienvenido ${nombre}`);
// }
// // console.log(sayHello);
// // Log del return de la funcion
// let nombrePersona = "Yordany";
// sayHello("Alexis");
// sayHello(nombrePersona);
// sayHello("Juan");

//Funcion con valor de retorno
function calculateAge(nacimiento) {
  return 2023 - nacimiento;
}
function sayHello(nombre, apellido, nacimiento) {
  // Log dentro de la funcion
  return `Hola Bienvenido ${nombre} ${apellido} y su edad es : ${calculateAge(
    nacimiento
  )}`;
}
// console.log(sayHello);
// Log del return de la funcion
// let nombrePersona = "Yordany";
// let saludo = sayHello("Alexis", "Banner", 1996);
// console.log(saludo);
// console.log(sayHello("John", "Doe", 1996));

// // Ejemplo Scope
// var global = "Global";
// let bloque = "Bloque";
// const CONSTANTE = "CONSTANTE";

// function logVarScope() {
//   console.log("Function: ", global);
//   console.log("Function: ", bloque);
//   console.log("Function: ", CONSTANTE);
// }
// logVarScope();

// console.log("OUT: ", global);
// console.log("OUT: ", bloque);
// console.log("OUT: ", CONSTANTE);

function funcion1() {
  console.log("Antes de llamar a la funcion 2");
  console.log(funcion2());
  console.log("Despues de llamar a la funcion 2");
  console.log("Antes de llamar a la funcion 3");
  console.log(funcion3());
  console.log("Despues de llamar a la funcion 3");
}

function funcion2() {
  console.log(funcion4());
  return "Yo soy la funcion 2";
}
function funcion3() {
  return "Yo soy la funcion 3";
}
function funcion4() {
  return "Yo soy la funcion 4";
}

funcion1();

// No llamar excede el TransformStream;o permito de lalamdos
// let count = 1;
// function llamados() {
//   console.log("Llamado " + count);
//   count++;
//   llamados();
// }

// llamados();

function sumar(num1, num2) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  // Ocurre un error
  // console.log(arguments.push(4));
  console.log(arguments);
  return num1 + num2;
}

console.log(sumar(7, 4));

function sumar2(...args) {
  console.log(args.push(4));
  console.log("Primero", args[0]);
  console.log(args);
  // return num1 + num2;
}

console.log(sumar2(7, 4));
