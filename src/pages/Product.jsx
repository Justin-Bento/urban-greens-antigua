import React, { useState, useEffect } from "react";
import Cards from "../components/Cards.jsx";
import { Link } from "react-router-dom";
import NotFound from "../components/NotFound.jsx";
import Loading from "../components/Loading.jsx";

export default function Product() {
  // Empty array in useState!
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    fetch("/data/products.json")
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
      <main className="mx-auto xl:container p-4 sm:px-6 lg:px-8 min-h-dvh">
        <section className="my-12">
          <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight">
            Fresh Microgreens: Nutrient-Packed Greens for Every Dish
          </h1>
          <p className="leading-5 tracking-wide text-balance mt-2">
            Our fresh, microgreens are the perfect way to enhance your meals with vibrant flavors. Whether you&#39;re
            looking to add a crisp touch to salads, a flavorful boost to sandwiches, or a nutritious garnish to your
            favorite dishes, our microgreens are grown with care.
          </p>
          <span className="block border-2 w-24 border-green-700 rounded-full mt-6"></span>
        </section>
        <section className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {data.map((data) => {
            return (
              <Link key={data.id} to={`/products/${data.id}`}>
                <Cards
                  Media={`../../assets/products/${data.Image}`}
                  Price={data.Price}
                  Headline={data.Microgreen}
                  Body={data.Nutrients}
                  Colour={data.Colour}
                />
              </Link>
            );
          })}
        </section>
      </main>
    </>
  );
}
