const QuickLink = require("../model/QuickLink.js");

const searchQuickLinks = async (req, res) => {
  const query = req.query.q;

  try {
    const links = await QuickLink.find({
      name: { $regex: query, $options: "i" },
    }).limit(5);

    res.json(links);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { searchQuickLinks };
