import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="px-4 py-20 text-gray-100 bg-green-500">
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
                <p className="mb-4 subtitle-1 text-gray-50">Product</p>
                <a href="#" className="flex mb-4 body-2 text-gray-100">
                  Features
                </a>
                <a href="#" className="flex mb-4 body-2 text-gray-100">
                  Integrations
                </a>
                <a href="#" className="flex mb-4 body-2 text-gray-100">
                  Documentation
                </a>
                <a href="#" className="flex mb-4 body-2 text-gray-100">
                  FAQs
                </a>
                <a href="#" className="flex body-2 text-gray-100">
                  Pricing
                </a>
              </nav>
              <nav className="mb-8">
                <p className="mb-4 subtitle-1 text-gray-50">About</p>
                <a href="#" className="flex mb-4 body-2 text-gray-100">
                  Press-Kit
                </a>
                <a href="#" className="flex mb-4 body-2 text-gray-100">
                  Company
                </a>
                <a href="#" className="flex mb-4 body-2 text-gray-100">
                  Privacy
                </a>
                <a href="#" className="flex mb-4 body-2 text-gray-100">
                  Blog
                </a>
              </nav>
              <nav className="mb-8">
                <p className="mb-4 subtitle-1 text-gray-50">Contact</p>
                <a href="#" className="flex mb-4 body-2 text-gray-100">
                  Twitter
                </a>
                <a href="#" className="flex mb-4 body-2 text-gray-100">
                  Instagram
                </a>
                <a href="#" className="flex mb-4 body-2 text-gray-100">
                  Email
                </a>
                <a href="#" className="flex mb-4 body-2 text-gray-100">
                  Advertising
                </a>
                <a href="#" className="flex mb-4 body-2 text-gray-100">
                  Chat
                </a>
              </nav>
              <nav className="mb-8">
                <p className="mb-4 subtitle-1 text-gray-50">Legal</p>
                <a href="#" className="flex mb-4 body-2 text-gray-100">
                  Terms of Service
                </a>
                <a href="#" className="flex mb-4 body-2 text-gray-100">
                  Privacy Policy
                </a>
                <a href="#" className="flex mb-4 body-2 text-gray-100">
                  Cookie Policy
                </a>
                <a href="#" className="flex mb-4 body-2 text-gray-100">
                  Affiliate Program
                </a>
                <a href="#" className="flex mb-4 body-2 text-gray-100">
                  Manage Cookies
                </a>
              </nav>
            </div>
            <p className="subtitle-2 text-green-100 text-center tracking-wide">
              © Copyright 2021 Urban Greens Inc. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
