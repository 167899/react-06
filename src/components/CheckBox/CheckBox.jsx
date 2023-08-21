const CheckBox = ({ onCheckTask, checked }) => {
  const classCheck = () => {
    if (checked) {
      return '30px';
    }
    return '20px';
  };
  return (
    <input
      type="checkbox"
      onChange={onCheckTask}
      checked={checked}
      style={{
        width: `${classCheck()}`,
        height: `${classCheck()}`,
      }}
    />
  );
};

export default CheckBox;
