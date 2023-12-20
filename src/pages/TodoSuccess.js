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
import { faEraser } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import TodoCheckAll from "../components/TodoCheckAll";
import { LeftMenu } from "../style/TodoStyle";

export const TodoSuccess = () => {
  const location = useLocation();
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);

    const storedCompletedTodos =
      JSON.parse(localStorage.getItem("completedTodos")) || [];
    setCompletedTodos(storedCompletedTodos);
  }, []);

  useEffect(() => {
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

    const deletedTodo = completedTodos.find((todo) => todo.id === id);

    setTodos(updatedTodos);

    if (deletedTodo) {
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

      <Container>
        <Footer>
          <LeftMenu>
            <TodoCheckAll todos={completedTodos} setTodos={setCompletedTodos} />
            <h3> 전체선택 </h3>
          </LeftMenu>

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
      <Containter2>
        <h3 style={{ fontSize: "20px", fontWeight: "600", marginTop: "10px" }}>
          완료한 일 : {count}
        </h3>

        <Link to={"/todo"}>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
              fontWeight: "600",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "teal",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                borderBottom: "1px solid teal",
                padding: "5px",
                marginBottom: "5px",
              }}
            >
              Active →
            </span>
          </button>
        </Link>
      </Containter2>
    </Wrap>
  );
};
