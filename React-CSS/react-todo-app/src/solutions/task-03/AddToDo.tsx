import React, { useState } from 'react';
import { Todo } from '../../types';

export const AddToDo: React.FC = () => {

  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const title = inputValue.trim();
    if (!title) return;

    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos(prev => [...prev, newTodo]);
    setInputValue('');
  };

  return (
    <div>
      <h4>Add ToDo Component</h4>

      <form onSubmit = {handleSubmit}>

        <input
          type = "text"
          placeholder = "Add todo"
          value = {inputValue}
          onChange = {(e) => setInputValue(e.target.value)} 
        />

        <button type = "submit">Add</button>

      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      
    </div>
  );
}; 