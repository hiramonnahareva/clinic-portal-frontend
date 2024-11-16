
"use client";

import Image from 'next/image';
import { FaGraduationCap } from "react-icons/fa6";
import { HiCalendarDays, HiHomeModern, HiWallet } from "react-icons/hi2";
import { FaChevronRight, FaUserPlus, FaBookOpen } from 'react-icons/fa';
import Union from '../../assets/Union.png';

// Define types for the props
interface SidebarProps {
  activeTab: string; // activeTab can be a string, or more specifically a union of string literals if there are predefined tabs
  handleTabClick: (tab: string) => void; // handleTabClick is a function that takes a string (tab) and returns void
  isSidebarOpen: boolean; // isSidebarOpen is a boolean value indicating whether the sidebar is open or not
  setIsSidebarOpen: (value: boolean) => void; // setIsSidebarOpen is a function that takes a boolean and returns void
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, handleTabClick, isSidebarOpen, setIsSidebarOpen }) => {

  console.log(isSidebarOpen)

  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className={`bg-white mt-[-4rem] shadow-md z-40 p-4 md:p-6 h-[100vh] border-r border-gray-300 absolute top-16 left-0 lg:top-0 bottom-0 transition-all duration-300 ease-in-out
        ${isSidebarOpen ? 'w-64 opacity-100' : 'w-0 opacity-0'} 
        md:w-64 md:block md:opacity-100`} // Transition for width and opacity
        
      >
        {/* Dashboard Heading */}
        <div className="flex items-center pl-2">
          <Image src={Union} alt="Union" width={24} height={24} className="mr-2" />
          <h1 className={`text-2xl font-bold text-black ${isSidebarOpen ? 'block' : 'md:block hidden'}`}>iSeeWell</h1>
        </div>

        {/* Horizontal line */}
        <div className="w-full border-t border-gray-300 my-2"></div>

        <h2 className="text-sm text-black font-semibold mb-5 mt-5">Clinic Portal</h2>

        {/* Navigation Tabs */}
        {['Leads', 'Calendar', 'Customers'].map((tab) => (
          <div
            key={tab}
            className={`flex justify-between items-center cursor-pointer p-2 mb-2 text-sm font-inter ${activeTab === tab ? 'text-white bg-[#007AFF]' : 'text-black hover:bg-gray-100'} rounded-md`}
            onClick={() => handleTabClick(tab)}
          >
            <div className="flex items-center">
              {tab === 'Leads' && <FaUserPlus className={`w-5 h-5 mr-2 ${activeTab === tab ? 'text-white' : 'text-black'}`} />}
              {tab === 'Calendar' && <HiCalendarDays className={`w-5 h-5 mr-2 ${activeTab === tab ? 'text-white' : 'text-black'}`} />}
              {tab === 'Customers' && <FaBookOpen className={`w-5 h-5 mr-2 ${activeTab === tab ? 'text-white' : 'text-black'}`} />}
              <span>{tab}</span>
            </div>
            <FaChevronRight className={`${activeTab === tab ? 'text-white' : 'text-black'}`} />
          </div>
        ))}

        {/* Bottom Tabs */}
        <div className="mt-[15rem]">
          {['Staff', 'ClinicProfile', 'Billing'].map((tab) => (
            <div
              key={tab}
              className={`flex justify-between items-center cursor-pointer p-2 mb-4 text-sm font-inter ${activeTab === tab ? 'text-white bg-[#007AFF]' : 'text-black hover:bg-gray-100'} rounded-md`}
              onClick={() => handleTabClick(tab)}
            >
              <div className="flex items-center">
                {tab === 'Staff' && <FaGraduationCap className={`w-5 h-5 mr-2 ${activeTab === tab ? 'text-white' : 'text-black'}`} />}
                {tab === 'ClinicProfile' && <HiHomeModern className={`w-5 h-5 mr-2 ${activeTab === tab ? 'text-white' : 'text-black'}`} />}
                {tab === 'Billing' && <HiWallet className={`w-5 h-5 mr-2 ${activeTab === tab ? 'text-white' : 'text-black'}`} />}
                <span>{tab === 'Billing' ? 'Billing & Subscription' : tab}</span>
              </div>
              <FaChevronRight className={`${activeTab === tab ? 'text-white' : 'text-black'}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay to close the sidebar */}
      {isSidebarOpen && (
        <div
          className="bg-black/60 backdrop-blur-sm mb:bg-transparent fixed inset-0 z-30"
          onClick={() => setIsSidebarOpen(false)} // Close the sidebar when overlay is clicked
        ></div>
      )}
    </div>
  );
};

export default Sidebar;


