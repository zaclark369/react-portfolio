import React from 'react';

const Modal = ({ onClose, currentProject }) => {
  const { name, description, category } = currentProject;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img
          src={require(`../../assets/projects/${category}/.jpg`).default}
          alt="current category"
        />
        <p>{description}</p>
        <button type="button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
