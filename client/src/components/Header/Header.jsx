import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-titles">
        <span className="header-title-small">React & Node</span>
        <span className="header-title-large">Blog</span>
      </div>
      <img
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Header"
        className="header-img"
      />
    </div>
  );
};

export default Header;
