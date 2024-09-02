import React, { Component } from "react";

export default class Cards extends Component {
  render() {
    return (
      <div id="card" className="rounded-lg border shadow-xs space-y-2 p-6 hover:border-green-600">
        <img src={`${this.props.Media}`} className="w-full object-contain aspect-video bg-center rounded mb-1" alt="Kutty" loading="lazy" />
        <p className="text-xs uppercase text-green-600 mb-1">{this.props.Price}</p>
        <h2 className="text-xl font-semibold leading-none tracking-tight align-middle subpixel-antialiased">{this.props.Headline}</h2>
        <p className="text-sm tracking-wide leading-5 line-clamp-3 text-gray-600">{this.props.Body}</p>
        <span className="block border border-gray-200 w-20"></span>
        <p className="align-middle subpixel-antialiased text-sm text-gray-500 leading-normal capitalize">{this.props.Colour}</p>
      </div>
    );
  }
}
