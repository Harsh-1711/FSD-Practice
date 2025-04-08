import React from "react";
import NewsCard from "./NewsCard";

const dummyNews = [
  {
    title: "India-Sri Lanka Delegation Talks Ongoing",
    summary: "Leaders from both countries meet to discuss trade.",
    image: "/assets/1.avif",
    link: "https://www.thehindu.com/news/national/pm-modi-in-sri-lanka-day-1-live-updates-april-5-2025/article69415462.ece",
  },
  {
    title: "Feeling stuck at a job you hate?",
    summary: "Here are 4 ways to cope according to a former Microsoft HR VP.",
    image: "/assets/2.webp",
    link: "https://hbr.org/2023/01/when-youre-stuck-in-a-job-you-cant-quit",
  },
  {
    title: "Cheap Flights via Skyscanner",
    summary: "Travel smart and save more.",
    image: "/assets/3.jfif",
    link: "https://www.skyscanner.co.in/flights?&utm_source=google&utm_medium=cpc&utm_campaign=IN-Travel-Search-Brand-SkyscannerVerticals-Desktop&utm_term=skyscanner+flights&associateID=SEM_FLI_19465_00000&campaign_id=21456707968&adgroupid=167310368071&keyword_id=kwd-2916532766&gad_source=1&gclid=CjwKCAjwzMi_BhACEiwAX4YZUJc2GtxyIuE2kF7aQqmZfYnnbKk5vws7sIWVRYMfZyXtI-R3tKu3zBoCyKgQAvD_BwE&gclsrc=aw.ds",
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
