import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      {theme === 'light' ? <span className="icon-moon" title="Dark Mode"></span> : <span className="icon-sun" title="Light Mode"></span>}
      <span style={{marginLeft: '5px'}}>{theme === 'light' ? 'Ciemny' : 'Jasny'}</span>
    </button>
  );
};

export default ThemeToggle;