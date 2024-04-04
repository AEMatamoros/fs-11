// Objetos
let producto = {
  nombre: "Producto 1",
  codigo: "P001",
  categoria: "Electrodomésticos",
  precio: 149.99,
  disponibilidad: true,
  descripcion: "Este producto es un electrodoméstico útil para el hogar.",
  informacionAdicional: {
    tamaño: "20x30x10cm",
    color: "Negro",
    material: "Plástico",
  },
  urlImagen: "https://url.com/imagen1.jpg",
};
console.log(producto.nombre);
console.log(producto.informacionAdicional.tamaño);

let productos = [
  {
    nombre: "Producto 1",
    codigo: "P001",
    categoria: "Electrodomésticos",
    precio: 149.99,
    disponibilidad: true,
    descripcion: "Este producto es un electrodoméstico útil para el hogar.",
    informacionAdicional: {
      tamaño: "20x30x10cm",
      color: "Negro",
      material: "Plástico",
    },
    urlImagen: "https://url.com/imagen1.jpg",
  },
  {
    nombre: "Producto 2",
    codigo: "P002",
    categoria: "Ropa",
    precio: 39.99,
    disponibilidad: false,
    descripcion: "Esta es una camiseta de algodón suave y cómoda.",
    informacionAdicional: {
      tamaño: "Talla única",
      color: "Blanco",
      material: "Algodón",
    },
    urlImagen: "https://url.com/imagen2.jpg",
  },
  // Agrega más objetos de productos según sea necesario
];

console.log(productos[0].nombre);
console.log(productos[0].informacionAdicional.tamaño);

for (let index = 0; index < productos.length; index++) {
  console.log(productos[index]);
}

productos.forEach((producto, index) => {
  console.log(producto.nombre, index);
});

let productsName = productos.map((producto) => producto.nombre);
console.log(productsName);

let unknowKey = "nombre";
let objeto1 = productos[0];

console.log(objeto1[unknowKey]);

// Callback
function retornarNombre() {
  return "Alexis";
}

function saludar(callback) {
  return "Hola bienvenido " + callback();
}

console.log(saludar(retornarNombre));
console.log(
  saludar(() => {
    return "Eduardo ";
  })
);

function nameProduct(producto, index) {
  if (index === 0) {
    return "El nombre es " + producto.nombre;
  } else {
    return producto.nombre;
  }
}

let productsName2 = productos.map((producto, index) => {
  if (index === 0) {
    return "El nombre es " + producto.nombre;
  } else {
    return producto.nombre;
  }
});
console.log(productsName2);
let productsName3 = productos.map(nameProduct);
console.log(productsName3);

console.log(productos.find((producto) => producto.codigo == "P001"));
console.log([...productos].filter((producto) => producto.codigo == "P001"));
console.log(productos);

console.log(
  productos.reduce((previusValue, currentValue, index) => {
    console.log(currentValue.precio);
    return previusValue + currentValue.precio;
  }, 0)
);
