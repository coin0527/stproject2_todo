import React, { useState, useRef, useEffect, useCallback } from "react";
import { faPenToSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/style.css";

const Todore = ({ onEdit, existingText, onClick }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalInputValue, setModalInputValue] = useState("");
  const modalRef = useRef();

  const handleModalClose = useCallback(() => {
    setModalOpen(false);
    setModalInputValue("");

    const wrapElement = document.getElementById("wrap");
    if (wrapElement) {
      wrapElement.classList.remove("dark-background");
    }
    onClick();
  }, [onClick]);

  const handleOutsideClick = useCallback(
    (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleModalClose();
      }
    },
    [handleModalClose]
  );

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen, handleOutsideClick]);

  const handleEditClick = () => {
    onClick();
    setModalInputValue(existingText);
    setModalOpen(true);

    const wrapElement = document.getElementById("wrap");
    if (wrapElement) {
      wrapElement.classList.add("dark-background");
    }
  };

  const handleModalSave = () => {
    onEdit(modalInputValue);
    setModalOpen(false);
    setModalInputValue("");

    const wrapElement = document.getElementById("wrap");
    if (wrapElement) {
      wrapElement.classList.remove("dark-background");
    }
    onClick();
  };

  const handleModalBackgroundClick = (e) => {
    if (e.target.classList.contains("modal-background")) {
      handleModalClose();
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleModalSave();
    }
  };

  return (
    <>
      <FontAwesomeIcon
        icon={faPenToSquare}
        style={{
          fontSize: "20px",
          cursor: "pointer",
          marginLeft: "15px",
          color: "#555",
        }}
        onClick={handleEditClick}
      />

      {isModalOpen && (
        <div
          className="modal"
          ref={modalRef}
          onClick={handleModalBackgroundClick}
        >
          <div className="modal-content">
            <div className="modal-title">수정하기</div>
            <input
              type="text"
              value={modalInputValue}
              onChange={(e) => setModalInputValue(e.target.value)}
              placeholder={`${existingText}`}
              onKeyDown={handleInputKeyDown}
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
