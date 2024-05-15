import { useState } from 'react'
import Header from './Header/Header'

import SearchBar from './Search/SearchBar'

function App() {

  return (
    <>
      <div className="h-screen bg-[#1a1820]">
        <Header />
        <SearchBar />
      </div>
    </>
  )
}

export default App
