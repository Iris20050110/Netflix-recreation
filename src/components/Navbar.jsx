import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const {user, logOut} = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logOut()
    navigate("/")
  }

  return (
    <div className='flex items-centers justify-between p-4 z-[100] absolute w-full'>
      <Link to="/">
        <h1 className='text-red-600 text-4xl cursor-pointer font-bold'>NETFLIX</h1>
        </Link>
        <div>
        {user ? (
        <div>
          <Link to='/account'>
            <button className='text-white pr-4'>Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to='/signin'>
            <button className='text-white pr-4'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
              Sign Up
            </button>
          </Link>
        </div>
      )}
        </div>
    </div>
  )
}

export default Navbar