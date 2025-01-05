import "./App.css";
import { AiFillCode } from "react-icons/ai";
import { useState, useEffect } from "react";
import Datafetch from "./components/Useefectcomps/Datafetch";
const App = () => {
  const handleCopy = () => {
    console.log("THis paragraph is copied");
  };

  const [value, setValue] = useState(0);
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  useEffect(() => {
    console.log("Use effect is called");
    document.title = `Incremented ${value}`;
  }, [value]);
  return (
    <div className="container">
      <h1>
        {" "}
        <AiFillCode style={{ fontSize: 50, color: "gold" }} />
        Hello React HuXn - Sujahath
      </h1>
      <p onCopy={handleCopy}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
        repellendus natus. Voluptas nesciunt est debitis culpa qui, non rem
        dignissimos, facere aspernatur architecto fugiat sequi inventore
        recusandae at veritatis ut ipsa iusto nulla atque pariatur.
      </p>
      <h1>Check useEffect: {value}</h1>
      <button onClick={() => setValue(value + 1)}>Click Me</button>

      <h2>Name: {name}</h2>
      <input type="text" value={name} onChange={handleNameChange} />
      {/* <Card>
        <h2>
          <AiFillCode style={{fontSize: 30, color: 'gold'}}/>
          Hello Card - 01
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
          nostrum.
        </p>
      </Card>
      <Card>
        <h2>
          <AiFillCode />
          Hello Card - 02
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
          nostrum.
        </p>
      </Card>
      <Card>
        <h2>
          <AiFillCode />
          Hello Card - 03
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
          nostrum.
        </p>
      </Card> */}
      {/* <UseStatePrac />
      <UpdateRate /> */}
      {/* <ExampleLast /> */}
      {/* <TodoLits />
      <Profile /> */}
      {/* <ShoppingList /> */}
      {/* <CopyInput /> */}
      {/* <Switcher /> */}
      <Datafetch/>
    </div>
  );
};

export default App;
