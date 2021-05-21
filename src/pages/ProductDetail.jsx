import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

export default function ProductDetail() {
  // Empty array in useState!
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch('/lib/products.json')
      .then((res) => res.json())
      .then((datas) => {
        setData(datas[id]);
        console.log(datas);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <div className="wrapper my-24">
        <div className="grid-2">
          <div className="cols-1">
            <div className="my-5">
              <p className="subtitle-2 text-green-600 tracking-wide">
                {data.Price}
              </p>
              <h1 className="headline-3">{data.Microgreen}</h1>
            </div>
            <div className="my-4">
              <h2 className="headline-6">Flavour</h2>
              <p className="body-2">{data.Flavour}</p>
            </div>
            <div className="my-4">
              <h2 className="headline-6">Varieties</h2>
              <p className="body-2">{data.Varieties}</p>
            </div>
            <div className="my-4">
              <h2 className="headline-6">Nutrients</h2>
              <p className="body-2">{data.Nutrients}</p>
            </div>
            <div className="my-4">
              <h2 className="headline-6">Colour</h2>
              <p className="body-2">{data.Colour}</p>
            </div>
          </div>
          <div className="cols-2">
            <img
              src={`/assets/products/${data.Image}`}
              alt={data.Microgreen}
              loading="lazy"
              className="w-full h-96 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
