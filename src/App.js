import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/website_pages_no_acc_user/Home';
import Departments from './pages/website_pages_no_acc_user/Departments';
import Events from './pages/website_pages_no_acc_user/Events';
import About from './pages/website_pages_no_acc_user/About';
import Contact from './pages/website_pages_no_acc_user/Contact';
import Error from './pages/website_pages_no_acc_user/Error';
import Portal from './pages/website_pages_no_acc_user/Portal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;