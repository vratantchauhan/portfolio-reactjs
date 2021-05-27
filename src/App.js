import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from "react-particles-js";
import Aboutme from './components/AboutMe';
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
      
    </div>
  );
}

export default App;
