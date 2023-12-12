import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div``;

const LoginContainer = styled.div`
  /* width: 100%; */
  max-width: 400px;
  margin: 200px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  font-size: 30px;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  font-size: 15px;
  font-weight: 500;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Separ = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  span {
    display: block;
    width: 40%;
    height: 1px;
    background-color: #dbdbdb;
  }
  b {
    font-weight: 600;
    color: #555;
    line-height: 3px;
  }
`;

const Signupq = styled.div`
  display: flex;
  opacity: 0.8;
  justify-content: center;
  h4 {
    margin-left: 20px;
    font-weight: 800;
    cursor: pointer;
  }
  h4:hover {
    transition-duration: 0.8s;
    color: blueviolet;
  }
`;

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Wrap>
      <LoginContainer>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="ID"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <label>
              <input
                type="checkbox"
                style={{ marginRight: "10px", marginBottom: "15px" }}
              />
              자동로그인
            </label>
          </div>
          <Button type="submit">로그인</Button>
        </Form>

        <Separ>
          <span></span>
          <b>or</b>
          <span></span>
        </Separ>

        <Signupq>
          <h3>Don't have an ID?</h3>
          <Link to={"/signup"}>
            <h4> SignUp </h4>
          </Link>
        </Signupq>
      </LoginContainer>
    </Wrap>
  );
};
