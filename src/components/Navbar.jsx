import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="ml-14 mt-3 navbar-brand">
          <img
            src="images/logo.svg"
            alt="Dhanlaxmi"
            className="w-44 mx-auto mb-4"
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item">
              <a className="nav" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Chart
              </a>
            </li>
            <li className="nav-item d-lg-none">
              <button className="btn btn-warning">Download</button>
            </li>
          </ul>
        </div>
        <button className="btn btn-warning d-none d-lg-block">Download</button>
      </div>
    </nav>
  );
}

export default Navbar;
