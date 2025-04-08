const express = require("express");
const router = express.Router();
const { searchQuickLinks } = require("../Controllers/quickLinkController.js");

router.get("/search", searchQuickLinks);

module.exports = router;
