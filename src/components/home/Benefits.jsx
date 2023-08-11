import React from "react";

export default function Benifits() {
  return (
    <section>
      <h5 className="text-3xl font-extrabold capitalize scroll-m-20">Frequently asked questions</h5>
      <p className="leading-7 max-w-[90ch] mt-2 tracking-wide">Have a different question and can&nbsp;t find the answer you&nbsp;re looking for? Reach out to our support team bysending us an emailand we&nbsp;ll get back to you as soon as we can.</p>
      <div className="flex flex-col gap-4 mt-4">
        <div className="overflow-hidden border rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h5 className="text-lg font-bold capitalize">What are microgreens?</h5>
            <p className="leading-7 opacity-70">Microgreens are young, tender plants that are harvested just a few weeks after germination.</p>
          </div>
        </div>
        <div className="overflow-hidden border rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h5 className="text-lg font-bold capitalize">What are the benefits of microgreens?</h5>
            <p className="leading-7 opacity-70">Microgreens are high in nutrients, have antioxidant properties, promote healthy skin, aid in digestion, are low in calories, and are versatile in cooking.</p>
          </div>
        </div>
        <div className="overflow-hidden border rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h5 className="text-lg font-bold capitalize">What nutrients do microgreens contain?</h5>
            <p className="leading-7 opacity-70">Microgreens are known to contain high levels of vitamins and minerals such as vitamin C, vitamin E, beta-carotene, iron, and calcium.</p>
          </div>
        </div>
        <div className="overflow-hidden border rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h5 className="text-lg font-bold capitalize">How do microgreens promote healthy skin?</h5>
            <p className="leading- opacity-707">Microgreens contain high levels of antioxidants and vitamins that can help to improve skin health..</p>
          </div>
        </div>
        <div className="overflow-hidden border rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h5 className="text-lg font-bold capitalize">How can I use microgreens in cooking?</h5>
            <p className="leading-7 opacity-70">Microgreens are very versatile and can be added to a variety of dishes such as salads, sandwiches, soups, and smoothies..</p>
          </div>
        </div>
        <div className="overflow-hidden border rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h5 className="text-lg font-bold capitalize">Are microgreens a good addition to a weight loss diet?</h5>
            <p className="leading-7 opacity-70">Yes, microgreens are low in calories and can be a great addition to a healthy diet for those looking to lose weight..</p>
          </div>
        </div>
      </div>
    </section>
  );
}
