// GeneratedPlaylist.jsx
import React from 'react';
import './GeneratedPlaylist.css'; // Import the CSS file for styling

const GeneratedPlaylist = ({ playlist }) => {
  return (
    <div>
      <h2>Generated Playlist:</h2>
      {playlist.length > 0 ? (
        <ul className="playlist-container">
          {playlist.map((song, index) => (
            <li key={index} className="playlist-item">
              {song.title} - {song.artist}{' '}
              <audio controls>
                <source src={song.previewUrl} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </li>
          ))}
        </ul>
      ) : (
        <p>No playlist generated. Please input valid values.</p>
      )}
    </div>
  );
};

export default GeneratedPlaylist;
