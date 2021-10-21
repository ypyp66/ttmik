import React from "react";
import styled, { css } from "styled-components";

function TodoItem({ todo, toggleTodo, removeTodo }) {
  return (
    <Container>
      <Inner>
        <CheckCircle
          isChecked={todo.isChecked}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.isChecked && "V"}
        </CheckCircle>
        <Text isChecked={todo.isChecked}>{todo.todo}</Text>
      </Inner>
      <Remove onClick={() => removeTodo(todo.id)}>X</Remove>
    </Container>
  );
}

export default React.memo(TodoItem);

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #119955;
  cursor: pointer;

  :hover {
    color: red;
  }
`;
