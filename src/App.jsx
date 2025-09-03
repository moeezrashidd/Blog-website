import React from 'react'
import Posts from './pages/posts'
import Categories from './pages/categories'
import Navbar from './components/Navbar'
import About from "./pages/about"
import Contact from "./pages/contact"
import FullPost from './pages/fullPost'
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from "./pages/home"
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
import Footer from './components/footer'
const App = () => {
  return (
      <main className="min-h-screen  px-4 sm:px-12 lg:px-18 bg-gray-50">
    <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/posts" element={<> <Navbar /><Posts /> <Footer /></>}/>
            <Route path="/posts/:category" element={<> <Navbar /><Posts /> <Footer /></>}/>
            <Route path="/categories" element={<> <Navbar /><Categories /> <Footer /></>}/>
            <Route path="/about" element={<> <Navbar /><About /> <Footer /></>}/>
            <Route path="/contact" element={<> <Navbar /><Contact /> <Footer /></>}/>
            <Route path="/post/:id/:title" element={<> <Navbar /><FullPost /> <Footer /></>}/>
            <Route path="/signIn" element={<SignIn />}/>
            <Route path="/signUp" element={<SignUp />}/>

        </Routes>

    </Router>
      </main>
  )
}

export default App
