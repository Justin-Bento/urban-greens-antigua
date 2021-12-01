import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="">
      <section className="hero">
        <div className="spacing">
          <div className="wrapper">
            <h1 className="headline1 md:text-center">
              Enjoy fresh microgreens!
            </h1>
            <p className="heroText">
              Our mission is to produce and supply our locally grown Microgreens
              to consumers, restaurants and hotels.
            </p>
            <div className="md:text-center">
              <Link to="/products" className="btnContained m-2">
                Check Our Greens
              </Link>
              <Link to="/faqs" className="btnOutline">
                Learn More
              </Link>
            </div>
            <div className="mt-16">
              <img
                src="/assets/home/hero.png"
                alt=""
                className="w-full aspect-h-4 rounded"
              />
              <p className="caption center">Healty Microgreen</p>
            </div>
          </div>
        </div>
      </section>
      {/* end of hero section */}
      <section className="perks spacing">
        <div className="wrapper">
          <div className="perksGrid">
            <div>
              <h2 className="headline3 mb-4">Freshly Grown In Antigua</h2>
              <p className="body1">
                Most of our plants are harvested in a ten-day to a two-week
                cycle. We grow and harvest our greens in a controlled
                environment, without the use of chemicals or pesticides, to
                ensure a healthy and nutritional product.
              </p>
            </div>
            <div className="w-full h-full py-14">
              <img src="/assets/home/feature-01.png" alt="" className="image" />
            </div>
          </div>
          <div className="perksGrid">
            <div className="order-none md:order-2">
              <h2 className="headline3 mb-4">Can Be Used in Many Ways.</h2>
              <p className="body1">
                Microgreens can be used or consumed on their own, mixed into
                salads or smoothies, used as a topper for sanwiches or as a
                garnish or decoration for a plate.
              </p>
            </div>
            <div className="w-full h-full py-14">
              <img src="/assets/home/feature-02.png" alt="" className="image" />
            </div>
          </div>
          <div className="perksGrid">
            <div>
              <h2 className="headline3 mb-4">Sustainable Packaging</h2>
              <p className="body1">
                All our packaging is either reusable or able to be re-cycled.
              </p>
            </div>
            <div className="w-full h-full py-14">
              <img src="/assets/home/feature-03.png" alt="" className="image" />
            </div>
          </div>
        </div>
      </section>
      {/* end of perks section */}
      <section className="call-to-action spacing">
        <div className="text-white bg-green-800">
          <div className="wrapper">
            <div className="ctaGrid">
              <div>
                <h2 className="headline3 text-white mb-1">
                  Have Any Questions About Microgreens?
                </h2>
                <p className="subtitle1 font-medium text-gray-100 mb-2">
                  Visit our Freqently Asked Questions page to see what people
                  ask us.
                </p>
              </div>
              <div className="ctaFlex">
                <Link
                  to="/learn"
                  className="btnContained bg-white text-green-700"
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="btnOutline border-green-50 text-green-50"
                >
                  Message Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of call-to-action section */}
      <section className="benifits">
        <div className="wrapper spacing">
          <div className="mb-8">
            <h2 className="headline3 mb-1">
              Incredible Benifits Of Microgreens
            </h2>
            <h3 className="headline6 text-gray-600 tracking-wide">
              See Why Microgreens are considered the new superfood!
            </h3>
          </div>
          <div className="benfitsGrid">
            <div className="1 md:flex">
              <div className="md:mx-2 text-green-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="">
                <h6 className="subtitle1">Packed With Vitamins</h6>
                <p className="body1">
                  Microgreens are packed with vitamins, like iron, magnesium,
                  potassium, zinc and copper.
                </p>
              </div>
            </div>
            <div className="2 md:flex">
              <div className="md:mx-2 text-green-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="2-item">
                <h6 className="subtitle1">Work In Many Dishes</h6>
                <p className="body1">
                  Microgreens have many families which vary in taste, smell,
                  colour and presintation.
                </p>
              </div>
            </div>
            <div className="3 md:flex">
              <div className="md:mx-2 text-green-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="3-item">
                <h6 className="subtitle1">Great For Smoothies And Juices</h6>
                <p className="body1">
                  These greens are great for smoothies, juices, shakes, as they
                  can boost your immune levels.
                </p>
              </div>
            </div>
            <div className="4 md:flex">
              <div className="md:mx-2 text-green-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="">
                <h6 className="subtitle1">Microgreens are affordable</h6>
                <p className="body1">
                  Microgreens are affordable as they are packed with nutrients
                  and intense flavours which means less product need to be used.
                </p>
              </div>
            </div>
            <div className="5 md:flex">
              <div className="">
                <div className="md:mx-2 text-green-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="">
                <h6 className="subtitle1">Give Flare To Dishes</h6>
                <p className="body1">
                  Chefs use the many different coloured and flavoured
                  microgreens to intensify flavour or add visual impacts to
                  their meals. .
                </p>
              </div>
            </div>
            <div className="6 md:flex">
              <div className="">
                <div className="md:mx-2 text-green-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="">
                <h6 className="subtitle1">Great For Your Health</h6>
                <p className="body1">
                  Microgreens contain many vitamins, minerals, antioxidants and
                  nutrients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of benifits section */}
      <section className="testimonials my-24">
        <div className="bg-gray-100 py-24">
          <div className="wrapper">
            <p className="center overline text-green-800">
              See What People Have to say About Urban Greens
            </p>
            <h2 className="headline3 font-normal italic md:text-center my-4 leading-relaxed">
              “We endeavour to build a truly human AND high-performing
              workplace, where everyone can do the best work of their lives.
              This product is a key part of facilitating this culture by being
              our one-stop-shop for all things performance development.”
            </h2>
          </div>
        </div>
      </section>
      {/* end of testimonials section */}
      <section className="useage spacing">
        <div className="wrapper">
          <div className="spacing-md">
            <h2 className="headline3 mb-1">See how people use Microgreens!</h2>
            <p className="body1">
              Follow our community and stay up today to see how people are using
              microgreens in their Lifestyle.
            </p>
          </div>
          <div className="usageGrid">
            <div className="1">
              <div className="">
                <h6 className="subtitle1">
                  Visit Our Faceebok Microgreen Group!
                </h6>
                <p className="body1">
                  Got something to share or wating for our lastest update?
                  Interact with our online community, and see how people from
                  all backgrounds are using our greens.
                </p>
              </div>
              <div className="my-8">
                <h6 className="subtitle1">Visit Our Instagram Page!</h6>
                <p className="body1">
                  You can follow our instagram page for insperation on how you
                  can incoperate microgreens into your lifestyle.
                </p>
              </div>
            </div>
            <div className="2">
              <img src="/assets/home/feature-04.png" alt="" className="image" />
            </div>
          </div>
        </div>
      </section>
      {/* end of testimonials section */}
    </div>
  );
}
