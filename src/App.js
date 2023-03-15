import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';


function App() {
  return (
    <div className="App" style={{width:"80%", margin: "auto"}}>
      <Navbar />
      
      <Home />
      
    </div>
  );
}

export default App;
