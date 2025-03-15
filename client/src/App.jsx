import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import pages here
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Instructions from './pages/instruction/Instructions';
import Quest from './pages/quest/Quest';
import BonusQuest from './pages/bonus_quest/BonusQuest';

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