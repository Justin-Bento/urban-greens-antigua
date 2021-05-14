import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
  render() {
    return (
      <section className="wrapper my-24">
        <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-24">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
              Error 404
            </p>
            <h1 className="headline-2 my-4">
              Oops! The page you're looking for isn't here.
            </h1>
            <p className="body-1 mb-8">
              You might have the wrong address, or the page may have moved.
            </p>
            <Link to="/" className="btn-light">
              Back to homepage
            </Link>
          </div>
          <div>
            <div className="w-full h-full py-48 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </section>
    );
  }
}
