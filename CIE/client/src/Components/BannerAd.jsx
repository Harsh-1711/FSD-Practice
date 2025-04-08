import React from "react";
import { FaInfoCircle, FaTimes } from "react-icons/fa";
const BannerAd = () => {
  return (
    <div className="relative">
      <div className="flex justify-center ">
        <div className="bg-blue-600 bg-[url(/assets/banner.jpg)] bg-no-repeat bg-right bg-cover text-white p-6 w-full max-w-4xl h-70"></div>
        <div className=" relative  w-52 flex bg-black ">
          <div className="flex absolute top-0.5 right-0.5 gap-0.5 ">
            <FaInfoCircle className="bg-white text-blue-400" />
            <FaTimes className="bg-white text-blue-400" />
          </div>
          <img
            src="/assets/autodesk_logo.webp"
            alt="Ad banner"
            className="h-full object-fit rounded bg-black "
          />
        </div>
      </div>
      <span className="m-0 p-0 text-xs absolute right-52">Ad</span>
    </div>
  );
};

export default BannerAd;
