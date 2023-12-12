import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 80vh;
  border: 1px solid black;
  border-top: none;
  box-sizing: border-box;
`;

const InputWrap = styled.div``;
const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 50%;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -1px;
  text-align: center;
  margin-right: 30px;
  position: relative;
  left: 25%;
`;
const Container = styled.div`
  width: 50%;
  height: 50%;
  border: 1px solid black;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%);
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px 10px 10px;
`;
const Darkmode = styled.button``;
const RightMenu = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
`;
const SelectAll = styled.button``;
const Complete = styled.button``;
const Delete = styled.button``;
const Box = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  padding: 15px 10px;
  border: 1px solid black;
  justify-content: space-between;
`;
const Form = styled.form`
  width: 100%;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
`;
const Todolist = styled.div``;

const Buttonlist = styled.ul`
  button {
    margin-right: 10px;
  }
`;
const Button1 = styled.button``;
const Button2 = styled.button``;
const Button3 = styled.button``;
const Button = styled.button``;

export const Todo = () => {
  const { register, handleSubmit, reset } = useForm({
    mode: "onSubmit",
  });
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (data) => {
    setTodos([...todos, data.search]);
    reset();
  };

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
        <Button> ADD </Button>
      </InputWrap>

      <Container>
        {todos.map((todo, index) => (
          <Box key={index}>
            <Todolist>{todo}</Todolist>
            <Buttonlist>
              <Button1>하나</Button1>
              <Button2>두울</Button2>
              <Button3>세엣</Button3>
            </Buttonlist>
          </Box>
        ))}
        <Footer>
          <Darkmode>다크모드</Darkmode>
          <RightMenu>
            <SelectAll>전체선택</SelectAll>
            <Complete>완료</Complete>
            <Delete>삭제</Delete>
          </RightMenu>
        </Footer>
      </Container>
    </Wrap>
  );
};
