// src/components/DreamReflection.jsx
import React, { useState } from 'react';

const DreamReflection = () => {
  const [reflection, setReflection] = useState('');

  const handleReflectionChange = (e) => {
    setReflection(e.target.value);
  };

  return (
    <div>
      <h2>Dream Reflection</h2>
      <textarea
        value={reflection}
        onChange={handleReflectionChange}
        placeholder="Reflect on your dream..."
      />
    </div>
  );
};

export default DreamReflection;
