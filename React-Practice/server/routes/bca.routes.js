const express = require("express");
const router = express.Router();
const bcaController = require("../Controllers/bcaController");

router.get("/BCA", bcaController.data);

module.exports = router;
