"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Logo from "./Logo";
import { BiMenu, BiX } from "react-icons/bi";
import Link from "next/link";

export default function Navigation() {
  const [isToggled, setIsToggled] = useState(false);
  const navigation = ["home", "about", "products", "questions", "contact"];
  const handleToggle = () => {
    setIsToggled(!isToggled); // Toggles the state between true and false
  };
  return (
    <header className="py-6 shadow border-b border-black/10">
      <div
        className={twMerge(
          "wrapper",
          "grid grid-cols-1 lg:grid-cols-2 items-center"
        )}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button
            onClick={handleToggle}
            className={twMerge("border border-black", "py-2 px-6", "lg:hidden")}
          >
            {isToggled ? <BiX size={24} /> : <BiMenu size={24} />}
          </button>
        </div>
        <nav
          className={twMerge(
            "hidden lg:block", // always visible on desktop
            isToggled && "block lg:block"
          )}
        >
          <ul
            className={twMerge(
              "mt-6 lg:mt-0",
              "flex gap-6 flex-col items-start justify-start",
              "lg:justify-end lg:flex-row lg:items-center"
            )}
          >
            {navigation.map((navigator, index) => (
              <li key={index}>
                <Link
                  className="w-full focus:underline text-base leading-7 px-3 capitalize hover:underline"
                  href={navigator === "home" ? "/" : `/${navigator}`}
                >
                  {navigator}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
