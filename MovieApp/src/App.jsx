import { useState } from 'react'
import Header from './Header'
import SearchMovie from './Search'

function App() {

  return (
    <>
      <div className="h-screen bg-[#1a1820]">
        <Header />
        <SearchMovie />
      </div>
    </>
  )
}

export default App
