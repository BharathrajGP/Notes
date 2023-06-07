import logo from './logo.svg';
import './App.css';
// importing class component
import Welcome from './components/Welcome_Class';
//importing functional component
import Naanu from './components/functional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello rhibhus employees
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Welcome/>
      <Naanu/>
    </div>
  );
}

export default App;
