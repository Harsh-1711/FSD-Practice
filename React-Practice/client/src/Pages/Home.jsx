import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    roll_no: "",
    course: "",
  });

  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (event) => {
    event.preventDefault();
    console.log("🚀 Form Data:", formData);

    try {
      const response = await axios.post(
        "http://localhost:8080/student/add",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data);
      toast.success("Student added successfully!");
      setFormData({ name: "", roll_no: "", course: "" });
    } catch (err) {
      if (err.response) {
        console.error("Backend Error:", err.response.data);
        toast.error(`${err.response.data.error || "Unknown error"}`);
      } else {
        console.error("Network/Client Error:", err.message);
        toast.error("Failed to add data! Check your network.");
      }
    }
  };

  const handleShowStudents = async (course) => {
    if (title === `${course} Students` && isVisible) {
      setIsVisible(false);
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8080/${course}`);
      console.log(`Fetched ${course} students:`, response.data);

      if (Array.isArray(response.data)) {
        setItems(response.data);
        setTitle(`${course} Students`);
        setIsVisible(true);
      } else {
        console.error("Unexpected data format", response.data);
        toast.error("Invalid data format received!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch students!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-gray-100 p-6">
      <Toaster />
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full  max-w-lg border-t-4 border-blue-500">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Add Student
        </h2>
        <form onSubmit={handleSave} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-400 rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">
              Roll No:
            </label>
            <input
              type="text"
              name="roll_no"
              value={formData.roll_no}
              onChange={handleChange}
              className="w-full p-3 border border-gray-400 rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Course:</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full p-3 border border-gray-400 rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-bold shadow-md transition cursor-pointer"
          >
            Add Student
          </button>
        </form>
      </div>

      {/* Show MCA & BCA Buttons */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={() => handleShowStudents("MCA")}
          className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md font-bold shadow-md transition cursor-pointer"
        >
          {title === "MCA Students" && isVisible
            ? "Hide MCA Students"
            : "Show MCA Students"}
        </button>

        <button
          onClick={() => handleShowStudents("BCA")}
          className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-md font-bold shadow-md transition cursor-pointer"
        >
          {title === "BCA Students" && isVisible
            ? "Hide BCA Students"
            : "Show BCA Students"}
        </button>
      </div>

      {/* Display Students */}
      {isVisible && items.length > 0 && (
        <div className="mt-8 w-full max-w-lg bg-white shadow-2xl rounded-lg p-6 border-t-4 border-green-500">
          <h2 className="text-xl font-bold text-center mb-4 text-gray-800">
            {title}
          </h2>
          <div className="flex justify-between text-center my-2 text-base font-bold">
            <span className="mx-2">Name</span>
            <span>Roll No.</span>
            <span className="mx-2">Course</span>
          </div>
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li
                key={index}
                className="p-4 bg-gray-100 rounded-lg shadow-sm flex justify-between items-center"
              >
                <span className="font-semibold">{item.name}</span>
                <span className="text-gray-700">{item.roll_no}</span>
                <span className="text-gray-500">{item.course}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
