import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const user = false;
  return (
    <div className="navbar">
      <div className="top-left">
        <i className="top-icon fab fa-facebook-square"></i>
        <i className="top-icon fab fa-twitter-square"></i>
        <i className="top-icon fab fa-pinterest-square"></i>
        <i className="top-icon fab fa-instagram-square"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="link" to="/post/:id">
              ABOUT
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="link" to="/post/:id">
              CONTACT
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="top-list-item">LOGOUT</li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="top-img"
              src="https://images.pexels.com/photos/9532788/pexels-photo-9532788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </Link>
        ) : (
          <ul className="top-list">
            <li className="top-list-item">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="top-list-item">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
        <i className="top-search-icon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Navbar;
