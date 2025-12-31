"use client";
import React, { useState } from "react";

export default function Navigation() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled); // Toggles the state between true and false
  };

  return (
    <header className="py-6 shadow border-b border-black/10">
      <div className="wrapper">
        <div className="">
          <button onClick={handleToggle}>{isToggled ? "ON" : "OFF"}</button>

          {/* Conditionally render content */}
          {isToggled && <div className=""></div>}
        </div>
      </div>
    </header>
  );
}
