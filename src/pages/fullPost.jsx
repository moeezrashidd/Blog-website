import React, { useEffect, useState } from "react";
import { postsData } from "../data/data";
import { useParams } from "react-router-dom";

const FullPost = () => {
  const { id } = useParams();
  const [Post, setPost] = useState([]);
  const [DicsManage, setDicsManage] = useState(2000);

  useEffect(() => {
    const tempPost = postsData.filter((post) => post.id == id);
    setPost(tempPost);
  }, [id]);

  const handleReadMore = (e) => {
    if (DicsManage < e) {
      setDicsManage((pre) => pre + 2000);
    } else {
      setDicsManage(2000);
    }
  };

  return (
    <>
      {Post.map((item, index) => (
        <div
          key={index}
          className="post flex flex-col gap-6 my-6 px-4 sm:px-8 lg:px-20 py-6 
          bg-white shadow-xl rounded-2xl border border-gray-200"
        >
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            {item.title}
          </h1>

          {/* Image */}
          <img
            src={`${item.photo}`}
            alt="Photo of Post"
            className="w-full rounded-xl shadow-md object-cover xl:h-[70vh]"
          />

          {/* Description */}
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            {item.description.length > DicsManage
              ? item.description.slice(0, DicsManage) + "..."
              : item.description}
          </p>

          {/* Read More Button */}
          <div className="flex items-center justify-center gap-4 w-full my-6">
            <span className="hidden sm:flex flex-1 border-t"></span>

            <button
              onClick={() => handleReadMore(item.description.length)}
              className="px-5 py-2 text-lg sm:text-xl font-medium text-blue-600 
              border-2 border-blue-600 rounded-xl 
              hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              {DicsManage < item.description.length ? "Read More" : "Close"}
            </button>

            <span className="hidden sm:flex flex-1 border-t"></span>
          </div>

          {/* Writer Info */}
          <div className="flex flex-col gap-1 text-gray-600 text-sm sm:text-base">
            <span>
              Writer:{" "}
              <span
                className="text-black text-lg font-semibold hover:text-blue-600 
                border-b-2 border-transparent hover:border-blue-500 transition-all cursor-pointer"
              >
                {item.author}
              </span>
            </span>
            <span>
              At{" "}
              <span className="text-black text-base font-medium">
                {item.date} {item.time}
              </span>
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default FullPost;
