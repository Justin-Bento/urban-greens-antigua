import React from 'react';
import { Link } from 'react-router-dom';
import data from '../lib/data.json';

export default function Home() {
  return (
    <div className="">
      <section className="hero">
        <div className="bg-hero-img bg-no-repeat bg-cover mb-24">
          <div className="py-24 bg-black bg-opacity-50">
            <div className="wrapper">
              <h1 className="headline-1 text-gray-50 md:text-center">
                See What Microgreen Are Right For You!
              </h1>
              <p className="text-xl font-medium max-w-full md:text-center text-gray-200 my-8">
                Urban Greens Antigua is a company that grows, sells and helps
                people learn more about Microgreens. We do this by showing
                people the future Of Microgreens. As well as show people how
                they can incoruperate it into Their Lifestyle.
              </p>
              <div className="md:text-center">
                <button className="btn-primary m-2">View Work</button>
                <button className="btn-light m-2">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of hero section */}
      <section className="perks my-24">
        <div className="wrapper">
          <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-8 md:gap-y-16 gap-x-10 md:gap-x-24">
            <div>
              <h2 className="headline-2 mb-4">Freshly Growin In Antigua</h2>
              <p className="body-1">
                Handle your subscriptions and transactions efficiently with the
                clear overview in Dashboard. Features like the smart search
                option allow you to quickly find any data you’re looking for.
              </p>
            </div>
            <div className="w-full h-full py-14">
              <img src="/assets/home/feature-01.png" alt="" className="image" />
            </div>
          </div>
          <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-16 gap-x-10 md:gap-x-24">
            <div className="order-none md:order-2">
              <h2 className="headline-2 mb-4">Can Be Used With Many Dishes</h2>
              <p className="body-1 mb-4">
                Love to code? Next to our ready-made and free plugins you can
                use our expansive yet simple API; decide how you integrate
                Payments and build advanced and reliable products yourself from
                scratch.
              </p>
            </div>
            <div className="w-full h-full py-14">
              <img src="/assets/home/feature-02.png" alt="" className="image" />
            </div>
          </div>
          <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-8 md:gap-y-16 gap-x-10 md:gap-x-24">
            <div>
              <h2 className="headline-2 mb-4">Sustainable Packiging</h2>
              <p className="body-1">
                Handle your subscriptions and transactions efficiently with the
                clear overview in Dashboard. Features like the smart search
                option allow you to quickly find any data you’re looking for.
              </p>
            </div>
            <div className="w-full h-full py-14">
              <img src="/assets/home/feature-03.png" alt="" className="image" />
            </div>
          </div>
        </div>
      </section>
      {/* end of perks section */}
      <section className="call-to-action my-24">
        <div className="text-white bg-green-800">
          <div className="wrapper">
            <div className="flex flex-col items-stretch justify-between px-4 py-20 mx-auto max-w-7xl lg:flex-row sm:items-center">
              <div>
                <h2 className="headline-3 text-gray-100 tracking-wide mb-2">
                  Have Any Questions About Microgreens?
                </h2>
                <p className="subtitle-1 text-gray-100 tracking-wide mb-2">
                  Visit our Freqently Asked Questions page to see what people
                  ask us.
                </p>
              </div>
              <div className="flex flex-col mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                <a href="#" className="btn-light">
                  Learn More
                </a>
                <a href="#" className="btn-link text-white">
                  Message Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of call-to-action section */}
      <section className="benifits my-24">
        <div className="wrapper">
          <div className="my-16">
            <h2 className="headline-3">Incredible Benifits Of Microgreens</h2>
            <h3 className="headline-6 text-gray-700">
              Incredible Benifits Of Microgreens
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
            <div className="1 md:flex">
              <div className="my-1 md:mx-2 text-green-800">
                <ion-icon name="checkmark"></ion-icon>
              </div>
              <div className="">
                <h6 className="subtitle-1">Packed With Viteamins</h6>
                <p className="body-1">
                  Microgreens are packed with vitamins, like iron, magnesium,
                  potassium, zinc and copper.
                </p>
              </div>
            </div>
            <div className="2 md:flex">
              <div className="my-1 md:mx-2 text-green-800">
                <ion-icon name="checkmark"></ion-icon>
              </div>
              <div className="2-item">
                <h6 className="subtitle-1">Work In Many Dishes</h6>
                <p className="body-1">
                  Microgreens have many families which vary in taste, smell,
                  colour and presintation.
                </p>
              </div>
            </div>
            <div className="3 md:flex">
              <div className="my-1 md:mx-2 text-green-800">
                <ion-icon name="checkmark"></ion-icon>
              </div>
              <div className="3-item">
                <h6 className="subtitle-1">Great For Smoothies And Juices</h6>
                <p className="body-1">
                  These greens are great for smoothies, juices, shakes, as they
                  can boost your immune levels.
                </p>
              </div>
            </div>
            <div className="4 md:flex">
              <div className="my-1 md:mx-2 text-green-800">
                <ion-icon name="checkmark"></ion-icon>
              </div>
              <div className="">
                <h6 className="subtitle-1">
                  Microgreens At An Affordable Price
                </h6>
                <p className="body-1">
                  Get them at affordable price, so you don't have to worry about
                  breaking the bank.
                </p>
              </div>
            </div>
            <div className="5 md:flex">
              <div className="">
                <div className="my-1 md:mx-2 text-green-800">
                  <ion-icon name="checkmark"></ion-icon>
                </div>
              </div>
              <div className="">
                <h6 className="subtitle-1">Give Flare To Dishes</h6>
                <p className="body-1">
                  Cooks of all kinds like to use micorgreens as they come in a
                  wide array of choices.
                </p>
              </div>
            </div>
            <div className="6 md:flex">
              <div className="">
                <div className="my-1 md:mx-2 text-green-800">
                  <ion-icon name="checkmark"></ion-icon>
                </div>
              </div>
              <div className="">
                <h6 className="subtitle-1">Great For Your Health</h6>
                <p className="body-1">
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
            <p className="overline text-green-800 md:text-center">
              See What People Have to say ABout Urban Greens
            </p>
            <h2 className="headline-4 font-normal italic md:text-center my-4 leading-relaxed tracking-normal">
              “We endeavour to build a truly human AND high-performing
              workplace, where everyone can do the best work of their lives.
              This product is a key part of facilitating this culture by being
              our one-stop-shop for all things performance development.”
            </h2>
          </div>
        </div>
      </section>
      {/* end of testimonials section */}
      <section className="useage my-24">
        <div className="wrapper">
          <div className="my-12">
            <h2 className="headline-3">See how people use Microgreens!</h2>
            <p className="body-1 mt-1">
              Follow our community and stay up today to see how people are using
              microgreens in their Lifestyle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <div className="1">
              <div className="">
                <h6 className="subtitle-1">
                  Visit Our Faceebok Microgreen Group!
                </h6>
                <p className="body-1 line-clamp-2">
                  Got something to share or wating for our lastest update?
                  Interact with our online community, and see how people from
                  all backgrounds are using our greens.
                </p>
              </div>
              <div className="my-8">
                <h6 className="subtitle-1">Visit Our Instagram Page!</h6>
                <p className="body-1 line-clamp-2">
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
