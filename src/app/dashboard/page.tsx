"use client";
import { useState } from 'react';
import Navbar from '@/components/Dashboard/Navbar';
import Sidebar from '@/components/Dashboard/Sidebar';
import Footer from '@/components/common/Footer';
// 
import Analytics from '@/components/Dashboard/Analytics'; // Import the Analytics component
import Clinics from '@/components/Dashboard/Clinics'; // Import the Analytics component

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('Analytics');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar 
          activeTab={activeTab} 
          handleTabClick={handleTabClick} 
          isSidebarOpen={isSidebarOpen} 
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* Body Section */}
        <div className={`flex-1 bg-[#F1F5F9] p-6 max-h-screen overflow-auto`}>
          {activeTab === 'Analytics' && <Analytics />} {/* Render Analytics component when tab is "Analytics" */}
          {activeTab === 'Clinics' && <Clinics />} {/* Render Analytics component when tab is "Analytics" */}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DashboardPage;
