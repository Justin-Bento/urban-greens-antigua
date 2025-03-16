import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { sanityFetch } from "@/sanity/lib/live";
import { frontpage_questions } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";

export default async function FAQS() {
  const { data: questions } = await sanityFetch({ query: frontpage_questions });
  return (
    <div className="container mx-auto">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <h6 className="scroll-m-20 pb-2 text-3xl font-semibold first:mt-0 capitalize">
            Frequently asked questions
          </h6>
          <p className="mt-4 text-pretty text-base/7 text-gray-600">
            Can&#39;t find the answer you&#39;re looking for? Reach out to our
            &nbsp;
            <Link
              href="#"
              className="font-semibold text-primary hover:text-primary/50 hover:underline hover:cursor-pointer"
            >
              customer support
            </Link>
            &nbsp; team.
          </p>
          <Button
            variant="link"
            className="pl-0 hover:text-primary hover:underline hover:cursor-pointer"
          >
            See More Questions &rarr;
          </Button>
        </div>
        <div className="mt-10 lg:col-span-7 lg:mt-0">
          <dl className="space-y-10">
            {questions.map((faq) => (
              <div key={faq._id}>
                <dt className="text-base/7 font-semibold text-foreground capitalize">
                  {faq.question}
                </dt>
                <dt className="text-muted-foreground">
                  <PortableText value={faq?.details || []} />
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
