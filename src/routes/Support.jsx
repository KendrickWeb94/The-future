import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";
import Footer1 from "../components/Footer";
import { SupportMap } from "../static/images";
import Accordion from "../components/accordion";
import Loader from "../components/loader";

const Support = () => {
  return (
    <div>
      <Helmet>
        <title>Customer Support</title>
      </Helmet>
      <Navbar />
      <Loader />
      <div className="min-h-auto py-16 overflow-hidden relative hero-2 ">
        <div className="w-full  tw-container ">
          <div className="w-full pt-6 flex lg:flex-nowrap flex-wrap justify-between gap-10">
            <div className="space-y-7 md:max-w-2xl">
              <h1 className="md:text-6xl ds:text-4xl font-inter text-balance font-bold md:leading-[4.5rem] text-heading_text">
                Reach Our Customer Service Team
              </h1>
              <p className="font-inter font-medium text-base text-balance leading-7 text-text_normal">
                Our dedicated customer service team is here to assist you with
                any questions, concerns, or inquiries you may have. Whether you
                need help with an order, have product-related queries, or
                require assistance with any aspect of our services, we're here
                to help.
              </p>
              <button className="btn-primary font-inter font-medium w-fit text-sm">
                <p>Send Us a Mesage </p>
              </button>
            </div>
            <div className="bg-white rounded-md p-4 py-6 max-w-md w-full flex flex-col justify-between gap-6 md:min-w-[27rem]">
              <div className="space-y-4">
                <h1 className="font-semibold text-sm text-body_text">
                  Contact lookup
                </h1>
                <div className="w-full text-sm text smooth flex items-center justify-between gap-4 focus:bg-primary/15 text-text_normal px-1 pl-2 py-1 rounded-md shadow-sm border border-gray-300/75">
                  <input
                    type="text"
                    name="country"
                    id="country"
                    placeholder="Your country / address"
                  />
                  <input
                    type="submit"
                    value="Search"
                    className="btn-primary cursor-pointer"
                  />
                </div>
                <p className="text-text_normal text-sm">
                  Enter your address or country so we can allocate a staff to
                  you{" "}
                </p>
              </div>
              <hr />
              <div className="space-y-4">
                <h1 className="font-semibold text-sm text-body_text">
                  Don't want to disclose your address?
                </h1>
                <p className="text-text_normal text-sm">
                  You can use the form below to send us a message, make sure
                  your email is correct
                </p>
                <p className="text-primary font-semibold">OK Got it -{">"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 tw-container w-full">
        <div className="space-y-6 w-full">
          <h1 className="font-semibold text-primary">Location</h1>
          <h2 className="ds:text-3xl sm:text-5xl text-heading_text text-balance md:max-w-3xl font-semibold">
            This Map shows the Country we are based
          </h2>
          <br />
          <br />
          <div className="max-w-6xl w-full">
            <img src={SupportMap} alt="" />
          </div>
          <br />
          <br />
          <form action="#" method="POST">
            <div className="space-y-5 flex flex-col items-center justify-center w-full">
              <div className="form-group-flex ds:flex-wrap md:flex-nowrap flex items-center w-full  gap-5">
                <div className="form-content flex flex-col w-full">
                  <label
                    htmlFor="first_name"
                    className="form-label text-body_text mb-3 text-base font-medium"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="f_name"
                    id="f_name"
                    placeholder="John"
                    className="w-full text-sm text smooth smooth focus:bg-primary/15 text-text_normal px-3 py-2 rounded-md shadow-sm border border-gray-300/75"
                  />
                </div>
                <div className="form-content flex flex-col w-full">
                  <label
                    htmlFor="first_name"
                    className="form-label text-body_text mb-3 text-base font-medium"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="l_name"
                    id="l_name"
                    placeholder="George"
                    className="w-full text-sm text smooth smooth focus:bg-primary/15 text-text_normal px-3 py-2 rounded-md shadow-sm border border-gray-300/75"
                  />
                </div>
              </div>
              <div className="form-group-flex ds:flex-wrap md:flex-nowrap flex items-center w-full  gap-5">
                <div className="form-content flex flex-col w-full">
                  <label
                    htmlFor="first_name"
                    className="form-label text-body_text mb-3 text-base font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@gmail.com"
                    className="w-full text-sm text smooth smooth focus:bg-primary/15 text-text_normal px-3 py-2 rounded-md shadow-sm border border-gray-300/75"
                  />
                </div>
                <div className="form-content flex flex-col w-full">
                  <label
                    htmlFor="first_name"
                    className="form-label text-body_text mb-3 text-base font-medium"
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    type="text"
                    name="l_name"
                    id="l_name"
                    placeholder="+234 90 8303 03"
                    className="w-full text-sm text smooth smooth focus:bg-primary/15 text-text_normal px-3 py-2 rounded-md shadow-sm border border-gray-300/75"
                  />
                </div>
              </div>
              <div className="form-content flex flex-col w-full">
                <label
                  htmlFor="first_name"
                  className="form-label text-body_text mb-3 text-base font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="what's your request or complaint?"
                  className="w-full text-sm text-text_normal px-3 py-2 rounded-md shadow-sm border border-gray-300/75"
                />
              </div>
              <div className="form-content flex flex-col w-full">
                <label
                  htmlFor="first_name"
                  className="form-label  text-body_text mb-3 text-base font-medium"
                >
                  Your message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="write here....."
                  minLength={""}
                  className="w-full resize-y h-[100px] text-sm text smooth smooth focus:bg-primary/15 text-text_normal px-3 py-2 rounded-md shadow-sm border border-gray-300/75"
                ></textarea>
              </div>
            </div>
            <br />
            <br />
            <input
              type="submit"
              value={"Send message"}
              className="btn-primary w-fit cursor-pointer smooth hover:bg-p"
            />
          </form>
        </div>
      </div>

      <Accordion />
      {/* <img src={SupportMap} alt="" /> */}
      <Footer1 />
    </div>
  );
};

export default Support;
