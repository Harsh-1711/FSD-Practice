import React from "react";

const NewsCard = ({ title, summary, image, link }) => {
  return (
    <div className="rounded overflow-hidden shadow cursor-pointer">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      </a>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-700">{summary}</p>
      </div>
    </div>
  );
};

export default NewsCard;
