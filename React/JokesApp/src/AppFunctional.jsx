import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import useJokes from "./hooks/useJokes";
function UseEffectTestComponent() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    // Usar cuando necesitamos cargar contenido al cargar nuestro componente por primera vez
    console.log("Componente renderizado");
  }, []);

  useEffect(() => {
    // Usar cuando necesitamos realizar operaciones al cambiar valores del stado
    console.log("Componente Actualizado");
  }, [show]);

  return (
    <div>
      <h1>AppFunctional</h1>
      {show && <OtroComponente></OtroComponente>}
      <Button
        variant="success"
        onClick={() => {
          setShow(!show);
        }}
      >
        Mostrar Otro Componente
      </Button>
    </div>
  );
}

function OtroComponente() {
  useEffect(() => {
    return () => {
      // Usar cuando nos queremos desuscribir a servicios o cerrar conexiones
      // Eliminar event listeners
      console.log("Otro Componente desmontado");
    };
  }, []);
  return <p>OtroComponente</p>;
}

export default function AppFunctional() {
  const { search, setSearch, jokes, loading, searchJoke } = useJokes();

  return (
    <>
      {/* <UseEffectTestComponent></UseEffectTestComponent>; */}

      <div className="container">
        <div className="row p-4">
          <div className="col-10">
            <input
              type="text"
              name="searchInput"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              id="searchInput"
              className="form-control"
            />
          </div>
          <div className="col-2">
            <button className="btn btn-outline-primary" onClick={searchJoke}>
              Buscar
            </button>
          </div>
          <div className="col-12 row gap-2 p-4">
            {loading ? (
              <h3>Cargando</h3>
            ) : (
              <>
                {jokes.length > 0 && (
                  <>
                    {jokes.map(({ id, joke }, index) => (
                      <div className="card col-4" key={index}>
                        <div className="card-body">
                          <h5 className="card-title">Joke!!!</h5>x``
                          <p className="card-text">{joke}</p>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
