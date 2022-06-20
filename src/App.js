
import './App.css';
import Coin from './features/counter/Coin';
import { Counter } from './features/counter/Count';
import Theme from './features/Theme/Theme';

function App() {
  return (
    <div className="App">
     <Counter/>
     <Coin/>
     <Theme/>
    </div>
  );
}

export default App;
