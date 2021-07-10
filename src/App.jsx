import './App.css'

import React, { useState } from 'react'

import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="h-16 bg-green-200  justify-center">
        CV Gen
        <nav className="flex justify-center space-x-4 bg-gray-100">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Docs
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Examples
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Blog
            </a>
        </nav>
      </header>
    </div>
  )
}

export default App
