// import { useState } from "react";

import Task from 'components/Task/Task';

const ToDoList = ({ toDoList, onRemove, onCheckTask }) => {
  return (
    <ul
      style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '0 30px',
      }}
    >
      {toDoList &&
        toDoList.map(i => (
          <Task
            key={i.id}
            name={i.name}
            id={i.id}
            onRemove={onRemove}
            onCheckTask={onCheckTask}
            checked={i.checked}
          ></Task>
        ))}
    </ul>
  );
};

export default ToDoList;
