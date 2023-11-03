// Muestra el número total de manzanas y uvas. La diferencia entre las manzanas y las uvas.

const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total);
const diff = grapes - apples;
console.log(diff);

// Ejemplo 2 - Operadores combinados
// Sustituye la expresión de redefinición por el operador combinado +=.

let students = 100;
students += 50;
console.log(students);

// Example 3 - Prioridad de los operadores
// Analiza la prioridad de los operadores, en la instrucción para asignar un valor a la variable result.

const result = 108 + (223 - 2) * 5;
console.log(result);

// Ejemplo 4 - Clase Math
// Escriba un script que muestre
// en la consola los valores redondeados hacia abajo/arriba, etc.
// de la variable value. Use los métodos Math.floor(), Math.ceil() y Math.round().
// Comprueba lo que aparece en la consola con los valores 27.3 y 27.9.

const value = 27.9;
console.log(value);
console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(Math.round(value));

// Ejemplo 5 - Plantilla de cadena
// Escriba una frase utilizando una plantilla de cadena A has B bots in stock,
// donde A, B son variables insertadas en la cadena.

const companyName = "Go IT - Team";
const repairBots = 150;
const defenceBots = 50;
const message = `${companyName} has ${repairBots - defenceBots} bots in stock `;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Ejemplo 6 - Métodos de cadenas y encadenamiento
// Escriba un script que calcule el índice de masa corporal de una persona.
// Para ello divide el peso en kilogramos por el cuadrado de la altura de la persona en metros.
// El peso y la altura se almacenan en las variables weight y height, pero no como
// números, sino como cadenas (específicamente para esta tarea). Los números no enteros
// se pueden dar en forma de 24.7 o 24,7, es decir, la parte de la fracción puede estar
//  separada por una coma.
// El índice de masa corporal debe redondearse para que tenga solo una cifra después de la coma;

let weight = "88,3";
let height = "1.75";
weight = weight.replace(",", ".");
height = height.replace(",", ".");
weight = parseFloat(weight);
height = parseFloat(height);
let none = Math.pow(height, 2);

const bmi = (weight / none).toFixed(1);
console.log(bmi); // 28.8

// let res = (
//   parseFloat(weight.replace(",", ".")) /
//   Math.pow(parseFloat(height.replace(",", ".")), 2)
// ).toFixed(1);

// console.log(res);

// Ejemplo 7 - Operadores de comparación y conversión de tipos
// ¿Cuál sería el resultado de las expresiones?

console.log("Ejemplo 7");
console.log(5 > 4);

console.log(10 >= "7");

console.log("2" > "12");

console.log("2" < "12");

console.log("4" == 4);

console.log("6" === 6);

console.log("false" === false);

console.log(1 == true);

console.log(1 === true);

console.log("0" == false);

console.log("0" === false);

console.log("Papaya" < "papaya");

console.log("Papaya" === "papaya");

console.log(undefined == null);

console.log(undefined === null);

// Ejemplo 8 - Operadores lógicos
// ¿Cuál sería el resultado de las expresiones?

console.log("Ejercicio 8");
console.log(true && 3);

console.log(false && 3);

console.log(true && 4 && "kiwi");

console.log(true && 0 && "kiwi");

console.log(true || 3);

console.log(false || 3 || 4);

console.log(true || false || 7);

console.log(null || 2 || undefined);

console.log((1 && null && 2) > 0);

console.log(null || (2 && 3) || 4);
