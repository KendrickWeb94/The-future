import React from "react";
import { grid } from "../static/images";
import { Link } from "react-router-dom";
import Features from "./Features";
import {
  app,
  apple,
  blog1,
  blog2,
  blog3,
  check,
  features_lg,
  frame1,
  frame2,
  frame3,
  frame4,
  frame5,
  google,
  gridnotifications,
  logo,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  starfilled,
  transactions,
} from "../static/images";

const AppFeatures = () => {
  return (
    <section className="">
      <div className="hero  relative flex items-center py-32 justify-center overflow-hidden h-auto bg-gradient-to-r to-primary/30 via-primary/20 from-primary/15 pt-10">
        {/* <img src={grid} alt="grid" className="w-[50%] min-h-screen object-cover " /> */}
        <div className="text-center w-full flex items-center justify-center flex-col gap-6 space-y-5 md:max-w-xl">
          <h1 className="md:text-6xl ds:text-4xl font-inter text-balance font-bold md:leading-[4.5rem] text-heading_text">
            Our app features  what sets us apart
          </h1>
          <p className="font-inter font-medium text-center text-base text-balance leading-7 text-text_normal">
            these are the following features of our app ,which makes us stand
            out amongst others
          </p>
          <div className="flex items-center gap-3">
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
        </div>
      </div>
      <br />
      <br />
      <Features />
      <br />
      <br />
      <br />
      <br />
      <main className="w-full min-h-[70vh] overflow-hidden bg-gradient-to-t to-primary/50 via-primary/40 from-primary/30">
        <section className="w-full tw-container">
          <div className="w-full flex-wrap flex justify-between">
            <div className="space-y-6 py-16">
              <h2 className=" ds:text-4xl text-balance sm:text-6xl md:max-w-xl font-semibold">
                Send & receive money instantly
              </h2>
              <p className="font-medium text-body_text max-w-xl">
                Send money and recieve money at a very fast rate with no network
                issues and also no charges
              </p>
            </div>
            <img
              src={transactions}
              className="translate-y-4 w-[300px]"
              alt=""
            />
          </div>
        </section>
      </main>
      <br></br>
      <br></br>
      <section className="w-full tw-container">
          <div className="w-full py-24 flex flex-wrap justify-between gap-14">
            <div className="space-y-6">
              <h1 className="font-semibold text-primary">Notifications</h1>
              <h2 className="text-6xl max-w-sm font-semibold">Stay notified</h2>
              <p className="font-medium md:max-w-xl text-body_text">
                Stay notified with our ever running notification system , that
                sends u notifications when you peform an activity
              </p>
            </div>
            <div className="w-[350px]">
              <img src={gridnotifications} alt="" />
            </div>
          </div>
        </section>
        <section className="w-full tw-container">
          <div className="w-full py-24 flex justify-between flex-col gap-14">
            <div className="space-y-6">
              <h1 className="font-semibold text-primary">Saving Accounts</h1>
              <h2 className="text-4xl w-full md:max-w-4xl text-balance font-semibold">
                Organize your money the right way
              </h2>
              <p className="font-medium md:max-w-xl text-body_text">
                Introducing our saving account and spending tracker ,this helps
                to manage the way you spend , mostly if you're on budget
              </p>
            </div>
            <div className="w-full">
              <div className="grid w-full grid-cols-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <div className="space-y-4 ds:w-[160px]  xs:w-[220px]">
                  <img src={frame1} alt=""  className="smooth hover:-translate-y-4"/>
                  <div className="">
                    <h1 className=" text-body_text font-semibold">
                      Dream bike
                    </h1>
                    <p className=" text-text_light text-sm font-medium">200</p>
                  </div>
                </div>
                <div className="space-y-4 ds:w-[160px]  xs:w-[220px]">
                <img src={frame2} alt=""  className="smooth hover:-translate-y-4"/>
                  <div className="">
                    <h1 className=" text-body_text  font-semibold">Camera</h1>
                    <p className=" text-text_light text-sm font-medium">300$</p>
                  </div>
                </div>
                <div className="space-y-4 ds:w-[160px]  xs:w-[220px]">
                <img src={frame3} alt=""  className="smooth hover:-translate-y-4"/>
                  <div className="">
                    <h1 className=" text-body_text font-semibold">Holiday</h1>
                    <p className=" text-text_light text-sm font-medium">
                      14000$
                    </p>
                  </div>
                </div>
                <div className="space-y-4 ds:w-[160px]  xs:w-[220px]">
                <img src={frame4} alt=""  className="smooth hover:-translate-y-4"/>
                  <div className="">
                    <h1 className=" text-body_text font-semibold">
                      New Laptop
                    </h1>
                    <p className=" text-text_light text-sm font-medium">
                      4000$
                    </p>
                  </div>
                </div>
                <div className="space-y-4 ds:w-[160px]  xs:w-[220px]">
                <img src={frame5} alt=""  className="smooth hover:-translate-y-4"/>
                  <div className="">
                    <h1 className=" text-body_text font-semibold">
                    Add more
                    </h1>
                    {/* <p className=" text-text_light text-sm font-medium">200</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </section>
  );
};

export default AppFeatures;
