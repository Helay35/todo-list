import { useRef } from 'react';
import TextInputWithLabel from '../../shared/TextInputWithLabel';

function TodoForm({ onAddTodo, todoTitleInput }) {
  function handleAddTodo(event) {
    event.preventDefault();
    const title = event.target.title.value;
    if (title.trim() === '') return;
    onAddTodo(title);
    event.target.title.value = '';
    todoTitleInput.current.focus();
  }

  return (
    <form onSubmit={handleAddTodo}>
      <TextInputWithLabel
        elementId='todoTitle'
        label='Todo'
        ref={todoTitleInput}
        value=''
        onChange={() => {}}
      />
      <button type='submit'>Add Todo</button>
    </form>
  );
}

export default TodoForm;
