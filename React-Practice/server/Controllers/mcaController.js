const User = require("../model/student");

exports.data = async (req, res) => {
  try {
    const students = await User.find({ course: "MCA" });

    // console.log("Students in MCA course:", students);

    if (students.length === 0) {
      return res
        .status(404)
        .json({ message: "No students found with course MCA" });
    }

    res.status(201).json(students);
  } catch (error) {
    console.error("Error fetching MCA students:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
