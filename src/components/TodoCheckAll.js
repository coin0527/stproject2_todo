import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheckSquare as faCheckSquareSolid } from "@fortawesome/free-solid-svg-icons";

const TodoCheckAll = ({ todos, setTodos }) => {
  // useCallback을 사용하여 함수 생성 최적화
  const handleCheckAll = useCallback(() => {
    const allChecked = todos.every((todo) => todo.checked);
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      checked: !allChecked,
    }));

    // 상태를 변경
    setTodos(updatedTodos);
    // 로컬 스토리지에 업데이트된 할 일 목록을 저장
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }, [todos, setTodos]);

  const allChecked = todos.length > 0 && todos.every((todo) => todo.checked);

  return (
    <FontAwesomeIcon
      icon={allChecked ? faCheckSquareSolid : faSquare}
      style={{
        fontSize: "30px",
        marginRight: "10px",
        cursor: "pointer",
      }}
      onClick={handleCheckAll}
    />
  );
};

export default TodoCheckAll;
