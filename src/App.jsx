import "./App.css";
import { AiFillCode } from "react-icons/ai";
import Refer from "./components/Useref/Refer";
import Timer from "./components/Useref/Timer";
import TimeRef from "./components/Useref/TimeRef";
import Chook from "./components/Customhooks/Chook";
import UseID from "./components/Customhooks/UseID";
const App = () => {
  return (
    <div className="container">
      <h1>
        {" "}
        <AiFillCode style={{ fontSize: 50, color: "gold" }} />
        Hello React HuXn - Sujahath
      </h1>
      {/* <Refer />
      <Timer />
      <TimeRef />
      <Chook /> */}
      <UseID />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
      aspernatur tempore cumque reprehenderit temporibus minima magnam facere
      debitis minus animi.
      <UseID />
    </div>
  );
};

export default App;
