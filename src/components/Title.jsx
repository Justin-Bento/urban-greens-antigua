import React from "react";

export default function Title(props) {
  return (
    <section className="my-12">
      <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight">
        {props.Headline}
      </h1>
      <p className="leading-5 tracking-wide text-balance mt-2">
        {props.Description}
      </p>
      <span className="block border-2 w-24 border-green-700 rounded-full mt-6"></span>
    </section>
  );
}
