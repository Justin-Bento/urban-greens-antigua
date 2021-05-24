import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Cards extends Component {
  render() {
    return (
      <div
        id="card"
        className="transition duration-150 border border-transparent hover:shadow-sm hover:border-gray-100 p-4 rounded"
      >
        <img
          src={`${this.props.Media}`}
          className="object-contain w-full h-56 bg-center rounded mb-1"
          alt="Kutty"
          loading="lazy"
        />
        <p className="overline text-green-600 mb-1">{this.props.Price}</p>
        <h2 className="subtitle-1">{this.props.Headline}</h2>
        <p className="line-clamp-3 body-2 mb-2">{this.props.Body}</p>
        <p className="caption capitalize">{this.props.Colour}</p>
      </div>
    );
  }
}
