import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";

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
            Urban Greens Antigua began as a passion project and quickly grew
            into a thriving business. We discovered that our customers were
            eager to explore and enjoy a fresh, innovative way of incorporating
            vegtables into their daily lives.
          </p>
        </div>
        {/* Content section */}
        <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 text-base/[1.75] text-foreground">
          <div>
            <p>
              Urban Greens Antigua began as a passion project, born out of a
              love for fresh, sustainable, and nutrient-rich food. What started
              as a small experiment quickly grew into a thriving business as we
              discovered the growing demand for microgreens in our community.
              Today, we’re proud to offer a fresh, innovative way to enjoy these
              tiny but mighty greens.
            </p>
            <p className="mt-8">
              Our microgreens are grown with care, using sustainable practices
              that prioritize quality and freshness. Packed with vitamins,
              minerals, and antioxidants, they offer up to 40 times more
              nutrients than their mature counterparts. From peppery arugula to
              delicate radish sprouts, each variety brings its own unique flavor
              and nutritional benefits to the table..
            </p>
          </div>
          <div>
            <p>
              We realized that our customers were eager to explore new ways to
              incorporate microgreens into their daily lives. Whether it’s
              adding a burst of flavor to salads, garnishing gourmet dishes, or
              blending them into smoothies, microgreens have become a versatile
              staple for health-conscious individuals and culinary enthusiasts
              alike.
            </p>
            <p className="mt-8">
              Join us on this journey toward healthier, more sustainable living.
              Whether you’re a home cook, a professional chef, or simply curious
              about the benefits of microgreens, Urban Greens Antigua is here to
              provide you with the freshest, most flavorful greens. Explore our
              range and discover how these tiny greens can make a big impact on
              your health and culinary creations!
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
            <h2 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl capitalize">
              We’d love to hear from you!
            </h2>
            <p className="mt-6 text-lg/8">
              Share your thoughts, recipes, or feedback with us, and let’s grow
              together. Your ideas inspire us to keep innovating and delivering
              the best for our community.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mt-8">
            <Link
              href="https://www.instagram.com/urbangreensanu/"
              className="group"
            >
              <Card className="shadow-none hover:bg-gray-50">
                <CardContent className="space-y-4">
                  <CardTitle className="text-lg font-semibold mb-2">
                    Check Out Our Facebook Page!
                  </CardTitle>
                  <CardDescription className="text-base/7">
                    Got something to share or waiting for our latest update?
                    Interact with our online community, and see how people from
                    all backgrounds are using our greens.
                  </CardDescription>
                  <div className="text-sm text-muted-background opacity-70 flex items-center gap-2 group-hover:underline hover">
                    <RiExternalLinkLine />
                    <span className="block font-mono">Visit Our Page</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link
              href="https://www.instagram.com/urbangreensanu/"
              className="group"
            >
              <Card className="shadow-none hover:bg-gray-50">
                <CardContent className="space-y-4">
                  <CardTitle className="text-lg font-semibold mb-2">
                    Check Out Our Instagram Page!
                  </CardTitle>
                  <CardDescription className="text-base/7">
                    Got something to share or waiting for our latest update?
                    Interact with our online community, and see how people from
                    all backgrounds are using our greens.
                  </CardDescription>
                  <div className="text-sm text-muted-background opacity-70 flex items-center gap-2 group-hover:underline hover">
                    <RiExternalLinkLine />
                    <span className="block font-mono">Visit Our Page</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
