import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

const App = () => {
  const [items, setItems] = useState([]);

  const handleSubmit = (newItem) => {
    setItems([...items, newItem]);
  };
  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handleToggle = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const handleDeleteAll = () => {
    const confirmed = window.confirm(
      "Are you sure, you want to delete all items?"
    );
    confirmed && setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onSubmit={handleSubmit} />
      <PackingList
        items={items}
        onDelete={handleDelete}
        onToggle={handleToggle}
        onDeleteAll={handleDeleteAll}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
