// Módulo 5. Clase 9. Contexto de la llamada de una función y this

//// Ejemplo 1 - Taller de joyería

// Escriba un método `calcTotalPrice(stoneName)` que tome el nombre de una piedra
// y calcule y devuelva el precio total de las piedras con ese nombre, precio y
// cantidad según la propiedad `stones`.
const chopShop = {
  stones: [
    { name: "Emerald", price: 1300, quantity: 4 },
    { name: "Diamond", price: 2700, quantity: 3 },
    { name: "Sapphire", price: 1400, quantity: 7 },
    { name: "Ruby", price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    // let total = 0;
    // this.stones.forEach((stone) => {
    //   if (stoneName === stone.name) {
    //     total = stone.price * stone.quantity;
    //   }
    // });
    // return total;
    let foundedStone = this.stones.find((stone) => stoneName === stone.name);
    return foundedStone.price * foundedStone.quantity;
  },
};

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

//// Ejemplo 2 - Guía telefónica

// Refactoriza los métodos del objeto `phonebook` para que el código funcione.

const phonebook = {
  contacts: [],
  add(contact) {
    const newContact = {
      list: "default",
      ...contact,
      id: this.generateId(),
      createdAt: this.getDate(),
    };
    this.contacts.push(newContact);
  },
  generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

console.log(
  phonebook.add({
    name: "Mango",
    email: "mango@mail.com",
    list: "friends",
  })
);
console.log(
  phonebook.add({
    name: "Poly",
    email: "poly@hotmail.com",
  })
);

console.log(phonebook.contacts);

//// Ejemplo 3 - Calculadora

// Crea un objeto `calculator` con tres métodos:

// - `read(a, b)`- toma dos valores y los almacena como propiedades del objeto.
// - `add()` - devuelve la suma de los valores almacenados.
// - `mult()` - multiplica los valores almacenados y devuelve el resultado.

const calculator = {
  num1: 0,
  num2: 0,
  read(numParam1, numParam2) {
    this.num1 = numParam1;
    this.num2 = numParam2;
    return "Numeros registrados con exito";
  },
  add() {
    return this.num1 + this.num2;
  },
  mult() {
    return this.num1 * this.num2;
  },
  // getNum1() {
  //   return this.num1;
  // },
  // setNum1(num1) {
  //   this.num1 = num1;
  // },
};
