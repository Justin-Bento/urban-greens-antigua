import React from "react";

export default function Testimonial() {
  return (
    <>
      <section className="relative px-6 py-24 overflow-hidden text-left isolate sm:rounded-3xl sm:px-16 rounded-xl bg-primary-200 dark:bg-primary-900">
        <div className="">
          <p className="p-0 m-0 mb-6 text-sm italic tracking-wide uppercase">See what people have to say About Urban Greens</p>
          <blockquote className="p-0 m-0 text-3xl italic text-black transtion-colors md:tex scroll-m-20 first:mt-0">
            <p>We endeavour to build a truly human and high-performing workplace, where everyone can do the best work of their lives. This product is a key part of facilitating this culture by being our one-stop-shop for all things performance development</p>
          </blockquote>
        </div>
        <figcaption className="flex items-center mt-6 gap-x-6">
          <img
            className="bg-gray-800 rounded-xl h-14 w-14"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="text-base">
            <div className="font-semibold text-black">Joseph Rodriguez</div>
            <div className="mt-0.5 text-black">CEO of Reform</div>
          </div>
        </figcaption>
      </section>
    </>
  );
}
