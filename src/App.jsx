import { useState } from 'react'
import Header from './Header/Header'
import DiscoverMovies from './HomePage/DiscoverMovies'
import TopRatedMovies from './HomePage/TopRatedMovies'
import UpcomingMovies from './HomePage/UpcomingMovies'
import SearchBar from './Search/SearchBar'

function App() {

  return (
    <>
      <div className="bg-[#191919] pb-8">
        <Header />
        <SearchBar />
        <DiscoverMovies />
        <UpcomingMovies />
        <TopRatedMovies />
      </div>
    </>
  )
}

export default App
