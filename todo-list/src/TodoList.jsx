import React from "react";

function TodoList() {
  const todos = ["Buy groceries", "Finish homework", "Clean room"];

  return (
    <ul>
      {todos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default TodoList;
