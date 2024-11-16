// components/Navbar.js
"use client";

import Image from 'next/image';
import { FaBars, } from 'react-icons/fa'; // Importing the hamburger and bell icons
import BgIcon from '../../assets/Bg.png';
import UserImage from '../../assets/userImage.png';
import { GoBell } from 'react-icons/go';


// Define types for the props
interface NavbarProps {
  toggleSidebar: () => void;  // Define toggleSidebar as a function with no arguments and no return value
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
 
  return (
    <div className="bg-white lg:ml-[16rem] pl-6 relative shadow-md flex items-center justify-between z-50 p-2 border-b border-gray-300">
      
      {/* Left Image */}
      <div className="flex items-center">
        <Image
          src={BgIcon}
          alt="User"
          width={40}
          height={40}
          className="mr-2 rounded-full border-none border-gray-300"
        />
      </div>
      
      {/* Hamburger Icon for small screens */}
      <div className="md:hidden flex items-center">
        <FaBars onClick={toggleSidebar} className="text-gray-700 cursor-pointer" size={24} />
      </div>
      
      {/* Right-Side Icons */}
      <div className="flex items-center ml-auto space-x-4">
        
        {/* Notification Icon with Badge */}
        <div className="relative flex items-center">
        <GoBell className="text-gray-700 cursor-pointer" size={24} />
        {/* Notification Badge */}
        <span className="absolute top-0 right-0 text-[10px] font-semibold text-white bg-red-500 rounded-full w-3 h-3 flex items-center justify-center">5</span>
        </div>

        
        {/* User Image */}
        <div className="flex items-center">
          <Image
            src={UserImage}
            alt="User"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        
      </div>
      
    </div>
  );
};

export default Navbar;
