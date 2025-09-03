import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/footer'
import { postsData } from '../data/data'
import PostCard from '../components/postCard'
import UsersList from '../components/user'
const Home = () => {


    
    return (
        <>
            <Navbar />
            <Hero />
            
        <span className={`text-3xl xl:4xl font-bold hover:text-blue-500 sm: cursor-pointer text-center flex justify-center items-center mt-4`}>Latest Posts</span>
            
            <div className="parent flex flex-wrap justify-center gap-1 sm:gap-2 3xl:gap-4 mt-4">

                {postsData.filter((post) => post.isLatest).slice(0, 6).map((item, index) => (
                    <PostCard key={index} item={item} />
                ))}
            </div>


<UsersList />


<Footer />




            
        </>
    )
}

export default Home
