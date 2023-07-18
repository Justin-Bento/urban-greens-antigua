import React from "react";
import { Button } from "../Button";

export default function Usage() {
  return (
    <section className="grid grid-cols-1 gap-16 lg:grid-cols-2">
      <div className="lg:max-w-[80ch] w-full">
      <h6 className="text-3xl font-extrabold capitalize scroll-m-20">See how people use Microgreens!</h6>
      <p className="mt-4 leading-7">Follow our community and stay up today to see how people are using microgreens in their Lifestyle. Got something to share or wating for our lastest update? Interact with our online community, and see how people from all backgrounds are using our greens.</p>
      <div className="flex flex-row gap-4 mt-4 lg:flex-row">
        <Button variant="outline" size="sm" className="mt-2">Facebook</Button>
        <Button variant="outline" size="sm" className="mt-2">Facebook</Button>
      </div>
      </div>
    <div className="relative lg:items-center lg:inline-flex lg:justify-end">
      <img src="/public/assets/home/feature-04.png" alt="" className="object-cover object-center w-full border rounded-lg aspect-video h-96" />
    </div>
    </section>
  );
}
