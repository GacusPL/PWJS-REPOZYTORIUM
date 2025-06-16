import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import SongItem from './SongItem';

const Playlist = () => {
  const { songs } = useContext(AppContext);

  if (!songs || songs.length === 0) {
    return <div className="playlist-container"><p>Brak utworów na playliście.</p></div>;
  }
  
  return (
    <div className="playlist-container">
      <div className="playlist-header">
        <h3>Playlista</h3>
      </div>
      {songs.map((song, index) => (
        <SongItem 
            key={song.id || index} 
            song={song} 
            index={index} 
        />
      ))}
    </div>
  );
};

export default Playlist;