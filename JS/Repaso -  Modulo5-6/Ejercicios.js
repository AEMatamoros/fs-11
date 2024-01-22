// Creación de un objeto y acceso a propiedades:
// Define un objeto llamado 'persona' con propiedades como nombre, edad y ciudad.
// Luego, imprime en la consola cada una de las propiedades.
const persona = {
  nombre: "Alexis",
  edad: 27,
  ciudad: "LA",
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);
let lugarNacimiento = "ciudad";
console.log(persona["nombre"]);
console.log(persona["edad"]);
console.log(persona[lugarNacimiento]);

// Crea un objeto 'rectangulo' con propiedades de ancho y alto.
// Añade un método llamado 'calcularArea' que devuelva el área del rectángulo.
let rectangulo = {
  ancho: 10,
  alto: 20,
  calcularArea() {
    // console.log(this);
    return this.alto * this.ancho;
  },
};
console.log(rectangulo.calcularArea());
// Crea un objeto 'estudiante' con propiedades como nombre, edad y notas.
// Utiliza un bucle 'for...in' para imprimir en la consola todas las propiedades del estudiante.
let obj = {
  nombre: "Alexis",
  edad: 27,
  notas: { matematicas: 20, espanol: 15, computacion: 80 },
  bebidaFavorita: "Cafe",
};
console.log("Estudiante");
for (let key in obj) {
  console.log(obj[key]);
}
// Crea un objeto 'cadena' con una propiedad de texto.
// Utiliza el método 'toUpperCase()' para convertir el texto a mayúsculas y muestra el resultado en la consola.
let obj2 = {
  cadena: "Ser estudiante de GoIt es lo mejor",
};
let textoEnMayusculas = obj2.cadena.toUpperCase();
console.log(textoEnMayusculas);
console.log(obj2.cadena.toUpperCase());

// Crea una classe 'Libro' que acepte título y autor como parámetros.
// Instancia dos objetos 'libro1' y 'libro2' y muestra sus propiedades en la consola.
class Libro {
  #titulo;
  #autor;
  constructor({ titulo, autor }) {
    this.#titulo = titulo;
    this.#autor = autor;
  }

  getTitulo() {
    return this.#titulo;
  }
  getAutor() {
    return this.#autor;
  }
  setAutor(newAutor) {
    this.#autor = newAutor;
  }
  setTitulo(newTitulo) {
    this.#titulo = newTitulo;
  }
}

let libro1 = new Libro({ autor: "Ge Ge", titulo: "Jujusu Kaisen" });
console.log(libro1, libro1.getTitulo(), libro1.getAutor());
libro1.setAutor("Pablo Neruda");
console.log(libro1.getAutor());
class Libro2 {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }
}

let libro2 = new Libro2("Jujusu Kaisen", "Ge Ge");
console.log(libro2);
// Define dos arrays 'array1' y 'array2'.
// Utiliza el operador spread para concatenar ambos arrays en un nuevo array llamado 'concatenados'.
let array0 = [1, 2, 3, 4, 5];
let array1 = [34, 5, 345, 6, 54, 7, 4, 234];
let concatenados = [...array0, ...array1];
console.log(concatenados);
// Crea una función llamada 'sumar' que acepte varios parámetros.
// Utiliza el operador de resto para sumar todos los valores y devolver el resultado.
function sumar(...numbers) {
  // console.log(numbers);
  let aux = 0;
  for (let num of numbers) {
    aux += num;
  }
  return aux;
}

console.log(sumar(1, 23, 3, 45));
console.log(sumar(13, 45));
console.log(sumar(13, 45, 12, 3, 234, 45));

// Crear funcion que filtre los numero s y nos devuelva los numeros parseFloat
// En la funcion de orden superior, sumar todos loa numeros filtrados
let numerostodos = [
  34, 5, 345, 6, 54, 7, 4, 234, 1, 2, 3, 4, 5, 56, 67, 7, 23, 23, 342, 5656,
];

function filtrarNumerosPares(numeros) {
  return numeros.filter((num) => {
    // console.log(num);
    return num % 2 == 0;
  });
}

function filtrarNumerosImpares(numeros) {
  return numeros.filter((num) => {
    // console.log(num);
    return num % 2 !== 0;
  });
}
// console.log(filtrarNumeros(numerostodos));
function sum(numeros, callbackfiltro) {
  let filteredNumbers = callbackfiltro(numeros);
  let aux = 0;
  for (let number of filteredNumbers) {
    aux += number;
  }
  return aux;
}
console.log(sum(numerostodos, filtrarNumerosPares));
console.log(sum(numerostodos, filtrarNumerosImpares));
