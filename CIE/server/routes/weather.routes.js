const express = require("express");
const router = express.Router();
const { weather } = require("../Controllers/weatherController.js");

router.get("/weather", weather);

module.exports = router;
