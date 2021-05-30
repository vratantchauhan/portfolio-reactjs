import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from "react-particles-js";
import Aboutme from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Particles
      params={{
        Particles:{
          Number:{
           value:30,
           density:{
             enable:true,
             value_area:900
           }   
          },
          shape:{
            type:"star",
            stroke:{
              width:6,
              color:"#f9ab00"
            }
          }
        }
        }}/>
      <Navbar/>
      <Header/>
     <Aboutme/>
     <Services/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
