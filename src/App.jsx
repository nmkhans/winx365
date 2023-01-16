import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import Merquee from './components/Merquee/Merquee';
import Footer from './components/Footer/Footer'
import Admin from './pages/Admin/Admin';
import SubAdmin from './pages/SubAdmin/SubAdmin';
import SuperAdmin from './pages/SuperAdmin/SuperAdmin';
import MasterAgent from './pages/MasterAgent/MasterAgent';
import CustomarService from './pages/CustomarService/CustomarService';

function App() {

  return (
    <>
      <Banner />
      <Navbar />
      <Merquee />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customar-service" element={<CustomarService />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/sub-admin" element={<SubAdmin />} />
        <Route path="/super-admin" element={<SuperAdmin />} />
        <Route path="/master-agent" element={<MasterAgent />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
