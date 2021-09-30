import './InputItem.css';

const InputItem = ({text, addItem, removeItem, changeItem}) => {
  return (
    <li className="input-item">
      <input
        type="text"
        value={text}
        onChange={(evt) => changeItem(evt.target.value)}
      />
      <button type="button" onClick={addItem}>+</button>
      <button className="input-item__btn-remove" type="button" onClick={removeItem}>-</button>
    </li>
  );
};

export default InputItem;
