"use client";

import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoCheckmark } from "react-icons/io5";
import UserImage from "../../assets/userImage.png";
import { BsExclamationLg } from "react-icons/bs";
import { AiOutlineClose, AiOutlineUpload } from "react-icons/ai";
import { MdOutlineQuestionMark } from "react-icons/md";

import Image from "next/image";
import ClinicSetHours from "./ClinicSetHours";

const ClinicProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [insuranceProviders, setInsuranceProviders] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  const handleAddProvider = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue) {
      // Prevent duplicates
      if (!insuranceProviders.includes(inputValue)) {
        setInsuranceProviders([...insuranceProviders, inputValue]);
        setInputValue(""); // Clear input after adding
      }
    }
  };
  
  const timezones = [
  { value: "GMT-12:00", label: "GMT-12:00 (IDLW - International Date Line West)" },
  { value: "GMT-11:00", label: "GMT-11:00 (MHT - Midway Islands, Samoa)" },
  { value: "GMT-10:00", label: "GMT-10:00 (HST - Hawaii-Aleutian Standard Time)" },
  { value: "GMT-9:00", label: "GMT-9:00 (AKST - Alaska Standard Time)" },
  { value: "GMT-8:00", label: "GMT-8:00 (PST - Pacific Standard Time)" },
  { value: "GMT-7:00", label: "GMT-7:00 (MST - Mountain Standard Time)" },
  { value: "GMT-6:00", label: "GMT-6:00 (CST - Central Standard Time)" },
  { value: "GMT-5:00", label: "GMT-5:00 (EST - Eastern Standard Time)" },
  { value: "GMT-4:00", label: "GMT-4:00 (AST - Atlantic Standard Time)" },
  { value: "GMT-3:00", label: "GMT-3:00 (BRT - Brasilia Time)" },
  { value: "GMT-2:00", label: "GMT-2:00 (GST - South Georgia and the South Sandwich Islands)" },
  { value: "GMT-1:00", label: "GMT-1:00 (AZOT - Azores Standard Time)" },
  { value: "GMT+0:00", label: "GMT+0:00 (GMT - Greenwich Mean Time)" },
  { value: "GMT+1:00", label: "GMT+1:00 (CET - Central European Time)" },
  { value: "GMT+2:00", label: "GMT+2:00 (EET - Eastern European Time)" },
  { value: "GMT+3:00", label: "GMT+3:00 (MSK - Moscow Standard Time)" },
  { value: "GMT+4:00", label: "GMT+4:00 (AST - Arabian Standard Time)" },
  { value: "GMT+5:00", label: "GMT+5:00 (PKT - Pakistan Standard Time)" },
  { value: "GMT+6:00", label: "GMT+6:00 (BST - Bangladesh Standard Time, Dhaka)" },
  { value: "GMT+7:00", label: "GMT+7:00 (ICT - Indochina Time)" },
  { value: "GMT+8:00", label: "GMT+8:00 (CST - China Standard Time)" },
  { value: "GMT+9:00", label: "GMT+9:00 (JST - Japan Standard Time)" },
  { value: "GMT+10:00", label: "GMT+10:00 (AEST - Australian Eastern Standard Time)" },
  { value: "GMT+11:00", label: "GMT+11:00 (AEDT - Australian Eastern Daylight Time)" },
  { value: "GMT+12:00", label: "GMT+12:00 (NZST - New Zealand Standard Time)" }
];


  const handleRemoveProvider = (providerToRemove: string) => {
    setInsuranceProviders(
      (prevProviders) =>
        prevProviders.filter((provider) => provider !== providerToRemove) // Remove only the clicked provider
    );
  };

  return (
    <>
      {/* New Leads */}
      <div className="bg-white relative md:ml-64 p-6 rounded shadow mb-[4rem]">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Clinic Details</h2>
        </div>

        {/* Horizontal line */}
        <div className="w-full border-t border-gray-300 my-2"></div> 

        {/* Table Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-4 md:gap-8"> 
          {/* Column 1 */}
          <div className="space-y-4 mt-5">
            {" "}
            {/* Increased space between elements */}
            <h4 className="text-gray-700">All Clinic Detail Listed</h4>
            <label className="font-semibold block text-gray-600">
              Clinic Name
            </label>
            <input
              type="text"
              placeholder="Clinic Name"
              className="w-full border border-gray-300 rounded-md p-2"
            />
            <label className="font-semibold block text-gray-600">
              Clinic Email Address
            </label>
            <input
              type="email"
              placeholder="Clinic email"
              className="w-full border border-gray-300 rounded-md p-2"
            />
            <label className="font-semibold block text-gray-600">
              Clinic Password
            </label>
            <input
              type="password"
              placeholder="Type password"
              className="w-full border border-gray-300 rounded-md p-2"
            />
            <label className="font-semibold block text-gray-600">Phone</label>
            <input
              type="text"
              placeholder="Your Number"
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {/* Timezone Selection */}
            <label className="font-semibold block text-gray-600">
              Timezone
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2">
              <option value="">Select Timezone</option>

              {timezones.map((timezone) => (
                <option key={timezone.value} value={timezone.value}>
                  {timezone.label}
                </option>
              ))}
            </select>
            {/* Payment Option */}
            <div className="flex items-center mt-4">
              <label className="font-semibold block text-gray-600 mr-2">
                Payment Option
              </label>
              <div className="flex items-center justify-center bg-white border border-gray-600 rounded-full w-4 h-4 cursor-pointer">
                <BsExclamationLg
                  className="text-gray-600 h-4"
                  title="Select a payment method"
                />
              </div>
            </div>
            {/* Payment Buttons in a Row */}
            <div className="flex flex-wrap gap-4 mt-2">
              <button className="flex items-center pr-2 justify-center bg-blue-600 text-white py-2 rounded-md">
                <IoCheckmark className="mr-2 ml-2" />
                Mastercard
              </button>
              <button className="flex items-center pr-2 justify-center bg-blue-600 text-white py-2 rounded-md">
                <IoCheckmark className="mr-2 ml-2 " />
                Debit
              </button>
              <button className="flex items-center pr-2 justify-center bg-blue-600 text-white py-2 rounded-md">
                <IoCheckmark className="mr-2 ml-2 " />
                Credit
              </button>
              <button className="flex items-center pr-2 justify-center border border-gray-300 bg-white text-gray-700 py-2 rounded-md">
                <RxCross1 className="mr-2 ml-2" />
                Apple Pay
              </button>
            </div>
            {/* Insurance Providers Accepted */}
            <div className="flex items-center mt-4">
              <label className="font-semibold block text-gray-600 mr-2">
                Insurance Providers Accepted
              </label>
              <div className="flex items-center justify-center bg-white border border-gray-600 rounded-full w-4 h-4 cursor-pointer">
                <BsExclamationLg
                  className="text-gray-600 h-4"
                  title="Select a payment method"
                />
              </div>
            </div>
            <div className="flex items-center flex-wrap border border-gray-300 rounded-md p-1">
              {insuranceProviders.map((provider, index) => (
                <span
                  key={index}
                  className="flex items-center bg-white text-gray-600 py-1 px-2 border border-gray-600 rounded-md mr-2"
                >
                  <Image
                    src={UserImage}
                    alt="User"
                    width={20}
                    height={20}
                    className="w-5 h-5 mr-2" // Tailwind classes
                  />
                  {provider}
                  <AiOutlineClose
                    className="ml-2 cursor-pointer"
                    onClick={() => handleRemoveProvider(provider)} // Remove provider on click
                  />
                </span>
              ))}

              <div className="flex items-center rounded-md p-1 flex-grow">
                {" "}
                {/* Container for the input field */}
                <input
                  type="text"
                  placeholder="Add Insurance Provider"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" ? handleAddProvider(e) : null
                  } // Add on enter
                  className="flex-1 border-none focus:outline-none" // No border on the input
                />
              </div>

              <div className="flex items-center justify-center bg-white border border-gray-600 rounded-full w-4 h-4 ml-2 cursor-pointer mt-2">
                {" "}
                {/* Question mark icon */}
                <MdOutlineQuestionMark
                  className="text-gray-600 h-3"
                  title="Select a payment method"
                />
              </div>
            </div>
            <button
              className="w-1/2 md:w-[35%] font-semibold py-2 bg-blue-600 text-white rounded-md"
              onClick={toggleModal} // Open modal on click
            >
              Set Available Hours
            </button>
          </div> 

          {/* Column 2 (Placeholder for any future content) */}
          {/* <div className="space-y-4 mt-[14.7rem] md:mt-[14.7]">  */}
            {/* Placeholder for future content */}
          {/* </div>  */}

          {/* Column 3 */}
          <div className="flex flex-col lg:items-end items-center justify-start mb-4 mt-5">
            {/* Card for Upload User Image */}
            <label className="flex flex-col w-[15rem] h-[12rem] items-center justify-center p-6 bg-[#F1F5F9] border-0 rounded-lg mb-2">
              <input type="file" className="hidden" />
              <AiOutlineUpload className="text-[#826AF9] mb-2" size={40} />
              <span className="text-center text-[#826AF9]">Upload Logo</span>
            </label>
            <div className="text-xs text-gray-500 text-left mb-2 m-1">
              240 x 240 pixels @ 72 DPI, Maximum size of <br /> 1MB to 3.5MB.
            </div>

            {/* Buttons */}
            <div className="flex md:flex-row justify-end items-end space-x-2 lg:mt-[29.9rem] mt-4">
              <button className="w-[6rem] md:w-[6rem] py-2 bg-gray-200 text-gray-700 rounded-md text-sm">
                Cancel
              </button>
              <button className="w-[6rem] md:w-[6rem] py-2 bg-[#007AFF] text-white rounded-md text-sm hover:bg-blue-600">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <ClinicSetHours isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default ClinicProfile;
