import React from "react";

export default function Usage1() {
  return (
    <section className="flex flex-col gap-8 lg:flex-row justify-evenly">
      <div className="max-w-prose">
        <svg
          data-icon-name="package-alt"
          data-style="flat-line"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Flat Line"
          id="package-alt"
          className="icon flat-line"
          width="48"
          height="48"
        >
          <polygon
            style={{ fill: "rgb(175, 233, 201)", strokeWidth: "1px" }}
            points="20 7.5 12 11.5 4 7.5 12 3 20 7.5"
            id="secondary"
          ></polygon>
          <polyline
            style={{
              fill: "none",
              stroke: `rgb(34, 150, 101)`,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: " 1px",
            }}
            points="20 7.5 12 11.5 4 7.5"
            id="primary"
          ></polyline>
          <path
            style={{
              fill: "none",
              stroke: `rgb(34, 150, 101)`,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: " 1px",
            }}
            d="M12,21,4,16.5v-9L12,3l8,4.5v9Zm0-9.5V21"
            data-name="primary"
            id="primary-2"
          ></path>
          <polyline
            style={{
              fill: "none",
              stroke: `rgb(34, 150, 101)`,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: " 1px",
            }}
            points="16 14 16 9.5 12 7.5"
            data-name="primary"
            id="primary-3"
          ></polyline>
        </svg>
        <h2 className="mt-4 mb-2 text-2xl font-extrabold capitalize scroll-m-20">
          Sustainable Packaging.
        </h2>
        <p className="leading-7 tracking-wide opacity-75">
          Our packaging aims to fit the three R's of recycling. Reduce, reuse,
          and recycle. As we aim to have the small impact on the environment in
          Antigua & Barbuda
        </p>
      </div>
      <div className="max-w-prose">
        <svg
          data-icon-name="chemistry-2"
          data-style="flat-line"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Flat Line"
          id="chemistry-2"
          className="icon flat-line"
          width="48"
          height="48"
        >
          <path
            style={{ fill: "rgb(175, 233, 201)", strokeWidth: "1px" }}
            d="M17,9.55V4H13V9.55a4,4,0,1,0,4,0Z"
            id="secondary"
          ></path>
          <path
            style={{
              fill: "none",
              stroke: "rgb(34, 150, 101)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1px",
            }}
            d="M21,21H6a1,1,0,0,1-1-1V3"
            id="primary"
          ></path>
          <path
            style={{
              fill: "none",
              stroke: "rgb(34, 150, 101)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1px",
            }}
            d="M3,7H13M12,4h6M17,9.55V4H13V9.55a4,4,0,1,0,4,0Z"
            data-name="primary"
            id="primary-2"
          ></path>
        </svg>
        <h2 className="mt-4 mb-2 text-2xl font-extrabold capitalize scroll-m-20">
          Chemical Free Microgreens!
        </h2>
        <p className="leading-7 tracking-wide opacity-75">
          Our team ensures that the micogreens we sell are organically farmed
          and grown fully in soil. This means we abstain from using unnatural
          chemicals and fertilizers or pesticides.
        </p>
      </div>
      <div className="max-w-prose">
        <svg
          data-icon-name="store"
          data-style="flat-line"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Flat Line"
          id="store"
          className="icon flat-line"
          width="48"
          height="48"
        >
          <path
            style={{ fill: "rgb(175, 233, 201)", strokeWidth: "1px" }}
            d="M21,10.75a2.25,2.25,0,0,1-4.5,0,2.25,2.25,0,0,1-4.5,0,2.25,2.25,0,0,1-4.5,0,2.25,2.25,0,0,1-4.5,0,5.22,5.22,0,0,1,.21-1.47L4.79,3.73a1,1,0,0,1,1-.73h12.5a1,1,0,0,1,1,.73l1.58,5.55A5.22,5.22,0,0,1,21,10.75Z"
            id="secondary"
          ></path>
          <path
            style={{
              fill: "none",
              stroke: "rgb(34, 150, 101)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1px",
            }}
            d="M19,13v7a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V13"
            id="primary"
          ></path>
          <path
            style={{
              fill: "none",
              stroke: "rgb(34, 150, 101)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1px",
            }}
            d="M12,3h6.25a1,1,0,0,1,1,.73l1.58,5.55A5.22,5.22,0,0,1,21,10.75h0A2.25,2.25,0,0,1,18.75,13h0a2.25,2.25,0,0,1-2.25-2.25A2.25,2.25,0,0,1,14.25,13h0A2.25,2.25,0,0,1,12,10.75"
            data-name="primary"
            id="primary-2"
          ></path>
          <path
            style={{
              fill: "none",
              stroke: "rgb(34, 150, 101)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1px",
            }}
            d="M12,3H5.75a1,1,0,0,0-1,.73L3.21,9.28A5.22,5.22,0,0,0,3,10.75H3A2.25,2.25,0,0,0,5.25,13h0A2.25,2.25,0,0,0,7.5,10.75,2.25,2.25,0,0,0,9.75,13h0A2.25,2.25,0,0,0,12,10.75"
            data-name="primary"
            id="primary-3"
          ></path>
        </svg>
        <h2 className="mt-4 mb-2 text-2xl font-extrabold capitalize scroll-m-20">
          Freshly Grown In Antigua.
        </h2>
        <p className="leading-7 tracking-wide opacity-75">
          Our plants are harvested in a ten-day to a two-week cycle. We grow and
          harvest greens in an environment, without the use of chemicals or
          pesticides, to ensure a healthy and nutritional product.
        </p>
      </div>
    </section>
  );
}
