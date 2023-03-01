import { useState, useEffect, useRef, WheelEventHandler } from 'react'
import './App.css'

import Header from './components/Header'
import HomePage from './components/HomePage'
import ModelProfile from './components/ModelProfile'
import FireIce from './components/FireIce'
import SpringCampaign from './components/SpringCampaign'
import Coordinates from './components/Coordinates'
import Photogrid from './components/Photogrid'


function App() {

  return(
    <div className="font-sans flex flex-col w-[100vw] m-w[100vw]
    md:flex-row md:h-[100vh] md:m-h-[100vh] md:width-auto md:overflow-y-hidden md:overflow-x-auto">
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
