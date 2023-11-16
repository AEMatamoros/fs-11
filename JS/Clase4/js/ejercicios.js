// Módulo 2. Clase 4. Funciones

//// Ejemplo 1 - Índice de masa corporal

// Escribe una función `calcBMI(weight, height)` que calcule y retorne el índice de masa
// corporal de una persona.Para ello, divide el peso en kilogramos por
// el cuadrado de la altura de la persona en metros.

// El peso y la altura se podrán seran dados específicamente como cadenas.Las fracciones
// se pueden dar de estas maneras `24.7` o`24,7`, es decir, el separador de fracciones
// puede ser una coma.

// El índice de masa corporal debe redondearse a un decimal;
let weight = 88.3;
let height = 1.75;

function calcBMI(weight, height) {
  return weight / Math.pow(height, 2).toFixed(1);
}

let userBMI = calcBMI(weight, height);
console.log(userBMI);
console.log(calcBMI(weight, height));

//// Ejemplo 2 - El menor de los números
// Escribe una función `min(a,b)` que devuelva el menor de los números `a` y`b`.
function min(number1, number2) {
  return number1 > number2 ? number2 : number1;
}

console.log(min(4, 5));

function min2(number1, number2) {
  let minvalue;
  if (number1 > number2) {
    minvalue = number2;
  } else {
    minvalue = number1;
  }
  //Bloque de codigo
  return minvalue;
}

console.log(min2(4, 5));

function min3(number1, number2) {
  if (number1 > number2) {
    return number2;
  }
  console.log("Se ejecuto la segunda cnodicional");
  if (number1 < number2) {
    return number1;
  }
}

console.log(min3(7, 4));

// Como gestionar una cantidad indefinida de numeros?

function min4(...numbers) {
  // console.log(numbers);
  if (numbers.length === 0) {
    console.log("Necesita por lo menos un valor para evaluar el minimo");
    return;
  }
  // return numbers.sort((a, b) => a - b)[0];
  let sortedNumbers = numbers.sort((a, b) => a - b);
  return sortedNumbers[0];
}

console.log(min4(7, 4.6, 7, 7, 8, 89, 945, 456, 456, 6, 0, -4));

//// Ejemplo 3 - Área del rectángulo

// Escribe una función `getRectArea(dimensions)` para calcular el área de un rectángulo
// con los lados cuyos valores estaran en el parámetro `dimensiones` en forma de cadena.
// Asegurate de que los valores estén separados por un espacio.

let dimensions = "8 11";

function getRectArea(dimensions) {
  let dimensionsArray = dimensions.split(" ");
  return parseInt(dimensionsArray[0]) * parseInt(dimensionsArray[1]);
}

console.log(getRectArea(dimensions));

//// Ejemplo 6 - Encontrar el elemento más grande

// Escribe una función `findLargestNumber(numbers)` que busque el número
// más grande del Array.

function findLargestNumber(numbers) {
  // return Math.max(...numbers);
  // return numbers.sort((a, b) => b - a)[0];
  // return numbers.sort((a, b) => a - b)[numbers.length - 1];
  let aux = numbers[0];
  for (let number of numbers) {
    if (aux < number) {
      aux = number;
    }
  }
  return aux;
}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94

//// Ejemplo 7 - Valor promedio

// Escriba una función `calAverage()` que tome un número arbitrario de argumentos
// y vuelva su valor promedio.Todos los argumentos serán sólo números.
// calAverage(...args)
function calAverage(...numbers) {
  // let numberOfElements = numbers.length;
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  // return total / numberOfElements;
  return total / numbers.length;
}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
