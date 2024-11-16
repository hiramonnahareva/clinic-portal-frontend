// components/Leads.js
"use client";

import { useState } from "react";
import AppoinmentDetailsModal from "./AppoinmentDetailsModal"; // Import the modal component
import Table from "./Table";

const Leads = () => {
  const [status, setStatus] = useState(false); // State for switch button
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleToggle = () => {
    setStatus(!status); // Toggle the status
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  return (
    <div className="md:ml-64">
      {/* New Leads */}
      <div className="bg-white  p-6 rounded shadow mb-[4rem]">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">New Leads</h2>
          <div className="flex items-center">
            <span className="mr-2">Status</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={status}
                onChange={handleToggle}
              />
              <div className="block w-10 h-6 bg-gray-200 rounded-full"></div>
              <div
                className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
                  status ? "translate-x-full bg-blue-500" : ""
                }`}
              ></div>
            </label>
          </div>
        </div>

        {/* Horizontal line */}
        <div className="w-full border-t border-gray-300 my-2"></div>

        {/* Info Text */}
        <p className="text-gray-500 text-sm mb-6 mt-6">
          All new leads listed below
        </p>

        {/* Table Section */}
        <div className="overflow-auto  rounded-lg">
          {/* <table className="table-auto min-w-full rounded-xl">
                    <thead>
                    <tr className="border-b border-gray-300">
                        <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-2 font-semibold text-gray-900 capitalize"> USER </th>
                        <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-2 font-semibold text-gray-900 capitalize"> Date | Time</th>
                        <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-2 font-semibold text-gray-900 capitalize min-w-[150px]"> Phone </th>
                        <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-2 font-semibold text-gray-900 capitalize"> Appoinment #ID</th>
                        <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-2 font-semibold text-gray-900 capitalize"> Optometrist</th>
                        <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-2 font-semibold text-gray-900 capitalize"> ACTION </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300 ">
                    <tr className="bg-white transition-all duration-500 ">
                        <td className="p-5 whitespace-nowrap text-sm leading-2 font-medium text-gray-600"> Mark Dssuza </td>
                        <td className=" px-5 py-3">
                        <div className="flex items-center gap-3">
                        <td className="p-5 whitespace-nowrap text-sm ml-[-20px] leading-2 font-medium text-gray-600"> 01 November 2024 | 06:00 PM </td>

                        </div>
                        </td>
                        <td className="p-5 whitespace-nowrap text-sm leading-2 font-medium text-gray-600">+1 647 123 - 2301</td>
                        <td className="p-5 whitespace-nowrap text-sm leading-2 font-medium text-gray-600"> # 0-123-45601</td>
                        <td className="p-5 whitespace-nowrap text-sm leading-2 font-medium text-gray-600">
                        <div className="py-1.5 px-2.5 bg-blue-50 rounded-lg flex justify-center w-20 items-center gap-1 border border-blue-500">
                            <span className="font-medium text-xs text-blue-600 ">Dr.Sarvi</span>
                        </div>
                        </td>
                        
                        <td className="flex p-5 items-center gap-0.5">
                        <button className="p-1 mr-2 bg-white border border-blue-500 flex items-center justify-center group transition duration-300 hover:bg-blue-500">
                           <Edit/>
                        </button>
                        
                        <button className="p-1 mr-2 bg-white border border-[#06B6D4] flex items-center justify-center group transition duration-300 hover:bg-[#06B6D4]"       
                          onClick={toggleModal} 
                        >
                        <Eye/>
                        </button>
                        <button className="p-1 mr-2 bg-white border border-red-500 flex items-center justify-center group transition duration-300 hover:bg-red-500">
                           <Delete/>
                        </button>
                        </td>
                    </tr>
                    <tr className="bg-white transition-all duration-500 ">
                        <td className="p-5 whitespace-nowrap text-sm leading-2 font-medium text-gray-600"> Jossef Jennyfer	
                        </td>
                        <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                        <td className="p-5 whitespace-nowrap text-sm ml-[-20px] leading-2 font-medium text-gray-600"> 01 November 2024 | 06:00 PM </td>
                        </div>
                        </td>
                        <td className="p-5 whitespace-nowrap text-sm leading-2 font-medium text-gray-600"> +1 647 123 - 2301 </td>
                        <td className="p-5 whitespace-nowrap text-sm leading-2 font-medium text-gray-600"> # 0-123-45601 </td>
                        <td className="p-5 whitespace-nowrap text-sm leading-2 font-medium text-gray-600">
                        <div className="py-1.5 px-2.5 bg-emerald-50 rounded-lg flex w-20 justify-center items-center gap-1 border border-emerald-500">
                            <span className="font-medium text-xs text-blue-600 ">Dr.Peter</span>
                        </div>
                        </td>
                       
                        <td className="flex p-5 items-center gap-0.5">
                        <button className="p-1 mr-2 bg-white border border-blue-500 flex items-center justify-center group transition duration-300 hover:bg-blue-500">
                           <Edit/>
                        </button>
                        
                        <button className="p-1 mr-2 bg-white border border-[#06B6D4] flex items-center justify-center group transition duration-300 hover:bg-[#06B6D4]" 
                        onClick={toggleModal} 
                        >
                          <Eye/>
                        </button>
                        <button className="p-1 mr-2 bg-white border border-red-500 flex items-center justify-center group transition duration-300 hover:bg-red-500">
                           <Delete/>
                        </button>
                        </td>
                    </tr>

                    <tr className="bg-white transition-all duration-500 ">
                        <td className="p-5 whitespace-nowrap text-sm leading-2 font-medium text-gray-600"> Romeo D Custa	
                        </td>
                        <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                        <td className="p-5 whitespace-nowrap text-sm ml-[-20px] leading-2 font-medium text-gray-600"> 01 November 2024 | 06:00 PM </td>
                        </div>
                        </td>
                        <td className="p-5 whitespace-nowrap text-sm leading-2 font-medium text-gray-600"> +1 647 123 - 2301 </td>
                        <td className="p-5 whitespace-nowrap text-sm leading-2 font-medium text-gray-600"> # 0-123-45601 </td>
                        <td className="p-5 whitespace-nowrap text-sm leading-2 font-medium text-gray-600">
                        <div className="py-1.5 px-2.5 bg-amber-50 rounded-lg flex w-20 justify-center items-center gap-1 border border-amber-500">
                            <span className="font-medium text-xs text-amber-600">Dr.Eric</span>
                        </div>
                        </td>
                       
                        <td className="flex p-5 items-center gap-0.5">
                        <button className="p-1 mr-2 bg-white border border-blue-500 flex items-center justify-center group transition duration-300 hover:bg-blue-500">
                           <Edit/>
                        </button>
                        
                        <button className="p-1 mr-2 bg-white border border-[#06B6D4] flex items-center justify-center group transition duration-300 hover:bg-[#06B6D4]" 
                        onClick={toggleModal} 
                        >
                          <Eye/>
                        </button>
                        <button className="p-1 mr-2 bg-white border border-red-500 flex items-center justify-center group transition duration-300 hover:bg-red-500">
                           <Delete/>
                        </button>
                        </td>
                    </tr>


                    <tr className="bg-white transition-all duration-500 ">
                        <td className="p-5 whitespace-nowrap text-sm leading-2 font-medium text-gray-600"> Anald Donald	
                        </td>
                        <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                        <td className="p-5 whitespace-nowrap text-sm ml-[-20px] leading-2 font-medium text-gray-600"> 01 November 2024 | 06:00 PM </td>
                        </div>
                        </td>
                        <td className="p-5 whitespace-nowrap text-sm leading-2 font-medium text-gray-600"> +1 647 123 - 2301 </td>
                        <td className="p-5 whitespace-nowrap text-sm leading-2 font-medium text-gray-600"> # 0-123-45601 </td>
                        <td className="p-5 whitespace-nowrap text-sm leading-2 font-medium text-gray-600">
                        <div className="py-1.5 px-2.5 bg-amber-50 rounded-lg flex w-20 justify-center items-center gap-1 border border-amber-500">
                            <span className="font-medium text-xs text-amber-600 ">Dr.Eric</span>
                        </div>
                        </td>
                       
                        <td className="flex p-5 items-center gap-0.5">
                        <button className="p-1 mr-2 bg-white border border-blue-500 flex items-center justify-center group transition duration-300 hover:bg-blue-500">
                           <Edit/>
                        </button>
                        
                        <button className="p-1 mr-2 bg-white border border-[#06B6D4] flex items-center justify-center group transition duration-300 hover:bg-[#06B6D4]" 
                        onClick={toggleModal} 
                        >
                          <Eye/>
                        </button>
                        <button className="p-1 mr-2 bg-white border border-red-500 flex items-center justify-center group transition duration-300 hover:bg-red-500">
                           <Delete/>
                        </button>
                        </td>
                    </tr>

                    <tr className="bg-white transition-all duration-500 ">
                        <td className="p-5 whitespace-nowrap text-sm leading-2 font-medium text-gray-600"> Vicky Patel	
                        </td>
                        <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                        <td className="p-5 whitespace-nowrap text-sm ml-[-20px] leading-2 font-medium text-gray-600"> 01 November 2024 | 06:00 PM </td>
                        </div>
                        </td>
                        <td className="p-5 whitespace-nowrap text-sm leading-2 font-medium text-gray-600"> +1 647 123 - 2301 </td>
                        <td className="p-5 whitespace-nowrap text-sm leading-2 font-medium text-gray-600"> # 0-123-45601 </td>
                        <td className="p-5 whitespace-nowrap text-sm leading-2 font-medium text-gray-600">
                        <div className="py-1.5 px-2.5 bg-emerald-50 rounded-lg flex w-20 justify-center items-center gap-1 border border-emerald-500">
                            <span className="font-medium text-xs text-blue-600 ">Dr.Peter</span>
                        </div>
                        </td>
                       
                        <td className="flex p-5 items-center gap-0.5">
                        <button className="p-1 mr-2 bg-white border border-blue-500 flex items-center justify-center group transition duration-300 hover:bg-blue-500">
                           <Edit/>
                        </button>
                        
                        <button className="p-1 mr-2 bg-white border border-[#06B6D4] flex items-center justify-center group transition duration-300 hover:bg-[#06B6D4]" 
                        onClick={toggleModal} 
                        >
                          <Eye/>
                        </button>
                        <button className="p-1 mr-2 bg-white border border-red-500 flex items-center justify-center group transition duration-300 hover:bg-red-500">
                           <Delete/>
                        </button>
                        </td>
                    </tr>
                    </tbody>
                </table> */}
          <Table toggleModal={toggleModal} />
        </div>
      </div>

      {/* Pending Leads*/}
      <div className="bg-white p-6 rounded shadow mb-[4rem]">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Pending Leads</h2>
          <div className="flex items-center">
            <span className="mr-2">Status</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={status}
                onChange={handleToggle}
              />
              <div className="block w-10 h-6 bg-gray-200 rounded-full"></div>
              <div
                className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
                  status ? "translate-x-full bg-blue-500" : ""
                }`}
              ></div>
            </label>
          </div>
        </div>

        {/* Horizontal line */}
        <div className="w-full border-t border-gray-300 my-2"></div>

        {/* Info Text */}
        <p className="text-gray-500 text-sm mb-6 mt-6">
          All Pending listed below
        </p>

        {/* Table Section */}
        <div className="overflow-auto  rounded-lg">
          <Table toggleModal={toggleModal} />
        </div>
      </div>

      {/* Cancellled Leads  */}
      <div className="bg-white p-6 rounded shadow mb-[4rem]">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Cancelled Leads</h2>
          <div className="flex items-center">
            <span className="mr-2">Status</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={status}
                onChange={handleToggle}
              />
              <div className="block w-10 h-6 bg-gray-200 rounded-full"></div>
              <div
                className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
                  status ? "translate-x-full bg-blue-500" : ""
                }`}
              ></div>
            </label>
          </div>
        </div>

        {/* Horizontal line */}
        <div className="w-full border-t border-gray-300 my-2"></div>

        {/* Info Text */}
        <p className="text-gray-500 text-sm mb-6 mt-6">
          All Cancelled listed below
        </p>

        {/* Table Section */}
        <div className="overflow-auto  rounded-lg">

          <Table toggleModal={toggleModal} />
        </div>
      </div>

      <AppoinmentDetailsModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default Leads;
