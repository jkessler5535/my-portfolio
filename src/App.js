
import React, {useState} from 'react';
import './App.css';
import './index.css';
import Navigation from './Pages/Navigation';
import Home from './Pages/Home';
import About from './Pages/About';
import SkillsSection from './Pages/SkillsSection';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="Container">
      <Navigation setCurrentPage={setCurrentPage} />
      <Home currentPage={currentPage} />
      <About />
      <SkillsSection />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
