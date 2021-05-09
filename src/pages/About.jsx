import React from 'react';
import data from '../lib/data.json';

export default function About() {
  return (
    <div className="About">
      <div className="wrapper my-24">
        <h1 className="h2">About Urban Greens Antigua</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad mainim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="my-24">
          <h2 className="h2">Our Rules To You!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 my-12 gap-12">
            <div className="1">
              <h3 className="h3">We Are transparent</h3>
            </div>
            <div className="2">
              <h3 className="h3">We Are open and inclusive To everyone</h3>
            </div>
            <div className="3">
              <h3 className="h3">We speak our audience’s language</h3>
            </div>
            <div className="3">
              <h3 className="h3">Help People Live & Maintain a Healty Lifestyle</h3>
            </div>
          </div>
        </div>
        {/* end of our rules to  you */}
        <div className="my-24">
          <h2 className="h2">Help us build the Community that is right for you</h2>
          <p>Don’t forget to follow us on social media to know what the Urban Greens Community is doing!</p>
        </div>
        <div className="my-24">
          <h2 className="h2">Frequently Asked Questions</h2>
          {data.faqs.map((item, index) => {
            return (
              <div className="grid grid-cols-1 md:grid-cols-2 items-center my-12" key={index}>
                <div className="">
                  <h3 className="h3">{item.headline}</h3>
                </div>
                <div className="">
                  <p>{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
