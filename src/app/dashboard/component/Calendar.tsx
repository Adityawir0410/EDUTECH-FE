"use client";

import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameDay,
  isToday,
} from "date-fns";

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<{ [key: string]: string[] }>({
    "2024-12-04": ["Blog", "Freebie"],
    "2024-12-27": ["Giveaway"],
    "2024-12-31": ["Special Event"],
  });

  const generateMonthData = (month: Date) => {
    const startDate = startOfWeek(startOfMonth(month), { weekStartsOn: 1 }); // Week starts on Monday
    const endDate = endOfWeek(endOfMonth(month), { weekStartsOn: 1 });
    const days: Date[] = [];
    let date = startDate;

    while (date <= endDate) {
      days.push(date);
      date = addDays(date, 1);
    }
    return days;
  };

  const renderDays = (month: Date) => {
    const days = generateMonthData(month);
    return (
      <div className="grid grid-cols-7 gap-0 border-t border-l">
        {/* Weekday headers */}
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div
            key={day}
            className="bg-secondary-10 text-primary-50 font-manrope font-semibold py-2 sm:py-3 md:py-4 border-b border-r text-center text-xs sm:text-[14px] md:text-[18px]"
          >
            {day}
          </div>
        ))}

        {/* Render dates */}
        {days.map((day, index) => {
          const dateKey = format(day, "yyyy-MM-dd");
          const dayEvents = events[dateKey] || [];

          return (
            <div
              key={index}
              onClick={() => setSelectedDate(day)}
              className={`py-3 sm:py-5 md:py-6 border-b border-r cursor-pointer transition-all duration-200 text-center
                ${
                  format(day, "MMM") !== format(month, "MMM")
                    ? "bg-gray-200 text-gray-500"
                    : "bg-white text-gray-900"
                }
                ${isToday(day) ? "border-2 border-blue-500 bg-blue-100 font-bold" : ""}
                ${isSameDay(day, selectedDate) ? "bg-blue-200 font-semibold" : ""}
                font-manrope font-medium text-[12px] sm:text-[16px] md:text-[21px]
              `}
            >
              <div>{format(day, "d")}</div>
              {/* Display Events */}
              <div className="mt-2 space-y-1">
                {dayEvents.map((event, idx) => (
                  <div
                    key={idx}
                    className={`inline-block px-2 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium 
                                  ${
                                    event === "Blog"
                                      ? "bg-gray-200 text-gray-800"
                                      : event === "Freebie"
                                      ? "bg-green-100 text-green-600"
                                      : event === "Giveaway"
                                      ? "bg-orange-100 text-orange-600"
                                      : "bg-blue-100 text-blue-600"
                                  }`}
                  >
                    {event}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-16 py-6 sm:py-8 md:py-12 lg:py-16 rounded-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <button
          className="flex items-center justify-center border-2 border-primary-50 rounded-full shadow hover:bg-primary-10 
                     w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
        >
          <span className="text-primary-50 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
            &lt;
          </span>
        </button>
        <h1 className="text-sm sm:text-xl md:text-3xl font-bold text-primary-50 font-manrope font-semibold text-[20px] sm:text-[25px] md:text-[30px]">
          {format(currentMonth, "MMMM yyyy")}
        </h1>
        <button
          className="flex items-center justify-center border-2 border-primary-50 rounded-full shadow hover:bg-primary-10 
                     w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
        >
          <span className="text-primary-50 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
            &gt;
          </span>
        </button>
      </div>

      {/* Calendar Grid */}
      {renderDays(currentMonth)}

      {/* Selected Date Details */}
      <div className="mt-4 sm:mt-6 p-3 sm:p-4 md:p-6 bg-gray-100 rounded-lg">
        <h2 className="font-bold text-primary-50 text-sm sm:text-lg md:text-2xl font-manrope">
          Selected Date: {format(selectedDate, "dd MMMM yyyy")}
        </h2>
        <div>
          <strong>Events:</strong>
          {events[format(selectedDate, "yyyy-MM-dd")]?.length ? (
            <ul className="mt-2 list-disc pl-5">
              {events[format(selectedDate, "yyyy-MM-dd")].map((event, idx) => (
                <li key={idx} className="text-gray-700 text-sm">
                  {event}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 mt-2">No events for this date</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
