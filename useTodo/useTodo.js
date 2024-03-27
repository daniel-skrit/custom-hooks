import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodo = () => {
  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
    console.log(todos);
  }, [todos]);

  const handleNewTodo = (todo) => {
    dispatch({
      type: "Add Todo",
      payload: todo,
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: "Delete Todo",
      payload: id,
    });
  };

  const handleToggle = (id) => {
    dispatch({
      type: "Toggle Todo",
      payload: id,
    });
  };

  return {
    handleDelete,
    handleNewTodo,
    handleToggle,
    todos,
    todosCount: todos.length,
    todosPendingCount: todos.filter(todo => {return !todo.done}).length
  };
};
