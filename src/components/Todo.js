import React, { useState } from 'react';

const Todo = () => {
  const [addtodo, setAddtodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleAdd() {
    if (addtodo.trim() === "") return;
    setTodos([...todos, addtodo]);
    setAddtodo("");
  }

  // delete specific todo
  function handleDelete(index) {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <>
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Add a todo"
        value={addtodo}
        onChange={(e) => setAddtodo(e.target.value)}
        className="todo-input"
      />
      <button onClick={handleAdd} className="add-btn">Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button 
              className="delete-btn" 
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
