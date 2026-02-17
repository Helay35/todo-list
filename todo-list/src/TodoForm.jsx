function TodoForm({ onAddTodo, todoTitleInput }) {
  function handleAddTodo(event) {
    event.preventDefault();
    const title = event.target.title.value;
    onAddTodo(title);
    event.target.title.value = "";
    todoTitleInput.current.focus();
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input ref={todoTitleInput} name="title" placeholder="Enter todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
