import { useState } from "react";
import { Tododelete } from "../components/Tododelete";
import TodoCheckAll from "../components/TodoCheckAll";
import {
  Wrap,
  Container,
  Footer,
  RightMenu,
  Box,
  SContainer,
  Todolist,
  Buttonlist,
  Containter2,
  Line,
} from "./TodosStyle";
import { Todore } from "../components/Todore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEraser, faShare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export const TodoSuccess = () => {
  const [todos, setTodos] = useState([]);
  // 할 일

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
    // 체크
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
  };

  const handleEditTodo = (id, editedText) => {
    //모달
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: editedText } : todo
    );
    setTodos(updatedTodos);
  };

  const count = todos.length; // 할일 갯수
  return (
    <Wrap>
      <h2
        style={{
          position: "relative",
          top: "8%",
          left: "42%",
          fontSize: "40px",
          fontWeight: "600",
        }}
      >
        완료목록
      </h2>
      <Line />
      <Containter2>
        <Link to={"/todo"}>
          <FontAwesomeIcon
            icon={faShare}
            style={{ marginTop: "20px", fontSize: "20px" }}
          />
        </Link>

        <h3 style={{ fontSize: "20px", fontWeight: "600", marginTop: "20px" }}>
          count : {count}
        </h3>
      </Containter2>

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
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{
                    fontSize: "20px",
                    marginLeft: "15px",
                    cursor: "pointer",
                  }}
                />
                <Todore todo={todo} onEdit={handleEditTodo} />
                <Tododelete index={todo.id} onDelete={handleDelete} />
              </Buttonlist>
            </Box>
          ))
        ) : (
          <p>오늘의 할 일을 추가해주세요!!</p>
        )}
      </Container>
      <Footer>
        <RightMenu>
          <TodoCheckAll todos={todos} setTodos={setTodos} />
          <FontAwesomeIcon
            icon={faCheck}
            style={{
              fontSize: "30px",
              marginLeft: "30px",
              marginTop: "5px",
              cursor: "pointer",
            }}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faEraser}
            onClick={handleDeleteChecked}
            style={{
              fontSize: "30px",
              marginTop: "5px",
              marginLeft: "30px",
              cursor: "pointer",
            }}
          ></FontAwesomeIcon>
        </RightMenu>
      </Footer>
    </Wrap>
  );
};
