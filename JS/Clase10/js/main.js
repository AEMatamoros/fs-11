class Vehiculo {
  #marca;
  #modelo;
  #color;
  ano;

  static vehiculosTotales = 0;

  constructor({ marca, modelo, color, ano }) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#color = color;
    this.ano = ano;
    Vehiculo.vehiculosTotales++;
  }

  getMarca() {
    return this.#marca;
  }
  getModelo() {
    return this.#modelo;
  }
  getColor() {
    return this.#color;
  }

  static getTotalVehiculos() {
    return Vehiculo.vehiculosTotales;
  }

  setMarca(marca) {
    this.#marca = marca;
  }
  setModelo(modelo) {
    this.#modelo = modelo;
  }
  setColor(color) {
    this.#color = color;
  }

  encender() {
    return "Vehiculo encendido";
  }

  apagar() {
    return "Vehiculo apagado";
  }

  arrancar() {
    return "Vehiculo ha arrancado";
  }

  frenar() {
    return "Vehiculo ha frenado";
  }
}

// let vehiculo0 = new Vehiculo({
//   marca: "Toyota",
//   modelo: "Hilux",
//   color: "Roja",
//   ano: 2017,
// });
// let vehiculo1 = new Vehiculo({
//   marca: "Isuzu",
//   modelo: "BOQ60",
//   color: "Roja",
// });

// console.log(vehiculo0);
// console.log(vehiculo0.encender());
// console.log(vehiculo0.arrancar());
// console.log(vehiculo0.frenar());
// console.log(vehiculo0.apagar());
// console.log(vehiculo0.getMarca());
// console.log(vehiculo0.getModelo());
// vehiculo0.setMarca("Mitsubishi");
// vehiculo0.setModelo("L200");
// console.log(vehiculo0.getMarca());
// console.log(vehiculo0.getModelo());

// // Los aelementos estaticos no puedes ser accedidos mediante una instancia, ni mediante la palabra reservada this
// console.log(vehiculo0.vehiculosTotales);
// // console.log(vehiculo0.getTotalVehiculos());
// // Forma correcta acceder a ellos atravez de la clase
// console.log("Total Vehiculos", Vehiculo.vehiculosTotales);
// console.log("Total Vehiculos", Vehiculo.getTotalVehiculos());
class Auto extends Vehiculo {
  #ruedas;
  constructor({ marca, modelo, color, ano, ruedas }) {
    super({ marca, modelo, color, ano });
    this.#ruedas = ruedas;
  }

  getRuedas() {
    return this.#ruedas;
  }

  setRuedas(ruedas) {
    this.#ruedas = ruedas;
  }
}

// let auto1 = new Auto({
//   marca: "Toyota",
//   modelo: "Hilux",
//   color: "Roja",
//   ano: 2017,
//   ruedas: 4,
// });

// console.log(auto1);
// // Metodo de la clase padre
// console.log(auto1.getMarca());
// // Metodo de la clase hija
// console.log(auto1.getRuedas());

class Avion extends Vehiculo {
  static totalAviones = 0;
  constructor({ marca, modelo, color, ano = 2000 }) {
    super({ marca, modelo, color, ano });
    Avion.totalAviones++;
  }

  despegar() {
    return "El avion ha despegado";
  }

  getMarca() {
    return "Marca de Avion :" + this.getMarca();
  }

  static getTotalAviones() {
    return Avion.totalAviones;
  }
}

let auto3 = new Auto({
  marca: "Toyota",
  modelo: "Hilux",
  color: "Roja",
  ano: 2017,
  ruedas: 4,
});

let auto4 = new Auto({
  marca: "Toyota",
  modelo: "Hilux",
  color: "Roja",
  ano: 2017,
  ruedas: 4,
});

let avion1 = new Avion({
  marca: "Toyota",
  modelo: "Hilux",
  color: "Roja",
  ano: 2017,
});

let avion2 = new Avion({
  marca: "Toyota",
  modelo: "Hilux",
  color: "Roja",
});

console.log(Avion.getTotalVehiculos());
console.log(Avion.getTotalAviones());
console.log(avion2);
