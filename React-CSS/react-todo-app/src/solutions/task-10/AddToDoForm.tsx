import React, { useState } from 'react';
import { Todo } from '../../types';

export const AddToDoForm: React.FC = () => {

  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = title.trim();
    if (!trimmed) return;

    const newTodo: Todo = {
      id: Date.now(),
      title: trimmed,
      completed: false,
    };

    setTodos(prev => [...prev, newTodo]);
    setTitle('');
  }

  return (
    <div>
      <h4>Add ToDo Form Component</h4>

      <form onSubmit={handleSubmit}>
        <input
          type = "text"
          placeholder='Add todo'
          value = {title}
          onChange = {e => setTitle(e.target.value)}
        />
        
        <button type='submit'>Submit</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key = {todo.id}>
              {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}; 