import { useState, useEffect, useRef, WheelEventHandler } from 'react'
import './App.css'

import Header from './components/Header'
import HomePage from './components/HomePage'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import Photogrid from './components/Photogrid'


function App() {

  return(
    <div className="font-sans flex flex-row h-[100vh] m-h-[100vh] overflow-y-hidden overflow-x-auto">
      <Header/>
      <HomePage />
      <Page2 />
      <Page3 />
      <Page4 />   
      <Photogrid />
      <Page5 />
    </div>
  )
}

export default App
