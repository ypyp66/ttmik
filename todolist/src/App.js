import styled from "styled-components";

import TodoCreate from "./Components/TodoCreate";
import TodoFooter from "./Components/TodoFooter";
import TodoLists from "./Components/TodoLists";
import { useTodo } from "./Utils/TodoService";

import "./App.css";

function App() {
  const { todoState, createTodo, removeTodo, toggleTodo, dragStart, dragOver } =
    useTodo();

  return (
    <Container>
      <Inner>
        <TodoCreate createTodo={createTodo} />
        <TodoLists
          todoState={todoState}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          dragStart={dragStart}
          dragOver={dragOver}
        />
        <TodoFooter todoState={todoState} />
      </Inner>
    </Container>
  );
}

export default App;

const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  width: 50%;
  height: 800px;

  min-width: 360px;
  max-width: 700px;

  position: relative;
  background: white;
  border-radius: 30px;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
