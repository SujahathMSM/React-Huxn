import { useContext, useState } from "react";
import { userContext } from "./UserContext";

const UpdateUser = () => {
  const { updateName } = useContext(userContext);
  const [newName, setNewName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim() !== "") {
      updateName(newName);
      setNewName("");
    }
  };
  return (
    <div>
      <h1>Update Name Here</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={newName}
          placeholder="Enter your new name: "
          onChange={(e) => setNewName(e.target.value)}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
