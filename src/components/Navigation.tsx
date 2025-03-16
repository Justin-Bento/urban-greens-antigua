"use client";
import React, { useState } from "react";
import { Card, CardContent, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Set initial state to false (closed)
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const navigation = ["home", "about", "products", "questions", "contact"];

  return (
    <header className="sticky top-0 z-10">
      <Card className="rounded-none">
        <CardContent className="container mx-auto grid grid-cols-1 items-center gap-4 lg:grid-cols-2">
          {/* Logo and Mobile Menu Toggle */}
          <div className="flex w-full items-center justify-between">
            <Link href="/" className="relative w-24 aspect-[16/11]">
              <Image
                fill
                src="/media/logo/urban-greens-logo.png"
                alt=""
                className="object-center"
              />
            </Link>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden dark:text-white"
              onClick={toggleMobileMenu}
              aria-label={
                mobileMenuOpen ? "nav-button-close" : "nav-button-open"
              }
            >
              {mobileMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
            </Button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              mobileMenuOpen ? "block" : "hidden"
            } lg:block lg:flex lg:items-center lg:justify-end`}
          >
            <ul
              role="list"
              className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-end"
            >
              {navigation.map((navigator, index) => (
                <li key={index}>
                  <Link href={navigator === "home" ? "/" : `/${navigator}`}>
                    <Button
                      variant="link"
                      size="sm"
                      className="w-full justify-start lg:justify-center hover:cursor-pointer"
                    >
                      <CardDescription className="capitalize text-black dark:text-white">
                        {navigator}
                      </CardDescription>
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </header>
  );
}
