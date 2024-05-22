import { useState } from 'react'
import Header from './Header/Header'
import DiscoverMovies from './HomePage/DiscoverMovies'
import TopRatedMovies from './HomePage/TopRatedMovies'
import UpcomingMovies from './HomePage/UpcomingMovies'

function App() {

  return (
    <>
      <div className="h-screen bg-[#191919]">
        <Header />
        <DiscoverMovies />
        <UpcomingMovies />
        <TopRatedMovies />
      </div>
    </>
  )
}

export default App
