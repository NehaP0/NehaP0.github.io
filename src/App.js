import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';

function App() {
  return (
    <div className="App">
      <Navbar />      
      <Home />
      <About /> 
      <Experience />
      <Skills />
      <Projects />
      <Contact  />
    </div>
  );
}

export default App;
