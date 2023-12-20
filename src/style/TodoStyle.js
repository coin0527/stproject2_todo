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
    background-color: #eee;
    color: black;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 600;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    border-radius: 0;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20%;
    height: 100px;
    border: none;
    font-size: 20px;
    background-color: #eee;
    &:hover {
      background-color: #333;
      transition-duration: 1s;
      color: white;
    }
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
  border-radius: 20px;
  padding: 1% 3%;

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
    top: 15%;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1%;
  margin-bottom: 10px;
  border: 1px solid black;
  border-top: none;
  border-right: none;
  border-left: none;
`;
export const RightMenu = styled.ul``;

export const Complete = styled.button`
  margin-top: 10px;

  @media screen and (max-width: 500px) {
    margin-top: 15px;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 20%;
  font-size: 24px;
  display: flex;
  padding: 15px 10px;
  border: 1px solid #eee;
  justify-content: space-between;
  margin-bottom: 10px;
  border-radius: 10px;

  @media screen and (max-width: 500px) {
    height: 15%;
  }
`;

export const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Todolist = styled.div``;

export const Buttonlist = styled.div`
  button {
    margin-right: 10px;
  }
  align-items: center;
  margin-top: 15px;
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
  margin-top: 530px;
  @media screen and (max-width: 500px) {
    margin-top: 650px;
    padding: 0 10%;
  }
`;

export const LeftMenu = styled.div`
  display: flex;
  align-items: center;
  h3 {
    font-size: 11px;
  }
`;
