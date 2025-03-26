const express = require("express");
const router = express.Router();
const stdController = require("../Controllers/studentController");
const bcaController = require("../Controllers/bcaController");
const mcaController = require("../Controllers/mcaController");

router.get("/MCA", mcaController.data);
router.get("/BCA", bcaController.data);
router.post("/student/add", stdController.add);

module.exports = router;
