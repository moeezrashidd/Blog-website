import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PostCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="postCard w-full sm:w-[48%] md:w-[350px] lg:w-[400px] 
        bg-white rounded-2xl shadow-2xl border border-gray-200 
        hover:border-blue-500 
        p-5 flex flex-col justify-between gap-3 transition-all duration-300"
    >
      {/* Title */}
      <h2 className="title text-xl font-bold text-gray-900 line-clamp-2">
        {item.title}
      </h2>

      {/* Description */}
      <p className="dec text-gray-700 text-sm md:text-base line-clamp-3">
        {item.description.length > 150
          ? item.description.slice(0, 150) + "..."
          : item.description}
      </p>

      {/* Meta Info */}
      <div className="flex flex-col gap-1 text-sm text-gray-600">
        <p>
          <span className="font-semibold text-gray-800">Author:</span>{" "}
          {item.author}
        </p>
        <p>
          <span className="font-semibold text-gray-800">Date:</span> {item.date}
        </p>
        <p className="hidden md:block">
          <span className="font-semibold text-gray-800">Time:</span> {item.time}
        </p>
      </div>

      {/* Read More Button */}
      <Link
        to={`/post/${item.id}/${item.title}`}
        className="mt-3 w-full sm:w-auto px-5 py-2 
          bg-blue-600 text-white font-medium rounded-xl 
          text-center hover:bg-blue-700 transition-all duration-300"
      >
        Read More
      </Link>
    </motion.div>
  );
};

export default PostCard;
