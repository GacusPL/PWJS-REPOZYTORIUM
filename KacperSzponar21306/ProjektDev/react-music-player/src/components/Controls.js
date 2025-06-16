import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Controls = () => {
  const { isPlaying, togglePlayPause, handleNextSong, handlePrevSong } = useContext(AppContext);

  return (
    <div className="controls">
      <button onClick={handlePrevSong} className="control-button" title="Poprzedni">
        <span className="icon-prev"></span>
      </button>
      <button onClick={togglePlayPause} className="control-button play-pause" title={isPlaying ? "Pauza" : "Odtwórz"}>
        {isPlaying ? <span className="icon-pause"></span> : <span className="icon-play"></span>}
      </button>
      <button onClick={handleNextSong} className="control-button" title="Następny">
        <span className="icon-next"></span>
      </button>
    </div>
  );
};

export default Controls;