
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from "./components/Navbar";
import Team from './pages/Team';
import Footer from './components/Footer';
import Events from './pages/Events';

function App() {
  return (
    <div className="App ">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path='/events' element={<Events/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
