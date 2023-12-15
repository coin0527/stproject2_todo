import { useState } from "react";
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
import {
  faCheck,
  faEraser,
  faPencil,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  // 할 일
  const { register, handleSubmit, reset } = useForm({
    // input
    mode: "onSubmit",
  });
  const handleAddTodo = (data) => {
    // 입력한 값 추가
    setTodos([
      ...todos,
      { id: todos.length + 1, checked: false, text: data.search },
    ]);
    reset();
  };

  const handleDelete = (id) => {
    // 삭제
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const handleDeleteChecked = () => {
    // 체크된거 삭제
    const updatedTodos = todos.filter((todo) => !todo.checked);
    setTodos(updatedTodos);
  };

  const handleCheckboxChange = (id) => {
    // 체크
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
  };

  const handleEditTodo = (id, editedText) => {
    //모달
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: editedText } : todo
    );
    setTodos(updatedTodos);
  };

  const count = todos.length; // 할일 갯수
  return (
    <Wrap>
      <InputWrap>
        <FontAwesomeIcon
          icon={faPencil}
          style={{ fontSize: "24px", lineHeight: "50px" }}
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
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{
                    fontSize: "20px",
                    marginLeft: "15px",
                    cursor: "pointer",
                  }}
                />
                <Todore todo={todo} onEdit={handleEditTodo} />
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
          <TodoCheckAll todos={todos} setTodos={setTodos} />
          <FontAwesomeIcon
            icon={faCheck}
            style={{
              fontSize: "30px",
              marginLeft: "30px",
              marginTop: "5px",
              cursor: "pointer",
            }}
          ></FontAwesomeIcon>
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
