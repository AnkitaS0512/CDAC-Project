import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <div>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a href="#" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
          <h2 className="m-0">
            <i className="fa fa-car" style={{ color: '#F3BD00' }}></i> Drivin
          </h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="/login" className="nav-item nav-link">Login</Link>
            <Link to="/register" className="nav-item nav-link">Register</Link>
          </div>
          <a href="/adminLogin" className="btn" style={{ backgroundColor: '#F3BD00', color: 'white' ,padding : "15px 5px" }}>
            <h4>Admin Login</h4> 
          </a>
        </div>
      </nav>
      {/* Navbar End */}

      {/* Carousel Start */}
      <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="0" className="active" aria-current="true"></button>
          <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="1"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="img/carousel-1.jpg" alt="First Slide" />
            <div className="carousel-caption d-flex align-items-center justify-content-center" style={{position:'absolute', right:0 , left:0 , bottom:0 }}>
              <div className="text-center">
                <h1 className="display-3 text-light mb-4">Learn To Drive With Confidence</h1>
                <Link to="/login" className="btn btn-warning text-white btn-lg">Start Now</Link>
              </div>
            </div>
          </div>

          <div className="carousel-item" >
            <img className="d-block w-100" src="img/carousel-2.jpg" alt="Second Slide" />
            <div className="carousel-caption d-flex align-items-center justify-content-center">
              <div className="text-center">
                <h1 className="display-3 text-light mb-4">Safe Driving Is Our Top Priority</h1>
                <Link to="/login" className="btn btn-warning text-white btn-lg">Start Now</Link>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Carousel End */}

      {/* Facts Section */}
      <div className="container-fluid facts py-5 pt-lg-0">
        <div className="container py-5 pt-lg-0">
          <div className="row gx-3">
            <div className="col-lg-4">
              <div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{ minHeight: '150px' }}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square" style={{ backgroundColor: '#F3BD00' }}>
                    <i className="fa fa-car text-white"></i>
                  </div>
                  <div className="ps-4">
                    <h5>Easy Driving Learn</h5>
                    <span>Clita erat ipsum lorem sit sed stet duo justo erat amet</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{ minHeight: '150px' }}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square" style={{ backgroundColor: '#F3BD00' }}>
                    <i className="fa fa-users text-white"></i>
                  </div>
                  <div className="ps-4">
                    <h5>National Instructor</h5>
                    <span>Clita erat ipsum lorem sit sed stet duo justo erat amet</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{ minHeight: '150px' }}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square" style={{ backgroundColor: '#F3BD00' }}>
                    <i className="fa fa-file-alt text-white"></i>
                  </div>
                  <div className="ps-4">
                    <h5>Get Licence</h5>
                    <span>Clita erat ipsum lorem sit sed stet duo justo erat amet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}
    </div>
  );
};

export default HomePage;
