import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="container mx-auto my-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="my-6 space-y-4 ">
            <h1 className="scroll-m-20 text-4xl font-bold capitalize lg:text-5xl">
              {post?.name}
            </h1>
            <p className="text-pretty text-lg font-medium text-foreground sm:text-xl/8">
              {post.description}
            </p>
            <span className="inline-flex items-center gap-2">
              <p className="text-base/7 font-semibold text-foreground">
                Price varies by size, starting at&nbsp;
                {typeof post?.price?.product === "number"
                  ? new Intl.NumberFormat("en-XC", {
                      style: "currency",
                      currency: "XCD",
                    }).format(post.price.product)
                  : "$0.00"}{" "}
                per {post?.price?.size ?? "unit"} ounces
              </p>
            </span>
          </div>
          <div className="relative w-full aspect-video ">
            {post.mainImage ? (
              <Image
                src={urlFor(post.mainImage).url()}
                alt={"Default alternative text describing the image."}
                fill
                className="h-full w-full rounded-md object-contain"
              />
            ) : (
              <div className="h-full w-full rounded-md bg-gray-200 flex items-center justify-center">
                <span>No image available</span>
              </div>
            )}
          </div>
          <Accordion type="single" collapsible className="w-full space-y-12">
            <AccordionItem value="item-1" className="space-y-2">
              <AccordionTrigger className="text-xl hover:cursor-pointer">
                Flavour
              </AccordionTrigger>
              <AccordionContent className="prose text-balance text-muted-foreground">
                {post.flavour}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="space-y-2">
              <AccordionTrigger className="text-xl hover:cursor-pointer">
                Varieties
              </AccordionTrigger>
              <AccordionContent className="prose text-balance text-muted-foreground">
                A general description of the products varieties.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="space-y-2">
              <AccordionTrigger className="text-xl hover:cursor-pointer">
                Nutrients
              </AccordionTrigger>
              <AccordionContent className="prose text-balance text-muted-foreground">
                {post.nutrients}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="space-y-2">
              <AccordionTrigger className="text-xl hover:cursor-pointer">
                Colour
              </AccordionTrigger>
              <AccordionContent className="prose text-balance text-muted-foreground">
                {post.colour}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
