import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Tododelete } from "../components/Tododelete";
import TodoCheckAll from "../components/TodoCheckAll";
import Todore from "../components/Todore";
import {
  Wrap,
  Form,
  InputWrap,
  Input,
  Button,
  Container,
  Footer,
  RightMenu,
  Box,
  SContainer,
  Todolist,
  Buttonlist,
  Line,
  Containter2,
} from "./TodoStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser, faPencil, faShare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import TodoCheck from "../components/TodoCheck";
import "../style/style.css";

export const Todo = () => {
  const [todos, setTodos] = useState([]);

  // 할 일 목록을 로컬 스토리지에서 불러오는 함수
  const loadTodosFromLocalStorage = () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  };

  useEffect(() => {
    loadTodosFromLocalStorage();
  }, []);

  // 할 일 추가
  const { register, handleSubmit, reset } = useForm({
    mode: "onSubmit",
  });

  const handleAddTodo = (data) => {
    const newTodo = { id: todos.length + 1, checked: false, text: data.search };
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
    reset();
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleCheckboxChange = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleDeleteChecked = () => {
    const updatedTodos = todos.filter((todo) => !todo.checked);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const setTodosCallback = useCallback(
    (updatedTodos) => {
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTodos(updatedTodos);
    },
    [setTodos]
  );

  const updateLocalStorageAndState = (updatedTodos) => {
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const handleEdit = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    updateLocalStorageAndState(updatedTodos);
  };

  const count = todos.length;

  return (
    <Wrap>
      <InputWrap>
        <FontAwesomeIcon
          icon={faPencil}
          style={{
            fontSize: "24px",
            lineHeight: "50px",
          }}
        />
        <Form onSubmit={handleSubmit(handleAddTodo)}>
          <Input
            {...register("search", {
              required: "내용을 입력해주세요.",
            })}
            type="text"
          />
        </Form>
        <Button onClick={handleSubmit(handleAddTodo)}> ADD </Button>
      </InputWrap>
      <Line />
      <Containter2>
        <Link to={"/todos"}>
          <FontAwesomeIcon
            icon={faShare}
            style={{ marginTop: "20px", fontSize: "20px" }}
          />
        </Link>

        <h3 style={{ fontSize: "20px", fontWeight: "600", marginTop: "20px" }}>
          count : {count}
        </h3>
      </Containter2>

      <Container>
        {todos.length > 0 ? (
          todos.map((todo) => (
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
                <TodoCheck />
                <Todore onEdit={(newText) => handleEdit(todo.id, newText)} />
                <Tododelete index={todo.id} onDelete={handleDelete} />
              </Buttonlist>
            </Box>
          ))
        ) : (
          <p>오늘의 할 일을 추가해주세요!!</p>
        )}
      </Container>
      <Footer>
        <RightMenu>
          <TodoCheckAll todos={todos} setTodos={setTodosCallback} />
          <TodoCheck completedTodos={todos.filter((todo) => todo.checked)} />
          <FontAwesomeIcon
            icon={faEraser}
            onClick={handleDeleteChecked}
            style={{
              fontSize: "25px",
              marginLeft: "25px",
              cursor: "pointer",
              color: "crimson",
            }}
          ></FontAwesomeIcon>
        </RightMenu>
      </Footer>
    </Wrap>
  );
};
