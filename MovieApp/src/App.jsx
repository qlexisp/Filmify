import { useState } from 'react'
import Header from './Header'
import SearchMovie from './Search'

function App() {

  return (
    <>
      <div className="bg-gray-800 h-screen">
        <Header />
        <SearchMovie />
      </div>
    </>
  )
}

export default App
