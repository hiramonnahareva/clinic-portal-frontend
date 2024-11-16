// components/ClinicDashboard/DashboardPage.js
"use client";
import { useState, useEffect, SetStateAction } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import Leads from "./Leads";
import Calendar from "./Calendar";
import Customers from "./Customers";
import Staff from "./Staff";
import ClinicProfile from "./ClinicProfile";
import Billing from "./Billing";

const DashboardPage = ({ defaultTab = "Leads", content = null }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  const handleTabClick = (tabName: SetStateAction<string>) => {
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
        <div className="flex-1 bg-[#F1F5F9] p-6 max-h-screen overflow-auto">
          {content ? (
            content
          ) : (
            <>
              {activeTab === "Leads" && <Leads />}
              {activeTab === "Calendar" && <Calendar />}
              {activeTab === "Customers" && <Customers />}
              {activeTab === "Staff" && <Staff />}
              {activeTab === "ClinicProfile" && <ClinicProfile />}
              {activeTab === "Billing" && <Billing />}
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DashboardPage;
