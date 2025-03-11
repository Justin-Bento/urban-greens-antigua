import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="container mx-auto px-6 space-y-20 min-h-dvh grid items-center py-20">
        <section className="flex flex-col lg:items-center gap-6">
          <h1 className="scroll-m-20 text-4xl font-bold lg:text-5xl">
            Sustainable Microgreens, Unbeatable Flavor!
          </h1>
          <p className="lg:text-xl tracking-wide max-w-[90ch] mx-auto text-balance">
            Our microgreens are packed with nutrients and flavor, making them
            the perfect addition to any meal. From salads to smoothies,
            sandwiches to sushi, the possibilities are endless. Plus, with our
            convenient delivery service, you can easily incorporate microgreens
            into your diet without leaving your home.
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <Button>View Our Microgreens</Button>
            <Button variant="secondary">Learn About Our Product</Button>
          </div>
          <AspectRatio ratio={16 / 9} className="relative overflow-hidden">
            <Image
              fill
              src="/media/urban-greens-antigua-hero.jpg"
              alt=""
              className="rounded-md"
            />
          </AspectRatio>
        </section>
        {/*
         * End of websites hero section.
         */}
        <section className="">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold first:mt-0">
            Hello Section #2
          </h2>
          <p className=""></p>
        </section>
        <section className="">
          <h3 className="scroll-m-20 pb-2 text-3xl font-semibold first:mt-0">
            Hello Section #3
          </h3>
          <p className=""></p>
        </section>
        <section className="">
          <h4 className="scroll-m-20 pb-2 text-3xl font-semibold first:mt-0">
            Hello Section #4
          </h4>
          <p className=""></p>
        </section>
        <section className="">
          <h5 className="scroll-m-20 pb-2 text-3xl font-semibold first:mt-0">
            Hello Section #5
          </h5>
          <p className=""></p>
        </section>
        <section className="">
          <h6 className="scroll-m-20 pb-2 text-3xl font-semibold first:mt-0">
            Hello Section #6
          </h6>
          <p className=""></p>
        </section>
      </main>
      <Footer />
    </>
  );
}
