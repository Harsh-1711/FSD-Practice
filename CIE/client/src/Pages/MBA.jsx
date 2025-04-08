import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const MBA = () => {
  const [students, setStudents] = useState([]);
  const [title, setTitle] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      if (title === "List of MBA Students" && isVisible) {
        setIsVisible(false);
        return;
      }

      try {
        const response = await axios.get("http://localhost:8080/MBA");
        const filteredData = response.data.map(
          ({ _id, __v, createdAt, updatedAt, ...rest }) => rest
        );

        setStudents(filteredData);
        setTitle("MBA Students");
        setIsVisible(true);
      } catch (err) {
        toast.error(err.response?.data?.message || "Failed to fetch students!");
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 p-10 flex justify-center items-center">
      <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] bg-white shadow-2xl border-[10px] border-dashed border-black rounded-3xl p-16">
        <h2 className="text-[32px] font-extrabold text-center text-blue-900 tracking-wide leading-[4rem] mb-12">
          {title}
        </h2>
        <div className="overflow-x-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
          <table className="w-[200%] lg:w-full border-collapse border border-black bg-gradient-to-bl from-gray-200 to-gray-50 shadow-xl">
            <thead>
              <tr className="bg-black text-white uppercase tracking-[0.3em] text-[14px]">
                <th className="border border-black p-4">Full Name</th>
                <th className="border border-black p-4">Email</th>
                <th className="border border-black p-4">Phone</th>
                <th className="border border-black p-4">Address</th>
                <th className="border border-black p-4">Course</th>
                <th className="border border-black p-4">Year</th>
                <th className="border border-black p-4">Section</th>
                <th className="border border-black p-4">Last Attended</th>
                <th className="border border-black p-4">Last Studied</th>
                <th className="border border-black p-4">Percentage</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr
                  key={index}
                  className="border border-black hover:bg-yellow-400 hover:scale-105 transform transition-all duration-300"
                >
                  <td className="border border-black p-4 text-red-600 font-semibold">
                    {student.name}
                  </td>
                  <td className="border border-black p-4 text-blue-600 italic">
                    {student.email}
                  </td>
                  <td className="border border-black p-4 text-green-600">
                    {student.phone}
                  </td>
                  <td className="border border-black p-4 text-purple-600">
                    {student.address}
                  </td>
                  <td className="border border-black p-4 text-gray-800">
                    {student.course}
                  </td>
                  <td className="border border-black p-4 text-orange-600">
                    {student.c_year}
                  </td>
                  <td className="border border-black p-4 text-indigo-600">
                    {student.section}
                  </td>
                  <td className="border border-black p-4 text-pink-600">
                    {student.school}
                  </td>
                  <td className="border border-black p-4 text-yellow-600">
                    {student.stream}
                  </td>
                  <td className="border border-black p-4 text-teal-600 font-bold">
                    {student.percentage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default MBA;
