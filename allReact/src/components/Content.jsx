// import React from 'react'
import { useState } from "react";

const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "Chocolate Milkshake"
        },
        {
            id: 2,
            checked: false,
            item: "Item2"
        },
        {
            id: 3,
            checked: false,
            item: "Item3"
        }
    ])

    const handleCheck = (id) => {
        console.log(`key:  ${id}`)
    }
  return (
    <main>
      <ul>
        {items.map((item) => (
            <li className="item" key={item.id}>
                <input 
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked = {item.checked} 
                />
                <label> {item.item}</label>
                <button className="btn">❌</button>
            </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
