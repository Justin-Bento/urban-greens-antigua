import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footerBackground">
          <div className="wrapper">
            <div className="footerGrid">
              <Link to="/">
                <img src="/assets/logo/urban-greens-logo.png" alt="" className='w-auto h-20 grayscale brightness-200' />
              </Link>
              <nav className="mb-8">
                <p className="mb-4 subtitle-1 text-gray-50">Pages</p>
                <div className="flex flex-col gap-4">
                  <Link to="/products" className="text-sm leading-5 text-gray-100 align-middle subpixel-antialiased hover:underline">
                    Products
                  </Link>
                  <Link to="/faqs" className="text-sm leading-5 text-gray-100 align-middle subpixel-antialiased hover:underline">
                    FAQ's
                  </Link>
                  <Link to="/about" className="text-sm leading-5 text-gray-100 align-middle subpixel-antialiased hover:underline">
                    About
                  </Link>
                  <Link to="/contact" className="text-sm leading-5 text-gray-100 align-middle subpixel-antialiased hover:underline">
                    Contact
                  </Link>
                </div>
              </nav>
              <div className="mb-8">
                <p className="mb-4 subtitle-1 text-gray-50">About</p>
                <div className="flex flex-col gap-4">
                  <Link to="/about" className="text-sm leading-5 text-gray-100 align-middle subpixel-antialiased hover:underline">
                    Company
                  </Link>
                  <Link to="/about" className="text-sm leading-5 text-gray-100 align-middle subpixel-antialiased hover:underline">
                    Story
                  </Link>
                  <Link to="/about" className="text-sm leading-5 text-gray-100 align-middle subpixel-antialiased hover:underline">
                    Values
                  </Link>
                </div>
              </div>
              <div className="mb-8">
                <p className="mb-4 subtitle-1 text-gray-50">Contact</p>
                <div className="flex flex-col gap-4">
                  <a href={footer.socialMedia.facebook} className="text-sm leading-5 text-gray-100 align-middle subpixel-antialiased hover:underline">
                    Facebook
                  </a>
                  <a href={footer.socialMedia.instgram} className="text-sm leading-5 text-gray-100 align-middle subpixel-antialiased hover:underline">
                    Instagram
                  </a>
                  <a href="#" className="text-sm leading-5 text-gray-100 align-middle subpixel-antialiased hover:underline">
                    Email
                  </a>
                </div>
              </div>
            </div>
            <p className="text-sm leading-5 text-gray-100 align-middle subpixel-antialiased text-center">© Copyright 2021 Urban Greens Inc. All Rights Reserved.</p>
          </div>
        </footer>
      </>
    );
  }
}

let footer = {
  logoWhite: "../../assets/logo/urban-greens-logo-white.png",
  socialMedia: {
    facebook: "https://www.facebook.com/UrbanGreensANU/",
    instgram: "https://instagram.com/urbangreensanu?utm_medium=copy_link",
  },
};
