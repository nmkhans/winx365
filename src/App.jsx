import React from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import { router } from './routes/routes';

function App() {

  return (
    <>
      <Banner />
      <Navbar />
      {/* routes */}
      <RouterProvider router={router} />
      {/* footer */}
    </>
  )
}

export default App
