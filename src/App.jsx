import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import Merquee from './components/Merquee/Merquee';

function App() {

  return (
    <>
      <Banner />
      <Navbar />
      <Merquee />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* footer */}
    </>
  )
}

export default App
