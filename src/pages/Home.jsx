import React from 'react';
import { Link } from 'react-router-dom';
import data from '../lib/data.json';

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="bg-hero-img bg-no-repeat bg-cover">
          <div className=" flex justify-center py-16 bg-black bg-opacity-50">
            <div className="wrapper text-center">
              <h1 className="headline-1 text-white">Urban Greens Antigua.</h1>
              <p className="my-4 headline-5 text-white">
                Our goal is to show people the future of micro-greens by showing
                people how they use micro-greens in their lifestyle.
              </p>
              <div className="flex items-center justify-center">
                <Link to="/product">
                  <button className="btn-contain m-2">View Products</button>
                </Link>
                <Link to="/learn">
                  <button className="btn-contain-white m-2">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of hero section */}
      <section className="features">
        <div className="wrapper my-24">
          {data.features.map((item, index) => {
            return (
              <div
                key={index}
                className="my-24 grid grid-cols-1 md:grid-cols-2 gap-24"
              >
                <div className="">
                  <h2 className="headline-3 mb-4">{item.headline}</h2>
                  <p className="body-1">{item.body}</p>
                </div>
                <div className="">
                  <img
                    src={`../assets/home/${item.media}`}
                    alt=""
                    className="image"
                  />
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
            <h2 className="headline-3 text-white mb-4">
              Learn More About Your Greens!
            </h2>
            <p className="subtitle-2 text-white">
              Get to know Microgreens more so we can help you make an informed
              purchase.
            </p>
          </div>
          <div className="flex flex-col mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <a href="#" className="w-full btn btn-light btn-lg sm:w-auto">
              Learn More
            </a>
            <a
              href="#"
              className="w-full btn btn-outline-light btn-lg sm:w-auto"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      {/* end of call-to-action */}
      <section className="benifits">
        <div className="wrapper my-24">
          <h2 className="headline-3">Incredible benefits of microgreens</h2>
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
                  “We endeavour to build a truly human AND high-performing
                  workplace, where everyone can do the best work of their lives.
                  This product is a key part of facilitating this culture by
                  being our one-stop-shop for all things performance
                  development.”
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
                  <p className="mb-1 text-xs font-semibold tracking-widest text-gray-800 uppercase">
                    Praveen Juge
                  </p>
                  <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                    CEO, Birds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of testimonials */}
      <section className="useage">
        <div className="my-24">
          <div className="wrapper">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              <div className="">
                <h2 className="headline-3">
                  Here’s How People Use Microgreens!
                </h2>
                {data.useage.map((item, index) => {
                  return (
                    <div key={index} className="my-8">
                      <h3 className="subtitle-1">{item.headline}</h3>
                      <p>{item.body}</p>
                    </div>
                  );
                })}
              </div>
              <div className="">
                <img
                  src="../assets/home/feature-04.png"
                  alt=""
                  className="image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
