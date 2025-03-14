import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="my-6 space-y-4 col-span-12 lg:col-span-6">
            <h1 className="scroll-m-20 text-4xl font-bold capitalize lg:text-5xl">
              {post?.name}
            </h1>
            <p className="text-pretty text-lg font-medium text-foreground sm:text-xl/8">
              {post.description}
            </p>
            <p className="text-base/7 font-semibold text-foreground">
              {new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD",
              }).format(post.price)}
              per-once
            </p>
          </div>
          <div className="w-full aspect-video bg-gray-300 col-span-12 lg:col-span-6">
            <p className="opacity-0">hello</p>
          </div>
          <div className="col-span-12 space-y-12">
            <Card className="shadow-none ">
              <CardContent className="space-y-2">
                <CardTitle className="m-0 p-0">Flavour</CardTitle>
                <CardDescription className="m-0 p-0">
                  A general description of the products flavour.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-none">
              <CardContent className="space-y-2">
                <CardTitle className="m-0 p-0">Varieties</CardTitle>
                <CardDescription className="m-0 p-0">
                  A general description of the products varieties.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-none">
              <CardContent className="space-y-2">
                <CardTitle className="m-0 p-0">Nutrients</CardTitle>
                <CardDescription className="m-0 p-0">
                  A general description of the products nutrients.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-none">
              <CardContent className="space-y-2">
                <CardTitle className="m-0 p-0">Colour</CardTitle>
                <CardDescription className="m-0 p-0">
                  A general description of the products colour.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
