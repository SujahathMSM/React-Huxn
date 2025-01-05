import "./App.css";
import { useReducer } from "react";
import { AiFillCode } from "react-icons/ai";
import Counter from "./components/UseReducerComps/Counter";

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    case "reset":
      return { ...state, count: 0 };

    default:
      break;
  }
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container">
      <h1>
        {" "}
        <AiFillCode style={{ fontSize: 50, color: "gold" }} />
        Hello React HuXn - Sujahath
      </h1>
      <div>
        <h1>Learn useReducer</h1>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <h2>Count: {state.count}</h2>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
      </div>
      <div>
        <h1>Another one</h1>
        <Counter />
      </div>
    </div>
  );
};

export default App;
