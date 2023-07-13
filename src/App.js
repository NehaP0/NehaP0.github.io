import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import About from './Components/About';
import Skills from './Components/Skills';
import Resume from './Components/Resume';
import Github from './Components/Github';



function App() {

  

  return (
    <div className="App" style={{width:"80%", margin: "auto"}}>
      <Navbar />      
      <Home />
      <About />        
      <Skills />
      <Projects />
      <Github />
      <Contact  />
      <Resume />

      
    </div>
  );
}

export default App;
