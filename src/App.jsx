import "./App.css";
import { AiFillCode } from "react-icons/ai";
import Refer from "./components/Useref/Refer";
import Timer from "./components/Useref/Timer";
import TimeRef from "./components/Useref/TimeRef";
const App = () => {
  return (
    <div className="container">
      <h1>
        {" "}
        <AiFillCode style={{ fontSize: 50, color: "gold" }} />
        Hello React HuXn - Sujahath
      </h1>
      <Refer />
      <Timer />
      <TimeRef/>
    </div>
  );
};

export default App;
