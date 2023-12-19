import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignupContainer = styled.div`
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
  padding: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
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

const Message = styled.div``;

export const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [usernames, setUsernames] = useState([]);

  useEffect(() => {
    const storedUsernames = localStorage.getItem("usernames");
    console.log("Stored Usernames:", storedUsernames);

    try {
      const parsedUsernames = JSON.parse(storedUsernames) || [];
      setUsernames(parsedUsernames);
    } catch (error) {
      console.error("Error parsing stored usernames:", error);
    }
  }, []);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isPasswordValid = (password) => {
    return password.length >= 6;
  };

  const isUsernameValid = (username) => {
    return username.length >= 3;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !isUsernameValid(username) ||
      !isPasswordValid(password) ||
      !isValidEmail(email)
    ) {
      setMessage("아이디, 비밀번호, 이메일을 모두 올바르게 입력하세요.");
    } else if (usernames.some((user) => user.username === username)) {
      setMessage("이미 가입되어있는 ID 입니다.");
    } else {
      const updatedUsernames = [...usernames, { username, password, email }];
      setUsernames(updatedUsernames);
      localStorage.setItem("usernames", JSON.stringify(updatedUsernames));
      navigate("/");
    }
  };

  return (
    <SignupContainer>
      <Title>Sign Up</Title>
      <Form>
        <Input
          type="text"
          placeholder="name (3자리 이상)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password (6자리 이상)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email (이메일 형식)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {message && (
          <Message
            style={{
              fontSize: "13px",
              color: message.includes("사용 가능한 ID") ? "green" : "red",
              marginBottom: "10px",
            }}
          >
            {message}
          </Message>
        )}
        <Button type="button" onClick={handleSubmit}>
          Sign Up
        </Button>
      </Form>
      <Separ>
        <span></span>
        <b>or</b>
        <span></span>
      </Separ>

      <Signupq>
        <h3>Do you have an ID?</h3>
        <Link to={"/"}>
          <h4> Login </h4>
        </Link>
      </Signupq>
    </SignupContainer>
  );
};
