import { useState } from 'react';
import './App.css';
import videoBackground from './assets/background-video.mp4'; // Add your video file here
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <>
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <Navbar/>
      </div>
    </>
  );
}

export default App;
