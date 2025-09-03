// src/components/UsersList.jsx
import React from "react";
import {users} from "../data/data"

const UsersList = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
        Our Community ✨
      </h1>

      <div className="space-y-10">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition"
          >
            {/* User Info */}
            <div className="flex items-center gap-4 mb-5">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-14 h-14 rounded-full border border-gray-300 object-cover"
              />
              <div>
                <h2 className="text-lg font-bold text-gray-900">{user.name}</h2>
                <p className="text-sm text-gray-500">@{user.username}</p>
              </div>
            </div>

            {/* Bio */}
            <p className="text-gray-700 mb-5">{user.bio}</p>

            {/* User Posts */}
            <div className="space-y-4">
              <h3 className="text-md font-semibold text-gray-800 border-b pb-2">
                Posts by {user.name}
              </h3>
              {user.posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <h4 className="text-lg font-semibold text-blue-600">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {post.category} • {post.date}
                  </p>
                  <p className="text-gray-700 mt-2">{post.content}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
