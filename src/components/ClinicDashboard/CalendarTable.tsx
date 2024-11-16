// import React from 'react';
// import { AiOutlineCalendar, AiOutlineClockCircle, AiOutlineClose } from 'react-icons/ai';
// import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

// const CalendarTable = ({showPopup, startDay, daysInPreviousMonth, month, daysInMonth, closePopup, handleDayClick}) => {
//     return (
//         <table className="w-full text-center mb-12 overflow-auto"> 
//         <thead>
//           <tr>
//             {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
//               <th key={day} className="border bg-[#F1F5F9] p-4 font-semibold text-lg">{day}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {Array.from({ length: 6 }).map((_, rowIndex) => (
//             <tr key={rowIndex}>
//               {Array.from({ length: 7 }).map((_, dayIndex) => {
//                 const cellIndex = rowIndex * 7 + dayIndex;
//                 const dayNumber = cellIndex - startDay + 1;

//                 let displayDay = null;
//                 let dayStyle = "text-gray-800";
//                 let isCurrentMonth = true;
//                 let cellBgColor = ""; // Variable for cell background color

//                 if (dayNumber < 1) {
//                   displayDay = daysInPreviousMonth + dayNumber;
//                   dayStyle = "text-gray-400"; // Previous month days
//                   isCurrentMonth = false;
//                 } else if (dayNumber > daysInMonth) {
//                   displayDay = dayNumber - daysInMonth;
//                   dayStyle = "text-gray-400"; // Next month days
//                   isCurrentMonth = false;
//                 } else {
//                   displayDay = dayNumber; // Current month days
//                 }

//                 // Set background color for November 4 and 19
//                 if (month === 10 && (displayDay === 4 || displayDay === 19) ) {
//                   cellBgColor = 'bg-gray-300'; 
//                 }

//                 return (
//                   <td
//                     key={dayIndex}
//                     className={`border h-[10rem] w-[8rem] bg-white relative ${cellBgColor}`}
//                     onClick={() => handleDayClick(displayDay, isCurrentMonth)}
//                   >
//                     {displayDay && (
//                       <div className={`absolute top-3 right-3 text-lg font-normal ${dayStyle}`}>
//                         {displayDay}
//                       </div>
//                     )}
//                     {showPopup && displayDay === 4 && month === 10 && isCurrentMonth && (
//                       <div
//                         className="absolute top-10 left-[100%] transform -translate-x-1/2 w-[16rem] bg-white border border-gray-300 rounded-lg shadow-lg p-0 z-10"
//                         style={{ maxHeight: '200px', overflowY: 'auto' }}
//                       >
//                         {/* Navbar-like header with John Doe and icons */}
//                         <div className="flex justify-between items-center bg-[#22C55E] p-2 rounded-t-md text-white font-bold">
//                           <span>John Doe</span>
//                           <div className="flex space-x-2">
//                             <FaRegEdit className="cursor-pointer text-white hover:text-gray-200" />
//                             <FaRegTrashAlt className="cursor-pointer text-white hover:text-gray-200" />
//                             <AiOutlineClose className="cursor-pointer text-white hover:text-gray-200" onClick={closePopup} />
//                           </div>
//                         </div>

//                         {/* Popup content - Left-aligned with icons */}
//                         <div className="bg-white p-2 rounded-md mt-2 text-left">
//                           <div className="flex items-center text-sm font-semibold mb-1">
//                             <AiOutlineCalendar className="mr-2 text-gray-600" />
//                             Date: <span className='font-normal ml-2'>04/11/2024</span>
//                           </div>
//                           <div className="flex items-center text-sm font-semibold mb-1">
//                             <AiOutlineClockCircle className="mr-2 text-gray-600" />
//                             Time: <span className='font-normal ml-2'>2:00 pm - 3:00 pm</span>
//                           </div>
//                           <div className="text-sm text-gray-700 mt-1">
//                             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                     {/* Button for November 19 with background color */}
//                     {month === 10 && displayDay === 19 && (
//                       <div className={`absolute bottom-20 pl-[100px] transform -translate-x-1/2`}>
//                         <button className="bg-blue-600 text-white text-xs w-20 py-1 px-2 rounded hover:bg-blue-700">
//                           David Miller
//                         </button>
//                       </div>
//                     )}
//                   </td>
//                 );
//               })}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
// };

