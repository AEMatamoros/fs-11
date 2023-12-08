// Retorno Implicto
const suma = (num1, num2) => num1 + num2;
// console.log(suma(2, 3));
//Saludo
const saludo = (nombre) => {
  return "Bienvenido " + nombre;
};
// console.log(saludo("Alexis"));

const biblioteca = [
  {
    titulo: "1984",
    autor: "George Orwell",
    genero: "Ficción distópica",
    paginas: 328,
    idioma: "Inglés",
    formato: "Tapa blanda",
    añoPublicacion: 1949,
  },
  {
    titulo: "Crimen y castigo",
    autor: "Fyodor Dostoevsky",
    genero: "Novela psicológica",
    paginas: 551,
    idioma: "Ruso",
    formato: "Tapa dura",
    añoPublicacion: 1866,
  },
  {
    titulo: "To Kill a Mockingbird",
    autor: "Harper Lee",
    genero: "Ficción clásica",
    paginas: 324,
    idioma: "Inglés",
    formato: "Tapa blanda",
    añoPublicacion: 1960,
  },
  {
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J.K. Rowling",
    genero: "Fantasía",
    paginas: 223,
    idioma: "Español",
    formato: "Tapa blanda",
    añoPublicacion: 1997,
  },
  {
    titulo: "One Hundred Years of Solitude",
    autor: "Gabriel García Márquez",
    genero: "Realismo mágico",
    paginas: 417,
    idioma: "Español",
    formato: "Tapa dura",
    añoPublicacion: 1967,
  },
  {
    titulo: "The Great Gatsby",
    autor: "F. Scott Fitzgerald",
    genero: "Ficción clásica",
    paginas: 180,
    idioma: "Inglés",
    formato: "Tapa blanda",
    añoPublicacion: 1925,
  },
  {
    titulo: "The Catcher in the Rye",
    autor: "J.D. Salinger",
    genero: "Ficción contemporánea",
    paginas: 224,
    idioma: "Inglés",
    formato: "Tapa dura",
    añoPublicacion: 1951,
  },
  {
    titulo: "The Hobbit",
    autor: "J.R.R. Tolkien",
    genero: "Fantasía",
    paginas: 310,
    idioma: "Inglés",
    formato: "Tapa blanda",
    añoPublicacion: 1937,
  },
  {
    titulo: "The Alchemist",
    autor: "Paulo Coelho",
    genero: "Ficción espiritual",
    paginas: 197,
    idioma: "Portugués",
    formato: "Tapa blanda",
    añoPublicacion: 1988,
    test: true,
  },
  {
    titulo: "The Alchemist",
    autor: "Paulo Coelho",
    genero: "Ficción espiritual",
    paginas: 197,
    idioma: "Portugués",
    formato: "Tapa blanda",
    añoPublicacion: 1988,
  },
  {
    titulo: "Pride and Prejudice",
    autor: "Jane Austen",
    genero: "Ficción romántica",
    paginas: 279,
    idioma: "Inglés",
    formato: "Tapa dura",
    añoPublicacion: 1813,
  },
];

let nuevaBiblioteca = biblioteca.map((valor, indice, array) => {
  // console.log(valor, indice);
  // if (valor.titulo === "The Great Gatsby") {
  return { titulo: valor.titulo, index: indice };
  // }
});
// console.log(biblioteca);
// console.log(nuevaBiblioteca);
// console.log(biblioteca.length);
// console.log(nuevaBiblioteca.length);

let filteredArray = biblioteca.filter((valor) => valor.paginas > 200);

// console.log(filteredArray);
let filteredArray2 = biblioteca
  .filter((valor) => valor.titulo === "The Alchemist")
  .map((valor) => {
    return { title: valor.titulo };
  });
// console.log(filteredArray2);

let filteredArray3 = biblioteca.find(
  (valor) => valor.titulo === "The Alchemist"
);
// console.log(filteredArray3);

let index = biblioteca.findIndex((valor) => valor.titulo === "The Alchemist");
// console.log(index);

let numbers = [
  [1, 2, 3, 4, 5, 6, 7],
  [5, 6, 7, 8],
  [9, 543, 2, 32],
];

let newNumbers = numbers.flatMap((value) => {
  return value;
});
// newNumbers
// [
//   1, 2,  3, 4, 5, 6,
//   7, 5,  6, 7, 8, 9,
// 543, 2, 32
// ]
// console.log(newNumbers.every((valor) => valor > 1));
// console.log(newNumbers.some((valor) => valor < 0));
// console.log(newNumbers);
newNumbers.sort((a, b) => b - a);
console.log(newNumbers);
// let sortedNUmbers = newNumbers.toSorted((a, b) => b - a); //Genra un nuevo arreglo
// console.log(sortedNUmbers);

let total = newNumbers.reduce((acc, cur) => {
  console.log(acc);
  return acc + cur;
}, 0);

console.log(total);

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const getTags = (tweets) =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

console.log(getTags(tweets));

const tweets2 = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

console.log(
  tweets2.map((value) => {
    return { tags: value.tags };
  })
);
console.log(
  tweets2
    .map((value) => {
      return { tags: value.tags };
    })
    .filter((value) => value.tags.includes("js"))
);

console.log(
  tweets2
    .map((value) => {
      return { tags: value.tags };
    })
    .filter((value) => value.tags.includes("js"))
    .flatMap((value) => value.tags)
);

console.log(
  tweets2
    .map((value) => {
      return { tags: value.tags };
    })
    .filter((value) => value.tags.includes("js"))
    .flatMap((value) => value.tags)
    .find((value) => value == "react")
);
