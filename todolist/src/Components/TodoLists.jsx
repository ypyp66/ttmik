import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

function TodoLists({
  todoState,
  removeTodo,
  toggleUpdate,
  updateTodo,
  toggleTodo,
  dragStart,
  dragOver,
}) {
  return (
    <Container>
      {todoState.map((todo, index) => (
        <div
          key={todo.id}
          draggable
          onDragStart={() => dragStart(index)}
          onDragOver={() => dragOver(index)}
        >
          <TodoItem
            todo={todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            toggleUpdate={toggleUpdate}
            updateTodo={updateTodo}
          />
        </div>
      ))}
    </Container>
  );
}

export default TodoLists;

const Container = styled.div`
  width: 100%;
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
