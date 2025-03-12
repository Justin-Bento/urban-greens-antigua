import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { values } from "@/lib/data";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <section className="space-y-20 my-24">
        {/* Header section */}
        <div className="">
          <h1 className="scroll-m-20 text-4xl font-bold capitalize lg:text-5xl">
            We love Microgreens
          </h1>
          <p className="mt-4 text-balance text-lg font-medium sm:text-xl/8 max-w-[90ch]">
            Urban Greens Antigua started out as a passion project that quickly
            evolved into a business. We realized that our customers wanted to
            experience and enjoy a fresh way of using micro greens.
          </p>
        </div>
        {/* Content section */}
        <div className="grid max-w-xl grid-cols-1 gap-8 text-base/7 opacity-60 lg:max-w-none lg:grid-cols-2">
          <div>
            <p>
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit. Faucibus commodo massa rhoncus, volutpat.
              Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
              sed turpis id.
            </p>
            <p className="mt-8">
              Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
              odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
              diam tincidunt ac cursus in vel. Mauris varius vulputate et
              ultrices hac adipiscing egestas.
            </p>
          </div>
          <div>
            <p>
              Erat pellentesque dictumst ligula porttitor risus eget et eget.
              Ultricies tellus felis id dignissim eget. Est augue maecenas risus
              nulla ultrices congue nunc tortor. Enim et nesciunt doloremque
              nesciunt voluptate.
            </p>
            <p className="mt-8">
              Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
              odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
              diam tincidunt ac cursus in vel. Mauris varius vulputate et
              ultrices hac adipiscing egestas. Iaculis convallis ac tempor et
              ut. Ac lorem vel integer orci.
            </p>
          </div>
        </div>
        {/* Image section */}
        <AspectRatio ratio={9 / 4} className="relative w-full">
          <Image
            fill
            alt=""
            src="/media/marketing/lebistro.jpg"
            className="object-cover xl:rounded-3xl"
          />
        </AspectRatio>

        {/* Values section */}
        <div className="">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
              Our values
            </h2>
            <p className="mt-6 text-lg/8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid grid-cols-1 gap-8 text-base/7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold">
                  <value.icon
                    aria-hidden="true"
                    className="absolute left-1 top-1 size-5 text-green-500"
                  />
                  {value.name}
                </dt>{" "}
                <dd className="inline">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="container mx-auto sm:px-6">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl mb-6 capitalize">
            Show people how you use Microgreens!
          </h2>
          <p className="leading-7 text-lg">
            Follow our community and stay up today to see how people are using
            microgreens in their Lifestyle.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mt-8">
            <div className="w-full space-y-6 ">
              <div className="">
                <h3 className="text-lg font-semibold mb-2">
                  Visit Our Facebook Microgreens Group!
                </h3>
                <p className="">
                  Got something to share or waiting for our latest update?
                  Interact with our online community, and see how people from
                  all backgrounds are using our greens.
                </p>
              </div>
              <Separator className="border border-green-700 w-20" />
              <div className="">
                <h3 className="text-lg font-semibold mb-2">
                  Visit Our Facebook Microgreens Group!
                </h3>
                <p className="">
                  Got something to share or waiting for our latest update?
                  Interact with our online community, and see how people from
                  all backgrounds are using our greens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
