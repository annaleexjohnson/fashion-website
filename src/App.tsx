import { useState, useEffect} from 'react'

import Header from './components/Header'
import HomePage from './components/HomePage'
import ModelProfile from './components/ModelProfile'
import FireIce from './components/FireIce'
import SpringCampaign from './components/SpringCampaign'
import Coordinates from './components/Coordinates'
import Photogrid from './components/Photogrid'

interface WheelEvent<T = Element> {
  deltaX: number;
  deltaY: number;
  target: HTMLDivElement;
}

const App = () =>{

  const target = document.getElementById("App") as HTMLDivElement

  // On scroll with wheel
  const handleWheelEvent = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!e.deltaY) {
      return;
    }
    target.scrollLeft += e.deltaY + e.deltaX;
  };

  return(
    <div id="App" 
    onWheel={handleWheelEvent}
    className="font-sans flex flex-col w-[100vw] m-w[100vw]
    md:fixed md:flex-row md:h-[100vh] md:m-h-[100vh] md:width-auto md:overflow-y-hidden md:overflow-x-auto">
      <Header/>
      <HomePage />
      <ModelProfile />
      <FireIce />
      <Photogrid />
      <Coordinates />
      <SpringCampaign />   
    </div>
  )
}

export default App
