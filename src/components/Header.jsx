import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="sticky top-0 z-90 bg-white shadow-sm">
        <nav className="wrapper mx-auto md:justify-between">
          <div className="md:container md:flex md:justify-between md:items-center py-6">
            <div className="flex justify-between items-center">
              <div className="1">
                <Link to="/">
                  <img
                    src="/assets/logo/urban-greens-logo.png"
                    alt=""
                    width="86px"
                    height="86px"
                  />
                </Link>
              </div>
              <div className="text-2xl md:hidden">
                <ion-icon
                  name="menu"
                  id="hamburgerbtn"
                  className=" bg-purple-800"
                ></ion-icon>
              </div>
            </div>

            <div
              className="hidden md:flex flex-row md:items-center md:inline-block"
              id="mobileMenu"
            >
              <div className="">
                <Link to="/product" className="p-2 m-2">
                  Products
                </Link>
              </div>
              <div className="">
                <Link to="/learn" className="p-2 m-2">
                  Learn
                </Link>
              </div>
              <div className="">
                <Link to="/about" className="p-2 m-2">
                  About
                </Link>
              </div>
              <div className="/contact">
                <Link to="" className="p-2 m-2">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
