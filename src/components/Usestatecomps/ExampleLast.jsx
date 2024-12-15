import { useState, useEffect } from "react";

const ExampleLast = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  const handleChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };
  const clearName = () => {
    setName("");
  };
  return (
    <div>
      <h1>Your Name: {name}</h1>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <button onClick={clearName}>Clear Name</button>
    </div>
  );
};

export default ExampleLast;
