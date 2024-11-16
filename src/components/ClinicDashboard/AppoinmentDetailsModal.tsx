"use client";

// Define the prop types using an interface
interface AddStaffModalProps {
  isOpen: boolean;
  onClose: () => void; // onClose is a function that doesn't return anything
}

const AppoinmentDetailsModal: React.FC<AddStaffModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Do not render the modal if not open

  return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl md:max-w-6xl p-4 md:p-6 mx-4">
            {/* Modal Header */}
            <h3 className="text-xl font-semibold mb-4">Appointment Details</h3>
            <hr className="mb-6" />

            {/* Modal Body */}
            <div className="grid grid-cols-1 md:grid-cols-[8fr_5fr_3fr] gap-4 md:gap-8">
              {/* Column 1 */}
              <div className="space-y-3">
                <h4 className="text-gray-700">All Appointment Details</h4>

                <label className="font-semibold block text-gray-600">Customer Name</label>
                <input
                  type="text"
                  placeholder="Customer Name"
                  className="w-full border border-gray-300 rounded-md p-2"
                />

                <label className="font-semibold block text-gray-600">Customer Date of Birth</label>
                <input
                  type="text"
                  placeholder="Customer date of birth"
                  className="w-full border border-gray-300 rounded-md p-2"
                />

                <label className="font-semibold block text-gray-600">Customer Email Address</label>
                <input
                  type="email"
                  placeholder="Customer email"
                  className="w-full border border-gray-300 rounded-md p-2"
                />

                <label className="font-semibold block text-gray-600">Phone</label>
                <input
                  type="tel"
                  placeholder="+1 647 123 - 2301"
                  className="w-full border border-gray-300 rounded-md p-2"
                />

                <h4 className="font-semibold text-gray-700">Appointment Type</h4>
                <button className="w-1/2 md:w-[35%] font-semibold py-2 bg-[#30B0C7] text-white rounded-md">
                  Eye Exam Only
                </button>
              </div>

              {/* Column 2 */}
              <div className="space-y-5 mt-4 md:mt-10">
                <label className="block text-gray-600">Appointment #ID</label>
                <p className="text-black font-bold"># 0-123-45601</p>

                <label className="block text-gray-600">Appointment Date</label>
                <p className="text-black font-bold">01 Nov 2024</p>

                <label className="block text-gray-600">Appointment Time</label>
                <p className="text-black font-bold">10:30AM - 11:00AM</p>

                <button className="w-full py-2 bg-[#007AFF] text-white rounded-md hover:bg-blue-600">
                  Change Appointment Date | Time
                </button>

                <p className="text-gray-600 text-sm">Optometrist Assigned To:</p>
                <div className="py-1.5 px-2.5 bg-blue-50 rounded-lg flex justify-center w-20 items-center gap-1 border border-blue-500">
                            <span className="font-medium text-xs text-blue-600 ">Dr.Sarvi</span>
                        </div>

                <button className="w-full py-2 bg-[#007AFF] text-white rounded-md hover:bg-blue-600">
                  Change Optometrist Assigned
                </button>
              </div>

              {/* Column 3 */}
              <div className="flex md:flex-row justify-end items-center md:items-end mt-4 md:mt-0 space-x-2 md:space-x-4 md:space-y-4">
                <button
                  className="w-[20%] md:w-[30%] py-2 bg-gray-200 text-gray-700 rounded-md text-sm"
                  onClick={onClose}
                  >
                  Cancel
                </button>
                <button className="w-[20%] md:w-[30%] py-2 bg-[#007AFF] text-white rounded-md text-sm hover:bg-blue-600">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      
  );
};

export default AppoinmentDetailsModal;
