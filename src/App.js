import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About'
import Projects from './components/Projects/Projects';
import Connect from './components/Connect/Connect';
import Toggle from './components/Toggle/Toggle';

import './App.css';

import { useContext } from 'react';
import { ThemeContext } from './components/Context';



function App() {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;


  return (
   <div style={{backgroundColor : darkMode ? "black": "white", color: darkMode ? "white" : "black"}}>
     <Navbar />
     <Toggle />
     <Home />
     <About />
     <Projects />
     <Connect />
   </div>
  );
}

export default App;
