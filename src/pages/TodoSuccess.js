import { useCallback, useEffect, useState } from "react";
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
    setTodos(updatedTodos);
  };

  const handleCheckboxChange = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
  };

  const setTodosCallback = useCallback(
    (updatedTodos) => {
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTodos(updatedTodos);
    },
    [setTodos]
  );

  const handleDeleteChecked = () => {
    const updatedTodos = todos.filter((todo) => !todo.checked);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const count = todos.length;

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
          <TodoCheckAll todos={todos} setTodos={setTodosCallback} />
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
                <Tododelete index={todo.id} onDelete={handleDelete} />
              </Buttonlist>
            </Box>
          ))
        ) : (
          <p>오늘의 할 일이 끝났습니다!!</p>
        )}
      </Container>
    </Wrap>
  );
};
