import React, { useEffect, useState } from 'react'
import PostCard from '../components/postCard'
import { postsData } from '../data/data'
const Posts = () => {
  const [Posts, setPosts] = useState([])
  const [PostCount, setPostCount] = useState(6)

  const handleShowMorePosts = () => {
    if(PostCount >= postsData.length){
      setPostCount(6)
    }
    else{
      setPostCount((pre)=>
        pre +6
      )
    }
}

  const handleShowLessPosts = () => {
    if(PostCount <= postsData.length){
      setPostCount(6)
    }
    else{
      setPostCount((pre)=>
        pre - 6
      )
    }
}





  useEffect(() => {
    if (postsData.length > 6) {
      const TempPosts = postsData.slice(0, PostCount)
      setPosts(TempPosts)
    }
    else {
      setPosts(postsData)
    }
  }, [PostCount])

 
  

console.log(PostCount)

  return (
    <>
      <div className="flex items-center justify-center gap-4 w-full my-6">

        <span className="hidden sm:flex flex-1 border-t-2"></span>


        <span className="text-center text-2xl sm:text-4xl font-bold hover:text-blue-500 cursor-pointer ">
           Posts
        </span>


        <span className="hidden sm:flex flex-1 border-t-2"></span>
      </div>


      <div className="parent flex flex-wrap justify-center gap-1 sm:gap-4 mt-4">
        {Posts.map((item, index) => {

          return <PostCard item={item} key={index} />

        })}
      </div>

      <div className="flex items-center justify-center gap-4 w-full my-6">

        <span className="hidden sm:flex flex-1 border-t-2"></span>


        <span className={`text-center text-lg sm:text-xl font-normal text-blue-500  hover:text-white hover:bg-blue-500 border-2 border-blue-500 px-3 rounded-xl cursor-pointer ${`PostCount >= 6? ${ PostCount >= postsData.length ?"hidden" :"inline" } : "hidden"`} `} onClick={handleShowMorePosts}>
          show more
        </span>
        <span className={`text-center text-lg sm:text-xl font-normal text-blue-500  hover:text-white hover:bg-blue-500 border-2 border-blue-500 px-3 rounded-xl cursor-pointer ${`PostCount >= 7  ? ${ PostCount== 6  ?"hidden" :"inline" } : "hidden"`}`} onClick={handleShowLessPosts}>
          show less
        </span>


        <span className="hidden sm:flex flex-1 border-t-2"></span>
      </div>


    </>
  )
}

export default Posts