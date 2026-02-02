import React from 'react';
import { TodoItemProps } from '../../types';
import styles from './StyledToDoItem.module.css';

export const StyledToDoItem: React.FC<TodoItemProps> = ({ todo }) => {

  const itemClass = todo.completed 
    ? `${styles.todoItem} ${styles.completed}`
    : styles.todoItem;

  return (
    <div className = {itemClass}>
      {todo.title}
    </div>
  );
}; 