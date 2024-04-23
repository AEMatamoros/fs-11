import React, { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
export default function About() {
  const location = useLocation();
  console.log(location);
  console.log(location.state);

  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row">
          <nav className="col-12">
            <ul className="row w-100">
              <li className="col-4 m-0">
                <NavLink to={"/about"}>Inicio About</NavLink>
              </li>
              <li className="col-4 m-0">
                <NavLink to={"/about/price"}>Precios</NavLink>
              </li>
              <li className="col-4 m-0">
                <NavLink to={"/about/tecs"}>Tecnologias</NavLink>
              </li>
            </ul>
          </nav>
          <div>About</div>
          <Suspense fallback={<h1>Loading</h1>}>
            <Outlet></Outlet>
          </Suspense>
          <button
            onClick={() => {
              navigate(location.state.from);
            }}
            className="btn btn-warning"
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
}
