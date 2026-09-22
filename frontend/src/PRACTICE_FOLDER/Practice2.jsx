import { useState } from "react";

export default function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo(e) {
    e.preventDefault();
    if (text.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: text.trim() }]);
    setText("");
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="todo">
      <form onSubmit={addTodo}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add an anime to watch"
        />
        <button type="submit">Add</button>
      </form>
      {todos.length === 0 && <p>Your watchlist is empty. Add something above.</p>}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}