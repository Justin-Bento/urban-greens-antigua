import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import data from '../lib/data.json';

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="bg-gray-200 mb-24">
          <div className="wrapper py-24 lg:text-center">
            <h1 className="h1">Urban Greens Antigua.</h1>
            <p className="my-4 text-xl text-left sm:text-2xl sm:text-center ">
              Your one stop shop to get the best microgreens in Antigua. As our goal is to, help you bring back greens into
              your lifestyle. So You can maintin a meaningful lifestyle.
            </p>
            <div className="mb-4">
              <Link to="/products">
                <button className="btn-high">View Products</button>
              </Link>
              <Link to="/products">
                <button className="btn-medium">Call Now</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* end of hero section */}
      <section className="features">
        <div className="wrapper my-24">
          {data.features.map((item, index) => {
            return (
              <div key={index} className="section grid grid-cols-1 md:grid-cols-2 gap-24">
                <div className="">
                  <h2 className="h2">{item.headline}</h2>
                  <p>{item.body}</p>
                </div>
                <div className="">
                  <div className="bg-gray-200 w-full h-96"></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* end of features */}
      <section class="text-white bg-gray-600 my-24">
        <div class="flex flex-col items-stretch justify-between px-4 py-20 mx-auto max-w-7xl lg:flex-row sm:items-center">
          <div>
            <h2 class="mb-1 text-xl font-semibold text-left sm:text-2xl sm:text-center lg:text-left">
              Built for companies of all sizes
            </h2>
            <p class="mb-6 text-lg font-normal text-left text-gray-200 sm:text-xl lg:mb-0 sm:text-center lg:text-left">
              Start your 14-day free trial or book a personal demo.
            </p>
          </div>
          <div class="flex flex-col mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <a href="#" class="w-full btn btn-light btn-lg sm:w-auto">
              Start free trial
            </a>
            <a href="#" class="w-full btn btn-outline-light btn-lg sm:w-auto">
              Book a demo
            </a>
          </div>
        </div>
      </section>
      {/* end of call-to-action */}
      <Footer />
    </div>
  );
}
