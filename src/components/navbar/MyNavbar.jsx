import React, { useRef } from 'react';
import "./MyNavbar.css";
import logo from "../../assets/citycabslogo.webp";
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  const navbarTogglerRef = useRef(null);

  const closeNav = () => {
    if (navbarTogglerRef.current && navbarTogglerRef.current.getAttribute('aria-expanded') === 'true') {
      navbarTogglerRef.current.click();
    }
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/" onClick={closeNav}>
            <img src={logo} alt="logo" className='img-fluid'/>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            ref={navbarTogglerRef}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" exact to="/" onClick={closeNav}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/about-us" onClick={closeNav}>
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/city-cabs-future" onClick={closeNav}>
                  City Cabs for Future
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/our-partners" onClick={closeNav}>
                  Our Partners
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/blog" onClick={closeNav}>
                  Blog
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <a href="https://wa.me/919706393924" className='nav__button'><i className='bi bi-whatsapp me-1'></i> Send Hi on Whatsapp</a>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MyNavbar;
