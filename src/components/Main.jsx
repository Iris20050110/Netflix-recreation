import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import requests from '../Requests'

const Main = () => {
  const [movies, setMovies] = useState([])

  //fetch movies data
  useEffect(()=> {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results)
    })
  }, [])

  //get a random single movie
  const movie = movies[Math.floor(Math.random()*movies.length)]
  //console.log(movie)

  const truncateStr = (str, num) => {
    if (str?.length > num-1) {
      return str.slice(0, num) + '...'
    }
    else {
      return ;
    }
  }

  return (
    <>
    <Navbar/>
    <div className='w-full h-[600px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
        <img
          className='w-full h-full object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
              Play
            </button>
            <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
              Watch Later
            </button>
          </div>
          <p className='text-gray-400 text-sm'>
            Released: {movie?.release_date}
          </p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
          {truncateStr(movie?.overview, 150)}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Main