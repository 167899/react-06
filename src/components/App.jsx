import Button from './Button/Button';

import Input from './Input/Input';
import ToDoList from './ToDoList/ToDoList';
import { useState } from 'react';

export const App = () => {
  const [value, setValue] = useState('');
  const [toDoList, setToDoList] = useState([]);

  const hendleChange = e => {
    const { value } = e.currentTarget;
    setValue(value);
  };

  const hendleAdd = () => {
    const newToDoList = {
      id: value,
      name: value,
      checked: false,
    };
    const check = toDoList.find(
      i => i.name.toLowerCase() === value.toLowerCase()
    );
    if (!check) {
      setToDoList([...toDoList, newToDoList]);
      setValue('');
    } else {
      alert('input another name');
    }
  };

  const hendleRemove = e => {
    setToDoList(prevToDoList => {
      const remove = prevToDoList.filter(({ id }) => {
        return id !== e.target.parentElement.parentElement.id;
      });
      return remove;
    });
  };

  const hendleCheckTask = e => {
    // console.log(e.target.checked);

    const chekTask = toDoList.map(i => {
      if (i.id === e.target.parentElement.id) {
        return {
          ...i,
          checked: !i.checked,
        };
      }
      return i;
    });
    // console.log(chekTask);
    setToDoList(chekTask);
  };

  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: '#111',
        textAlign: 'center',
        fontSize: 40,
        color: '#fff',
      }}
    >
      <Input value={value} onChange={hendleChange} />
      <Button text="Add" type="submit" onClick={() => hendleAdd()} />

      <ToDoList
        toDoList={toDoList}
        onRemove={hendleRemove}
        onCheckTask={hendleCheckTask}
      />

      <div></div>
    </div>
  );
};
