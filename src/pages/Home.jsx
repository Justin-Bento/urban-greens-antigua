import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { TbCircleCheck } from 'react-icons/tb';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="spacing">
          <div className="mx-auto xl:container sm:px-6 lg:px-8">
            <div className="text-left md:text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-3">Sustainable Microgreens, Unbeatable Flavor!!</h1>
              <p className="lg:text-xl lg:leading-8 tracking-wide max-w-[90ch] mx-auto mb-6">
                Our microgreens are packed with nutrients and flavor, making them the perfect addition to any meal. From salads to
                smoothies, sandwiches to sushi, the possibilities are endless. Plus, with our convenient delivery service, you can easily
                incorporate microgreens into your diet without leaving your home.
              </p>
              <div className="flex flex-col gap-4 mb-8 md:flex-row md:justify-center">
                <Link to="/products">
                  <button
                    type="button"
                    className="w-full lg:w-auto rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 hover:underline"
                  >
                    View Our Microgreens
                  </button>
                </Link>
                <Link to="/about">
                  <button
                    type="button"
                    className="w-full lg:w-auto rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:underline"
                  >
                    Learn About Microgreens
                  </button>
                </Link>
              </div>
            </div>
            <div className="mt-16">
              <img
                src="/assets/home/urban-greens-antigua-hero.jpg"
                alt="Healthy Microgreens"
                className="w-full aspect-square lg:aspect-video object-cover object-top rounded-2xl"
              />
              <p className="caption text-center">Healthy Microgreens</p>
            </div>
          </div>
        </div>
      </section>
      {/* end of hero section */}
      <section className="mx-auto xl:container sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 text-pretty md:gap-16">
          {/* First Row */}
          <div className="mb-12 lg:aspect-square w-full place-content-center md:order-1">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Freshly Grown In Antigua</h2>
            <p className="leading-7 tracking-wide mt-1">
              Most of our plants are harvested in a ten-day to a two-week cycle. We grow and harvest our greens in a controlled environment,
              without the use of chemicals or pesticides, to ensure a healthy and nutritional product.
            </p>
          </div>
          <img
            src="/assets/home/freshly-grown.png"
            className="aspect-square w-full rounded-2xl object-fill object-bottom bg-red-300 md:order-2"
          />
          {/* Second Row */}
          <div className="mb-12 mt-32 lg:mt-0 lg:mb-0 lg:aspect-square w-full place-content-center md:order-4">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">A Tiny Ingredient with Big Uses</h2>
            <p className="leading-7 tracking-wide mt-1">
              Enjoy them on their own or mix them into salads and smoothies for a nutrient boost. They make fantastic toppers for sandwiches
              and add a burst of flavor as a garnish or decoration for your plates.
            </p>
          </div>
          <img
            src="/assets/home/microgreens-variety.png"
            className="aspect-square w-full rounded-2xl object-fill object-bottom bg-red-300 md:order-3"
          />
          {/* Third Row */}
          <div className="mb-12 mt-32 lg:mt-0 lg:mb-0 lg:aspect-square w-full place-content-center md:order-5">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Sustainable Packaging
            </h2>
            <p className="leading-7 tracking-wide mt-1">
              Our packaging is designed with the environment in mind. Each item is either reusable or fully recyclable, ensuring that we
              reduce waste and promote sustainability in every step of our process.
            </p>
          </div>
          <img
            src="/assets/home/feature-03.png"
            className="aspect-square w-full rounded-2xl object-fill object-bottom bg-red-300 md:order-6"
          />
        </div>
      </section>

      {/* end of perks section */}
      <section id="call-to-action" className="mx-auto xl:container sm:px-6 lg:px-24 rounded-2xl bg-green-800 py-32 my-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
          <div className="text-white">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Have Any Questions About Microgreens?</h2>
            <p className="leading-7 tracking-wide">Visit our Frequently Asked Questions page to see what people ask us.</p>
          </div>
          <div className="mt-8 flex items-center gap-4 lg:justify-end">
            <Link to="/FAQs">
              <button className="w-full lg:w-auto rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:underline">
                Learn More
              </button>
            </Link>
            <Link to="/Contact">
              <button className="w-full lg:w-auto rounded-md bg-transparent text-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50/10 hover:underline">
                Message Urban Greens
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* end of call-to-action section */}
      <section className="benefits">
        <div className="lg:container mx-auto sm:px-6 lg:px-8 spacing">
          <div className="mb-8">
            <h2 className="mb-1 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Incredible Benefits Of Microgreens</h2>
            <h3 className="tracking-wide text-gray-600">See Why Microgreens are considered the new superfood!</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
            <div className="1 md:flex">
              <div className="">
                <TbCircleCheck className="text-green-800 md:mx-2 size-6" />
              </div>
              <div className="">
                <h6 className="subtitle1">Packed With Vitamins</h6>
                <p className="body1">Microgreens are packed with vitamins, like iron, magnesium, potassium, zinc and copper.</p>
              </div>
            </div>
            <div className="2 md:flex">
              <div className="">
                <TbCircleCheck className="text-green-800 md:mx-2 size-6" />
              </div>
              <div className="2-item">
                <h6 className="subtitle1">Work In Many Dishes</h6>
                <p className="body1">Microgreens have many families which vary in taste, smell, color and presentation.</p>
              </div>
            </div>
            <div className="3 md:flex">
              <div className="">
                <TbCircleCheck className="text-green-800 md:mx-2 size-6" />
              </div>
              <div className="3-item">
                <h6 className="subtitle1">Great For Smoothies And Juices</h6>
                <p className="body1">These greens are great for smoothies, juices, shakes, as they can boost your immune levels.</p>
              </div>
            </div>
            <div className="4 md:flex">
              <div className="">
                <TbCircleCheck className="text-green-800 md:mx-2 size-6" />
              </div>
              <div className="">
                <h6 className="subtitle1">Microgreens are affordable</h6>
                <p className="body1">
                  Microgreens are affordable as they are packed with nutrients and intense flavours which means less product need to be
                  used.
                </p>
              </div>
            </div>
            <div className="5 md:flex">
              <div className="">
                <TbCircleCheck className="text-green-800 md:mx-2 size-6" />
              </div>
              <div className="">
                <h6 className="subtitle1">Give Flare To Dishes</h6>
                <p className="body1">
                  Chefs use the many different coloured and flavoured microgreens to intensify flavour or add visual impacts to their meals.
                  .
                </p>
              </div>
            </div>
            <div className="6 md:flex">
              <div className="">
                <TbCircleCheck className="text-green-800 md:mx-2 size-6" />
              </div>
              <div className="">
                <h6 className="subtitle1">Great For Your Health</h6>
                <p className="body1">Microgreens contain many vitamins, minerals, antioxidants and nutrients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of benefits section */}
      <section id='testimonials' className="my-24">
        <div className="lg:container mx-auto xl:container sm:px-6 lg:px-24 py-32 my-32 bg-gray-100 rounded-2xl">
          <div className="">
            <p className="text-green-800 text-center mb-4 uppercase">See What People Have to say About Urban Greens</p>
            <div className="border w-20 mx-auto border-green-700"></div>
            <h2 className="my-4 italic font-normal leading-relaxed text-3xl md:text-center">
              “We endeavour to build a truly human AND high-performing workplace, where everyone can do the best work of their lives. This
              product is a key part of facilitating this culture by being our one-stop-shop for all things performance development.”
            </h2>
          </div>
        </div>
      </section>
      {/* end of testimonials section */}
      <section className="my-8 md:my-12 lg:my-24">
        <div className="xl:container mx-auto sm:px-6 lg:px-8">
          <h2 className="scroll-m-20 pb-2 text-3xl font-bold capitalize tracking-tight first:mt-0">See how people use Microgreens!</h2>
          <p className="leading-7 text-lg">
            Follow our community and stay up today to see how people are using microgreens in their Lifestyle.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mt-8">
            <div className="w-full space-y-6 ">
              <div className="">
                <h3 className="text-lg font-semibold mb-2">Visit Our Facebook Microgreens Group!</h3>
                <p className="">
                  Got something to share or waiting for our latest update? Interact with our online community, and see how people from all
                  backgrounds are using our greens.
                </p>
              </div>
              <div className="border border-green-700 w-20"></div>
              <div className="">
                <h3 className="text-lg font-semibold mb-2">Visit Our Facebook Microgreens Group!</h3>
                <p className="">
                  Got something to share or waiting for our latest update? Interact with our online community, and see how people from all
                  backgrounds are using our greens.
                </p>
              </div>
            </div>
            <img src="/assets/home/share-microgreens.png" alt="" className="w-full aspect-square object-cover object-top rounded-2xl" />
          </div>
        </div>
      </section>
      {/* end of testimonials section */}
    </>
  );
}
