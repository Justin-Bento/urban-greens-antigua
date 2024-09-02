import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards.jsx';
import { Link } from 'react-router-dom';
import NotFound from '../components/NotFound.jsx';
import Loading from '../components/Loading.jsx';

export default function Product() {
  // Empty array in useState!
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((datas) => {
        setData(datas);
        // console.log(datas);
      })
      .catch((err) => {
        // console.log(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  // if (loading) {
  //   return <Loading />;
  // }
  if (error || !Array.isArray(data)) {
    return <Loading />;
  }
  return (
    <>
      <main className="">
        <div className="products">
          <div className="wrapper my-24">
            <div className="mb-12 space-y-2">
              <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight">
                Fresh Microgreens: Nutrient-Packed Greens for Every Dish
              </h1>
              <p className="leading-5 tracking-wide text-balance">
                Our fresh, microgreens are the perfect way to enhance your meals with vibrant flavors. Whether you&#39;re looking to add a
                crisp touch to salads, a flavorful boost to sandwiches, or a nutritious garnish to your favorite dishes, our microgreens are
                grown with care.
              </p>
            </div>
            <div className="grid3">
              {data.map((data) => {
                return (
                  <div key={data.id}>
                    <Link to={`/products/${data.id}`}>
                      <Cards
                        Media={`../../assets/products/${data.Image}`}
                        Price={data.Price}
                        Headline={data.Microgreen}
                        Body={data.Nutrients}
                        Colour={data.Colour}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
