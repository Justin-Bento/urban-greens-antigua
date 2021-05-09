import React, { Component } from 'react';

export default class Cards extends Component {
  render() {
    return (
      <div>
        <div>
          <a href="#">
            <img
              src={`../src/assets/products/${this.props.Media}`}
              className="object-contain w-full h-56 mb-5 bg-center rounded"
              alt="Kutty"
              loading="lazy"
            />
          </a>
          <p className="mb-3 text-sm font-normal text-gray-500">
            {this.props.Price}
          </p>
          <h2 className="mb-2 text-lg font-semibold text-gray-900 capitalize">
            <a href="#" className="text-gray-900 hover:text-purple-700">
              {this.props.Headline}
            </a>
          </h2>
          <p className="line-clamp-3 mb-3 text-sm font-normal text-gray-500">
            {this.props.Body}
          </p>
          <p className="mb-3 text-sm font-normal text-gray-500">
            {this.props.Colour}
          </p>
        </div>
      </div>
    );
  }
}
