import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ProgressBar = () => {
  const { currentTime, duration, seekTime } = useContext(AppContext);

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || timeInSeconds === 0 || timeInSeconds === Infinity) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleProgressChange = (e) => {
    seekTime(parseFloat(e.target.value));
  };

  return (
    <div className="progress-bar-container">
      <span className="time-display">{formatTime(currentTime)}</span>
      <input
        type="range"
        min="0"
        max={duration || 0}
        value={currentTime}
        onChange={handleProgressChange}
        disabled={!duration}
        aria-label="Pasek postępu"
      />
      <span className="time-display">{formatTime(duration)}</span>
    </div>
  );
};

export default ProgressBar;