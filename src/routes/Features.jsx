import React from "react";
import { Helmet } from "react-helmet";
import Loader from "../components/loader";
import Navbar from "../components/navbar";
import Footer1 from "../components/Footer";
import BackToTop from "../components/topTop";
import AppFeatures from "../components/AppFeatures";

const Features = () => {
  return (
    <div className="relative">
      <Helmet>
        <title>Our Product Features</title>
      </Helmet>
      <Loader />
      <Navbar />
      <BackToTop />
      <AppFeatures />
      <Footer1 />
    </div>
  );
};

export default Features;
