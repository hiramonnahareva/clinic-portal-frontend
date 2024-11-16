"use client";


import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai"; 

// Define types for the props
interface SetHoursProps {
  isOpen: boolean; // isOpen is a boolean
  onClose: () => void; // onClose is a function that takes no arguments and returns nothing
}

const SetHours: React.FC<SetHoursProps> = ({ isOpen, onClose }) => {
  // State to manage user availability
  // const [isAvailable, setIsAvailable] = useState(false);
  // State to manage selected user role
  // const [userRole, setUserRole] = useState("Owner");

  if (!isOpen) return null; // Do not render the modal if not open


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-[40rem] md:max-w-[40rem] p-4 md:p-6 mx-3">
        {/* Modal Header */}
        <h3 className="text-xl font-semibold mb-4 text-gray-600">Edit Hours For Staff</h3>
        <hr className="mb-6" />

        {/* Modal Body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20">
          {/* Column 1: Weekdays with Open/Close dropdowns */}
          <div className="space-y-4 px-5 py-1">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
              <div
                key={day}
                className={`flex items-center justify-between ${day === "Monday" ? "mb-[9rem]" : ""
                  }`}
              >
                <span className="font-semibold text-gray-600">{day}</span>
                <div className="relative">
                  <select className="border border-gray-300 rounded-md p-2 font-semibold text-[0.850rem] text-gray-700 cursor-pointer w-24">
                    <option value="open">Open</option>
                    <option value="close">Closed</option>
                  </select>
                </div>
              </div>
            ))}
          </div>


          {/* Column 2: Time Buttons and Additional Records */}
          <div className="space-y-4 px-5 py-1">
            {/* First Row of Time Buttons with Plus Icon */}
            <div className="flex items-center space-x-2">
              <button className="w-24  p-2 font-semibold text-[0.850rem] bg-white border border-gray-300 text-gray-700 rounded-md">
                10:00 AM
              </button>
              <span className="text-gray-500 text-xl">-</span>
              <button className="w-24 p-2 font-semibold text-[0.850rem] bg-white border border-gray-300 text-gray-700 rounded-md">
                1:00 PM
              </button>
              <button className="w-8 h-7 flex items-center justify-center rounded-full bg-blue-500 text-white">
                  <AiOutlinePlus size={18} />
              </button>

            </div>

            {/* Second Row of Time Buttons with Cross Icon */}
            <div className="flex items-center space-x-2">
              <button className="w-24  p-2 bg-white  font-semibold text-[0.850rem] border border-gray-300 text-gray-700 rounded-md">
                2:00 PM
              </button>
              <span className="text-gray-500 text-xl">-</span>
              <button className="w-24  p-2 bg-white font-semibold text-[0.850rem] border border-gray-300 text-gray-700 rounded-md">
                4:00 PM
              </button>
              <button className="w-8 h-7 flex items-center justify-center rounded-full bg-red-500 text-white">
                <AiOutlineClose size={18} />
              </button>
              
            </div>

            {/* Third Row of Time Buttons with Cross Icon */}
            <div className="flex items-center space-x-2">
              <button className="w-24  p-2 bg-white font-semibold text-[0.850rem] border border-gray-300 text-gray-700 rounded-md">
                5:00 PM
              </button>
              <span className="text-gray-500 text-xl">-</span>
              <button className="w-24  p-2 bg-white font-semibold text-[0.850rem] border border-gray-300 text-gray-700 rounded-md">
                6:00 PM
              </button>
              <button className="w-8 h-7 flex items-center justify-center rounded-full bg-red-500 text-white">
                <AiOutlineClose size={18} />
              </button>
            </div>
            <div className="flex items-center space-x-2 pt-4">
              <button className="w-24  p-2  font-semibold text-[0.850rem] bg-white border border-gray-300 text-gray-700 rounded-md">
                10:00 AM
              </button>
              <span className="text-gray-500 text-xl">-</span>
              <button className="w-24  p-2  font-semibold text-[0.850rem] bg-white border border-gray-300 text-gray-700 rounded-md">
                5:00 PM
              </button>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-500 text-white invisible">
                <AiOutlinePlus size={20} />
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <button className="w-24  p-2 font-semibold text-[0.850rem] bg-white border border-gray-300 text-gray-700 rounded-md">
                10:00 AM
              </button>
              <span className="text-gray-500 text-xl">-</span>
              <button className="w-24  p-2 font-semibold text-[0.850rem] bg-white border border-gray-300 text-gray-700 rounded-md">
                5:55 PM
              </button>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-500 text-white invisible">
                <AiOutlinePlus size={20} />
              </button>
            </div>
            <div className="flex items-center space-x-2 pt-[3.1rem]">
              <button className="w-24  p-2 font-semibold text-[0.850rem] bg-white border border-gray-300 text-gray-700 rounded-md">
                10:00 AM
              </button>
              <span className="text-gray-500 text-xl">-</span>
              <button className="w-24  p-2 font-semibold text-[0.850rem] bg-white border border-gray-300 text-gray-700 rounded-md">
                5:55 PM
              </button>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-500 text-white invisible">
                <AiOutlinePlus size={20} />
              </button>
            </div>


          </div>


        </div>
        <div className="flex justify-end items-center space-x-2">
          <button className="w-[4rem] py-2 bg-[#007AFF] text-white rounded-md text-sm hover:bg-blue-600">
            Reset
          </button>
          <button
            className="w-[4rem] py-2 bg-gray-200 text-gray-700 rounded-md text-sm"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="w-[4rem] py-2 bg-[#007AFF] text-white rounded-md text-sm hover:bg-blue-600">
            Save
          </button>
        </div>

      </div>
    </div>

  );
};

export default SetHours;
