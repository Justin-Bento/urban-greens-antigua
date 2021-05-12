import React, { Component } from 'react';

export default class Cards extends Component {
  render() {
    return (
      <div>
        <div>
          <a href="#">
            <img
              src={`${this.props.Media}`}
              className="object-contain w-full h-56 bg-center rounded mb-1"
              alt="Kutty"
              loading="lazy"
            />
          </a>
          <p className="overline mb-1">{this.props.Price}</p>
          <h2 className="subtitle-1">
            <a href="#" className="mb-1 hover:text-green-700">
              {this.props.Headline}
            </a>
          </h2>
          <p className="line-clamp-3 body-2 mb-2">{this.props.Body}</p>
          <p className="caption">{this.props.Colour}</p>
        </div>
      </div>
    );
  }
}
