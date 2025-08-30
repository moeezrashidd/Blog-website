import React from 'react'
const postCard = ({ item }) => {
    return (


        <div className='postCard w-[48%] sm:w-[297px] md:w-[350px] lg:w-[400px] h-auto sm:h-[50vh] flex flex-col justify-evenly items-start border-2 pl-3 hover:border-blue-600 
  rounded-xl relative transition-all duration-300 pb-2'>
            <span className="title text-lg sm:text-xl font-medium sm:font-semibold "><span className='sm:text-base text-sm sm:inline hidden  text-gray-600 font-normal'>Title: </span> {item.title}</span>
            <p className="dec text-base text-gray-800 font-semibold hidden sm:inline"><span className='text-base text-gray-600 font-normal sm:inline hidden '>Description: </span> {item.description.length > 150 ? item.description.slice(0, 150) + "..." : item.description}</p>
            <p className='author text-base sm:text-lg font-semibold text-blue-700'><span className='sm:text-base text-sm sm:inline hidden  text-gray-600 font-normal'>Author: </span> {item.author}</p>
            <p className="date text-base font-semibold"><span className='sm:text-base text-sm text-gray-600  sm:inline hidden font-normal'>Date:   </span> {item.date}</p>
            <p className="time text-base font-semibold sm:inline hidden"><span className='text-sm  text-gray-600  sm:inline hidden font-normal'>Time: </span> {item.time}</p>
            <span className='bg-blue-500 text-white text-base sm:text-xl border-2 border-blue-500 hover:border-white sm:w-36 px-4 py-1 flex justify-center items-center cursor-pointer rounded-lg '>Read More</span>
        </div>



    )
}

export default postCard