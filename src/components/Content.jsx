import React from "react";
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
import Accordion from "./accordion";

const Content = () => {
  return (
    <>
      <div>
        <section className="w-full tw-container">
          <div className="w-full py-16">
            <div className="flex items-center gap-5 flex-wrap md:max-w-xl">
              <img src={logo1} width="90" height="50" alt="Logo 1" />
              <img src={logo2} width="70" height="50" alt="Logo 2" />
              <img src={logo3} width="90" height="50" alt="Logo 3" />
              <img src={logo4} width="70" height="50" alt="Logo 4" />
              <img src={logo5} width="60" height="40" alt="Logo 5" />
              <img src={logo6} width="70" height="50" alt="Logo 6" />
              <img src={logo7} width="70" height="50" alt="Logo 7" />
              <img src={logo8} width="70" height="50" alt="Logo 8" />
              <img src={logo9} width="90" height="50" alt="Logo 9" />
              <img src={logo} width="90" height="50" alt="Main Logo" />
            </div>
          </div>
        </section>
        <section className="w-full tw-container">
          <div className="w-full py-24">
            <div className="space-y-6">
              <h1 className="font-semibold">Tools</h1>
              <h2 className="text-6xl max-w-sm font-semibold">
                Seemless
                <br />
                integration
              </h2>
              <p className="font-medium text-body_text">
                Our app offers a lot of features and a totally user-friendly
                interface
              </p>
            </div>
            <div className="pt-16 flex flex-wrap gap-5">
              <img src={features_lg} alt="Features Large" />
            </div>
          </div>
        </section>
        <main className="w-full min-h-[70vh] overflow-hidden bg-gradient-to-t to-primary/50 via-primary/40 from-primary/30">
          <section className="w-full tw-container">
            <div className="w-full flex-wrap flex justify-between">
              <div className="space-y-6 py-16">
                <h2 className=" ds:text-4xl text-balance sm:text-6xl md:max-w-xl font-semibold">
                  Send & receive money instantly
                </h2>
                <p className="font-medium text-body_text max-w-xl">
                  Send money and recieve money at a very fast rate with no
                  network issues and also no charges
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
              <h1 className="font-semibold">Notifications</h1>
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
              <h1 className="font-semibold">Saving Accounts</h1>
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
                <div className="space-y-4 ds:w-[160px] xs:w-[220px]">
                  <img src={frame1} alt="" />
                  <div className="">
                    <h1 className=" text-body_text font-semibold">
                      Dream bike
                    </h1>
                    <p className=" text-text_light text-sm font-medium">200</p>
                  </div>
                </div>
                <div className="space-y-4 ds:w-[160px] xs:w-[220px]">
                <img src={frame2} alt="" />
                  <div className="">
                    <h1 className=" text-body_text  font-semibold">Camera</h1>
                    <p className=" text-text_light text-sm font-medium">300$</p>
                  </div>
                </div>
                <div className="space-y-4 ds:w-[160px] xs:w-[220px]">
                <img src={frame3} alt="" />
                  <div className="">
                    <h1 className=" text-body_text font-semibold">Holiday</h1>
                    <p className=" text-text_light text-sm font-medium">
                      14000$
                    </p>
                  </div>
                </div>
                <div className="space-y-4 ds:w-[160px] xs:w-[220px]">
                <img src={frame4} alt="" />
                  <div className="">
                    <h1 className=" text-body_text font-semibold">
                      New Laptop
                    </h1>
                    <p className=" text-text_light text-sm font-medium">
                      4000$
                    </p>
                  </div>
                </div>
                <div className="space-y-4 ds:w-[160px] xs:w-[220px]">
                <img src={frame5} alt="" />
                  <div className="">
                    <h1 className=" text-body_text font-semibold">
                      Dream bike
                    </h1>
                    <p className=" text-text_light text-sm font-medium">200</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full tw-container">
          <div className="d-flex w-full items-end justify-between gap-6 flex-wrap">
            <div className="ds:py-10 md:py-16 flex flex-wrap items-center justify-between gap-8">
              <div className="space-y-6">
                <h1 className="font-semibold">Testimonials</h1>
                <h2 className="ds:text-3xl sm:text-5xl text-heading_text text-balance md:max-w-3xl font-semibold">
                  People all over the world use our software
                </h2>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <button className=" rounded-full cursor-text flex items-center justify-center p-2 bg-primary/25 ">
                    <img src={starfilled} width={20} alt="" />
                  </button>
                  <p className=" font-semibold text-body_text text-sm">
                    Rated 4.8/5 from over 1000 users
                  </p>
                </div>
              </div>
            </div>
          </div>
       
        <div className="testimonials masonary grid ds:grid-cols-1 gap-4 xl:grid-cols-3 md:grid-cols-2">
          <div className="testimonial-box w-full row-span-1 rounded-md border p-4 border-primary space-y-5">
            <div className="flex items-center gap-1">
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
            </div>
            <h2 className="text-body_text text-sm font-semibold">
              Chief Marketing Officer
            </h2>
            <p className="text-sm text-text_light leading-6">
              As a busy executive, I’ve always struggled to keep up with
              multiple apps for banking, shopping, and other daily tasks.
              The-Future has been a game changer for me. Now, I can do it all in
              one place without stress
            </p>
            <div className="">
              <h1 className="text-sm text-body_text font-semibold">
                Ngozi Okoro
              </h1>
              <p className="text-sm text-text_light">TotalEnergies Nigeria</p>
            </div>
          </div>
          <div className="testimonial-box w-full md:row-span-2 rounded-md border p-4 border-primary space-y-5">
            <div className="flex items-center gap-1">
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
            </div>
            <h2 className="text-body_text text-sm font-semibold">
              Executive Director
            </h2>
            <p className="text-sm text-text_light leading-6">
              The-Future is revolutionary! I use it for everything, from
              monitoring my crypto investments to booking flights for my team.
              It’s fast, secure, and reliable—a must-have app for professionals
              and businesses alike
              <br />
              <br />, it handles everything flawlessly. It’s truly the future of
              convenience
            </p>
            <div className="">
              <h1 className="text-sm text-body_text font-semibold">
                Emeka Onwudiwe
              </h1>
              <p className="text-sm text-text_light">Zenith Bank</p>
            </div>
            <br />
            <hr className="bg-primary" />
            <br />
            <div className="flex items-center gap-1">
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
            </div>
            <h2 className="text-body_text text-sm font-semibold">
              Regional Manager
            </h2>
            <p className="text-sm text-text_light leading-6">
              The-Future is the perfect blend of innovation and efficiency.
              Whether I’m shopping online, booking flights for my family, or
              monitoring my crypto assets, it handles everything flawlessly.
              It’s truly the future of convenience!
            </p>
            <div className="">
              <h1 className="text-sm text-body_text font-semibold">
                Tunde Abiola{" "}
              </h1>
              <p className="text-sm text-text_light">Access Bank</p>
            </div>
          </div>
          <div className="testimonial-box w-full  rounded-md border p-4 border-primary space-y-5">
            <div className="flex items-center gap-1">
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
            </div>
            <h2 className="text-body_text text-sm font-semibold">
              Managing Director
            </h2>
            <p className="text-sm text-text_light leading-6">
              Switching to The-Future was the best decision I made for managing
              my personal and professional transactions. From booking flights to
              managing my crypto portfolio, everything is seamless and
              incredibly user-friendly. It’s the definition of convenience
            </p>
            <div className="">
              <h1 className="text-sm text-body_text font-semibold">
                Adewale Balogun
              </h1>
              <p className="text-sm text-text_light">Shell Nigeria</p>
            </div>
          </div>
          <div className="testimonial-box w-full  rounded-md border p-4 border-primary space-y-5">
            <div className="flex items-center gap-1">
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
            </div>
            <h2 className="text-body_text text-sm font-semibold">
              Director of Operations
            </h2>
            <p className="text-sm text-text_light leading-6">
              "I was skeptical at first, but The-Future exceeded my
              expectations. It has streamlined how I handle ecommerce and
              banking while giving me access to the latest in crypto trading.
              Highly recommended!
            </p>
            <div className="">
              <h1 className="text-sm text-body_text font-semibold">
                Fatima Yusuf
              </h1>
              <p className="text-sm text-text_light">Nigerian Breweries</p>
            </div>
          </div>
          <div className="testimonial-box w-full  rounded-md border p-4 border-primary space-y-5">
            <div className="flex items-center gap-1">
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
              <img src={starfilled} width="15" alt="" />
            </div>
            <h2 className="text-body_text text-sm font-semibold">
              Chief Technology Officer
            </h2>
            <p className="text-sm text-text_light leading-6">
              The-Future is ahead of its time! It’s not just an app; it’s an
              all-in-one platform that makes my life easier. I particularly love
              how it integrates flight bookings and secure banking transactions
              seamlessly. Absolutely top-notch
            </p>
            <div className="">
              <h1 className="text-sm text-body_text font-semibold">
                Chinedu Eze
              </h1>
              <p className="text-sm text-text_light">Dangote Group</p>
            </div>
          </div>
        </div>
        </section>
        <section className="w-full tw-container py-24">
          <div className="w-full rounded-3xl overflow-hidden px-6 bg-gradient-to-l via-primary/45 to-primary/60 from-primary/20 flex justify-between gap-6 ds:flex-wrap md:items-center md:flex-nowrap min-h-[70vh]">
            <div className="p-6">
              <div className="space-y-6">
                <h1 className="font-semibold">Mobile Banking</h1>
                <h2 className=" ds:text-3xl md:text-4xl w-full md:max-w-lg font-inter text-balance font-semibold">
                  Experience mobile banking at a whole new level
                </h2>
                <p className="font-medium text-sm w-full md:max-w-xl text-body_text">
                  We integrated expense tracking and mobile banking , so that
                  way you get to keep track of your spending , without having to
                  put down anything in data ,just track as you spend
                </p>
                <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-4">
                    <button className="rounded-full bg-primary/30 text-primary p-1">
                      <img src={check} alt="" />
                    </button>
                    <p className="text-body_text font-semibold text-sm">
                      Instant transactions
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="rounded-full bg-primary/30 text-primary p-1">
                      <img src={check} alt="" />
                    </button>
                    <p className="text-body_text font-semibold text-sm">
                      Payments worldwide
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="rounded-full bg-primary/30 text-primary p-1">
                      <img src={check} alt="" />
                    </button>
                    <p className="text-body_text font-semibold text-sm">
                      Saving account
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="rounded-full bg-primary/30 text-primary p-1">
                      <img src={check} alt="" />
                    </button>

                    <p className="text-body_text  font-semibold text-sm">
                      100% mobile banking
                    </p>
                  </div>
                </div>
                <div className="flex sm:items-center flex-wrap gap-3">
                  <a href="#">
                    <img
                      src={google}
                      className="object-cover"
                      width="120"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src={apple}
                      className="object-cover"
                      height="80"
                      width="120"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <img
              src={app}
              width="288"
              className=" translate-y-6"
              alt="phone-app"
            />
          </div>
        </section>
        <br></br>
        <br />
      <Accordion />

        <section className="blog-section w-full tw-container py-24">
          <div className="w-full grid-cat-3">
            <div className="space-y-5">
              <img
                src={blog1}
                className="rounded-md"
                alt=""
              />
              <div className="space-y-4">
                <h1 className="font-semibold text-body_text text-lg">
                  How to use The-future for your start up
                </h1>
                <p className="text-text_normal ">
                  Sadly this feature hasnt been made yet, we havent spread to a
                  business module yet , but we would keep you updated , because
                  we are currently working on it
                </p>
                <div className="flex items-center gap-4">
                  <button className="w-fit rounded-md py-1 px-3 text-sm font-medium bg-gray-300/35 text-heading_text">
                    Product
                  </button>
                  <button className="w-fit rounded-md py-1 px-3 text-sm font-medium bg-gray-300/35 text-heading_text">
                    Business
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <img
              src={blog2}
                className="rounded-md"
                alt=""
              />
              <div className="space-y-4">
                <h1 className="font-semibold text-body_text text-lg">
                  How we were able to set up "The-future"
                </h1>
                <p className="text-text_normal ">
                  clearly it's a lot ,but it was all based on resiliance and
                  believing that we could do something that would serve a lot of
                  people and make them comfortable
                </p>
                <div className="flex items-center gap-4">
                  <button className="w-fit rounded-md py-1 px-3 text-sm font-medium bg-gray-300/35 text-heading_text">
                    Product
                  </button>
                  <button className="w-fit rounded-md py-1 px-3 text-sm font-medium bg-gray-300/35 text-heading_text">
                    Company
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <img
               src={blog3}
                className="rounded-md"
                alt=""
              />
              <div className="space-y-4">
                <h1 className="font-semibold text-body_text text-lg">
                  improve your savings using our app{" "}
                </h1>
                <p className="text-text_normal ">
                  you can use the budget tracker feature on our app, to track
                  your spending habits and savings, all you need to do is fill
                  in your budget and things you spend on
                </p>
                <div className="flex items-center gap-4">
                  <button className="w-fit rounded-md py-1 px-3 text-sm font-medium bg-gray-300/35 text-heading_text">
                    Lifestyle
                  </button>
                  <button className="w-fit rounded-md py-1 px-3 text-sm font-medium bg-gray-300/35 text-heading_text">
                    Personal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Content;
