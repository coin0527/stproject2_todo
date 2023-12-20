import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const TodoCheck = ({ onTodoSuccess }) => {
  const handleCheck = useCallback(() => {
    if (typeof onTodoSuccess === "function") {
      onTodoSuccess();
    }
  }, [onTodoSuccess]);

  return (
    <FontAwesomeIcon
      icon={faCheck}
      style={{
        fontSize: "20px",
        marginLeft: "15px",
        alignItems: "center",
        cursor: "pointer",
        color: "green",
      }}
      onClick={handleCheck}
    />
  );
};

export default TodoCheck;
