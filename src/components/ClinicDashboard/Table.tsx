// import React from 'react';
import Edit from '../svgComponent/Edit';
import Eye from '../svgComponent/Eye';
import Delete from '../svgComponent/Delete';

const appointments = [
  {
    user: "Mark Dssuza",
    dateTime: "01 November 2024 | 06:00 PM",
    phone: "+1 647 123 - 2301",
    appointmentId: "# 0-123-45601",
    optometrist: { name: "Dr.Sarvi", colorClass: "bg-blue-50 border-blue-500 text-blue-600" },
  },
  {
    user: "Jossef Jennyfer",
    dateTime: "01 November 2024 | 06:00 PM",
    phone: "+1 647 123 - 2301",
    appointmentId: "# 0-123-45601",
    optometrist: { name: "Dr.Peter", colorClass: "bg-emerald-50 border-emerald-500 text-blue-600" },
  },
  {
    user: "Romeo D Custa",
    dateTime: "01 November 2024 | 06:00 PM",
    phone: "+1 647 123 - 2301",
    appointmentId: "# 0-123-45601",
    optometrist: { name: "Dr.Eric", colorClass: "bg-amber-50 border-amber-500 text-amber-600" },
  },
  {
    user: "Anald Donald",
    dateTime: "01 November 2024 | 06:00 PM",
    phone: "+1 647 123 - 2301",
    appointmentId: "# 0-123-45601",
    optometrist: { name: "Dr.Eric", colorClass: "bg-amber-50 border-amber-500 text-amber-600" },
  },
  {
    user: "Vicky Patel",
    dateTime: "01 November 2024 | 06:00 PM",
    phone: "+1 647 123 - 2301",
    appointmentId: "# 0-123-45601",
    optometrist: { name: "Dr.Peter", colorClass: "bg-emerald-50 border-emerald-500 text-blue-600" }, 
  },
]; 
 // Define types for the props
interface TableProps {
  toggleModal: () => void; // toggleModal is a function that returns void
} 

const Table: React.FC<TableProps> = ({ toggleModal }) => {
 
  return (
    <table className="table-auto min-w-full rounded-xl">
      <thead>
        <tr className="border-b border-gray-300"> 
          <th className="p-5 text-left text-sm font-semibold text-gray-900">USER</th>
          <th className="p-5 text-left text-sm font-semibold text-gray-900">Date | Time</th>
          <th className="p-5 text-left text-sm font-semibold text-gray-900">Phone</th>
          <th className="p-5 text-left text-sm font-semibold text-gray-900">Appointment #ID</th>
          <th className="p-5 text-left text-sm font-semibold text-gray-900">Optometrist</th>
          <th className="p-5 text-left text-sm font-semibold text-gray-900">ACTION</th>
        </tr>
      </thead> 
      <tbody className="divide-y divide-gray-300">
        {appointments.map((appointment, index) => (
          <tr key={index} className="bg-white transition-all duration-500">
            <td className="p-5 text-sm font-medium text-gray-600">{appointment.user}</td>
            <td className="p-5 text-sm font-medium text-gray-600">{appointment.dateTime}</td>
            <td className="p-5 text-sm font-medium text-gray-600">{appointment.phone}</td>
            <td className="p-5 text-sm font-medium text-gray-600">{appointment.appointmentId}</td>
            <td className="p-5">
              <div className={`py-1.5 px-2.5 rounded-lg flex justify-center items-center w-20 gap-1 ${appointment.optometrist.colorClass} border`}>
                <span className="font-medium text-xs">{appointment.optometrist.name}</span>
              </div>
            </td>
            <td className="p-5 ">
             <div className="flex gap-1">
             <button className="p-1 bg-white border  border-blue-500 group transition duration-300 hover:bg-blue-500">
                <Edit />
              </button>
              <button className="p-1 bg-white border border-[#06B6D4] group transition duration-300 hover:bg-[#06B6D4]" onClick={toggleModal}>
                <Eye />
              </button>
              <button className="p-1 bg-white border border-red-500 group transition duration-300 hover:bg-red-500">
                <Delete />
              </button>
             </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
