import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare as faCheckSquareSolid } from "@fortawesome/free-solid-svg-icons";

const TodoCheckAll = ({ todos, setTodos }) => {
  const handleCheckAll = useCallback(() => {
    const allChecked = todos.every((todo) => todo.checked);
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      checked: !allChecked,
    }));

    setTodos(updatedTodos);

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }, [todos, setTodos]);

  const allChecked = todos.length > 0 && todos.every((todo) => todo.checked);

  return (
    <FontAwesomeIcon
      icon={allChecked ? faCheckSquareSolid : faCheckSquareSolid}
      style={{
        fontSize: "30px",
        marginRight: "10px",
        cursor: "pointer",
        color: "skyblue",
      }}
      onClick={handleCheckAll}
    />
  );
};

export default TodoCheckAll;
