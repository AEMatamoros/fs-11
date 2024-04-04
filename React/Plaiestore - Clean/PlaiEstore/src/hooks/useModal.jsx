import React, { useState } from "react";

export default function useModal() {
  const [showModal, setShowModal] = useState(false);
  const handleshowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return { showModal, handleshowModal, handleCloseModal };
}
