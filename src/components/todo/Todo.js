import { useState } from 'react';

const defaultItems = [
  {
    name: 'Item A',
  },
  {
    name: 'Item B',
  },
  {
    name: 'Item C',
  },
];

const Todo = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState(defaultItems);

  const addItems = () => {
    setItems((prev) => [...prev, { name: text }]);
    setText('');
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Add todo'
      />
      <button onClick={addItems}>ADD</button>

      <br />
      {items.map((item, key) => (
        <div key={key}>{item.name}</div>
      ))}
    </div>
  );
};

export default Todo;
