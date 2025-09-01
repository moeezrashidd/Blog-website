import React, { useEffect, useState } from 'react'
import { postsData } from '../data/data'
import { useParams } from 'react-router-dom'
const fullPost = () => {
  const { id } = useParams()
  const [Post, setPost] = useState([])
  const [DicsManage, setDicsManage] = useState(2000)
  useEffect(() => {
    const tempPost = postsData.filter((post) => post.id == id)
    setPost(tempPost)


  }, [])
  const handleReadMore = (e)=>{
   if(DicsManage < e){
    setDicsManage((pre)=> pre + 2000)
   }
   else{
    setDicsManage(2000)
   }
  }
console.log(useParams)
  return (
    <>
    {
      Post.map((item , index) => (
        
        <div key={index} className="post flex flex-col gap-4 my-4">
          <span className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold'>{item.title}</span>
        
          <img src={item.photo} alt="Photo of Post" className='w-full xl:h-[70vh]' />
          <p>{item.description.length > DicsManage ? item.description.slice(0,DicsManage) + ".........":item.description}</p>
          <div className="flex items-center justify-center gap-4 w-full my-6">
            <span className="hidden sm:flex flex-1 border-t-2"></span>
         
              <span className={`text-center flex text-lg justify-center items-center gap-2 sm:text-xl font-normal text-blue-500  hover:text-white hover:bg-blue-500 border-2 border-blue-500 px-3 rounded-xl cursor-pointer `} onClick={()=>handleReadMore(item.description.length)}>{DicsManage < item.description.length ? " Read More" : "Close" }</span>

            <span className="hidden sm:flex flex-1 border-t-2"></span>
          </div>
          <span className='flex flex-col '>
            <span className='text-normal text-gray-500'>Writer: <span className='hover:text-blue-600 text-xl text-black cursor-pointer border-b-2 border-white hover:border-blue-500 '>{item.author}</span></span>
            <span className='text-normal text-gray-500'>at <span className=' text-lg text-black  '>{item.date} {item.time}</span></span>
          </span>
          </div>
        
        
      ))
    }


    </>
  )
}

export default fullPost