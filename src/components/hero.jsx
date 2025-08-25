import React from 'react'

const Hero = () => {
    return (
        <section className="flex flex-col justify-center items-center text-center h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white px-4">
            <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-bold mb-4">
                Welcome to My Blog
            </motion.h2>
            <p className="max-w-2xl text-lg md:text-xl mb-6">
                Discover unique stories, tutorials, and insights from around the world.
            </p>
            <Button className="bg-white text-indigo-600 font-semibold rounded-full px-8 py-3 shadow-lg hover:scale-105 transition">
                Explore Posts
            </Button>
        </section>
    )
}

export default Hero