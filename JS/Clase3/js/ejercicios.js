//// Ejemplo 1 - Operaciones básicas con un array

// 1. Crea un Array `genres` con lo elementos «Jazz» y «Blues».
// 2. Agrega «Rock n Roll» al final.
// 3. Muestra el primer elemento del Array en la consola.
// 4. Muestra el último elemento del Array en la consola.El código
//  debería funcionar para un array de cualquier longitud.
// 5. Elimina el primer elemento y muestralo en la consola.
// 6. Inserta "Country" y "Reggae" al principio del Array.
let genres = ["Jazz", "Blues"];
genres.push("Rock n Roll");
genres.splice(genres.length - 1, 0, "Rock n Roll");
console.log(genres);
console.log(genres[0]);
console.log(genres[genres.length - 1]);
let first = genres.shift();
console.log("First -", first);
// genres.unshift("Reggae");
// genres.unshift("Country");
console.log(genres);
// let newGenders = ["Reggae", "Country"];
// let allGenders = newGenders.concat(genres);
// console.log(allGenders);

genres.splice(0, 0, "Reggae", "Country");
console.log(genres);

//// Ejemplo 2 - Arrays y Cadenas
// Escribe un script para calcular el área de un rectángulo con lados cuyos
// valores se almacenan en la variable `values` en forma de cadena.
// Se garantiza que los valores están separados por un espacio.
const values = "8 11";
let dimensions = values.split(" ");
console.log(dimensions[0] * dimensions[1]);

//// Ejemplo 3 - Indexación de un Array
// Escribe un script para buscar en el array `fruits` con un bucle`for`
// Para cada elemento del Array, envía a la consola una cadena con el formato`número_de_elemento: valor_de_elemento`.
// La numeración de los elementos debe empezar por`1`.
const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

for (let index = 0; index < fruits.length; index++) {
  console.log(fruits[index] + ` - ${index + 1}`);
}

//// Ejemplo 4 - Arrays y bucles

// Escriba un script que muestre el nombre y el número de teléfono del usuario en la consola.
// En las variables `names` y `phones` se almacenan cadenas de nombres y números de teléfono, separados
// por comas.El índice de los nombres y números de teléfono en las líneas indica correspondencia.
// La cantidad de nombres y teléfonos debe de ser igual.
const names = "Jacob,William,Solomon,Artemis, JUAN, Joajn";
const phones = "89001234567,89001112233,890055566377,890055566300,3456";
let arrayName = names.split(",");
let arrayPhone = phones.split(",");

// if (arrayName.length === arrayPhone.length) {
//   for (let index = 0; index < arrayName.length; index++) {
//     console.log(
//       `El nombre de la persona es ${arrayName[index]}, y su telefono es ${arrayPhone[index]}`
//     );
//   }
// } else {
//   console.log("No es posible mostrar los numero");
// }

let maxIndex = arrayName.length;
if (maxIndex < arrayPhone.length) {
  maxIndex = arrayPhone.length;
}
for (let index = 0; index < maxIndex; index++) {
  console.log(
    `El nombre de la persona es ${
      arrayName[index] ? arrayName[index] : "Sin Nombre"
    }, y su telefono es ${arrayPhone[index] ? arrayPhone[index] : "#######"}`
  );
}

//// Ejemplo 6 - Arrays y cadenas

// Escriba un script que "invierta" la cadena(invierta el orden de las letras)
// y la muestre en la consola.

const message = "Welcome to the future";
let messageArray = message.split("");
let concatMessage = "";
for (let index = messageArray.length - 1; index >= 0; index--) {
  concatMessage = concatMessage + messageArray[index];
}
console.log(concatMessage);

console.log(messageArray.reverse().join(""));

//// Ejemplo 7 - Ordenar Arrays con un bucle

// Escribe un script para ordenar un array de cadenas en orden alfabético
// según la primera letra elemento.
const langs = ["python", "javascript", "c++", "haskel", "zz", "php", "ruby"];
console.log(langs.sort());
console.log(langs.reverse());

const numeros = [1, 6, 23, 546, 7, 2, 3];
console.log(numeros.sort());
console.log(numeros.sort((a, b) => a - b));
console.log(numeros.sort((a, b) => b - a));

//// Ejemplo 8 - Buscar un elemento

// Escribe un script para encontrar el número más pequeño en el Array.El código
// debería funcionar para cualquier Array de números.Utiliza un bucle para resolver el problema.
const numbers = [2, 17, 94, 1, 23, -70, 37, -5, -100];
let min = numbers[0];
for (let number of numbers) {
  // console.log(number);
  if (number < min) {
    min = number;
    // console.log(min);
  }
}

console.log(min);
