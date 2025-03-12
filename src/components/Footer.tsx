import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function Footer() {
  const navigation = ["home", "about", "products", "questions", "contact"];
  const about = ["company", "questions", "farming"];
  const socials = ["facebook", "whatsapp", "instagram"];
  return (
    <footer className="">
      <Card className="bg-green-900 text-white rounded-none shadow-none border-none py-24">
        <CardContent className="container mx-auto grid grid-cols-12 gap-12">
          <div className="relative w-32 aspect-[16/11] col-span-12 sm:col-span-3">
            <Image
              fill
              src="/media/logo/urban-greens-logo-white.png"
              alt=""
              className="object-center"
            />
          </div>
          <nav className="col-span-12 sm:col-span-3">
            <p className="mb-4 subtitle-1 text-gray-50">Pages</p>
            <Separator />
            <ul className="space-y-4 mt-4 opacity-70">
              {navigation.map((navigator, index) => (
                <li key={index}>
                  <Link href={navigator === "home" ? "/" : `/${navigator}`}>
                    <Button
                      variant="link"
                      size="sm"
                      className=" capitalize hover:cursor-pointer text-white"
                    >
                      {navigator}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="col-span-12 sm:col-span-3">
            <p className="mb-4 subtitle-1 text-gray-50">About</p>
            <Separator />
            <ul className="space-y-4 mt-4 opacity-70">
              {about.map((navigator, index) => (
                <li key={index}>
                  <Link href={navigator === "home" ? "/" : `/${navigator}`}>
                    <Button
                      variant="link"
                      size="sm"
                      className=" capitalize hover:cursor-pointer text-white"
                    >
                      {navigator}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="col-span-12 sm:col-span-3">
            <p className="mb-4 subtitle-1 text-gray-50">Contact</p>
            <Separator />
            <ul className="space-y-4 mt-4 opacity-70">
              {socials.map((navigator, index) => (
                <li key={index}>
                  <Link href={navigator}>
                    <Button
                      variant="link"
                      size="sm"
                      className=" capitalize hover:cursor-pointer text-white"
                    >
                      {navigator}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </CardContent>
      </Card>
    </footer>
  );
}
