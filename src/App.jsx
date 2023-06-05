import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Home from './pages/Home';
// import Project from './pages/Project';
import Gazebo from './pages/Gazebo';
import Landing from './pages/Landing';
import Second from './pages/Second';


function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Landing />}></Route >
        <Route path='/second' exact element={<Second />}></Route >
        <Route path='/gazebo' exact element={<Gazebo />}></Route>

      </Routes>
    </Router >
  );
}

export default App;
