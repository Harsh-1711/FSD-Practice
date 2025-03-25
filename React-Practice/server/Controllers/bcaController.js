const User = require("../model/student");

exports.data = async (req, res) => {
  try {
    const students = await User.find({ course: "BCA" });

    console.log("Students in BCA course:", students);

    if (students.length === 0) {
      return res
        .status(404)
        .json({ message: "No students found with roll_no 101" });
    }

    res.json(students);
  } catch (error) {
    console.error("Error fetching BCA students:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
