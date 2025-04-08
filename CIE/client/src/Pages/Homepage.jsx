import React from "react";
import TopNavBar from "../components/TopNavBar";
import QuickLinks from "../components/QuickLinks";
import BannerAd from "../components/BannerAd";
import CategoryTabs from "../components/CategoryTabs";
import MainNewsSection from "../components/MainNewsSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className=" text-black min-h-screen flex flex-col mx-100rem bg-main-color">
      <div className="fixed top-0 left-0 right-0 bg-main-color z-50">
        <TopNavBar />
      </div>{" "}
      <div className="h-30" />
      <QuickLinks />
      <BannerAd />
      <CategoryTabs />
      <main className="flex-1 p-4">
        <MainNewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
