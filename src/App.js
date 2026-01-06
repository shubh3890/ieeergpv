import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import Event2 from './events/Event2';
import Event3 from './events/Event3';
import Event4 from './events/Event4';
import Event5 from './events/Event5';
import Event6 from './events/Event6';
import Event7 from './events/Event7';
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <div className="App ">
     <Analytics/>
      <Navbar/>
      <ScrollToTop/>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
       
        <Route path="/events" element={<Events />}/>
           <Route path="/events/event1" element={<Event1 />} />
           <Route path="/events/event2" element={<Event2 />} />
           <Route path="/events/event3" element={<Event3 />} />
           <Route path="/events/event4" element={<Event4 />} />
           <Route path="/events/event5" element={<Event5 />} />
           <Route path="/events/event6" element={<Event6 />} />
           <Route path="/events/event7" element={<Event7 />} />
           <Route path="/events/register" element={<Register />} />
     
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
