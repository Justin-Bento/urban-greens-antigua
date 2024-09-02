import React, { Component } from "react";

export default class Cards extends Component {
  render() {
    return (
      <div id="card" className="transition duration-150 border border-transparent hover:shadow-sm hover:border-gray-100 p-4 rounded">
        <img src={`${this.props.Media}`} className="object-contain w-full h-56 bg-center rounded mb-1" alt="Kutty" loading="lazy" />
        <p className="text-xs uppercase text-green-600 mb-1">{this.props.Price}</p>
        <h2 className="align-middle antialiased text-base text-gray-900 font-bold capitalize leading-normal">{this.props.Headline}</h2>
        <p className="line-clamp-3 align-middle antialiased text-sm max-w-full text-gray-800 leading-5 tracking-wide mb-2">{this.props.Body}</p>
        <p className="align-middle subpixel-antialiased text-sm text-gray-500 leading-normal capitalize">{this.props.Colour}</p>
      </div>
    );
  }
}
