import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import pages here
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Instructions from './pages/Instructions';
import Quest from './pages/Quest';
import BonusQuest from './pages/BonusQuest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/quest" element={<Quest />} />
        <Route path="/bonus_quest" element={<BonusQuest />} />
      </Routes>
    </Router> 
  );
}

export default App;