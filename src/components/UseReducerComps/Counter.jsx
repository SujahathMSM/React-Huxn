import { useReducer, useState } from "react";
import { initialState, counterReducer } from "./CounterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [num, setNum] = useState(0);
  const handleIncrementByAmount = () => {
    dispatch({ type: "incrementByAmount", payload: +num });
    setNum(0);
  };

  const handleDecrementByAmount = () => {
    dispatch({ type: "decrementByAmount", payload: +num });
    setNum(0);
  };
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>

      <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />

      <button onClick={handleIncrementByAmount}>IncByVal</button>
      <button onClick={handleDecrementByAmount}>DecByVal</button>
    </div>
  );
};

export default Counter;
