import React, { useState } from "react";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { menu } from "../static/images";


const navItems = [
    { label: 'Product Features', href: '/Product-features' },
    { label: 'Product Usage', href: '/Product-features' },
    { label: 'Customer Support', href: '/Customer-support' },
    { label: 'Blog & Updates', href: '/blogs-and-updates' },
  
  ];


const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle menu toggle
  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  // Handle scroll effects
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  // Attach scroll event listener
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`bg-gradient-to-r to-primary/30 via-primary/20 from-primary/15 navbar w-full h-auto py-4 ${scrolled ? "active" : ""}`}>
      <div className="w-full mx-auto max-w-[91%] h-auto relative">
        <div className="w-full flex items-center justify-between gap-4">
          <div className="logo">
          <Logo />
          </div>
          <ul className="list-none ds:hidden md:flex items-center gap-6">
      {/* <li className="w-full pb-2 border-b border-gray-400/25"></li> Separator */}
      {navItems.map((item, index) => (
        <li
          key={index}
          className={`py-2 hover:px-6 smooth hover:bg-primary hover:text-white font-inter px-3 text-[0.8rem]  rounded-3xl cursor-pointer text-body_text  ${
            item.isButton ? 'sm:hidden' : '' // Conditionally hide on small screens
          }`}
        >
          <Link to={item.href} href={item.href}> {/* Use item.href for both to and href */}
            {item.isButton ? ( // Conditionally render button or link
              <div className="btn-primary text-sm">{item.label}</div>
            ) : (
              item.label
            )}
          </Link>
        </li>
      ))}
    </ul>
    <button onClick={toggleMenu} className="menu-toggle ds:block md:hidden">
      <img src={menu} width="26" alt="Menu" />
    </button>
          {/* <ul className="list-none flex items-center gap-6">
            <a className="hidden sm:block" href="/login">
              <button className={`btn-link ${scrolled ? "text-active" : ""}`}>Login</button>
            </a>
            <a className="hidden sm:block" href="/register">
              <div className="btn-primary text-sm">Open Account</div>
            </a>
          </ul> */}
        </div>
        {menuVisible && (
          <div className="mobile-menu  ds:block md:hidden  absolute top-7 right-0">
            <div className="bg-white shadow-2xl rounded-md w-[200px] h-auto py-2">
              <ul className="list-none">
                <li className="w-full pb-2 border-gray-400/25"></li>
                <li className="w-full py-3 smooth hover:bg-primary hover:text-white font-inter px-3 text-xs cursor-pointer text-body_text border-gray-400/25">
                  <Link to={"/Product-features"} href="/features">Product Features</Link>
                </li>
                <li className="w-full py-3 smooth hover:bg-primary hover:text-white font-inter px-3 text-xs cursor-pointer text-body_text border-gray-400/25">
                  <Link to={"/product-features"} href="/Product-Usage">Product Usage</Link>
                </li>
                <li className="w-full py-3 smooth hover:bg-primary hover:text-white font-inter px-3 text-xs cursor-pointer text-body_text border-gray-400/25">
                  <Link to={"/Customer-support"} href="/support">Customer Support</Link>
                </li>
                <li className="w-full py-3 smooth hover:bg-primary hover:text-white font-inter px-3 text-xs cursor-pointer text-body_text border-gray-400/25">
                  <Link to={"/blogs-and-updates"} href="/blog">Blog & Updates</Link>
                </li>
                {/* <li className="w-full sm:hidden py-2">
                  <Link to={""} href="/register">
                    <div className="btn-primary text-sm">Open Account</div>
                  </Link>
                </li>
                <li className="w-full sm:hidden py-3 smooth hover:bg-primary hover:text-white font-inter px-3 text-xs cursor-pointer text-body_text border-gray-400/25">
                  <Link to={"#"} href="/login">Login</Link>
                </li> */}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
