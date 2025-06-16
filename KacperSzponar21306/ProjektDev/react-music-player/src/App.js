import React from 'react';
import { AppProvider } from './context/AppContext';
import Player from './components/Player';
import Playlist from './components/Playlist';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="app-container">
        <header className="app-header">
          <h1>Odtwarzacz React</h1>
          <ThemeToggle />
        </header>
        <Player />
        <Playlist />
      </div>
    </AppProvider>
  );
}

export default App;