import React, { useState } from 'react';
import { Todo } from '../../types';
import { ActiveCountProps } from '../../types';

  export const ActiveCount: React.FC<ActiveCountProps> = ({todos}) => {
    const activeCount = todos.filter(todo => !todo.completed).length;
    const label = activeCount === 1 ? 'active todo' : 'active todos';

    return (
      <p>
        {activeCount} {label}
      </p>
    );
  };

