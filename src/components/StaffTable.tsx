import Image from "next/image";
import React from "react";
import Delete from "./svgComponent/Delete";
import Edit from "./svgComponent/Edit";

// Define the type for each row of data
interface RowData {
  id: number;
  name: string;
  email: string;
  phone: string;  // Change this to string if phone numbers are strings
  role: string;
  status: boolean;
  imageUrl: string;
}


// Define the props type for the Table component
interface TableProps {
  userData: RowData[]; // Array of RowData
}

const StaffTable: React.FC<TableProps> = ({ userData }) => {
  return (
    <table className="overflow-auto table-auto min-w-full rounded-xl">
      <thead>
        {/* <tr class="bg-gray-50"> */}
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
      <tbody className="divide-y divide-gray-300">
        {/* <tr className="bg-white transition-all duration-500 ">
                                <td className=" px-5 py-3">
                                    <div className="flex items-center gap-3">
                                        <Image width={40} height={40} src="https://pagedone.io/asset/uploads/1697536419.png" alt="Floyd image" />
                                        <span className="ml-3 text-gray-600 text-sm font-normal">Mark Dsuza</span>
                                    </div>

                                </td>
                                <td className="p-5 whitespace-nowrap text-sm leading-6 font-normal text-gray-600"> markdsuza@gmail.com</td>
                                <td className="p-5 whitespace-nowrap text-sm leading-6 font-normal text-gray-600"> +1 416 123-2301</td>
                                <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-600">
                                    <div className="py-1.5 px-2.5 bg-blue-50 rounded-lg flex justify-center w-20 items-center gap-1 border border-blue-500">
                                        <span className="font-medium text-xs text-blue-600 ">Admin</span>
                                    </div>
                                </td>
                                <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input type="checkbox" defaultChecked className="sr-only peer" />
                                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full 
                                                peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full 
                                                rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
                                                after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                                                after:bg-white after:border-gray-300 after:border after:rounded-full 
                                                after:h-5 after:w-5 after:transition-all" />
                                    </label>
                                </td>

                                <td className="flex p-5 items-center gap-0.5">
                                    <button className="p-2  rounded-full bg-white group transition-all duration-500 hover:bg-[#007aff] flex item-center">
                                        <Edit/>
                                    </button>
                                    <button className="p-2 rounded-full bg-white group transition-all duration-500 hover:bg-red-600 flex item-center">
                                       <Delete/>
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-white transition-all duration-500 ">
                                <td className="px-5 py-3">
                                    <div className="flex items-center gap-3">
                                        <Image width={40} height={40} src="https://pagedone.io/asset/uploads/1697536435.png" alt="Savannah image" />
                                        <span className="ml-3 text-gray-600 text-sm font-normal">Josef Jennyfer</span>
                                    </div>
                                </td>
                                <td className="p-5 whitespace-nowrap text-sm leading-6 font-normal text-gray-600"> josefjennyfer@gmail.com </td>
                                <td className="p-5 whitespace-nowrap text-sm leading-6 font-normal text-gray-600"> +1 416 123-2301 </td>
                                <td className="p-5 whitespace-nowrap text-sm leading-6 font-normal text-gray-600">
                                    <div className="py-1.5 px-6.5 bg-emerald-50 rounded-lg flex w-[6rem] justify-center items-center gap-1 border border-emerald-500">
                                        <span className="font-medium text-xs text-emerald-600 ">Receptionist</span>
                                    </div>
                                </td>
                                <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
                                    </label>
                                </td>
                                <td className="flex p-5 items-center gap-0.5">
                                    <button className="p-2  rounded-full bg-white group transition-all duration-500 hover:bg-[#007aff] flex item-center">
                                        <Edit/>
                                    </button>
                                    <button className="p-2 rounded-full bg-white group transition-all duration-500 hover:bg-red-600 flex item-center">
                                       <Delete/>
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-white transition-all duration-500 ">
                                <td className="px-5 py-3 whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        <Image width={40} height={40} src="https://pagedone.io/asset/uploads/1697536451.png" alt="Cameron image" />
                                        <span className="ml-3 text-gray-600 text-sm font-normal">Romeo D Custa</span>
                                    </div>
                                </td>
                                <td className="p-5 whitespace-nowrap text-sm leading-6 font-normal text-gray-600"> romeodcusta@gmail.com </td>
                                <td className="p-5 whitespace-nowrap text-sm leading-6 font-normal text-gray-600"> +1 416 123-2301 </td>
                                <td className="p-5 whitespace-nowrap text-sm leading-6 font-normal text-gray-600">
                                    <div className="py-1.5 px-2.5 bg-amber-50 rounded-lg flex items-center justify-center w-[6rem] gap-1 border border-amber-500">
                                        <span className="font-medium text-xs text-amber-600 ">Optometrist</span>
                                    </div>
                                </td>
                                <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
                                    </label>
                                </td>
                                <td className="flex p-5 items-center gap-0.5">
                                    <button className="p-2  rounded-full bg-white group transition-all duration-500 hover:bg-[#007aff] flex item-center">
                                        <Edit/>
                                    </button>
                                    <button className="p-2 rounded-full bg-white group transition-all duration-500 hover:bg-red-600 flex item-center">
                                       <Delete/>
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-white transition-all duration-500 ">
                                <td className="px-5 py-3">
                                    <div className="flex items-center gap-3">
                                        <Image width={40} height={40} src="https://pagedone.io/asset/uploads/1697536466.png" alt="Darrell image" />
                                        <span className="ml-3 text-gray-600 text-sm font-normal">Anald Donald</span>
                                    </div>
                                </td>
                                <td className="p-5 whitespace-nowrap text-sm leading-6 font-normal text-gray-600"> analddonald@gmail.com</td>
                                <td className="p-5 whitespace-nowrap text-sm leading-6 font-normal text-gray-600"> +1 416 123-2301</td>
                                <td className="p-5 whitespace-nowrap text-sm leading-6 font-noraml text-gray-600">
                                    <div className="py-1.5 px-2.5 bg-amber-50 rounded-lg flex items-center justify-center w-[6rem] gap-1 border border-amber-500">
                                        <span className="font-medium text-xs text-amber-600 ">Optometrist</span>
                                    </div>
                                </td>
                                <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
                                    </label>
                                </td>
                                <td className="flex p-5 items-center gap-0.5">
                                    <button className="p-2  rounded-full bg-white group transition-all duration-500 hover:bg-[#007aff] flex item-center">
                                        <Edit/>
                                    </button>
                                    <button className="p-2 rounded-full bg-white group transition-all duration-500 hover:bg-red-600 flex item-center">
                                       <Delete/>
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-white transition-all duration-500 ">
                                <td className="px-5 py-3">
                                    <div className="flex items-center gap-3">
                                        <Image width={40} height={40} src="https://pagedone.io/asset/uploads/1697536479.png" alt="Laura image" />
                                        <span className="ml-3 text-gray-600 text-sm font-normal">Vicky Patel</span>
                                    </div>
                                </td>
                                <td className="p-5 whitespace-nowrap text-sm leading-6 font-normal text-gray-600"> vikcypatel@gmail.com</td>
                                <td className="p-5 whitespace-nowrap text-sm leading-6 font-normal text-gray-600"> +1 416 123-2301</td>
                                <td className="p-5 whitespace-nowrap text-sm leading-6 font-normal text-gray-600">
                                    <div className="py-1.5 px-2.5 bg-emerald-50 rounded-lg flex w-[6rem] justify-center items-center gap-1 border border-emerald-500">
                                        <span className="font-medium text-xs text-emerald-600 ">Receptionist</span>
                                    </div>
                                </td>
                                <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
                                    </label>
                                </td>
                                <td className="flex p-5 items-center gap-0.5">
                                    <button className="p-2  rounded-full bg-white group transition-all duration-500 hover:bg-[#007aff] flex item-center">
                                        <Edit/>
                                    </button>
                                    <button className="p-2 rounded-full bg-white group transition-all duration-500 hover:bg-red-600 flex item-center">
                                       <Delete/>
                                    </button>
                                </td>
                            </tr> */}

        {userData.map((user, index) => (
          <tr key={index} className="bg-white transition-all duration-500">
            <td className="px-5 py-3">
              <div className="flex items-center gap-3">
                <Image
                  width={40}
                  height={40}
                  src={user.imageUrl}
                  alt={`${user.name} image`}
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
                className={`py-1.5 px-2.5 rounded-lg flex items-center justify-center gap-1 border ${
                  user.role === "Admin"
                    ? "bg-blue-50 border-blue-500 text-blue-600"
                    : user.role === "Receptionist"
                    ? "bg-emerald-50 border-emerald-500 text-emerald-600"
                    : "bg-amber-50 border-amber-500 text-amber-600"
                }`}
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
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" />
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
        ))}
      </tbody>
    </table>
  );
};

export default StaffTable;
