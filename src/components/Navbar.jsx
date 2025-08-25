import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { logo } from '../assets'
import { FcSearch } from "react-icons/fc";
import { IoReorderThreeSharp } from "react-icons/io5";
import { FaLinesLeaning } from "react-icons/fa6";
import { LuSearchX } from "react-icons/lu";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleSearch, setToggleSearch] = useState(false)
  const menuList = ["home", "posts", "contact", "About", "categories"]
  return (
    <>
      <nav className='flex justify-between items-center py-4 '>
        <div className="name flex justify-center items-center gap-4">
          <img src={logo} alt="logo" className='lg:w-14 sm:w-12 w-10 cursor-pointer rounded-full border-2 hover:border-blue-500' />
          <span className=' lg:text-2xl xl:3xl text-xl font-semibold cursor-pointer'>MR-Blog</span>
        </div>



        <div className="justify-center flex-col items-center sm:flex hidden">


          <div className="search flex justify-center items-center w-full h-1/2 border-2 hover:border-blue-500 rounded-3xl">
            <input type="text" placeholder='search' className='w-full pl-5 py-2 rounded-l-3xl outline-none ' />
            <span className='px-4 py-2 text-2xl cursor-pointer rounded-r-3xl bg-white'><FcSearch /></span>
          </div>


          <div className="menu flex justify-center items-center sm:gap-3 gap-1 lg:gap-8  ">
            {menuList.map((e, i) => {
              return <span key={i} className='sm:text-base lg:text-xl cursor-pointer hover:text-blue-500 hover:border-b-2 border-blue-500 active:text-blue-500 '>{e}</span>
            })}
          </div>
        </div>












        <div className="searchAndSignin flex justify-center items-center gap-1 ">

          <span className='p-1 px-2  hover:bg-blue-500 active:bg-blue-500 border-2 border-blue-500 hover:text-white text-blue-500  text-2xl cursor-pointer rounded  text justify-center items-center sm:hidden' onClick={() => {
            setToggleMenu(!toggleMenu)
           {toggleSearch ? setToggleSearch(!toggleSearch) :setToggleSearch(toggleSearch)}

          }}>{toggleMenu ? <FaLinesLeaning /> : <IoReorderThreeSharp />}</span>

          <span className='p-1 px-2  hover:bg-blue-500 active:bg-blue-500 border-2 border-blue-500 hover:text-white text-blue-500  text-2xl  cursor-pointer rounded  text justify-center items-center sm:hidden' onClick={() => {
             {toggleMenu ? setToggleMenu(!toggleMenu) :setToggleMenu(toggleMenu)}
            setToggleSearch(!toggleSearch)
          }}>{toggleSearch?<LuSearchX />:<FcSearch /> }</span>

          <span className='p-1 sm:px-2 lg:px-5 hover:bg-blue-500 border-2 border-blue-500 hover:text-white text-blue-500  sm:text-base lg:text-xl cursor-pointer rounded  text justify-center items-center'>Sign in</span>
        </div>
      </nav>


      {toggleMenu && (
        <motion.div
          className="menu flex justify-between flex-col gap-2 h-48 px-5 py-3 bg-white border-2 border-blue-500 sm:hidden z-50 w-32 absolute
     right-12 "
          initial={{ opacity: 0, y: -44 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {menuList.map((item, i) => (
            <span
              key={i}
              className="text-base font-medium cursor-pointer  hover:text-blue-500 active:text-blue-500 hover:border-b-2 border-blue-500"
            >
              {item}
            </span>
          ))}
        </motion.div>)}

      {toggleSearch && (<motion.div className="search flex justify-center items-center w-full h-1/2 border-2 z-50 hover:border-blue-500 rounded-3xl sm:hidden"
        initial={{ opacity: 0, y: -44 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}>
        <input type="text" placeholder='search' className='w-full pl-5 py-2 rounded-l-3xl outline-none ' />
        <span className='px-4 py-2 cursor-pointer rounded-r-3xl bg-white'><FcSearch /></span>
      </motion.div>)}
    </>
  )

}


export default Navbar