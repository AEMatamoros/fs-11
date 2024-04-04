import React from "react";
import Button from "./shared/Button";
import App1IMG from "../assets/img/app1.webp";

export default function Modal({ showModal, handleCloseModal, currentApp }) {
  return (
    <div
      className={`backdrop ${!showModal && "is-hidden"}`}
      data-modal
      onClick={handleCloseModal}
    >
      <div className="modalOPT2">
        <div className="card bg-dark text-white">
          <img className="card-img" src={currentApp.img} alt="Card image" />
          <div className="card-img-overlay p-4">
            <h5 className="card-title">{currentApp.name}</h5>
            <p className="card-text">{currentApp.description}</p>
            <p className="card-text">{currentApp.price}</p>
          </div>
        </div>
        {/* <Button
          type={"danger"}
          text={"Cerrar"}
          click={handleCloseModal}
          // className={"text-black"}
        /> */}
      </div>
    </div>
  );
}
