// Módulo 4. Clase 7. CallBacks.Funciones de Flecha.forEach

//// Ejemplo 1 - Funciones CallBack

// Escriba las siguientes funciones:

// - `createProduct(obj, callback)` - acepta un objeto de producto sin id, así como una CallBack.
//   La función crea un objeto de producto añadiendo un identificador único a su propiedad `id` y
//   llama al la CallBack, pasándole el objeto creado.
// - `logProduct(product)` - callback que recibe un objeto de producto y lo registra
//   en el consola
//     - `logTotalPrice(product)` - callback que recibe un objeto de producto y registra
//   el coste total del producto en la consola

let productObject = {
  name: "Producto 1",
  price: 10,
  total: 5,
};
function createProduct(obj, callback) {
  obj.id = Date.now();
  // console.log(obj);
  callback(obj);
}

function logProduct(product) {
  console.log(
    `${product.name} - Precio ${product.price} Cantidad: ${product.total}`
  );
}
function logTotalPrice(product) {
  console.log(`${product.name} - Total:${product.price * product.total}`);
}

// createProduct(productObject, logProduct);
// createProduct(productObject, logTotalPrice);

// //// Ejemplo 2 - Funciones CallBack

// // Agregue un objeto `account` métodos `withdraw(amount, onSuccess, onError)` y
// //     `deposit(amount, onSuccess, onError)`, donde el primer parámetro es la suma de la
// //  operación y el segundo y el tercero son las CallBacks.

// // El método `withdraw` devuelve onError si el monto es mayor que TRANSACTION_LIMIT o
// // this.balance, y en caso contrario onSuccess.

// // EL método `deposit` devuelve onError si el monto es mayor que TRANSACTION_LIMIT o menor
// // o igual a 0, y en caso contrario onSuccess.
const TRANSACTION_LIMIT = 1000;

const account = {
  username: "Jacob",
  balance: 2000,
  withdraw(amount, handleSuccess, handleError) {
    if (this.balance < amount || TRANSACTION_LIMIT < amount) {
      handleError();
    } else {
      handleSuccess();
    }
  },
  deposit(amount, handleSuccess, handleError) {
    if (amount > 0 && amount < TRANSACTION_LIMIT) {
      handleSuccess();
    } else {
      handleError();
    }
  },
};

function handleSuccess() {
  console.log("Success");
}

function handleError() {
  console.log("Error");
}

account.withdraw(1000, handleSuccess, handleError);
account.deposit(700, handleSuccess, handleError);

// //// Ejemplo 3 - Funciones CallBack

// // Escriba una función `each(array, callback)` la cual espera un array como primer
// // parámetro, y como segundo una función a aplicar a cada elemento del array. La
// // función each debe devolver un nuevo array cuyos elementos son los resultados
// // de llamar la función CallBack.

// // Solución
let numbers = [64.7, 49.3, 36, 25, 16];

function Multiply2(value) {
  return value * 2;
}

function Minus10(value) {
  return value - 10;
}

function sqrt(value) {
  return Math.sqrt(value);
}

function ceil(value) {
  return Math.ceil(value);
}

function floor(value) {
  return Math.floor(value);
}

function each(array, callback) {
  let resultArray = [];
  array.forEach((element) => {
    // console.log(element);
    resultArray.push(callback(element));
  });
  return resultArray;
}
console.log("Original", numbers);
console.log(each(numbers, Multiply2));
console.log(each(numbers, Minus10));
console.log(each(numbers, sqrt));
console.log(each(numbers, ceil));
console.log(each(numbers, floor));

// //// Ejemplo 4 - Funciones de Flecha

// // Efectúe la refactorización del código utilizando las funciones de flecha.

// function createProduct(obj, callback) {
//   obj.id = Date.now();
//   // console.log(obj);
//   callback(obj);
// }

const createProduct2 = (obj, callback) => {
  obj.id = Date.now();
  // console.log(obj);
  callback(obj);
};

// function logProduct(product) {
//   console.log(
//     `${product.name} - Precio ${product.price} Cantidad: ${product.total}`
//   );
// }

const logProduct2 = (product) => {
  console.log(
    `${product.name} - Precio ${product.price} Cantidad: ${product.total}`
  );
};

// function logTotalPrice(product) {
//   console.log(`${product.name} - Total:${product.price * product.total}`);
// }

const logTotalPrice2 = (product) => {
  console.log(`${product.name} - Total:${product.price * product.total}`);
};

// //// Ejemplo 8 - Método forEach
// // Efectúe la refactorización del código utilizando el método `forEach` Funciones Flecha.
const printContactsInfo = ({ names, phones }) => {
  const nameList = names.split(",");
  const phoneList = phones.split(",");
  // for (let i = 0; i < nameList.length; i += 1) {
  //   console.log(`${nameList[i]}: ${phoneList[i]}`);
  // }
  nameList.forEach((nombre, index) => {
    console.log(nombre, phoneList[index]);
  });
};

printContactsInfo({
  names: "Jacob,William,Solomon,Artemis",
  phones: "89001234567,89001112233,890055566377,890055566300",
});

let numbers2 = [1, 1, 2, 3, 4, 6];
function filterOdds(value) {
  return value % 2 === 0;
}
console.log(numbers2.filter(filterOdds));
