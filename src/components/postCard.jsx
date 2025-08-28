import React from 'react'
const postCard = ({ item }) => {
    return (


        <div className='postCard w-full sm:w-[297px] md:w-[350px] lg:w-[400px] h-auto sm:h-[50vh] flex flex-col justify-evenly items-start border-2 pl-3 hover:border-blue-600 
  rounded-xl relative transition-all duration-300 pb-2'>
            <span className="title text-xl font-semibold "><span className='text-base text-gray-600 font-normal'>Title: </span> {item.title}</span>
            <p className="dec text-base text-gray-800 font-semibold "><span className='text-base text-gray-600 font-normal'>Description: </span> {item.description.length > 150 ? item.description.slice(0, 150) + "..." : item.description}</p>
            <p className='author text-lg font-semibold text-blue-700'><span className='text-base text-gray-600 font-normal'>Author: </span> {item.author}</p>
            <p className="date text-base font-semibold"><span className='text-sm text-gray-600 font-normal'>Date:   </span> {item.date}</p>
            <p className="time text-base font-semibold"><span className='text-sm text-gray-600 font-normal'>Time: </span> {item.time}</p>
            <span className='bg-blue-500 text-white text-xl border-2 border-blue-500 hover:border-white w-36 py-1 flex justify-center items-center cursor-pointer rounded-lg '>Read More</span>
        </div>



    )
}

export default postCard