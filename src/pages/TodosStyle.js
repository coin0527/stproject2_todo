import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 80vh;
  border-top: none;
  box-sizing: border-box;
`;

export const Form = styled.form`
  width: 40%;
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  h3 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 30px;
    h3 {
      font-size: 40px;
    }
  }
`;

export const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 95%;
  height: 30px;
  border: 1px solid black;
  border-top: none;
  border-left: none;
  border-right: none;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -1px;
  text-align: center;

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

export const Button = styled.button`
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

export const Container = styled.div`
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
    max-height: 650px;
    top: 20%;
  }
`;

export const Footer = styled.div`
  width: 100%;
  margin: 500px auto;
  padding: 0px 10px 10px 10px;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const RightMenu = styled.ul`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 0 20%;

  @media screen and (max-width: 500px) {
    max-width: 200px;
  }
`;

export const Complete = styled.button`
  margin-top: 10px;

  @media screen and (max-width: 500px) {
    margin-top: 15px;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  padding: 15px 10px;
  border: 1px solid black;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const SContainer = styled.div`
  display: flex;
`;

export const Todolist = styled.div``;

export const Buttonlist = styled.ul`
  button {
    margin-right: 10px;
  }
`;

export const Button1 = styled.button``;
export const Button2 = styled.button``;
export const Delete = styled.button``;

export const Line = styled.div`
  border: 1px solid black;
  width: 50%;
  margin-top: 5px;
  position: relative;
  left: 25%;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
export const Containter2 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20%;

  @media screen and (max-width: 500px) {
    padding: 2%;
  }
`;
