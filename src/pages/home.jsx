import React ,{useState , useEffect} from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/footer'
import { postsData } from '../data/data'
import PostCard from '../components/postCard'
import Writers from '../components/writers'

const Home = () => {
const [Items, setItems] = useState(6)
useEffect(() => {
    const changeItemCount =()=>{
        if (window.innerWidth < 840) {
            setItems(4); 
          }  else {
            setItems(6); 
          }
    }   

     changeItemCount()
     window.addEventListener("resize" , changeItemCount)

     return ()=> window.removeEventListener("resize" , changeItemCount)


}, [])


    return (
        <>
            <Navbar />
            <Hero />
            <Writers />
            <h1 className='text-4xl sm:text-5xl font-extrabold text-gray-900  mt-6 text-center mb-4 '>Latest <span className='text-blue-600'>Posts</span></h1>

            <div className="parent flex flex-wrap justify-center gap-1 sm:gap-2 3xl:gap-4 mt-4">

                {postsData.filter((post) => post.isLatest).slice(0, Items).map((item, index) => (
                    <PostCard key={index} item={item} />
                ))}
            </div>



                
            <Footer />





        </>
    )
}

export default Home
