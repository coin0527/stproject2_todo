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
  Complete,
  Box,
  SContainer,
  Todolist,
  Buttonlist,
  Button1,
  Button2,
  Delete,
} from "./TodoStyle";

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
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
  };

  const count = todos.length; // 할일 갯수
  return (
    <Wrap>
      <InputWrap>
        <Form onSubmit={handleSubmit(handleAddTodo)}>
          <Input
            {...register("search", {
              required: "내용을 입력해주세요.",
            })}
            type="text"
            placeholder="내용입력"
          />
        </Form>
        <Button onClick={handleSubmit(handleAddTodo)}> ADD </Button>
      </InputWrap>

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
                <Button1>하나</Button1>
                <Button2>두울</Button2>
                <Tododelete index={todo.id} onDelete={handleDelete} />
              </Buttonlist>
            </Box>
          ))
        ) : (
          <p>오늘의 할 일을 추가해주세요!!</p>
        )}
      </Container>
      <Footer>
        <h3>count : {count}</h3>
        <RightMenu>
          <TodoCheckAll todos={todos} setTodos={setTodos} />
          <Complete>완료</Complete>
          <Delete onClick={handleDeleteChecked}>삭제</Delete>
        </RightMenu>
      </Footer>
    </Wrap>
  );
};
