"use client";

import { useState } from "react";
import { AiOutlineQuestionCircle, AiOutlineUpload } from "react-icons/ai"; 
import SetHours from "./SetHours";

// Define the prop types using an interface
interface AddStaffModalProps {
  isOpen: boolean;
  onClose: () => void; // onClose is a function that doesn't return anything
}

const AddStaffModal: React.FC<AddStaffModalProps> = ({ isOpen, onClose }) => {
  // State to manage user availability
  const [isAvailable, setIsAvailable] = useState(false);
  // State to manage selected user role
  const [userRole, setUserRole] = useState("Owner");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  if (!isOpen) return null; // Do not render the modal if not open


  return (
    <>
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
      <div className="bg-white rounded-lg w-full max-w-4xl md:max-w-6xl p-4 md:p-6 mx-4">
        {/* Modal Header */}
        <h3 className="text-xl font-semibold mb-4 text-gray-600">New Staff Memeber Details</h3>
        <hr className="mb-6" />

        {/* Modal Body */}
        <div className="grid grid-cols-1 md:grid-cols-[8fr_5fr_5fr] gap-4 md:gap-8">
          {/* Column 1 */}
          <div className="space-y-4"> {/* Increased space between elements */}
            <h4 className="text-gray-700">Create New Staff Member</h4>

            <label className="font-semibold block text-gray-600">User Name</label>
            <input
              type="text"
              placeholder="User Name"
              className="w-full border border-gray-300 rounded-md p-2"
            />

            <label className="font-semibold block text-gray-600">User Email Address</label>
            <input
              type="email"
              placeholder="User email"
              className="w-full border border-gray-300 rounded-md p-2"
            />

            <label className="font-semibold block text-gray-600">User Password</label>
            <input
              type="password"
              placeholder="Type password"
              className="w-full border border-gray-300 rounded-md p-2"
            />

            <div className="flex items-center mt-4"> {/* Added margin-top for better spacing */}
              <label className="font-semibold block text-gray-600 mr-2">User Role</label>
              <AiOutlineQuestionCircle className="text-gray-400 cursor-pointer" title="Select the user role" />
            </div>
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Owner"
                  checked={userRole === "Owner"}
                  onChange={() => setUserRole("Owner")}
                  className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 cursor-pointer" // Increased size
                />
                Owner
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Receptionist"
                  checked={userRole === "Receptionist"}
                  onChange={() => setUserRole("Receptionist")}
                  className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 cursor-pointer" // Increased size
                />
                Receptionist
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Optometrists"
                  checked={userRole === "Optometrists"}
                  onChange={() => setUserRole("Optometrists")}
                  className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 cursor-pointer" // Increased size
                />
                Optometrists
              </label>
            </div>

            <div className="flex items-center "> {/* Added margin-top for better spacing */}
              <label className="font-semibold text-gray-600 mr-2">User Available for Booking</label>
              <span
                className={`flex items-center cursor-pointer p-1 rounded-full ${isAvailable ? 'bg-blue-600' : 'bg-gray-200'} transition duration-300`}
                onClick={() => setIsAvailable(!isAvailable)}
                style={{ width: '40px', height: '20px' }} // Adjust size here
              >
                <div
                  className={`transform transition-transform duration-300 h-5 w-5 rounded-full bg-white ${isAvailable ? 'translate-x-4' : 'translate-x-0'}`}
                />
              </span>
            </div>

            <button className="w-1/2 md:w-[35%] font-semibold py-2 bg-blue-600 text-white rounded-md" 
                       onClick={toggleModal} // Open modal on click                       
            >
              Set Available Hours
            </button>
          </div>

          {/* Column 2 */}
          <div className="space-y-4 mt-[14.7rem] md:mt-[14.7]"> {/* Adjust the value to match password field */}
            <label className="font-semibold text-gray-600">Max Booking Per Day</label>
            <input
              type="number"
              placeholder="Type Max Booking Per Day"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-end justify-start mb-4"> {/* Container for the card and buttons */}
            {/* Card for Upload User Image */}
            <div className="flex flex-col w-[15rem] h-[12rem] items-center justify-center p-6 bg-[#F1F5F9] border-0 rounded-lg mb-2">
              <AiOutlineUpload className="text-[#826AF9] mb-2" size={40} /> {/* Arrow icon */}
              <span className="text-center text-[#826AF9]">Upload User Image</span>
            </div>
            <div className="text-xs text-gray-500 text-left mb-2 m-1">
              240 x 240 pixels @ 72 DPI, Maximum size of <br /> 1MB to 3.5MB.
            </div>



            {/* Buttons */}
            <div className="flex md:flex-row justify-end items-end space-x-2 mt-[12rem]">
              <button
                className="w-[6rem] md:w-[6rem] py-2 bg-gray-200 text-gray-700 rounded-md text-sm"
                onClick={onClose}
              >
                Cancel
              </button>
              <button className="w-[6rem] md:w-[6rem] py-2 bg-[#007AFF] text-white rounded-md text-sm hover:bg-blue-600">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SetHours isOpen={isModalOpen} onClose={toggleModal} />

    </>

  );
};

export default AddStaffModal;
