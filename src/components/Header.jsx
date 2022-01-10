import React, { Component, useEffect, useState } from "react"
import { Link } from "react-router-dom";

let appbar = {
  logo: "/assets/logo/urban-greens-logo.png",
}
;

export default function Header() {
  const [isActive, setIsActive] = useState(true);
  const onClick = () => setIsActive((isActive) => !isActive);
  useEffect(() => {
    const handelResize = () => {
    if (window.innerWidth >= 640) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
    window.addEventListener("resize", handelResize);
  });
    return (
      <nav className="appbarBackground">
        <div className="appbarContainer">
          <div className="appbarMenu">
            <div className="1">
              <Link to="/">
                <img src={appbar.logo} alt="" width="86px" height="86px" />
              </Link>
            </div>
            <div className="text-2xl sm:hidden" onClick={onClick}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </div>
          <div id="mobileMenu">
            {isActive ? (
              <div className="appbarMenuLinks">
                <div className="navLinks">
                  <Link to="/products" className="">
                    Products
                  </Link>
                </div>
                <div className="navLinks">
                  <Link to="/faqs">FAQ'S</Link>
                </div>
                <div className="navLinks">
                  <Link to="/about">About</Link>
                </div>
                <div className="navLinks">
                  <Link to="/contact">Contact</Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    );
  }


