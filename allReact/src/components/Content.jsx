// import React from 'react'

const Content = () => {
  const handleNameChange = () => {
    const names = ["krish", "karthik", "kushal"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  return <main>Hey {handleNameChange}</main>;
};

export default Content;
