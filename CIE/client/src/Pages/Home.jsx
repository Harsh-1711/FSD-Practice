import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const [students, setStudents] = useState([]);
  const [title, setTitle] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleShowStudents = async (course) => {
    if (title === `${course} Students` && isVisible) {
      setIsVisible(false);
      return;
    }
    try {
      const response = await axios.get(`http://localhost:8080/${course}`);
      const filteredData = response.data.map(
        ({ _id, __v, createdAt, updatedAt, ...rest }) => rest
      );

      setStudents(filteredData);
      setTitle(`${course} Students`);
      setIsVisible(true);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch students!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-6">
      <Toaster />

      <div className="flex flex-wrap gap-4 mt-6">
        {[
          { name: "MCA", color: "bg-green-500 hover:bg-green-600" },
          { name: "BCA", color: "bg-purple-500 hover:bg-purple-600" },
          { name: "MBA", color: "bg-blue-500 hover:bg-blue-600" },
          { name: "BBA", color: "bg-orange-500 hover:bg-orange-600" },
        ].map(({ name, color }) => (
          <button
            key={name}
            onClick={() => handleShowStudents(name)}
            className={`${color} text-white px-6 py-2 rounded-md font-bold shadow-md transition`}
          >
            {title === `${name} Students` && isVisible
              ? `Hide ${name} Students`
              : `Show ${name} Students`}
          </button>
        ))}
      </div>

      {/* Student Table */}
      {isVisible && students.length > 0 && (
        <div className="mt-6 w-full  bg-white shadow-lg rounded-lg p-6 border-t-4 border-green-500 overflow-x-auto">
          <h2 className="text-lg font-bold text-center text-gray-800 mb-4">
            {title}
          </h2>
          <table className="w-full border-collapse border border-gray-300 text-center">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="border p-2">Full Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Phone</th>
                <th className="border p-2">Address</th>
                <th className="border p-2">Course</th>
                <th className="border p-2">Year</th>
                <th className="border p-2">Section</th>
                <th className="border p-2">Last Attended (School / College)</th>
                <th className="border p-2">Last Studied (Stream / Course)</th>
                <th className="border p-2">Percentage (%)</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} className="border hover:bg-gray-100 transition">
                  <td className="border p-2">{student.name}</td>
                  <td className="border p-2">{student.email}</td>
                  <td className="border p-2">{student.phone}</td>
                  <td className="border p-2">{student.address}</td>
                  <td className="border p-2">{student.course}</td>
                  <td className="border p-2">{student.c_year}</td>
                  <td className="border p-2">{student.section}</td>
                  <td className="border p-2">{student.school}</td>
                  <td className="border p-2">{student.stream}</td>
                  <td className="border p-2">{student.percentage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
