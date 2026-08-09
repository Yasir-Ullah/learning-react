import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          TextUtils
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          <div className="d-flex gap-3">
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                onClick={() => props.toggleMode("green")}
                className="form-check-input"
                type="checkbox"
                id="greenMode"
              />
              <label className="form-check-label" htmlFor="greenMode">
                Green
              </label>
            </div>

            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                onClick={() => props.toggleMode("red")}
                className="form-check-input"
                type="checkbox"
                id="redMode"
              />
              <label className="form-check-label" htmlFor="redMode">
                Red
              </label>
            </div>

            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                onClick={() => props.toggleMode("dark")}
                className="form-check-input"
                type="checkbox"
                id="darkMode"
              />
              <label className="form-check-label" htmlFor="darkMode">
                Dark
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
