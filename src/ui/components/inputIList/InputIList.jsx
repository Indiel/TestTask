import {useState} from 'react';

const InputIList = () => {
  const [inputText, setInputText] = useState('');
  return (
    <li>
      <input type="text" value={inputText} onChange={(evt) => setInputText(evt.target.value)} />
      <button type="button">+</button>
      <button type="button">-</button>
    </li>
  );
};

export default InputIList;