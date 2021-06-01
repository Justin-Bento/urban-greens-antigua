import React from 'react';
import data from '../public/data/data.json';

export default function faqs() {
  return (
    <section className="faqs">
      <div className="wrapper">
        <div className="spacing">
          <h1 className="headline-2">Frequently Asked Questions</h1>
          {data.faqs.map((item, index) => {
            return (
              <div className="spacing-md" key={item.id}>
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
