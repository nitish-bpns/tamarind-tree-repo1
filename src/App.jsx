import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Home from './pages/Home';
// import Project from './pages/Project';
import Gazebo from './pages/Gazebo';
import Landing from './pages/Landing';
import Second from './pages/Second';
import './index.css';

import ReactAudioPlayer from 'react-audio-player';



function App() {
  return (
    <>

      {/* <ReactAudioPlayer
        src="./assets/music.mp3"
        autoPlay
        controls
      /> */}

      <Router>
        <Routes>

          <Route path='/' element={<Landing />}></Route >
          <Route path='/second' exact element={<Second />}></Route >
          <Route path='/gazebo' exact element={<Gazebo />}></Route>

        </Routes>
      </Router >

      <ReactAudioPlayer
        className='bcMusic'
        src="./music.mp3"
        autoPlay={true}
        controls={true}
        loop={true}
      />

    </>
  );
}

export default App;
