// TodoList.jsx

function TodoList() {
  // Sample todos
  const todos = [
    "Walk the dog",
    "Buy groceries",
    "Clean the car"
  ];

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

export default TodoList;
