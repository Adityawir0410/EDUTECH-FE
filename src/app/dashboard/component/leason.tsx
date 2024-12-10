"use client";

import React from "react";

const lessons = [
  {
    title: "Beginner's Guide to becoming",
    time: "10:00 AM - 12:00 PM",
    icon: "/images/lesson-icon-blue.svg", // Gambar ikon biru
  },
  {
    title: "Beginner's Guide to becoming",
    time: "10:00 AM - 12:00 PM",
    icon: "/images/lesson-icon-gray.svg", // Gambar ikon abu-abu
  },
  {
    title: "Beginner's Guide to becoming",
    time: "10:00 AM - 12:00 PM",
    icon: "/images/lesson-icon-gray.svg", // Gambar ikon abu-abu
  },
];

const Lesson: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg w-full max-w-md mx-auto">
      {/* Title */}
      <h2 className="text-lg font-bold text-blue-600 mb-4">Todays Lesson</h2>

      {/* Lesson List */}
      <div className="space-y-4">
        {lessons.map((lesson, index) => (
          <div key={index} className="flex items-center gap-4">
            {/* Icon */}
            <div className="w-10 h-10">
              <img
                src={lesson.icon}
                alt="Lesson Icon"
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Lesson Details */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                {lesson.title}
              </h3>
              <p className="text-xs text-gray-500">{lesson.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lesson;
