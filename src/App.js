import logo from './logo.svg';
import './App.css';
import Compras from './components/Compras'

function App() {

  const name = "Edgarcito"

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hecho por {name}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
 <Compras />
    </div>
    
  );
}

export default App;
