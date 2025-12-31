"use client";
import React, { useState } from "react";

export default function Navigation() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled); // Toggles the state between true and false
  };

  return (
    <header className="py-6 shadow border-b border-black/10">
      <button onClick={handleToggle}>{isToggled ? "ON" : "OFF"}</button>

      {/* Conditionally render content */}
      {isToggled && <p>This content is visible when toggled ON.</p>}
    </header>
  );
}
