// Módulo 5. Clase 10. Prototipos y Clases

//// Ejemplo 1 - Blogger

// Escribe una clase `Blogger` para crear un objeto blogger con las siguientes propiedades:

// - `email` - correo, cadena
// - `age` - edad, número
// - `numberOfPosts` - cantidad de posts, número
// - `topics` - un Array de temas en los que el blogger se especializa

// La clase espera un único parámetro: un objeto de configuraciones con propiedades del mismo nombre.

// Agrega el método `getInfo()`, que devuelde la cadena:
// `User ${correo} is ${edad} years old and has ${cant. de posts} posts`.

// Agrega el método `updatePostCount(value)`, que en el parámetro `value` recibe la
// cantidad de posts que debe añadir el usuario.
class Blogger {
  name;
  age;
  numberOfPosts;
  topics;
  constructor({ name, age, numberOfPosts, topics }) {
    this.name = name;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  getInfo() {
    return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`;
  }

  updatePostCount(value) {
    this.numberOfPosts += value;
  }
}

const mango = new Blogger({
  name: "mango@mail.com",
  age: 24,
  numberOfPosts: 20,
  topics: ["tech", "cooking"],
});
console.log(mango.getInfo()); // USer mango@mail.com is 24 years old and has 20 posts
mango.updatePostCount(5);
console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

//// Ejemplo 2 - Almacén

// Escriba una clase `Storage` que crea objetos para gestionar un almacén de productos.
// Cuando se llama recibe un argumento, el array inicial de productos, y lo escribe
// en la propiedad `items`.

// Añade métodos de la clase:

// - `getItems()` - devuelve un array de productos.
// - `addItem(item)` - recibe un nuevo producto y lo añade a los actuales.
// - `removeItem(item)` - recibe el elemento y, si existe, lo elimina de los actuales.
class Storage {
  items;
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(toDeleteItem) {
    this.items = this.items.filter((item) => item !== toDeleteItem);
  }
}
const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

const items = storage.getItems();
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem("🍌");
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem("🍋");
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

//// Ejemplo 3 - User

// Escribe una clase `User` que cree un objeto con las propiedades `login` y `email`.
// Declare las propiedades privadas `//login` y `//email`, a las que se puede acceder
// mediante el getter y setter `login` y `email`.
class User {
  #login;
  #email;
  constructor({ login, email }) {
    this.#login = login;
    this.#email = email;
  }
  getLogin() {
    return this.#login;
  }
  getEmail() {
    return this.#email;
  }
  setLogin(newLogin) {
    this.#login = newLogin;
  }

  setEmail(newEmail) {
    this.#email = newEmail;
  }
}
const tomate = new User({
  login: "Mango",
  email: "mango@dog.woof",
});
console.log(tomate.getEmail());
tomate.setEmail("toamte@gamiol.com");
console.log(tomate.getEmail());

console.log(tomate.getLogin());
tomate.setLogin("Tomate");
console.log(tomate.getLogin());
