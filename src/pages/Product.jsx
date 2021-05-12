import React from 'react';
import products from '../lib/products.json';
import Cards from '../components/Cards.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';

export default function Product() {
  return (
    <div className="Products">
      <div className="wrapper my-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
          {products.map((item, index) => {
            return (
              <div key={index}>
                <Link to={`/product/${item.id}`}>
                  <Cards
                    Media={`../../assets/products/${item.Image}`}
                    Price={item.Price}
                    Headline={item.Microgreen}
                    Body={item.Nutrients}
                    Colour={item.Colour}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
