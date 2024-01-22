// Variables y Tipos:

// Declara una variable llamada nombre y asígnale tu nombre.
let nombre = "Alexis";

// Crea una variable edad y asígnale tu edad.
let edad = 27;
// Tipos de datos Primitivos
// Boolean;
// String;
// Number;
// null;
// undefined;

// Tipos de datos No - Primitivos
// Objetos
// Arreglos

// Declara una constante llamada PI y asígnale el valor de 3.14159.
const VARIABLE_CONSTANTE = 3.14159;

// Define una variable esEstudiante y asígnale un valor booleano.
var esEstudiante = false;

// Crea una variable frutas y asígnale un array con tres nombres de frutas.
let random = [1, true, { nombre: "Alexis" }, [1, 2, 3, 4], "Cadena"];
let frutasRandom = ["Tomate", "Banano", "Manzana", "Fresa", "Pera"];

// Declara una variable informacion y asígnale un objeto con tu nombre, edad y ciudad.
let informacion = { nombre: "random", edad: "random", ciudad: "random" };

// Derivaciones y Ciclos:
// Escribe un bucle que imprima los números del 1 al 10.
for (let index = 0; index < 10; index++) {
  //   console.log(index + 1);
}
// Crea un bucle que imprima los números pares del 2 al 20.
for (let index = 1; index < 21; index++) {
  if (index % 2 === 0) {
    // console.log(index);
  }
}
// Utiliza un bucle while para contar hacia atrás desde 10 hasta 1.
let num = 10;
while (num > 0) {
  //   console.log(num);
  num -= 1;
}
// Escribe una función que sume todos los números del 1 al 100.
function sum1To100() {
  let total = 0;
  for (let index = 1; index <= 100; index++) {
    total = total + index;
  }
  return total;
}
// console.log(sum1To100());
// Implementa un bucle for que itere sobre un array e imprima cada elemento.
let frutasRandom2 = ["Tomate", "Banano", "Manzana", "Fresa", "Pera"];
for (let index = 0; index < frutasRandom2.length; index++) {
  //   console.log(frutasRandom2[index]);
}
// Crea una función que imprima los números impares del 1 al 15.
for (let index = 1; index < 16; index++) {
  if (!(index % 2 == 0)) {
    // console.log(index);
  }
}

// Arreglos:
// Declara un array numeros con cinco números enteros.
let numeros = [1, 2, 334, 4, 5];
// Añade un nuevo número al final del array creado en el ejercicio anterior.
numeros.push(6);
// console.log(numeros);
// Elimina el segundo elemento del array numeros que creaste antes.
numeros.splice(1, 1);
// console.log(numeros);
numeros.splice(3, 1, 1, 2, 3, 4, 2, 3, 4, 5);
// console.log(numeros);

// Crea una función que reciba un array de números y devuelva la suma de todos ellos.
function sumNumbers(numbers) {
  return numbers.reduce((prev, act) => {
    //   console.log(prev, act);
    return prev + act;
  }, 0);
}
// console.log(sumNumbers(numeros));
// Utiliza el método slice para obtener una porción del array numeros.
// console.log(numeros);
// console.log(numeros.slice(1, 4));
// // Invierte el orden de los elementos en el array numeros.
// // console.log(frutasRandom.reverse());
// console.log(numeros.reverse());
// // Ordenamientos
// console.log([...numeros].sort((a, b) => a - b));
// console.log([...numeros].sort((a, b) => b - a));

// Funciones:
// Crea una función que acepte dos parámetros y devuelva su suma.
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(7, 9));
// Define una función que determine si un número es par o impar y devuelva un mensaje.
const isOdd = (num) => {
  return num % 2 == 0 ? "Is Odd" : "Is Even";
};

// console.log(isOdd(7));
// console.log(isOdd(5));
// console.log(isOdd(10));
// console.log(isOdd(12));

function useRegex(input) {
  let regex = /\[[^\]]*\]/i;
  return input.match(regex);
}

console.log(useRegex("Juan [Hola Alexis] Tema"));
