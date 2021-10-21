import React from "react";
import styled from "styled-components";

function TodoFooter({ todoState }) {
  const remained = todoState.filter((todo) => todo.isChecked === false).length;
  return <Container>{remained} 개의 할 일이 남았습니다.</Container>;
}

export default TodoFooter;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px 24px;
`;
