import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import data from '../lib/data.json';

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="bg-hero-img py-24">
          <div className="wrapper lg:text-center">
            <h1 className="h1">Urban Greens Antigua.</h1>
            <p className="my-4 text-xl text-left sm:text-2xl sm:text-center ">
              Your one stop shop to get the best microgreens in Antigua. As our goal is to, help you bring back greens into
              your lifestyle. So You can maintin a meaningful lifestyle.
            </p>
            <div className="mb-4">
              <Link to="/products">
                <button className="btn-contained">View Products</button>
              </Link>
              <Link to="/products">
                <button className="btn-outlined">Learn More</button>
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
                  <img src={`../src/assets/home/${item.media}`} alt="" className="image" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* end of features */}
      <section className="text-white bg-green-600 my-24">
        <div className="flex flex-col items-stretch justify-between px-4 py-20 mx-auto max-w-7xl lg:flex-row sm:items-center">
          <div>
            <h2 className="mb-1 text-xl font-semibold text-left sm:text-2xl sm:text-center lg:text-left">
              Built for companies of all sizes
            </h2>
            <p className="mb-6 text-lg font-normal text-left text-gray-200 sm:text-xl lg:mb-0 sm:text-center lg:text-left">
              Start your 14-day free trial or book a personal demo.
            </p>
          </div>
          <div className="flex flex-col mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <a href="#" className="w-full btn btn-light btn-lg sm:w-auto">
              Start free trial
            </a>
            <a href="#" className="w-full btn btn-outline-light btn-lg sm:w-auto">
              Book a demo
            </a>
          </div>
        </div>
      </section>
      {/* end of call-to-action */}
      <section className="benifits">
        <div className="wrapper my-24">
          <h2 className="text-3xl tracking-wide font-medium mb-2 capitalize">Incredible benefits of microgreens</h2>
          <p className="mb-16 text-lg text-gray-500 tracking-wide">
            Get insights to dig down into what's powering your growth the most
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.benefits.map((item, index) => {
              return (
                <div key={index} className="md:flex">
                  <div className="my-1 md:mx-4 text-green-600">
                    <ion-icon name="checkmark"></ion-icon>
                  </div>
                  <div className="">
                    <h3 className="h3">{item.headline}</h3>
                    <p>{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* end of microgreen-benifits */}
      <section className="testimonials">
        <div className="section">
          <div className="bg-gray-100 py-24">
            <div className="wrapper">
              <div className="text-left md:text-center">
                <p className="mb-8 text-xs font-bold tracking-widest text-green-600 uppercase">
                  Why People Choose Urban Greens
                </p>
                <h1 className="mb-10 text-xl italic font-normal text-gray-800 md:leading-snug md:text-3xl">
                  “We endeavour to build a truly human AND high-performing workplace, where everyone can do the best work of
                  their lives. This product is a key part of facilitating this culture by being our one-stop-shop for all
                  things performance development.”
                </h1>
              </div>
              <div className="flex items-center justify-center md:justify-center">
                <div className="avatar">
                  <img
                    src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Photo of Praveen Juge"
                    className="avatars"
                  />
                </div>
                <div className="ml-4">
                  <p className="mb-1 text-xs font-semibold tracking-widest text-gray-800 uppercase">Praveen Juge</p>
                  <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">CEO, Birds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of testimonials */}
      <section className="useage">
        <div className="section">
          <div className="wrapper">
            <h2 className="h2">Here’s How People Use Microgreens!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              <div className="">
                {data.useage.map((item, index) => {
                  return (
                    <div key={index} className="my-8">
                      <h3 className="h3">{item.headline}</h3>
                      <p>{item.body}</p>
                    </div>
                  );
                })}
              </div>
              <div className="">
                <img src="../src/assets/home/feature-04.png" alt="" className="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
