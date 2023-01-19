import React, { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import Merquee from './components/Merquee/Merquee';
import Footer from './components/Footer/Footer'
import Admin from './pages/Admin/Admin';
import SubAdmin from './pages/SubAdmin/SubAdmin';
import SuperAgent from './pages/SuperAgent/SuperAgent';
import MasterAgent from './pages/MasterAgent/MasterAgent';
import CustomarService from './pages/CustomarService/CustomarService';
import Login from './pages/Login/Login';

function App() {
  const location = useLocation();
  const [render, setRender] = useState(true);

  useEffect(() => {
    if (location.pathname === "/login") {
      setRender(false)
    }
  }, [location.pathname])

  return (
    <>
      <Banner />
      {render && <Navbar />}
      {render && <Merquee />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customar-service" element={<CustomarService />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/sub-admin" element={<SubAdmin />} />
        <Route path="/super-agent" element={<SuperAgent />} />
        <Route path="/master-agent" element={<MasterAgent />} />
      </Routes>
      <Toaster />
      <Footer />
    </>
  )
}

export default App
