import "./App.css";
import { AiFillCode } from "react-icons/ai";
import CopyInput from "./components/Usestatecomps/CopyInput";
import Switcher from "./components/Usestatecomps/Switcher";
const App = () => {
  const handleCopy = () => {
    console.log("THis paragraph is copied");
  };
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
      <Switcher />
    </div>
  );
};

export default App;
