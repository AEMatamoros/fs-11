const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Datos de ejemplo (simulación de una base de datos)
let products = [
  {
    id: 1,
    name: "Producto 1",
    description: "Descripción del Producto 1",
    price: 10,
  },
  {
    id: 2,
    name: "Producto 2",
    description: "Descripción del Producto 2",
    price: 20,
  },
  {
    id: 3,
    name: "Producto 3",
    description: "Descripción del Producto 3",
    price: 30,
  },
];

// Endpoint para obtener todos los productos
app.get("/products", (req, res) => {
  res.json(products);
});

// Endpoint para agregar un nuevo producto
app.post("/products", (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.length + 1;
  products.push(newProduct);
  res.json(newProduct);
});

// Endpoint para actualizar un producto existente
app.put("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body;

  const productIndex = products.findIndex(
    (product) => product.id === productId
  );
  if (productIndex !== -1) {
    products[productIndex] = { ...products[productIndex], ...updatedProduct };
    res.json(products[productIndex]);
  } else {
    res.status(404).json({ error: "Producto no encontrado" });
  }
});

// Endpoint para eliminar un producto
app.delete("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  products = products.filter((product) => product.id !== productId);
  res.json({ message: "Producto eliminado" });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
