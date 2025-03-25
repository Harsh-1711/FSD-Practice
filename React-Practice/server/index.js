require("dotenv").config({ path: "./config/.env" });
require("./model/student");
const express = require("express");
const mongoose = require("mongoose");
const MCA = require("./routes/bca.routes.js");
const MBA = require("./routes/mca.routes.js");
const student = require("./routes/addStudents.routes.js");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;
const URL = process.env.MONGO_URL;

mongoose.connect(URL);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/", MCA);
app.use("/", MBA);
app.use("/student", student);

app.listen(process.env.PORT || 3001, (error) => {
  if (!error) {
    console.log(`Server is listening on port: ${PORT}`);
  } else {
    console.log("Error starting server:", error);
  }
});
