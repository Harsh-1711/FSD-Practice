const User = require("../model/student");

exports.add = async (req, res) => {
  try {
    console.log("Incoming Request Body:", req.body);

    const { name, roll_no, course } = req.body;

    if (!name || !roll_no || !course) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingStudent = await User.findOne({ roll_no, course });
    if (existingStudent) {
      return res
        .status(400)
        .json({
          error: "A student with this Roll No. and Course already exists",
        });
    }

    const newStudent = new User({ name, roll_no, course });
    await newStudent.save();

    console.log("✅ Student added:", newStudent);
    res
      .status(201)
      .json({ message: "Student added successfully", user: newStudent });
  } catch (err) {
    console.error("❌ Error adding student:", err);
    res
      .status(500)
      .json({ error: "Error inserting user", details: err.message });
  }
};
