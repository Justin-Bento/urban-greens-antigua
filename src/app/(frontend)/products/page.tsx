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
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

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
          vibrant flavors. Whether you're looking to add a crisp touch to
          salads, a flavorful boost to sandwiches, or a nutritious garnish to
          your favorite dishes, our microgreens are grown with care.
        </p>
        <Separator className="max-w-[40ch]" />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <li key={post._id}>
            <Link href={`/products/${post?.slug?.current}`}>
              <Card className="shadow-none group">
                <CardContent>
                  <AspectRatio ratio={16 / 9} className="bg-muted mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                      alt="Photo by Drew Beamer"
                      fill
                      className="h-full w-full rounded-md object-cover"
                    />
                  </AspectRatio>
                  <CardTitle className="mb-3">Product Title</CardTitle>
                  <CardDescription className="line-clamp-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus aliquid, impedit rerum magnam, repudiandae molestias
                    cum, labore veritatis aut officiis consequuntur. Enim cum
                    perferendis optio nesciunt laboriosam corporis adipisci
                    recusandae?
                  </CardDescription>
                  <Button
                    variant="link"
                    className="pl-0 text-muted-foreground text-xs mt-3 group-hover:underline"
                  >
                    View Product Infromation &rarr;
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
