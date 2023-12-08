// Ambito GLobal
// console.log(this);

//Ambito de Objeto
const biblioteca = {
  titulo: "1984",
  autor: "George Orwell",
  genero: "Ficción distópica",
  paginas: 328,
  idioma: "Inglés",
  formato: "Tapa blanda",
  añoPublicacion: 1949,
  getContext() {
    return this;
  },
};

// console.log(biblioteca.getContext());
("use strict");
const getContext = (param1, param2) => {
  return this;
};

// console.log(getContext("Alexis", "Matamoros"));
//Problema 1
function getName(nombre) {
  return nombre;
}

function welcome(getName) {
  // getName();
}

welcome();

//Proboklema 2
const biblioteca2 = {
  titulo: "1984",
  autor: "George Orwell",
  genero: "Ficción distópica",
  paginas: 328,
  idioma: "Inglés",
  formato: "Tapa blanda",
  añoPublicacion: 1949,
  getTitulo() {
    return this.titulo;
  },
};

function diCualEsElTitulo(nombre) {
  console.log(this);
  return `El titulo es ${this.getTitulo()}- La persona que invoco esta funcino es ${nombre}`;
}
// Error
// diCualEsElTitulo(biblioteca2.getTitulo, "Alexis");

console.log(diCualEsElTitulo.call(biblioteca2, "Alexis"));
console.log(diCualEsElTitulo.apply(biblioteca2, ["Alexis"]));
console.log(diCualEsElTitulo.bind(biblioteca2, "Alexis")());

function diCualEsElTitulo2() {
  return `El titulo es ${this.getTitulo()}- El autor del libro es ${
    this.autor
  }`;
}

console.log(diCualEsElTitulo2.call(biblioteca2));
console.log(diCualEsElTitulo2.apply(biblioteca2));
console.log(diCualEsElTitulo2.bind(biblioteca2)());

function diCualEsElTitulo3(getTitulo, nombre) {
  return `El titulo es ${getTitulo()}- La persona que invoco esta funcino es ${nombre}`;
}
// Error
// diCualEsElTitulo(biblioteca2.getTitulo, "Alexis");

console.log(
  diCualEsElTitulo3(biblioteca2.getTitulo.bind(biblioteca2), "Alexis")
);
