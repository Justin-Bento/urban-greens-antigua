import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";

export default function Hero() {
  return (
    <section className="text-start sm:text-center">
      <h1 className="text-5xl font-extrabold tracking-tight capitalize scroll-m-20">
        Sustainable Microgreens, Unbeatable Flavor!
      </h1>
      <p className="text-lg leading-7 max-w-[80ch] mx-auto mt-4 lg:text-xl text-gray-950/80 tracking-wide">
        Our microgreens are packed with nutrients and flavor, making them the
        perfect addition to your meals. From salads to smoothies, sandwiches to
        sushi, the possibilities are endless. Easily incorporate microgreens
        into your diet without leaving your home.
      </p>
      <div className="flex flex-col justify-start gap-8 mt-6 sm:justify-center sm:flex-row">
        <Link to="/products">
          <Button size="lg" className="w-full">
            Check Out Greens
          </Button>
        </Link>
        <Link to="/about">
          <Button variant="outline" size="lg" className="w-full">
            About Urban Greens
          </Button>
        </Link>
      </div>
      <img
        src="/public/assets/home/hero.png"
        alt=""
        className="object-fill object-center w-full mt-12 rounded sm:rounded-lg aspect-square md:aspect-video"
      />
      <p className="w-full mt-4 text-sm italic tracking-wider text-gray-900/70">
        Appetizers at Hodges Bay Club garnished with our Island Microgreens.
        Bravo Chef Leon for this beautiful presentation!
      </p>
    </section>
  );
}
