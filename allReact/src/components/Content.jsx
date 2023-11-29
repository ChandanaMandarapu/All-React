// import React from 'react'

const Content = () => {
  const handleNameChange = () => {
    const names = ["krish", "karthik", "kushal"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick = () => console.log("You clicked");

  //   click events anonymous functions
  const handleClick2 = () => console.log("${name} was clicked");

  const handleClick3 = (e) => console.log(e.target);

  return (
    <main>
      <p onDoubleClick={handleClick}>Hey {handleNameChange}</p>

      <button onClick={handleClick}>Click It</button>

      {/* passing parameters anonymous functions */}
      <button onClick={() => handleClick2("chandana")}>Click It</button>
      
      {/* loging event object */}
      <button onClick={(e) => handleClick3(e)}>Click Here</button>
    </main>
  );
};

export default Content;
