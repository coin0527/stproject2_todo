import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const TodoCheck = ({ todo, onTodoSuccess }) => {
  const handleCheck = useCallback(() => {
    if (typeof onTodoSuccess === "function") {
      onTodoSuccess(todo);
    }
  }, [onTodoSuccess, todo]);

  return (
    <FontAwesomeIcon
      icon={faCheck}
      style={{
        fontSize: "20px",
        marginLeft: "15px",
        cursor: "pointer",
        color: "green",
      }}
      onClick={handleCheck}
    />
  );
};

export default TodoCheck;
