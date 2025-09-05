import React, { useEffect, useState } from 'react'
import PostCard from '../components/postCard'
import { postsData } from '../data/data'
import { useParams } from "react-router-dom"
const Posts = ({ username, id, propCategory }) => {
  const { urlCategory } = useParams() ;
  const finalCategroy = urlCategory || propCategory ;

  const decodedCategory = finalCategroy ? decodeURIComponent(finalCategroy) : null
  const [Posts, setPosts] = useState([])
  const [PostCount, setPostCount] = useState(6)
  const [filteredPosts, setFilteredPosts] = useState(postsData);

  useEffect(() => {

    finalCategroy || username ? finalCategroy ? setFilteredPosts(postsData.filter(p => p.category === finalCategroy).filter((post) => post.id != id)) : setFilteredPosts(postsData.filter(p => p.username === username)) : setFilteredPosts(postsData)

  }, [finalCategroy, username, id])

  console.log(propCategory)


  const handleShowMorePosts = () => {
    if (PostCount >= postsData.length) {
      setPostCount(6)
    }
    else {
      setPostCount((pre) =>
        pre + 3
      )
    }
  }

  const handleShowLessPosts = () => {
    if (PostCount <= postsData.length) {
      setPostCount(6)
    }
    else {
      setPostCount((pre) =>
        pre - 3
      )
    }
  }





  useEffect(() => {
    if (filteredPosts.length > 6) {
      const TempPosts = filteredPosts.slice(0, PostCount)
      setPosts(TempPosts)
    }
    else {
      setPosts(filteredPosts)
    }
  }, [PostCount, filteredPosts])






  return (
    <>
      <div className="flex items-center justify-center gap-4 w-full my-9">

        <span className="hidden sm:flex flex-1 border-t-2"></span>


        <span className="text-center text-2xl sm:text-4xl font-bold hover:text-blue-500 cursor-pointer ">
          {urlCategory || propCategory ? urlCategory ? urlCategory : "Related Posts" : "Posts"}
        </span>


        <span className="hidden sm:flex flex-1 border-t-2"></span>
      </div>


      <div className="parent flex flex-wrap justify-center gap-1 sm:gap-4 mt-4">
        {Posts.length >= 1 ?
          Posts.map((item, index) => {

            return <PostCard item={item} key={index} />

          })
          : <span className='font-semibold text-red-700 '>No Post Available to Show</span>}

      </div>

      <div className="flex items-center justify-center gap-4 w-full my-9">

        <span className="hidden sm:flex flex-1 border-t-2"></span>


        <span className={`text-center text-lg sm:text-xl font-normal text-blue-500  hover:text-white hover:bg-blue-500 border-2 border-blue-500 px-3 rounded-xl cursor-pointer ${PostCount >= 6 && filteredPosts.length > 6
          ? PostCount >= filteredPosts.length
            ? "hidden"
            : "inline"
          : "hidden"
          }`}
          onClick={handleShowMorePosts}>
          show more
        </span>
        <span className={`text-center text-lg sm:text-xl font-normal text-blue-500  hover:text-white hover:bg-blue-500 border-2 border-blue-500 px-3 rounded-xl cursor-pointer ${`PostCount >= 7 && filteredPosts.length > 7 ? ${PostCount == 6 ? "hidden" : "inline"} : "hidden"`}`} onClick={handleShowLessPosts}>
          show less
        </span>


        <span className="hidden sm:flex flex-1 border-t-2"></span>
      </div >


    </>
  )
}

export default Posts