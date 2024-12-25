import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components for each page
import Welcome from "./routes/welcome";
import Usage from "./routes/Usage";
import Features from "./routes/Features";
import Support from "./routes/Support";
import Blog from "./routes/Blog";
// import Dashboard from "./routes/Dashboard";
import NotFound from "./routes/NotFound"; // Optional 404 page
import Navbar from "./components/navbar";
import Footer1 from "./components/Footer";
// import ProtectedRoute from "./components/ProtectedRoute"; // For authenticated routes

const App = () => {
  return (
   <div className="relative font-inter w-full">
    {/* <Navbar /> */}
     <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Product-Usage" element={<Usage />} />
        <Route path="/Product-features" element={<Features />} />
        <Route path="/Customer-support" element={<Support />} />
        <Route path="/blogs-and-updates" element={<Blog />} />
        {/* <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    {/* <Footer1 /> */}
   </div>
  );
};

export default App;
