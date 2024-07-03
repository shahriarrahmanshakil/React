// import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Team = () => {
    return (
        <div className="wrapper">
                <Navbar/>
                <Sidebar/>
            <div className='content-wrapper'>
  <div className="wrapper">
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <h5 className="mb-2">Info Box</h5>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box">
                <span className="info-box-icon bg-info">
                  <i className="far fa-envelope" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Messages</span>
                  <span className="info-box-number">1,410</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box">
                <span className="info-box-icon bg-success">
                  <i className="far fa-flag" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Bookmarks</span>
                  <span className="info-box-number">410</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box">
                <span className="info-box-icon bg-warning">
                  <i className="far fa-copy" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Uploads</span>
                  <span className="info-box-number">13,648</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box">
                <span className="info-box-icon bg-danger">
                  <i className="far fa-star" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Likes</span>
                  <span className="info-box-number">93,139</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          {/* =========================================================== */}
          <h5 className="mb-2">
            Info Box With Custom Shadows{" "}
            <small>
              <i>Using Bootstraps Shadow Utility</i>
            </small>
          </h5>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box shadow-none">
                <span className="info-box-icon bg-info">
                  <i className="far fa-envelope" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Shadows</span>
                  <span className="info-box-number">None</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box shadow-sm">
                <span className="info-box-icon bg-success">
                  <i className="far fa-flag" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Shadows</span>
                  <span className="info-box-number">Small</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box shadow">
                <span className="info-box-icon bg-warning">
                  <i className="far fa-copy" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Shadows</span>
                  <span className="info-box-number">Regular</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box shadow-lg">
                <span className="info-box-icon bg-danger">
                  <i className="far fa-star" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Shadows</span>
                  <span className="info-box-number">Large</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          {/* =========================================================== */}
        </div>
        {/* /.container-fluid */}
      </section>
      {/* /.content */}
      <a
        id="back-to-top"
        href="#"
        className="btn btn-primary back-to-top"
        role="button"
        aria-label="Scroll to top"
      >
        <i className="fas fa-chevron-up" />
      </a>
  </div>
  {/* ./wrapper */}


                <Footer/>
            </div>
        </div>
    );
};

export default Team;