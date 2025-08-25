import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Post = () => {
  const { id } = useParams()

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link to="/posts" className="text-blue-600 hover:underline">← Back to posts</Link>
      <h1 className="mt-4 text-4xl font-extrabold">Post #{id}</h1>
      <p className="mt-3 text-gray-600">
        This is a placeholder for post content. You can connect a backend later.
      </p>
      <div className="mt-8 space-y-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  )
}

export default Post


