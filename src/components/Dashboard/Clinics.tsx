/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useState } from "react";
import Close from "../svgComponent/Close";
import Pagination from "./Pagination";
import Search from "../svgComponent/Search";
import Table from "../Table";

const clinics = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const data = [
    {
      id: "20010510",
      image: "https://pagedone.io/asset/uploads/1697536419.png",
      role: "Customer",
      category: "Accessories",
      status: "Trial",
      isActive: false,
    },
    {
      id: "20010511",
      image: "https://pagedone.io/asset/uploads/1697536435.png",
      role: "Partner",
      category: "Electronics",
      status: "Paid",
      isActive: false,
    },
    {
      id: "20010512",
      image: "https://pagedone.io/asset/uploads/1697536451.png",
      role: "Customer",
      category: "Telecommunications",
      status: "Due",
      isActive: false,
    },
    {
      id: "20010513",
      image: "https://pagedone.io/asset/uploads/1697536466.png",
      role: "Reseller",
      category: "Retail",
      status: "Due",
      isActive: false,
    },
    {
      id: "20010514",
      image: "https://pagedone.io/asset/uploads/1697536479.png",
      role: "Reseller",
      category: "Finance",
      status: "Paid",
      isActive: false,
    },
    {
      id: "20010515",
      image: "https://pagedone.io/asset/uploads/1697536494.png",
      role: "Partner",
      category: "Entertainment",
      status: "Due",
      isActive: false,
    },
    {
      id: "20010516",
      image: "https://pagedone.io/asset/uploads/1697536512.png",
      role: "Customer",
      category: "Electronics",
      status: "Due",
      isActive: false,
    },
  ];

  const totalPages = 78; 

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <section className="p-5 border rounded-lg border-gray-300 bg-white mb-20">
        <div className="flex flex-col">
          <div className=" overflow-x-auto pb-4">
            <div className="min-w-full inline-block align-middle">
              <div className="border-b border-gray-300 flex justify-between py-2">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Search />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full py-3 px-4 ps-10 text-sm text-gray-900 focus:outline-none"
                    placeholder="Search..."
                    required
                  />
                </div>
                <button
                  className="bg-[#007aff] hover:bg-blue-700 text-white py-1 px-4 rounded"
                  onClick={() => {
                    //
                    setIsModalVisible(true);
                  }}
                >
                  Add New Clinic
                </button>
              </div>
              <div className="p-5">
                Total Clinics:{" "}
                <span className="text-emerald-500 font-bold">8</span>
              </div>
              <div className="overflow-hidden  rounded-lg">
                {/* <table className="table-auto min-w-full rounded-xl">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th
                        scope="col"
                        className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                      >
                        {" "}
                        CLINIC ID{" "}
                      </th>
                      <th
                        scope="col"
                        className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                      >
                        {" "}
                        LOGO{" "}
                      </th>
                      <th
                        scope="col"
                        className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize min-w-[150px]"
                      >
                        {" "}
                        CLINIC NAME{" "}
                      </th>
                      <th
                        scope="col"
                        className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                      >
                        {" "}
                        EMAIL{" "}
                      </th>
                      <th
                        scope="col"
                        className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                      >
                        {" "}
                        SUBSCRIPTION{" "}
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
                        Actions{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-300">
                    {data.map((row) => (
                      <tr
                        key={row.id}
                        className="bg-white transition-all duration-500"
                      >
                        <td className="p-5 text-sm font-medium text-gray-900">
                          {row.id}
                        </td>
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-3">
                            <Image
                              width={40}
                              height={40}
                              src={row.image}
                              alt={`${row.role} image`}
                            />
                          </div>
                        </td>
                        <td className="p-5 text-sm font-medium text-gray-900">
                          {row.role}
                        </td>
                        <td className="p-5 text-sm font-medium text-gray-900">
                          {row.category}
                        </td>
                        <td className="p-5 text-sm font-medium text-gray-900">
                          <div
                            className={`py-1.5 px-2.5 rounded-lg flex justify-center w-20 items-center gap-1 border ${
                              row.status === "Paid"
                                ? "bg-emerald-50 border-emerald-500"
                                : row.status === "Trial"
                                ? "bg-blue-50 border-blue-500"
                                : "bg-amber-50 border-amber-500"
                            }`}
                          >
                            <span
                              className={`font-medium text-xs ${
                                row.status === "Paid"
                                  ? "bg-emerald-50 border-emerald-500 text-emerald-600"
                                  : row.status === "Trial"
                                  ? "bg-blue-50 border-blue-500 text-blue-600"
                                  : "bg-amber-50 border-amber-500 text-amber-600"
                              }`}
                            >
                              {row.status}
                            </span>
                          </div>
                        </td>
                        <td className="p-5 text-sm font-medium text-gray-900">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              defaultChecked={row.isActive}
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
                    ))}
                  </tbody>
                </table>  */}

                <Table 
                data={data}
                />
              </div>
              
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </section>

      {isModalVisible && (
        <div className="fixed inset-0 z-50 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
          {/* overlay */}
          <div
            aria-hidden="true"
            className="fixed inset-0 w-full h-full bg-black/50 cursor-pointer"
            onClick={() => setIsModalVisible(false)}
          ></div>
          {/* Modal */}
          <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
            <div className="w-full py-2 bg-white cursor-default pointer-events-auto relative rounded-xl mx-auto max-w-xl">
              <button
                type="button"
                className="absolute top-2 right-2 rtl:right-auto rtl:left-2"
                onClick={() => setIsModalVisible(false)}
              >
                <Close />
                <span className="sr-only">Close</span>
              </button>
              <div className="space-y-2 p-2">
                <div className="p-2 space-y-2 ">
                  <p className="text-gray-500">Creating New Clilinc Account</p>
                </div>
              </div>
              <div className="space-y-2">
                <div
                  aria-hidden="true"
                  className="border-t border-gray-700 px-2"
                />
                <div className="grid grid-cols-1 place-items-center px-4 py-2">
                  <form noValidate className="space-y-4 w-full">
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-inter text-[#475569]"
                      >
                        Clinic Name
                      </label>
                      <input
                        name="email"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#142D63] focus:border-[#142D63]"
                      />
                    </div>
                  </form>
                </div>
                <div
                  aria-hidden="true"
                  className="border-b border-gray-700 px-2"
                />
                <div className="px-6 py-2">
                  <div className="flex justify-between">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none min-h-[2.25rem] px-4 text-sm  bg-[#94a3b8] text-white "
                      onClick={() => setIsModalVisible(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none min-h-[2.25rem] px-4 text-sm text-white shadow border-transparent bg-[#007aff] focus:bg-[#11071F] focus:ring-offset-[#11071F]"
                    >
                      <span className="flex items-center gap-1">
                        <span>Save</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default clinics;
