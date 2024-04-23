import React from "react";
import Button from "./shared/Button";
import { NavLink } from "react-router-dom";
import App1IMG from "../assets/img/app1.webp";

export default function Modal({ showModal, handleCloseModal, currentApp }) {
  return (
    <div
      className={`backdrop ${!showModal && "is-hidden"}`}
      data-modal
      onClick={handleCloseModal}
    >
      <div className="modalOPT2">
        <div className="card bg-dark text-white position-relative">
          <img className="card-img" src={currentApp.img} alt="Card image" />
          <div className="card-img-overlay p-4">
            <h5 className="card-title">{currentApp.name}</h5>
            <p className="card-text">{currentApp.description}</p>
            <p className="card-text">{currentApp.price}</p>
          </div>
          <NavLink
            to={
              `/product/${currentApp.id}?` +
              new URLSearchParams({ ...currentApp })
            }
            className={
              "position-absolute top-0 end-0 p-2 bg-success text-white td-none rounded"
            }
          >
            Ver Aplicacion
          </NavLink>
        </div>
      </div>
    </div>
  );
}
