import React, { useEffect, useState } from "react";
import { chevronup } from "../static/images";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top function
  const scrollToTop = (event) => {
    event.preventDefault(); // Prevent default jump
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  // Handle scroll visibility
  const handleScroll = () => {
    setIsVisible(window.scrollY > 300); // Show after scrolling 300px
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <a
          href="#top"
          aria-label="Back to top"
          onClick={scrollToTop}
          className="flex items-center z-50 back-to-top rounded-full bg-primary text-white justify-center m-5 fixed bottom-0 right-0 w-[3.5rem] h-[3.5rem]"
        >
          <img src={chevronup} alt="" />
        </a>
      )}
    </div>
  );
};

export default BackToTop;
