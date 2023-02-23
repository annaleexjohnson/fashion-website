import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import Page2 from './components/Page2'


function App() {
  return(
    <div className="font-sans h-[100vh] m-h-[100vh] overflow-y-hidden overflow-x-auto flex flex-row">
      <Header />
      <HomePage />
      <Page2 />
    </div>
  )
}

export default App
