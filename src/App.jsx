import "./App.css";
import { createContext } from "react";
import { AiFillCode } from "react-icons/ai";
import CompA from "./components/ContextAPI/CompA";

export const data = createContext();
export const data1 = createContext();
const App = () => {
  const name = "Context API";
  const age = 26;
  return (
    <div className="container">
      <h1>
        {" "}
        <AiFillCode style={{ fontSize: 50, color: "gold" }} />
        Hello React HuXn - Sujahath
      </h1>

      <data.Provider value={name}>
        <data1.Provider value={age}>
          <CompA />
        </data1.Provider>
      </data.Provider>
    </div>
  );
};

export default App;
