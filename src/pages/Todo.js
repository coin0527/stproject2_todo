import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Tododelete } from "../components/Tododelete";
import TodoCheckAll from "../components/TodoCheckAll";
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
import { Todore } from "../components/Todore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser, faPencil, faShare } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import TodoCheck from "../components/TodoCheck";

export const Todo = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  // 할 일 목록을 로컬 스토리지에서 불러오는 함수
  const loadTodosFromLocalStorage = () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  };

  useEffect(() => {
    loadTodosFromLocalStorage();
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

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

  // 할 일 삭제
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  // 체크된 할 일 삭제
  const handleDeleteChecked = () => {
    const updatedTodos = todos.filter((todo) => !todo.checked);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  // 체크박스 변경
  const handleCheckboxChange = (id) => {
    // 할 일 목록을 가져오기
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );

    // 로컬 스토리지와 상태를 업데이트
    updateLocalStorageAndState(updatedTodos);
  };

  const handleTodoSuccess = (todo) => {
    const updatedTodos = todos.filter((t) => t.id !== todo.id);

    updateLocalStorageAndState(updatedTodos);

    // const todoInfo = { id: todo.id, checked: todo.checked, text: todo.text };
    // navigate("/todos", { state: { todoInfo } });
  };

  const updateLocalStorageAndState = (updatedTodos) => {
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    setTodos(updatedTodos);
  };

  const setTodosCallback = useCallback(
    (updatedTodos) => {
      // 로컬 스토리지에 업데이트된 할 일 목록을 저장
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      // 상태를 변경
      setTodos(updatedTodos);
    },
    [setTodos]
  );

  const count = todos.length;

  return (
    <Wrap>
      <InputWrap>
        <FontAwesomeIcon
          icon={faPencil}
          style={{
            fontSize: "24px",
            lineHeight: "50px",
            "@media (max-width: 600px)": {
              display: "none",
            },
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
                <TodoCheck todo={todo} onTodoSuccess={handleTodoSuccess} />
                <Todore />
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
              fontSize: "30px",
              marginTop: "5px",
              marginLeft: "30px",
              cursor: "pointer",
            }}
          ></FontAwesomeIcon>
        </RightMenu>
      </Footer>
    </Wrap>
  );
};
