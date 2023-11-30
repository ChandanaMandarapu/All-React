// src/components/DreamForm.jsx
import React, { useState } from 'react';
import { useDreamContext } from '../context/DreamContext';
import compromise from 'compromise';
import DreamInterpretation from './DreamInterpretation';

const DreamForm = () => {
  const { addDream } = useDreamContext();
  const [dreamText, setDreamText] = useState('');
  const [interpretation, setInterpretation] = useState('');
  const [mood, setMood] = useState('');

  const interpretDream = () => {
    const interpretation = compromise(dreamText).sentences().out('array');
    setInterpretation(interpretation.join(' ')); // Join sentences for better visibility
  };

  const submitDream = () => {
    interpretDream();
    addDream({ text: dreamText, interpretation, mood });
    setDreamText('');
    setInterpretation('');
    setMood('');
  };

  return (
    <div id="dreamForm" className="container">
      <textarea
        value={dreamText}
        onChange={(e) => setDreamText(e.target.value)}
        placeholder="Write your dream here..."
      />
      <label>
        Mood:
        <select value={mood} onChange={(e) => setMood(e.target.value)}>
          <option disabled value="">
            Select Mood
          </option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="excited">Excited</option>
          {/* Add more mood options as needed */}
        </select>
      </label>
      <button onClick={submitDream}>Submit Dream</button>
      {interpretation && <DreamInterpretation interpretation={interpretation} />}
    </div>
  );
};

export default DreamForm;
