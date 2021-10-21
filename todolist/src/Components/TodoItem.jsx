import React from "react";
import styled, { css } from "styled-components";

function TodoItem({ todo, toggleTodo, updateTodo, removeTodo, toggleUpdate }) {
  return (
    <Container>
      <Inner>
        <CheckCircle
          isChecked={todo.isChecked}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.isChecked && "V"}
        </CheckCircle>
        {todo.isUpdating ? (
          <span>
            <input
              placeholder="Enter를 눌러 저장하세요"
              defaultValue={todo.todo}
              onKeyPress={(e) => {
                e.code === "Enter" && updateTodo(todo.id, e.target.value);
              }}
            />
            <h6 style={{ color: "#119955" }}>Enter를 눌러 저장하세요</h6>
          </span>
        ) : (
          <Text isChecked={todo.isChecked}>{todo.todo}</Text>
        )}
      </Inner>
      <Inner>
        <Icons edit onClick={() => toggleUpdate(todo.id)}>
          🖍
        </Icons>
        <Icons onClick={() => removeTodo(todo.id)}>X</Icons>
      </Inner>
    </Container>
  );
}

export default React.memo(TodoItem);

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`;

const Inner = styled.div`
  display: flex;
`;

const CheckCircle = styled.div`
  width: 20px;
  height: 20px;

  border: 1px solid #33bb77;
  border-radius: 16px;

  margin-right: 20px;
  cursor: pointer;
  font-size: 20px;

  ${(props) =>
    props.isChecked &&
    css`
      display: flex;
      justify-content: center;
      align-items: flex-end;

      border: 1px solid #dddddd;
      color: #dddddd;
    `}
`;

const Text = styled.div`
  color: #119955;
  ${(props) =>
    props.isChecked &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #119955;
  cursor: pointer;
  font-size: 20px;

  :hover {
    color: ${(props) => (!props.edit ? "red" : "blue")};
  }

  & + & {
    margin-left: 10px;
  }
`;
