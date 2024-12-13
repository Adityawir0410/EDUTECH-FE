"use client";

import React from "react";

interface CardProps {
  title: string;
  onClick?: () => void;
  isActive?: boolean;
  subject?: string;
  time?: string;
  subjectColor?: string;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  onClick, 
  isActive, 
  subject, 
  time,
  subjectColor = "bg-purple-200 text-purple-700"
}) => {
  return (
    <div
      className={`relative pl-4 border-l-4 rounded-l-lg py-3 pr-4 cursor-pointer ${
        isActive 
          ? "border-blue-500 bg-gray-50" 
          : "border-gray-300 bg-white hover:bg-gray-50"
      }`}
      onClick={onClick}
    >
      {/* Task Details */}
      <div>
        {/* Subject Badge */}
        {subject && (
          <span
            className={`inline-block ${subjectColor} text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full`}
          >
            {subject}
          </span>
        )}
        
        {/* Title */}
        <h3 className={`text-sm sm:text-base font-semibold ${
          isActive ? "text-blue-700" : "text-gray-900"
        } mt-1`}>
          {title}
        </h3>
        
        {/* Time */}
        {time && (
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            {time}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;