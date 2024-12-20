import Header from "./components/Header";
import SearchItem from "./components/SearchItem";
import AddItem from "./components/AddItem";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";
import { useState , useEffect } from "react";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList")) || []
  );

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

// useEffect works asynchronously everytime the state is changed before and after are logged to console but not inside useEffect as useEffect hook runs the code after everything below in the component is rendered as well

//  console.log("before useeffect")
//   useEffect(() => {
//     console.log("inside useeffect")
//   })
//   console.log("after useeffect")

// using useEffect to save the items

useEffect(() => {
  localStorage.setItem("shoppinglist", JSON.stringify(items));
})
  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    // defining state to check the items of list using ternary operator
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    // adding Item
    addItem(newItem);
    setNewItem("");
  };
  return (
    <div className="App">
      <Header title="Shopping List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />

      <Footer length={items.length} />
    </div>
  );
}

export default App;
