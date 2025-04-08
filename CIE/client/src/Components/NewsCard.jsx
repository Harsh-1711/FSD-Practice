import React from "react";

const NewsCard = ({ title, summary, image }) => {
  return (
    <div className="rounded overflow-hidden shadow">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-700">{summary}</p>
      </div>
    </div>
  );
};

export default NewsCard;
