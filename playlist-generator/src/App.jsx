// App.jsx
import React, { useState } from 'react';
import GeneratorForm from './components/GeneratorForm';
import GeneratedPlaylist from './components/GeneratedPlaylist';
import axios from 'axios';
import './index.css'; // Import the main CSS file for styling

const App = () => {
  const [generatedPlaylist, setGeneratedPlaylist] = useState([]);
  const [showGeneratorForm, setShowGeneratorForm] = useState(true); // Initial state for visibility

  const generatePlaylist = async (genre, mood, theme) => {
    try {
      const response = await fetchPlaylistFromAPI(genre, mood, theme);
      setGeneratedPlaylist(response);
      setShowGeneratorForm(false); // Hide GeneratorForm after generating playlist
    } catch (error) {
      console.error('Error fetching playlist:', error.message);
      setGeneratedPlaylist([]);
    }
  };

  const fetchPlaylistFromAPI = async (genre, mood, theme) => {
    try {
      const response = await axios.get(
        `https://itunes.apple.com/search?term=${genre}+${mood}+${theme}&media=music&limit=5`
      );

      const playlist = response.data.results.map((song) => ({
        title: song.trackName,
        artist: song.artistName,
        previewUrl: song.previewUrl,
      }));

      return playlist;
    } catch (error) {
      console.error('Error fetching playlist from API:', error.message);
      return [];
    }
  };

  return (
    <div className="container">
      <h1>Playlist Generator</h1>
      {showGeneratorForm ? (
        <GeneratorForm generatePlaylist={generatePlaylist} />
      ) : (
        <GeneratedPlaylist playlist={generatedPlaylist} />
      )}
    </div>
  );
};

export default App;
