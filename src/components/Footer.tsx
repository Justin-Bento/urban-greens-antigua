import React from "react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Logo from "./Logo";

export default function Footer() {
  const navigation = ["home", "about", "products", "questions", "contact"];
  const about = ["company", "questions", "farming"];
  const socials = ["facebook", "whatsapp", "instagram"];
  return (
    <footer className="overflow-hidden">
      <Card className="bg-green-900 text-white rounded-none shadow-none border-none py-24">
        <CardContent className="wrapper grid grid-cols-4 gap-12">
          <div className="">
            <Logo />
          </div>
          <nav className="">
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
          <nav className="">
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
          <nav className="">
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
