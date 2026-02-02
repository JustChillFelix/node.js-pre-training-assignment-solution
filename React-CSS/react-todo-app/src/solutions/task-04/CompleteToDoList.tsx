import React, { useState } from 'react';
import { Todo } from '../../types';

export const CompleteToDoList: React.FC = () => {

  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
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
  }

  const markCompleted = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? {...todo, completed: true} : todo
      )
    );
  };

  return (
    <div>
      <h4>Complete ToDo List Component</h4>

      <form onSubmit = {handleAdd}>
        
        <input
          type = "text"
          placeholder = 'Add todo'
          value = {inputValue}
          onChange = {(e) => setInputValue(e.target.value)}
        />

        <button type = "submit">Add</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li
            key = {todo.id}
            style = {{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? 'gray' : 'black',
            }}
            >
              {todo.title}

              {!todo.completed && (
                <button onClick = {() => markCompleted(todo.id)}>
                  Complete
                </button>
              )}
          </li>
        ))}
        
      </ul>
    </div>
  );
}; 