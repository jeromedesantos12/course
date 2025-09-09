import { useState } from "react";
import Logo from "./components/molecules/Logo";
import Form from "./components/molecules/Form";
import CheckList from "./components/molecules/CheckList";
import Stats from "./components/molecules/Stats";
import "./css/style.css";

function App() {
  const [listItems, setListItems] = useState([]);

  function handleAddItem(item) {
    setListItems((listItems) => [...listItems, item]);
  }

  function handleDeleteItem(id) {
    setListItems((listItems) => listItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setListItems((listItems) =>
      listItems.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }

  function handleClearItems() {
    const confirm = window.confirm("Are you sure you want to clear the list?");
    if (confirm) {
      setListItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <CheckList
        items={listItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItem={handleClearItems}
      />
      <Stats items={listItems} />
    </div>
  );
}

export default App;
