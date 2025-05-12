import './App.css';
import Hello from './Hello';
import HelloWithProps from './HelloWithProps';
import Counter from './Counter';
import InputTracker from './InputTracker';
import LoginStatus from './LoginStatus';
import ToDoList from './ToDoList';
import LoginForm from './LoginForm';

function App() {
  const lista = ['Zrobić zakupy', ['Pójść na spacer'], ['Iść spać']];
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Hello />
        </div>
        <HelloWithProps name="Anna" />
        <HelloWithProps name="Bartek" />
        <HelloWithProps name="Celina" />
        <Counter />
        <InputTracker />
        <LoginStatus isLoggedIn={true} />
        <h3>Lista zadań:</h3>
        <ToDoList todos={lista} />
        <LoginForm />
      </header>

    </div>
  );
}

export default App;
