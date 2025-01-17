import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { AuthContextProvider } from '../context/AuthContext'

const MainLayout = () => {
  return (
    <>
    <AuthContextProvider>
    <Navbar />
    <Outlet />
    </AuthContextProvider>
    </>
  )
}

export default MainLayout