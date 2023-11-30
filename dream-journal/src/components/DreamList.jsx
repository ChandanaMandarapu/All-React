import React from 'react';
import { useDreamContext } from '../context/DreamContext';

const DreamList = () => {
  const { dreams } = useDreamContext();

  return (
    <div id="dreamList" className="container">
      <h2>Logged Dreams</h2>
      <ul>
        {dreams.map((dream, index) => (
          <li key={index} style={{ marginBottom: '15px' }}>
            <strong>Dream:</strong> {dream.text}
            <br />
            <strong>Interpretation:</strong> {dream.interpretation}
            <br />
            <strong>Mood:</strong> {dream.mood}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DreamList;