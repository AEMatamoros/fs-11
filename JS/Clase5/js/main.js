let persona = {
  primerNombre: "",
  primerApellido: "",
  edad: 27,
  soltero: true,
  direccion: {
    pais: "Honduras",
    departamento: "Guayajil",
    colonia: "Kennedy",
  },
};

let libro = {
  nombre: "Game of trones la venganza",
  //Edicion???
  autor: {
    primerNombre: "Alexis",
    primerApellido: "Martin",
    edad: 27,
    soltero: true,
    direccion: {
      pais: "Honduras",
      departamento: "Guayajil",
      colonia: "Kennedy",
    },
  },
};

console.log(libro.nombre);
console.log(libro.autor);
console.log(libro.autor.primerNombre);
console.log(libro.autor.direccion.departamento);

console.log(libro["nombre"]);

let autorKey = "autor";
console.log(libro[autorKey]["direccion"]["departamento"]);

// libro.edicion = 1;
libro.editorial = { nombre: "Editorial buena", direccion: "Col Tal" };
libro["edicion"] = 1;
libro.autor.sexo = "M";
console.log(libro);

// Supongamos que yo no tengo los objetos en el lado del clearInterval,
// y hay aun objeto al que yo necesito agregarle informacion external,
// esa in formacion external, noviene con los datos del objeto, debemos
// agregarlos pero esos lementos vienen de otro servicio.

// Este el dato que viene del servicio
// "nombre"
let nombrekey = "nombreCliente";

// let obj = {};

// obj[nombrekey] = "Aago";

let obj = { [nombrekey]: "Aago" };

console.log(obj);

//Shorthand
//Respuesta del servicio
let servicio = { nombre: "Juan", apellido: "Godoy" };
let { nombre, apellido } = servicio;

//Servicio de llamado
let servicio2 = { nombre, apellido };

console.log(servicio2);

// Ejemplo 2
let nombreProducto = "Control";
let precioProducto = 15;
let descripcion = "Mando de PS5";

let producto = {
  nombreProducto,
  precioProducto,
  descripcion,
};

console.log(producto);

//Spread
//Respuesta del servicio
let servicio3 = { nombre: "Juan", apellido: "Godoy", edad: 25 };

//Servicio de llamado
let servicio4 = { ...servicio3 };
console.log(servicio4);

// Metodos de objeto
let libroNuevo = {
  nombre: "Game of trones la venganza del perla negra",
  //Edicion???
  paginaActual: 1,
  obtenerPaginaActual() {
    // console.log("this", this);
    console.log("La pagina actual es la " + this.paginaActual);
  },
  cambiarAlaPaginaSiguiente() {
    this.paginaActual++;
  },
  cambiarAlaPaginaAnterior() {
    this.paginaActual--;
  },
  moverPaginas(numPaginas) {
    this.paginaActual += numPaginas;
  },
};

libroNuevo.obtenerPaginaActual();
libroNuevo.cambiarAlaPaginaSiguiente();
libroNuevo.cambiarAlaPaginaSiguiente();
libroNuevo.cambiarAlaPaginaSiguiente();
libroNuevo.cambiarAlaPaginaSiguiente();
libroNuevo.obtenerPaginaActual();
libroNuevo.cambiarAlaPaginaAnterior();
libroNuevo.obtenerPaginaActual();
libroNuevo.moverPaginas(5);
libroNuevo.obtenerPaginaActual();

// Error metodo no existe
// libroNuevo.undefined();
// libroNuevo.metodoSinEspecificar();
console.log("Iterando un objetp");
for (const key in libroNuevo) {
  console.log(key);
  console.log(libroNuevo[key]);
}

console.log(Object.entries(libroNuevo));
console.log(Object.keys(libroNuevo));
console.log(Object.values(libroNuevo));

let animal = { patas: 4, raza: "Canino", especie: "Lobito" };

let animal2 = Object.create(animal);
animal2.alas = 3;
animal2.cola = 6;

console.log(animal2);
console.log(animal2.patas);
console.log(animal2.hasOwnProperty("alas"));
console.log(animal2.hasOwnProperty("cuerno"));
console.log(animal2.hasOwnProperty("patas"));

delete animal2.alas;

console.log(animal2);
