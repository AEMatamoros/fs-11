import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
export default function Product() {
  //Obtener params de ruta
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  console.log(searchParams.get("name"));
  console.log(searchParams.get("description"));

  useEffect(() => {
    setSearchParams({ name: "Lies of P" });
  }, []);

  //   let params = useParams();
  // console.log(params);
  // Obtemer search params
  // Obtener Param
  let { id } = useParams();
  // Estado
  let [product, setProduct] = useState({});
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    useFetch({ method: "GET", url: `http://localhost:3000/apps/${id}` })
      .then((response) => {
        if (response.statusText === "OK") {
          setProduct(response.data);
          return;
        }
        throw new Error("Ocurrion un error");
      })
      .catch((err) => {
        setError(err);
        alert("Ocurrio un error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      Product
      {loading && <h1>Cargando</h1>}
      {error && <h1>Ocurrion un error</h1>}
      {!loading && !error && <span>{JSON.stringify(product)}</span>}
    </div>
  );
}
