import React, { useState, useMemo } from "react";

export default function Products() {
  const initialProducts = [
    { id: 1, name: "Producto A", price: 10 },
    { id: 2, name: "Producto B", price: 20 },
    { id: 3, name: "Producto C", price: 30 },
  ];
  const [products, setProducts] = useState(initialProducts);
  const [show, setShow] = useState(false);

  function caculateTotal(products) {
    console.log("Calculando");
    return products.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }
  // const total = caculateTotal(products);
  const total = useMemo(() => caculateTotal(products), [products]);
  return (
    <div>
      <h1>Listado de Productos</h1>
      <ProductsList products={products}></ProductsList>
      <h2>Total:{total}</h2>
      {show && <h3>Otro cambio de estado</h3>}
      <button
        onClick={() => {
          setProducts(
            initialProducts.concat({ id: 4, name: "Producto D", price: 40 })
          );
        }}
      >
        Agregar Producto
      </button>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Mostrar
      </button>
    </div>
  );
}

function ProductsList({ products }) {
  return (
    <>
      {products.map((product) => (
        <p key={product.id}>
          {product.name} <strong>${product.price}</strong>
        </p>
      ))}
    </>
  );
}
