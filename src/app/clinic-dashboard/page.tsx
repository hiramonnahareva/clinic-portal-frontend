// components/ClinicDashboard/DashboardPage.js
"use client";
import { useState } from 'react';
import Navbar from '@/components/ClinicDashboard/Navbar';
import Sidebar from '@/components/ClinicDashboard/Sidebar';
import Leads from '@/components/ClinicDashboard/Leads';
import Calendar from '@/components/ClinicDashboard/Calendar';
import Customers from '@/components/ClinicDashboard/Customers';
import Staff from '@/components/ClinicDashboard/Staff';
import ClinicProfile from '@/components/ClinicDashboard/ClinicProfile';
import Billing from '@/components/ClinicDashboard/Billing';
import Footer from '@/components/common/Footer';

const DashboardPage = () => {
  // Set the default active tab to 'Leads'
  const [activeTab, setActiveTab] = useState('Leads');
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

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar 
          activeTab={activeTab} 
          handleTabClick={handleTabClick} 
          isSidebarOpen={isSidebarOpen} 
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* Body Section */}
        <div className={`flex-1 bg-[#F1F5F9] p-6 max-h-screen overflow-auto`}>
          {activeTab === 'Leads' && <Leads />}
          {activeTab === 'Calendar' && <Calendar />}
          {activeTab === 'Customers' && <Customers />}
          {activeTab === 'Staff' && <Staff />}
          {activeTab === 'ClinicProfile' && <ClinicProfile />}
          {activeTab === 'Billing' && <Billing />}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DashboardPage; 
