import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';
import PlayerList from './Components/PlayerList';

function App() {
  return (
    <div className="App">
      <Welcome/>
      <PlayerList/>
    </div>
  );
}

export default App;
