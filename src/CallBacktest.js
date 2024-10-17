import React, { useState, useCallback } from 'react';


const CallBacktest = () => {
    const [count, setCount] = useState(0);

    // با استفاده از useCallback تابع فقط در صورت تغییر count بازسازی می‌شود
    const handleClick = useCallback(() => {
      console.log('Button clicked! Current count:', count);
    }, [count]);
  return (
    <div>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increase Count </button>
    <Child onButtonClick={handleClick} />
  </div>
  )
}
function Child({ onButtonClick }) {
    console.log('Child rendered');
    return <button onClick={onButtonClick}>Click me child!</button>;
  }
  
export default CallBacktest