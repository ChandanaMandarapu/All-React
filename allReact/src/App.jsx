import Header from "./components/Header";
import AddItem from "./components/AddItem";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || []);

  const [newItem, setNewItem] = useState('')

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length-1].id + 1 : 1;
    const myNewItem = {id, checked: false , item}
    const listItems = [...items, myNewItem]
    setAndSaveItems(listItems)
  }

  const handleCheck = (id) => {
    // defining state to check the items of list using ternary operator
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems)
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems)
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!newItem) return;
    // adding Item
    addItem(newItem)
    setNewItem('')
  }
  return (
    <div className="App">
      <Header title="Shopping" />
      <AddItem 
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit}
      />
      <Content 
      items={items} 
      handleCheck = {handleCheck}
      handleDelete = {handleDelete} />

      <Footer length = {items.length}/>
    </div>
  );
}

export default App;
