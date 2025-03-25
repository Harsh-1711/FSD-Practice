const express = require("express");
const router = express.Router();
const mcaController = require("../Controllers/mcaController");

router.get("/MCA", mcaController.data);
module.exports = router;
