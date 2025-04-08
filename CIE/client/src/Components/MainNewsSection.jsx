import React from "react";
import NewsCard from "./NewsCard";

const dummyNews = [
  {
    title: "India-Sri Lanka Delegation Talks Ongoing",
    summary: "Leaders from both countries meet to discuss trade.",
    image: "/assets/1.avif",
  },
  {
    title: "Feeling stuck at a job you hate?",
    summary: "Here are 4 ways to cope according to a former Microsoft HR VP.",
    image: "/assets/2.webp",
  },
  {
    title: "Cheap Flights via Skyscanner",
    summary: "Travel smart and save more.",
    image: "/assets/3.jfif",
  },
];

const MainNewsSection = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3 mx-30">
      {dummyNews.map((news, i) => (
        <NewsCard key={i} {...news} />
      ))}
    </div>
  );
};

export default MainNewsSection;
