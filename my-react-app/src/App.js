import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Components/Navbar';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';



function App() {
  return(
    <div className="container-fluid">
      <BrowserRouter>
      <MyNavbar/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
   );
  };
export default App;

