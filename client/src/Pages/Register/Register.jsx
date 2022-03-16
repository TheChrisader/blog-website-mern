import { Link } from "react-router-dom";

import "./Register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="register-form">
        <label>Username</label>
        <input
          className="register-input"
          type="text"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          className="register-input"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="register-input"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="register-button">Register</button>
        <Link className="register-login-button" to="/login">
          Login
        </Link>
      </form>
    </div>
  );
}
