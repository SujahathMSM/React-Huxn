import { useState } from "react";

const TodoLits = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    setTodos([...todos, inputValue]);
    setInputValue("");
  };
  return (
    <div>
      <h1>My ToDo list</h1>
      <input
        type="text"
        name="todoItem"
        id=""
        placeholder="enter your todo"
        onChange={handleChange}
        value={inputValue}
      />
      <br />
      <button onClick={handleAdd}>Add items</button>
      {todos.map((todo) => (
        <li key={Math.random()}>{todo}</li>
      ))}
    </div>
  );
};

export default TodoLits;
