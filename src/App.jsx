import { useState } from 'react';
import './App.css';
import Loginpage from './components/Loginpage';
import Signuppage from './components/Signuppage';
import Navbar from './components/Reuse/Navbar';
import Homepage from './components/Homepage';
import Forcast from './components/Forcast';
import TopStocks from './components/TopStocks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/forcast" element={<Forcast />} />
        <Route path="/top-stocks" element={<TopStocks />} />
      </Routes>
    </Router>
  );
}

export default App;