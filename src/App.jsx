import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import Merquee from './components/Merquee/Merquee';
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Banner />
      <Navbar />
      <Merquee />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
