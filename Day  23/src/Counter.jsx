import { useState } from 'react'; 

function Counter() {
  //Initialize state at 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
      <h2>Counter: {count}</h2>
      {/* setter function inside the onClick event */}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default Counter;