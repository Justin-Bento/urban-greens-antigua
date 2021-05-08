import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="sticky top-0 z-90">
        <div className="bg-white shadow-sm py-2">
          <div className="wrapper">
            <div className="md:flex md:justify-between  md:items-center">
              <div className="col-1">
                <div className="logo">
                  <Link to="/">
                    <img src="../src/assets/logo/urban-greens-logo.png" alt="" width="96px" height="96px" />
                  </Link>
                </div>
                <div className="menu"></div>
              </div>
              <div className="col-2">
                <Link to="/product" className="md:p-2 hover:text-green-600">
                  Products
                </Link>
                <Link to="/learn" className="md:p-2 hover:text-green-600">
                  Learn
                </Link>
                <Link to="/about" className="md:p-2 hover:text-green-600">
                  About
                </Link>
                <Link to="/contact" className="md:p-2 hover:text-green-600">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
