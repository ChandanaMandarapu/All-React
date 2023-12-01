// GeneratorForm.jsx
import React, { useState } from 'react';
import './GeneratorForm.css';
const GeneratorForm = ({ generatePlaylist }) => {
  const [genre, setGenre] = useState('');
  const [mood, setMood] = useState('');
  const [theme, setTheme] = useState('');

  const handleGenerateClick = () => {
    generatePlaylist(genre, mood, theme);
  };

  // Define options for genre, mood, and theme
  const genreOptions = ['pop', 'rock', 'hip-hop', 'country', 'jazz'];
  const moodOptions = ['happy', 'sad', 'calm', 'energetic'];
  const themeOptions = ['love', 'nature', 'party', 'travel'];

  return (
    <div>
      <label>
        Genre:
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">Select Genre</option>
          {genreOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Mood:
        <select value={mood} onChange={(e) => setMood(e.target.value)}>
          <option value="">Select Mood</option>
          {moodOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Theme:
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="">Select Theme</option>
          {themeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button onClick={handleGenerateClick}>Generate Playlist</button>
    </div>
  );
};

export default GeneratorForm;
