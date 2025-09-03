import React, { useState, useEffect } from 'react'
import { categories } from '../data/data'
import { postsData } from '../data/data'
import PostCard from '../components/postCard'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="flex flex-col gap-6 mt-6">

      {categories.map((curCategory, index) => (
        <div key={index} className="flex flex-col gap-2">
          <span className='text-2xl xl:4xl font-bold hover:text-blue-500 cursor-pointer text-center '>{curCategory}</span>
          <div className="parent flex flex-wrap justify-center items-center gap-1 sm:gap-2 mt-4">

            {postsData.filter((post) => post.category == curCategory).slice(0, 6).map((item, index) => (
              <PostCard key={index} item={item} />
            ))

            }


          </div>
          <div className="flex items-center justify-center gap-4 w-full my-6">
            <span className="hidden sm:flex flex-1 border-t-2"></span>
         
              <Link to={`/posts/${encodeURIComponent(curCategory)}`} className={`text-center flex text-lg justify-center items-center gap-2 sm:text-xl font-normal text-blue-500  hover:text-white hover:bg-blue-500 border-2 border-blue-500 px-3 rounded-xl cursor-pointer `}>Show All <GoArrowUpRight /></Link>

            <span className="hidden sm:flex flex-1 border-t-2"></span>
          </div>
        </div>
      ))}


    </div>
  )
}

export default Categories
