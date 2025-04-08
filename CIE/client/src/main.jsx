// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import BBA from "./Pages/Bba.jsx";
// import Sform from "./Pages/StudentForm.jsx";
// import MBA from "./Pages/Mba.jsx";
// import MCA from "./Pages/Mca.jsx";
// import BCA from "./Pages/Bca.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/BBA" element={<BBA />} />
//         <Route path="/MCA" element={<MCA />} />
//         <Route path="/MBA" element={<MBA />} />
//         <Route path="/BCA" element={<BCA />} />
//         <Route path="/student-form" element={<Sform />} />
//       </Routes>
//     </Router>
//   </StrictMode>
// );
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>
);
