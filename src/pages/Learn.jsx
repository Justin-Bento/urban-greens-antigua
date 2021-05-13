import React from 'react';
import data from '../lib/data.json';

export default function Learn() {
  return (
    <section className="learn">
      <div className="wrapper">
        <div className="my-24">
          <h1 className="headline-2">Frequently Asked Questions</h1>
          {data.faqs.map((item, index) => {
            return (
              <div
                className="grid grid-cols-1 md:grid-cols-2 items-center my-12"
                key={index}
              >
                <div className="">
                  <h3 className="subtitle-1">{item.headline}</h3>
                </div>
                <div className="">
                  <p>{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
