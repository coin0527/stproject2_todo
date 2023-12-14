import React from "react";
import styled from "styled-components";

const SelectAll = styled.button`
  margin-top: 10px;
  @media screen and (max-width: 500px) {
    margin-top: 15px;
  }
`;

const TodoCheckAll = ({ todos, setTodos }) => {
  const handleSelectAll = () => {
    const allChecked = todos.every((todo) => todo.checked);
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      checked: !allChecked,
    }));
    setTodos(updatedTodos);
  };

  return <SelectAll onClick={handleSelectAll}>전체선택</SelectAll>;
};

export default TodoCheckAll;
