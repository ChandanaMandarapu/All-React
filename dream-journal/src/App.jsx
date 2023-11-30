// src/App.jsx
import React from 'react';
import { DreamProvider } from './context/DreamContext';
import DreamForm from './components/DreamForm';
import DreamList from './components/DreamList';
import DreamVisualization from './components/DreamVisualization';
import DreamReflection from './components/DreamReflection';

const App = () => {
  return (
    <DreamProvider>
      <div>
        <h1>Dream Journal with AI Interpretation</h1>
        <DreamForm />
        <DreamList />
        <DreamVisualization />
        <DreamReflection />
      </div>
    </DreamProvider>
  );
};

export default App;
