// Arreglos
let numbers = [1, 2, 3, 445, 0, 456, 345, 234, 1231234];

//console.log(...numbers);

//console.log(Math.max([1, 2, 3, 45]));
//console.log(Math.max(1, 2, 3, 45));

// Creacion de un nuevo arreglo
let newNumbers = [...numbers];
newNumbers[5] = 78;

//console.log(numbers);
//console.log(newNumbers);

// Objetos
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

let user = { nombreCliente: "Juan", carnetDeLector: "qawjkljqwe67qweh" };
let newLibro = { ...libro, ...user, casa1: "Valor casa 1" };

//console.log(newLibro);

newLibro.casa2 = "Valor casa 2";
newLibro["casa3"] = "Valor casa 3";

// //console.log(libro);
//console.log(newLibro);

function argsCall(...args) {
  return args;
}

//console.log(argsCall(1, 2, 3, 45, 3425, 345, "Arg1", true, { key: 0 }));

function otherArgsCall(param1, param2, param3, ...otherArgs) {
  //console.log(param1, param2, param3);
  return otherArgs;
}

//console.log(otherArgsCall(1, 2, 3, 45, 3425, 345, "Arg1", true, { key: 0 }));

let cart = [
  {
    name: "Product 0",
    price: 10,
    description: "Descripcion del pro",
    rating: 6,
  },
  {
    name: "Product 1",
    price: 10,
    description: "Descripcion del pro",
    rating: 1,
  },
  {
    name: "Product 2",
    price: 10,
    description: "Descripcion del pro",
    rating: 2,
  },
  {
    name: "Product 3",
    price: 10,
    description: "Descripcion del pro",
    rating: 3,
  },
  {
    name: "Product 4",
    price: 10,
    description: "Descripcion del pro",
    rating: 4,
  },
];

function calcTotal(producto1, ...args) {
  // //console.log(producto1);
  // //console.log(args);
  let total = producto1.price;
  for (let product of args) {
    total += product.price;
  }
  return total;
}

//console.log(calcTotal(cart[0], ...cart.slice(1, cart.length)));

// Desestructuracion

let libreriaSoftware = {
  funcionalidad0: "Valor de la funcionalidad 0",
  funcionalidad1: "Valor de la funcionalidad 1",
  funcionalidad2: "Valor de la funcionalidad 2",
  funcionalidad3: "Valor de la funcionalidad 3",
  funcionalidad4: "Valor de la funcionalidad 4",
  funcionalidad5: "Valor de la funcionalidad 5",
  funcionalidad6: "Valor de la funcionalidad 6",
  funcionalidad7: "Valor de la funcionalidad 7",
  funcionalidad8: "Valor de la funcionalidad 8",
  funcionalidad9: "Valor de la funcionalidad 9",
  funcionalidad10: {
    valor: "Valor de la funcionalidad 10",
    subFuncionalidad10_1: "Subfuncionalidad 10.1",
  },
};

// console.log(libreriaSoftware.funcionalidad1);
// console.log(libreriaSoftware.funcionalidad5);

let {
  funcionalidad1: funcionalidadPrimera,
  funcionalidad5,
  funcionalidad10: { valor, subFuncionalidad10_1 },
} = libreriaSoftware;

// console.log(funcionalidadPrimera);
console.log(valor);
console.log(subFuncionalidad10_1);

//Arhivo externo al modulo
let operaciones = {
  suma(num1, num2) {
    return num1 + num2;
  },
  resta(num1, num2) {
    return num1 - num2;
  },
  multiplicacion(num1, num2) {
    return num1 * num2;
  },
  division(num1, num2) {
    return num1 / num2;
  },
};

//Archivo de trabajo
let { suma, multiplicacion } = operaciones;

// console.log(suma(1, 2));
// console.log(multiplicacion(2, 2));

let cartOfProducts = [
  {
    name: "Product 0",
    price: 15,
    description: "Descripcion del pro",
    rating: 6,
  },
  {
    name: "Product 1",
    price: 100,
    description: "Descripcion del pro",
    rating: 1,
  },
  {
    name: "Product 2",
    price: 10,
    description: "Descripcion del pro",
    rating: 2,
  },
  {
    name: "Product 3",
    price: 80,
    description: "Descripcion del pro",
    rating: 3,
  },
  {
    name: "Product 4",
    price: 10,
    description: "Descripcion del pro",
    rating: 4,
  },
];
let totalPrice = 0;
for (let { name, price } of cartOfProducts) {
  console.log(name, price);
  totalPrice += price;
}

console.log(totalPrice);

const rgb = [200, 255, 100];
let [red, green, blue] = rgb;

console.log(red, green, blue);

let nombre = "Game of trones la venganza";
//Edicion???
let autor = {
  primerNombre: "Alexis",
  primerApellido: "Martin",
  edad: 27,
  soltero: true,
};

let direccion = {
  pais: "Honduras",
  departamento: "Guayajil",
  colonia: "Kennedy",
};

function bookGeneralData(nombre, primerNombreAutor, primerApellidoAutor, pais) {
  return `${nombre} ${primerApellidoAutor}. ${primerNombreAutor} ${pais}`;
}

// console.log(
//   bookGeneralData(
//     nombre,
//     autor.primerNombre,
//     autor.primerApellido,
//     direccion.pais
//   )
// );

function bookGeneralDataUsingObjectAsParam({
  nombre,
  primerApellidoAutor,
  primerNombreAutor,
  pais,
}) {
  return `${nombre} ${primerApellidoAutor}. ${primerNombreAutor} ${pais}`;
}

console.log(
  bookGeneralDataUsingObjectAsParam({
    primerNombreAutor: autor.primerNombre,
    primerApellidoAutor: autor.primerApellido,
    nombre: nombre,
    pais: direccion.pais,
  })
);
