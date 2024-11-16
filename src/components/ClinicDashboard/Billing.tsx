"use client";

import { useState } from "react";
import { BsExclamationLg } from "react-icons/bs";
import { AiOutlineUpload } from "react-icons/ai";
import SetHours from "./SetHours";

const Billing = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  // State to manage selected user role
  const [userRole, setUserRole] = useState("Optometrists");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  return (
    <>
      {/* New Leads */}
      <div className="bg-white md:ml-64 p-6 rounded shadow mb-[4rem]">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-600">
            Staff Member Details
          </h2>
        </div>

        {/* Horizontal line */}
        <div className="w-full border-t border-gray-300 my-2"></div>

        {/* Table Section */}
        <div className="grid grid-cols-1 md:grid-cols-[8fr_5fr_5fr] gap-4 md:gap-8">
          {/* Column 1 */}
          <div className="space-y-4 mt-5">
            <h4 className="text-gray-700">Staff Member Details</h4>
            <label className="font-semibold block text-gray-600">
              User Name
            </label>
            <input
              type="text"
              placeholder="User Name"
              value="user123"
              readOnly
              className="w-full border border-gray-300 rounded-md p-2"
            />
            <label className="font-semibold block text-gray-600">
              User Email Address
            </label>
            <input
              type="email"
              placeholder="User email"
              value="optician@gmail.com"
              readOnly
              className="w-full border border-gray-300 rounded-md p-2"
            />

            {/* Reset Password Button */}
            <div className="flex md:flex-nowrap flex-wrap items-center gap-4">
              <button className="bg-[#30B0C7] mr-7 text-white font-semibold py-2 px-4 rounded-md">
                Reset Password
              </button>

              {/* Max Booking Per Day */}
              <div className="flex flex-col md:pl-10 m-0">
                <label className="font-semibold text-gray-600 mb-1">
                  Max Booking Per Day
                </label>
                <input
                  type="number"
                  placeholder="Type Max Booking"
                  value="10"
                  readOnly
                  className="w-60 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* User Role */}
            <div className="flex items-center mt-4">
              <label className="font-semibold block text-gray-600 mr-2">
                User Role
              </label>
              <div className="flex items-center justify-center bg-white border border-gray-600 rounded-full w-4 h-4 cursor-pointer">
                <BsExclamationLg
                  className="text-gray-600 h-4"
                  title="Select a payment method"
                />
              </div>
            </div>

            {/* Role Selection */}
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Owner"
                  checked={userRole === "Owner"}
                  onChange={() => setUserRole("Owner")}
                  className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                Owner
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Receptionist"
                  checked={userRole === "Receptionist"}
                  onChange={() => setUserRole("Receptionist")}
                  className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                Receptionist
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Optometrists"
                  checked={userRole === "Optometrists"}
                  onChange={() => setUserRole("Optometrists")}
                  className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                Optometrists
              </label>
            </div>

            {/* Availability Toggle */}
            <div className="flex items-center mt-4">
              <label className="font-semibold text-gray-600 mr-2">
                User Available for Booking
              </label>
              <span
                className={`flex items-center cursor-pointer p-1 rounded-full ${
                  isAvailable ? "bg-blue-600" : "bg-gray-200"
                } transition duration-300`}
                onClick={() => setIsAvailable(!isAvailable)}
                style={{ width: "40px", height: "20px" }}
              >
                <div
                  className={`transform transition-transform duration-300 h-5 w-5 rounded-full bg-white ${
                    isAvailable ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </span>
            </div>

            <button
              className="w-1/2 md:w-[35%] font-semibold py-2 bg-blue-600 text-white rounded-md"
              onClick={toggleModal}
            >
              Set Available Hours
            </button>
          </div>

          {/* Column 2 */}
          <div className="space-y-4 md:mt-[14.7]"></div>

          {/* Column 3 */}
          <div className="flex flex-col items-center md:items-end justify-start mb-4 mt-5">
            <label className="flex flex-col w-[15rem] h-[12rem] items-center justify-center p-6 bg-[#F1F5F9] border-0 rounded-lg mb-2">
              <AiOutlineUpload className="text-[#826AF9] mb-2" size={40} />
              <span className="text-center text-[#826AF9]">
                Upload User Image
              </span>
              <input type="file" className="hidden" />
            </label>
            <div className="text-xs text-gray-500 text-left mb-2 m-1">
              240 x 240 pixels @ 72 DPI, Maximum size of <br /> 1MB to 3.5MB.
            </div>
            <div className="flex md:flex-row justify-end items-end space-x-2 md:mt-[12rem] mt-6">
              <button className="w-[6rem] py-2 bg-gray-200 text-gray-700 rounded-md text-sm">
                Cancel
              </button>
              <button className="w-[6rem] py-2 bg-[#007AFF] text-white rounded-md text-sm hover:bg-blue-600">
                Update
              </button>
            </div>
          </div> 
        </div>
      </div> 
      <SetHours isOpen={isModalOpen} onClose={toggleModal} /> 
    </>
  );
};

export default Billing;
