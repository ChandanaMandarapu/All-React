// src/context/DreamContext.jsx
import React, { createContext, useState, useContext } from 'react';

const DreamContext = createContext();

export const useDreamContext = () => {
  return useContext(DreamContext);
};

export const DreamProvider = ({ children }) => {
  const [dreams, setDreams] = useState([]);

  const addDream = (dream) => {
    setDreams([...dreams, dream]);
  };

  const value = {
    dreams,
    addDream,
  };

  return (
    <DreamContext.Provider value={value}>
      {children}
    </DreamContext.Provider>
  );
};
