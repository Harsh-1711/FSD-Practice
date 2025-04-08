import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const BBA = () => {
  const [students, setStudents] = useState([]);
  const [title, setTitle] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleShowStudents = async () => {
    if (title === `BBA Students` && isVisible) {
      setIsVisible(false);
      return;
    }
    try {
      const response = await axios.get(`http://localhost:8080/BBA`);
      const filteredData = response.data.map(
        ({ _id, __v, createdAt, updatedAt, ...rest }) => rest
      );

      setStudents(filteredData);
      setTitle(`BBA Students`);
      setIsVisible(true);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch students!");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-pink-500 via-green-400 to-blue-600 p-20 flex flex-col items-center justify-center border-8 border-dotted border-black">
      <Toaster />

      <div className="flex flex-wrap gap-8 mt-10">
        <button
          key="BBA"
          onClick={() => handleShowStudents()}
          className="text-white bg-red-600 hover:bg-purple-700 active:bg-yellow-400 px-10 py-4 rounded-full font-extrabold text-xl shadow-2xl border-4 border-black uppercase tracking-widest transform hover:rotate-6 transition-all duration-500"
        >
          {title === `BBA Students` && isVisible
            ? `HIDE BBA STUDENTS`
            : `SHOW BBA STUDENTS`}
        </button>
      </div>

      {isVisible && students.length > 0 && (
        <div className="mt-10 w-[90%] bg-yellow-100 border-8 border-black rounded-3xl p-12 shadow-2xl overflow-hidden hover:scale-105 transition-all duration-500">
          <h2 className="text-[35px] font-extrabold text-center text-red-800 tracking-wide leading-[4rem] mb-10 uppercase">
            {title}
          </h2>
          <div className="overflow-x-auto scrollbar scrollbar-thumb-red-600 scrollbar-track-gray-200">
            <table className="w-[150%] lg:w-full border-collapse border border-black bg-gradient-to-r from-blue-100 via-white to-yellow-100 shadow-xl">
              <thead>
                <tr className="bg-black text-white text-[18px] tracking-[2px] uppercase">
                  <th className="border border-black p-6">Full Name</th>
                  <th className="border border-black p-6">Email</th>
                  <th className="border border-black p-6">Phone</th>
                  <th className="border border-black p-6">Address</th>
                  <th className="border border-black p-6">Course</th>
                  <th className="border border-black p-6">Year</th>
                  <th className="border border-black p-6">Section</th>
                  <th className="border border-black p-6">Last Attended</th>
                  <th className="border border-black p-6">Last Studied</th>
                  <th className="border border-black p-6">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr
                    key={index}
                    className="border border-black hover:bg-green-300 hover:scale-110 transform transition-all duration-300"
                  >
                    <td className="border border-black p-6 text-red-600 font-extrabold text-lg italic">
                      {student.name}
                    </td>
                    <td className="border border-black p-6 text-blue-600 font-bold underline">
                      {student.email}
                    </td>
                    <td className="border border-black p-6 text-purple-600 font-mono">
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
                    <td className="border border-black p-6 text-green-700 italic">
                      {student.section}
                    </td>
                    <td className="border border-black p-6 text-indigo-600 font-semibold">
                      {student.school}
                    </td>
                    <td className="border border-black p-6 text-yellow-600 font-mono">
                      {student.stream}
                    </td>
                    <td className="border border-black p-6 text-teal-600 font-black text-xl">
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

export default BBA;
