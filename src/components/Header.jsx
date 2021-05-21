import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
    };
  }

  render() {
    return (
      <header className="sticky top-0 z-90 bg-white shadow">
        <nav className="wrapper mx-auto md:justify-between">
          <div className="md:container md:flex md:justify-between md:items-center py-2">
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
              <div
                className="text-2xl md:hidden"
                onClick={() => {
                  this.setState({
                    toggle: !this.state.toggle,
                  });
                }}
              >
                <ion-icon
                  name="menu"
                  id="hamburgerbtn"
                  className=" bg-purple-800"
                  onClick={() => {
                    this.setState({
                      toggle: !this.state.toggle,
                    });
                  }}
                ></ion-icon>
              </div>
            </div>

            <div id="mobileMenu">
              <div className="">
                {this.state.toggle ? (
                  <div className="flex items-center justify-between">
                    <div className="p-1 hover:border-b-2 hover:border-green-600 lg:px-2 lg:m-2">
                      <Link to="/products" className="">
                        Products
                      </Link>
                    </div>
                    <div className="p-1 hover:border-b-2 hover:border-green-600 lg:px-2 lg:m-2">
                      <Link to="/learn">Learn</Link>
                    </div>
                    <div className="p-1 hover:border-b-2 hover:border-green-600 lg:px-2 lg:m-2">
                      <Link to="/about">About</Link>
                    </div>
                    <div className="p-1 hover:border-b-2 hover:border-green-600 lg:px-2 lg:m-2">
                      <Link to="/contact">Contact</Link>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
