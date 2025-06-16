import React from 'react';
import './App.css';
import ClickCounter from './ClickCounter';
import PrimeCalculator from "./PrimeCalculator";
import FormReducer from "./FormReducer";
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import LayoutEffectExample from "./LayoutEffectExample";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Zadanie 1</h3>
        <a>Przycisk</a>
        <div>
          <ClickCounter />
        </div>
        <h3>Zadanie 2</h3>
        <div>
          <PrimeCalculator />
        </div>
        <h3>Zadanie 3</h3>
        <div>
          <FormReducer />
        </div>
        <h3>Zadanie 4</h3>
        <div>
          <ThemeProvider>
            <ThemeSwitcher />
          </ThemeProvider>
        </div>
        <h3>Zadanie 4</h3>
        <div>
          <LayoutEffectExample />
        </div>
      </header>
    </div>
  );
}

export default App;
