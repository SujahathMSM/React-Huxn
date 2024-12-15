import { useState } from "react";

const UseStatePrac = () => {
  const [friends, setFriends] = useState(["ABC", "DEF"]);
  const addFriend = () => {
    setFriends([...friends, "Sujahath"]);
  };

  const removeFriend = () => {
    setFriends(friends.filter((f) => f !== "ABC"));
  };

  const updateFriend = () => {
    setFriends(friends.map((f) => (f === "ABC" ? "ABC UP" : f)));
  };
  return (
    <div>
      <h1>UseState</h1>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}
      <button onClick={addFriend}>Add Friend</button>
      <button onClick={removeFriend}>Remove Friend</button>
      <button onClick={updateFriend}>Update Friend</button>
    </div>
  );
};

export default UseStatePrac;
