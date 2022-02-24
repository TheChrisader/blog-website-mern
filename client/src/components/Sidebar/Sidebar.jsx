import { Link } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">About Me</span>
        <img
          src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="sidebar"
          className="sidebar-img"
        />
        <p className="sidebar-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
          consequatur delectus dignissimos quia illo molestias
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">Categories</span>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <Link className="link" to="/posts?cat=life">
              Life
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Link className="link" to="/posts?cat=music">
              Music
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Link className="link" to="/posts?cat=style">
              Style
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Link className="link" to="/posts?cat=sports">
              Sports
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Link className="link" to="/posts?cat=cinema">
              Cinema
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Link className="link" to="/posts?cat=technology">
              Technology
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">Follow Us</span>
        <div className="sidebar-social">
          <i className="sidebar-icon fab fa-facebook-square"></i>
          <i className="sidebar-icon fab fa-twitter-square"></i>
          <i className="sidebar-icon fab fa-pinterest-square"></i>
          <i className="sidebar-icon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
