import { useState } from "react";
import '../../styles/qstyles.css' // You'll need to create this CSS file

const ShoppingList = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;
    
    const newItem = {
      name,
      quantity: parseInt(quantity),
    };
    setItems((items) => [...items, newItem]);
    setName("");
    setQuantity("");
  };

  return (
    <div className="shopping-list-container">
      <h1>Shopping List</h1>
      
      <form onSubmit={handleAdd} className="shopping-form">
        <div className="form-group">
          <label htmlFor="name">Item Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter item name"
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity"
            className="input-field"
            min="1"
          />
        </div>

        <button type="submit" className="add-button">
          Add Item
        </button>
      </form>

      {items.length > 0 && (
        <div className="items-container">
          <h2>Items List</h2>
          <ul className="items-list">
            {items.map((item, index) => (
              <li key={index} className="item-card">
                <span className="item-name">{item.name}</span>
                <span className="item-quantity">Qty: {item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShoppingList;
