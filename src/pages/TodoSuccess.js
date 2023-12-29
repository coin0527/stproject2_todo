import React, { useEffect, useState, useCallback } from "react";
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
import { faChevronLeft, faEraser } from "@fortawesome/free-solid-svg-icons";
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

    setCompletedTodos((prevCompletedTodos) => {
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return prevCompletedTodos.filter((todo) => todo.id !== id);
    });
  };
  const handleBoxClick = (id) => {
    setCompletedTodos((prevCompletedTodos) => {
      const updatedTodos = prevCompletedTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      );
      localStorage.setItem("completedTodos", JSON.stringify(updatedTodos));

      return updatedTodos;
    });
  };

  const handleCheckAll = useCallback(() => {
    setCompletedTodos((prevCompletedTodos) => {
      const allChecked = prevCompletedTodos.every((todo) => todo.checked);
      const updatedTodos = prevCompletedTodos.map((todo) => ({
        ...todo,
        checked: !allChecked,
      }));
      localStorage.setItem("completedTodos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }, [setCompletedTodos]);

  const handleDeleteChecked = () => {
    const updatedTodos = completedTodos.filter((todo) => !todo.checked);

    setCompletedTodos((prevCompletedTodos) => {
      localStorage.setItem("completedTodos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
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
            icon={faChevronLeft}
            style={{
              fontSize: "30px",
              color: "#808080",
            }}
          />
        </Link>
        <h3 style={{ fontSize: "16px", fontWeight: "600", marginTop: "10px" }}>
          완료한 일 : {count}
        </h3>
      </Containter2>

      <Container>
        <Footer>
          <LeftMenu>
            <TodoCheckAll
              todos={completedTodos}
              setCompletedTodos={setCompletedTodos}
            />
            <h3 onClick={handleCheckAll}> 전체선택 </h3>
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
            <Box key={todo.id} onClick={() => handleBoxClick(todo.id)}>
              <SContainer>
                <div>
                  <input
                    type="checkbox"
                    style={{ marginRight: "15px" }}
                    checked={todo.checked}
                    onClick={() => handleBoxClick(todo.id)}
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
