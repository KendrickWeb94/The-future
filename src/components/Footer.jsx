import React from "react";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

const Footer1 = () => {
  return (
    <footer className="bg-gray-300/15 w-full min-h-[80vh] py-16 mt-28">
      <div className="tw-container mx-auto flex flex-col gap-16 w-full">
        <div className="w-full grid ds:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="col-1 col-span-2">
            {/* Replace with your logo component or image */}
            <div className="logo">
              <Logo />
            </div>
          </div>
          <div className="col-2 space-y-4">
            <h1 className="text-body_text font-semibold">Quick Links</h1>
            <ul className="list-none flex flex-col gap-3">
              <li className="text-sm text-text_normal smooth hover:pl-4 hover:text-primary">
                <Link to={"/Product-features"}>Product Features</Link>
              </li>
              <li className="text-sm text-text_normal smooth hover:pl-4 hover:text-primary">
                <Link to={"/product-Usage"} href="#/usage">Product Usage</Link>
              </li>
              <Link to={"/Customer-support"} className="text-sm text-text_normal smooth hover:pl-4 hover:text-primary">
                <li >Customer Support</li>
              </Link>
              <Link to={"/blogs-and-updates"} className="text-sm text-text_normal smooth hover:pl-4 hover:text-primary">
                <li >Blog & Updates</li>
              </Link>
              <li className="text-sm text-text_normal smooth hover:pl-4 hover:text-primary">
                <a href="www.facebook.com/the-future" target="_blank">Social Media</a>
              </li>
              <li className="text-sm text-text_normal smooth hover:pl-4 hover:text-primary">
                <Link to={"/Our-Community"} >Our Community</Link>
              </li>
            </ul>
          </div>
          <div className="col-4 space-y-4">
            <h1 className="text-body_text font-semibold">Multi Platform</h1>
            <ul className="list-none flex flex-col gap-3">
              <li className="text-sm text-text_normal smooth hover:pl-4 hover:text-primary">
                <a href="##">Web Version (coming soon)</a>
              </li>
              <li className="text-sm text-text_normal smooth hover:pl-4 hover:text-primary">
                <a href="##">Andriod</a>
              </li>
              <li className="text-sm text-text_normal smooth hover:pl-4 hover:text-primary">
                <a href="##">IOS</a>
              </li>
              <li className="text-sm text-text_normal smooth hover:pl-4 hover:text-primary">
                <a href="##">iPads</a>
              </li>
              <li className="text-sm text-text_normal smooth hover:pl-4 hover:text-primary">
                <a href="##">Tablets</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <button className="w-8 h-8 bg-transparent smooth hover:rounded-full hover:bg-primary hover:text-white text-body_text text-xl">
            <i className="bx bxl-facebook"></i>
          </button>
          <button className="w-8 h-8 bg-transparent smooth hover:rounded-full hover:bg-primary hover:text-white text-body_text text-xl">
            <i className="bx bxl-whatsapp"></i>
          </button>
          <button className="w-8 h-8 bg-transparent smooth hover:rounded-full hover:bg-primary hover:text-white text-body_text text-xl">
            <i className="bx bxl-instagram"></i>
          </button>
          <button className="w-8 h-8 bg-transparent smooth hover:rounded-full hover:bg-primary hover:text-white text-body_text text-xl">
            <i className="bx bxl-twitter"></i>
          </button>
          <button className="w-8 h-8 bg-transparent smooth hover:rounded-full hover:bg-primary hover:text-white text-body_text text-xl">
            <i className="bx bxl-youtube"></i>
          </button>
          <button className="w-8 h-8 bg-transparent smooth hover:rounded-full hover:bg-primary hover:text-white text-body_text text-xl">
            <i className="bx bxl-medium"></i>
          </button>
        </div>
        <hr />
        <div className="w-full flex items-center flex-wrap justify-between gap-8">
          <p className="text-heading_text font-medium text-sm md:max-w-[50%]">
            We advise you to go through these terms and policies to understand the usage agreement, privacy, and how we can help secure your account.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-body_text text-sm smooth hover:text-black hover:underline underline-offset-4 cursor-pointer">
              Terms
            </p>
            <p className="text-body_text text-sm smooth hover:text-black hover:underline underline-offset-4 cursor-pointer">
              Privacy
            </p>
            <p className="text-body_text text-sm smooth hover:text-black hover:underline underline-offset-4 cursor-pointer">
              Security
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
