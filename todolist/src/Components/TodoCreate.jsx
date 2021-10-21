import React, { useState } from "react";
import styled from "styled-components";

function TodoCreate({ createTodo }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === "") {
      alert("목록을 입력해주세요");
      return;
    }
    createTodo(value);
    setValue("");
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        autoFocus
        placeholder="할일 목록을 입력해주세요"
        onChange={handleChange}
        value={value}
      />

      <CircleButton>+</CircleButton>
    </Container>
  );
}

export default React.memo(TodoCreate);

const Container = styled.form`
  width: 100%;
  display: flex;
  background: #eeeeee;
  padding: 30px 40px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

const CircleButton = styled.button`
  background: #33bb77;
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 48px;
  color: white;
  border-radius: 50%;
  border: none;

  margin-left: 15px;

  :hover {
    transform: scale(1.1);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;

  border: 1px solid #dddddd;

  outline: none;
  font-size: 21px;

  color: #119955;

  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }
`;
