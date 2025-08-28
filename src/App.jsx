import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/posts'


const App = () => {
  return (
    <div className="min-h-screen  px-4 sm:px-12 lg:px-18 bg-gray-50">
      <Home />
      <Posts />
    </div>
  )
}

export default App