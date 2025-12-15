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
  );
}

export default App;
