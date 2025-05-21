import React from 'react'
import { Outlet } from 'react-router-dom'
import Sb from '../dashboard/Sb'

const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
        <Sb/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout