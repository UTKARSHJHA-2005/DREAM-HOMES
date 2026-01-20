import './App.css';
import { DarkModeProvider } from './DarkModeContext';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Populararea from './Populararea';
import Properties from './Properties';
import Clients from './Clients';
import Services from './Services';
import Contact from './Contact';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <br />
        <Populararea />
        <Properties />
        <br />
        <Clients />
        <br />
        <Contact />
        <Footer />
      </Router>
    </DarkModeProvider>
  );
}

export default App;
