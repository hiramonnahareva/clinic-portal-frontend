// components/Leads.js
"use client";

import { useState } from 'react';
import CustomerDetailsModal from './CustomerDetailsModal';
import Table from './Table';


const Customers = () => {
  const [status, setStatus] = useState(false); // State for switch button
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleToggle = () => {
    setStatus(!status); // Toggle the status
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  return (
   <>
   {/* New Leads */}
    <div className="bg-white md:ml-64 p-6 rounded overflow-x-auto shadow mb-[4rem]">
    {/* Header Section */}
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold">Customers</h2>
      <div className="flex items-center">
        <span className="mr-2">Status</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="hidden"
            checked={status}
            onChange={handleToggle}
          />
          <div className="block w-10 h-6 bg-gray-200 rounded-full"></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
              status ? 'translate-x-full bg-blue-500' : ''
            }`}
          ></div>
        </label>
      </div>
    </div>

    {/* Horizontal line */}
    <div className="w-full border-t border-gray-300 my-2"></div>

    {/* Info Text */}
    <p className="text-gray-500 text-sm mb-6 mt-6">All new leads listed below</p>

    {/* Table Section */}
    <div className="overflow-x-auto rounded-lg">
      {/* Here, make sure your Table component can handle horizontal scrolling */}
      <Table toggleModal={toggleModal} />
    </div>
  </div>

  <CustomerDetailsModal isOpen={isModalOpen} onClose={toggleModal} />
   </> 
  );
};

export default Customers;
