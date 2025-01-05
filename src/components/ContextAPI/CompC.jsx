import { data, data1 } from "../../App";

const CompC = () => {
  return (
    <data.Consumer>
      {(name) => (
        <data1.Consumer>
          {(age) => (
            <h1>
              Hello, i am {name} and i am {age} years old
            </h1>
          )}
        </data1.Consumer>
      )}
    </data.Consumer>
  );
};

export default CompC;
