
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const SongItem = ({ song, index }) => {
  const { currentSong, playSong } = useContext(AppContext);
  const isActive = currentSong && currentSong.id === song.id;

  return (
    <div 
      className={`song-item ${isActive ? 'active' : ''}`} 
      onClick={() => playSong(index)}
      title={`Odtwórz ${song.title}`}
    >
      <img 
        src={song.cover ? process.env.PUBLIC_URL + song.cover : `${process.env.PUBLIC_URL}/covers/default_list_cover.png`} 
        alt={song.title} 
        className="song-item-cover"
        onError={(e) => { e.target.src = `${process.env.PUBLIC_URL}/covers/default_list_cover.png`; }}
      />
      <div className="song-item-info">
        <h4>{song.title}</h4>
        <p>{song.artist}</p>
      </div>
    </div>
  );
};

export default SongItem;