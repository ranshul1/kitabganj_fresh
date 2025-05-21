import React from 'react'

import { Outlet } from "react-router-dom"
import Navbar from './components/Navbar'
import './App.css'
import MyFooter from './components/MyFooter'
function App() {
  return (
    <>
     <Navbar/>
     <Outlet/>
     <MyFooter/>
    </>
  )
}

export default App