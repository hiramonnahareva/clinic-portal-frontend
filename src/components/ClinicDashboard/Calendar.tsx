// import { useState, useEffect } from 'react';
// import {
//   AiOutlineLeft,
//   AiOutlineRight,
//   AiOutlinePlus,
// } from 'react-icons/ai';
// import CalendarTable from './CalendarTable';

// const Calendar = () => {
//   const [selectedTimeframe, setSelectedTimeframe] = useState("Day");
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedDay, setSelectedDay] = useState(null); // Track the selected day

//   const timeframes = ["Day", "Week", "Month", "Year"];

//   const year = currentDate.getFullYear();
//   const month = currentDate.getMonth();
//   const daysInMonth = new Date(year, month + 1, 0).getDate();
//   const startDay = new Date(year, month, 1).getDay();
//   const daysInPreviousMonth = new Date(year, month, 0).getDate();

//   const monthNames = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];

//   console.log(selectedDay)

//   const handleNextMonth = () => {
//     setCurrentDate(new Date(year, month + 1, 1));
//     setShowPopup(false);
//   };

//   const handlePreviousMonth = () => {
//     setCurrentDate(new Date(year, month - 1, 1));
//     setShowPopup(false);
//   };

//   const handleDayClick = (day, isCurrentMonth) => {
//     // Show popup only if it's November 4 in the current month
//     if (month === 10 && day === 4 && isCurrentMonth) {
//       setShowPopup(true);
//       setSelectedDay(day); // Set selected day to 4
//     } else {
//       setShowPopup(false);
//       setSelectedDay(null); // Reset selected day
//     }
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//     setSelectedDay(null); // Reset selected day
//   };

//   // Automatically show the popup on component mount if it's November
//   useEffect(() => {
//     if (month === 10) {
//       setShowPopup(true); // Open the popup for November 4
//       setSelectedDay(4); // Set selected day to 4
//     }
//   }, [month]);

//   return (
//     <div className="bg-white md:ml-64 rounded-lg shadow-md mb-[5rem] ">
//       <div className="flex flex-wrap gap-4 p-2 justify-between items-center mb-4">
//         <div className="flex items-center">
//           <button
//             onClick={handlePreviousMonth}
//             className="p-2 mr-2 rounded-l bg-[#F1F5F9] hover:bg-blue-600 transition-colors duration-200"
//           >
//             <AiOutlineLeft className="text-black" />
//           </button>
//           <button
//             onClick={handleNextMonth}
//             className="p-2 rounded-r bg-[#F1F5F9] hover:bg-blue-600 transition-colors duration-200"
//           >
//             <AiOutlineRight className="text-black" />
//           </button> 

//           <div className="ml-6">
//             <button className="flex items-center text-blue-600 justify-center p-2 bg-[#EAE9FE] rounded-md hover:bg-blue-700 transition duration-300">
//               Today
//             </button>
//           </div>

//           <div className="ml-4">
//             <button className="flex items-center justify-center p-2 bg-[#826AF9] text-white rounded-md hover:bg-blue-700 transition duration-300">
//               <AiOutlinePlus className="mr-2" />
//               Create / New Appointment
//             </button>
//           </div>
//         </div>
//         <div className="text-lg font-semibold">{monthNames[month]} {year}</div>
//         <div className="flex items-center space-x-0">
//           {timeframes.map((frame) => (
//             <button
//               key={frame}
//               className={`p-2 border w-[5rem] border-gray-300 ${selectedTimeframe === frame ? 'bg-[#826AF9] text-white' : 'bg-gray-200 text-gray-600'
//                 } transition duration-300`}
//               onClick={() => setSelectedTimeframe(frame)}
//             >
//               {frame}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Calendar Table */}
//     <div className='md:overflow-hidden overflow-x-scroll p-2'>
//     <CalendarTable
//         month={month}
//         startDay={startDay}
//         showPopup={showPopup}
//         closePopup={closePopup}
//         daysInMonth={daysInMonth}
//         daysInPreviousMonth={daysInPreviousMonth}
//         handleDayClick={handleDayClick}
//       />
//     </div>
//     </div>
//   );
// };

// export default Calendar;


import { useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight, AiOutlinePlus } from 'react-icons/ai';
import CalendarTable from './CalendarTable';

const Calendar = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>("Day");
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null); // Track the selected day

  console.log(selectedDay)

  const timeframes: string[] = ["Day", "Week", "Month", "Year"];

  const year: number = currentDate.getFullYear();
  const month: number = currentDate.getMonth();
  const daysInMonth: number = new Date(year, month + 1, 0).getDate();
  const startDay: number = new Date(year, month, 1).getDay();
  const daysInPreviousMonth: number = new Date(year, month, 0).getDate();

  const monthNames: string[] = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setShowPopup(false);
  };

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setShowPopup(false);
  };

  // Update the type of `day` and `isCurrentMonth`
  const handleDayClick = (day: number, isCurrentMonth: boolean): void => {
    // Show popup only if it's November 4 in the current month
    if (month === 10 && day === 4 && isCurrentMonth) {
      setShowPopup(true);
      setSelectedDay(day); // Set selected day to 4
    } else {
      setShowPopup(false);
      setSelectedDay(null); // Reset selected day
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedDay(null); // Reset selected day
  };

  // Automatically show the popup on component mount if it's November
  useEffect(() => {
    if (month === 10) {
      setShowPopup(true); // Open the popup for November 4
      setSelectedDay(4); // Set selected day to 4
    }
  }, [month]);

  return (
    <div className="bg-white md:ml-64 rounded-lg shadow-md mb-[5rem]">
      <div className="flex flex-wrap gap-4 p-2 justify-between items-center mb-4">
        <div className="flex items-center">
          <button
            onClick={handlePreviousMonth}
            className="p-2 mr-2 rounded-l bg-[#F1F5F9] hover:bg-blue-600 transition-colors duration-200"
          >
            <AiOutlineLeft className="text-black" />
          </button>
          <button
            onClick={handleNextMonth}
            className="p-2 rounded-r bg-[#F1F5F9] hover:bg-blue-600 transition-colors duration-200"
          >
            <AiOutlineRight className="text-black" />
          </button>

          <div className="ml-6">
            <button className="flex items-center text-blue-600 justify-center p-2 bg-[#EAE9FE] rounded-md hover:bg-blue-700 transition duration-300">
              Today
            </button>
          </div>

          <div className="ml-4">
            <button className="flex items-center justify-center p-2 bg-[#826AF9] text-white rounded-md hover:bg-blue-700 transition duration-300">
              <AiOutlinePlus className="mr-2" />
              Create / New Appointment
            </button>
          </div>
        </div>
        <div className="text-lg font-semibold">{monthNames[month]} {year}</div>
        <div className="flex items-center space-x-0">
          {timeframes.map((frame) => (
            <button
              key={frame}
              className={`p-2 border w-[5rem] border-gray-300 ${selectedTimeframe === frame ? 'bg-[#826AF9] text-white' : 'bg-gray-200 text-gray-600'
                } transition duration-300`}
              onClick={() => setSelectedTimeframe(frame)}
            >
              {frame}
            </button>
          ))}
        </div>
      </div>

      {/* Calendar Table */}
      <div className='md:overflow-hidden overflow-x-scroll p-2'>
        <CalendarTable
          month={month}
          startDay={startDay}
          showPopup={showPopup}
          closePopup={closePopup}
          daysInMonth={daysInMonth}
          daysInPreviousMonth={daysInPreviousMonth}
          handleDayClick={handleDayClick}
        />
      </div>
    </div>
  );
};

export default Calendar;

