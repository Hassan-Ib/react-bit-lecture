import React, { useEffect } from "react";

const Modal = ({ modalContent, closeModal, isModalOpen }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      closeModal();
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [isModalOpen, closeModal]);
  return (
    <div className="modal">
      <h4>{modalContent}</h4>
    </div>
  );
};

export default Modal;
