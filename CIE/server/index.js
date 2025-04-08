require("dotenv").config({ path: "./config/.env" });
require("./model/student");
const express = require("express");
const mongoose = require("mongoose");
const weatherRoute = require("./routes/weather.routes.js");
const STUDENT = require("./routes/students.routes.js");
const QuickLink = require("./routes/quickLinks.routes.js");
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

app.use("/", STUDENT);
app.use("/api/quicklinks", QuickLink);
app.use("/api", weatherRoute);

app.listen(process.env.PORT || 3001, (error) => {
  if (!error) {
    console.log(`Server is listening on port: ${PORT}`);
  } else {
    console.log("Error starting server:", error);
  }
});
