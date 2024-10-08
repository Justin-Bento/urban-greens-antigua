import React from "react";
import Title from "../components/Title";

export default function faqs() {
  return (
    <>
      <main className="mx-auto xl:container sm:px-6 min-h-dvh">
        <Title Headline="Fresh Frequently asked questions" Description="If you can&#39;t find what you&#39;re looking for, email our support team and if you&#39;re lucky someone will get back to you." />
        <section className="space-y-8">
          {faq.map((item, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold capitalize">{item.question}</h2>
              <p className="tracking-wide text-balance max-w-6xl">{item.answer}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

const faq = [
  {
    question: "What are microgreens?",
    answer:
      "Microgreens are young vegetable greens harvested just after the cotyledon or first true leaves have developed. They grow from sprouts and are known for their vibrant flavors and rich nutrients.",
  },
  {
    question: "How can microgreens be used?",
    answer:
      "Microgreens are aromatic, nutritious, and come in a variety of flavors, textures, and colors. They can be used in salads, sandwiches, wraps, juices, smoothies, or as garnishes to add flavor and visual appeal.",
  },
  {
    question: "What are the health benefits of microgreens?",
    answer:
      "Microgreens provide minerals, nutrients, and fiber that help prevent various diseases, manage weight, and boost both mental and physical health. They are rich in vitamins such as C, E, and K, as well as lutein and beta-carotene, often containing 40 times the nutrients of mature leaves.",
  },
  {
    question: "Where can you purchase microgreens?",
    answer:
      "You can find our microgreens at Epicurean on Friars Hill and in Jolly Harbour, and at Covet Gardens in English Harbour. For special orders or more exotic varieties, you can order directly from us.",
  },
  {
    question: "Is your packaging recyclable?",
    answer: "Yes, our packaging is recyclable.",
  },
  {
    question: "What is your contact information?",
    answer: "You can reach us via email at urbangreensanu@gmail.com or by phone/WhatsApp at (268) 720-8474.",
  },
];
