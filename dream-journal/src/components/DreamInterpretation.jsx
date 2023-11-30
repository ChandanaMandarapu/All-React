import React from 'react';

const DreamInterpretation = ({ interpretation }) => {
  return (
    <div id="dreamInterpretation" className="container">
      <h2>AI Interpretation</h2>
      <p>{interpretation}</p>
    </div>
  );
};
export default DreamInterpretation