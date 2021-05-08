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
            <h1 className="h1 ">Urban Greens Antigua.</h1>
            <p className="text-xl trackinig-wider">
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
      <Footer />
    </div>
  );
}
