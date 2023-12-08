// Función Callback
function greet(name) {
  console.log(`Bienvenido ${name}.`);
}
// Función de alto nivel
function registerGuest(name, callback) {
  debugger;
  console.log(`Registramos a un invitado ${name}.`);
  callback(name);
}
// registerGuest("Mango", greet);

let empresas = [
  {
    name: "Empresa 0",
    price: 15,
    description: "Descripcion del empresa",
    rating: 6,
    type: "SA",
    location: "USA",
  },
  {
    name: "Empresa 1",
    price: 100,
    description: "Descripcion del empresa",
    rating: 1,
    type: "SDRL",
    location: "USA",
  },
  {
    name: "Empresa 2",
    price: 10,
    description: "Descripcion del empresa",
    rating: 2,
    type: "SDRL",
    location: "CAN",
  },
  {
    name: "Empresa 3",
    price: 80,
    description: "Descripcion del empresa",
    rating: 3,
    type: "SA",
    location: "CAN",
  },
  {
    name: "Empresa 4",
    price: 10,
    description: "Descripcion del empresa",
    rating: 4,
    type: "SDRL",
    location: "CAN",
  },
];

let societies = {};

function filterFunction(empresa, key, value) {
  if (!societies.hasOwnProperty(`isKey${key}`)) {
    societies[`isKey${key}`] = [];
  }
  if (!societies.hasOwnProperty(`isNotKey${key}`)) {
    societies[`isNotKey${key}`] = [];
  }

  if (empresa[key] === value) {
    societies[`isKey${key}`].push(empresa);
  } else {
    societies[`isNotKey${key}`].push(empresa);
  }
}

function iterateArray(empresas, filterFunction, key, value) {
  //filterFunction Es la funcion callback
  for (let index = 0; index < empresas.length; index++) {
    filterFunction(empresas[index], key, value);
    // console.log(empresas[index].key);
  }
}

// iterateArray(empresas, filterFunction, "type", "SDRL");
// console.log(societies);
// iterateArray(empresas, filterFunction, "location", "USA");
// console.log(societies);
// iterateArray(empresas, filterFunction, "price", 10);
// console.log(societies);

// function greet(name) {
//   console.log(`Bienvenido ${name}.`);
// }

// function registerGuest(name, greet) {
//   greet(name);
// }

// registerGuest("Alexis", greet);

registerGuest("Mango", function greet(name) {
  console.log(`Bienvenido ${name}.`);
});

let products = [
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

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }

// for ...of

function printValue(valor) {
  console.log(valor.name, valor.description, valor.price);
}
products.forEach(printValue);

let numbers = [1, 123, 4, 345, 234, 123, 1, 3, 4];

// function printNumbers(number) {
//   // console.log(arguments);
//   console.log(number);
// }

const printNumbers = (number) => {
  console.log("printNumbers " + number);
};
numbers.forEach(printNumbers);
numbers.forEach(function (number) {
  console.log("Desde funcion anonima " + number);
});

numbers.forEach((valor, indice, arreglo) => {
  console.log(valor, indice, JSON.stringify(arreglo));
});

numbers.forEach((valor, indice, arreglo) => {
  console.log(valor, indice, JSON.stringify(arreglo));
});

console.log(resultadoForEach);
