import React, { useState, useMemo } from 'react';

const ExpensiveCalculation = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');
  
    // محاسبه سنگین که فقط وقتی count تغییر می‌کند اجرا می‌شود
    const expensiveResult = useMemo(() => {
      console.log('محاسبه در حال انجام است...');
      return count * 2;
    }, [count]);
  return (
    <div>
    <input value={input} onChange={(e) => setInput(e.target.value)} />
    <p>Count: {count}</p>
    <p>Expensive Result: {expensiveResult}</p>
    <button onClick={() => setCount(count + 1)}>Increase Count</button>
  </div>
  )
}

export default ExpensiveCalculation