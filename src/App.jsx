import { useState } from 'react'
import Header from './Header/Header'
import DiscoverMovies from './HomePage/DiscoverMovies'

function App() {

  return (
    <>
      <div className="h-screen bg-[#1a1820]">
        <Header />
        <DiscoverMovies />
      </div>
    </>
  )
}

export default App
