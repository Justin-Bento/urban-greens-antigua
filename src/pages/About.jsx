import React from 'react';
import Footer from '../components/Footer.jsx';
import data from '../lib/data.json';

export default function About() {
  return (
    <div className="About">
      <section className="wrapper">
        <div className="my-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div className="1">
              <h1 className="h2">About Urban Greens Antigua</h1>
              <p className="mt-8">
                Urban Greens, is a small business located on the island of
                Antigua. It started out as a side project, to keep everyone's
                mind off of the state of the world. This allowed urban greens to
                perfect their craft. When the lock-down restrictions eased up.
                The owners decided to keep the business going and sharing their
                product throughout Antigua.
              </p>
              <p className="mt-8">
                We started out by sending out products to friends, family. Doing
                this allowed us to see what people think of Micro greens, and it
                was a huge success. We kept our heads down and continue to
                improve our craft. Now urban greens Antigua is under a new
                motive. They
              </p>
              <p className="mt-8">
                We started out by sending out products to friends, family. Doing
                this allowed us to see what people think of Micro greens, and it
                was a huge success. We kept our heads down and continue to
                improve our craft. Now urban greens Antigua is under a new
                motive. They
              </p>
            </div>
            <div className="2">
              <img
                src="../src/assets/home/hero.png"
                alt=""
                loading="lazy"
                className="aspect-w-4 aspect-h-3"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper">
        <div className="my-24">
          <h2 className="h2">Our Rules To You!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 my-12 gap-12">
            <div className="1">
              <h3 className="h3">We Are transparent</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                aut possimus natus impedit labore, alias nulla laboriosam cumque
                cum totam delectus nostrum consequatur, fugiat error nemo unde
                illum non? Blanditiis.
              </p>
            </div>
            <div className="2">
              <h3 className="h3">We Are open and inclusive To everyone</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                aut possimus natus impedit labore, alias nulla laboriosam cumque
                cum totam delectus nostrum consequatur, fugiat error nemo unde
                illum non? Blanditiis.
              </p>
            </div>
            <div className="3">
              <h3 className="h3">We speak our audience’s language</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                aut possimus natus impedit labore, alias nulla laboriosam cumque
                cum totam delectus nostrum consequatur, fugiat error nemo unde
                illum non? Blanditiis.
              </p>
            </div>
            <div className="3">
              <h3 className="h3">
                Help People Live & Maintain a Healthy Lifestyle
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                aut possimus natus impedit labore, alias nulla laboriosam cumque
                cum totam delectus nostrum consequatur, fugiat error nemo unde
                illum non? Blanditiis.
              </p>
            </div>
          </div>
        </div>
        {/* end of our rules to  you */}
      </section>
      <section>
        <div className="bg-gray-100 py-12">
          <div className="wrapper">
            <h2 className="h2">
              Help us build the Community that is right for you
            </h2>
            <p>
              Don’t forget to follow us on social media to know what the Urban
              Greens Community is doing!
            </p>
          </div>
        </div>
      </section>
      <section className="wrapper">
        <div className="my-24">
          <h2 className="h2">Frequently Asked Questions</h2>
          {data.faqs.map((item, index) => {
            return (
              <div
                className="grid grid-cols-1 md:grid-cols-2 items-center my-12"
                key={index}
              >
                <div className="divide-y divide-light-blue-400">
                  <h3 className="h3">{item.headline}</h3>
                </div>
                <div className="">
                  <p>{item.body}</p>
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
