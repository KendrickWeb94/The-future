import React from "react";
import goodImg from "../assets/temp/good.svg";

export { goodImg };

const Features = () => {
  return (
    <div className="py-16 w-full min-h-screen relative tw-container">
      <div className="w-full flex justify-between gap-8">
        <div className="space-y-4 md:w-[60%]">
          <button className="rounded-3xl px-4 py-2 border-[0.8px] border-primary text-primary text-sm font-medium">
            Features
          </button>
          <h2 className="text-5xl max-w-sm font-semibold leading-[3.6rem]">
            Feature
            <br />
            Spotlight
          </h2>
          <p className=" md:max-w-md text-base absolute bottom-0 left-0 font-medium text-body_text">
            At the heart of our offering are a set of innovative features that
            have been meticulously designed to address the specific needs.
          </p>
        </div>
        <div className="flex md:w-[40%] items-center gap-4 flex-wrap">
          <div className="rounded-md p-4 w-[210px] bg-[#F9F9FB] space-y-4">
            <img
              src={goodImg}
              width={30}
              height={30}
              className="object-cover"
              alt=""
            />
            <h1 className="text-[#0D0D0D] font-medium">Crypto trading</h1>
            <p className="text-sm text-[#808080]">
              trade cryptocurrencies with ease. Access a user-friendly interface
              and explore a range of trading options
            </p>
          </div>
          <div className="rounded-md p-4 w-[210px] bg-[#F9F9FB] space-y-4">
            <img
              src={goodImg}
              width={30}
              height={30}
              className="object-cover"
              alt=""
            />
            <h1 className="text-[#0D0D0D] font-medium">Ride Booking</h1>
            <p className="text-sm text-[#808080]">
              Your on-demand transportation solution. Book rides with a few taps
              and explore your city effortlessly
            </p>
          </div>
          <div className="rounded-md p-4 w-[210px] bg-[#F9F9FB] space-y-4">
            <img
              src={goodImg}
              width={30}
              height={30}
              className="object-cover"
              alt=""
            />
            <h1 className="text-[#0D0D0D] font-medium">Modern Banking</h1>
            <p className="text-sm text-[#808080]">
              The Future app brings you innovative banking solutions – from
              digital payments to personalized financial insights
            </p>
          </div>
          <div className="rounded-md p-4 w-[210px] bg-[#F9F9FB] space-y-4">
            <img
              src={goodImg}
              width={30}
              height={30}
              className="object-cover"
              alt=""
            />
            <h1 className="text-[#0D0D0D] font-medium">Ecommerce</h1>
            <p className="text-sm text-[#808080]">
              Shop smarter with The Future. Explore exclusive deals and enjoy a
              personalized shopping experience
            </p>
          </div>
          <div className="rounded-md p-4 w-[210px] bg-[#F9F9FB] space-y-4">
            <img
              src={goodImg}
              width={30}
              height={30}
              className="object-cover"
              alt=""
            />
            <h1 className="text-[#0D0D0D] font-medium">B2B support</h1>
            <p className="text-sm text-[#808080]">
              The Future app empowers businesses with exceptional support
            </p>
          </div>
          {/* <div className="rounded-md p-4 w-[210px] bg-[#F9F9FB] space-y-4">
            <img
              src={goodImg}
              width={30}
              height={30}
              className="object-cover"
              alt=""
            />
            <h1 className="text-[#0D0D0D] font-medium">Budget Tracker</h1>
            <p className="text-sm text-[#808080]">
              Gain financial clarity with The Future's insightful budget
              tracker.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Features;
