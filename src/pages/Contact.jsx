import React from 'react';

export default function Contact() {
  return (
    <div className="Contact">
      <div className="wrapper">
        <div className="my-12 md:my-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 md:gap-12 lg:gap-20">
            <div className="1">
              <h1 className="headline-3">Contact</h1>
              <p className="body-1 line-clamp-3">
                What to learn more about microgreens or purchase them? Submit
                this form or call us and we will contact you soon.
              </p>
              <div className="my-8">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-800 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="body-1">WhatsApp: +1 662-728-2030</p>
                </div>
                <div className="my-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-800 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="body-1">Email: hello@urbangreensanu.com</p>
                </div>
                <div className="my-2">
                  <p className="body-1">Direct:+1 268-728-2030 </p>
                </div>
              </div>
            </div>
            <div className="2">
              <label className="block my-8">
                <span className="body-2">Name</span>
                <input
                  className="form-input rounded  px-2 h-10 block w-full border-1 border-gray-400"
                  placeholder="Jane Doe"
                />
              </label>
              <label className="block my-8">
                <span className="body-2">Email</span>
                <input
                  className="form-input rounded  px-2 h-10 block w-full border-1 border-gray-400"
                  placeholder="Jane Doe"
                />
              </label>
              <label className="block my-8">
                <span className="body-2">Message</span>
                <input
                  className="form-input rounded  px-2 h-10 block w-full border-1 border-gray-400"
                  placeholder="Jane Doe"
                />
              </label>
              <div className="block my-8">
                <input
                  type="submit"
                  value="Send Now"
                  className="btn-contained"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
