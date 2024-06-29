import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar(){
    return(
        <>
            <div className="container-fluid position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <a href="" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <i className="fa fa-map-marker-alt me-3" />
          Tourist
        </h1>
        {/* <img src="img/logo.png" alt="Logo"> */}
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
        <span className="nav-item nav-link active">
          <NavLink to='/'>Home</NavLink></span>
          <span  className="nav-item nav-link">
          <NavLink to='/about'>About</NavLink></span>
          <span  className="nav-item nav-link">
          <NavLink to='/packages'>Packages</NavLink></span>        
          <span  className="nav-item nav-link">
          <NavLink to='/services'>Services</NavLink></span>
          <span  className="nav-item nav-link">
          <NavLink to='/contact'>Contact</NavLink></span>
        </div>
        
      </div>
    </nav>
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Enjoy Your Vacation With Us
            </h1>
            <p className="fs-4 text-white mb-4 animated slideInDown">
            The world is a book, and those who do not travel read only one page
            </p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
        
        </>
    );
}
export default Navbar;