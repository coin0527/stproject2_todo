import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare as faCheckSquareSolid,
  faSquare,
} from "@fortawesome/free-regular-svg-icons";

const TodoCheckAll = ({ todos, setCompletedTodos }) => {
  const handleCheckAll = useCallback(() => {
    const allChecked = todos.every((todo) => todo.checked);
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      checked: !allChecked,
    }));

    setCompletedTodos(updatedTodos);

    localStorage.setItem("completedTodos", JSON.stringify(updatedTodos));
  }, [todos, setCompletedTodos]);

  const allChecked = todos.length > 0 && todos.every((todo) => todo.checked);

  return (
    <FontAwesomeIcon
      icon={allChecked ? faCheckSquareSolid : faSquare}
      style={{
        fontSize: "24px",
        marginRight: "10px",
        marginBottom: "5px",
        cursor: "pointer",
        color: allChecked ? "#3282f3" : "inherit",
      }}
      onClick={handleCheckAll}
    />
  );
};

export default TodoCheckAll;
