import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="px-4 py-20 text-gray-100 bg-green-800">
          <div className="wrapper">
            <div className="grid grid-cols-2 gap-4 mb-4 md:grid-cols-4">
              <Link to="/" className="col-span-2 md:col-span-1">
                <img
                  src="../../assets/logo/urban-greens-logo-white.png"
                  alt=""
                  className="object-cover bg-contain w-20 h-20 rounded"
                  loading="lazy"
                  width="96px"
                  height="96px"
                />
              </Link>
              <nav className="mb-8">
                <p className="mb-4 subtitle-1 text-gray-50">Pages</p>
                <Link to="/products" className="flex mb-4 body-2 text-gray-100">
                  Products
                </Link>
                <Link to="/faqs" className="flex mb-4 body-2 text-gray-100">
                  FAQ's
                </Link>
                <Link to="/about" className="flex mb-4 body-2 text-gray-100">
                  About
                </Link>
                <Link to="/contact" className="flex body-2 text-gray-100">
                  Contact
                </Link>
              </nav>
              <nav className="mb-8">
                <p className="mb-4 subtitle-1 text-gray-50">About</p>
                <Link to="/about" className="flex mb-4 body-2 text-gray-100">
                  Company
                </Link>
                <Link to="/about" className="flex mb-4 body-2 text-gray-100">
                  Story
                </Link>
                <Link to="/about" className="flex mb-4 body-2 text-gray-100">
                  Values
                </Link>
              </nav>
              <nav className="mb-8">
                <p className="mb-4 subtitle-1 text-gray-50">Contact</p>
                <a
                  href="https://www.facebook.com/UrbanGreensANU/"
                  className="flex mb-4 body-2 text-gray-100"
                >
                  Facebook
                </a>
                <a
                  href="https://instagram.com/urbangreensanu?utm_medium=copy_link"
                  className="flex mb-4 body-2 text-gray-100"
                >
                  Instagram
                </a>
                <a href="#" className="flex mb-4 body-2 text-gray-100">
                  Email
                </a>
              </nav>
            </div>
            <p className="subtitle-2 text-green-100 md:text-center">
              © Copyright 2021 Urban Greens Inc. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
