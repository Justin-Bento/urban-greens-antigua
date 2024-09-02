import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
  render() {
    return (
      <>
        <main className="wrapper my-24">
          <div className="notFoundGrid">
            <div className="notFoundItem1">
              <p className="overline text-gray-500">Error 404</p>
              <h1 className="headline2 my-4">Oops! The page you're looking for isn't here.</h1>
              <p className="body1 mb-8">You might have the wrong address, or the page may have moved.</p>
              <Link to="/" className="btnLight">
                Back to homepage
              </Link>
            </div>
            <div className="notFoundItem2">
              <div className="w-full h-full py-48 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </main>
      </>
    );
  }
}
