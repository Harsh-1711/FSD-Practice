import React, { useEffect, useState } from "react";
import { FaUserCircle, FaCog } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";

import axios from "axios";

const TopNavBar = () => {
  const [temperature, setTemperature] = useState(null);
  const [location] = useState("Delhi");
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const API_KEY = "d8e929deaafbee71b34817c77c5d621c";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();
        setTemperature(data.main?.temp || "N/A");
      } catch {
        setTemperature("N/A");
      }
    };

    fetchWeather();
  }, [location]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim()) {
        axios
          .get(`http://localhost:8080/api/quicklinks/search?q=${query}`)
          .then((res) => setSuggestions(res.data))
          .catch(() => setSuggestions([]));
      } else {
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleSearchClick = () => {
    if (suggestions.length > 0) {
      window.open(suggestions[0].url, "_blank");
    } else {
      window.open(
        `https://www.bing.com/search?q=${encodeURIComponent(query)}`,
        "_blank"
      );
    }
  };

  return (
    <div className="flex items-center justify-between px-4 pt-2 mx-20 mt-5">
      <img src="/assets/MSN-Logo.png" alt="MSN logo" className="h-12 w-22" />

      <div className="relative w-[60%] ">
        <div className="flex">
          <input
            type="text"
            placeholder="Search the web"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="text-black border bg-white  border-gray-300 px-4 py-2 h-12 rounded-l-md w-full shadow shadow-gray-400 focus:outline-none"
          />
          <button
            onClick={handleSearchClick}
            className="bg-custom-blue px-4 py-2 w-18 rounded-r-md text-white shadow shadow-gray-400 cursor-pointer"
          >
            <div className="flex items-center justify-center w-10 h-8 ">
              <LuSearch className="text-[1.5rem] text-white" />
            </div>{" "}
          </button>
        </div>
        {suggestions.length > 0 && (
          <ul className="absolute bg-white border border-gray-200 w-full mt-1 z-10 shadow-md rounded">
            {suggestions.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => window.open(item.url, "_blank")}
              >
                <img src={item.icon} alt={item.name} className="w-5 h-5" />
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex items-center gap-4">
        <span className="text-[1rem]">
          🌤️{" "}
          {temperature !== null ? (
            <>
              {Math.round(temperature)}
              <sup>°C</sup>
            </>
          ) : (
            "Loading..."
          )}
        </span>

        <FaUserCircle className="text-3xl text-gray-500" />
        <FaCog className="text-xl text-gray-500" />
      </div>
    </div>
  );
};

export default TopNavBar;
