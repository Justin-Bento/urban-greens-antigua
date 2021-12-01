import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Cards extends Component {
  render() {
    return (
      <div id="card" className="cardAnimation">
        <img src={`${this.props.Media}`} className="cardImage" alt="Kutty" loading="lazy" />
        <p className="overline text-green-600 mb-1">{this.props.Price}</p>
        <h2 className="subtitle1">{this.props.Headline}</h2>
        <p className="line-clamp-3 body2 mb-2">{this.props.Body}</p>
        <p className="caption capitalize">{this.props.Colour}</p>
      </div>
    );
  }
}
