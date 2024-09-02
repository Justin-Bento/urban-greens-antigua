import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

export default function ProductDetail() {
  // Empty array in useState!
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((datas) => {
        setData(datas[id]);
        // console.log(datas);
      })
      .catch((err) => {
        // console.log(err);
        setError(err);
      });
  }, []);
  return (
    <>
      <main className="">
        <div>
          <div className="wrapper my-40">
            <div className="grid2">
              <div className="cols-1">
                <div className="my-6">
                  <p className="subtitle-2 uppercase font-bold text-green-600 tracking-wider">{data.Price}</p>
                  <h1 className="headline2 mb-4">{data.Microgreen}</h1>
                </div>
                <div className="my-6">
                  <h2 className="headline6">Flavour</h2>
                  <p className="body1">{data.Flavour}</p>
                </div>
                <div className="my-6">
                  <h2 className="headline6">Varieties</h2>
                  <p className="body1">{data.Varieties}</p>
                </div>
                <div className="my-6">
                  <h2 className="headline6">Nutrients</h2>
                  <p className="body1">{data.Nutrients}</p>
                </div>
                <div className="my-6">
                  <h2 className="headline6">Colour</h2>
                  <p className="body1">{data.Colour}</p>
                </div>
              </div>
              <div className="cols-2">
                <img src={`/assets/products/${data.Image}`} alt={data.Microgreen} loading="lazy" className="w-full h-96 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
