import React from "react";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import CallToAction from "../components/home/CallToAction";
import Benefits from "../components/home/Benefits";
import Testimonial from "../components/home/Testimonial";
import Usage1 from "../components/home/Usage1";
import Usage from "../components/home/Usage";

export default function Home() {
  return (
    <>
      <main className="p-4 my-20 space-y-24 lg:mx-auto lg:container">
        <Hero />
        <Usage1 />
        <CallToAction />
        <Features />
        <Testimonial />
        <Benefits />
        <Usage />
      </main>
    </>
  );
}
