import { useState, useContext, useRef, useEffect } from "react";
import Card from "./Card";
// import { CardBody, CardIMG } from "./Card";
import Modal from "./Modal";
import useModal from "../hooks/useModal";
import useFetch from "../hooks/useFetch";
import { AppContext } from "../App";
export default function Home() {
  //Contexto
  const { isLogged } = useContext(AppContext);
  //Referencias
  const inputRef = useRef(null);
  //Modal
  const { showModal, handleshowModal, handleCloseModal } = useModal();
  //Manejar el estado
  // Apps
  const [apps, setApps] = useState({
    data: [],
    err: null,
    loading: false,
  });
  // Apps Filtradas
  const [filteredApps, setFilteredApps] = useState({
    filterValue: "",
    data: [],
  });
  // App Actual
  const [currentApp, setCurrentApp] = useState({
    id: 0,
    img: "https://play-lh.googleusercontent.com/VHuxzkMizO75MHpRnUWPnOh9bo2KccdsBUREDnNArlIBPzdTo_OWwIU_Pj3mFLut0Vzp=w526-h296-rw",
    name: "Default",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolor, eos porro soluta sunt eaque!",
    price: 0,
    rating: 5,
  });

  const handleCleanInput = () => {
    // console.log(inputRef.current.value);
    // console.log(inputRef.value);
    inputRef.current.value = "";
  };

  //Peticion Inicial
  const fetchApps = async () => {
    try {
      let response = useFetch({
        url: "http://localhost:3000/apps",
        method: "GET",
      });
      let responseContent = await response;
      setApps((oldState) => {
        return { ...oldState, data: responseContent.data };
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Filter apps
  const handleFilter = () => {
    if (filteredApps.filterValue.trim()) {
      setFilteredApps((oldState) => {
        return {
          ...oldState,
          data: apps.data.filter((app) =>
            app.name
              .toLowerCase()
              .includes(filteredApps.filterValue.toLocaleLowerCase())
          ),
        };
      });
    } else {
      setFilteredApps((oldState) => {
        return { ...oldState, data: apps.data };
      });
    }
  };

  useEffect(() => {
    fetchApps();
    // useFetch({
    //   url: "http://localhost:3000/apps",
    //   method: "GET",
    // }).then((res) => {
    //   // llamar setState para asignar valor al estado
    //   console.log("first", res);
    // });
  }, []);

  useEffect(() => {
    handleFilter();
  }, [apps.data, filteredApps.filterValue]);

  return (
    <>
      {isLogged ? (
        <>
          <div className="container">
            <div className="row p-4 ">
              <form className="d-flex col-12 mb-4" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Mario..."
                  aria-label="Mario..."
                  ref={inputRef}
                  value={filteredApps.filterValue}
                  onChange={(e) => {
                    setFilteredApps((oldState) => {
                      return { ...oldState, filterValue: e.target.value };
                    });
                  }}
                />
                <button className="btn btn-outline-success" type="button">
                  Buscar
                </button>
                <button
                  className="btn btn-outline-info mx-2"
                  type="button"
                  onClick={handleCleanInput}
                >
                  Limpiar
                </button>
                <button className="btn btn-outline-warning mx-2" type="button">
                  Ver
                </button>
              </form>
              {!!filteredApps.data &&
                filteredApps.data.length > 0 &&
                filteredApps.data.map((app, index) => (
                  <Card
                    app={app}
                    key={index}
                    handleshowModal={handleshowModal}
                    setCurrentApp={setCurrentApp}
                  >
                    {/* <CardIMG></CardIMG>
                <CardBody></CardBody> */}
                    <Card.CardIMG></Card.CardIMG>
                    <Card.CardBody></Card.CardBody>
                  </Card>
                ))}
            </div>
          </div>
          <Modal
            showModal={showModal}
            handleCloseModal={handleCloseModal}
            currentApp={currentApp}
          ></Modal>
        </>
      ) : (
        <h3>Debes estar logueado para ver contenido</h3>
      )}
    </>
  );
}
