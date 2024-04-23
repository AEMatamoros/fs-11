import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
export default function Header() {
  const { userName, firstName, lastName, age, isLogged, setIsLogged } =
    useContext(AppContext);
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const handleLogin = async () => {
    let response = await useFetch({
      method: "POST",
      url: "http://localhost:3000/auth",
      body: { username: "GoItUser" },
    });
    setIsLogged(true);
    setUserId(response.data.id);
    navigate("/");
  };

  const handleLogout = async () => {
    let response = await useFetch({
      method: "DELETE",
      url: "http://localhost:3000/auth" + "/" + userId,
      body: { username: "GoItUser" },
    });
    setIsLogged(false);
    setUserId(null);
    navigate("/landing");
  };

  //Location
  const location = useLocation();
  console.log(location);
  console.log(location.state);

  return (
    <nav className="navbar bg-body-tertiary border-bottom">
      <div className="container-fluid">
        <span className="brand">
          <NavLink to={"/"} className="td-none text-dark">
            <svg
              className="kOqhQd"
              aria-hidden="true"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0,0h40v40H0V0z"></path>
              <g>
                <path
                  d="M19.7,19.2L4.3,35.3c0,0,0,0,0,0c0.5,1.7,2.1,3,4,3c0.8,0,1.5-0.2,2.1-0.6l0,0l17.4-9.9L19.7,19.2z"
                  fill="#EA4335"
                ></path>
                <path
                  d="M35.3,16.4L35.3,16.4l-7.5-4.3l-8.4,7.4l8.5,8.3l7.5-4.2c1.3-0.7,2.2-2.1,2.2-3.6C37.5,18.5,36.6,17.1,35.3,16.4z"
                  fill="#FBBC04"
                ></path>
                <path
                  d="M4.3,4.7C4.2,5,4.2,5.4,4.2,5.8v28.5c0,0.4,0,0.7,0.1,1.1l16-15.7L4.3,4.7z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M19.8,20l8-7.9L10.5,2.3C9.9,1.9,9.1,1.7,8.3,1.7c-1.9,0-3.6,1.3-4,3c0,0,0,0,0,0L19.8,20z"
                  fill="#34A853"
                ></path>
              </g>
            </svg>
            Alev Plaiestore
          </NavLink>
        </span>
        {isLogged && (
          <label title={`${firstName} ${lastName}`}>{userName}</label>
        )}

        <NavLink
          to={"/about"}
          state={{ from: location.pathname }}
          className="cursor-pointer text-success fw-bold"
        >
          Sobre la App
        </NavLink>
        {isLogged ? (
          <strong
            className="cursor-pointer"
            onClick={() => {
              handleLogout();
            }}
          >
            Cerrar Sesion
          </strong>
        ) : (
          <strong
            className="cursor-pointer"
            onClick={() => {
              handleLogin();
            }}
          >
            Iniciar Sesion
          </strong>
        )}
      </div>
    </nav>
  );
}
