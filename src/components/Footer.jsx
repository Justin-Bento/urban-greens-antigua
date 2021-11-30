import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footerBackground">
          <div className="wrapper">
            <div className="footerGrid">
              <Link to="/" className="footerGridOrder">
                <img src={footer.logoWhite} alt="" className="footerLogo" loading="lazy" width="96px" height="96px" />
              </Link>
              <nav className="mb-8">
                <p className="mb-4 subtitle-1 text-gray-50">Pages</p>
                <div className="flex flex-col">
                  <Link to="/products" className="footerText">
                    Products
                  </Link>
                  <Link to="/faqs" className="footerText">
                    FAQ's
                  </Link>
                  <Link to="/about" className="footerText">
                    About
                  </Link>
                  <Link to="/contact" className="footerText">
                    Contact
                  </Link>
                </div>
              </nav>
              <div className="mb-8">
                <p className="mb-4 subtitle-1 text-gray-50">About</p>
                <div className="flex flex-col">
                  <Link to="/about" className="footerText">
                    Company
                  </Link>
                  <Link to="/about" className="footerText">
                    Story
                  </Link>
                  <Link to="/about" className="footerText">
                    Values
                  </Link>
                </div>
              </div>
              <div className="mb-8">
                <p className="mb-4 subtitle-1 text-gray-50">Contact</p>
                <div className="flex flex-col">
                  <a href={footer.socialMedia.facebook} className="footerText">
                    Facebook
                  </a>
                  <a href={footer.socialMedia.instgram} className="footerText">
                    Instagram
                  </a>
                  <a href="#" className="footerText">
                    Email
                  </a>
                </div>
              </div>
            </div>
            <p className="footerText text-center">© Copyright 2021 Urban Greens Inc. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
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
