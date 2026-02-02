import React from 'react';
import { TodoItemProps } from '../../types';


export const ToDoItem: React.FC<TodoItemProps> = ({ todo }) => {

  const {title, completed} = todo;
  
  return (
    <div
      className = {completed ? 'todo-item completed' : 'todo-item active'}
      style = {{
        padding: '8px 12px',
        border: '1px solid #ad7',
        borderRadius: '6px',
        marginBottom: '8px',
        backgroundColor: completed ? '#e6ffe6' : '#fff',
      }}
    >
      <h4 
        style = {{
          margin: 0,
          textDecoration: completed ? 'line-through' : 'none',
          color: completed ? '#777' : '#000'
        }}
      >
        {title || 'Untitled'}  
      </h4>
      <p style = {{margin: '4px 0 0 0', fontSize: '0.9rem'}}>
        {completed ? 'Completed!' : 'Not completed...'}
      </p>
    </div>
  );
}; 