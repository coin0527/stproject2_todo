import React, { useEffect, useState } from "react";
import { Tododelete } from "../components/Tododelete";
import {
  Wrap,
  Container,
  Box,
  SContainer,
  Todolist,
  Buttonlist,
  Containter2,
  Line,
  InputWrap,
  Footer,
  RightMenu,
} from "../style/TodosStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser, faShare } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import TodoCheckAll from "../components/TodoCheckAll";

export const TodoSuccess = () => {
  const location = useLocation();
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]); // completedTodos를 밖에서 정의

  useEffect(() => {
    // Load todos from local storage when the component mounts
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);

    // Load completedTodos from local storage
    const storedCompletedTodos =
      JSON.parse(localStorage.getItem("completedTodos")) || [];
    setCompletedTodos(storedCompletedTodos);
  }, []);

  useEffect(() => {
    // Update todos when the location state changes (when navigating from Todo.js)
    if (location.state && location.state.todoInfo) {
      const todosArray = Array.isArray(location.state.todoInfo)
        ? location.state.todoInfo
        : [location.state.todoInfo];

      setTodos((prevTodos) => {
        const newTodos = todosArray.filter(
          (newTodo) => !prevTodos.some((prevTodo) => prevTodo.id === newTodo.id)
        );
        return [...newTodos, ...prevTodos];
      });
    }
  }, [location.state]);

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    // Find the deleted todo in completedTodos
    const deletedTodo = completedTodos.find((todo) => todo.id === id);

    setTodos(updatedTodos);

    if (deletedTodo) {
      // Remove the deleted todo from completedTodos
      setCompletedTodos((prevCompletedTodos) =>
        prevCompletedTodos.filter((todo) => todo.id !== id)
      );
    }

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    localStorage.setItem(
      "completedTodos",
      JSON.stringify(completedTodos.filter((todo) => todo.id !== id))
    );
  };

  const handleCheckboxChange = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      );

      // Update completedTodos when todos change
      setCompletedTodos(updatedTodos.filter((todo) => todo.checked));

      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      localStorage.setItem(
        "completedTodos",
        JSON.stringify(updatedTodos.filter((todo) => todo.checked))
      );

      return updatedTodos;
    });
  };

  const handleDeleteChecked = () => {
    const updatedTodos = todos.filter((todo) => !todo.checked);
    setTodos(updatedTodos);
    setCompletedTodos([]);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    localStorage.setItem("completedTodos", JSON.stringify([]));
  };

  const count = completedTodos.length;

  return (
    <Wrap>
      <InputWrap>
        <h3>완료목록</h3>
      </InputWrap>
      <Line />
      <Containter2>
        <Link to={"/todo"}>
          <FontAwesomeIcon
            icon={faShare}
            style={{ marginTop: "20px", fontSize: "20px" }}
          />
        </Link>

        <h3 style={{ fontSize: "20px", fontWeight: "600", marginTop: "20px" }}>
          count: {count}
        </h3>
      </Containter2>
      <Container>
        <Footer>
          <TodoCheckAll todos={completedTodos} setTodos={setCompletedTodos} />
          <RightMenu>
            <FontAwesomeIcon
              icon={faEraser}
              onClick={handleDeleteChecked}
              style={{
                fontSize: "25px",
                marginLeft: "25px",
                cursor: "pointer",
                color: "crimson",
              }}
            />
          </RightMenu>
        </Footer>

        {completedTodos.length > 0 ? (
          completedTodos.map((todo) => (
            <Box key={todo.id}>
              <SContainer>
                <div>
                  <input
                    type="checkbox"
                    style={{ marginBottom: "15px", marginRight: "10px" }}
                    checked={todo.checked}
                    onChange={() => handleCheckboxChange(todo.id)}
                  />
                </div>
                <Todolist>{todo.text}</Todolist>
              </SContainer>

              <Buttonlist>
                <Tododelete
                  index={todo.id}
                  onDelete={() => handleDelete(todo.id)}
                />
              </Buttonlist>
            </Box>
          ))
        ) : (
          <p>완료된 할 일이 없습니다.</p>
        )}
      </Container>
    </Wrap>
  );
};
