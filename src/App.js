import logo from './logo.svg';
import './App.css';
import {vision} from './utils/vision.js'

function App() {
  return (
    <div className="App">
        <h1>{vision()}</h1>
    </div>
  );
}

export default App;
