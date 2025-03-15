import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { urlFor } from "@/sanity/lib/image";

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <>
      <div className="">
        <span className="space-y-1">
          <p className="text-green-700">Fresh Microgreens</p>
          <h1 className="scroll-m-20 text-4xl font-bold capitalize lg:text-5xl">
            Nutrient-Packed Greens for Every Dish.
          </h1>
        </span>
        <p className="max-w-[120ch] opacity-70 text-balance my-4 text-lg">
          Our fresh, microgreens are the perfect way to enhance your meals with
          vibrant flavors. Whether you&#39;re looking to add a crisp touch to
          salads, a flavorful boost to sandwiches, or a nutritious garnish to
          your favorite dishes, our microgreens are grown with care.
        </p>
        <Separator className="max-w-[40ch] mt-12" />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <li key={post._id}>
            <Link href={`/products/${post?.slug?.current}`}>
              <Card className="shadow-none group hover:bg-muted transition-all">
                <CardContent>
                  <div className="relative w-full aspect-video mb-6">
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage).url()}
                        alt={"Default alternative text describing the image."}
                        fill
                        className="w-full h-full rounded-md object-contain"
                      />
                    ) : (
                      <div className="w-full h-full rounded-md bg-gray-200 flex items-center justify-center">
                        <span>No image available</span>
                      </div>
                    )}
                  </div>
                  <CardTitle className="mb-3">{post?.name}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.description}
                  </CardDescription>
                  <Button
                    variant="link"
                    className="pl-0 text-muted-foreground text-xs mt-3 group-hover:underline"
                  >
                    View Product Information &rarr;
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <Link href="/">&larr; Return home</Link>
    </>
  );
}
