import React from 'react'
import { Link } from 'react-router-dom'

const posts = Array.from({ length: 9 }).map((_, i) => ({
  id: String(i + 1),
  title: `Post #${i + 1}`,
  excerpt: 'This is a short excerpt for the blog post.',
}))

const Posts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Link key={p.id} to={`/posts/${p.id}`} className="block rounded-xl border bg-white p-5 hover:shadow">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-1 text-gray-600 text-sm">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Posts


