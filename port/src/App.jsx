import { useState } from 'react';
import './App.css';
import videoBackground from './assets/background-video-1.mp4'; // Add your video file here
import Navbar from './Components/Navbar/Navbar';
import Tagline from './Components/Text/Tagline';
import { GetStarted } from './Components/GetStarted/GetStarted';
import Cards from './Components/Cards/Cards';


function App() {
  const [count, setCount] = useState(0);

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
        <div className="tagline">
        <Tagline/>
        </div>
        <div className="getstarted">
          <GetStarted/>
        </div>
        <div className="cards">
        <Cards Name ="Projects Count 1"/>
        <Cards Name ="Reviews"/>
        <Cards Name ="Tech used"/>  
        </div>
        
      </div>
    </>
  );
}

export default App;
