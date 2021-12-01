import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
    };
  }
  render() {
    return (
      <nav className="appbarBackground">
        <div className="appbarContainer">
          <div className="appbarMenu">
            <div className="1">
              <Link to="/">
                <img src={appbar.logo} alt="" width="86px" height="86px" />
              </Link>
            </div>
            <div
              className="text-2xl sm:hidden"
              onClick={() => {
                this.setState({
                  toggle: !this.state.toggle,
                });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => {
                  this.setState({
                    toggle: !this.state.toggle,
                  });
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </div>
          <div id="mobileMenu">
            {this.state.toggle ? (
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
}

let appbar = {
  logo: "/assets/logo/urban-greens-logo.png",
};
