import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Post from './pages/Post'
import About from './pages/About'
import SignIn from './pages/SignIn'

const App = () => {
  return (
    <div className="min-h-screen  px-4 sm:px-12 lg:px-18 bg-gray-50">
      <Navbar />
     
       
    </div>
  )
}

export default App