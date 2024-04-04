import './App.css';
import { NavBar } from './components/navbar';
import { Home } from './components/home';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
