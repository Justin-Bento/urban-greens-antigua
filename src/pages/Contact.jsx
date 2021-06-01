import React from 'react';

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
  return (
    <div className="contact">
      <div className="wrapper">
        <div className="spacing">
          <div className="grid-2">
            <div className="1">
              <h1 className="headline-3 mb-2">Contact Us</h1>
              <p className="body-1">
                By droping us a message and we will get back to you.
              </p>
              <div className="phone-number flex-items spacing-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-sm"
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
                <p className="body-1 px-2">+1 (268)-720-8474</p>
              </div>
              {/* end of phone-number */}
              <div className="email flex-items spacing-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-sm"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <p className="body-1 px-2">urbangreensanu@gmail.com</p>
              </div>
              {/* end of email */}
              <div className="email flex-items spacing-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-sm"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="body-1 px-2">St.John's, Antigua &#38; Barbuda</p>
              </div>
              {/* end of email */}
            </div>
            <div className="2">
              <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <div className="name spacing-sm">
                  <label htmlFor="name" className="body-2">
                    Your Name:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input-text"
                  />
                </div>
                {/* end of form name */}
                <div className="email spacing-sm">
                  <label htmlFor="email" className="body-2">
                    Email
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-text"
                  />
                </div>
                {/* end of form email */}
                <div className="message spacing-sm">
                  <label htmlFor="message" className="body-2">
                    Message
                  </label>
                  <br />
                  <input
                    type="text"
                    name="message"
                    id="message"
                    className="input-text"
                    maxLength="500"
                    onChange={(event) => setMessage(event.target.value)}
                  />
                  <p className="body-2 mt-2 text-gray-600">
                    Length is 500 Characters
                  </p>
                </div>
                {/* end of form email */}
                <div className="submit spacing-sm">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn-contained"
                    onSubmit={handleSubmit}
                  />
                </div>
                {/* end of form email */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
