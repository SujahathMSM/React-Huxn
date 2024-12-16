import { useState } from "react";

const ShoppingList = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [items, setItems] = useState([]);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();

    if (!name || !quantity) {
      return;
    }
    console.log("Added an item ");
    const newItem = {
      name,
      quantity: parseInt(quantity),
    };
    setItems((items) => [...items, newItem]);
    setName("");
    setQuantity("");
  };
  return (
    <div>
      <form onSubmit={handleAdd}>
        <div>
          <label htmlFor="">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="enter item name here"
            value={name}
            onChange={handleName}
          />
        </div>
        <div>
          <label htmlFor="">Quantity: </label>
          <input
            type="text"
            name="quantity"
            placeholder="enter quantity here"
            value={quantity}
            onChange={handleQuantity}
          />
        </div>

        <button type="submit">Add items</button>
      </form>

      {items.map((item) => (
        <li key={Math.random()}>
          Name: {item.name} -- Quantity: {item.quantity}
        </li>
      ))}
    </div>
  );
};

export default ShoppingList;
