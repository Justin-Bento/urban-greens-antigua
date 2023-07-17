import React from "react";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import CallToAction from "../components/home/CallToAction";
import Benefits from "../components/home/Benefits";
import Testimonial from "../components/home/Testimonial";
import Usage from "../components/home/Usage";

export default function Home() {
  return (
    <>
      <main className="container p-4 py-12 mx-auto space-y-12 bg-primary-10">
        <Hero />
        <Features />
        <CallToAction />
        <Benefits />
        <Testimonial />
        <Usage />
      </main>
    </>
  );
}
