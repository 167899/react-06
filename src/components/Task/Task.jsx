import Button from 'components/Button/Button';
import CheckBox from 'components/CheckBox/CheckBox';

const Task = ({ name, onRemove, id, onCheckTask, checked }) => {
  return (
    <li
      id={id}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <CheckBox onCheckTask={onCheckTask} checked={checked} />
      <p>{name}</p>
      <div>
        <Button onClick={onRemove} text="Delete" />
      </div>
    </li>
  );
};

export default Task;
