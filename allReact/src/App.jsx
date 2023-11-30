import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Chocolate Milkshake",
    },
    {
      id: 2,
      checked: false,
      item: "Item2",
    },
    {
      id: 3,
      checked: false,
      item: "Item3",
    },
  ]);

  const handleCheck = (id) => {
    // defining state to check the items of list using ternary operator
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };
  return (
    <div className="App">
      <Header title="Shopping" />
      <Content 
      items={items} 
      handleCheck = {handleCheck}
      handleDelete = {handleDelete} />

      <Footer length = {items.length}/>
    </div>
  );
}

export default App;
