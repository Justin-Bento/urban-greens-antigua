"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import Logo from "./Logo";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Set initial state to false (closed)
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const navigation = ["home", "about", "products", "questions", "contact"];
  return (
    <header className="overflow-hidden isolate sticky top-0 z-90 bg-white shadow border-b border-gray-200">
      <div className="wrapper py-6 grid grid-cols-2 items-center">
        <div className="col-span-2 md:col-span-1 flex items-center justify-between">
          <Logo />
          <Button
            variant="outline"
            size="icon"
            className="md:hidden dark:text-white"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "nav-button-close" : "nav-button-open"}
          >
            {mobileMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
          </Button>
        </div>
        <nav className="col-span-2 md:col-span-1">
          <ul className="flex flex-col items-start  md:flex-row md:items-center lg:gap-4 md:justify-start lg:justify-end">
            {navigation.map((navigator, index) => (
              <li key={index}>
                <Link href={navigator === "home" ? "/" : `/${navigator}`}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className=" bg-transparent text-black capitalize hover:underline hover:cursor-pointer"
                  >
                    {navigator}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
