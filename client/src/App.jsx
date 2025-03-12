import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import pages here
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Instructions from './pages/instructions';
import Quest from './pages/quest';
import BonusQuest from './pages/bonus_quest';

function App() {
  return (
    <Router>
      <Routes>
        <Route> path="/" element={<Home />} </Route>
        <Route> path="/login" element-{<Login />}</Route>
        <Route> path="/signup" element-{<Signup />}</Route>        
        <Route> path="/instructions" element-{<Instructions />}</Route>        
        <Route> path="/quest" element-{<Quest />}</Route>
        <Route> path="/bonus_quest" element-{<BonusQuest />}</Route>               
      </Routes>
    </Router>
  )
}

export default App