import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div``;

const LoginContainer = styled.div`
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
  text-align: center;
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

const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLogin = () => {
    const storedUsernames = JSON.parse(localStorage.getItem("usernames")) || [];
    const foundUser = storedUsernames.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ username, password })
      );
      navigate("/todo");
    } else {
      setErrorMessage("아이디 또는 비밀번호가 잘못되었습니다.");
    }
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
          <Container2>
            <div>
              <label style={{ fontSize: "13px" }}>
                <input
                  type="checkbox"
                  style={{ marginRight: "10px", marginBottom: "15px" }}
                />
                자동로그인
              </label>
            </div>

            {errorMessage && (
              <errorMessage style={{ fontSize: "13px", color: "red" }}>
                {errorMessage}
              </errorMessage>
            )}
          </Container2>

          <Button type="button" onClick={handleLogin}>
            로그인
          </Button>
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
