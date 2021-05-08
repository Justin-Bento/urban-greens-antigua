import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="sticky top-0 z-90">
        <div className="bg-white shadow-sm py-2">
          <div className="wrapper">
            <div className="md:flex md:justify-between  md:items-center">
              <div className="col-1">
                <div className="logo">
                  <img src="../src/assets/logo/urban-greens-logo.png" alt="" width="96px" height="96px" />
                </div>
                <div className="menu"></div>
              </div>
              <div className="col-2">
                <a href="#" className="md:p-2">
                  Products
                </a>
                <a href="#" className="md:p-2">
                  Learn
                </a>
                <a href="#" className="md:p-2">
                  About
                </a>
                <a href="#" className="md:p-2">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
