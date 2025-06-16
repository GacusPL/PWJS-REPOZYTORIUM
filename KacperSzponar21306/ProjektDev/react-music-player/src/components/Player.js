import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';

const Player = () => {
  const { currentSong, audioRef } = useContext(AppContext);

  if (!currentSong) {
    return <div className="player"><p>Wybierz utwór z playlisty.</p></div>;
  }

  return (
    <div className="player">
      <audio ref={audioRef} className="hidden-audio" preload="metadata" />
      <img 
        src={currentSong.cover ? process.env.PUBLIC_URL + currentSong.cover : `${process.env.PUBLIC_URL}/covers/default_cover.png`} 
        alt={`Okładka ${currentSong.title}`} 
        className="song-cover"
        onError={(e) => { e.target.src = `${process.env.PUBLIC_URL}/covers/default_cover.png`; }}
      />
      <div className="song-info">
        <h2>{currentSong.title}</h2>
        <p>{currentSong.artist}</p>
      </div>
      <ProgressBar />
      <Controls />
      <VolumeControl />
    </div>
  );
};

export default Player;