// export default CalendarTable;


import React from 'react';
import { AiOutlineCalendar, AiOutlineClockCircle, AiOutlineClose } from 'react-icons/ai';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

// Define types for the props
interface CalendarTableProps {
  showPopup: boolean;
  startDay: number;
  daysInPreviousMonth: number;
  month: number;
  daysInMonth: number;
  closePopup: () => void;
  handleDayClick: (day: number, isCurrentMonth: boolean) => void;
}

const CalendarTable: React.FC<CalendarTableProps> = ({
  showPopup,
  startDay,
  daysInPreviousMonth,
  month,
  daysInMonth,
  closePopup,
  handleDayClick,
}) => {
  const specialDays = [4, 19]; // List of special days for popup

  return (
    <table className="w-full text-center mb-12 overflow-auto">
      <thead>
        <tr>
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <th key={day} className="border bg-[#F1F5F9] p-4 font-semibold text-lg">{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 6 }).map((_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: 7 }).map((_, dayIndex) => {
              const cellIndex = rowIndex * 7 + dayIndex;
              const dayNumber = cellIndex - startDay + 1;

              let displayDay = null;
              let dayStyle = "text-gray-800";
              let isCurrentMonth = true;
              let cellBgColor = "";

              if (dayNumber < 1) {
                displayDay = daysInPreviousMonth + dayNumber;
                dayStyle = "text-gray-400"; // Previous month days
                isCurrentMonth = false;
              } else if (dayNumber > daysInMonth) {
                displayDay = dayNumber - daysInMonth;
                dayStyle = "text-gray-400"; // Next month days
                isCurrentMonth = false;
              } else {
                displayDay = dayNumber; // Current month days
              }

              // Set background color for special days
              if (month === 10 && specialDays.includes(displayDay)) {
                cellBgColor = 'bg-gray-300';
              }

              return (
                <td
                  key={dayIndex}
                  className={`border h-[10rem] w-[8rem] bg-white relative ${cellBgColor}`}
                  onClick={() => handleDayClick(displayDay, isCurrentMonth)}
                >
                  {displayDay && (
                    <div className={`absolute top-3 right-3 text-lg font-normal ${dayStyle}`}>
                      {displayDay}
                    </div>
                  )}
                  {showPopup && specialDays.includes(displayDay) && month === 10 && isCurrentMonth && (
                    <div
                      className="absolute top-10 left-[100%] transform -translate-x-1/2 w-[16rem] bg-white border border-gray-300 rounded-lg shadow-lg p-0 z-10"
                      style={{ maxHeight: '200px', overflowY: 'auto' }}
                    >
                      {/* Navbar-like header with John Doe and icons */}
                      <div className="flex justify-between items-center bg-[#22C55E] p-2 rounded-t-md text-white font-bold">
                        <span>John Doe</span>
                        <div className="flex space-x-2">
                          <FaRegEdit className="cursor-pointer text-white hover:text-gray-200" />
                          <FaRegTrashAlt className="cursor-pointer text-white hover:text-gray-200" />
                          <AiOutlineClose className="cursor-pointer text-white hover:text-gray-200" onClick={closePopup} />
                        </div>
                      </div>

                      {/* Popup content - Left-aligned with icons */}
                      <div className="bg-white p-2 rounded-md mt-2 text-left">
                        <div className="flex items-center text-sm font-semibold mb-1">
                          <AiOutlineCalendar className="mr-2 text-gray-600" />
                          Date: <span className='font-normal ml-2'>04/11/2024</span>
                        </div>
                        <div className="flex items-center text-sm font-semibold mb-1">
                          <AiOutlineClockCircle className="mr-2 text-gray-600" />
                          Time: <span className='font-normal ml-2'>2:00 pm - 3:00 pm</span>
                        </div>
                        <div className="text-sm text-gray-700 mt-1">
                          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Button for November 19 with background color */}
                  {month === 10 && displayDay === 19 && (
                    <div className="absolute bottom-20 pl-[100px] transform -translate-x-1/2">
                      <button className="bg-blue-600 text-white text-xs w-20 py-1 px-2 rounded hover:bg-blue-700">
                        David Miller
                      </button>
                    </div>
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CalendarTable;
