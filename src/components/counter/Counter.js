import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
        Decrease
      </button>
    </div>
  );
};

export default Counter;
