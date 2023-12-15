import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TodoCheckAll = ({ todos, setTodos }) => {
  const handleSelectAll = () => {
    const allChecked = todos.every((todo) => todo.checked);
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      checked: !allChecked,
    }));
    setTodos(updatedTodos);
  };

  return (
    <FontAwesomeIcon
      icon={faSquareCheck}
      onClick={handleSelectAll}
      style={{
        fontSize: "30px",
        marginTop: "5px",
        marginLeft: "30px",
        cursor: "pointer",
      }}
    />
  );
};

export default TodoCheckAll;
