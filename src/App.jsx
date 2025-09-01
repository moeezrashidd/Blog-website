import React from 'react'
import Posts from './pages/posts'
import Home from './pages/home'
import Categories from './pages/categories'
import Navbar from './components/Navbar'
import About from "./pages/about"
import Contact from "./pages/contact"
import FullPost from './pages/fullPost'
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'


const App = () => {
  return (
      <main className="min-h-screen  px-4 sm:px-12 lg:px-18 bg-gray-50">
    <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/posts" element={<> <Navbar /><Posts /></>}/>
            <Route path="/posts/:category" element={<> <Navbar /><Posts /></>}/>
            <Route path="/categories" element={<> <Navbar /><Categories /></>}/>
            <Route path="/about" element={<> <Navbar /><About /></>}/>
            <Route path="/contact" element={<> <Navbar /><Contact /></>}/>
            <Route path="/post/:id/:title" element={<> <Navbar /><FullPost /></>}/>
        </Routes>

    </Router>
      </main>
  )
}

export default App
