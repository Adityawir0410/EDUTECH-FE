"use client";

import React, { useState } from "react";

// Interface for class data
interface ClassCardProps {
  subject: string;
  title: string;
  time: string;
  teacherName: string;
  teacherRole: string;
  teacherImage: string;
  cardImage: string;
  subjectColor: string;
  onDelete: () => void; // Function to handle delete
}

const ClassCard: React.FC<ClassCardProps> = ({
  subject,
  title,
  time,
  teacherName,
  teacherRole,
  teacherImage,
  cardImage,
  subjectColor,
  onDelete,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="w-[280px] h-[350px] bg-white shadow-lg rounded-lg overflow-hidden relative">
      {/* Image Section */}
      <div className="relative h-[50%]">
        <img
          src={cardImage}
          alt="Class Thumbnail"
          className="w-full h-full object-cover"
        />
        {/* More Options Icon */}
        <div
          className="absolute top-3 right-3 bg-gray-900 bg-opacity-50 rounded-full p-2 cursor-pointer"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12 12a.75.75 0 100-1.5.75.75 0 000 1.5zM12 17.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            />
          </svg>
        </div>

        {/* Dropdown */}
        {showDropdown && (
          <div className="absolute top-12 right-3 bg-white shadow-lg border border-gray-200 rounded-lg z-10">
            <button
              onClick={onDelete}
              className="text-red-600 text-sm font-semibold px-4 py-2 hover:bg-gray-100 w-full text-left"
            >
              Delete
            </button>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-3">
        {/* Subject Badge */}
        <span
          className={`inline-block text-sm px-3 py-1 rounded-full`}
          style={{ backgroundColor: subjectColor, color: "white" }}
        >
          {subject}
        </span>

        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>

        {/* Time */}
        <p className="text-xs text-gray-500">{time}</p>

        {/* Teacher Info */}
        <div className="flex items-center mt-4">
          <img
            src={teacherImage}
            alt="Teacher"
            className="w-6 h-6 rounded-full"
          />
          <div className="ml-3">
            <p className="text-xs font-semibold text-gray-900 truncate max-w-[200px]">
              {teacherName}
            </p>
            <p className="text-xs text-gray-500">{teacherRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component to Display Multiple Cards
const ClassList: React.FC = () => {
  const [classes, setClasses] = useState([
    {
      subject: "Matematika",
      title: "Beginner’s Guide to becoming a professional frontend developer",
      time: "Monday, 10:00 AM - 12:00 PM",
      teacherName: "Prashant Kumar Singh",
      teacherRole: "Teacher",
      teacherImage: "/images/profilvideo.png",
      cardImage: "/images/bannervideo.png",
      subjectColor: "#9E77ED",
    },
    {
      subject: "Fisika",
      title: "Understanding the basics of Quantum Mechanics",
      time: "Tuesday, 2:00 PM - 4:00 PM",
      teacherName: "Dr. John Doe",
      teacherRole: "Professor",
      teacherImage: "/images/profilvideo.png",
      cardImage: "/images/bannervideo.png",
      subjectColor: "#F59E0B",
    },
    {
      subject: "Kimia",
      title: "Introduction to Organic Chemistry",
      time: "Wednesday, 3:00 PM - 5:00 PM",
      teacherName: "Jane Smith",
      teacherRole: "Lecturer",
      teacherImage: "/images/profilvideo.png",
      cardImage: "/images/bannervideo.png",
      subjectColor: "#EAB308",
    },
    {
      subject: "Biologi",
      title: "Exploring the wonders of Human Anatomy",
      time: "Friday, 9:00 AM - 11:00 AM",
      teacherName: "Dr. Emily White",
      teacherRole: "Lecturer",
      teacherImage: "/images/profilvideo.png",
      cardImage: "/images/bannervideo.png",
      subjectColor: "#22C55E",
    },
  ]);

  // Delete card handler
  const deleteCard = (index: number) => {
    const updatedClasses = classes.filter((_, idx) => idx !== index);
    setClasses(updatedClasses);
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {classes.map((classData, index) => (
        <ClassCard
          key={index}
          {...classData}
          onDelete={() => deleteCard(index)}
        />
      ))}
    </div>
  );
};

export default ClassList;
