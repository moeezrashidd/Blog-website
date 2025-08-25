import React from 'react'
import { Link } from 'react-router-dom'

const mockPosts = [
  { id: '1', title: 'Getting started with Tailwind + Vite', excerpt: 'Build fast and style faster.' },
  { id: '2', title: 'Designing a clean blog layout', excerpt: 'Tips for clean, readable UI.' },
  { id: '3', title: 'State management basics', excerpt: 'When to use which tool.' },
]

const Home = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Share ideas. Inspire people.
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              A modern blog built with React, Vite, and Tailwind CSS.
            </p>
            <div className="mt-8">
              <Link
                to="/posts"
                className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-white shadow hover:bg-blue-700"
              >
                Explore Posts
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPosts.map((p) => (
            <Link key={p.id} to={`/posts/${p.id}`} className="block rounded-xl border bg-white p-5 hover:shadow">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home


