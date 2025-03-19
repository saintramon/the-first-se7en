import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from '../axios.config';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Instructions from './pages/instructions/Instructions';
import Quest from './pages/quest/Quest';
import BonusQuest from './pages/bonus_quest/BonusQuest';

function App() {
  const [user, setUser] = useState(null);
  const [response, setResponse] = useState(null);


  // check if a user is logged in to handle redirection.
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  })

  useEffect(() => {
    async function fetchData() {
        try {
          const response = await axios.get('/api');
          console.log("API Response:", response.data); 
          setResponse(response.data);
        } catch (error) {
          console.error("Error fetching: ", error);
        }
    }
  fetchData();
  }, []);

  return (
    // FOR PRODUCTIO
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
    //     <Route path="/signup" element={<Signup />} />
    //     <Route path="/instructions" element={user ? <Instructions /> : <Navigate to="/login"/>} />
    //     <Route path="/quest" element={user ? <Quest /> : <Navigate to="/login"/>} />
    //     <Route path="/bonus_quest" element={user ? <BonusQuest /> : <Navigate to="/login"/>} />
    //   </Routes>
    // </Router>
    
    // UNCOMMENT FOR DEV / TESTING
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/instructions" element={<Instructions /> } />
        <Route path="/quest" element={<Quest /> } />
        <Route path="/bonus_quest" element={<BonusQuest /> } />
      </Routes>
    </Router> 
  );
}

export default App;