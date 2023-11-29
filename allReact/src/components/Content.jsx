// import React from 'react'
import { useState } from "react";

const Content = () => {
    const [name, setName] = useState('chandu')

    const[count,setCount] = useState(0)

  const handleNameChange = () => {
    const names = ["krish", "karthik", "kushal"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1)
    console.log(count)
  }

  //   click events anonymous functions
  const handleClick2 = () => console.log("${name} was clicked");

  const handleClick3 = (e) => console.log(e.target);

  return (
    <main>
      <p onDoubleClick={handleClick2}>Hey {name}</p>

      <button onClick={handleNameChange}>Click It</button>

      {/* passing parameters anonymous functions */}
      <button onClick={() => handleClick("chandana")}>Click It</button>

      {/* loging event object */}
      <button onClick={(e) => handleClick3(e)}>Click Here</button>
    </main>
  );
};

export default Content;
