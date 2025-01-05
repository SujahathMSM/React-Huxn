import { useContext } from "react";
import { data1, data2 } from "../../App";

const CompC = () => {
  const name = useContext(data1);
  const age = useContext(data2);
  return (
    <div>
      Hello I am {name} and {age} years old
    </div>
  );
};

export default CompC;
