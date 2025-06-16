import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const VolumeControl = () => {
  const { volume, setVolume } = useContext(AppContext);
  const [isMuted, setIsMuted] = useState(volume === 0);
  const [volumeBeforeMute, setVolumeBeforeMute] = useState(volume > 0 ? volume : 0.5);

  useEffect(() => {
     setIsMuted(volume === 0);
  }, [volume]);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const toggleMute = () => {
    if (isMuted) {
      setVolume(volumeBeforeMute);
    } else {
      setVolumeBeforeMute(volume);
      setVolume(0);
    }
  };
  
  return (
    <div className="volume-control-container">
      <button onClick={toggleMute} className="control-button" style={{fontSize: "1.2em", padding: "5px"}} title={isMuted ? "Przywróć dźwięk" : "Wycisz"}>
        {isMuted ? <span className="icon-volume-mute"></span> : <span className="icon-volume-high"></span>}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        aria-label="Regulacja głośności"
      />
    </div>
  );
};

export default VolumeControl;