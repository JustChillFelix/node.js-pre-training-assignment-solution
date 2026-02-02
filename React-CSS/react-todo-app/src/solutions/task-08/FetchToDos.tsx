import React, { useState, useEffect } from 'react';
import { Todo } from '../../types';

export const FetchToDos: React.FC = () => {
  
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try { 
        setLoading(true);

        const response = await fetch('https://jsonplaceholder.typicode.com/todos');

        if (!response.ok) {
          throw new Error('Failed to fetch todos');
        }

        const data = await response.json();

        setTodos(data.slice(0,5));
      } catch (err: any) {
        setLoading(false);
      } finally { 
        setLoading(false);
      };
    }
    
    fetchTodos();
  }, []);

  return (
    <div>
      <h4>Fetch ToDos Component</h4>

      {loading && <p>Loading todos...</p>}

      {error && <p style = {{color: 'red'}}>Error {error}</p>}

      {!loading && !error && (
        <ul>
          {todos.map(todo => (
            <li key = {todo.id}>
              {todo.title} {todo.completed ? '(completed)' : '(active)'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}; 