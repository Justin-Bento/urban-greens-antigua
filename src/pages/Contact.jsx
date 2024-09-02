import React from 'react';
import { RiPhoneLine, RiMailLine, RiMapPinLine } from 'react-icons/ri';
import { Button } from '../components/Button';

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
  return (
    <>
      <main className="">
        <div className="contact">
          <div className="wrapper">
            <div className="my-16 lg:my-24">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="1">
                  <h1 className="pb-2 text-3xl font-bold tracking-tight transition-colors scroll-m-20 first:mt-0">Contact Us</h1>
                  <p className="leading-7 text-gray-800">By droping us a message and we will get back to you.</p>
                  <div className="flex flex-col items-start gap-4 mt-4">
                    <div className="flex items-center gap-1">
                      <Button variant="outline" size="icon">
                        <RiPhoneLine className="w-4 h-4" />
                      </Button>
                      <p className="px-2 body1">+1 (268)-720-8474</p>
                    </div>
                    {/* end of phone-number */}
                    <div className="flex items-center gap-1">
                      <Button variant="outline" size="icon">
                        <RiMailLine className="w-4 h-4" />
                      </Button>
                      <p className="px-2 body1">urbangreensanu@gmail.com</p>
                    </div>
                    {/* end of email */}
                    <div className="flex items-center gap-1">
                      <Button variant="outline" size="icon">
                        <RiMapPinLine className="w-4 h-4" />
                      </Button>
                      <p className="px-2 body1">St.John's, Antigua &#38; Barbuda</p>
                    </div>
                    {/* end of email */}
                  </div>
                </div>
                <div className="2">
                  <form name="contact" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="py-4 name">
                      <label htmlFor="name" className="body2">
                        Your Name:
                      </label>
                      <br />
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="flex w-full px-3 py-1 text-sm transition-colors border rounded-md shadow-sm h-9 border-input bg-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    {/* end of form name */}
                    <div className="py-4 email">
                      <label htmlFor="email" className="body2">
                        Email
                      </label>
                      <br />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="flex w-full px-3 py-1 text-sm transition-colors border rounded-md shadow-sm h-9 border-input bg-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    {/* end of form email */}
                    <div className="py-4 message">
                      <label htmlFor="message" className="body2">
                        Message
                      </label>
                      <br />
                      <input
                        type="text"
                        name="message"
                        id="message"
                        className="flex w-full px-3 py-1 text-sm transition-colors border rounded-md shadow-sm h-9 border-input bg-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        maxLength="500"
                        onChange={(event) => setMessage(event.target.value)}
                      />
                      <p className="mt-2 text-gray-600 body2">Length is 500 Characters</p>
                    </div>
                    {/* end of form email */}
                    <div className="py-4 submit">
                      <Button size="lg" type="submit" value="Submit" onSubmit={handleSubmit}>
                        Submit
                      </Button>
                    </div>
                    {/* end of form email */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
