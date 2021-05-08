import React from 'react';
import products from '../lib/products.json';
import Cards from '../components/Cards.jsx';

export default function Product() {
  return (
    <div className="Products">
      <div className="wrapper my-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
          {products.map((item, index) => {
            return (
              <div key={index}>
                <Cards
                  Media={item.Image}
                  Price={item.Price}
                  Headline={item.Microgreen}
                  Body={item.Nutrients}
                  Colour={item.Colour}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
