import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    course: "",
    c_year: "",
    section: "",
    school: "",
    stream: "",
    percentage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/student/add", formData, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success("Student added successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        course: "",
        c_year: "",
        section: "",
        school: "",
        stream: "",
        percentage: "",
      });
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to add student!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-100 to-blue-200 p-6">
      <Toaster />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-2xl border-l-8 border-blue-600"
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          🎓 Add Student
        </h2>
        <form onSubmit={handleSave} className="grid grid-cols-1 gap-4">
          {[
            { name: "name", label: "Full Name" },
            { name: "email", label: "Email Address" },
            { name: "phone", label: "Phone Number" },
            { name: "address", label: "Home Address" },
            { name: "course", label: "Course Enrolled" },
            { name: "c_year", label: "Current Year" },
            { name: "section", label: "Section" },
            { name: "school", label: "Last attended School / College" },
            { name: "stream", label: "Stream / Course" },
            {
              name: "percentage",
              label: "Percentage obtained in last attended Institute",
            },
          ].map((field, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="col-span-1"
            >
              <label className="block text-gray-700 font-semibold">
                {field.label}:
              </label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </motion.div>
          ))}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold shadow-lg transition mt-4"
          >
            Add Student
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default StudentForm;
