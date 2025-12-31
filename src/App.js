
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from "./components/Navbar";
import Team from './pages/Team';
import Footer from './components/Footer';
import Events from './pages/Events';
import Event1 from './events/Event1';
import ScrollToTop from './components/ScrollToTop';
import Register from './events/Register';

function App() {
  return (
    <div className="App ">
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
       
        <Route path="/events" element={<Events />}/>
           <Route path="/events/event1" element={<Event1 />} />
           <Route path="/events/register" element={<Register />} />
     
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
