import { useState, useEffect, useCallback } from "react";

const initialTodos = JSON.parse(localStorage.getItem("todos")) ?? [];

export const useTodo = () => {
  const [todoState, setTodoState] = useState(initialTodos);
  const [item, setItem] = useState(null);
  const [over, setOver] = useState(null);

  const toggleTodo = useCallback((id) => {
    setTodoState((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  }, []);

  const removeTodo = useCallback((e) => {
    console.log(e);
    //setTodoState((prevState) => prevState.filter((todo) => todo.id !== id));
  }, []);

  const createTodo = useCallback(
    (todo) => {
      const nextId =
        todoState.length === 0
          ? 0
          : Math.max(...todoState.map((item) => item.id)) + 1;

      setTodoState((prevState) => [
        ...prevState,
        { id: nextId, todo, isChecked: false },
      ]);
    },
    [todoState]
  );

  const dragStart = (index) => {
    setItem(index);
  };

  const dragOver = (index) => {
    if (over === index) return;
    setOver(index);

    const copied = [...todoState];
    const temp = copied[item];

    copied.splice(item, 1);
    copied.splice(index, 0, temp);

    setTodoState(copied);
    setItem(index);
  };

  const loadData = () => {
    setTodoState(initialTodos);
  };

  const saveData = () => {
    localStorage.setItem("todos", JSON.stringify(todoState));
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [todoState]);

  return {
    todoState,
    toggleTodo,
    removeTodo,
    createTodo,
    dragStart,
    dragOver,
  };
};
