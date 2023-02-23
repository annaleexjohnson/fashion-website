import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'


function App() {
  return(
    <div className="font-sans h-[100vh] m-h-[100vh] overflow-y-hidden overflow-x-auto flex flex-row">
      <Header />
      <HomePage />
    </div>
  )
}

export default App
