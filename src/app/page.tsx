import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { TbCircleCheck } from "react-icons/tb";
import Image from "next/image";
import { microgreen_benifits } from "@/lib/data";

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="container mx-auto px-6 space-y-20 min-h-dvh grid items-center py-20">
        <section className="flex flex-col lg:items-center gap-6">
          <h1 className="scroll-m-20 text-4xl font-bold lg:text-5xl">
            Sustainable Microgreens, Unbeatable Flavor!
          </h1>
          <p className="text-xl/7 lg:text-center tracking-wide max-w-[90ch] mx-auto text-balance">
            Our microgreens are packed with nutrients and flavor, making them
            the perfect addition to any meal. From salads to smoothies,
            sandwiches to sushi, the possibilities are endless. Plus, with our
            convenient delivery service, you can easily incorporate microgreens
            into your diet without leaving your home.
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <Button className="bg-green-700">View Our Microgreens</Button>
            <Button variant="secondary">Learn About Our Product</Button>
          </div>
          <AspectRatio
            ratio={16 / 9}
            className="relative overflow-hidden mt-12"
          >
            <Image
              fill
              src="/media/urban-greens-antigua-hero.jpg"
              alt=""
              className="rounded-md"
            />
          </AspectRatio>
        </section>
        {/*
         * End of websites hero.
         */}
        <section className="space-y-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
            <div className="">
              <h2 className="scroll-m-20 pb-2 text-3xl font-semibold first:mt-0">
                Freshly Grown In Antigua
              </h2>
              <p className="max-w-prose text-balance">
                Most of our plants are harvested in a ten-day to a two-week
                cycle. We grow and harvest our greens in a controlled
                environment, without the use of chemicals or pesticides, to
                ensure a healthy and nutritional product.
              </p>
            </div>
            <AspectRatio ratio={16 / 16} className="bg-muted">
              <Image
                src="/media/freshly-grown.png"
                alt="Photo by Drew Beamer"
                fill
                className="rounded-md object-cover"
                quality={70}
              />
            </AspectRatio>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
            <div className="lg:order-2">
              <h2 className="scroll-m-20 pb-2 text-3xl font-semibold first:mt-0">
                A Tiny Ingredient with Big Uses
              </h2>
              <p className="max-w-prose text-balance">
                Enjoy them on their own or mix them into salads and smoothies
                for a nutrient boost. They make fantastic toppers for sandwiches
                and add a burst of flavor as a garnish or decoration for your
                plates.
              </p>
            </div>
            <AspectRatio ratio={16 / 16} className="bg-muted">
              <Image
                src="/media/microgreens-variety.png"
                alt="Photo by Drew Beamer"
                fill
                quality={70}
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
            <div className="">
              <h2 className="scroll-m-20 pb-2 text-3xl font-semibold first:mt-0">
                Freshly Grown In Antigua
              </h2>
              <p className="max-w-prose text-balance">
                Most of our plants are harvested in a ten-day to a two-week
                cycle. We grow and harvest our greens in a controlled
                environment, without the use of chemicals or pesticides, to
                ensure a healthy and nutritional product.
              </p>
            </div>
            <AspectRatio ratio={16 / 16} className="bg-muted">
              <Image
                src="/media/sustainable-packageing.png"
                alt="Photo by Drew Beamer"
                fill
                quality={70}
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </section>
        {/*
         * End of websites feature.
         */}
        <section className="">
          <Card className="shadow-none border-none bg-green-700 text-white">
            <CardContent className="py-32 px-24 flex flex-col lg:flex-row justify-between gap-8">
              <div className="">
                <h3 className="scroll-m-20 pb-2 text-3xl font-semibold first:mt-0">
                  Have Any Questions About Microgreens?
                </h3>
                <p className="">
                  Visit our Frequently Asked Questions page to see what people
                  ask us.
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="secondary" className="capitalize">
                  Visit our FAQ
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent text-white shadow-none capitalize"
                >
                  Send us an email
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
        {/*
         * End of websites call to action.
         */}
        <section className="space-y-8">
          <div className="">
            <h4 className="scroll-m-20 pb-2 text-3xl font-semibold first:mt-0">
              Incredible Benefits Of Microgreens
            </h4>
            <p className="text-lg/7 opacity-70">
              Here are some reasons why Microgreens are considered superfood!
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {microgreen_benifits.map((benifit) => (
              <li key={benifit.id}>
                <Card className="shadow-none">
                  <CardContent className="inline-flex items-start gap-x-2">
                    <TbCircleCheck className="text-green-800 mt-1.5 size-5" />
                    <span className="line-clamp-2">
                      <CardTitle className="text-lg">{benifit.title}</CardTitle>
                      <CardDescription>{benifit.description}</CardDescription>
                    </span>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
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
