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

let faq = {
  q1: 'Microgreens grow from sprouts and are young vegetable greens harvested just after the cotyledon or first true leaves from the seedling have developed. Microgreens grow from sprouts and are the first true leaves to emerge.',
  q2: 'Microgreens are aromatic and highly nutritious and come in a wide variety of flavors, textures and colors.  They are eaten on their own, used to add flavor and/or texture to salads or dishes, used in sandwiches and wraps, used in juices or smoothies or as a  garnish or decoration for plates.',
  q3: 'Microgreens provide minerals, nutrients and fiber which help to prevent a range of diseases, manage weight and boost both mental and physical health and well-being. Studies have shown that microgreens are loaded with nutrients and vitamins such as vitamin C, E, and K, lutein and beta-carotene, 40 fold that of the mature leaves of the same plants',
  q4: 'Epicurean on Friars Hill and in Jolly Harbour, as well as Covent Gardens in English Harbour carry some of our products. For special orders or a wider variety, including  more exotic microgreens, you can order directly from us.',
  q5: 'Our packaging is recyclable.',
  q6: 'Email address: urbangreensanu@gmail.com. Telephone/WhatsApp: (268)720-8474.'
};
