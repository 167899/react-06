const Input = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder="Input new name"
      onChange={onChange}
    />
  );
};

export default Input;
