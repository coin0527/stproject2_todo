import React, { useState } from "react";
import { faPenToSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/style.css";

const Todore = ({ onEdit }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalInputValue, setModalInputValue] = useState("");

  const handleEditClick = () => {
    setModalInputValue;
    setModalOpen(true);
  };

  const handleModalSave = () => {
    onEdit(modalInputValue);
    setModalOpen(false);
    setModalInputValue("");
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setModalInputValue("");
  };

  return (
    <>
      <FontAwesomeIcon
        icon={faPenToSquare}
        style={{ fontSize: "20px", cursor: "pointer", marginLeft: "15px" }}
        onClick={handleEditClick}
      />

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <input
              type="text"
              value={modalInputValue}
              onChange={(e) => setModalInputValue(e.target.value)}
            />
            <button onClick={handleModalSave}>저장</button>
            <FontAwesomeIcon
              icon={faTimes}
              className="modal-close"
              onClick={handleModalClose}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Todore;
