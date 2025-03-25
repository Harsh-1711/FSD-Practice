const express = require("express");
const router = express.Router();
const stdController = require("../Controllers/studentController");

router.post("/add", stdController.add);

module.exports = router;
