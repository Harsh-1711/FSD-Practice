import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login.jsx";
import Home from "./Pages/Home.jsx";
import AllComponents from "./Pages/AllComponents.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/all-components" element={<AllComponents />} />
      </Routes>
    </Router>
  </StrictMode>
);
