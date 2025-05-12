import './App.css';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import UserList from './UserList';
import TimerCounter from './TimerCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Laboratorium 8</h2>
      <ToggleDetails />
      Wynik:
      <ScoreDisplay score={70}  />
      <h3>Lista zadań</h3>
      <TaskList />
      <h3>Lista użytkowników</h3>
      <UserList />
      <TimerCounter />
      </header>
    </div>
  );
}

export default App;
