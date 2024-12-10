import React from "react";

const tasks = [
  {
    subject: "Matematika",
    title: "Beginner's Guide to becoming",
    time: "Monday, 10:00 AM - 12:00 PM",
    subjectColor: "bg-purple-200 text-purple-700",
  },
  {
    subject: "Matematika",
    title: "Beginner's Guide to becoming",
    time: "Monday, 10:00 AM - 12:00 PM",
    subjectColor: "bg-orange-200 text-orange-700",
  },
  {
    subject: "Matematika",
    title: "Beginner's Guide to becoming",
    time: "Monday, 10:00 AM - 12:00 PM",
    subjectColor: "bg-purple-200 text-purple-700",
  },
];

const UpcomingTask: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg w-full max-w-md mx-auto md:max-w-full">
      {/* Title */}
      <h2 className="text-lg sm:text-xl font-bold text-blue-600 mb-4">
        Upcoming Task
      </h2>

      {/* Task List */}
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="relative pl-4 border-l-4 border-orange-500 rounded-l-lg py-3 pr-4"
          >
            {/* Task Details */}
            <div>
              {/* Subject Badge */}
              <span
                className={`inline-block ${task.subjectColor} text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full`}
              >
                {task.subject}
              </span>
              {/* Title */}
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mt-1">
                {task.title}
              </h3>
              {/* Time */}
              <p className="text-xs sm:text-sm text-gray-500">{task.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Tasks */}
      <div className="mt-4">
        <a
          href="#"
          className="text-blue-600 text-sm sm:text-base font-medium hover:underline flex items-center"
        >
          View all Tasks
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default UpcomingTask;
