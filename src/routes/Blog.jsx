import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";
import Loader from "../components/loader";
import Footer1 from "../components/Footer";
import Metric from "../components/metric";
import {
  blog1,
  blog2,
  blog3,
  gasImg,
  laptop,
  people,
  starfilled,
} from "../static/images";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Blog and Updates</title>
      </Helmet>
      <Navbar />
      <Loader />
      <div className="min-h-auto py-16 overflow-hidden relative hero-2 ">
        <div className="w-full  tw-container ">
          <div className="w-full pt-6 flex lg:flex-nowrap flex-wrap justify-between gap-10">
            <div className="space-y-7 md:max-w-2xl">
              <h1 className="md:text-6xl ds:text-4xl font-inter text-balance font-bold md:leading-[4.5rem] text-heading_text">
                Blog, News & Updates from us
              </h1>
              <p className="font-inter font-medium text-base text-balance leading-7 text-text_normal">
                Latest News From Our blog & Event fanpage
              </p>
              <button className="btn-primary font-inter font-medium w-fit text-sm">
                <p>Read more</p>
              </button>
            </div>
            {/* <div className="bg-white rounded-md p-4 py-6 max-w-md w-full flex flex-col justify-between gap-6 md:min-w-[27rem]">
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
            </div> */}
          </div>
        </div>
      </div>
      <Metric />
      <section className="blog-section w-full tw-container pb-24">
        <div className="w-full grid-cat-3">
          <div className="space-y-5">
            <img src={blog1} className="rounded-md" alt="" />
            <div className="space-y-4">
              <h1 className="font-semibold text-body_text text-lg">
                How to use The-future for your start up
              </h1>
              <p className="text-text_normal ">
                Sadly this feature hasnt been made yet, we havent spread to a
                business module yet , but we would keep you updated , because we
                are currently working on it
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
            <img src={gasImg} className="rounded-md" alt="" />
            <div className="space-y-4">
              <h1 className="font-semibold text-body_text text-lg">
                How to integrate the-future with oil and gas
              </h1>
              <p className="text-text_normal ">
                when it comes to business our self help Ai can be helpful and
                aid you on how to get started , likewise we are working on a
                business standard of the-future
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
            <img src={blog2} className="rounded-md" alt="" />
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
            <img src={laptop} className="rounded-md" alt="" />
            <div className="space-y-4">
              <h1 className="font-semibold text-body_text text-lg">
                We have a standard ecommerce feature
              </h1>
              <p className="text-text_normal ">
                Our team has succesfully built an ecommerce feature, that also
                allows you to chat and call , customers/vendors, and guess what?
                you can pay with our virtual card
              </p>
              <div className="flex items-center gap-4">
                <button className="w-fit rounded-md py-1 px-3 text-sm font-medium bg-gray-300/35 text-heading_text">
                  Feature
                </button>
                <button className="w-fit rounded-md py-1 px-3 text-sm font-medium bg-gray-300/35 text-heading_text">
                  Product
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <img src={people} className="rounded-md" alt="" />
            <div className="space-y-4">
              <h1 className="font-semibold text-body_text text-lg">
                Our app can serve a lot of people's needs
              </h1>
              <p className="text-text_normal ">
                if you really get to use The-future , then you would see this
                for yourself , it is so fast with great user experience and a
                modern user interface to fit your taste
              </p>
              <div className="flex items-center gap-4">
                <button className="w-fit rounded-md py-1 px-3 text-sm font-medium bg-gray-300/35 text-heading_text">
                  Social
                </button>
                <button className="w-fit rounded-md py-1 px-3 text-sm font-medium bg-gray-300/35 text-heading_text">
                  Product
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <img src={blog3} className="rounded-md" alt="" />
            <div className="space-y-4">
              <h1 className="font-semibold text-body_text text-lg">
                improve your savings using our app{" "}
              </h1>
              <p className="text-text_normal ">
                you can use the budget tracker feature on our app, to track your
                spending habits and savings, all you need to do is fill in your
                budget and things you spend on
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

        <div className="testimonials  masonary grid ds:grid-cols-1 gap-4 xl:grid-cols-3 md:grid-cols-2">
          <div className="testimonial-box w-full row-span-1 rounded-md border p-4 border-primary bg-primary/20 space-y-5 smooth hover:bg-primary/15">
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
          <div className="testimonial-box w-full md:row-span-2 rounded-md border p-4 border-primary space-y-5 smooth hover:bg-primary/15">
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
          <div className="testimonial-box w-full  rounded-md border p-4 border-primary space-y-5 smooth hover:bg-primary/15">
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
          <div className="testimonial-box w-full  rounded-md border p-4 border-primary space-y-5 smooth hover:bg-primary/15">
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
          <div className="testimonial-box w-full  rounded-md border p-4 border-primary space-y-5 smooth hover:bg-primary/15">
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
      <Footer1 />
    </div>
  );
};

export default Blog;
