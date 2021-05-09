import React from 'react';

export default function Contact() {
  return (
    <div className="Contact">
      <div className="wrapper">
        <div className="my-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div className="1">
              <h1 className="h2">Contact</h1>
            </div>
            <div className="2">
                <label class="block my-8">
                <span class="text-gray-700">Name</span>
                <input class="form-input rounded  px-2 h-10 block w-full border-1 border-gray-400" placeholder="Jane Doe"/>
                </label>
                <label class="block my-8">
                <span class="text-gray-700">Email</span>
                <input class="form-input rounded  px-2 h-10 block w-full border-1 border-gray-400" placeholder="Jane Doe"/>
                </label>
                <label class="block my-8">
                <span class="text-gray-700">Message</span>
                <input class="form-input rounded  px-2 h-10 block w-full border-1 border-gray-400" placeholder="Jane Doe"/>
                </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
