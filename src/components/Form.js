import { useState } from "react";

export default function Form({ onSubmit }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      id: Date.now(),
      description,
      quantity: value,
      packed: false,
    };
    onSubmit(newItem);
    setDescription("");
    setValue(1);
  };
  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>What do you need for your trip? 🏖</h3>
      <select value={value} onChange={(e) => setValue(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Item..."
      />
      <button>Add</button>
    </form>
  );
}
