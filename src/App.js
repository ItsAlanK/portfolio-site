import './style/styles.js';
import { NavBar } from './components/NavBar.js';
import { Hero } from './components/Hero.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
