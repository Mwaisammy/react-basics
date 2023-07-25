import React from 'react';

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  function handleTaskChange(task) {
    onChangeTask(task);
  }

  function handleTaskDelete(taskId) {
    onDeleteTask(taskId);
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => handleTaskChange({ ...task, done: !task.done })}
          />
          {task.text}
          <button onClick={() => handleTaskDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
