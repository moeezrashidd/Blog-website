import React from 'react'
import PostCard from '../components/postCard'
import { postsData } from '../data/data'
const Posts = () => {
  return (
    <div className="parent flex flex-wrap justify-center gap-4">
      {postsData.map((item, index) => {

        return <PostCard item={item} key={index} />
      })}
    </div>
  )
}

export default Posts