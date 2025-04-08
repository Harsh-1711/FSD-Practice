import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const MCA = () => {
  const [students, setStudents] = useState([]);
  const [title, setTitle] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleShowStudents = async () => {
    if (title === `MCA Students` && isVisible) {
      setIsVisible(false);
      return;
    }
    try {
      const response = await axios.get(`http://localhost:8080/MCA`);
      const filteredData = response.data.map(
        ({ _id, __v, createdAt, updatedAt, ...rest }) => rest
      );

      setStudents(filteredData);
      setTitle(`MCA Students`);
      setIsVisible(true);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch students!");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-700 to-yellow-300 flex flex-col items-center justify-center p-16 border-[20px] border-dashed border-black">
      <Toaster />

      <div className="flex flex-wrap gap-6 mt-10">
        <button
          key="MCA"
          onClick={() => handleShowStudents()}
          className="text-black bg-yellow-500 hover:bg-red-700 active:bg-blue-500 px-14 py-5 rounded-[50px] font-extrabold text-2xl shadow-[10px_10px_0px_black] border-8 border-black tracking-[5px] transform hover:skew-y-6 transition-all duration-700"
        >
          {title === `MCA Students` && isVisible
            ? `HIDE MCA STUDENTS`
            : `SHOW MCA STUDENTS`}
        </button>
      </div>

      {isVisible && students.length > 0 && (
        <div className="mt-12 w-[95%] bg-pink-200 border-8 border-black rounded-[40px] p-14 shadow-2xl hover:scale-105 transition-all duration-700 overflow-x-auto">
          <h2 className="text-[40px] font-black text-center text-blue-800 tracking-[8px] mb-12 uppercase">
            {title}
          </h2>
          <div className="overflow-x-auto scrollbar scrollbar-thumb-black scrollbar-track-gray-400">
            <table className="w-[200%] lg:w-full border-collapse border border-black bg-gradient-to-r from-red-200 via-white to-blue-200 shadow-2xl">
              <thead>
                <tr className="bg-black text-white text-[20px] tracking-[4px] uppercase">
                  <th className="border border-black p-8">Full Name</th>
                  <th className="border border-black p-8">Email</th>
                  <th className="border border-black p-8">Phone</th>
                  <th className="border border-black p-8">Address</th>
                  <th className="border border-black p-8">Course</th>
                  <th className="border border-black p-8">Year</th>
                  <th className="border border-black p-8">Section</th>
                  <th className="border border-black p-8">Last Attended</th>
                  <th className="border border-black p-8">Last Studied</th>
                  <th className="border border-black p-8">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr
                    key={index}
                    className="border border-black hover:bg-green-400 hover:scale-110 transform transition-all duration-500"
                  >
                    <td className="border border-black p-6 text-red-700 font-black text-2xl italic">
                      {student.name}
                    </td>
                    <td className="border border-black p-6 text-blue-700 font-bold underline">
                      {student.email}
                    </td>
                    <td className="border border-black p-6 text-purple-700 font-mono">
                      {student.phone}
                    </td>
                    <td className="border border-black p-6 text-pink-700 font-serif">
                      {student.address}
                    </td>
                    <td className="border border-black p-6 text-gray-900 font-bold uppercase">
                      {student.course}
                    </td>
                    <td className="border border-black p-6 text-orange-600">
                      {student.c_year}
                    </td>
                    <td className="border border-black p-6 text-green-600 italic">
                      {student.section}
                    </td>
                    <td className="border border-black p-6 text-indigo-700 font-semibold">
                      {student.school}
                    </td>
                    <td className="border border-black p-6 text-yellow-700 font-mono">
                      {student.stream}
                    </td>
                    <td className="border border-black p-6 text-teal-700 font-black text-3xl">
                      {student.percentage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MCA;
