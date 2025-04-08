const axios = require("axios");

const weather = async (req, res) => {
  const { location } = req.query;

  try {
    // console.log(process.env.OPENWEATHER_API_KEY);
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: location,
          appid: process.env.OPENWEATHER_API_KEY,
          units: "metric",
        },
      }
    );
    res.json({ temp: response.data.main.temp });
  } catch (error) {
    console.error(
      "Weather fetch error:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Failed to fetch weather" });
  }
};

module.exports = { weather };
