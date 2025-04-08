import React from "react";

const Footer = () => {
  return (
    <footer className=" flex justify-between mx-50 text-black text-xs text-center items-center">
      <p>&copy; 2025 Microsoft</p>
      <div className="space-x-4 mt-1">
        <a href="#">Privacy and Cookies</a>
        <a href="#">Terms of Use</a>
        <a href="#">Advertise</a>
        <a href="#">...</a>
      </div>
    </footer>
  );
};

export default Footer;
