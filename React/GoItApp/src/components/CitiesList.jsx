import React, { useState } from "react";
import CustomSubtitle from "./shared/Subtitle";
import CustomButton from "./shared/Button";

import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function CitiesList({ content, setFatherState }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    let newContent = { ...content };
    newContent.cities.push(data.city);
    setFatherState(newContent);
    handleClose();
    reset();
  };

  return (
    <>
      <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
        <CustomSubtitle subtitleIcon={faPaintBrush}>Ciudades</CustomSubtitle>
        <div>
          <CustomButton onClick={handleShow}>Agregar Ciudad</CustomButton>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Ciudad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="city">Ciudad</label>
            <input
              type="text"
              className="form-control"
              id="city"
              {...register("city", { required: true, maxLength: 20 })}
            />
            {errors.city?.type === "required" && (
              <p style={{ color: "red" }}>Campo Requerido</p>
            )}
            {errors.city?.type === "maxLength" && (
              <p style={{ color: "red" }}>El maximo valor es 5</p>
            )}
            <Button type="submit">Agregar</Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
