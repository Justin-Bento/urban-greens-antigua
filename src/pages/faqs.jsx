import React from 'react';

export default function faqs() {
  return (
    <>
      <main className="">
        <section className="faqs">
          <div className="wrapper max-w-5xl">
            <div className="spacing">
              <h1 className="headline2">Frequently Asked Questions</h1>
              <div className="my-8">
                <h3 className="subtitle1">What Are Microgreens?</h3>
                <p className="body1">{faq.q1}</p>
              </div>
              <div className="my-8">
                <h3 className="subtitle1">How are Microgreens used?</h3>
                <p className="body1">{faq.q2}</p>
              </div>
              <div className="my-8">
                <h3 className="subtitle1">What are the health benefits?</h3>
                <p className="body1">{faq.q3}</p>
              </div>
              <div className="my-8">
                <h3 className="subtitle1">Where Can you purchase microgreens?</h3>
                <p className="body1">{faq.q4}</p>
              </div>
              <div className="my-8">
                <h3 className="subtitle1">Is Your Packaging recyclable?</h3>
                <p className="body1">{faq.q5}</p>
              </div>
              <div className="my-8">
                <h3 className="subtitle1">What Is Your Contact Infromation?</h3>
                <p className="body1">{faq.q6}</p>
              </div>
            </div>
          </div>
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

