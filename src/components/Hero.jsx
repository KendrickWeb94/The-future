import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { check, hero } from "../static/images";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export const Hero = ({ heroImage, altText, children }) => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);
  const featuresRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top center", // Adjust as needed
          toggleActions: "play none none reverse",
          // markers: true, // For debugging
        },
      });

      tl.fromTo(
        headingRef.current,
        {
          opacity: 0,
          x: -100, // Start off-screen to the left
        },
        {
          opacity: 1,
          x: 0,
          delay: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      );
      tl.fromTo(
        paragraphRef.current,
        {
          opacity: 0,
          x: -100, // Start off-screen to the left
        },
        {
          opacity: 1,
          x: 0,
          delay: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );
      tl.fromTo(
        buttonsRef.current.children,
        {
          opacity: 0,

          x: -100, // Start off-screen to the left
          stagger: 0.2,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 1,
          ease: "power2.out",
        },
        "-=0.5"
      );
      tl.fromTo(
        featuresRef.current.children,
        {
          opacity: 0,
          x: -100, // Start off-screen to the left
          stagger: 0.2,
        },
        {
          delay: 1,
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );
      tl.fromTo(
        imageRef.current,
        {
          opacity: 0,

          x: 100, // Start off-screen to the right
        },
        {
          opacity: 1,
          delay: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.8"
      );
    }, heroRef); // <- IMPORTANT! Scoping for ScrollTrigger
  }, []);

  return (
    <section ref={heroRef}>
      <div className="hero lg:max-h-[100vh] overflow-hidden h-auto bg-gradient-to-r to-primary/30 via-primary/20 from-primary/15 pt-10">
        <div className="tw-container">
          <div className="w-full flex lg:flex-nowrap flex-wrap justify-between gap-10">
            <div className="space-y-7 md:max-w-2xl">
              <h1
                ref={headingRef}
                className="md:text-6xl ds:text-4xl font-inter text-balance font-bold md:leading-[4.5rem] text-heading_text"
              >
                Everything you need in one place
              </h1>
              <p
                ref={paragraphRef}
                className="font-inter font-semibold text-sm text-balance leading-7 text-body_text"
              >
                Our software is an all-in-one application that allows you to do
                everything just in one place, isn't that wonderful? No more
                minimizing and switching, just from the comfort of one. That
                means you get to do more with just one application.
              </p>
              <div ref={buttonsRef} className="flex items-center gap-3">
                <Link
                  to={"/page-under-construction"}
                  className="btn-primary font-inter font-medium w-fit text-sm"
                >
                  Open Account
                </Link>
                <Link
                  to={"/customer-support"}
                  className="text-primary"
                  href="#about"
                >
                  More info about us
                </Link>
              </div>
              <div
                ref={featuresRef}
                className="grid grid-cols-2 sm:grid-cols-2 gap-4"
              >
                <div className="flex items-center gap-4">
                  <button className="rounded-full bg-primary/30 text-primary p-1">
                    <img src={check} alt="Check Icon" />
                  </button>
                  <p className="text-body_text font-semibold text-sm">
                    Ecommerce System
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <button className="rounded-full bg-primary/30 text-primary p-1">
                    <img src={check} alt="Check Icon" />
                  </button>
                  <p className="text-body_text font-semibold text-sm">
                    Payments worldwide
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <button className="rounded-full bg-primary/30 text-primary p-1">
                    <img src={check} alt="Check Icon" />
                  </button>
                  <p className="text-body_text font-semibold text-sm">
                    Flight Booking
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <button className="rounded-full bg-primary/30 text-primary p-1">
                    <img src={check} alt="Check Icon" />
                  </button>
                  <p className="text-body_text font-semibold text-sm">
                    Crypto Trading
                  </p>
                </div>
              </div>
            </div>
            <div ref={imageRef}>
              <img
                src={heroImage || hero}
                alt={altText || "Hero Section"}
              />{" "}
              {/* Use prop or default */}
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
