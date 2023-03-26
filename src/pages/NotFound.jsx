import React from "react";
import "@styles/NotFound.scss";

const NotFound = () => {
  return (
    <div className="NotFound-container">
      <div className="NotFound-sub-container">
        <h1 className="NotFound-title">404</h1>
        <h2 className="NotFound-subtitle">Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <a href="/">
          <button className="primary-button">Go to Home</button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
