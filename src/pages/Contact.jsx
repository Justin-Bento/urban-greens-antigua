import React from 'react';

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
  return (
    <div className="contact">
      <div className="wrapper">
        <div className="my-24">
          <div className="grid2">
            <div className="1">
              <h1 className="headline3">Contact Us</h1>
              <p className="body1">
                By droping us a message and we will get back to you.
              </p>
              <div className="flex phone-number flex-items py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="iconSm"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={svg.path1}
                  />
                </svg>
                <p className="body1 px-2">+1 (268)-720-8474</p>
              </div>
              {/* end of phone-number */}
              <div className="email flex flex-items py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="iconSm"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={svg.path2}
                  />
                </svg>
                <p className="body1 px-2">urbangreensanu@gmail.com</p>
              </div>
              {/* end of email */}
              <div className="email flex flex-items py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="iconSm"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={svg.path3}
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={svg.path4}
                  />
                </svg>
                <p className="body1 px-2">St.John's, Antigua &#38; Barbuda</p>
              </div>
              {/* end of email */}
            </div>
            <div className="2">
              <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <div className="name py-4">
                  <label htmlFor="name" className="body2">
                    Your Name:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="inputText"
                  />
                </div>
                {/* end of form name */}
                <div className="email py-4">
                  <label htmlFor="email" className="body2">
                    Email
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="inputText"
                  />
                </div>
                {/* end of form email */}
                <div className="message py-4">
                  <label htmlFor="message" className="body2">
                    Message
                  </label>
                  <br />
                  <input
                    type="text"
                    name="message"
                    id="message"
                    className="inputText"
                    maxLength="500"
                    onChange={(event) => setMessage(event.target.value)}
                  />
                  <p className="body2 mt-2 text-gray-600">
                    Length is 500 Characters
                  </p>
                </div>
                {/* end of form email */}
                <div className="submit py-4">
                  <input
                    type="submit"
                    value="Submit"
                    className="btnContained"
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

let svg = {
  path1: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  path2: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207",
  path3: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
  path4: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
}





