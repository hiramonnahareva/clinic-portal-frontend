// components/Leads.js
"use client";

import Link from "next/link";
import StaffTable from "@/components/StaffTable"; 

const Staff = () => {
  const users = [
    {
      id: 1,
      name: "Mark Dsuza",
      email: "markdsuza@gmail.com",
      phone: "+1 416 123-2301",
      role: "Admin",
      imageUrl: "https://pagedone.io/asset/uploads/1697536419.png",
      status: true,
    },
    {
      id: 2,
      name: "Josef Jennyfer",
      email: "josefjennyfer@gmail.com",
      phone: "+1 416 123-2301",
      role: "Receptionist",
      imageUrl: "https://pagedone.io/asset/uploads/1697536435.png",
      status: false,
    },
    {
      id: 3,
      name: "Romeo D Custa",
      email: "romeodcusta@gmail.com",
      phone: "+1 416 123-2301",
      role: "Optometrist",
      imageUrl: "https://pagedone.io/asset/uploads/1697536451.png",
      status: false,
    },
    {
      id: 4,
      name: "Anald Donald",
      email: "analddonald@gmail.com",
      phone: "+1 416 123-2301",
      role: "Optometrist",
      imageUrl: "https://pagedone.io/asset/uploads/1697536466.png",
      status: false,
    },
    {
      id: 5,
      name: "Vicky Patel",
      email: "vikcypatel@gmail.com",
      phone: "+1 416 123-2301",
      role: "Receptionist",
      imageUrl: "https://pagedone.io/asset/uploads/1697536479.png",
      status: false,
    },
  ];

  return (
    <>
      {/* New Leads */}
      <div className="bg-white p-6 rounded shadow mb-[4rem]">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">All Staff Members</h2>
          <div className="flex items-center">
            <Link href="/add-staff">
              <button className="bg-[#007aff] hover:bg-blue-700 text-white py-2 px-4 rounded">
                Add New Clinic Member
              </button>
            </Link>
          </div>
        </div>

        {/* Horizontal line */}
        <div className="w-full border-t border-gray-300 my-2"></div>

        {/* Info Text */}
        <p className="text-gray-500 text-sm mb-6 mt-6">All Staff Member list</p>

        {/* Table Section */}
        <div className="overflow-hidden  rounded-lg">
          {/* <table className="table-auto min-w-full rounded-xl">
            <thead>
              <tr className="border-b border-gray-300">
                <th
                  scope="col"
                  className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                >
                  {" "}
                  USER{" "}
                </th>
                <th
                  scope="col"
                  className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize min-w-[150px]"
                >
                  {" "}
                  EMAIL{" "}
                </th>
                <th
                  scope="col"
                  className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                >
                  {" "}
                  PHONE{" "}
                </th>
                <th
                  scope="col"
                  className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                >
                  {" "}
                  ROLE{" "}
                </th>
                <th
                  scope="col"
                  className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                >
                  {" "}
                  STATUS{" "}
                </th>
                <th
                  scope="col"
                  className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                >
                  {" "}
                  ACTION{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                // Define dynamic role colors
                let roleColor = "";
                if (user.role === "Receptionist") {
                  roleColor =
                    "bg-green-100 text-green-600 border border-green-600";
                } else if (user.role === "Optometrist") {
                  roleColor =
                    "bg-yellow-100 text-yellow-600 border border-yellow-600";
                } else {
                  roleColor = "bg-blue-50 text-blue-600 border border-blue-600"; // Default color
                }

                return (
                  <tr
                    key={user.id}
                    className="bg-white transition-all duration-500"
                  >
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <Image
                          src={user.image}
                          alt={`${user.name} image`}
                          width={40}
                          height={40}
                        />
                        <span className="ml-3 text-gray-600 text-sm font-normal">
                          {user.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-normal text-gray-600">
                      {user.email}
                    </td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-normal text-gray-600">
                      {user.phone}
                    </td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-normal text-gray-600">
                      <div
                        className={`py-1.5 px-2.5 ${roleColor} rounded-lg flex justify-center w-20 items-center gap-1 border`}
                      >
                        <span className="font-medium text-xs">{user.role}</span>
                      </div>
                    </td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked={user.status}
                          className="hidden peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" />
                      </label>
                    </td>
                    <td className="flex p-5 items-center gap-0.5">
                      <button className="p-2 rounded-full bg-white group transition-all duration-500 hover:bg-[#007aff] flex item-center">
                        <Edit />
                      </button>
                      <button className="p-2 rounded-full bg-white group transition-all duration-500 hover:bg-red-600 flex item-center">
                        <Delete />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table> */}
          <StaffTable userData={users} />
        </div>
      </div>
    </>
  );
};

export default Staff;
