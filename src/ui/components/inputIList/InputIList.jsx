import './InputIList.css';
import {useState} from 'react';
import InputItem from "../inputItem/InputItem";

const InputIList = () => {
  const [lastIndex, setLastIndex] = useState(1);
  const [inputList, setInputList] = useState([{id: 0, text: ''}]);

  const addItem = (index) => {
    const newInputList = [...inputList];
    newInputList.splice(index, 0, {id: lastIndex, text: ''})
    setInputList(newInputList);

    setLastIndex(lastIndex + 1);
  };

  const removeItem = (index) => {
    const newInputList = [...inputList];
    newInputList.splice(index, 1)
    setInputList(newInputList);
  };

  const changeItem = (index, id, text) => {
    const newInputList = [...inputList];
    newInputList.splice(index, 1, {id, text})
    setInputList(newInputList);
  };

  return (
    <ul className="input-list">
      {
        inputList && inputList.length > 0 && inputList.map((item, index) => (
          <InputItem
            key={item.id}
            text={item.text}
            addItem={() => addItem(index + 1)}
            removeItem={() => removeItem(index)}
            changeItem={(text) => changeItem(index, item.id, text)}
          />
        ))
      }
    </ul>
  );
};

export default InputIList;
