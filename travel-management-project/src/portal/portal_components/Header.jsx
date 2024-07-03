// import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
    <div className="container-fluid position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <a href="" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <i className="fa fa-map-marker-alt me-3" />
          Tourist
        </h1>
        {/* <img src="/portal_assets/img/logo.png" alt="Logo" /> */}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <NavLink to ="/" className="nav-item nav-link active">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-item nav-link">
            About
          </NavLink>
          <NavLink to="/service" className="nav-item nav-link">
            Services
          </NavLink>
          <NavLink to="/Packages" className="nav-item nav-link">
            Packages
          </NavLink>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div className="dropdown-menu m-0">
              <a href="destination.html" className="dropdown-item">
                Destination
              </a>
              <a href="booking.html" className="dropdown-item">
                Booking
              </a>
              <a href="team.html" className="dropdown-item">
                Travel Guides
              </a>
              <a href="testimonial.html" className="dropdown-item">
                Testimonial
              </a>
              <a href="404.html" className="dropdown-item">
                404 Page
              </a>
            </div>
          </div>
          <NavLink to="/Contacts" className="nav-item nav-link">
            Contact
          </NavLink>
        </div>
        <NavLink to="/Register" className="btn btn-primary rounded-pill py-2 px-4">
          Register
        </NavLink>
      </div>
    </nav>
        </div>
    );
};

export default Header;