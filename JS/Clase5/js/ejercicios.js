// Módulo 3. Clase 1. Objetos

//// Ejemplo 1 - Fundamentos de los objetos

// Escribe un script que, para el objeto`user`, secuencialmente:

// - añade un campo `mood` con el valor`"happy"`.
// - sustituye el valor de `hobby` por`'skydiving'`.
// - sustituye el valor de `premium` por`false`
//     - devuelve el contenido del objeto `user` en formato `llave:valor` usando
//   `Object.keys()` y`for...of`

////// Código
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user["premium"] = false;
console.log(Object.keys(user));
for (const key of Object.keys(user)) {
  console.log(`${key}:${user[key]}`);
}

//// Ejemplo 2 - Método Object.values()

// Tenemos un objeto que almacena los salarios de nuestro equipo.Escribe el código
// para sumar todos los salarios y almacenar el resultado en la variable sum.
// El resultado debería ser 390. Si el objeto `salaries` está vacío, el resultado debe ser 0.

////// Código
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
if (Object.keys(salaries).length !== 0) {
  for (const salary of Object.values(salaries)) {
    sum += salary;
  }
  console.log(sum);
} else {
  console.log("No hay empleados a evaluar");
}

//// Ejemplo 3 - Array de objetos

// Escribe una función `calcTotalPrice(stones, stoneName)` que tome un arreglo de
// objetos y una cadena de nombres de piedras.La función cuenta y devuelve el valor
// total de las piedras con ese nombre, precio y cantidad del objeto.
const stones = [
  { name: "Esmeralda", price: 1300, quantity: 4 },
  { name: "Diamante", price: 2700, quantity: 3 },
  { name: "Zafiro", price: 400, quantity: 7 },
  { name: "Piedra triturada", price: 200, quantity: 2 },
];
// (listadoDePiedras, nombrePiedra)
function calcTotalPrice(stones, stoneName) {
  for (const stone of stones) {
    if (stone.name === stoneName) {
      return `El precio a pagar por ${stoneName} es: ${
        stone.price * stone.quantity
      }`;
    }
  }
}

console.log(calcTotalPrice(stones, "Diamante"));

//// Ejemplo 4 - Tareas complejas

// Escribe un script para gestionar una cuenta bancaria online.Existe un
// objeto `cuenta` en el que hay que implementar métodos para trabajar con
// el saldo y el historial de transacciones.

/*
 * Sólo hay dos tipos de transacciones.
 * Se puede depositar o retirar dinero de la cuenta.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 100,
  transactions: [],
  /*
   * El método crea y retorna el objeto de la transacción.
   * Acepta la suma y el tipo de transacción.
   */
  createTransaction(amount, type) {
    if (Object.values(Transaction).indexOf(type) === -1) {
      console.log("Operacion Incorrecta");
      this.transactions.push({ amount, type: "error de typo" });
      return;
    }

    if (type === Transaction.DEPOSIT) {
      this.deposit(amount);
      return;
    }
    if (type === Transaction.WITHDRAW) {
      this.withdraw(amount);
      return;
    }
  },
  /*
   * Método responsable de añadir el monto al saldo.
   * Recibe el monto de la transacción.
   * Llama a createTransaction para crear un objeto de transacción
   * y después lo añade al historial de transacciones
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push({ amount, type: Transaction.DEPOSIT });
  },
  /*
   * El método responsable de retirar el monto del saldo.
   * Recibe el monto de la transacción.
   * Llama a createTransaction para crear un objeto de transacción
   * y después lo añade al historial de transacciones
   *
   * Si amount es mayor que el saldo actual, imprime un mensaje diciendo
   * que, no es posible retirar esta cantidad, no hay fondos suficientes.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      this.transactions.push({ amount, type: "error saldo insuficiente" });
      return;
    }
    this.balance -= amount;
    this.transactions.push({ amount, type: Transaction.WITHDRAW });
  },
  /*
   * El método devuelve el saldo actual
   */
  getBalance() {
    return this.balance;
  },
  getTransactions() {
    return this.transactions;
  },
  /*
   * El método busca y devuelve el objeto de la transacción según su id
   */
  getTransactionDetails(id) {
    for (let index = 0; index < this.transactions.length; index++) {
      if (id === index) {
        return this.transactions[index];
      }
    }
  },
  /*
   * El método devuelve la cantidad de fondos
   * de determinado tipo de transacción de todo el historial de transacciones
   */
  getTransactionTotal(type) {
    let sum = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        sum += transaction.amount;
      }
    }
    return { total: sum, type };
  },
};

console.log(account.getBalance());
account.createTransaction(500, Transaction.DEPOSIT);
console.log(account.getBalance());
account.createTransaction(900, Transaction.WITHDRAW);
account.createTransaction(100, Transaction.WITHDRAW);
account.createTransaction(100, Transaction.WITHDRAW);
account.createTransaction(100, Transaction.WITHDRAW);
account.createTransaction(100, "Dinerito");

console.log(account.getBalance());
console.log(account.getTransactions());
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
