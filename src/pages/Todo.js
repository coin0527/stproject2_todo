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
} from "../style/TodoStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser, faPencil, faShare } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import TodoCheck from "../components/TodoCheck";
import "../style/TodoStyle";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodos, setSelectedTodos] = useState([]);
  const navigate = useNavigate();

  const loadTodosFromLocalStorage = () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  };

  useEffect(() => {
    loadTodosFromLocalStorage();
  }, []);

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

  const handleCheckboxSelectionChange = (id) => {
    setSelectedTodos((prevSelectedTodos) => {
      const isSelected = prevSelectedTodos.includes(id);
      return isSelected
        ? prevSelectedTodos.filter((selectedId) => selectedId !== id)
        : [...prevSelectedTodos, id];
    });
  };

  const handleCheckboxChange = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });

    handleCheckboxSelectionChange(id);
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

  const handleCheckTodos = (id, text) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);

    const completedTodo = { id, text, checked: true };
    const completedTodos =
      JSON.parse(localStorage.getItem("completedTodos")) || [];
    localStorage.setItem(
      "completedTodos",
      JSON.stringify([...completedTodos, completedTodo])
    );

    navigate("/Todos", {
      state: {
        todoInfo: selectedTodos.map((selectedId) => ({
          text: todos.find((todo) => todo.id === selectedId)?.text,
        })),
      },
    });
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
            defaultValue="" // 초기값 설정
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
        <Footer>
          <TodoCheckAll todos={todos} setTodos={setTodosCallback} />
          <RightMenu>
            <TodoCheck
              completedTodos={selectedTodos.map((selectedId) =>
                todos.find((todo) => todo.id === selectedId)
              )}
            />
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

        {todos.length > 0 ? (
          todos.map((todo) => (
            <Box key={todo.id}>
              <SContainer>
                <div>
                  <input
                    type="checkbox"
                    style={{ marginBottom: "15px", marginRight: "10px" }}
                    checked={todo.checked}
                    onChange={() => {
                      handleCheckboxChange(todo.id);
                    }}
                  />
                </div>

                <Todolist>{todo.text}</Todolist>
              </SContainer>

              <Buttonlist>
                <TodoCheck
                  onTodoSuccess={() => handleCheckTodos(todo.id, todo.text)}
                />
                <Todore
                  onEdit={(newText) => handleEdit(todo.id, newText)}
                  existingText={todo.text}
                />
                <Tododelete index={todo.id} onDelete={handleDelete} />
              </Buttonlist>
            </Box>
          ))
        ) : (
          <p>오늘의 할 일을 추가해주세요!!</p>
        )}
      </Container>
    </Wrap>
  );
};
