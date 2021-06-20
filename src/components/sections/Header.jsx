import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="header-wrapper">
            <h1 className="title">Sycous</h1>
            <h2 className="title__sub-text">Consumer List</h2>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
