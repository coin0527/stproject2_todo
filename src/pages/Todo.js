import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 80vh;
  border: 1px solid black;
  border-top: none;
  box-sizing: border-box;
`;

const InputWrap = styled.div``;
const Input = styled.div``;
const Button = styled.div``;
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
`;
const Darkmode = styled.div``;
const RightMenu = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
`;
const SelectAll = styled.div``;
const Complete = styled.div``;
const Delete = styled.div``;
const Box = styled.div`
  width: 100%;
  height: 95%;
`;

export const Todo = () => {
  return (
    <Wrap>
      <InputWrap>
        <Input />
        <Button />
      </InputWrap>

      <Container>
        <Box></Box>
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
