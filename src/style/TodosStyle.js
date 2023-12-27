import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 80vh;
  border-top: none;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    padding: 20px;
  }
`;

export const Form = styled.form`
  width: 50%;
  @media screen and (max-width: 500px) {
    width: 75%;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 75px;
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
  border: none;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -1px;
  text-align: center;

  @media screen and (max-width: 500px) {
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 600;
  background-color: #3282f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    width: 80px;
    margin-right: 23px;
  }
`;

export const Container = styled.div`
  width: 60%;
  height: 70%;
  overflow-y: auto;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 30px;
  margin: 0 auto;

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
    max-height: 500px;
    padding: 20px;
    border: none;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1%;
  margin-bottom: 10px;
  border: none;
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
  padding: 24px;
  border: 1px solid #eee;
  justify-content: space-between;
  margin-bottom: 24px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  @media screen and (max-width: 500px) {
    height: 15%;
    width: 100%;
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
  padding: 10px;

  @media screen and (max-width: 500px) {
    padding: 0px 10px;
  }
`;

export const Button1 = styled.button``;
export const Button2 = styled.button``;
export const Delete = styled.button``;

export const Line = styled.div`
  border: 1px solid #555;
  width: 60%;
  margin-top: 5px;
  position: relative;
  left: 20%;

  @media screen and (max-width: 500px) {
    width: 90%;
    left: 5%;
  }
`;
export const Containter2 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20%;
  margin: 22px 0;
  @media screen and (max-width: 500px) {
    padding: 0 23px;
    h3 {
      font-size: 10px;
    }
  }
`;

export const LeftMenu = styled.div`
  display: flex;
  align-items: center;
  h3 {
    font-size: 14px;
    color: #555;
  }
`;
