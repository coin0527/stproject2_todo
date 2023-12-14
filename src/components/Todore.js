import React, { useState } from "react";
import Modal from "react-modal";

export const Todore = ({ todo, onEdit }) => {
  const [editedText, setEditedText] = useState(todo.text);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEditTodo = () => {
    onEdit(todo.id, editedText);
    handleCloseModal();
  };
  return (
    <>
      <button onClick={handleOpenModal}>Edit</button>
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <h2>Edit Todo</h2>
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
        <button onClick={handleEditTodo}>Save</button>
        <button onClick={handleCloseModal}>Cancel</button>
      </Modal>
    </>
  );
};
