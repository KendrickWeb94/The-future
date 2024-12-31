import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// line break
import Welcome from "./routes/welcome";
import Usage from "./routes/Usage";
import Features from "./routes/Features";
import Support from "./routes/Support";
import Blog from "./routes/Blog";
// import Dashboard from "./routes/Dashboard";
import NotFound from "./routes/NotFound"; 
// import ProtectedRoute from "./components/ProtectedRoute"; // For authenticated routes

const App = () => {
  return (
   <main className="relative smooth font-inter w-full">
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
   </main>
  );
};

export default App;
