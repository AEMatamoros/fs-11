// Módulo 4. Clase 8. Métodos de indexación de Arrays

//// La colección de objetos para todos los ejemplos que tengan coches

const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

//// Ejemplo 1 - Método map

// Haz que la función `getModels` devuelva un array de modelos(campo model)
// de todos los coches.
const getModels = (cars) => {
  // let newCars = cars.map(({ model }) => {
  //   return model;
  // });
  let newCars = cars.map((value) => {
    return value.model;
  });
  return newCars;
};

console.table(getModels(cars));

//// Ejemplo 2 - Método map

// Haz que la función `makeCarsWithDiscount` devuelva un nuevo array de objetos
// con el valor de la propiedad `price` modificado, en función del descuento introducido.

const makeCarsWithDiscount = (cars, discount) => {
  return cars.map((value) => {
    return { model: value.model, price: value.price - value.price * discount };
  });
};

console.table(makeCarsWithDiscount(cars, 0.2));
console.table(makeCarsWithDiscount(cars, 0.4));

//// Ejemplo 3 - Método filter

// Que la función `filterByPrice` devuelva un array de coches cuyo precio
// sea inferior al valor del parámetro`threshold`.

const filterByPrice = (cars, threshold) => {
  return cars.filter((value) => value.price < threshold);
};

console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

//// Ejemplo 4 - Método filter

// Haz que la función `getCarsWithDiscount` devuelva un array de coches, cuya
// propiedad onSale sea true.

const getCarsWithDiscount = (cars) => {
  return cars.filter((value) => value.onSale === true);
};

console.table(getCarsWithDiscount(cars));

//// Ejemplo 5 - Método filter

//  Haz que la función `getCarsWithType` devuelva un array de coches
//  cuyo tipo coincida con el valor del parámetro`type`.

const getCarsWithType = (cars, type) => {
  return cars.filter((value) => value.type === type);
};

console.table(getCarsWithType(cars, "suv"));
console.table(getCarsWithType(cars, "sedan"));

//// Ejemplo 6

const getCarByModel = (cars, model) => {
  return cars.find((car) => car.model === model);
};

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));

//// Ejemplo 10 - Método reduce

// Haz que la función `getTotalAmount` devuelva el número total
// de coches(valor de propiedades`amount`).
// {
//   make: "Ford",
//   model: "Explorer",
//   type: "suv",
//   amount: 6,
//   price: 31660,
//   onSale: false,
// },
const getTotalAmount = (cars) => {
  return cars.reduce((acc, current) => {
    return acc + current.amount;
  }, 0);
};

console.log(getTotalAmount(cars));
