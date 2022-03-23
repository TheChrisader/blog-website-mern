import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";

import "./Navbar.css";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);

  const PF = "http://localhost:8000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

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
          {user && (
            <li className="top-list-item" onClick={handleLogout}>
              LOGOUT
            </li>
          )}
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <Link className="link" to="/settings">
            <img className="top-img" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="top-list">
            <li className="top-list-item">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="top-list-item">
              <Link className="link" to="/register">
                REGISTER
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
