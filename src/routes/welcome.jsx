import React from 'react'
import Navbar from '../components/navbar'
import Footer1 from '../components/Footer'
import Content from "../components/Content"
import { Hero } from '../components/Hero'
import BackToTop from '../components/topTop'
import Loader from '../components/loader'
import Metric from '../components/metric'
import Features from "../components/Features";

const welcome = () => {
  return ( 
    <main className='relative'>
      <Loader />
      <div className="w-full py-2 px-4 bg-primary">
        <div className="flex items-center sm:flex-nowrap flex-wrap ds:justify-start sm:justify-center gap-3">
          <button className="ds:hidden bs:flex items-center justify-center bs:text-sm bg-gray-500/20 py-1 rounded-md px-3 text-white">
            New
          </button>
          <p className="bs:text-sm text-xs font-inter text-white">
            🌟️ Get unlimited access to updates from us weekly{" "}
          </p>
        
        </div>
      </div>
      {/* <welcomeBar /> */}
      <Navbar />
      <Hero />
      <Features />
      <Metric />
      <Content />
      <BackToTop />
      <Footer1 />
    </main>
  )
}

export default welcome
