import React, { createContext, useState, useEffect, useRef, useCallback } from 'react';
import initialSongsData from '../data/songs.json';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [songs, setSongs] = useState(initialSongsData);
  const [currentSongIndex, setCurrentSongIndex] = useState(() => {
    const savedIndex = localStorage.getItem('lastPlayedSongIndex_simple');
    const parsedIndex = savedIndex ? parseInt(savedIndex, 10) : 0;
    return parsedIndex >= 0 && parsedIndex < songs.length ? parsedIndex : 0;
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(() => {
    const savedVolume = localStorage.getItem('volume_simple');
    return savedVolume ? parseFloat(savedVolume) : 0.7;
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme_simple') || 'light';
  });

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);
  const currentSong = songs[currentSongIndex] || (songs.length > 0 ? songs[0] : null);


  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme_simple', theme);
  }, [theme]);


  useEffect(() => {
    localStorage.setItem('lastPlayedSongIndex_simple', currentSongIndex.toString());
  }, [currentSongIndex]);

  useEffect(() => {
    localStorage.setItem('volume_simple', volume.toString());
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleSongEnd = useCallback(() => {
    if (currentSongIndex < songs.length - 1) {
      setCurrentSongIndex(prevIndex => prevIndex + 1);
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
      setCurrentSongIndex(0);
    }
  }, [currentSongIndex, songs.length]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateTime = () => setCurrentTime(audio.currentTime);
    const setAudioDuration = () => {
      if (audio.duration && !isNaN(audio.duration) && audio.duration !== Infinity) {
        setDuration(audio.duration);
      } else {
        setDuration(0);
      }
    };
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', setAudioDuration);
    audio.addEventListener('canplay', setAudioDuration);
    audio.addEventListener('ended', handleSongEnd);
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', setAudioDuration);
      audio.removeEventListener('canplay', setAudioDuration);
      audio.removeEventListener('ended', handleSongEnd);
    };
  }, [handleSongEnd]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentSong) {
      if (isPlaying) setIsPlaying(false);
      return;
    }
    const newSrc = process.env.PUBLIC_URL + currentSong.src;
    let currentAudioSrcPath = "";
    try {
         if(audio.src && audio.src !== window.location.href && audio.src.startsWith('http')) {
             currentAudioSrcPath = new URL(audio.src).pathname;
         } else if (audio.src) {
             currentAudioSrcPath = audio.src;
         }
    } catch(e){}
    
    const newSrcPathNormalized = new URL(newSrc, window.location.origin).pathname;

    if (currentAudioSrcPath !== newSrcPathNormalized) {
      audio.src = newSrc;
      audio.load();
      setCurrentTime(0);
    }
    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      }
    } else {
      audio.pause();
    }
  }, [currentSong, isPlaying]);

  const playSong = (index) => {
    if (index === currentSongIndex && !isPlaying) {
      setIsPlaying(true);
    } else if (index !== currentSongIndex) {
      setCurrentSongIndex(index);
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    if (!currentSong && songs.length > 0) {
      setCurrentSongIndex(0);
      setIsPlaying(true);
    } else if (currentSong) {
      setIsPlaying(!isPlaying);
    }
  };

  const handleNextSong = () => {
    if (!songs.length) return;
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  };

  const handlePrevSong = () => {
    if (!songs.length) return;
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
  };

  const seekTime = (time) => {
    if (audioRef.current && audioRef.current.seekable && audioRef.current.duration) {
      const newTime = Math.max(0, Math.min(time, audioRef.current.duration));
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };


  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  return (
    <AppContext.Provider
      value={{
        songs,
        currentSong,
        isPlaying,
        volume,
        theme,
        currentTime,
        duration,
        audioRef,
        playSong,
        togglePlayPause,
        handleNextSong,
        handlePrevSong,
        setVolume,
        seekTime,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};