import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Separator } from "@/components/ui/separator";
import { sanityFetch } from "@/sanity/lib/live";
import { All_Questions } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import React from "react";

export default async function page() {
  const { data: questions } = await sanityFetch({ query: All_Questions });
  return (
    <>
      <section className="">
        <span className="space-y-1">
          <p className="text-primary">Microgreens</p>
          <h1 className="scroll-m-20 text-4xl font-bold capitalize lg:text-5xl">
            Frequently Asked Questions.
          </h1>
        </span>
        <p className="max-w-5xl text-foreground text-balance my-4 text-lg/[2]">
          If you can&#39;t find what you're looking for, email our team and if
          you're lucky someone will get back to you.
        </p>
        <Separator className="max-w-[40ch] mt-12" />
        <ul className="space-y-8 mt-16">
          {questions?.map((question) => (
            <li key={question?._id}>
              <Accordion type="single" collapsible>
                <AccordionItem value={question._id}>
                  <AccordionTrigger className="text-xl font-semibold hover:cursor-pointer capitalize">
                    Question - {question?.question || "No question available"}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-3xl text-balance text-foreground text-base leading-[2]">
                    <PortableText value={question?.details || []} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
