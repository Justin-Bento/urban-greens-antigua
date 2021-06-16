import React from 'react';

export default function About() {
  return (
    <div className="About">
      <section className="wrapper">
        <div className="my-12 md:my-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div className="1">
              <h1 className="headline-3">About Us</h1>
              <p className="body-1 line-clamp-4 my-4">
                Urban Greens Antigua started out as a passion project that
                quickly eveolved into a business. We realzed that our customers
                wanted to experience enjoy a fresh way of eating vegtables.
              </p>
              <p className="body-1 line-clamp-4 my-4">
                That’s why we had to adapt and find a way to improve our
                equipment and the customer experience. So We are now selling at
              </p>
              <p className="body-1 line-clamp-4 my-4">
                Along the way, we want to share you our journey of learning more
                things about our community and see how people use our product
                our Microgreens. So that we can give everyone a change to
                expreicne microgreens.
              </p>
            </div>
            <div className="2">
              <img
                src="/assets/home/hero.png"
                alt=""
                loading="lazy"
                className="image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
