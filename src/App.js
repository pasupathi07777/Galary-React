
import './App.css';
import Galary from './components/Galary';
import {details} from './components/data.js'

function App() {
  return (
    <div className="App">
      <Galary details={details}/>
     
    </div>
  );
}

export default App;
