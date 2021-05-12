import React from 'react';
import data from '../lib/data.json';

export default function About() {
  return (
    <div className="About">
      <section className="wrapper">
        <div className="my-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div className="1">
              <h1 className="headline-3">About Us</h1>
              <p className="mt-8 line-clamp-4">
                Our greens are grown indoors in hydroponic systems where a
                constant stream of mineral enriched water feeds the plants
                through their roots. Growing indoors allows us to control the
                all aspects of the environment, from nutrients, air, and
                temperature, to lighting spectrums and crop rotation. We are
                able to offer optimal growing conditions that make our plants
                healthy, strong and oh so tasty! We also use energy efficient
                heating and cooling technology and compost all waste products,
                we are focused on being as "green" as we can get!
              </p>
              <p className="mt-8 line-clamp-4">
                With Colorado’s weather swings from extreme heats to harsh
                colds, urban farming enables us to grow all-year-round. We
                cultivate our greens in an environment that is also pest-free
                and weed-free, completely eliminating any use of harmful
                chemicals or pesticides. The result? Our produce is the
                prettiest and tastiest we’ve ever grown or eaten!
              </p>
            </div>
            <div className="2">
              <img
                src="../src/assets/home/hero.png"
                alt=""
                loading="lazy"
                className="image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper">
        <h2 className="headline-3 mb-4">Our Values!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="1">
            <h3 className="subtitle-1">We Are transparent</h3>
            <p className="line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              aut possimus natus impedit labore, alias nulla laboriosam cumque
              cum totam delectus nostrum consequatur, fugiat error nemo unde
              illum non? Blanditiis.
            </p>
          </div>
          <div className="2">
            <h3 className="subtitle-1">
              We Are open and inclusive To everyone
            </h3>
            <p className="line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              aut possimus natus impedit labore, alias nulla laboriosam cumque
              cum totam delectus nostrum consequatur, fugiat error nemo unde
              illum non? Blanditiis.
            </p>
          </div>
          <div className="3">
            <h3 className="subtitle-1">We speak our audience’s language</h3>
            <p className="line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              aut possimus natus impedit labore, alias nulla laboriosam cumque
              cum totam delectus nostrum consequatur, fugiat error nemo unde
              illum non? Blanditiis.
            </p>
          </div>
          <div className="3">
            <h3 className="subtitle-1">
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
        {/* end of our rules to  you */}
      </section>
      <section className="mb-24">
        <div className="bg-gray-100 py-12">
          <div className="wrapper">
            <h2 className="headline-4 mb-2">
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
        <div className="mb-24">
          <h2 className="headline-3 mb-4">Our Story</h2>
          <div className="2">
            <p className="line-clamp-4">
              We couldn't understand where we went wrong with our kids and their
              unwillingness to eat healthy green foods. For years we placed new
              vegetables on their plates to "try" with no success, only
              struggles. That was until one day at the Longmont Farmers Market
              they were compelled to try this small leafy green, a Sunflower
              Shoot. That's when we knew how appealing these little leafy
              microgreens could be for kids, and how it could help give them the
              nutrition that they lack from not eating their greens.
            </p>
            <p className="line-clamp-4">
              After that day, we started growing microgreens at home. We grew
              more than we could eat and began to share them with friends and
              family. After extended practice for what it takes to grow
              different varieties indoors, hydroponically, our passion was
              further ignited by the impacts we could make on the future of
              agriculture through sustainable farming.
            </p>
            <p className="line-clamp-4">
              And that's when the idea for Wispy Greens was born and lettuce was
              added to our grow room. We believe introducing microgreens is much
              easier when they are tossed in a salad. This way, everyone who is
              new to microgreens could also enjoy their go-to lettuce with the
              added benefit of our tiny vegetables. The possibilities that
              hydroponic growing offers is opening up as we grow our business.
              We'll be adding more greens, like full grown herbs in the next
              phase of our business, when we build our Greenhouse!
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <div className="mb-24">
            <h2 className="headline-3 mb-4">A New Horizon in 2020</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <p className="line-clamp-4">
                COVID-19 was the perfect storm for our subscription business.
                With the benefits of delivering nutrient-rich greens direct to
                consumers, we suddenly found ourselves experiencing extreme
                growing pains. And for good reason! We hit full capacity in
                June. In August we purchased a new growing facility with enough
                space for future growth. After much TLC to get our space
                grow-ready, we started delivering our greens again in December.
              </p>
              <p className="line-clamp-4">
                We continue to serve our Longmont community along with the
                surrounding areas of: Hygiene, Lyons, Niwot, Mead, and Berthoud,
                Colorado. We sincerely hope you can join the Wispy family and
                reap the benefits of wholesome greens during this challenging
                time for overall health and wellness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
