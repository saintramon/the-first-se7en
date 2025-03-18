import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// import pages here
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Instructions from './pages/instructions/Instructions';
import Quest from './pages/quest/Quest';
import BonusQuest from './pages/bonus_quest/BonusQuest';
import axios from '../axios.config';

function App() {
  
  const [response, setResponse] = useState(null);

  useEffect(() => {
    async function fetchData() {
        try {
          const response = await axios.get('/api/');
          console.log("API Response:", response.data); 
          setResponse(response.data);
        } catch {
          console.error("Error fetching: ", error);
        }
    }
  fetchData();
  }, []);

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