const mongoose = require("mongoose");

const quickLinkSchema = new mongoose.Schema({
  name: String,
  icon: String,
  url: String,
});

module.exports = mongoose.model("QuickLink", quickLinkSchema);
