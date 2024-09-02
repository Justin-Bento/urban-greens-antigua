import React from 'react';

export default function About() {
  return (
    <>
      <main className="">
        <div className="About">
          <section className="wrapper">
            <div className="my-12 md:my-24">
              <div className="aboutGrid">
                <div className="1">
                  <h1 className="headline3">About Us</h1>
                  <p className="body1 line-clamp-4 my-4">{about.body.body1}</p>
                  <p className="body1 line-clamp-4 my-4">{about.body.body2}</p>
                </div>
                <div className="2">
                  <img src={about.image} alt="" loading="lazy" className="image" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

let about = {
  image: '/assets/home/hero.png',
  body: {
    body1:
      'Urban Greens Antigua started out as a passion project that quickly evolved into a business. We realized that our customers wanted to experience and enjoy a fresh way of using micro greens.',
    body2:
      'We want to share the many ways people use our products and invite you to share your recipes through our social media. As we grow, we will share new experiences.'
  }
};
