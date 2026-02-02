import React, { useState } from 'react';
import { Todo } from '../../types';

export const FilteredToDoList: React.FC = () => {

  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

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
  };

  const markCompleted = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? {...todo, completed: true} : todo
      )
    );
  };

  const filteredTodos = todos.filter(todo => {
      if (filter === 'active') return !todo.completed;
      if(filter === 'completed') return todo.completed;
      return true;
  });

  return (
    <div>
      <h4>Filtered ToDo List Component</h4>

      <form onSubmit = {handleAdd}>
        <input 
          type = "text"
          placeholder = "Add todo"
          value = {inputValue}
          onChange = {e => setInputValue(e.target.value)}
        />

        <button type = "submit">Add</button>
      </form>

      <div style= {{marginTop: '10px'}}>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>

      <ul>
        {filteredTodos.map(todo => (
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