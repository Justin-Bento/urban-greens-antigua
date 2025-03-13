import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { sanityFetch } from "@/sanity/lib/live";
import { All_Questions } from "@/sanity/lib/queries";
import React from "react";

export default async function page() {
  const { data: questions } = await sanityFetch({ query: All_Questions });
  return (
    <>
      <section className="">
        <span className="space-y-1">
          <p className="text-green-700">Microgreens</p>
          <h1 className="scroll-m-20 text-4xl font-bold capitalize lg:text-5xl">
            Frequently Asked Questions.
          </h1>
        </span>
        <p className="max-w-[120ch] opacity-70 text-balance my-4 text-lg">
          If you can't find what you're looking for, email our team and if
          you're lucky someone will get back to you.
        </p>
        <Separator className="max-w-[40ch] mt-12" />
        <ul className="">
          {questions.map((question: any) => {
            return (
              <li key={question?._id}>
                <Card>
                  <CardContent>
                    <CardTitle>{question?.question}</CardTitle>
                    <CardDescription>{question?.details}</CardDescription>
                  </CardContent>
                </Card>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
