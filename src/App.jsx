import "./App.css";
import { AiFillCode } from "react-icons/ai";
import { createContext } from "react";
import CompA from "./components/UseContext/CompA";
import { UserProvider } from "./components/UseContext/UserContext";
import UserProfile from "./components/UseContext/UserProfile";
import UpdateUser from "./components/UseContext/UpdateUser";
import UpdateAge from "./components/UseContext/UpdateAge";

export const data1 = createContext();
export const data2 = createContext();

const App = () => {
  const name = "Sujahath";
  const age = 26;
  return (
    <div className="container">
      <h1>
        {" "}
        <AiFillCode style={{ fontSize: 50, color: "gold" }} />
        Hello React HuXn - Sujahath
      </h1>
      <data1.Provider value={name}>
        <data2.Provider value={age}>
          <CompA />
        </data2.Provider>
      </data1.Provider>

      <UserProvider>
        <UserProfile />
        <UpdateUser />
        <UpdateAge />
      </UserProvider>
    </div>
  );
};

export default App;
