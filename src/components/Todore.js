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
    onClick(); // Todo.js에서 전달한 함수 호출하여 상태를 토글
  }, [onClick]);

  const handleOutsideClick = useCallback(
    (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        // 모달 외부를 클릭했을 때 모달을 닫음
        handleModalClose();
      }
    },
    [handleModalClose]
  );

  useEffect(() => {
    // 모달이 열릴 때, 모달 외부 클릭 이벤트를 추가
    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      // 컴포넌트가 언마운트될 때, 이벤트 리스너를 정리
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen, handleOutsideClick]); // handleOutsideClick을 의존성 배열에 추가

  const handleEditClick = () => {
    onClick(); // Todo.js에서 전달한 함수 호출하여 상태를 토글
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
    onClick(); // Todo.js에서 전달한 함수 호출하여 상태를 토글
  };

  const handleModalBackgroundClick = (e) => {
    // 모달 배경 클릭 시 모달을 닫음
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
        style={{ fontSize: "20px", cursor: "pointer", marginLeft: "15px" }}
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
