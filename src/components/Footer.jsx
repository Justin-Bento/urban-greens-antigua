import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="px-4 py-20 text-white bg-green-600">
          <div class="mx-auto max-w-7xl">
            <div class="grid grid-cols-2 gap-4 mb-3 md:grid-cols-5">
              <a href="/" title="Go to Kutty Home Page" class="col-span-2 md:col-span-1">
                <img
                  src="../src/assets/logo/urban-greens-logo-white.png"
                  alt=""
                  className="object-cover bg-contain w-20 h-20 rounded"
                />
              </a>
              <nav class="mb-8">
                <p class="mb-3 text-xs font-bold tracking-wider text-gray-50 uppercase">Product</p>
                <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">
                  Features
                </a>
                <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">
                  Integrations
                </a>
                <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">
                  Documentation
                </a>
                <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">
                  FAQs
                </a>
                <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">
                  Pricing
                </a>
              </nav>
              <nav class="mb-8">
                <p class="mb-3 text-xs font-bold tracking-wider  uppercase">About</p>
                <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">
                  Press-Kit
                </a>
                <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">
                  Company
                </a>
                <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">
                  Privacy
                </a>
                <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">
                  Blog
                </a>
              </nav>
              <nav class="mb-8">
                <p class="mb-3 text-xs font-bold tracking-wider text-gray-50 uppercase">Contact</p>
                <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">
                  Twitter
                </a>
                <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">
                  Instagram
                </a>
                <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">
                  Email
                </a>
                <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">
                  Advertising
                </a>
                <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">
                  Chat
                </a>
              </nav>
              <nav class="mb-8">
                <p class="mb-3 text-xs font-bold tracking-wider text-gray-50 uppercase">Legal</p>
                <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">
                  Terms of Service
                </a>
                <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">
                  Privacy Policy
                </a>
                <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">
                  Cookie Policy
                </a>
                <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">
                  Affiliate Program
                </a>
                <a href="#" class="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">
                  Manage Cookies
                </a>
              </nav>
            </div>
            <p class="text-sm font-medium text-left text-gray-800 md:text-center">
              © Copyright 2020 Skcript Inc. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
