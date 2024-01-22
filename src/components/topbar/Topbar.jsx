import React from 'react';
import "./Topbar.css";

const Topbar = () => {
  return (
    <>
    <div id="topbar" className="topbar d-flex align-items-center">
     <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="social-links d-none d-md-flex align-items-center">
        <a href="#!" className="facebook"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#!" className="twitter"><i className="fa-brands fa-x-twitter"></i></a>
        <a href="#!" className="instagram"><i className="fa-brands fa-instagram"></i></a>
        <a href="#!" className="youtube"><i className="fa-brands fa-youtube"></i></a>
        <a href="#!" className="pinterest"><i className="fa-brands fa-pinterest"></i></a>
        <a href="#!" className="linkedin"><i className="fa-brands fa-linkedin"></i></a>
        <a href="#!" className="whatsapp"><i className="fa-brands fa-whatsapp"></i></a>
      </div>
      <div className="contact-info d-flex align-items-center">
        <a href="#!" className='topbar-links'>All Products</a>
        <a href="#!" className='topbar-links'>Become our Partner</a>
        <a href="#!" className='topbar-links'>Contact Us</a>
      </div>
    </div>
  </div>
    </>
  )
}

export default Topbar