import React from 'react';
import products from '../../public/lib/products.json';
import Cards from '../components/Cards.jsx';
import { Link } from 'react-router-dom';

export default function Product() {
  return (
    <div className="products">
      <div className="wrapper my-24">
        <div className="grid-3">
          {products.map((product) => {
            return (
              <div key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <Cards
                    Media={`../../assets/products/${product.Image}`}
                    Price={product.Price}
                    Headline={product.Microgreen}
                    Body={product.Nutrients}
                    Colour={product.Colour}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
