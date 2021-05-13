import React from 'react';

export default function Contact() {
  return (
    <div className="Contact">
      <div className="wrapper">
        <div className="my-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 md:gap-12 lg:gap-20">
            <div className="1">
              <h1 className="headline-3 mb-2">Contact</h1>
              <p className="body-2 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                est officia, illum, optio ex provident molestiae dignissimos
                ipsam velit doloremque dolores debitis magni cupiditate ab
                praesentium facilis nesciunt. Assumenda!
              </p>
              <div className="my-8">
                <h2 className="headline-6">Don't Hesitate To reach out!</h2>
                <div className="my-2">
                  <p className="body-2">WhatsApp: +1 662-728-2030</p>
                </div>
                <div className="my-2">
                  <p className="body-2">Email: hello@urbangreensanu.com</p>
                </div>
                <div className="my-2">
                  <p className="body-2">Direct:+1 268-728-2030 </p>
                </div>
              </div>
            </div>
            <div className="2">
              <label class="block my-8">
                <span class="text-gray-700">Name</span>
                <input
                  class="form-input rounded  px-2 h-10 block w-full border-1 border-gray-400"
                  placeholder="Jane Doe"
                />
              </label>
              <label class="block my-8">
                <span class="text-gray-700">Email</span>
                <input
                  class="form-input rounded  px-2 h-10 block w-full border-1 border-gray-400"
                  placeholder="Jane Doe"
                />
              </label>
              <label class="block my-8">
                <span class="text-gray-700">Message</span>
                <input
                  class="form-input rounded  px-2 h-10 block w-full border-1 border-gray-400"
                  placeholder="Jane Doe"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
