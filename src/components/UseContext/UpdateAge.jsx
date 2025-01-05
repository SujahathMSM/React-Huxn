import { useState, useContext } from "react";
import { userContext } from "./UserContext";

const UpdateAge = () => {
  const { age, updateAge } = useContext(userContext);
  const [newAge, setNewAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newAge.trim() !== "") {
      updateAge(newAge);
      setNewAge("");
    }
  };
  return (
    <div>
      <p>Age: {age}</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={newAge}
          onChange={(e) => setNewAge(e.target.value)}
        />
        <button type="submit">Update Age</button>
      </form>
    </div>
  );
};

export default UpdateAge;
