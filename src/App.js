import './style/styles.js';
import { NavBar } from './components/NavBar.js';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Projects } from './components/Projects.js';
import { Contact } from './components/Contact.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
