import React from 'react';

export default function ProductDetail() {
  return (
    <div>
      <div className="wrapper my-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="">
            <p className="subtitle-2 uppercase tracking-wider text-green-600">
              $15 / 1oz pack
            </p>
            <h1 className="headline-2">Microgreen Product</h1>
          </div>
          <div className=""></div>
          <div className="cols-1">
            <div className="my-4">
              <h2 className="headline-5 text-gray-700">Flavor</h2>
              <p className="body-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                nemo ducimus totam modi officiis assumenda nulla ratione.
              </p>
            </div>
            <div className="my-4">
              <h2 className="headline-5 text-gray-700">Varieties</h2>
              <p className="body-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="my-4">
              <h2 className="headline-5 text-gray-700">Nutrients</h2>
              <p className="body-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                nemo ducimus totam modi officiis assumenda nulla ratione,
                accusantium aliquam repellat reprehenderit atque vero itaque
                unde esse ab vel perspiciatis fuga.
              </p>
            </div>
            <div className="my-4">
              <h2 className="headline-5 text-gray-700">Colour</h2>
              <p className="body-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex justify-between my-4">
              <button className="btn-light">Previous</button>
              <button className="btn-secondary">Next</button>
            </div>
          </div>
          <div className="cols-2">
            <div className="bg-gray-100 image roudned"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
