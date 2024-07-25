import logo from './logo.svg';
import './App.scss';
import myComponents from './examples/myComponents.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, I am Cristiano Ronaldo.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <myComponents />
      </header>
    </div>
  );
}

export default App;
