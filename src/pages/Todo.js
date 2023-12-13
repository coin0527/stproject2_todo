import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 80vh;
  border-top: none;
  box-sizing: border-box;
`;
const Form = styled.form`
  width: 40%;
`;
const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 95%;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -1px;
  text-align: center;
  background-color: skyblue;
  color: white;
  @media screen and (max-width: 500px) {
    border-radius: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80%;
    height: 100px;
    border: none;
    background-color: transparent;
    color: black;
  }
`;
const Button = styled.button`
  all: unset;
  width: 80px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  background-color: skyblue;
  color: #333;
  font-weight: 600;
  &:hover {
    background-color: #0056b3;
    transition-duration: 0.5s;
  }

  @media screen and (max-width: 500px) {
    border-radius: 0;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20%;
    height: 100px;
    border: none;
    font-size: 30px;
    background-color: transparent;
  }
`;
const Container = styled.div`
  width: 60%;
  height: 50%;
  max-height: 500px;
  overflow-y: auto;
  border: 1px solid black;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%);
  padding: 10px;
  box-sizing: border-box;
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    font-size: 18px;
    font-weight: 600;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
    top: 10%;
  }
`;
const Footer = styled.div`
  width: 100%;
  max-width: 50%;
  margin: 530px auto;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px 10px 10px;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    max-width: 100%;
    margin: 450px auto;
  }
`;
const Darkmode = styled.button`
  margin-top: 10px;
`;
const RightMenu = styled.div`
  width: 100%;
  max-width: 250px;
  display: flex;
  justify-content: space-between;
`;
const SelectAll = styled.button`
  margin-top: 10px;
`;
const Complete = styled.button`
  margin-top: 10px;
`;
const Delete = styled.button`
  margin-top: 10px;
`;
const Box = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  padding: 15px 10px;
  border: 1px solid black;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const SContainer = styled.div`
  display: flex;
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
        <Button onClick={handleSubmit(handleAddTodo)}> ADD </Button>
      </InputWrap>

      <Container>
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <Box key={index}>
              <SContainer>
                <div>
                  <input
                    type="checkbox"
                    style={{ marginBottom: "15px", marginRight: "10px" }}
                  />
                </div>

                <Todolist>{todo}</Todolist>
              </SContainer>

              <Buttonlist>
                <Button1>하나</Button1>
                <Button2>두울</Button2>
                <Button3>세엣</Button3>
              </Buttonlist>
            </Box>
          ))
        ) : (
          <p>오늘의 할 일을 추가해주세요!!</p>
        )}
      </Container>
      <Footer>
        <Darkmode>다크모드</Darkmode>
        <RightMenu>
          <SelectAll>전체선택</SelectAll>
          <Complete>완료</Complete>
          <Delete>삭제</Delete>
        </RightMenu>
      </Footer>
    </Wrap>
  );
};
