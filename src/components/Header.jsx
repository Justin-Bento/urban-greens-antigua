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
                    <img
                      src="../../assets/logo/urban-greens-logo.png"
                      alt=""
                      width="96px"
                      height="96px"
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="menu"></div>
              </div>
              <div className="col-2">
                <Link to="/product" className="btn-link font-normal">
                  Products
                </Link>
                <Link to="/learn" className="btn-link font-normal m-2">
                  Learn
                </Link>
                <Link to="/about" className="btn-link font-normal m-2">
                  About
                </Link>
                <Link to="/contact" className="btn-link font-normal m-2">
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
