"use client";

import React from "react";

const groupChats = [
  {
    profileImage: "/images/profile1.jpg", // Path gambar profil
    title: "Kelas Bahasa Indonesia",
    subtitle: "IPA-12A",
    message: "Haha oh man 🔥",
    time: "12m",
    tags: ["Question", "Help wanted"],
  },
  {
    profileImage: "/images/profile1.jpg",
    title: "Kelas Bahasa Indonesia",
    subtitle: "IPA-12A",
    message: "Haha oh man 🔥",
    time: "12m",
    tags: ["Question", "Help wanted"],
  },
  {
    profileImage: "/images/profile1.jpg",
    title: "Kelas Bahasa Indonesia",
    subtitle: "IPA-12A",
    message: "Haha oh man 🔥",
    time: "12m",
    tags: ["Question", "Help wanted"],
  },
];

const GroupChat: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg w-full max-w-md mx-auto">
      {/* Title */}
      <h2 className="text-lg font-bold text-blue-600 mb-4">Group Chat</h2>

      {/* Chat List */}
      <div className="space-y-4">
        {groupChats.map((chat, index) => (
          <div key={index} className="flex items-start gap-4">
            {/* Profile Image */}
            <img
              src={chat.profileImage}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />

            {/* Chat Details */}
            <div className="flex-grow">
              {/* Title and Time */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {chat.title}
                  </h3>
                  <p className="text-xs text-gray-500">{chat.subtitle}</p>
                </div>
                <span className="text-xs text-gray-400">{chat.time}</span>
              </div>

              {/* Message */}
              <p className="text-sm text-gray-600 mt-1">{chat.message}</p>

              {/* Tags */}
              <div className="flex gap-2 mt-2">
                {chat.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      tag === "Question"
                        ? "bg-orange-200 text-orange-700"
                        : "bg-green-200 text-green-700"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupChat;
