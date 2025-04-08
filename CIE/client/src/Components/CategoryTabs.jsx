import React from "react";

const categories = [
  "Discover",
  "News",
  "Sports",
  "Play",
  "Money",
  "Gaming",
  "Weather",
  "Watch",
  "Shopping",
  "Health",
  "Travel",
  "Traffic",
  "Real Estate",
];

const CategoryTabs = () => {
  return (
    <div className="flex overflow-x-auto space-x-6 px-4 py-2 mx-30 text-sm ">
      {categories.map((cat, i) => (
        <button
          key={i}
          className={`px-3 py-1 rounded-[10px] cursor-pointer hover:bg-gray-200 ${
            i === 0
              ? "bg-white cursor-pointer text-blue-700 font-semibold border border-gray-300"
              : ""
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
