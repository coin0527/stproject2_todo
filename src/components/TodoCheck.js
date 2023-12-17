import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const TodoCheck = ({ todo, onTodoSuccess }) => {
  // useCallback을 사용하여 함수 생성 최적화
  const handleCheck = useCallback(() => {
    onTodoSuccess(todo);
  }, [onTodoSuccess, todo]);

  return (
    <FontAwesomeIcon
      icon={faCheck}
      style={{
        fontSize: "20px",
        marginLeft: "15px",
        cursor: "pointer",
      }}
      onClick={handleCheck}
    />
  );
};

export default TodoCheck;
