import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="px-4 py-20 text-white bg-green-600">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-4 mb-4 md:grid-cols-5">
              <a
                href="/"
                title="Go to Kutty Home Page"
                className="col-span-2 md:col-span-1"
              >
                <img
                  src="../../assets/logo/urban-greens-logo-white.png"
                  alt=""
                  className="object-cover bg-contain w-20 h-20 rounded"
                  loading="lazy"
                  width="96px"
                  height="96px"
                />
              </a>
              <nav className="mb-8">
                <p className="mb-4 text-xs font-bold tracking-wider text-gray-50 uppercase">
                  Product
                </p>
                <a
                  href="#"
                  className="flex mb-4 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="flex mb-4 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Integrations
                </a>
                <a
                  href="#"
                  className="flex mb-4 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="flex mb-4 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  FAQs
                </a>
                <a
                  href="#"
                  className="flex mb-4 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Pricing
                </a>
              </nav>
              <nav className="mb-8">
                <p className="mb-2 text-xs font-bold tracking-wider  uppercase">
                  About
                </p>
                <a
                  href="#"
                  className="flex mb-4 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Press-Kit
                </a>
                <a
                  href="#"
                  className="flex mb-4 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Company
                </a>
                <a
                  href="#"
                  className="flex mb-4 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="flex mb-4 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Blog
                </a>
              </nav>
              <nav className="mb-8">
                <p className="mb-4 text-xs font-bold tracking-wider text-gray-50 uppercase">
                  Contact
                </p>
                <a
                  href="#"
                  className="flex mb-4 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="flex mb-4 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="flex mb-4 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Email
                </a>
                <a
                  href="#"
                  className="flex mb-4 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Advertising
                </a>
                <a
                  href="#"
                  className="flex mb-4 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Chat
                </a>
              </nav>
              <nav className="mb-8">
                <p className="mb-4 text-xs font-bold tracking-wider text-gray-50 uppercase">
                  Legal
                </p>
                <a
                  href="#"
                  className="flex mb-4 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="flex mb-4 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="flex mb-4 text-sm font-medium transition md:mb-2 hover:text-green-70"
                >
                  Cookie Policy
                </a>
                <a
                  href="#"
                  className="flex mb-4 text-sm font-medium transition md:mb-2 hover:text-green-70"
                >
                  Affiliate Program
                </a>
                <a
                  href="#"
                  className="flex mb-4 text-sm font-medium transition md:mb-2 hover:text-green-70"
                >
                  Manage Cookies
                </a>
              </nav>
            </div>
            <p className="text-sm font-medium text-left text-gray-800 md:text-center">
              © Copyright 2020 Skcript Inc. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
