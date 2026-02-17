 HEAD
import { useState, useRef } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const todoTitleInput = useRef();

  function addTodo(title) {
    const newTodo = { id: Date.now(), title };
    setTodoList([...todoList, newTodo]);
  }

  return (
    <div>
      <TodoForm onAddTodo={addTodo} todoTitleInput={todoTitleInput} />
      <TodoList todoList={todoList} />
    </div>

import TodoList from "./TodoList.jsx";

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <TodoList />
    </>
 ae9deab (Lesson 9 fix: useCallback encodeUrl and 500ms debounce)
  );
}

export default App;
