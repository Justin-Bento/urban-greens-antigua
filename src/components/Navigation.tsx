"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Logo from "./Logo";

export default function Navigation() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled); // Toggles the state between true and false
  };

  return (
    <header className="py-6 shadow border-b border-black/10">
      <div className="wrapper grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-between">
          <Logo />
          <button
            onClick={handleToggle}
            className={twMerge("border border-black", "py-2 px-6", "lg:hidden")}
          >
            {isToggled ? "ON" : "OFF"}
          </button>

          {/* Conditionally render content */}
          {isToggled && <div className="">The toggle is working</div>}
        </div>
      </div>
    </header>
  );
}
