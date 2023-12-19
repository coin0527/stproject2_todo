import React, { useState } from "react";
import { faPenToSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/style.css";

const Todore = ({ onEdit, existingText }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalInputValue, setModalInputValue] = useState("");

  const handleEditClick = () => {
    // 수정하기 버튼 클릭 시 기존 텍스트를 입력란에 설정
    setModalInputValue(existingText);
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
            <div className="modal-title">수정하기</div>
            <input
              type="text"
              value={modalInputValue}
              onChange={(e) => setModalInputValue(e.target.value)}
              placeholder={`${existingText}`}
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
