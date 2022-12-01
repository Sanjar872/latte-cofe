import './App.css';
import {Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu'
import Worktime from './Components/WorkTime/Worktime';
import Info from './Components/Infor/Info';
import Footer from './Components/Footer/Footer';
import Galery from './Components/Gallery/Gallery';
import About from './Components/About/About';
function App() {
  return (
    <div className='Container'>
      <Navbar/>
      <About/>
      <Menu/>
      <Worktime/>
      <Galery/>
      <Info/>
      <Footer/>

    </div>
  );
}

export default App;
