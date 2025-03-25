const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    roll_no: {
      type: String,
      required: true,
      unique: true,
    },
    course: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Students", studentSchema);
module.exports = User;
