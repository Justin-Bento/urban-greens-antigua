import React from 'react';
import data from '../../public/lib/data.json';

export default function Learn() {
  return (
    <section className="learn">
      <div className="wrapper">
        <div className="my-24">
          <h1 className="headline-2">Frequently Asked Questions</h1>
          {data.faqs.map((item, index) => {
            return (
              <div className="my-12" key={index}>
                <div className="">
                  <h3 className="subtitle-1">{item.headline}</h3>
                </div>
                <div className="">
                  <p className="body-1">{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
