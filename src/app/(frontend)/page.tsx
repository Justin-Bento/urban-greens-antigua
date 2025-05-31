import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { TbCircleCheck } from "react-icons/tb";
import Image from "next/image";
import { microgreens_benefits } from "@/lib/data";
import FAQS from "@/components/FAQS";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="flex flex-col lg:items-center gap-6 text-center [&>*]:text-pretty">
        <h1 className="text-5xl font-bold text-foreground tracking-tight">
          Sustainable Microgreens, Unbeatable Flavor!
        </h1>
        <p className="text-xl/[1.5] tracking-[0.01rem]">
          Microgreens are vegetable greens that are packed with nutrients and
          flavor, making them the perfect addition to any meal. From salads to
          smoothies, sandwiches to sushi, the possibilities are endless. Plus,
          with our convenient delivery service, you can incorporate microgreens
          into your diet without leaving your home.
        </p>
        <div className="flex flex-col lg:flex-row gap-4">
          <Button>View Our Microgreens</Button>
          <Button variant="secondary">Learn About Our Product</Button>
        </div>
        <div className="w-full aspect-16/9 relative overflow-hidden mt-12">
          <Image
            fill
            src="/media/marketing/urban-greens-antigua-hero.jpg"
            alt=""
            className="rounded-md"
          />
        </div>
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
              Most of our plants are harvested in a ten-day to a two-week cycle.
              We grow and harvest our greens in a controlled environment,
              without the use of chemicals or pesticides, to ensure a healthy
              and nutritional product.
            </p>
          </div>
          <div className="relative w-full aspect-16/16 overflow-hidden">
            <Image
              src="/media/marketing/freshly-grown.png"
              alt="Photo by Drew Beamer"
              fill
              className="rounded-md object-cover"
              quality={70}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div className="lg:order-2">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold first:mt-0">
              A Tiny Ingredient with Big Uses
            </h2>
            <p className="max-w-prose text-balance">
              Enjoy them on their own or mix them into salads and smoothies for
              a nutrient boost. They make fantastic toppers for sandwiches and
              add a burst of flavor as a garnish or decoration for your plates.
            </p>
          </div>
          <div className="relative w-full aspect-16/16 overflow-hidden">
            <Image
              src="/media/marketing/microgreens-variety.png"
              alt="Photo by Drew Beamer"
              fill
              quality={70}
              className="rounded-md object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div className="">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold first:mt-0">
              Sustainable Packaging
            </h2>
            <p className="max-w-prose text-balance">
              Our packaging is designed with the environment in mind. Each item
              is either reusable or fully recyclable, ensuring that we reduce
              waste and promote sustainability in every step of our process.
            </p>
          </div>
          <div className="relative w-full aspect-16/16 overflow-hidden">
            <Image
              src="/media/marketing/sustainable-packageing.png"
              alt="Photo by Drew Beamer"
              fill
              quality={70}
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </section>
      {/*
       * End of websites feature.
       */}
      <section className="">
        <Card className="shadow-none border-none bg-primary text-white">
          <CardContent className="px-12 py-24 sm:py-32 flex flex-col lg:flex-row justify-between gap-8">
            <div className="">
              <h3 className="scroll-m-20 pb-2 text-3xl font-semibold first:mt-0">
                Have Any Questions About Microgreens?
              </h3>
              <p className="">
                Visit our Frequently Asked Questions page to see what people ask
                us.
              </p>
            </div>
            <div className=" flex flex-col md:flex-row gap-4">
              <Link href="/questions">
                <Button
                  variant="secondary"
                  className="w-full md:w-auto capitalize"
                >
                  Visit our FAQ
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="w-full md:w-auto bg-transparent hover:bg-primary-foreground hover:text-white hover:cursor-pointer shadow-none capitalize"
                >
                  Send us an email
                </Button>
              </Link>
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
          {microgreens_benefits.map((benefit) => (
            <li key={benefit.id}>
              <Card className="shadow-none">
                <CardContent className="inline-flex items-start gap-x-2">
                  <TbCircleCheck className="text-primary mt-1.5 size-5" />
                  <span className="">
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {benefit.description}
                    </CardDescription>
                  </span>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>
      {/*
       * End of websites product benifits.
       */}
      <section className="space-y-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-primary">
            Testimonials
          </h2>
          <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            We have worked with amazing people
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 divide-x-2 divide-x-reverse">
          {new Array(6).fill(null).map((_, index) => (
            <li key={index}>
              <Card className="shadow-none border-none">
                <CardContent>
                  <p className="text-bold">
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo expedita voluptas culpa sapiente alias molestiae.
                    Numquam corrupti in laborum sed rerum et corporis.”
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>
      {/*
       * End of websites client testimonials.
       */}
      <section className="">
        <FAQS />
      </section>
      {/*
       * End of websites community usages.
       */}
    </>
  );
}
