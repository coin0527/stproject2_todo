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
  LeftMenu,
} from "../style/TodoStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import TodoCheck from "../components/TodoCheck";
import "../style/TodoStyle";
import { GlobalStyles } from "../style/GlobalStyles";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodos, setSelectedTodos] = useState([]);
  const navigate = useNavigate();
  const [isTodoreClicked, setTodoreClicked] = useState(false);

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

    if (-1 > 0) {
      navigate("/Todos", {
        state: {
          todoInfo: selectedTodos.map((selectedId) => ({
            text: todos.find((todo) => todo.id === selectedId)?.text,
          })),
        },
      });
    }
  };

  const handleBoxClick = (id) => {
    handleCheckboxChange(id);
  };

  const handleTodoreClick = () => {
    setTodoreClicked(!isTodoreClicked);
  };

  const handleCheckAll = () => {
    const allChecked = todos.every((todo) => todo.checked);
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      checked: !allChecked,
    }));
    setTodosCallback(updatedTodos);
    setSelectedTodos(allChecked ? [] : todos.map((todo) => todo.id));
  };

  const count = todos.length;

  return (
    <>
      <GlobalStyles isTodoreClicked={isTodoreClicked} />
      <Wrap>
        <InputWrap>
          <FontAwesomeIcon
            icon={faPlus}
            style={{
              fontSize: "30px",
              marginTop: "8px",
            }}
          />
          <Form onSubmit={handleSubmit(handleAddTodo)}>
            <Input
              {...register("search", {
                required: "내용을 입력해주세요.",
              })}
              type="text"
              defaultValue=""
            />
          </Form>
          <Button onClick={handleSubmit(handleAddTodo)}> ADD </Button>
        </InputWrap>

        <Line />

        <Containter2>
          <h3
            style={{ fontSize: "16px", fontWeight: "600", marginTop: "15px" }}
          >
            남은 할 일 : {count}
          </h3>
        </Containter2>

        <Container>
          <Footer>
            <LeftMenu>
              <TodoCheckAll
                todos={todos}
                setCompletedTodos={setTodosCallback}
                selectedTodos={selectedTodos}
              />
              <h3 onClick={handleCheckAll}>전체선택</h3>
            </LeftMenu>

            <RightMenu>
              <Link to={"/todos"}>
                <button
                  style={{
                    backgroundColor: "#3282f3",
                    border: "1px solid #3282f3",
                    cursor: "pointer",
                    fontSize: "15px",
                    fontWeight: "600",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "#eee",
                    textDecoration: "none",
                    padding: "3px 6px",
                    borderRadius: "5px",
                  }}
                >
                  완료
                </button>
              </Link>

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
              <Box key={todo.id} onClick={() => handleBoxClick(todo.id)}>
                <SContainer>
                  <div>
                    <input
                      type="checkbox"
                      style={{
                        marginRight: "10px",
                      }}
                      checked={todo.checked}
                      onChange={() => {
                        handleCheckboxChange(todo.id);
                      }}
                      onClick={() => handleBoxClick(todo.id)}
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
                    onClick={handleTodoreClick}
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
    </>
  );
};
