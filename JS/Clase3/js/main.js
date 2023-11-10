// let
// var
// const

let autos = ["Toyota", "Hyundai", "Ferrari"];
console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

console.log("Tamano total ", autos.length);
// Error al acceder al ultimo elemento
console.log("El ultimo elemento del arreglo es : ", autos[-1]);
console.log(autos[autos.length]);
// Correcto
console.log("El ultimo elemento del arreglo es : ", autos[autos.length - 1]);

autos[0] = "BMW";

console.log(autos);

for (const carr of autos) {
  console.log(carr);
}

let precioProductos = [12, 45, 67, 78, 89];
let total = 0;
for (let index = 0; index < precioProductos.length; index++) {
  total += precioProductos[index];
}

console.log(total);

let denominadores = [12, 45, 67, 78, 89];
let totalDivision = 0;
for (let index = 0; index < denominadores.length; index++) {
  if (denominadores[index] === 0) {
    console.log("La division entre cero esta prohibida");
    totalDivision = 0;
    break;
  }
  totalDivision += 7 / denominadores[index];
}

console.log(
  !!totalDivision
    ? "El resultado de la division es: " + totalDivision
    : "Ocurrio un error"
);

// Asignacion por valor vs referencia
let a = 5;
let b = a;

a = 20;

console.log("a", a, "b", b);

let arra = [1, 23, 34, 34, 534];
let arrb = arra;

arra[3] = 20;

console.log("arra", arra, "arrb", arrb);
//Solucion
arrb = [...arra];
arra[4] = 500;
arrb[2] = 100;
console.log("arra", arra, "arrb", arrb);

let saludo =
  "Hola bienvenidos estudiantes de goit - Espero la clase sea de provecho , goku goku";

console.log(saludo.split(" "));
console.log(saludo.split("-"));
console.log(saludo.split("*"));

// console.log("   Hola bienvenidos estudiantes de goit ".trim());
let saludoArr = saludo.split(" ");
console.log(saludoArr);
console.log(saludoArr.join(" "));
console.log(saludoArr.join("+"));
console.log(saludoArr.join("/"));

console.log(saludoArr.indexOf("Espero"));
console.log(saludoArr.indexOf("JujutKAisen"));

if (saludoArr.indexOf("goku") !== -1) {
  console.log("A el le gusta el buen anime");
} else {
  console.log("A esta persona no le interesa ver JUjutkaiszxejn");
}

console.log(saludoArr.includes("Espero"));
console.log(saludoArr.includes("JujutKAisen"));

let numbers = [1, 2, 32, 45, 567, 423, 123, 12, 160];

numbers.push(78);
console.log(numbers);
numbers.unshift(77);
console.log(numbers);
let last = numbers.pop();
console.log(numbers);
console.log("POP", last);
let first = numbers.shift();
console.log(numbers);
console.log("Shift", first);

// console.log(numbers.slice(3, 6));
// console.log(numbers.slice(0, 4));

// console.log(numbers.splice(0, 2));
console.log(numbers.splice(0, 2, 3, 4, 5));
console.log(numbers.splice(4, 1, 8));
console.log(numbers);

numbers.splice(2, 0, 4);

console.log(numbers);
numbers.splice(0, 1);
console.log(numbers);
let cuted = numbers.splice(numbers.length - 1, 1);
console.log(numbers);
console.log(cuted);

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log("allClientsWithOldFirst", allClientsWithOldFirst);

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log("allClientsWithNewFirst", allClientsWithNewFirst);

console.log(oldClients);
console.log(newClients);
