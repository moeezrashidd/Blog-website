import React from 'react'

const SignIn = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl border bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700">Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn


